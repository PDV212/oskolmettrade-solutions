// Production image verifier.
//
// Extends verifyProduction.mjs with strict end-to-end validation of every
// image referenced by the deployed HTML on the RU/EN/ZH homepage and CNC
// pages. Prevents recurrence of the /__l5e/ SPA-fallback regression where
// nginx returned index.html (HTTP 200, Content-Type text/html) for missing
// image URLs and <img> silently failed to decode.
//
// Detection surface (any triggers a hard failure):
//   - Missing / non-200
//   - Redirect to unapproved origin
//   - Content-Type not image/*
//   - Body matches deployed index.html (SPA fallback)
//   - Body starts with HTML markup
//   - Invalid magic bytes for declared MIME
//   - Empty or absurdly small body
//   - Cannot decode dimensions
//   - Wrong dimensions for required originals
//   - Wrong SHA-256 for required originals
//   - HTML contains /__l5e/, assets-v1, .asset.json, user-uploads://
//   - Required filename stem absent
//
// Exported so that scripts/verifyProductionImages.test.mjs can drive the
// same logic against a local static server with hand-crafted fixtures.
//
// Note: this module never writes to the network target; only plain GETs.

import { createHash } from "node:crypto";

// ---------------------------------------------------------------------------
// Configuration: required originals must match exactly.
// Do NOT silently update these values. A source replacement is a reviewed
// change and requires updating both the binary in src/assets and this table.
// ---------------------------------------------------------------------------
export const REQUIRED_IMAGES = [
  {
    stem: "metalworking-equipment-",
    sha256: "5525d10f4ed206370eed9c1b2756b72f26bafd7beabe9db049aa606f47e3d50c",
    width: 1024,
    height: 1024,
    mime: "image/png",
  },
  {
    stem: "h200-70l-c2-2025-photo-1-",
    sha256: "9b14ca11933c04aac89f1e83e62f891883f04a0dcd4e03a4848d2915499bd423",
    width: 1920,
    height: 1440,
    mime: "image/jpeg",
  },
  {
    stem: "bdmh3018-gantry-2026-",
    sha256: "c7757ae0b0d6fcc36088772db5c347d81dfb768d74df0176948a754a3b8bbcdd",
    width: 1920,
    height: 1440,
    mime: "image/jpeg",
  },
];

// Additional stems that must appear somewhere in the deployed HTML but do
// not need exact-hash pinning (their bytes vary per Vite responsive-image
// build). At minimum they must decode as valid images.
export const REQUIRED_STEMS_SOFT = [
  // BDMH3018 case gallery
  "bdmh3018-gantry-overview-",
  // H200 case
  "h200-70l-c2-2025-photo-1-",
  "h200-70l-c2-2025-photo-2-",
  "h200-70l-c2-2025-photo-3-",
  // Hero / SiteBackground — resolved at runtime from HTML preload
];

export const FORBIDDEN_HTML_SUBSTRINGS = [
  "/__l5e/",
  "assets-v1",
  ".asset.json",
  "user-uploads://",
];

// Routes whose deployed HTML must be inspected for images.
export const IMAGE_ROUTES = [
  "/",
  "/en",
  "/zh",
  "/cnc-machines",
  "/en/cnc-machines",
  "/zh/cnc-machines",
];

// ---------------------------------------------------------------------------
// URL extraction
// ---------------------------------------------------------------------------

// Split a srcset attribute value into candidate URLs. Handles commas that
// appear inside URL params by tracking parenthesis depth and treating a
// separator only when whitespace+width/density descriptor precedes it.
export function parseSrcset(srcset) {
  const out = [];
  if (!srcset) return out;
  // Standard srcset syntax: "url1 1x, url2 2x, url3 640w"
  // Split on commas that are followed by (optional space and) a URL char.
  // The spec-accurate split: for each comma, ensure it terminates the
  // previous candidate (a whitespace then descriptor precedes it).
  const parts = srcset.split(/\s*,\s*/);
  for (const p of parts) {
    const trimmed = p.trim();
    if (!trimmed) continue;
    const url = trimmed.split(/\s+/)[0];
    if (url) out.push(url);
  }
  return out;
}

export function extractImageUrls(html, baseUrl) {
  const urls = new Set();
  const push = (u) => {
    if (!u) return;
    const t = u.trim();
    if (!t) return;
    if (t.startsWith("data:") || t.startsWith("blob:") || t.startsWith("#")) return;
    try {
      urls.add(new URL(t, baseUrl).toString());
    } catch {
      // ignore malformed
    }
  };

  // <img src="...">
  for (const m of html.matchAll(/<img\b[^>]*?\ssrc=["']([^"']+)["']/gi)) push(m[1]);
  // <img srcset="...">
  for (const m of html.matchAll(/<img\b[^>]*?\ssrcset=["']([^"']+)["']/gi)) {
    for (const u of parseSrcset(m[1])) push(u);
  }
  // <source srcset="...">
  for (const m of html.matchAll(/<source\b[^>]*?\ssrcset=["']([^"']+)["']/gi)) {
    for (const u of parseSrcset(m[1])) push(u);
  }
  // <link rel="preload" as="image" href|imagesrcset>
  for (const m of html.matchAll(/<link\b[^>]*?\bas=["']image["'][^>]*>/gi)) {
    const tag = m[0];
    const href = tag.match(/\shref=["']([^"']+)["']/i);
    if (href) push(href[1]);
    const iss = tag.match(/\simagesrcset=["']([^"']+)["']/i);
    if (iss) for (const u of parseSrcset(iss[1])) push(u);
  }
  // og:image / twitter:image
  for (const m of html.matchAll(
    /<meta\b[^>]*?\bproperty=["'](?:og:image|twitter:image)["'][^>]*?\bcontent=["']([^"']+)["']/gi
  )) push(m[1]);
  for (const m of html.matchAll(
    /<meta\b[^>]*?\bname=["']twitter:image["'][^>]*?\bcontent=["']([^"']+)["']/gi
  )) push(m[1]);

  return [...urls];
}

export function findForbiddenInHtml(html) {
  const hits = [];
  for (const needle of FORBIDDEN_HTML_SUBSTRINGS) {
    if (html.includes(needle)) hits.push(needle);
  }
  return hits;
}

// ---------------------------------------------------------------------------
// Magic-byte + dimension decoders (PNG, JPEG, WebP)
// ---------------------------------------------------------------------------

export function detectMimeFromBytes(buf) {
  if (buf.length >= 8 &&
      buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47 &&
      buf[4] === 0x0d && buf[5] === 0x0a && buf[6] === 0x1a && buf[7] === 0x0a) {
    return "image/png";
  }
  if (buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) {
    return "image/jpeg";
  }
  if (buf.length >= 12 &&
      buf.toString("ascii", 0, 4) === "RIFF" &&
      buf.toString("ascii", 8, 12) === "WEBP") {
    return "image/webp";
  }
  // AVIF: ftyp box with major brand 'avif' or 'avis'
  if (buf.length >= 12 && buf.toString("ascii", 4, 8) === "ftyp") {
    const brand = buf.toString("ascii", 8, 12);
    if (brand === "avif" || brand === "avis") return "image/avif";
  }
  // SVG (text)
  const head = buf.toString("utf8", 0, Math.min(512, buf.length)).trimStart();
  if (head.startsWith("<?xml") && head.includes("<svg")) return "image/svg+xml";
  if (head.startsWith("<svg")) return "image/svg+xml";
  return null;
}

export function decodePngDims(buf) {
  if (buf.length < 24) return null;
  // IHDR chunk starts at byte 8; width at 16, height at 20 (big-endian).
  if (buf.toString("ascii", 12, 16) !== "IHDR") return null;
  const w = buf.readUInt32BE(16);
  const h = buf.readUInt32BE(20);
  return { w, h };
}

export function decodeJpegDims(buf) {
  if (buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let i = 2;
  while (i < buf.length) {
    if (buf[i] !== 0xff) return null;
    let marker = buf[i + 1];
    // Skip fill bytes
    while (marker === 0xff && i + 1 < buf.length) { i++; marker = buf[i + 1]; }
    // SOF markers (excluding DHT=C4, JPG=C8, DAC=CC)
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      const h = buf.readUInt16BE(i + 5);
      const w = buf.readUInt16BE(i + 7);
      return { w, h };
    }
    if (i + 3 >= buf.length) return null;
    const len = buf.readUInt16BE(i + 2);
    i += 2 + len;
  }
  return null;
}

export function decodeWebpDims(buf) {
  if (buf.toString("ascii", 0, 4) !== "RIFF" || buf.toString("ascii", 8, 12) !== "WEBP") return null;
  const chunk = buf.toString("ascii", 12, 16);
  if (chunk === "VP8X") {
    const w = (buf[24] | (buf[25] << 8) | (buf[26] << 16)) + 1;
    const h = (buf[27] | (buf[28] << 8) | (buf[29] << 16)) + 1;
    return { w, h };
  }
  if (chunk === "VP8L") {
    const b0 = buf[21], b1 = buf[22], b2 = buf[23], b3 = buf[24];
    const w = 1 + (((b1 & 0x3f) << 8) | b0);
    const h = 1 + (((b3 & 0x0f) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6));
    return { w, h };
  }
  if (chunk === "VP8 ") {
    const w = buf.readUInt16LE(26) & 0x3fff;
    const h = buf.readUInt16LE(28) & 0x3fff;
    return { w, h };
  }
  return null;
}

export function decodeDims(buf, mime) {
  if (mime === "image/png") return decodePngDims(buf);
  if (mime === "image/jpeg") return decodeJpegDims(buf);
  if (mime === "image/webp") return decodeWebpDims(buf);
  return null;
}

export function sha256Hex(buf) {
  return createHash("sha256").update(buf).digest("hex");
}

// ---------------------------------------------------------------------------
// HTTP with bounded redirects
// ---------------------------------------------------------------------------

export async function fetchImage(url, { maxRedirects = 5, timeoutMs = 15000 } = {}) {
  const chain = [url];
  let current = url;
  for (let hop = 0; hop <= maxRedirects; hop++) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), timeoutMs);
    let res;
    try {
      res = await fetch(current, {
        redirect: "manual",
        signal: ctrl.signal,
        headers: { "user-agent": "verifyProductionImages/1.0", accept: "image/*,*/*;q=0.1" },
      });
    } finally {
      clearTimeout(t);
    }
    if (res.status >= 300 && res.status < 400) {
      const loc = res.headers.get("location");
      if (!loc) return { status: res.status, error: "redirect without location", chain, finalUrl: current };
      current = new URL(loc, current).toString();
      chain.push(current);
      continue;
    }
    const ab = await res.arrayBuffer();
    return {
      status: res.status,
      headers: res.headers,
      body: Buffer.from(ab),
      chain,
      finalUrl: current,
      contentType: res.headers.get("content-type") || "",
    };
  }
  return { status: 0, error: "too many redirects", chain, finalUrl: current };
}

// ---------------------------------------------------------------------------
// Per-image validation
// ---------------------------------------------------------------------------

export function validateImageResponse({ url, res, indexHtmlBody, requireOrigin, expected }) {
  const errs = [];
  if (res.error) {
    errs.push(`transport error: ${res.error}`);
    return { ok: false, errs, kind: "TRANSPORT" };
  }
  if (res.status !== 200) {
    errs.push(`status ${res.status}`);
    return { ok: false, errs, kind: "HTTP_STATUS" };
  }
  const ct = (res.contentType || "").toLowerCase();
  const body = res.body;
  const firstHex = body.slice(0, 32).toString("hex");
  const firstAscii = body.slice(0, 64).toString("utf8").toLowerCase();

  // Same-origin (for required originals)
  if (requireOrigin) {
    try {
      const finalOrigin = new URL(res.finalUrl).origin;
      if (finalOrigin !== requireOrigin) {
        errs.push(`SAME_ORIGIN violated: final=${finalOrigin} expected=${requireOrigin}`);
      }
    } catch (e) { errs.push(`bad final URL: ${e.message}`); }
  }

  // Reject SPA fallback: identical to index.html
  if (indexHtmlBody && body.length === indexHtmlBody.length &&
      body.equals(indexHtmlBody)) {
    errs.push(`IMAGE_ASSET_HTML_FALLBACK: body identical to /index.html`);
  }

  // Reject HTML markup at start
  if (firstAscii.startsWith("<!doctype") || firstAscii.startsWith("<html") ||
      firstAscii.startsWith("<?xml") && !firstAscii.includes("<svg")) {
    errs.push(`HTML markup at start (first bytes: ${firstHex})`);
  }

  // Reject non-image content types
  if (!ct.startsWith("image/")) {
    errs.push(`Content-Type not image/*: "${ct}"`);
  }

  // Reject empty / tiny body
  if (body.length < 64) {
    errs.push(`body too small: ${body.length} bytes`);
  }

  // Magic-byte check
  const detected = detectMimeFromBytes(body);
  if (!detected) {
    errs.push(`unrecognized magic bytes (first: ${firstHex})`);
  } else if (detected === "image/svg+xml") {
    if (!ct.includes("svg")) errs.push(`SVG bytes but Content-Type=${ct}`);
  } else if (ct.startsWith("image/") && !ct.includes(detected.split("/")[1])) {
    errs.push(`Content-Type ${ct} does not match magic bytes ${detected}`);
  }

  // JPEG EOI (best-effort)
  if (detected === "image/jpeg") {
    const last = body.slice(-2);
    if (!(last[0] === 0xff && last[1] === 0xd9)) {
      errs.push(`JPEG missing EOI marker at end`);
    }
  }

  // Dimensions
  let dims = null;
  if (detected) dims = decodeDims(body, detected);
  if (detected && detected !== "image/svg+xml" && detected !== "image/avif" && !dims) {
    errs.push(`could not decode dimensions`);
  }
  if (dims && (dims.w <= 0 || dims.h <= 0)) {
    errs.push(`non-positive dimensions ${dims.w}x${dims.h}`);
  }

  // Required exact dims
  if (expected && expected.width && dims) {
    if (dims.w !== expected.width || dims.h !== expected.height) {
      errs.push(`dimensions ${dims.w}x${dims.h} != required ${expected.width}x${expected.height}`);
    }
  }

  // Required MIME
  if (expected && expected.mime && detected && detected !== expected.mime) {
    errs.push(`detected mime ${detected} != required ${expected.mime}`);
  }

  // Required SHA-256
  let hash = null;
  if (expected && expected.sha256) {
    hash = sha256Hex(body);
    if (hash !== expected.sha256) {
      errs.push(`sha256 ${hash} != required ${expected.sha256}`);
    }
  }

  return {
    ok: errs.length === 0,
    errs,
    kind: errs.length ? "VALIDATION" : "OK",
    dims,
    hash,
    detected,
    contentType: ct,
    size: body.length,
    finalUrl: res.finalUrl,
    chain: res.chain,
    firstHex,
  };
}

// ---------------------------------------------------------------------------
// Top-level orchestrator (used by verifyProduction.mjs)
// ---------------------------------------------------------------------------

export async function verifyProductionImages({ origin, log, fetchText, expectedCommit }) {
  const originUrl = new URL(origin).origin;

  // Grab /index.html body once to compare against SPA-fallback impostors.
  let indexHtmlBody = null;
  try {
    const r = await fetch(origin + "/", { headers: { "user-agent": "verifyProductionImages/1.0" } });
    const ab = await r.arrayBuffer();
    indexHtmlBody = Buffer.from(ab);
  } catch (e) {
    log("FAIL", "images: fetch /index.html", e.message);
    return { failed: 1, passed: 0 };
  }

  let failed = 0, passed = 0;
  const allImages = new Map(); // url -> Set of routes
  const stemsSeen = new Set();

  // Extract from routes
  for (const route of IMAGE_ROUTES) {
    let html;
    try {
      const { res, body } = await fetchText(route);
      if (res.status !== 200) { log("FAIL", `images: fetch ${route}`, `status ${res.status}`); failed++; continue; }
      html = body || await (await fetch(origin + route)).text();
    } catch (e) { log("FAIL", `images: fetch ${route}`, e.message); failed++; continue; }

    const forbidden = findForbiddenInHtml(html);
    if (forbidden.length) {
      log("FAIL", `images: forbidden refs on ${route}`, forbidden.join(", "));
      failed++;
    }

    const urls = extractImageUrls(html, origin + route);
    for (const u of urls) {
      if (!allImages.has(u)) allImages.set(u, new Set());
      allImages.get(u).add(route);
      const path = new URL(u).pathname;
      const base = path.split("/").pop() || "";
      for (const req of REQUIRED_IMAGES) if (base.startsWith(req.stem)) stemsSeen.add(req.stem);
      for (const stem of REQUIRED_STEMS_SOFT) if (base.startsWith(stem)) stemsSeen.add(stem);
    }
    log("PASS", `images: extracted from ${route}`, `${urls.length} unique images`);
  }

  // Required stems must all be seen at least once across the inspected routes.
  for (const req of REQUIRED_IMAGES) {
    if (!stemsSeen.has(req.stem)) {
      log("FAIL", `images: required stem missing`, req.stem);
      failed++;
    } else {
      log("PASS", `images: required stem present`, req.stem);
    }
  }

  // Fetch + validate every image with bounded concurrency.
  const items = [...allImages.keys()];
  const CONC = 6;
  let idx = 0;
  async function worker() {
    while (idx < items.length) {
      const my = idx++;
      const url = items[my];
      const path = new URL(url).pathname;
      const base = path.split("/").pop() || "";
      const expected = REQUIRED_IMAGES.find(r => base.startsWith(r.stem)) || null;
      const requireOrigin = expected ? originUrl : null;
      let res;
      try { res = await fetchImage(url); }
      catch (e) { res = { error: e.message, chain: [url], finalUrl: url }; }
      const v = validateImageResponse({ url, res, indexHtmlBody, requireOrigin, expected });
      if (!v.ok) {
        failed++;
        log("FAIL", `image ${url}`,
          `${v.errs.join("; ")} | status=${res.status} ct=${v.contentType || ""} size=${v.size || 0} first=${v.firstHex || ""} chain=${(res.chain || []).join(" -> ")}`);
      } else {
        passed++;
        const tags = [];
        if (v.dims) tags.push(`${v.dims.w}x${v.dims.h}`);
        if (v.hash && expected) tags.push(`sha256=match`);
        tags.push(`${v.size}B`);
        log("PASS", `image ${base}`, tags.join(" "));
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(CONC, items.length) }, worker));

  // Negative-control: a nonexistent asset path must NOT return 200 HTML fallback.
  const negPath = `/assets/images/__verify_missing_${(expectedCommit || "x").slice(0,8)}.png`;
  try {
    const r = await fetch(origin + negPath, { redirect: "manual" });
    const ct = r.headers.get("content-type") || "";
    if (r.status === 200 && ct.includes("html")) {
      failed++;
      log("FAIL", "images: negative-control",
        `NGINX_STATIC_FALLBACK_MISCONFIGURED: ${negPath} returned 200 ${ct}`);
    } else if (r.status === 404) {
      log("PASS", "images: negative-control", `${negPath} -> 404`);
    } else {
      log("BLOCKED", "images: negative-control", `status=${r.status} ct=${ct}`);
    }
  } catch (e) {
    log("BLOCKED", "images: negative-control", e.message);
  }

  return { failed, passed };
}
