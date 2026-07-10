import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  language?: 'ru' | 'en' | 'zh';
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
}

const SEOHead = ({
  title = "ОСКОЛ-МЕТ-ТРЕЙД — оборудование и сырьё для металлургии",
  description = "ООО «ОСКОЛ-МЕТ-ТРЕЙД» — поставщик металлообрабатывающего оборудования, станков ЧПУ, металлургического сырья и промышленных печей. Отраслевой опыт команды и основателя — с 1994 года.",
  keywords = "металлообрабатывающее оборудование, станки ЧПУ, металлургическое сырьё, промышленные печи, роботизированные комплексы, ВСЗ, ОСКОЛ-МЕТ-ТРЕЙД",
  language = 'ru',
  ogImage = "/lovable-uploads/b3c22956-096b-4475-8619-90ea784e020b.png",
  canonicalUrl,
  structuredData
}: SEOHeadProps) => {

  useEffect(() => {
    // Обновляем title
    document.title = title;

    // Обновляем meta описание
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Обновляем keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Обновляем язык документа
    document.documentElement.lang = language;

    // Обновляем Open Graph теги
    const updateMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const resolvedCanonicalUrl = canonicalUrl ?? window.location.href;

    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:url', resolvedCanonicalUrl);
    updateMetaTag('og:image', ogImage);
    updateMetaTag('og:locale', language === 'ru' ? 'ru_RU' : language === 'en' ? 'en_US' : 'zh_CN');

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', resolvedCanonicalUrl);

    // Обновляем Twitter Card теги
    const updateTwitterTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateTwitterTag('twitter:card', 'summary_large_image');
    updateTwitterTag('twitter:title', title);
    updateTwitterTag('twitter:description', description);
    updateTwitterTag('twitter:image', ogImage);
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:site_name', 'ОСКОЛ-МЕТ-ТРЕЙД');


    // Добавляем структурированные данные
    if (structuredData) {
      let jsonLd = document.querySelector('#structured-data') as HTMLScriptElement | null;
      if (!jsonLd) {
        jsonLd = document.createElement('script');
        jsonLd.id = 'structured-data';
        jsonLd.type = 'application/ld+json';
        document.head.appendChild(jsonLd);
      }
      jsonLd.textContent = JSON.stringify(structuredData);
    }

    // Добавляем hreflang теги для мультиязычности
    const addHreflang = (lang: string, url: string) => {
      let hreflang = document.querySelector(`link[hreflang="${lang}"]`);
      if (!hreflang) {
        hreflang = document.createElement('link');
        hreflang.setAttribute('rel', 'alternate');
        hreflang.setAttribute('hreflang', lang);
        document.head.appendChild(hreflang);
      }
      hreflang.setAttribute('href', url);
    };

    const origin = window.location.origin;
    addHreflang('ru', `${origin}/`);
    addHreflang('en', `${origin}/en`);
    addHreflang('zh', `${origin}/zh`);
    addHreflang('x-default', `${origin}/`);

  }, [title, description, keywords, language, ogImage, canonicalUrl, structuredData]);

  return null;
};

// Предустановленные конфигурации SEO для разных страниц
export const seoConfigs = {
  ru: {
    home: {
      title: "ОСКОЛ-МЕТ-ТРЕЙД — оборудование и сырьё для металлургии",
      description: "ОСКОЛ-МЕТ-ТРЕЙД — поставщик металлообрабатывающего оборудования, станков ЧПУ, металлургического сырья и промышленных печей. Отраслевой опыт команды и основателя — с 1994 года.",
      keywords: "металлообрабатывающее оборудование, станки ЧПУ, металлургическое сырьё, промышленные печи, роботизированные комплексы, ВСЗ, ОСКОЛ-МЕТ-ТРЕЙД",
      language: 'ru' as const,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ОСКОЛ-МЕТ-ТРЕЙД",
        "url": "https://www.xn-----llccbycikqb3afub.xn--p1ai",
        "description": "Поставка металлообрабатывающего оборудования и металлургического сырья",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ул. Мира, 20, оф. 312/1",
          "addressLocality": "Губкин",
          "addressRegion": "Белгородская область",
          "postalCode": "309181",
          "addressCountry": "RU"
        },
        "telephone": "+7-495-240-91-99",
        "email": "89090977174@mail.ru"
      }
    }
  },
  en: {
    home: {
      title: "OSKOL-MET-TRADE — Equipment and Raw Materials for Metallurgy",
      description: "OSKOL-MET-TRADE LLC — supplier of metalworking equipment, CNC machines, metallurgical raw materials and industrial furnaces. Team industry experience since 1994.",
      keywords: "metalworking equipment, CNC machines, metallurgical raw materials, industrial furnaces, robotic systems, VSZ, OSKOL-MET-TRADE",
      language: 'en' as const,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "OSKOL-MET-TRADE",
        "description": "Supplier of metalworking equipment, CNC machines, metallurgical raw materials and industrial furnaces",
        "url": "https://www.xn-----llccbycikqb3afub.xn--p1ai/en",
        "logo": "https://www.xn-----llccbycikqb3afub.xn--p1ai/lovable-uploads/b3c22956-096b-4475-8619-90ea784e020b.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+7-909-097-71-74",
          "contactType": "customer service",
          "areaServed": ["RU","BY","KZ","CN","IN","ID","IL","IT","MY","PH"],
          "availableLanguage": ["Russian", "English", "Chinese"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mira str., 20, office 312/1",
          "addressLocality": "Gubkin",
          "addressRegion": "Belgorod region",
          "postalCode": "309181",
          "addressCountry": "RU"
        }
      }
    }
  },
  zh: {
    home: {
      title: "OSKOL-MET-TRADE — 冶金设备与原材料供应",
      description: "OSKOL-MET-TRADE有限责任公司 — 金属加工设备、数控机床、冶金原材料和工业炉的供应商。团队行业经验始于1994年。",
      keywords: "金属加工设备, 数控机床, 冶金原材料, 工业炉, 机器人系统, VSZ, OSKOL-MET-TRADE",
      language: 'zh' as const,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "OSKOL-MET-TRADE",
        "description": "金属加工设备、数控机床、冶金原材料和工业炉的供应商",
        "url": "https://www.xn-----llccbycikqb3afub.xn--p1ai/zh",
        "logo": "https://www.xn-----llccbycikqb3afub.xn--p1ai/lovable-uploads/b3c22956-096b-4475-8619-90ea784e020b.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+7-909-097-71-74",
          "contactType": "customer service",
          "areaServed": ["RU","BY","KZ","CN","IN","ID","IL","IT","MY","PH"],
          "availableLanguage": ["Russian", "English", "Chinese"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mira str., 20, office 312/1",
          "addressLocality": "Gubkin",
          "postalCode": "309181",
          "addressCountry": "RU"
        }
      }
    }
  }
};

export default SEOHead;