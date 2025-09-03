import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  language?: 'ru' | 'en' | 'zh';
  ogImage?: string;
  structuredData?: Record<string, any>;
}

const SEOHead = ({
  title = "ОСКОЛ-МЕТ-ТРЕЙД - Металлообрабатывающее оборудование и сырьё с 1994 года",
  description = "ОСКОЛ-МЕТ-ТРЕЙД - надежный поставщик металлообрабатывающего оборудования, станков ЧПУ, металлургического сырья и промышленных печей. 30 лет опыта, собственное производство ВСЗ, полный цикл услуг.",
  keywords = "металлообрабатывающее оборудование, станки ЧПУ, металлургическое сырьё, промышленные печи, роботизированные комплексы, автоматизация производства, ВСЗ, ОСКОЛ-МЕТ-ТРЕЙД",
  canonicalUrl = "https://oskol-met-trade.ru/",
  language = 'ru',
  ogImage = "/lovable-uploads/b3c22956-096b-4475-8619-90ea784e020b.png",
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

    // Обновляем canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

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

    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:url', canonicalUrl);
    updateMetaTag('og:image', ogImage);
    updateMetaTag('og:locale', language === 'ru' ? 'ru_RU' : language === 'en' ? 'en_US' : 'zh_CN');

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

    updateTwitterTag('twitter:title', title);
    updateTwitterTag('twitter:description', description);
    updateTwitterTag('twitter:image', ogImage);

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

    addHreflang('ru', 'https://oskol-met-trade.ru/');
    addHreflang('en', 'https://oskol-met-trade.ru/en');
    addHreflang('zh', 'https://oskol-met-trade.ru/zh');
    addHreflang('x-default', 'https://oskol-met-trade.ru/');

  }, [title, description, keywords, canonicalUrl, language, ogImage, structuredData]);

  return null;
};

// Предустановленные конфигурации SEO для разных страниц
export const seoConfigs = {
  ru: {
    home: {
      title: "ОСКОЛ-МЕТ-ТРЕЙД - Металлообрабатывающее оборудование и сырьё с 1994 года",
      description: "ОСКОЛ-МЕТ-ТРЕЙД - надежный поставщик металлообрабатывающего оборудования, станков ЧПУ, металлургического сырья и промышленных печей. 30 лет опыта, собственное производство ВСЗ, полный цикл услуг.",
      keywords: "металлообрабатывающее оборудование, станки ЧПУ, металлургическое сырьё, промышленные печи, роботизированные комплексы, автоматизация производства, ВСЗ, ОСКОЛ-МЕТ-ТРЕЙД",
      canonicalUrl: "https://oskol-met-trade.ru/",
      language: 'ru' as const,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ОСКОЛ-МЕТ-ТРЕЙД",
        "alternateName": "ООО ОСКОЛ-МЕТ-ТРЕЙД",
        "description": "Поставка металлообрабатывающего оборудования, станков ЧПУ, металлургического сырья и промышленных печей с 1994 года",
        "foundingDate": "1994",
        "url": "https://oskol-met-trade.ru",
        "logo": "https://oskol-met-trade.ru/lovable-uploads/b3c22956-096b-4475-8619-90ea784e020b.png",
        "sameAs": [
          "https://stankozavod.com/"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+7-909-097-71-74",
          "contactType": "customer service",
          "areaServed": ["RU", "KZ", "BY", "CN", "IN"],
          "availableLanguage": ["Russian", "English", "Chinese"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ул. А. Солженицына, д. 40, стр. 1",
          "addressLocality": "Москва",
          "postalCode": "109004",
          "addressCountry": "RU"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "150",
          "bestRating": "5"
        },
        "offers": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Металлообрабатывающее оборудование",
              "description": "Станки с ЧПУ, обрабатывающие центры, роботизированные комплексы"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Product",
              "name": "Металлургическое сырьё",
              "description": "Марганцевая руда, феррохром, бентонит, никельсодержащий чугун"
            }
          }
        ]
      }
    }
  },
  en: {
    home: {
      title: "OSKOL-MET-TRADE - Metalworking Equipment & Raw Materials Since 1994",
      description: "OSKOL-MET-TRADE - reliable supplier of metalworking equipment, CNC machines, metallurgical raw materials and industrial furnaces. 30 years of experience, own VSZ production, full service cycle.",
      keywords: "metalworking equipment, CNC machines, metallurgical raw materials, industrial furnaces, robotic systems, production automation, VSZ, OSKOL-MET-TRADE",
      canonicalUrl: "https://oskol-met-trade.ru/en",
      language: 'en' as const,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization", 
        "name": "OSKOL-MET-TRADE",
        "description": "Supply of metalworking equipment, CNC machines, metallurgical raw materials and industrial furnaces since 1994",
        "foundingDate": "1994",
        "url": "https://oskol-met-trade.ru/en",
        "logo": "https://oskol-met-trade.ru/lovable-uploads/b3c22956-096b-4475-8619-90ea784e020b.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+7-909-097-71-74",
          "contactType": "customer service",
          "areaServed": ["RU", "KZ", "BY", "CN", "IN"],
          "availableLanguage": ["Russian", "English", "Chinese"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Aleksandr Solzhenitsyn str., 40, building 1",
          "addressLocality": "Moscow", 
          "postalCode": "109004",
          "addressCountry": "RU"
        }
      }
    }
  },
  zh: {
    home: {
      title: "奥斯科尔-金属-贸易 - 自1994年以来的金属加工设备和原材料",
      description: "奥斯科尔-金属-贸易 - 金属加工设备、数控机床、冶金原材料和工业炉的可靠供应商。30年经验，自有VSZ生产，全周期服务。",
      keywords: "金属加工设备, 数控机床, 冶金原材料, 工业炉, 机器人系统, 生产自动化, VSZ, 奥斯科尔-金属-贸易",
      canonicalUrl: "https://oskol-met-trade.ru/zh",
      language: 'zh' as const,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "奥斯科尔-金属-贸易",
        "description": "自1994年以来供应金属加工设备、数控机床、冶金原材料和工业炉",
        "foundingDate": "1994",
        "url": "https://oskol-met-trade.ru/zh",
        "logo": "https://oskol-met-trade.ru/lovable-uploads/b3c22956-096b-4475-8619-90ea784e020b.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+7-909-097-71-74",
          "contactType": "customer service",
          "areaServed": ["RU", "KZ", "BY", "CN", "IN"],
          "availableLanguage": ["Russian", "English", "Chinese"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "亚历山大·索尔仁尼琴街40号1栋",
          "addressLocality": "莫斯科",
          "postalCode": "109004", 
          "addressCountry": "RU"
        }
      }
    }
  }
};

export default SEOHead;