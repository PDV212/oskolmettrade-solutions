// Validates prerendered HTML files. No network. Zero deps.

import { readFileSync, existsSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import {
  ROUTES,
  HTML_LANG,
  HREFLANG_GROUPS,
  buildCanonical,
  outputPathFor,
  SITE_ORIGIN,
} from "./routeManifest.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "..", "dist");

const FORBIDDEN_SUBSTRINGS = [
  "lovable.app",
  "2500 ",
  "2 500 ",
  "25+ заводов",
  "25+ factories",
  "aggregateRating",
  "docs/claim-register",
];

const failures = [];
const matrix = [];

function count(re, s) {
  return (s.match(re) || []).length;
}

function extract(re, s) {
  const m = s.match(re);
  return m ? m[1] : null;
}

let ruHomeHtml = null;

for (const route of ROUTES) {
  const outFile = join(DIST, outputPathFor(route.path));
  const errs = [];
  if (!existsSync(outFile)) {
    failures.push(`${route.path}: missing output file ${outFile}`);
    continue;
  }
  const html = readFileSync(outFile, "utf8");
  if (route.path === "/") ruHomeHtml = html;

  const size = Buffer.byteLength(html, "utf8");
  const htmlLang = extract(/<html\s+lang="([^"]+)"/i, html);
  const title = extract(/<title>([\s\S]*?)<\/title>/i, html);
  const descCount = count(/<meta\s+name="description"/gi, html);
  const canonicalCount = count(/<link\s+rel="canonical"/gi, html);
  const canonical = extract(/<link\s+rel="canonical"\s+href="([^"]+)"/i, html);
  const robots = extract(/<meta\s+name="robots"\s+content="([^"]+)"/i, html);
  const h1Count = count(/<h1\b/gi, html);
  const hreflangs = [...html.matchAll(/<link\s+rel="alternate"\s+hreflang="([^"]+)"/gi)].map((m) => m[1]);
  const jsonLdTypes = [...html.matchAll(/"@type"\s*:\s*"([^"]+)"/g)].map((m) => m[1]);
  const marker = html.includes(`data-route="${route.path}"`);
  const mainCharCount = (html.match(/data-prerendered="true"[\s\S]*?<\/section>/) || [""])[0].length;

  if (htmlLang !== HTML_LANG[route.lang])
    errs.push(`html lang mismatch: ${htmlLang} vs ${HTML_LANG[route.lang]}`);
  if (!title) errs.push("missing title");
  else if (count(/<title>/gi, html) !== 1) errs.push("multiple titles");
  if (descCount !== 1) errs.push(`description count = ${descCount}`);
  if (canonicalCount !== 1) errs.push(`canonical count = ${canonicalCount}`);
  if (canonical !== buildCanonical(route.path))
    errs.push(`canonical ${canonical} != expected ${buildCanonical(route.path)}`);
  if (!robots || !/index/.test(robots) || /noindex/.test(robots))
    errs.push(`robots invalid: ${robots}`);
  if (h1Count < 1) errs.push("no H1");
  const g = HREFLANG_GROUPS[route.group];
  if (g) {
    for (const l of ["ru", "en", "zh"]) {
      const expected = { ru: "ru", en: "en", zh: "zh-Hans" }[l];
      if (!hreflangs.includes(expected)) errs.push(`missing hreflang ${expected}`);
    }
    if (!hreflangs.includes("x-default")) errs.push("missing hreflang x-default");
  }
  if (!marker) errs.push("missing route marker");
  for (const bad of FORBIDDEN_SUBSTRINGS) {
    if (html.toLowerCase().includes(bad.toLowerCase()))
      errs.push(`forbidden substring: ${bad}`);
  }
  // Homepage catalog: ensure no Product/Offer schema was restored.
  if (route.pageType === "home") {
    if (/"@type"\s*:\s*"Product"/.test(html)) errs.push("Product schema present on homepage");
    if (/"@type"\s*:\s*"Offer"/.test(html)) errs.push("Offer schema present on homepage");
  }

  matrix.push({
    path: route.path,
    file: outputPathFor(route.path),
    size,
    lang: htmlLang,
    title: title && title.length > 60 ? title.slice(0, 60) + "…" : title,
    canonical,
    robots,
    h1Count,
    hreflangs: hreflangs.join(","),
    jsonLdTypes: jsonLdTypes.join(","),
    markerBytes: mainCharCount,
  });

  if (errs.length) failures.push(`${route.path}: ${errs.join("; ")}`);
}

// EN/ZH must not equal RU home HTML.
if (ruHomeHtml) {
  for (const p of ["/en", "/zh"]) {
    const f = join(DIST, outputPathFor(p));
    if (existsSync(f) && readFileSync(f, "utf8") === ruHomeHtml) {
      failures.push(`${p}: identical to Russian homepage`);
    }
  }
}

// Report
console.log("[validate] Route matrix:");
for (const r of matrix) {
  console.log(
    `  ${r.path.padEnd(22)} ${String(r.size).padStart(6)}B lang=${r.lang} h1=${r.h1Count} hreflang=[${r.hreflangs}] jsonld=[${r.jsonLdTypes}]`
  );
}

if (failures.length) {
  console.error("\n[validate] FAILURES:");
  for (const f of failures) console.error("  ✗ " + f);
  process.exit(1);
}
console.log(`\n[validate] OK — ${matrix.length} routes validated.`);
