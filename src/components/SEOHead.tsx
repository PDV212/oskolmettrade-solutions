import { useEffect } from 'react';
import {
  SITE_ORIGIN,
  HTML_LANG,
  OG_LOCALE,
  HREFLANG,
  buildCanonical,
  absoluteAssetUrl,
  type SupportedLanguage,
  type AlternatePaths,
  type HreflangGroupKey,
  alternatesFor,
  xDefaultFor,
} from '@/lib/siteMetadata';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  language?: SupportedLanguage;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: 'website' | 'article';
  /** Canonical route path (preferred). Example: "/en/company". */
  path?: string;
  /** Legacy absolute canonical URL. Prefer `path`. */
  canonicalUrl?: string;
  /** Reciprocal hreflang alternates by language (route paths). */
  alternates?: AlternatePaths;
  /** Path used for hreflang="x-default". */
  xDefaultPath?: string;
  /** Shortcut: pick a predefined hreflang group from siteMetadata. */
  hreflangGroup?: HreflangGroupKey;
  /** If true, output robots="noindex, follow" and skip hreflang. */
  noindex?: boolean;
  structuredData?: Record<string, any>;
}

const upsertMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const removeMeta = (attr: 'name' | 'property', key: string) => {
  document.head.querySelectorAll(`meta[${attr}="${key}"]`).forEach((n) => n.remove());
};

const upsertLinkSingle = (rel: string, href: string) => {
  const list = document.head.querySelectorAll(`link[rel="${rel}"]`);
  list.forEach((n, i) => { if (i > 0) n.remove(); });
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const SEOHead = ({
  title = 'ОСКОЛ-МЕТ-ТРЕЙД — оборудование и сырьё для металлургии',
  description = 'ООО «ОСКОЛ-МЕТ-ТРЕЙД» — поставщик металлообрабатывающего оборудования, станков ЧПУ, металлургического сырья и промышленных печей. Отраслевой опыт команды и основателя — с 1994 года.',
  keywords,
  language = 'ru',
  ogImage = '/lovable-uploads/b3c22956-096b-4475-8619-90ea784e020b.png',
  ogImageAlt,
  ogType = 'website',
  path,
  canonicalUrl,
  alternates,
  xDefaultPath,
  hreflangGroup,
  noindex = false,
  structuredData,
}: SEOHeadProps) => {
  useEffect(() => {
    // <html lang>
    document.documentElement.lang = HTML_LANG[language];

    // Title
    document.title = title;

    // Description
    upsertMeta('name', 'description', description);
    if (keywords) upsertMeta('name', 'keywords', keywords);

    // Robots
    if (noindex) upsertMeta('name', 'robots', 'noindex, follow');
    else upsertMeta('name', 'robots', 'index, follow');

    // Canonical
    const canonical = canonicalUrl
      ? canonicalUrl
      : path
        ? buildCanonical(path)
        : buildCanonical(window.location.pathname);
    upsertLinkSingle('canonical', canonical);

    // Open Graph
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:type', ogType);
    upsertMeta('property', 'og:site_name', 'ОСКОЛ-МЕТ-ТРЕЙД');
    upsertMeta('property', 'og:locale', OG_LOCALE[language]);

    const ogImageAbs = absoluteAssetUrl(ogImage);
    upsertMeta('property', 'og:image', ogImageAbs);
    if (ogImageAlt) upsertMeta('property', 'og:image:alt', ogImageAlt);
    else removeMeta('property', 'og:image:alt');

    // og:locale:alternate — clear then repopulate
    document.head
      .querySelectorAll('meta[property="og:locale:alternate"]')
      .forEach((n) => n.remove());
    const resolvedAlternates =
      alternates ?? (hreflangGroup ? alternatesFor(hreflangGroup) : undefined);
    if (resolvedAlternates) {
      (Object.keys(resolvedAlternates) as SupportedLanguage[]).forEach((lang) => {
        if (lang === language) return;
        if (!resolvedAlternates[lang]) return;
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:locale:alternate');
        meta.setAttribute('content', OG_LOCALE[lang]);
        document.head.appendChild(meta);
      });
    }

    // Twitter
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', ogImageAbs);
    if (ogImageAlt) upsertMeta('name', 'twitter:image:alt', ogImageAlt);
    else removeMeta('name', 'twitter:image:alt');

    // hreflang — clear all previous alternate links first
    document.head
      .querySelectorAll('link[rel="alternate"][hreflang]')
      .forEach((n) => n.remove());

    if (!noindex && resolvedAlternates) {
      (Object.keys(resolvedAlternates) as SupportedLanguage[]).forEach((lang) => {
        const p = resolvedAlternates[lang];
        if (!p) return;
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', HREFLANG[lang]);
        link.setAttribute('href', SITE_ORIGIN + p);
        document.head.appendChild(link);
      });
      const xdPath =
        xDefaultPath ?? (hreflangGroup ? xDefaultFor(hreflangGroup) : undefined);
      if (xdPath) {
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', 'x-default');
        link.setAttribute('href', SITE_ORIGIN + xdPath);
        document.head.appendChild(link);
      }
    }

    // Structured data (page-scoped, single node)
    if (structuredData) {
      let jsonLd = document.getElementById('structured-data') as HTMLScriptElement | null;
      if (!jsonLd) {
        jsonLd = document.createElement('script');
        jsonLd.id = 'structured-data';
        jsonLd.type = 'application/ld+json';
        document.head.appendChild(jsonLd);
      }
      jsonLd.textContent = JSON.stringify(structuredData);
    }
  }, [
    title,
    description,
    keywords,
    language,
    ogImage,
    ogImageAlt,
    ogType,
    path,
    canonicalUrl,
    JSON.stringify(alternates),
    xDefaultPath,
    hreflangGroup,
    noindex,
    structuredData,
  ]);

  return null;
};

// Preset SEO configs per language for the homepage group
export const seoConfigs = {
  ru: {
    home: {
      title: 'ОСКОЛ-МЕТ-ТРЕЙД — оборудование и сырьё для металлургии',
      description:
        'ОСКОЛ-МЕТ-ТРЕЙД — поставщик металлообрабатывающего оборудования, станков ЧПУ, металлургического сырья и промышленных печей. Отраслевой опыт команды и основателя — с 1994 года.',
      keywords:
        'металлообрабатывающее оборудование, станки ЧПУ, металлургическое сырьё, промышленные печи, роботизированные комплексы, ВСЗ, ОСКОЛ-МЕТ-ТРЕЙД',
      language: 'ru' as const,
      path: '/',
      hreflangGroup: 'home' as const,
    },
  },
  en: {
    home: {
      title: 'OSKOL-MET-TRADE — Equipment and Raw Materials for Metallurgy',
      description:
        'OSKOL-MET-TRADE LLC — supplier of metalworking equipment, CNC machines, metallurgical raw materials and industrial furnaces. Team industry experience since 1994.',
      keywords:
        'metalworking equipment, CNC machines, metallurgical raw materials, industrial furnaces, robotic systems, VSZ, OSKOL-MET-TRADE',
      language: 'en' as const,
      path: '/en',
      hreflangGroup: 'home' as const,
    },
  },
  zh: {
    home: {
      title: 'OSKOL-MET-TRADE — 冶金设备与原材料供应',
      description:
        'OSKOL-MET-TRADE 有限责任公司 — 金属加工设备、数控机床、冶金原材料和工业炉的供应商。团队行业经验始于 1994 年。',
      keywords: '金属加工设备, 数控机床, 冶金原材料, 工业炉, 机器人系统, VSZ, OSKOL-MET-TRADE',
      language: 'zh' as const,
      path: '/zh',
      hreflangGroup: 'home' as const,
    },
  },
};

export default SEOHead;
