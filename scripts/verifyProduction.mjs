// Read-only post-deploy production verifier for REG.RU.
//
// Performs plain HTTPS GETs against the production origin. Does NOT modify
// the server. Distinguishes PASS / FAIL / BLOCKED / NOT_DEPLOYED.
//
// Exits nonzero if:
//   - any required substantive route fails structural checks;
//   - the /ru/company redirect is not a 301/308 to /company; OR
//   - the live deploy-version.json commit does not match the expected commit
//     (when EXPECTED_COMMIT env is provided).
//
// Usage:
//   node scripts/verifyProduction.mjs
//   EXPECTED_COMMIT=$GITHUB_SHA node scripts/verifyProduction.mjs

import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { verifyProductionImages } from "./verifyProductionImages.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ORIGIN = process.env.PROD_ORIGIN || "https://www.xn-----llccbycikqb3afub.xn--p1ai";
const EXPECTED_COMMIT = process.env.EXPECTED_COMMIT || "";

let results = [];
function log(status, name, detail = "") {
  results.push({ status, name, detail });
  const tag =
    status === "PASS" ? "\u2713 PASS" :
    status === "FAIL" ? "\u2717 FAIL" :
    status === "BLOCKED" ? "! BLOCKED" :
    status === "NOT_DEPLOYED" ? "! NOT_DEPLOYED" : status;
  console.log(`${tag}  ${name}${detail ? "  \u2014 " + detail : ""}`);
}

async function fetchText(path, { redirect = "follow" } = {}) {
  const url = ORIGIN + path;
  const res = await fetch(url, { redirect, headers: { "user-agent": "verifyProduction/1.0" } });
  const body = res.headers.get("content-type")?.includes("html") || path.endsWith(".xml") || path.endsWith(".txt") || path.endsWith(".json")
    ? await res.text()
    : "";
  return { res, body, url };
}

function countTag(html, tag) {
  const re = new RegExp(`<${tag}\\b`, "gi");
  return (html.match(re) || []).length;
}

function extractCanonical(html) {
  const m = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  return m ? m[1] : null;
}

function extractHtmlLang(html) {
  const m = html.match(/<html[^>]+lang=["']([^"']+)["']/i);
  return m ? m[1] : null;
}

// Substantive routes: (path, expectedLang, expectedCanonicalSuffix, mustInclude[])
const ROUTES = [
  ["/",              "ru",      "/",              ["ОСКОЛ-МЕТ-ТРЕЙД"]],
  ["/en",            "en",      "/en",            ["OSKOL-MET-TRADE"]],
  ["/zh",            "zh-Hans", "/zh",            ["OSKOL-MET-TRADE"]],
  ["/company",       "ru",      "/company",       ["ОСКОЛ-МЕТ-ТРЕЙД"]],
  ["/en/company",    "en",      "/en/company",    ["OSKOL-MET-TRADE"]],
  ["/zh/company",    "zh-Hans", "/zh/company",    ["OSKOL-MET-TRADE"]],
  ["/en/privacy",    "en",      "/en/privacy",    []],
  ["/zh/cookies",    "zh-Hans", "/zh/cookies",    []],
  ["/en/faq",        "en",      "/en/faq",        []],
  ["/zh/cnc-machines","zh-Hans","/zh/cnc-machines",[]],
];

async function checkRoute([path, expectedLang, canonSuffix, mustInclude]) {
  try {
    const { res, body } = await fetchText(path);
    if (res.status !== 200) return log("FAIL", `route ${path}`, `status ${res.status}`);
    const lang = extractHtmlLang(body);
    if (lang !== expectedLang) return log("FAIL", `route ${path}`, `html lang="${lang}" (expected ${expectedLang})`);
    const h1 = countTag(body, "h1");
    const main = countTag(body, "main");
    if (h1 !== 1) return log("FAIL", `route ${path}`, `h1=${h1}`);
    if (main !== 1) return log("FAIL", `route ${path}`, `main=${main}`);
    const canonical = extractCanonical(body);
    if (!canonical || !canonical.endsWith(canonSuffix)) {
      return log("FAIL", `route ${path}`, `canonical=${canonical}`);
    }
    for (const needle of mustInclude) {
      if (!body.includes(needle)) return log("FAIL", `route ${path}`, `missing "${needle}"`);
    }
    // Legacy regressions (must be absent)
    if (/"@type"\s*:\s*"Offer"/i.test(body) || /"@type"\s*:\s*"Product"/i.test(body)) {
      return log("FAIL", `route ${path}`, "Product/Offer schema present");
    }
    log("PASS", `route ${path}`, `lang=${lang}, h1=1, main=1`);
  } catch (err) {
    log("FAIL", `route ${path}`, err.message);
  }
}

async function checkStatic(path, expectedCT) {
  try {
    const { res, body } = await fetchText(path);
    if (res.status !== 200) return log("FAIL", `static ${path}`, `status ${res.status}`);
    if (expectedCT && !(res.headers.get("content-type") || "").includes(expectedCT)) {
      return log("BLOCKED", `static ${path}`, `content-type=${res.headers.get("content-type")}`);
    }
    if (!body || body.length < 10) return log("FAIL", `static ${path}`, "empty");
    log("PASS", `static ${path}`);
  } catch (err) {
    log("FAIL", `static ${path}`, err.message);
  }
}

async function checkDeployVersion() {
  try {
    const { res, body } = await fetchText("/deploy-version.json");
    if (res.status !== 200) return log("NOT_DEPLOYED", "deploy-version.json", `status ${res.status}`);
    const json = JSON.parse(body);
    const liveCommit = json.commit || "";
    if (EXPECTED_COMMIT && liveCommit !== EXPECTED_COMMIT) {
      return log("NOT_DEPLOYED", "deploy-version.json",
        `live commit ${json.shortCommit || liveCommit.slice(0,7)} != expected ${EXPECTED_COMMIT.slice(0,7)}`);
    }
    log("PASS", "deploy-version.json",
      `commit=${json.shortCommit || liveCommit.slice(0,7)}, routes=${json.prerenderedRoutes}`);
  } catch (err) {
    log("FAIL", "deploy-version.json", err.message);
  }
}

async function checkRedirect() {
  try {
    const { res } = await fetchText("/ru/company", { redirect: "manual" });
    const status = res.status;
    const loc = res.headers.get("location") || "";
    if (status !== 301 && status !== 308) {
      return log("FAIL", "/ru/company redirect", `status ${status} (need 301/308), location="${loc}"`);
    }
    if (!/\/company\/?$/.test(loc)) {
      return log("FAIL", "/ru/company redirect", `bad location "${loc}"`);
    }
    // Follow separately and confirm 200 canonical /company
    const { res: r2, body } = await fetchText("/ru/company");
    if (r2.status !== 200) return log("FAIL", "/ru/company follow", `final status ${r2.status}`);
    const canonical = extractCanonical(body);
    if (!canonical || !canonical.endsWith("/company")) {
      return log("FAIL", "/ru/company follow", `final canonical=${canonical}`);
    }
    log("PASS", "/ru/company redirect", `${status} \u2192 ${loc}`);
  } catch (err) {
    log("FAIL", "/ru/company redirect", err.message);
  }
}

async function main() {
  console.log(`[verifyProduction] origin: ${ORIGIN}`);
  console.log(`[verifyProduction] expected commit: ${EXPECTED_COMMIT || "(any)"}`);
  await checkDeployVersion();
  for (const r of ROUTES) await checkRoute(r);
  await checkStatic("/robots.txt", "text");
  await checkStatic("/sitemap.xml", "xml");
  await checkStatic("/llms.txt", "text");
  await checkRedirect();

  const failed = results.filter(r => r.status === "FAIL").length;
  const notDeployed = results.filter(r => r.status === "NOT_DEPLOYED").length;
  const blocked = results.filter(r => r.status === "BLOCKED").length;
  const passed = results.filter(r => r.status === "PASS").length;
  console.log(`\n[verifyProduction] PASS=${passed}  FAIL=${failed}  BLOCKED=${blocked}  NOT_DEPLOYED=${notDeployed}`);

  if (failed > 0 || notDeployed > 0) process.exit(1);
  process.exit(0);
}

main().catch((err) => {
  console.error("[verifyProduction] fatal:", err);
  process.exit(2);
});
