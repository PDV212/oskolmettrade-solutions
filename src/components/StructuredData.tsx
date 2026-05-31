interface StructuredDataProps {
  type: 'Organization' | 'Product' | 'Service' | 'FAQPage' | 'BreadcrumbList';
  data: Record<string, any>;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

// Предустановленные схемы для разных типов контента
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ОСКОЛ-МЕТ-ТРЕЙД",
  "alternateName": "ООО ОСКОЛ-МЕТ-ТРЕЙД",
  "description": "Поставка металлообрабатывающего оборудования, станков ЧПУ, металлургического сырья и промышленных печей с 1994 года",
  "foundingDate": "1994",
  "url": "https://oskol-met-trade.ru",
  "logo": "https://oskol-met-trade.ru/lovable-uploads/b3c22956-096b-4475-8619-90ea784e020b.png",
  "image": [
    "https://oskol-met-trade.ru/assets/hero-industrial.jpg",
    "https://oskol-met-trade.ru/lovable-uploads/60e96441-47a3-42d5-9d37-25a8643700ee.png",
    "https://oskol-met-trade.ru/lovable-uploads/9fca8bba-f5fc-48ef-afd1-def786998cd2.png"
  ],
  "sameAs": [
    "https://stankozavod.com/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+7-909-097-71-74",
    "contactType": "customer service",
    "areaServed": ["RU", "KZ", "BY", "CN", "IN"],
    "availableLanguage": ["Russian", "English", "Chinese"],
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
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
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Металлообрабатывающее оборудование и сырьё",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Металлообрабатывающее оборудование",
          "description": "Станки с ЧПУ, обрабатывающие центры, роботизированные комплексы",
          "category": "Industrial Equipment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Металлургическое сырьё",
          "description": "Марганцевая руда, феррохром, бентонит, никельсодержащий чугун",
          "category": "Raw Materials"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Металлургические печи",
          "description": "Вакуумно-дуговые, индукционные и газовые печи",
          "category": "Industrial Furnaces"
        }
      }
    ]
  }
};

export const breadcrumbSchema = (language: 'ru' | 'en' | 'zh' = 'ru') => {
  const labels = {
    ru: {
      home: 'Главная',
      equipment: 'Оборудование', 
      materials: 'Сырье',
      furnaces: 'Печи',
      production: 'Производство',
      contacts: 'Контакты'
    },
    en: {
      home: 'Home',
      equipment: 'Equipment',
      materials: 'Materials', 
      furnaces: 'Furnaces',
      production: 'Production',
      contacts: 'Contacts'
    },
    zh: {
      home: '首页',
      equipment: '设备',
      materials: '原材料',
      furnaces: '炉子',
      production: '生产',
      contacts: '联系方式'
    }
  };

  const baseUrl = `https://oskol-met-trade.ru${language !== 'ru' ? `/${language}` : ''}`;
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": labels[language].home,
        "item": baseUrl
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": labels[language].equipment,
        "item": `${baseUrl}#equipment`
      },
      {
        "@type": "ListItem",
        "position": 3, 
        "name": labels[language].materials,
        "item": `${baseUrl}#materials`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": labels[language].furnaces,
        "item": `${baseUrl}#furnaces`
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": labels[language].contacts,
        "item": `${baseUrl}#contacts`
      }
    ]
  };
};

export const faqSchema = {
  "@context": "https://schema.org",
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
};

export const faqSchemaEn = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What equipment does OSKOL-MET-TRADE supply?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CNC machines, machining centers, lathes, milling and grinding machines, hydraulic presses, and robotic welding and painting lines with AI-driven trajectory planning based on Tekla Structures 3D models."
      }
    },
    {
      "@type": "Question",
      "name": "Since when has the company operated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In metallurgy since 1994 and in equipment supply since 2015. More than 2,500 machines have been delivered."
      }
    },
    {
      "@type": "Question",
      "name": "Which countries do you supply to?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Russia, Kazakhstan, Belarus, China and India. Communication is supported in Russian, English and Chinese."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide service and warranty?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Warranty and post-warranty service is provided through an accredited facility in the Urals with 24/7 technical support."
      }
    },
    {
      "@type": "Question",
      "name": "What raw materials are available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Manganese ore, ferrochrome, bentonite, nickel-containing pig iron and other alloying materials for metallurgical production."
      }
    },
    {
      "@type": "Question",
      "name": "Where is the company registered?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OSKOL-MET-TRADE LLC. TIN 3127508337, OGRN 1033108702868. Registered office: 20 Mira St., office 312/1, Gubkin, Belgorod Region, 309181, Russia."
      }
    }
  ]
};

export const faqSchemaZh = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "奥斯科尔-金属-贸易供应什么设备？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "数控机床、加工中心、车床、铣床、磨床、液压机以及基于Tekla Structures三维模型进行AI轨迹规划的机器人焊接和喷漆生产线。"
      }
    },
    {
      "@type": "Question",
      "name": "公司成立多久了？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "自1994年起从事冶金业务，自2015年起供应设备，已交付超过2500台机床。"
      }
    },
    {
      "@type": "Question",
      "name": "向哪些国家供货？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "俄罗斯、哈萨克斯坦、白俄罗斯、中国和印度。支持俄语、英语和中文沟通。"
      }
    },
    {
      "@type": "Question",
      "name": "是否提供服务和保修？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "是的。通过乌拉尔地区的认证企业提供保修和售后服务，提供24/7技术支持。"
      }
    },
    {
      "@type": "Question",
      "name": "提供哪些原材料？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "锰矿、铬铁、膨润土、含镍生铁以及其他冶金生产用合金材料。"
      }
    },
    {
      "@type": "Question",
      "name": "公司注册地址是？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OSKOL-MET-TRADE有限责任公司。税号 3127508337，OGRN 1033108702868。注册地址：俄罗斯别尔哥罗德州古布金市米拉街20号312/1办公室，邮编309181。"
      }
    }
  ]
};

export default StructuredData;