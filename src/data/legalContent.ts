/**
 * Multilingual legal-content source for the Privacy and Cookies pages.
 * Section IDs are stable and identical across ru/en/zh.
 * Only verified technical facts about the current static website are
 * described here. See the site owner before adding any claim that is not
 * already present.
 */

export type LegalLanguage = "ru" | "en" | "zh";
export type LegalTopic = "privacy" | "cookies";

export interface LegalSection {
  id: string;
  heading: string;
  paragraphs?: string[];
  items?: string[];
}

export interface LegalTableRow {
  technology: string;
  name: string;
  purpose: string;
  trigger: string;
  retention: string;
  category: string;
  thirdParty: string;
}

export interface LegalTable {
  caption: string;
  columns: {
    technology: string;
    name: string;
    purpose: string;
    trigger: string;
    retention: string;
    category: string;
    thirdParty: string;
  };
  rows: LegalTableRow[];
}

export interface LegalPageContent {
  language: LegalLanguage;
  topic: LegalTopic;
  title: string;
  description: string;
  h1: string;
  intro: string;
  lastReviewedLabel: string;
  lastReviewedDisplay: string;
  lastReviewedIso: string;
  sections: LegalSection[];
  table?: LegalTable;
}

const LAST_REVIEWED_ISO = "2026-07-10";

/* --------------------------------- PRIVACY -------------------------------- */

const privacyRu: LegalPageContent = {
  language: "ru",
  topic: "privacy",
  title: "Информация об обработке данных на сайте | ОСКОЛ-МЕТ-ТРЕЙД",
  description:
    "Технические сведения о том, какие данные могут обрабатываться при посещении информационного сайта ООО «ОСКОЛ-МЕТ-ТРЕЙД».",
  h1: "Информация об обработке данных на сайте",
  intro:
    "На этой странице описано, какие технические данные могут обрабатываться в связи с посещением настоящего информационного сайта. Страница не является универсальной политикой в отношении сотрудников, поставщиков, договорной работы, деловой переписки или иной офлайн-деятельности компании.",
  lastReviewedLabel: "Дата последнего пересмотра",
  lastReviewedDisplay: "10 июля 2026 г.",
  lastReviewedIso: LAST_REVIEWED_ISO,
  sections: [
    {
      id: "operator",
      heading: "Оператор сайта",
      paragraphs: [
        "Сайт принадлежит и поддерживается ООО «ОСКОЛ-МЕТ-ТРЕЙД».",
      ],
      items: [
        "Полное наименование: Общество с ограниченной ответственностью «ОСКОЛ-МЕТ-ТРЕЙД»",
        "ИНН 3127508337",
        "ОГРН 1033108702868",
        "Адрес: 309181, Белгородская область, г. Губкин, ул. Мира, 20, оф. 312/1",
        "Телефон: +7 909 097 71 74",
        "Электронная почта: 89090977174@mail.ru",
      ],
    },
    {
      id: "not-collected",
      heading: "Данные, которые сайт активно не собирает",
      paragraphs: [
        "Текущая версия сайта:",
      ],
      items: [
        "не содержит активных форм обратной связи и форм заявок;",
        "не использует подключённые компанией системы веб-аналитики (в частности, GA4, Яндекс Метрика, Google Tag Manager);",
        "не использует рекламные трекеры и пиксели;",
        "не использует технологии сессионной записи (session-replay);",
        "не подгружает автоматически сторонние карты, видеоплееры или виджеты мессенджеров с внешних источников.",
      ],
    },
    {
      id: "hosting",
      heading: "Технические данные, обрабатываемые инфраструктурой хостинга",
      paragraphs: [
        "Для доставки сайта и обеспечения его безопасности хостинг-провайдер и сеть доставки контента (CDN) могут технически обрабатывать данные запроса, в том числе:",
      ],
      items: [
        "IP-адрес посетителя;",
        "строку User-Agent браузера;",
        "дату и время запроса;",
        "запрошенный URL и HTTP-статус ответа;",
        "технические журналы для целей безопасности и защиты от злоупотреблений.",
      ],
    },
    {
      id: "hosting-limits",
      heading: "Границы известной информации об инфраструктуре",
      paragraphs: [
        "Точное расположение серверов, точки присутствия CDN, а также срок хранения технических журналов определяются документацией и настройками хостинг-провайдера. Оператор сайта не публикует эти параметры до их официального подтверждения.",
      ],
    },
    {
      id: "browser-storage",
      heading: "Локальное браузерное хранение",
      paragraphs: [
        "Сайт использует ограниченное браузерное хранение технического характера (функциональные cookie, локальное хранилище, кэш сервис-воркера). Подробности приведены на отдельной странице «Cookie и локальное хранилище».",
      ],
    },
    {
      id: "external-contacts",
      heading: "Внешние ссылки и QR-коды",
      paragraphs: [
        "Действия по номеру телефона, электронной почте, WhatsApp, Яндекс Картам и другим внешним сервисам выполняются только после сознательного нажатия посетителем на соответствующую ссылку. К таким сервисам применяются их собственные правила и политики конфиденциальности.",
        "QR-коды WeChat и Telegram размещены как локальные изображения. Само отображение изображения не устанавливает соединение с WeChat или Telegram. Сканирование или использование зашифрованного в QR адреса — сознательное действие пользователя. Оператор сайта не подтверждает точное содержимое QR-кода до его независимой проверки.",
      ],
    },
    {
      id: "purposes",
      heading: "Цели обработки",
      paragraphs: [
        "Технические данные запроса могут использоваться исключительно для:",
      ],
      items: [
        "доставки страниц и статических ресурсов сайта;",
        "обеспечения технической безопасности;",
        "диагностики сбоев и ошибок;",
        "предотвращения злоупотреблений (например, автоматизированных атак).",
      ],
    },
    {
      id: "security",
      heading: "Безопасность и минимизация",
      paragraphs: [
        "Приложение спроектировано так, чтобы минимизировать сбор данных на стороне сайта. Абсолютная безопасность передачи данных через сеть Интернет не может быть гарантирована. Часть технических параметров обработки контролируется хостинг-провайдером.",
      ],
    },
    {
      id: "updates",
      heading: "Обновление документа",
      paragraphs: [
        "Настоящий документ подлежит пересмотру при добавлении на сайт форм, систем веб-аналитики, встраиваемого стороннего содержимого, CRM, CAPTCHA, баз данных, персонализированных аккаунтов или иных функций, изменяющих характер обработки данных.",
      ],
    },
    {
      id: "contact",
      heading: "Контакты",
      paragraphs: [
        "По вопросам, связанным с работой сайта, вы можете обратиться:",
      ],
      items: [
        "ООО «ОСКОЛ-МЕТ-ТРЕЙД»",
        "Адрес: 309181, Белгородская область, г. Губкин, ул. Мира, 20, оф. 312/1",
        "Телефон: +7 909 097 71 74",
        "Электронная почта: 89090977174@mail.ru",
      ],
    },
  ],
};

const privacyEn: LegalPageContent = {
  language: "en",
  topic: "privacy",
  title: "Website data processing notice | OSKOL-MET-TRADE",
  description:
    "Technical information about the data that may be processed when visiting the informational website of OSKOL-MET-TRADE LLC.",
  h1: "Website data processing notice",
  intro:
    "This page describes what technical data may be processed in connection with visits to this informational website. It is not a universal policy covering employees, suppliers, contractual work, business correspondence or other offline activities of the company.",
  lastReviewedLabel: "Last reviewed",
  lastReviewedDisplay: "10 July 2026",
  lastReviewedIso: LAST_REVIEWED_ISO,
  sections: [
    {
      id: "operator",
      heading: "Website operator",
      paragraphs: [
        "This website is owned and operated by OSKOL-MET-TRADE LLC (in Russian: ООО «ОСКОЛ-МЕТ-ТРЕЙД»).",
      ],
      items: [
        "Legal name: Общество с ограниченной ответственностью «ОСКОЛ-МЕТ-ТРЕЙД» (OSKOL-MET-TRADE LLC)",
        "INN (tax ID): 3127508337",
        "OGRN (state registration): 1033108702868",
        "Address: 20 Mira Street, office 312/1, Gubkin, Belgorod Region, 309181, Russia",
        "Phone: +7 909 097 71 74",
        "Email: 89090977174@mail.ru",
      ],
    },
    {
      id: "not-collected",
      heading: "Data the website does not actively collect",
      paragraphs: ["The current version of this website:"],
      items: [
        "contains no active contact or lead-generation forms;",
        "does not use company-enabled web analytics systems (in particular GA4, Yandex Metrica, Google Tag Manager);",
        "does not use advertising trackers or pixels;",
        "does not use session-replay technology;",
        "does not automatically load third-party maps, video players or messenger widgets from external origins.",
      ],
    },
    {
      id: "hosting",
      heading: "Technical data processed by hosting infrastructure",
      paragraphs: [
        "To deliver the website and to keep it secure, the hosting provider and content delivery network (CDN) may technically process request data, potentially including:",
      ],
      items: [
        "the visitor's IP address;",
        "the browser User-Agent string;",
        "date and time of the request;",
        "the requested URL and the HTTP response status;",
        "technical security and abuse-prevention logs.",
      ],
    },
    {
      id: "hosting-limits",
      heading: "Limits of what is known about the infrastructure",
      paragraphs: [
        "The exact server location, CDN edge locations and technical log-retention period depend on the hosting provider's settings and documentation. The website operator does not publish these values until they can be confirmed from provider documentation.",
      ],
    },
    {
      id: "browser-storage",
      heading: "Browser-side technical storage",
      paragraphs: [
        "The website uses a limited amount of browser-side technical storage (functional cookies, local storage, service-worker cache). Details are provided on the separate \"Cookies and local storage\" page.",
      ],
    },
    {
      id: "external-contacts",
      heading: "External links and QR codes",
      paragraphs: [
        "Actions such as phone dialing, email, WhatsApp or Yandex Maps occur only after the visitor deliberately activates the corresponding link. These external services apply their own terms and privacy rules.",
        "The WeChat and Telegram QR codes are served as locally hosted images. Displaying the image itself does not contact WeChat or Telegram. Scanning or using the destination encoded in the QR image is a deliberate user action. The website operator does not claim to know the exact QR destination until it has been independently verified.",
      ],
    },
    {
      id: "purposes",
      heading: "Purposes of processing",
      paragraphs: [
        "Technical request data may be used solely for:",
      ],
      items: [
        "delivering pages and static assets of the website;",
        "maintaining technical security;",
        "diagnosing failures and errors;",
        "preventing abuse (for example automated attacks).",
      ],
    },
    {
      id: "security",
      heading: "Security and data minimization",
      paragraphs: [
        "The application is designed to minimize data collection on the website side. No absolute security of data transmission over the Internet can be guaranteed. Part of the technical processing is controlled by the hosting provider.",
      ],
    },
    {
      id: "updates",
      heading: "Updates to this notice",
      paragraphs: [
        "This notice must be reviewed if forms, web analytics, embedded third-party content, CRM, CAPTCHA, databases, authenticated accounts or other features that change the nature of data processing are added to the website.",
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      paragraphs: [
        "For questions related to the operation of this website you may reach us at:",
      ],
      items: [
        "OSKOL-MET-TRADE LLC (ООО «ОСКОЛ-МЕТ-ТРЕЙД»)",
        "Address: 20 Mira Street, office 312/1, Gubkin, Belgorod Region, 309181, Russia",
        "Phone: +7 909 097 71 74",
        "Email: 89090977174@mail.ru",
      ],
    },
  ],
};

const privacyZh: LegalPageContent = {
  language: "zh",
  topic: "privacy",
  title: "网站数据处理说明 | OSKOL-MET-TRADE",
  description:
    "关于访问 OSKOL-MET-TRADE 有限责任公司信息类网站时可能处理的数据的技术性说明。",
  h1: "网站数据处理说明",
  intro:
    "本页说明访问本信息类网站时可能处理的技术数据。本页不构成涵盖公司员工、供应商、合同工作、商务往来或其他线下经营活动的通用政策。",
  lastReviewedLabel: "最后审阅日期",
  lastReviewedDisplay: "2026年7月10日",
  lastReviewedIso: LAST_REVIEWED_ISO,
  sections: [
    {
      id: "operator",
      heading: "网站运营者",
      paragraphs: [
        "本网站由 OSKOL-MET-TRADE 有限责任公司（俄文：ООО «ОСКОЛ-МЕТ-ТРЕЙД»）所有并运营。",
      ],
      items: [
        "法定名称：Общество с ограниченной ответственностью «ОСКОЛ-МЕТ-ТРЕЙД»（OSKOL-MET-TRADE LLC）",
        "纳税人识别号 INN：3127508337",
        "国家注册号 OGRN：1033108702868",
        "地址：俄罗斯别尔哥罗德州古布金市和平街20号312/1办公室，邮编309181",
        "电话：+7 909 097 71 74",
        "电子邮箱：89090977174@mail.ru",
      ],
    },
    {
      id: "not-collected",
      heading: "本网站不主动收集的数据",
      paragraphs: ["本网站当前版本："],
      items: [
        "不包含用于反馈或咨询的活跃表单；",
        "未启用公司自建的网站分析系统（包括 GA4、Yandex Metrica、Google Tag Manager 等）；",
        "未使用广告追踪器或像素代码；",
        "未使用会话回放（session-replay）类技术；",
        "不会自动从外部来源加载第三方地图、视频播放器或即时通讯组件。",
      ],
    },
    {
      id: "hosting",
      heading: "托管基础设施可能处理的技术数据",
      paragraphs: [
        "为交付网站内容并保障其安全，托管服务商和内容分发网络（CDN）在技术上可能处理请求数据，可能包括：",
      ],
      items: [
        "访问者的 IP 地址；",
        "浏览器 User-Agent 字符串；",
        "请求的日期与时间；",
        "所请求的 URL 及 HTTP 响应状态；",
        "用于安全及防滥用目的的技术日志。",
      ],
    },
    {
      id: "hosting-limits",
      heading: "关于基础设施可确认信息的边界",
      paragraphs: [
        "服务器的具体位置、CDN 节点位置以及技术日志保留期限由托管服务商的设置和文档决定。网站运营者在获得供应商文档正式确认之前不公布这些参数。",
      ],
    },
    {
      id: "browser-storage",
      heading: "浏览器端的技术性存储",
      paragraphs: [
        "本网站使用少量浏览器端技术性存储（功能性 cookie、本地存储、Service Worker 缓存），详情见另一页面《Cookie 与本地存储》。",
      ],
    },
    {
      id: "external-contacts",
      heading: "外部链接与二维码",
      paragraphs: [
        "拨打电话、发送邮件、访问 WhatsApp 或 Yandex 地图等操作，仅在访问者主动点击相应链接后才会发生。上述外部服务适用其自身的条款与隐私规则。",
        "WeChat（微信）与 Telegram 二维码均以本站本地图片形式展示。仅显示该图片本身不会与 WeChat 或 Telegram 建立通信。扫描或使用二维码所编码的目标地址属于用户的主动行为。网站运营者在未经独立核实前，不声称掌握该二维码的确切目标。",
      ],
    },
    {
      id: "purposes",
      heading: "处理目的",
      paragraphs: ["技术请求数据仅可用于以下目的："],
      items: [
        "交付网站页面及静态资源；",
        "维护技术安全；",
        "诊断故障与错误；",
        "防止滥用行为（例如自动化攻击）。",
      ],
    },
    {
      id: "security",
      heading: "安全与数据最小化",
      paragraphs: [
        "本应用在网站侧尽量减少数据收集。互联网传输的绝对安全无法保证。部分技术处理由托管服务商控制。",
      ],
    },
    {
      id: "updates",
      heading: "本说明的更新",
      paragraphs: [
        "若本网站增加表单、网站分析、嵌入的第三方内容、CRM、CAPTCHA、数据库、需要登录的账户或其他会改变数据处理性质的功能，应对本说明进行重新审阅。",
      ],
    },
    {
      id: "contact",
      heading: "联系方式",
      paragraphs: ["如有与本网站运营相关的问题，可通过以下方式联系我们："],
      items: [
        "OSKOL-MET-TRADE 有限责任公司（ООО «ОСКОЛ-МЕТ-ТРЕЙД»）",
        "地址：俄罗斯别尔哥罗德州古布金市和平街20号312/1办公室，邮编309181",
        "电话：+7 909 097 71 74",
        "电子邮箱：89090977174@mail.ru",
      ],
    },
  ],
};

/* --------------------------------- COOKIES -------------------------------- */

const swCacheNames =
  "oskol-met-trade-v2025-01-03, static-v2025-01-03, dynamic-v2025-01-03, images-v2025-01-03";

const cookiesRu: LegalPageContent = {
  language: "ru",
  topic: "cookies",
  title: "Cookie и локальное хранилище | ОСКОЛ-МЕТ-ТРЕЙД",
  description:
    "Какие cookie, локальное хранилище и кэш использует информационный сайт ООО «ОСКОЛ-МЕТ-ТРЕЙД» и с какой целью.",
  h1: "Cookie и локальное хранилище",
  intro:
    "На этой странице перечислены технологии браузерного хранения, которые фактически использует настоящий сайт, а также указано, какие категории технологий на нём не применяются.",
  lastReviewedLabel: "Дата последнего пересмотра",
  lastReviewedDisplay: "10 июля 2026 г.",
  lastReviewedIso: LAST_REVIEWED_ISO,
  sections: [
    {
      id: "summary",
      heading: "Кратко",
      paragraphs: [
        "Сайт не использует cookie для веб-аналитики, рекламы или межсайтового отслеживания. Применяются только технические механизмы хранения, необходимые для работы интерфейса, кэширования одинакового источника и офлайн-устойчивости.",
      ],
    },
    {
      id: "functional-cookie",
      heading: "Функциональные cookie",
      paragraphs: [
        "На сайте применяется одна функциональная cookie, запоминающая состояние боковой панели интерфейса.",
      ],
    },
    {
      id: "local-storage",
      heading: "Локальное хранилище (Local Storage)",
      paragraphs: [
        "Локальное хранилище используется для технического кэширования содержимого одинакового источника с ограниченным временем жизни (TTL). Ключи с префиксом cache_* не содержат известных рекламных или аналитических идентификаторов.",
      ],
    },
    {
      id: "service-worker",
      heading: "Service Worker и браузерный кэш",
      paragraphs: [
        "Для повышения производительности и офлайн-устойчивости сайт использует same-origin Service Worker, который кэширует статические ресурсы (изображения, шрифты, файлы CSS/JS, HTML-документы того же источника) в собственных кэшах браузера (Cache Storage).",
        "Service Worker и Cache Storage не являются cookie и не используются для отслеживания.",
      ],
    },
    {
      id: "no-analytics",
      heading: "Аналитические и рекламные технологии",
      paragraphs: [
        "На сайте не установлены аналитические cookie, рекламные cookie, cookie межсайтового отслеживания и идентификаторы для сессионной записи.",
      ],
    },
    {
      id: "managing",
      heading: "Управление хранилищем в браузере",
      paragraphs: [
        "Вы можете очистить cookie и данные сайта в настройках вашего браузера. Очистка технического хранилища может привести к сбросу настроек интерфейса и временному удалению кэшированных ресурсов.",
      ],
    },
    {
      id: "changes",
      heading: "Изменения, требующие пересмотра",
      paragraphs: [
        "Добавление веб-аналитики, форм, CAPTCHA, встраиваемых карт или видео, CRM, авторизации или персонализированных аккаунтов требует нового технического и юридического пересмотра до активации соответствующих функций.",
      ],
    },
    {
      id: "contact",
      heading: "Контакты",
      items: [
        "ООО «ОСКОЛ-МЕТ-ТРЕЙД»",
        "Адрес: 309181, Белгородская область, г. Губкин, ул. Мира, 20, оф. 312/1",
        "Телефон: +7 909 097 71 74",
        "Электронная почта: 89090977174@mail.ru",
      ],
    },
  ],
  table: {
    caption: "Технологии браузерного хранения, используемые сайтом",
    columns: {
      technology: "Технология",
      name: "Имя / ключ",
      purpose: "Назначение",
      trigger: "Условие создания",
      retention: "Срок хранения",
      category: "Категория",
      thirdParty: "Доступ третьих лиц",
    },
    rows: [
      {
        technology: "Cookie",
        name: "sidebar:state",
        purpose: "Запоминает состояние боковой панели интерфейса",
        trigger:
          "Создаётся или обновляется после того, как пользователь переключает боковую панель",
        retention: "7 дней",
        category: "Функциональная",
        thirdParty: "Приложением не реализован",
      },
      {
        technology: "Local Storage",
        name: "cache_*",
        purpose:
          "Технический кэш ответов/содержимого одного источника с TTL",
        trigger: "Операция кэширования в приложении",
        retention: "До истечения TTL, замены или очистки хранилища браузером",
        category: "Технологическая / производительность",
        thirdParty: "Приложением не реализован",
      },
      {
        technology: "Service Worker Cache / Cache Storage",
        name: swCacheNames,
        purpose:
          "Кэширование статических ресурсов одного источника, производительность и офлайн-устойчивость",
        trigger: "Работа сайта и Service Worker",
        retention:
          "До замены кэша, очистки браузером или обновления Service Worker",
        category: "Технологическая",
        thirdParty: "Приложением не реализован",
      },
    ],
  },
};

const cookiesEn: LegalPageContent = {
  language: "en",
  topic: "cookies",
  title: "Cookies and local storage | OSKOL-MET-TRADE",
  description:
    "Which cookies, local storage keys and caches the OSKOL-MET-TRADE LLC informational website actually uses and for what purpose.",
  h1: "Cookies and local storage",
  intro:
    "This page lists the browser-side storage technologies that this website actually uses, and states which categories of technologies are not used.",
  lastReviewedLabel: "Last reviewed",
  lastReviewedDisplay: "10 July 2026",
  lastReviewedIso: LAST_REVIEWED_ISO,
  sections: [
    {
      id: "summary",
      heading: "Summary",
      paragraphs: [
        "The website does not use cookies for web analytics, advertising or cross-site tracking. Only technical storage mechanisms required for interface behaviour, same-origin caching and offline resilience are used.",
      ],
    },
    {
      id: "functional-cookie",
      heading: "Functional cookie",
      paragraphs: [
        "The website uses one functional cookie that remembers the state of the sidebar interface.",
      ],
    },
    {
      id: "local-storage",
      heading: "Local Storage",
      paragraphs: [
        "Local Storage is used for technical same-origin caching of content with a limited time-to-live (TTL). Keys prefixed with cache_* do not contain known advertising or analytics identifiers.",
      ],
    },
    {
      id: "service-worker",
      heading: "Service Worker and browser cache",
      paragraphs: [
        "To improve performance and offline resilience the website uses a same-origin Service Worker that caches static assets (images, fonts, CSS/JS files, same-origin HTML documents) in dedicated browser caches (Cache Storage).",
        "The Service Worker and Cache Storage are not cookies and are not used for tracking.",
      ],
    },
    {
      id: "no-analytics",
      heading: "Analytics and advertising technologies",
      paragraphs: [
        "The website does not install analytics cookies, advertising cookies, cross-site tracking cookies or session-replay identifiers.",
      ],
    },
    {
      id: "managing",
      heading: "Managing browser storage",
      paragraphs: [
        "You can clear cookies and site data through your browser settings. Clearing technical storage may reset interface preferences and temporarily remove cached resources.",
      ],
    },
    {
      id: "changes",
      heading: "Changes that require review",
      paragraphs: [
        "Adding web analytics, forms, CAPTCHA, embedded maps or videos, CRM, authentication or personalised accounts requires a new technical and legal review before the corresponding features are activated.",
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      items: [
        "OSKOL-MET-TRADE LLC (ООО «ОСКОЛ-МЕТ-ТРЕЙД»)",
        "Address: 20 Mira Street, office 312/1, Gubkin, Belgorod Region, 309181, Russia",
        "Phone: +7 909 097 71 74",
        "Email: 89090977174@mail.ru",
      ],
    },
  ],
  table: {
    caption: "Browser-side storage technologies used by the website",
    columns: {
      technology: "Technology",
      name: "Key / name",
      purpose: "Purpose",
      trigger: "Trigger",
      retention: "Retention",
      category: "Category",
      thirdParty: "Third-party access",
    },
    rows: [
      {
        technology: "Cookie",
        name: "sidebar:state",
        purpose: "Remembers the state of the sidebar interface",
        trigger:
          "Created or updated after the user toggles the sidebar",
        retention: "7 days",
        category: "Functional",
        thirdParty: "None implemented by the application",
      },
      {
        technology: "Local Storage",
        name: "cache_*",
        purpose:
          "Technical same-origin response/content cache with TTL",
        trigger: "Application caching operation",
        retention:
          "Until TTL expiry, replacement or browser storage removal",
        category: "Performance / technical",
        thirdParty: "None implemented by the application",
      },
      {
        technology: "Service Worker Cache / Cache Storage",
        name: swCacheNames,
        purpose:
          "Same-origin static asset caching, performance and offline resilience",
        trigger: "Website / Service Worker operation",
        retention:
          "Until cache replacement, browser cleanup or Service Worker update",
        category: "Technical",
        thirdParty: "None implemented by the application",
      },
    ],
  },
};

const cookiesZh: LegalPageContent = {
  language: "zh",
  topic: "cookies",
  title: "Cookie 与本地存储 | OSKOL-MET-TRADE",
  description:
    "OSKOL-MET-TRADE 有限责任公司信息类网站实际使用的 cookie、本地存储和缓存及其用途。",
  h1: "Cookie 与本地存储",
  intro:
    "本页列出本网站实际使用的浏览器端存储技术，并说明哪些类别的技术并未使用。",
  lastReviewedLabel: "最后审阅日期",
  lastReviewedDisplay: "2026年7月10日",
  lastReviewedIso: LAST_REVIEWED_ISO,
  sections: [
    {
      id: "summary",
      heading: "概要",
      paragraphs: [
        "本网站不使用用于网站分析、广告或跨站追踪的 cookie。仅使用界面所需、同源缓存及离线可用性所需的技术性存储机制。",
      ],
    },
    {
      id: "functional-cookie",
      heading: "功能性 cookie",
      paragraphs: [
        "本网站使用一个功能性 cookie，用于记住侧边栏界面的状态。",
      ],
    },
    {
      id: "local-storage",
      heading: "本地存储（Local Storage）",
      paragraphs: [
        "本地存储用于对同源内容进行有生存时间（TTL）限制的技术性缓存。以 cache_* 为前缀的键不包含已知的广告或分析标识符。",
      ],
    },
    {
      id: "service-worker",
      heading: "Service Worker 与浏览器缓存",
      paragraphs: [
        "为提升性能与离线可用性，本网站使用同源 Service Worker，将静态资源（图片、字体、CSS/JS 文件、同源 HTML 文档）缓存于浏览器的专用缓存（Cache Storage）中。",
        "Service Worker 与 Cache Storage 均不属于 cookie，也不用于追踪。",
      ],
    },
    {
      id: "no-analytics",
      heading: "分析与广告技术",
      paragraphs: [
        "本网站不设置分析类 cookie、广告类 cookie、跨站追踪 cookie 或会话回放标识符。",
      ],
    },
    {
      id: "managing",
      heading: "浏览器存储管理",
      paragraphs: [
        "您可以在浏览器设置中清除 cookie 及站点数据。清除技术性存储可能会重置界面偏好，并暂时移除已缓存的资源。",
      ],
    },
    {
      id: "changes",
      heading: "需要重新审阅的变更",
      paragraphs: [
        "如需增加网站分析、表单、CAPTCHA、嵌入式地图或视频、CRM、身份验证或个性化账户等功能，应在启用前进行新的技术和法律审阅。",
      ],
    },
    {
      id: "contact",
      heading: "联系方式",
      items: [
        "OSKOL-MET-TRADE 有限责任公司（ООО «ОСКОЛ-МЕТ-ТРЕЙД»）",
        "地址：俄罗斯别尔哥罗德州古布金市和平街20号312/1办公室，邮编309181",
        "电话：+7 909 097 71 74",
        "电子邮箱：89090977174@mail.ru",
      ],
    },
  ],
  table: {
    caption: "本网站使用的浏览器端存储技术",
    columns: {
      technology: "技术",
      name: "键 / 名称",
      purpose: "用途",
      trigger: "创建条件",
      retention: "保留期",
      category: "类别",
      thirdParty: "第三方访问",
    },
    rows: [
      {
        technology: "Cookie",
        name: "sidebar:state",
        purpose: "记住侧边栏界面的状态",
        trigger: "在用户切换侧边栏后创建或更新",
        retention: "7 天",
        category: "功能性",
        thirdParty: "本应用未实现",
      },
      {
        technology: "本地存储（Local Storage）",
        name: "cache_*",
        purpose: "带 TTL 的同源响应 / 内容技术性缓存",
        trigger: "应用的缓存操作",
        retention: "直至 TTL 过期、被替换或被浏览器清除",
        category: "性能 / 技术性",
        thirdParty: "本应用未实现",
      },
      {
        technology: "Service Worker 缓存 / Cache Storage",
        name: swCacheNames,
        purpose:
          "同源静态资源缓存，用于性能与离线可用性",
        trigger: "网站或 Service Worker 的运行",
        retention:
          "直至缓存被替换、被浏览器清理或 Service Worker 更新",
        category: "技术性",
        thirdParty: "本应用未实现",
      },
    ],
  },
};

export const LEGAL_CONTENT: Record<
  LegalTopic,
  Record<LegalLanguage, LegalPageContent>
> = {
  privacy: { ru: privacyRu, en: privacyEn, zh: privacyZh },
  cookies: { ru: cookiesRu, en: cookiesEn, zh: cookiesZh },
};
