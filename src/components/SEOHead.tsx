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
  title = "ОСКОЛ-МЕТ-ТРЕЙД - Металлообрабатывающее оборудование и сырьё с 1994 года",
  description = "ОСКОЛ-МЕТ-ТРЕЙД - надежный поставщик металлообрабатывающего оборудования, станков ЧПУ, металлургического сырья и промышленных печей. 30 лет опыта, собственное производство ВСЗ, полный цикл услуг.",
  keywords = "металлообрабатывающее оборудование, станки ЧПУ, металлургическое сырьё, промышленные печи, роботизированные комплексы, автоматизация производства, ВСЗ, ОСКОЛ-МЕТ-ТРЕЙД",
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
      title: "ОСКОЛ-МЕТ-ТРЕЙД - Металлообрабатывающее оборудование и сырьё с 1994 года",
      description: "ОСКОЛ-МЕТ-ТРЕЙД - надежный поставщик металлообрабатывающего оборудования, станков ЧПУ, металлургического сырья и промышленных печей. 30 лет опыта, собственное производство ВСЗ, полный цикл услуг.",
      keywords: "металлообрабатывающее оборудование, станки ЧПУ, металлургическое сырьё, промышленные печи, роботизированные комплексы, автоматизация производства, ВСЗ, ОСКОЛ-МЕТ-ТРЕЙД",
      language: 'ru' as const,
      structuredData: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "name": "ОСКОЛ-МЕТ-ТРЕЙД",
            "url": "https://oskolmettrade-solutions.lovable.app",
            "foundingDate": "1994",
            "description": "Поставка металлообрабатывающего оборудования из ЮВА с 1994 года",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ул. Мира, 20, оф. 312/1",
              "addressLocality": "Губкин",
              "addressRegion": "Белгородская область",
              "postalCode": "309181",
              "addressCountry": "RU"
            },
            "telephone": "+7-495-240-91-99",
            "email": "89090977174@mail.ru",
            "sameAs": []
          },
          {
            "@type": "WebSite",
            "name": "ОСКОЛ-МЕТ-ТРЕЙД",
            "url": "https://oskolmettrade-solutions.lovable.app",
            "inLanguage": ["ru", "en", "zh"]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Какое оборудование поставляет ОСКОЛ-МЕТ-ТРЕЙД?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Станки с ЧПУ, обрабатывающие центры, токарные, фрезерные и шлифовальные станки, гидравлические прессы, роботизированные участки сварки и покраски с AI-расчётом траекторий по 3D-чертежам Tekla Structures."
                }
              },
              {
                "@type": "Question",
                "name": "С какого года работает компания?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Компания работает в металлургии с 1994 года. Поставкой оборудования занимается с 2015 года, за это время реализовано более 2 500 станков."
                }
              },
              {
                "@type": "Question",
                "name": "В какие страны осуществляется поставка?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Россия, Казахстан, Беларусь, Китай, Индия. Поддерживается мультиязычная коммуникация на русском, английском и китайском."
                }
              },
              {
                "@type": "Question",
                "name": "Предоставляется ли сервис и гарантия?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Да. Гарантийное и постгарантийное обслуживание осуществляется через аккредитованное предприятие на Урале с круглосуточной технической поддержкой."
                }
              },
              {
                "@type": "Question",
                "name": "Какое сырьё доступно к поставке?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Марганцевая руда, феррохром, бентонит, никельсодержащий чугун и другие легирующие материалы для металлургического производства."
                }
              },
              {
                "@type": "Question",
                "name": "Где находится компания и каковы реквизиты?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ООО «ОСКОЛ-МЕТ-ТРЕЙД», ИНН 3127508337, ОГРН 1033108702868. Юр. адрес: 309181, Белгородская область, г. Губкин, ул. Мира, 20, оф. 312/1."
                }
              }
            ]
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