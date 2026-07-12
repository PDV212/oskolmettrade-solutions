// Build-time prerender using real React server rendering.
//
// Consumes:
//   dist/index.html         — Vite client build template
//   .prerender/entry-server.js — Vite SSR build of src/entry-server.tsx
//
// Emits one HTML file per indexable route under dist/ with:
//   - real React application markup in <div id="root">
//   - route-specific head metadata (title, description, canonical,
//     hreflang, OG/Twitter, JSON-LD)
//
// No external network calls. No headless browser.

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  ROUTES,
  HTML_LANG,
  OG_LOCALE,
  HREFLANG,
  HREFLANG_GROUPS,
  SITE_ORIGIN,
  buildCanonical,
  absoluteAssetUrl,
  outputPathFor,
  OG_IMAGE_PATH,
  ORG_JSONLD_ID,
} from "./routeManifest.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DIST = join(ROOT, "dist");
const SSR_DIR = join(ROOT, ".prerender");
const SSR_ENTRY = join(SSR_DIR, "entry-server.js");
const TEMPLATE_PATH = join(DIST, "index.html");

if (!existsSync(TEMPLATE_PATH)) {
  console.error("[prerender] dist/index.html not found. Run vite build first.");
  process.exit(1);
}
if (!existsSync(SSR_ENTRY)) {
  console.error(
    "[prerender] .prerender/entry-server.js not found. Run:\n" +
      "  vite build --ssr src/entry-server.tsx --outDir .prerender"
  );
  process.exit(1);
}

// Preserve the pristine client template in memory so later routes never see
// an already-rewritten dist/index.html (the RU home overwrites it).
const TEMPLATE = readFileSync(TEMPLATE_PATH, "utf8");

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

function jsonLdFor(route) {
  const nodes = [];
  const canonical = buildCanonical(route.path);
  const orgRef = { "@id": ORG_JSONLD_ID };

  // WebPage node. FAQPage schema with mainEntity is intentionally not
  // synthesized here: it must originate from the same shared FAQ data as
  // the visible React FAQ, which is Turn 2 work. Until then we emit a
  // generic WebPage so we never publish an empty/inaccurate FAQPage.
  nodes.push({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": canonical + "#webpage",
    url: canonical,
    name: route.title,
    description: route.description,
    inLanguage: HTML_LANG[route.lang],
    isPartOf: { "@id": SITE_ORIGIN + "/#website" },
    about: orgRef,
  });

  // Localized BreadcrumbList
  const homeLabel = { ru: "Главная", en: "Home", zh: "首页" }[route.lang];
  const homePath = route.lang === "ru" ? "/" : "/" + route.lang;
  const crumbs = [
    { "@type": "ListItem", position: 1, name: homeLabel, item: SITE_ORIGIN + homePath },
  ];
  if (route.path !== homePath) {
    crumbs.push({
      "@type": "ListItem",
      position: 2,
      name: route.h1,
      item: canonical,
    });
  }
  nodes.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs,
  });

  return nodes;
}

function hreflangLinksFor(groupKey) {
  const g = HREFLANG_GROUPS[groupKey];
  if (!g) return "";
  const links = [];
  for (const lang of ["ru", "en", "zh"]) {
    if (!g[lang]) continue;
    links.push(
      `<link rel="alternate" hreflang="${HREFLANG[lang]}" href="${SITE_ORIGIN}${g[lang]}" />`
    );
  }
  const xd = g[g.xDefault];
  if (xd) {
    links.push(`<link rel="alternate" hreflang="x-default" href="${SITE_ORIGIN}${xd}" />`);
  }
  return links.join("\n    ");
}

function ogAlternateLocales(groupKey, currentLang) {
  const g = HREFLANG_GROUPS[groupKey];
  if (!g) return "";
  return ["ru", "en", "zh"]
    .filter((l) => g[l] && l !== currentLang)
    .map((l) => `<meta property="og:locale:alternate" content="${OG_LOCALE[l]}" />`)
    .join("\n    ");
}

function buildHead(route) {
  const canonical = buildCanonical(route.path);
  const ogImageAbs = absoluteAssetUrl(OG_IMAGE_PATH);
  const hreflang = hreflangLinksFor(route.group);
  const ogAlt = ogAlternateLocales(route.group, route.lang);
  const jsonLd = jsonLdFor(route);

  return [
    `<title>${escapeHtml(route.title)}</title>`,
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
    `<meta name="robots" content="index, follow" />`,
    `<meta name="language" content="${route.lang}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:site_name" content="ОСКОЛ-МЕТ-ТРЕЙД" />`,
    `<meta property="og:locale" content="${OG_LOCALE[route.lang]}" />`,
    `<meta property="og:image" content="${ogImageAbs}" />`,
    ogAlt,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    `<meta name="twitter:image" content="${ogImageAbs}" />`,
    hreflang,
    ...jsonLd.map((n) => `<script type="application/ld+json">${JSON.stringify(n)}</script>`),
  ]
    .filter(Boolean)
    .join("\n    ");
}

function stripTemplateDefaults(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta\s+name="description"[^>]*>/gi, "")
    .replace(/<meta\s+name="robots"[^>]*>/gi, "")
    .replace(/<meta\s+name="language"[^>]*>/gi, "")
    .replace(/<meta\s+http-equiv="content-language"[^>]*>/gi, "")
    .replace(/<meta\s+name="twitter:[^"]+"[^>]*>/gi, "")
    .replace(/<meta\s+property="og:[^"]+"[^>]*>/gi, "")
    .replace(/<link\s+rel="canonical"[^>]*>/gi, "");
}

// Dynamic import of the built SSR entry
const mod = await import(pathToFileURL(SSR_ENTRY).href);
const render = mod.render ?? mod.default?.render;
if (typeof render !== "function") {
  console.error("[prerender] server entry does not export render(url)");
  process.exit(1);
}

function renderRoute(route) {
  let appHtml;
  try {
    appHtml = render(route.path);
  } catch (err) {
    console.error(`[prerender] render failed for ${route.path}:`, err);
    throw err;
  }
  if (!appHtml || appHtml.length < 200) {
    throw new Error(
      `[prerender] ${route.path}: rendered HTML suspiciously short (${(appHtml || "").length} bytes)`
    );
  }

  let html = TEMPLATE;
  html = html.replace(/<html\s+lang="[^"]*"/i, `<html lang="${HTML_LANG[route.lang]}"`);
  html = stripTemplateDefaults(html);
  const headBlock = buildHead(route);
  html = html.replace(/<\/head>/i, `    ${headBlock}\n  </head>`);
  html = html.replace(
    /<div id="root"><\/div>/,
    `<div id="root" data-ssr-route="${route.path}" data-ssr-lang="${route.lang}">${appHtml}</div>`
  );

  return html;
}

let ok = 0;
for (const route of ROUTES) {
  const html = renderRoute(route);
  const outPath = join(DIST, outputPathFor(route.path));
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, "utf8");
  ok++;
}

// Do not ship the server bundle to the publish directory.
try {
  rmSync(SSR_DIR, { recursive: true, force: true });
} catch {}

console.log(`[prerender] wrote ${ok} route HTML files under dist/ (real React SSR)`);
