// Canonical route manifest for build-time prerendering.
// Kept as plain ESM JS so the prerender script needs no TS toolchain
// and cannot accidentally pull browser-only application code.
//
// Do NOT import from src/. Metadata copy here is intentionally short and
// factual; visible page content is still rendered by the React app after
// hydration. The prerendered stub only needs a substantive H1 + intro so
// non-JS crawlers receive route-specific content.

export const SITE_ORIGIN = "https://www.xn-----llccbycikqb3afub.xn--p1ai";

export const HTML_LANG = { ru: "ru", en: "en", zh: "zh-Hans" };
export const OG_LOCALE = { ru: "ru_RU", en: "en_US", zh: "zh_CN" };
export const HREFLANG = { ru: "ru", en: "en", zh: "zh-Hans" };

// Reciprocal hreflang groups. Only genuine equivalent pages are grouped.
export const HREFLANG_GROUPS = {
  home: { ru: "/", en: "/en", zh: "/zh", xDefault: "en" },
  company: { ru: "/company", en: "/en/company", zh: "/zh/company", xDefault: "en" },
  faq: { ru: "/ru/faq", en: "/en/faq", zh: "/zh/faq", xDefault: "en" },
  about: { ru: "/about", en: "/en/about", zh: "/zh/about", xDefault: "en" },
  cncMachines: { ru: "/cnc-machines", en: "/en/cnc-machines", zh: "/zh/cnc-machines", xDefault: "en" },
  privacy: { ru: "/privacy", en: "/en/privacy", zh: "/zh/privacy", xDefault: "en" },
  cookies: { ru: "/cookies", en: "/en/cookies", zh: "/zh/cookies", xDefault: "en" },
};

const OG_IMAGE = "/lovable-uploads/b3c22956-096b-4475-8619-90ea784e020b.png";

// ---- Per-route definitions ----
// Each entry is a substantive, indexable page. Redirect aliases, NotFound,
// consent placeholders and Cases are deliberately excluded.

export const ROUTES = [
  // Home group
  {
    path: "/", lang: "ru", group: "home", pageType: "home",
    title: "ОСКОЛ-МЕТ-ТРЕЙД — оборудование и сырьё для металлургии",
    description: "ООО «ОСКОЛ-МЕТ-ТРЕЙД» — поставщик металлообрабатывающего оборудования, станков ЧПУ, металлургического сырья и промышленных печей. Отраслевой опыт команды и основателя — с 1994 года.",
    h1: "ОСКОЛ-МЕТ-ТРЕЙД — оборудование и сырьё для металлургии",
    intro: "Поставка станков с ЧПУ, металлургического сырья и промышленных печей. Параметры и сроки подтверждаются по каждому запросу. Отраслевой опыт команды и основателя — с 1994 года.",
  },
  {
    path: "/en", lang: "en", group: "home", pageType: "home",
    title: "OSKOL-MET-TRADE — Equipment and Raw Materials for Metallurgy",
    description: "OSKOL-MET-TRADE LLC — supplier of metalworking equipment, CNC machines, metallurgical raw materials and industrial furnaces. Team industry experience since 1994.",
    h1: "OSKOL-MET-TRADE — Equipment and Raw Materials for Metallurgy",
    intro: "Supply of CNC machines, metallurgical raw materials and industrial furnaces. Specifications and lead times are confirmed per inquiry. Team and founder industry experience since 1994.",
  },
  {
    path: "/zh", lang: "zh", group: "home", pageType: "home",
    title: "OSKOL-MET-TRADE — 冶金设备与原材料供应",
    description: "OSKOL-MET-TRADE 有限责任公司 — 金属加工设备、数控机床、冶金原材料和工业炉的供应商。团队行业经验始于 1994 年。",
    h1: "OSKOL-MET-TRADE — 冶金设备与原材料供应",
    intro: "供应数控机床、冶金原材料及工业炉。规格与交期按具体询单确认。团队与创始人行业经验始于 1994 年。",
  },

  // Company group
  {
    path: "/company", lang: "ru", group: "company", pageType: "company",
    title: "О компании ООО «ОСКОЛ-МЕТ-ТРЕЙД» — реквизиты и контакты",
    description: "Официальные реквизиты ООО «ОСКОЛ-МЕТ-ТРЕЙД»: ИНН 3127508337, ОГРН 1033108702868. Юридический адрес: г. Губкин, Белгородская область.",
    h1: "О компании ООО «ОСКОЛ-МЕТ-ТРЕЙД»",
    intro: "Полное наименование — ООО «ОСКОЛ-МЕТ-ТРЕЙД». ИНН 3127508337, ОГРН 1033108702868. Адрес: 309181, Белгородская область, г. Губкин, ул. Мира, 20, оф. 312/1.",
  },
  {
    path: "/en/company", lang: "en", group: "company", pageType: "company",
    title: "About OSKOL-MET-TRADE LLC — Legal Details and Contacts",
    description: "Official legal details of OSKOL-MET-TRADE LLC: INN 3127508337, OGRN 1033108702868. Registered address: Gubkin, Belgorod Region, Russia.",
    h1: "About OSKOL-MET-TRADE LLC",
    intro: "Legal name: OSKOL-MET-TRADE LLC. INN 3127508337, OGRN 1033108702868. Address: 20 Mira Street, office 312/1, Gubkin, Belgorod Region 309181, Russia.",
  },
  {
    path: "/zh/company", lang: "zh", group: "company", pageType: "company",
    title: "关于 OSKOL-MET-TRADE 有限责任公司 — 法律信息与联系方式",
    description: "OSKOL-MET-TRADE 有限责任公司的官方法律信息：INN 3127508337，OGRN 1033108702868。注册地址：俄罗斯别尔哥罗德州古布金市。",
    h1: "关于 OSKOL-MET-TRADE 有限责任公司",
    intro: "法定名称：OSKOL-MET-TRADE 有限责任公司。INN 3127508337，OGRN 1033108702868。地址：俄罗斯别尔哥罗德州古布金市和平街 20 号 312/1 室，邮编 309181。",
  },

  // FAQ group
  {
    path: "/ru/faq", lang: "ru", group: "faq", pageType: "faq",
    title: "Вопросы и ответы — ОСКОЛ-МЕТ-ТРЕЙД",
    description: "Ответы на типовые вопросы о поставках оборудования и металлургического сырья ООО «ОСКОЛ-МЕТ-ТРЕЙД». Условия подтверждаются по каждому запросу.",
    h1: "Часто задаваемые вопросы",
    intro: "Ответы на типовые вопросы клиентов о работе с ООО «ОСКОЛ-МЕТ-ТРЕЙД»: перечень направлений, порядок запроса коммерческого предложения, порядок подтверждения технических параметров.",
  },
  {
    path: "/en/faq", lang: "en", group: "faq", pageType: "faq",
    title: "FAQ — OSKOL-MET-TRADE",
    description: "Answers to common questions about equipment and raw-material supply by OSKOL-MET-TRADE LLC. Terms are confirmed per inquiry.",
    h1: "Frequently Asked Questions",
    intro: "Answers to common client questions about working with OSKOL-MET-TRADE LLC: business directions, how to request a quotation, and how technical parameters are confirmed.",
  },
  {
    path: "/zh/faq", lang: "zh", group: "faq", pageType: "faq",
    title: "常见问题 — OSKOL-MET-TRADE",
    description: "OSKOL-MET-TRADE 有限责任公司关于设备与冶金原材料供应的常见问题解答。具体条件按询单确认。",
    h1: "常见问题",
    intro: "关于与 OSKOL-MET-TRADE 有限责任公司合作的常见问题解答：业务方向、报价申请流程以及技术参数确认方式。",
  },

  // About group
  {
    path: "/about", lang: "ru", group: "about", pageType: "about",
    title: "О компании — направления и подход ОСКОЛ-МЕТ-ТРЕЙД",
    description: "Направления ООО «ОСКОЛ-МЕТ-ТРЕЙД»: металлообрабатывающее оборудование, металлургическое сырьё, промышленные печи. Условия подтверждаются по запросу.",
    h1: "О компании ОСКОЛ-МЕТ-ТРЕЙД",
    intro: "ООО «ОСКОЛ-МЕТ-ТРЕЙД» работает по трём направлениям: металлообрабатывающее оборудование, металлургическое сырьё и промышленные печи. Технические характеристики и коммерческие условия подтверждаются по запросу.",
  },
  {
    path: "/en/about", lang: "en", group: "about", pageType: "about",
    title: "About Us — Directions and Approach of OSKOL-MET-TRADE",
    description: "OSKOL-MET-TRADE LLC operates in three directions: metalworking equipment, metallurgical raw materials and industrial furnaces. Terms confirmed per inquiry.",
    h1: "About OSKOL-MET-TRADE",
    intro: "OSKOL-MET-TRADE LLC operates in three directions: metalworking equipment, metallurgical raw materials and industrial furnaces. Technical parameters and commercial terms are confirmed per inquiry.",
  },
  {
    path: "/zh/about", lang: "zh", group: "about", pageType: "about",
    title: "关于我们 — OSKOL-MET-TRADE 的业务方向与方法",
    description: "OSKOL-MET-TRADE 有限责任公司三大业务方向：金属加工设备、冶金原材料及工业炉。具体条件按询单确认。",
    h1: "关于 OSKOL-MET-TRADE",
    intro: "OSKOL-MET-TRADE 有限责任公司经营三个业务方向：金属加工设备、冶金原材料及工业炉。技术参数与商务条件按具体询单确认。",
  },

  // CNC group
  {
    path: "/cnc-machines", lang: "ru", group: "cncMachines", pageType: "cnc",
    title: "Станки с ЧПУ — направление ОСКОЛ-МЕТ-ТРЕЙД",
    description: "Поставка станков с ЧПУ по запросу заказчика. Конкретные модели, конфигурации и сроки подтверждаются под проект.",
    h1: "Станки с ЧПУ",
    intro: "Направление поставок станков с числовым программным управлением. Конкретные модели, конфигурации, комплектация и сроки поставки подтверждаются под каждый проект.",
  },
  {
    path: "/en/cnc-machines", lang: "en", group: "cncMachines", pageType: "cnc",
    title: "CNC Machines — OSKOL-MET-TRADE Direction",
    description: "Supply of CNC machines on customer request. Specific models, configurations and lead times are confirmed per project.",
    h1: "CNC Machines",
    intro: "A supply direction for CNC (computer numerical control) machines. Specific models, configurations, tooling and lead times are confirmed per project.",
  },
  {
    path: "/zh/cnc-machines", lang: "zh", group: "cncMachines", pageType: "cnc",
    title: "数控机床 — OSKOL-MET-TRADE 业务方向",
    description: "根据客户需求供应数控机床。具体型号、配置与交期按项目确认。",
    h1: "数控机床",
    intro: "数控（CNC）机床供应方向。具体型号、配置、附件与交货期按每个项目单独确认。",
  },

  // Privacy group
  {
    path: "/privacy", lang: "ru", group: "privacy", pageType: "privacy",
    title: "Политика конфиденциальности — ОСКОЛ-МЕТ-ТРЕЙД",
    description: "Информационная политика конфиденциальности ООО «ОСКОЛ-МЕТ-ТРЕЙД»: какие данные обрабатываются, цели и правовые основания.",
    h1: "Политика конфиденциальности",
    intro: "Информационная страница о принципах обработки персональных данных ООО «ОСКОЛ-МЕТ-ТРЕЙД»: категории данных, цели обработки, правовые основания и права субъектов данных.",
  },
  {
    path: "/en/privacy", lang: "en", group: "privacy", pageType: "privacy",
    title: "Privacy Policy — OSKOL-MET-TRADE",
    description: "Informational privacy policy of OSKOL-MET-TRADE LLC: what data is processed, purposes and legal basis.",
    h1: "Privacy Policy",
    intro: "Informational page on how OSKOL-MET-TRADE LLC processes personal data: data categories, processing purposes, legal basis and data subject rights.",
  },
  {
    path: "/zh/privacy", lang: "zh", group: "privacy", pageType: "privacy",
    title: "隐私政策 — OSKOL-MET-TRADE",
    description: "OSKOL-MET-TRADE 有限责任公司信息性隐私政策：处理的数据类别、目的与法律依据。",
    h1: "隐私政策",
    intro: "关于 OSKOL-MET-TRADE 有限责任公司如何处理个人数据的信息页面：数据类别、处理目的、法律依据及数据主体的权利。",
  },

  // Cookies group
  {
    path: "/cookies", lang: "ru", group: "cookies", pageType: "cookies",
    title: "Политика использования cookies — ОСКОЛ-МЕТ-ТРЕЙД",
    description: "Информационная страница о cookies и локальном хранилище на сайте ООО «ОСКОЛ-МЕТ-ТРЕЙД». Аналитика и трекеры не используются.",
    h1: "Политика использования cookies",
    intro: "Информационная страница о cookies и локальном хранилище, используемых на сайте ООО «ОСКОЛ-МЕТ-ТРЕЙД». Аналитические и рекламные трекеры на сайте не используются.",
  },
  {
    path: "/en/cookies", lang: "en", group: "cookies", pageType: "cookies",
    title: "Cookie Policy — OSKOL-MET-TRADE",
    description: "Informational page on cookies and local storage used on the OSKOL-MET-TRADE LLC website. No analytics or advertising trackers are used.",
    h1: "Cookie Policy",
    intro: "Informational page describing cookies and local storage used on the OSKOL-MET-TRADE LLC website. No analytics or advertising trackers are loaded.",
  },
  {
    path: "/zh/cookies", lang: "zh", group: "cookies", pageType: "cookies",
    title: "Cookie 政策 — OSKOL-MET-TRADE",
    description: "关于 OSKOL-MET-TRADE 有限责任公司网站所使用的 cookies 和本地存储的信息页面。网站不使用分析或广告追踪器。",
    h1: "Cookie 政策",
    intro: "关于 OSKOL-MET-TRADE 有限责任公司网站所使用的 cookies 和本地存储的信息页面。网站不加载任何分析或广告追踪器。",
  },
];

export function buildCanonical(path) {
  let p = String(path || "/").split("?")[0].split("#")[0];
  if (!p.startsWith("/")) p = "/" + p;
  p = p.replace(/\/{2,}/g, "/");
  if (p !== "/" && p.endsWith("/")) p = p.replace(/\/+$/, "");
  return SITE_ORIGIN + p;
}

export function absoluteAssetUrl(path) {
  if (/^https?:\/\//i.test(path)) return path;
  return SITE_ORIGIN + (path.startsWith("/") ? path : "/" + path);
}

export function alternatesFor(groupKey) {
  const g = HREFLANG_GROUPS[groupKey];
  if (!g) return null;
  return { ru: g.ru, en: g.en, zh: g.zh, xDefault: g[g.xDefault] };
}

export function outputPathFor(routePath) {
  if (routePath === "/") return "index.html";
  return routePath.replace(/^\//, "") + "/index.html";
}

export const OG_IMAGE_PATH = OG_IMAGE;

export const ORG_JSONLD_ID =
  "https://www.xn-----llccbycikqb3afub.xn--p1ai/#organization";
