/**
 * Central multilingual SEO metadata configuration.
 * Route-aware canonical + hreflang + OG locale mapping.
 * The production origin is hardcoded so preview / Lovable hosts still emit
 * the correct production canonical.
 */

export const SITE_ORIGIN = "https://www.xn-----llccbycikqb3afub.xn--p1ai";

export type SupportedLanguage = "ru" | "en" | "zh";

/** <html lang="..."> value per language. */
export const HTML_LANG: Record<SupportedLanguage, string> = {
  ru: "ru",
  en: "en",
  zh: "zh-Hans",
};

/** Open Graph locale value per language. */
export const OG_LOCALE: Record<SupportedLanguage, string> = {
  ru: "ru_RU",
  en: "en_US",
  zh: "zh_CN",
};

/** hreflang attribute value per language (SEO-facing). */
export const HREFLANG: Record<SupportedLanguage, string> = {
  ru: "ru",
  en: "en",
  zh: "zh-Hans",
};

export type AlternatePaths = Partial<Record<SupportedLanguage, string>>;

export interface HreflangGroup {
  ru: string;
  en: string;
  zh: string;
  /** Which language path serves as x-default. */
  xDefault: SupportedLanguage;
}

/** Canonical hreflang groups. Only fully-translated equivalent pages listed. */
export const HREFLANG_GROUPS = {
  home: { ru: "/", en: "/en", zh: "/zh", xDefault: "en" },
  company: {
    ru: "/company",
    en: "/en/company",
    zh: "/zh/company",
    xDefault: "en",
  },
  faq: { ru: "/ru/faq", en: "/en/faq", zh: "/zh/faq", xDefault: "en" },
  privacy: { ru: "/privacy", en: "/en/privacy", zh: "/zh/privacy", xDefault: "en" },
  cookies: { ru: "/cookies", en: "/en/cookies", zh: "/zh/cookies", xDefault: "en" },
  about: { ru: "/about", en: "/en/about", zh: "/zh/about", xDefault: "en" },
  // cases group intentionally removed while /cases is a temporary
  // noindex quarantine notice — do not emit reciprocal hreflang.
  cncMachines: {
    ru: "/cnc-machines",
    en: "/en/cnc-machines",
    zh: "/zh/cnc-machines",
    xDefault: "en",
  },
  ferroalloys: {
    ru: "/ferroalloys",
    en: "/en/ferroalloys",
    zh: "/zh/ferroalloys",
    xDefault: "en",
  },
} as const satisfies Record<string, HreflangGroup>;


export type HreflangGroupKey = keyof typeof HREFLANG_GROUPS;

export function alternatesFor(group: HreflangGroupKey): AlternatePaths {
  const g = HREFLANG_GROUPS[group];
  return { ru: g.ru, en: g.en, zh: g.zh };
}

export function xDefaultFor(group: HreflangGroupKey): string {
  const g = HREFLANG_GROUPS[group];
  return g[g.xDefault];
}

/**
 * Build a fully-qualified canonical URL from a route path.
 * - Uses production origin (never window.location).
 * - Strips query and hash.
 * - Collapses duplicate slashes.
 * - Trailing slash only for the homepage.
 */
export function buildCanonical(path: string): string {
  let p = String(path || "/").split("?")[0].split("#")[0];
  if (!p.startsWith("/")) p = "/" + p;
  p = p.replace(/\/{2,}/g, "/");
  if (p !== "/" && p.endsWith("/")) p = p.replace(/\/+$/, "");
  return SITE_ORIGIN + p;
}

/** Absolute URL for a project-local asset. */
export function absoluteAssetUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return SITE_ORIGIN + (path.startsWith("/") ? path : "/" + path);
}
