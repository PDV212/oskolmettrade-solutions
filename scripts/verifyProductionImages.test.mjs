// Offline fixture tests for scripts/verifyProductionImages.mjs.
//
// Spins up an in-process HTTP server that mimics REG.RU behaviour, including
// the known-bad SPA-fallback pattern (HTTP 200, Content-Type text/html for a
// /__l5e/ image path). Runs the real verifier against it and asserts the
// verifier reports the expected pass/fail outcomes.
//
// Run: node scripts/verifyProductionImages.test.mjs

import http from "node:http";
import { readFileSync } from "node:fs";
import { strict as assert } from "node:assert";
import {
  parseSrcset,
  extractImageUrls,
  findForbiddenInHtml,
  detectMimeFromBytes,
  decodePngDims,
  decodeJpegDims,
  validateImageResponse,
  fetchImage,
  verifyProductionImages,
  REQUIRED_IMAGES,
} from "./verifyProductionImages.mjs";

// ----- Unit-level fixtures -----------------------------------------------

// Real emitted originals from dist/assets/images.
const REAL_PNG = readFileSync("dist/assets/images/metalworking-equipment-MRD-glv8.png");
const REAL_H200 = readFileSync("src/assets/cases/h200-70l-c2-2025-photo-1.jpg");
const REAL_BDMH = readFileSync("dist/assets/images/bdmh3018-gantry-2026-DPdSFZVk.jpg");

// 1. Valid PNG magic bytes + dimensions
assert.equal(detectMimeFromBytes(REAL_PNG), "image/png");
assert.deepEqual(decodePngDims(REAL_PNG), { w: 1024, h: 1024 });

// 2. Valid JPEG magic bytes + dimensions
assert.equal(detectMimeFromBytes(REAL_BDMH), "image/jpeg");
assert.deepEqual(decodeJpegDims(REAL_BDMH), { w: 1920, h: 1440 });

// 3. srcset parsing
assert.deepEqual(
  parseSrcset("/a-640.jpg 640w, /a-1024.jpg 1024w, /a-1600.jpg 1600w"),
  ["/a-640.jpg", "/a-1024.jpg", "/a-1600.jpg"]
);

// 4. HTML image URL extraction across all sources
const HTML = `
  <link rel="preload" as="image" href="/preload.png" imagesrcset="/p-1.png 1x, /p-2.png 2x">
  <picture>
    <source srcset="/s-1.webp 1x, /s-2.webp 2x">
    <img src="/x.jpg" srcset="/x-640.jpg 640w, /x-1024.jpg 1024w">
  </picture>
  <meta property="og:image" content="/og.png">
`;
const urls = extractImageUrls(HTML, "https://example.com/base");
for (const need of ["/preload.png","/p-1.png","/p-2.png","/s-1.webp","/x.jpg","/x-640.jpg","/og.png"]) {
  assert.ok(urls.some(u => u.endsWith(need)), `missing ${need}: ${urls.join(",")}`);
}
assert.ok(!urls.some(u => u.startsWith("data:")));

// 5. Forbidden refs
assert.deepEqual(findForbiddenInHtml(`<img src="/__l5e/assets-v1/foo.png">`).sort(),
  ["/__l5e/", "assets-v1"]);
assert.deepEqual(findForbiddenInHtml(`clean`), []);

// 6. validateImageResponse: HTML body posing as PNG
const htmlBody = Buffer.from("<!doctype html><html><body>SPA</body></html>");
let v = validateImageResponse({
  url: "https://x/y.png",
  res: { status: 200, contentType: "text/html", body: htmlBody, chain: [], finalUrl: "https://x/y.png" },
  indexHtmlBody: htmlBody,
});
assert.equal(v.ok, false);
assert.ok(v.errs.some(e => e.includes("IMAGE_ASSET_HTML_FALLBACK")), v.errs.join("|"));

// 7. validateImageResponse: correct MIME but junk bytes
v = validateImageResponse({
  url: "https://x/y.png",
  res: { status: 200, contentType: "image/png", body: Buffer.from("garbagegarbagegarbagegarbagegarbagegarbagegarbage"), chain: [], finalUrl: "https://x/y.png" },
});
assert.equal(v.ok, false);
assert.ok(v.errs.some(e => e.includes("magic")), v.errs.join("|"));

// 8. Empty body
v = validateImageResponse({
  url: "https://x/y.png",
  res: { status: 200, contentType: "image/png", body: Buffer.alloc(0), chain: [], finalUrl: "https://x/y.png" },
});
assert.equal(v.ok, false);
assert.ok(v.errs.some(e => e.includes("too small")));

// 9. Wrong dimensions
v = validateImageResponse({
  url: "https://x/metalworking-equipment-abc.png",
  res: { status: 200, contentType: "image/png", body: REAL_H200, chain: [], finalUrl: "https://x/metalworking-equipment-abc.png" },
  expected: REQUIRED_IMAGES.find(r => r.stem === "metalworking-equipment-"),
});
assert.equal(v.ok, false);
assert.ok(v.errs.some(e => e.includes("dimensions") || e.includes("sha256")));

// 10. Real PNG matches expected hash
v = validateImageResponse({
  url: "https://x/metalworking-equipment-abc.png",
  res: { status: 200, contentType: "image/png", body: REAL_PNG, chain: [], finalUrl: "https://x/metalworking-equipment-abc.png" },
  requireOrigin: "https://x",
  expected: REQUIRED_IMAGES.find(r => r.stem === "metalworking-equipment-"),
});
assert.equal(v.ok, true, v.errs.join("|"));

console.log("unit assertions: OK (10/10)");

// ----- End-to-end fixture server ----------------------------------------

const INDEX_HTML_GOOD = `<!doctype html><html><head></head><body>
<img src="/assets/images/metalworking-equipment-abc.png">
<img src="/assets/images/h200-70l-c2-2025-photo-1-abc.jpg">
<img src="/assets/images/h200-70l-c2-2025-photo-2-abc.jpg">
<img src="/assets/images/h200-70l-c2-2025-photo-3-abc.jpg">
<img src="/assets/images/bdmh3018-gantry-2026-abc.jpg">
<img src="/assets/images/bdmh3018-gantry-overview-1024-abc.jpg">
</body></html>`;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://x");
  const p = url.pathname;

  if (p === "/" || p === "/en" || p === "/zh" || p === "/cnc-machines" || p === "/en/cnc-machines" || p === "/zh/cnc-machines") {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    return res.end(INDEX_HTML_GOOD);
  }
  if (p.startsWith("/assets/images/metalworking-equipment-")) {
    res.writeHead(200, { "content-type": "image/png" }); return res.end(REAL_PNG);
  }
  if (p.startsWith("/assets/images/h200-70l-c2-2025-photo-")) {
    res.writeHead(200, { "content-type": "image/jpeg" }); return res.end(REAL_H200);
  }
  if (p.startsWith("/assets/images/bdmh3018-gantry-2026-")) {
    res.writeHead(200, { "content-type": "image/jpeg" }); return res.end(REAL_BDMH);
  }
  if (p.startsWith("/assets/images/bdmh3018-gantry-overview-")) {
    // reuse the jpg body for stem coverage (dims/hash not pinned for these)
    res.writeHead(200, { "content-type": p.endsWith(".webp") ? "image/webp" : "image/jpeg" });
    return res.end(p.endsWith(".webp") ? Buffer.concat([Buffer.from("RIFF\x00\x00\x00\x00WEBPVP8L"), Buffer.alloc(20)]) : REAL_BDMH);
  }
  // Negative control MUST 404 (correct nginx behaviour).
  res.writeHead(404, { "content-type": "text/plain" });
  res.end("not found");
});
await new Promise(r => server.listen(0, r));
const port = server.address().port;
const origin = `http://127.0.0.1:${port}`;

// Local fetchText shim mirroring verifyProduction.mjs
async function fetchText(path) {
  const r = await fetch(origin + path);
  return { res: r, body: await r.text() };
}
const logs = [];
const log = (status, name, detail = "") => logs.push({ status, name, detail });

let summary = await verifyProductionImages({ origin, log, fetchText, expectedCommit: "test" });
server.close();

const failed = logs.filter(l => l.status === "FAIL");
if (failed.length) {
  console.error("Unexpected failures on GOOD fixture:");
  for (const f of failed) console.error("  -", f.name, "|", f.detail);
  process.exit(1);
}
console.log(`good-fixture: PASS=${summary.passed} FAIL=${summary.failed}`);

// ----- Bad fixture: /__l5e/ SPA fallback --------------------------------

const INDEX_HTML_BAD = `<!doctype html><html><body>
<img src="/__l5e/assets-v1/xyz/metalworking-equipment.png">
</body></html>`;

const server2 = http.createServer((req, res) => {
  const p = new URL(req.url, "http://x").pathname;
  if (p === "/" || p === "/en" || p === "/zh" || p === "/cnc-machines" || p === "/en/cnc-machines" || p === "/zh/cnc-machines") {
    res.writeHead(200, { "content-type": "text/html" }); return res.end(INDEX_HTML_BAD);
  }
  // Simulate the regression: SPA fallback for any missing asset.
  res.writeHead(200, { "content-type": "text/html" }); res.end(INDEX_HTML_BAD);
});
await new Promise(r => server2.listen(0, r));
const port2 = server2.address().port;
const origin2 = `http://127.0.0.1:${port2}`;
async function fetchText2(path) { const r = await fetch(origin2 + path); return { res: r, body: await r.text() }; }
const logs2 = [];
const log2 = (s, n, d = "") => logs2.push({ status: s, name: n, detail: d });
const summary2 = await verifyProductionImages({ origin: origin2, log: log2, fetchText: fetchText2, expectedCommit: "test" });
server2.close();

const badFailed = logs2.filter(l => l.status === "FAIL");
assert.ok(badFailed.some(l => l.detail.includes("/__l5e/")), "expected forbidden-ref failure");
assert.ok(badFailed.some(l => l.detail.includes("HTML_FALLBACK") || l.name.startsWith("images: required stem missing")),
  "expected SPA fallback or missing-stem failure");
assert.ok(summary2.failed > 0, "bad fixture must report failures");
console.log(`bad-fixture: correctly reported ${summary2.failed} failure(s)`);

console.log("\n[verifyProductionImages.test] ALL OK");
