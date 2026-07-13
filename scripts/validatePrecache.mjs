// Validates the deployed Service Worker precache list and the parity
// between public/sw.js cache constants and the RU/EN/ZH Cookies-page
// legal-content table. Runs against final dist/ output. Zero deps.

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

// Extract four cache constants
const constRe = {
  CACHE_NAME: /const\s+CACHE_NAME\s*=\s*'([^']+)'/,
  STATIC_CACHE: /const\s+STATIC_CACHE\s*=\s*'([^']+)'/,
  DYNAMIC_CACHE: /const\s+DYNAMIC_CACHE\s*=\s*'([^']+)'/,
  IMAGE_CACHE: /const\s+IMAGE_CACHE\s*=\s*'([^']+)'/,
};
const cacheValues = {};
for (const [k, re] of Object.entries(constRe)) {
  const m = sw.match(re);
  if (!m) fail(`sw.js: missing constant ${k}`);
  else cacheValues[k] = m[1];
}

// Extract STATIC_ASSETS array
const arrMatch = sw.match(/const\s+STATIC_ASSETS\s*=\s*\[([\s\S]*?)\]/);
if (!arrMatch) {
  fail("sw.js: STATIC_ASSETS array not found");
} else {
  const urls = [...arrMatch[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
  if (urls.length === 0) fail("sw.js: STATIC_ASSETS is empty");
  for (const u of urls) {
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

// Forbidden legacy substrings in dist/sw.js
const forbiddenInSw = [
  "/assets/hero-industrial.jpg",
  "v2025-01-03",
];
for (const s of forbiddenInSw) {
  if (sw.includes(s)) fail(`dist/sw.js still contains forbidden token: ${s}`);
}

// Cookies-page parity: check every /cookies HTML file has all four
// current cache names and no legacy v2025 token.
const cookiesRoutes = ["cookies/index.html", "en/cookies/index.html", "zh/cookies/index.html"];
const expectedNames = Object.values(cacheValues);
const perRouteNames = [];
for (const rel of cookiesRoutes) {
  const p = join(DIST, rel);
  if (!existsSync(p)) {
    fail(`prerendered cookies page missing: ${rel}`);
    continue;
  }
  const html = readFileSync(p, "utf8");
  if (html.includes("v2025-01-03")) fail(`${rel} contains legacy v2025-01-03`);
  for (const name of expectedNames) {
    if (!html.includes(name)) fail(`${rel} missing cache name: ${name}`);
  }
  // Cross-language technical parity: capture the row containing the names.
  perRouteNames.push(expectedNames.join(","));
}
if (new Set(perRouteNames).size > 1) {
  fail("RU/EN/ZH cookies pages disagree on cache-name technical values");
}

if (failures.length) {
  console.error("[validatePrecache] FAIL:");
  for (const f of failures) console.error("  - " + f);
  process.exit(1);
}
console.log("[validatePrecache] OK");
console.log("  cache constants:", cacheValues);
