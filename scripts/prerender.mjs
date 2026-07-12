// Build-time prerender: generates route-specific HTML from dist/index.html.
// Zero external dependencies. No network calls. Node ESM only.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  ROUTES,
  HTML_LANG,
  OG_LOCALE,
  HREFLANG,
  HREFLANG_GROUPS,
  SITE_ORIGIN,
  buildCanonical,
  absoluteAssetUrl,
  alternatesFor,
  outputPathFor,
  OG_IMAGE_PATH,
  ORG_JSONLD_ID,
} from "./routeManifest.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "..", "dist");
const TEMPLATE_PATH = join(DIST, "index.html");

if (!existsSync(TEMPLATE_PATH)) {
  console.error("[prerender] dist/index.html not found. Run vite build first.");
  process.exit(1);
}

const TEMPLATE = readFileSync(TEMPLATE_PATH, "utf8");

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// Faithful reproduction of visible legal disclaimers so JSON-LD stays honest.
function jsonLdFor(route) {
  const nodes = [];
  const canonical = buildCanonical(route.path);
  const orgRef = { "@id": ORG_JSONLD_ID };

  // WebPage node — always
  nodes.push({
    "@context": "https://schema.org",
    "@type": route.pageType === "faq" ? "FAQPage" : "WebPage",
    "@id": canonical + "#webpage",
    url: canonical,
    name: route.title,
    description: route.description,
    inLanguage: HTML_LANG[route.lang],
    isPartOf: { "@id": SITE_ORIGIN + "/#website" },
    about: orgRef,
  });

  // BreadcrumbList
  const crumbs = [];
  const homePath = route.lang === "ru" ? "/" : "/" + route.lang;
  crumbs.push({ "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN + homePath });
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

function hreflangLinksFor(groupKey, currentPath) {
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
  const langs = ["ru", "en", "zh"].filter((l) => g[l] && l !== currentLang);
  return langs
    .map((l) => `<meta property="og:locale:alternate" content="${OG_LOCALE[l]}" />`)
    .join("\n    ");
}

function renderStub(route) {
  // Route marker allows the validator and crawlers to identify each route.
  return `
      <section data-prerendered="true" data-route="${escapeHtml(route.path)}" data-lang="${escapeHtml(route.lang)}" style="padding:2rem 1rem;max-width:960px;margin:0 auto;font-family:system-ui,-apple-system,sans-serif;color:#1e293b;">
        <h1 style="font-size:1.75rem;line-height:1.2;margin:0 0 1rem;">${escapeHtml(route.h1)}</h1>
        <p style="font-size:1rem;line-height:1.6;margin:0 0 1rem;">${escapeHtml(route.intro)}</p>
        <p style="font-size:0.875rem;color:#64748b;margin:0;">
          <a href="${escapeHtml(SITE_ORIGIN + route.path)}" rel="canonical">${escapeHtml(SITE_ORIGIN + route.path)}</a>
        </p>
      </section>`;
}

function buildHead(route) {
  const canonical = buildCanonical(route.path);
  const ogImageAbs = absoluteAssetUrl(OG_IMAGE_PATH);
  const hreflang = hreflangLinksFor(route.group, route.path);
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
    ...jsonLd.map(
      (n) => `<script type="application/ld+json">${JSON.stringify(n)}</script>`
    ),
  ]
    .filter(Boolean)
    .join("\n    ");
}

function stripTemplateDefaults(html) {
  // Remove existing static <title>, description, canonical, OG/twitter and
  // robots/language meta from the template so route-specific tags win with
  // no duplicates in the prerendered output. Leaves Organization JSON-LD.
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

function renderRoute(route) {
  let html = TEMPLATE;

  // 1. html lang
  html = html.replace(/<html\s+lang="[^"]*"/i, `<html lang="${HTML_LANG[route.lang]}"`);

  // 2. strip template defaults
  html = stripTemplateDefaults(html);

  // 3. inject route-specific head (before </head>)
  const headBlock = buildHead(route);
  html = html.replace(/<\/head>/i, `    ${headBlock}\n  </head>`);

  // 4. inject stub content inside <div id="root">
  const stub = renderStub(route);
  html = html.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${stub}\n    </div>`
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

console.log(`[prerender] wrote ${ok} route HTML files under dist/`);
