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
        "text": "Мы поставляем металлообрабатывающее оборудование: станки с ЧПУ, обрабатывающие центры, токарные и шлифовальные станки, гидравлические прессы, роботизированные участки сварки и покраски."
      }
    },
    {
      "@type": "Question",
      "name": "Какой опыт работы у компании?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "ОСКОЛ-МЕТ-ТРЕЙД работает с 1994 года в области металлургии, с 2015 года занимается поставкой оборудования. За это время поставлено более 2500 станков."
      }
    },
    {
      "@type": "Question",
      "name": "Предоставляете ли вы гарантийное обслуживание?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Да, мы предоставляем гарантийное и постгарантийное обслуживание через аккредитованное предприятие на Урале, обеспечиваем круглосуточную поддержку."
      }
    },
    {
      "@type": "Question", 
      "name": "В какие страны осуществляете поставки?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Наша география поставок охватывает страны СНГ и дальнего зарубежья, включая Россию, Казахстан, Беларусь, Китай, Индию."
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
        "text": "We supply metalworking equipment: CNC machines, machining centers, lathes and grinding machines, hydraulic presses, robotic welding and painting sections."
      }
    },
    {
      "@type": "Question",
      "name": "What is the company's experience?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "OSKOL-MET-TRADE has been operating since 1994 in metallurgy, engaged in equipment supply since 2015. More than 2500 machines have been delivered during this time."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide warranty service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide warranty and post-warranty service through an accredited enterprise in the Urals, ensuring 24/7 support."
      }
    },
    {
      "@type": "Question", 
      "name": "Which countries do you deliver to?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our delivery geography covers CIS countries and far abroad, including Russia, Kazakhstan, Belarus, China, India."
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
        "text": "我们供应金属加工设备：数控机床、加工中心、车床和磨床、液压机、机器人焊接和喷漆部分。"
      }
    },
    {
      "@type": "Question",
      "name": "公司有什么经验？",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "奥斯科尔-金属-贸易自1994年从事冶金业务，自2015年从事设备供应。期间已交付超过2500台机器。"
      }
    },
    {
      "@type": "Question",
      "name": "你们提供保修服务吗？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "是的，我们通过乌拉尔地区的认证企业提供保修和售后服务，确保24/7支持。"
      }
    },
    {
      "@type": "Question", 
      "name": "你们向哪些国家交付？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "我们的交付地理覆盖独联体国家和远邦，包括俄罗斯、哈萨克斯坦、白俄罗斯、中国、印度。"
      }
    }
  ]
};

export default StructuredData;