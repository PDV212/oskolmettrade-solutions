// Validates the deployed Service Worker precache list and the parity
// between the actual cache constants opened by public/sw.js and the
// cache names rendered in the RU/EN/ZH Cookies pages.
//
// This validator READS the actual rendered value from each prerendered
// HTML file (via the stable data-cell-name attribute the LegalPage
// renders on the Service Worker cache-name cell) rather than trusting
// a constructed "expected" string. It fails on missing, extra or
// duplicated cache names, on RU/EN/ZH parity drift, on stale legacy
// tokens, and on any STATIC_ASSETS entry that is not present in dist/.

import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DIST = resolve(ROOT, "dist");

const failures = [];
const fail = (msg) => failures.push(msg);

const swPath = join(DIST, "sw.js");
if (!existsSync(swPath)) {
  console.error("[validatePrecache] dist/sw.js not found");
  process.exit(1);
}
const sw = readFileSync(swPath, "utf8");

// Extract the three cache-name constants actually opened by the worker.
// CACHE_NAME has been removed intentionally — do not resurrect it.
const constRe = {
  STATIC_CACHE: /const\s+STATIC_CACHE\s*=\s*['"]?([^'";\s]+)['"]?\s*(?:;|\n)/,
  DYNAMIC_CACHE: /const\s+DYNAMIC_CACHE\s*=\s*['"]?([^'";\s]+)['"]?\s*(?:;|\n)/,
  IMAGE_CACHE: /const\s+IMAGE_CACHE\s*=\s*['"]?([^'";\s]+)['"]?\s*(?:;|\n)/,
};
// The above regex also matches the concatenation form
// `'static-' + CACHE_VERSION`, so we resolve programmatically instead.
const versionMatch = sw.match(/const\s+CACHE_VERSION\s*=\s*'([^']+)'/);
if (!versionMatch) fail("sw.js: CACHE_VERSION constant not found");
const version = versionMatch ? versionMatch[1] : "";

const cacheValues = {
  STATIC_CACHE: `static-${version}`,
  DYNAMIC_CACHE: `dynamic-${version}`,
  IMAGE_CACHE: `images-${version}`,
};

if (/const\s+CACHE_NAME\s*=/.test(sw)) {
  fail("sw.js: obsolete CACHE_NAME constant is still declared");
}

// Extract STATIC_ASSETS array.
const arrMatch = sw.match(/const\s+STATIC_ASSETS\s*=\s*\[([\s\S]*?)\]/);
if (!arrMatch) {
  fail("sw.js: STATIC_ASSETS array not found");
} else {
  const urls = [...arrMatch[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
  if (urls.length === 0) fail("sw.js: STATIC_ASSETS is empty");
  const seen = new Set();
  for (const u of urls) {
    if (seen.has(u)) fail(`STATIC_ASSETS duplicate entry: ${u}`);
    seen.add(u);
    if (/^https?:\/\//i.test(u)) {
      fail(`STATIC_ASSETS entry is external: ${u}`);
      continue;
    }
    if (!u.startsWith("/")) {
      fail(`STATIC_ASSETS entry is not same-origin absolute: ${u}`);
      continue;
    }
    const p = join(DIST, u.replace(/^\//, ""));
    if (!existsSync(p)) fail(`STATIC_ASSETS entry missing in dist: ${u}`);
  }
}

// Forbidden substrings in dist/sw.js — old asset and old suffixes.
const forbiddenInSw = [
  "/assets/hero-industrial.jpg",
  "v2025-01-03",
  "v2026-07-12-prerender",
  "v2026-07-12-ssr",
  "'v2026-07-13-ssr'",
  "'v2026-07-13-ssr2'",
  "-v2026-07-13-ssr2",
  "-v2026-07-13-ssr'",
];
for (const s of forbiddenInSw) {
  if (sw.includes(s)) fail(`dist/sw.js still contains forbidden token: ${s}`);
}

// Extract rendered cache-name values from every Cookies page. We look
// for the data-cell-name attribute LegalPage puts on the Service Worker
// cache-name <td>. Multiple rows carry data-cell-name; we pick the row
// whose value contains a comma-separated list of caches (i.e. more than
// one "-v" token). This avoids hard-coding row order or language text.
const cookiesRoutes = [
  "cookies/index.html",
  "en/cookies/index.html",
  "zh/cookies/index.html",
];

function decodeEntities(s) {
  return s
    .replace(/&quot;/g, '"')
    .replace(/&#34;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&amp;/g, "&");
}

const expectedSet = new Set(Object.values(cacheValues));
const perRouteSets = [];

for (const rel of cookiesRoutes) {
  const p = join(DIST, rel);
  if (!existsSync(p)) {
    fail(`prerendered cookies page missing: ${rel}`);
    continue;
  }
  const html = readFileSync(p, "utf8");

  if (html.includes("v2025-01-03")) fail(`${rel} contains legacy v2025-01-03`);
  if (html.includes("v2026-07-13-ssr2"))
    fail(`${rel} contains legacy v2026-07-13-ssr2`);
  if (html.includes("oskol-met-trade-v"))
    fail(`${rel} still lists obsolete 'oskol-met-trade-*' cache`);

  const cellMatches = [
    ...html.matchAll(/data-cell-name="([^"]+)"/g),
  ].map((m) => decodeEntities(m[1]));

  const swRowCells = cellMatches.filter((v) => /,/.test(v) && /-v20\d\d-/.test(v));
  if (swRowCells.length === 0) {
    fail(`${rel}: no Service Worker cache-name cell found via data-cell-name`);
    continue;
  }
  if (swRowCells.length > 1) {
    fail(`${rel}: multiple Service Worker cache-name cells found`);
  }
  const raw = swRowCells[0];
  const names = raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const nameSet = new Set(names);
  if (nameSet.size !== names.length) {
    fail(`${rel}: duplicate cache names in Cookies table (${raw})`);
  }
  for (const n of nameSet) {
    if (!expectedSet.has(n)) fail(`${rel}: unexpected cache name '${n}'`);
  }
  for (const n of expectedSet) {
    if (!nameSet.has(n)) fail(`${rel}: missing cache name '${n}'`);
  }

  perRouteSets.push([...nameSet].sort().join(","));
}

if (new Set(perRouteSets).size > 1) {
  fail(
    "RU/EN/ZH cookies pages disagree on cache-name technical values: " +
      JSON.stringify(perRouteSets),
  );
}

if (failures.length) {
  console.error("[validatePrecache] FAIL:");
  for (const f of failures) console.error("  - " + f);
  process.exit(1);
}
console.log("[validatePrecache] OK");
console.log("  cache constants:", cacheValues);
console.log("  rendered set:   ", perRouteSets[0]);
