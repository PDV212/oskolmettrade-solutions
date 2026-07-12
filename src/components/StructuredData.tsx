/**
 * Sitewide structured-data building blocks.
 *
 * Claim-safety policy applied:
 *  - No aggregateRating (no verified public reviews).
 *  - No claim that OSKOL-MET-TRADE LLC has operated since 1994.
 *  - No ≈2,500-unit metric, no 10-country geography, no 25+ Asian
 *    factories claim, no universal warranty / accreditation claim.
 *  - Domain and postal address match the verified legal identity
 *    (Gubkin, Belgorod Region).
 *  - FAQPage entries mirror visible FAQSection wording exactly.
 */

interface StructuredDataProps {
  type:
    | 'Organization'
    | 'Product'
    | 'Service'
    | 'FAQPage'
    | 'BreadcrumbList'
    | 'AboutPage'
    | 'ItemList'
    | 'CreativeWork';
  data: Record<string, any>;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

const SITE = 'https://www.xn-----llccbycikqb3afub.xn--p1ai';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: 'OSKOL-MET-TRADE LLC',
  alternateName: ['ООО «ОСКОЛ-МЕТ-ТРЕЙД»', 'ОСКОЛ-МЕТ-ТРЕЙД'],
  legalName: 'ООО «ОСКОЛ-МЕТ-ТРЕЙД»',
  description:
    'B2B-поставщик металлообрабатывающего оборудования, металлургического сырья и промышленных печей. Отраслевой опыт команды и основателя формируется с 1994 года (не является датой начала деятельности юридического лица).',
  url: SITE,
  logo: `${SITE}/lovable-uploads/b3c22956-096b-4475-8619-90ea784e020b.png`,
  taxID: '3127508337',
  identifier: [
    { '@type': 'PropertyValue', propertyID: 'INN', value: '3127508337' },
    { '@type': 'PropertyValue', propertyID: 'KPP', value: '312701001' },
    { '@type': 'PropertyValue', propertyID: 'OGRN', value: '1033108702868' },
    { '@type': 'PropertyValue', propertyID: 'OKPO', value: '14943277' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+7-909-097-71-74',
    contactType: 'customer service',
    availableLanguage: ['Russian', 'English', 'Chinese'],
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ул. Мира, 20, оф. 312/1',
    addressLocality: 'Губкин',
    addressRegion: 'Белгородская область',
    postalCode: '309181',
    addressCountry: 'RU',
  },
};

export const breadcrumbSchema = (language: 'ru' | 'en' | 'zh' = 'ru') => {
  const labels = {
    ru: { home: 'Главная', equipment: 'Оборудование', materials: 'Сырьё', furnaces: 'Печи', contacts: 'Контакты' },
    en: { home: 'Home', equipment: 'Equipment', materials: 'Materials', furnaces: 'Furnaces', contacts: 'Contacts' },
    zh: { home: '首页', equipment: '设备', materials: '原材料', furnaces: '炉子', contacts: '联系方式' },
  } as const;

  const baseUrl = `${SITE}${language !== 'ru' ? `/${language}` : ''}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: labels[language].home, item: baseUrl },
      { '@type': 'ListItem', position: 2, name: labels[language].equipment, item: `${baseUrl}#equipment` },
      { '@type': 'ListItem', position: 3, name: labels[language].materials, item: `${baseUrl}#materials` },
      { '@type': 'ListItem', position: 4, name: labels[language].furnaces, item: `${baseUrl}#furnaces` },
      { '@type': 'ListItem', position: 5, name: labels[language].contacts, item: `${baseUrl}#contacts` },
    ],
  };
};

/* FAQ schemas mirror the visible wording of FAQSection.tsx. */
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Какое оборудование поставляет ОСКОЛ-МЕТ-ТРЕЙД?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Станки с ЧПУ, обрабатывающие центры, токарные, фрезерные и шлифовальные станки, гидравлические прессы, роботизированные участки сварки и покраски. Конкретные модели, комплектация и характеристики согласовываются в рамках отдельного проекта.',
      },
    },
    {
      '@type': 'Question',
      name: 'С какого года формируется отраслевой опыт?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Отраслевая работа основателя и накопление опыта команды начались в 1994 году. Эта дата не является датой начала деятельности текущего юридического лица ООО «ОСКОЛ-МЕТ-ТРЕЙД».',
      },
    },
    {
      '@type': 'Question',
      name: 'В какие страны осуществляется поставка?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Направление и условия поставки определяются по каждому проекту отдельно. Коммуникация поддерживается на русском, английском и китайском языках.',
      },
    },
    {
      '@type': 'Question',
      name: 'Предоставляется ли сервис и гарантия?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Условия гарантийного и постгарантийного обслуживания фиксируются в договоре под конкретный проект и зависят от поставщика оборудования и региона монтажа.',
      },
    },
    {
      '@type': 'Question',
      name: 'Какое сырьё доступно к поставке?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Направления по сырью включают марганцевую руду, феррохром, бентонит, никельсодержащий чугун и другие легирующие материалы. Доступность конкретной партии подтверждается по запросу.',
      },
    },
    {
      '@type': 'Question',
      name: 'Где находится компания и каковы реквизиты?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ООО «ОСКОЛ-МЕТ-ТРЕЙД», ИНН 3127508337, ОГРН 1033108702868. Юр. адрес: 309181, Белгородская область, г. Губкин, ул. Мира, 20, оф. 312/1.',
      },
    },
  ],
};

export const faqSchemaEn = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What equipment does OSKOL-MET-TRADE supply?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CNC machines, machining centers, lathes, milling and grinding machines, hydraulic presses, and robotic welding and painting lines. Specific models, configuration and specifications are agreed for each individual project.',
      },
    },
    {
      '@type': 'Question',
      name: "Since when has the team's industry experience been formed?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The founder's industry work and the team's accumulated experience date from 1994. This is not the start date of the current legal entity, OSKOL-MET-TRADE LLC.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which countries do you supply to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Destination and delivery terms are agreed per project. Communication is supported in Russian, English and Chinese.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide service and warranty?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Warranty and post-warranty terms are fixed in the contract for each individual project and depend on the equipment supplier and the region of installation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What raw materials are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Product areas include manganese ore, ferrochrome, bentonite, nickel-containing pig iron and other alloying materials. Availability of a specific consignment is confirmed on request.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is the company registered?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OSKOL-MET-TRADE LLC. TIN 3127508337, OGRN 1033108702868. Registered office: 20 Mira St., office 312/1, Gubkin, Belgorod Region, 309181, Russia.',
      },
    },
  ],
};

export const faqSchemaZh = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '奥斯科尔-金属-贸易供应什么设备？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '数控机床、加工中心、车床、铣床、磨床、液压机以及机器人焊接和喷漆生产线。具体型号、配置和技术规格按项目单独商定。',
      },
    },
    {
      '@type': 'Question',
      name: '团队的行业经验始于何时？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '创始人的行业工作及团队经验积累始于 1994 年。该日期并非当前法人实体 OSKOL-MET-TRADE 有限责任公司的成立或经营起始日期。',
      },
    },
    {
      '@type': 'Question',
      name: '向哪些国家供货？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '目的地和交付条款按项目单独确定。支持俄语、英语和中文沟通。',
      },
    },
    {
      '@type': 'Question',
      name: '是否提供服务和保修？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '保修和售后服务条款按每个具体项目在合同中约定，取决于设备供应方和安装所在地区。',
      },
    },
    {
      '@type': 'Question',
      name: '提供哪些原材料？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '原材料方向包括锰矿、铬铁、膨润土、含镍生铁以及其他合金材料。具体批次的可供性可根据询价确认。',
      },
    },
    {
      '@type': 'Question',
      name: '公司注册地址是？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OSKOL-MET-TRADE 有限责任公司。税号 3127508337，OGRN 1033108702868。注册地址：俄罗斯别尔哥罗德州古布金市米拉街 20 号 312/1 办公室，邮编 309181。',
      },
    },
  ],
};

export default StructuredData;
