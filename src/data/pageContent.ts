/**
 * Typed multilingual content for About / Cases / CNC Machines page groups.
 *
 * CLAIM-SAFETY NOTE
 * -----------------
 * This module has been remediated to remove unsupported commercial,
 * customer, project, technical, partnership and performance claims.
 * A claim is only presented as a fact here when the repository (or the
 * organisation's public registry data) contains a specific supporting
 * source. All other prior statements have been either removed or
 * rewritten as conservative, contract-qualified descriptions.
 *
 * See `CLAIM_REGISTER` at the bottom of this file — it is a
 * development-only typed audit trail. It is NOT rendered anywhere in
 * the DOM and is NOT emitted in any JSON-LD.
 */

export type ContentLanguage = "ru" | "en" | "zh";

export interface LocalizedText {
  ru: string;
  en: string;
  zh: string;
}

export type LocalizedList = {
  ru: string[];
  en: string[];
  zh: string[];
};

/* ============================================================
 * Shared UI strings
 * ============================================================ */

export const uiStrings = {
  home: { ru: "Главная", en: "Home", zh: "首页" } as LocalizedText,
  about: { ru: "О компании", en: "About", zh: "关于我们" } as LocalizedText,
  cases: {
    ru: "Реализованные проекты",
    en: "Case studies",
    zh: "项目案例",
  } as LocalizedText,
  equipment: { ru: "Оборудование", en: "Equipment", zh: "设备" } as LocalizedText,
  cnc: { ru: "Станки с ЧПУ", en: "CNC machines", zh: "数控机床" } as LocalizedText,
  breadcrumb: { ru: "Хлебные крошки", en: "Breadcrumb", zh: "面包屑导航" } as LocalizedText,
};

/* ============================================================
 * ABOUT page
 * ============================================================ */

export interface TimelineEvent {
  year: string;
  dateTime: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface TeamMember {
  initials: string;
  name: LocalizedText;
  title: LocalizedText;
  credentials: LocalizedText;
  expertise: LocalizedText;
}

export interface Metric {
  value: string;
  label: LocalizedText;
  iconKey: "building" | "award" | "globe" | "users";
}

export const aboutContent = {
  meta: {
    title: {
      ru: "О компании ОСКОЛ-МЕТ-ТРЕЙД — оборудование и сырьё для металлургии",
      en: "About OSKOL-MET-TRADE — equipment and raw materials for metallurgy",
      zh: "关于 OSKOL-MET-TRADE — 冶金设备与原材料",
    } as LocalizedText,
    description: {
      ru: "ООО «ОСКОЛ-МЕТ-ТРЕЙД» — B2B-поставщик промышленного оборудования и сырья для металлургии. Отраслевой опыт команды и основателя формируется с 1994 года.",
      en: "OSKOL-MET-TRADE LLC — B2B supplier of industrial equipment and raw materials for metallurgy. Industry experience of the team and the founder has been building since 1994.",
      zh: "OSKOL-MET-TRADE 有限责任公司 — 面向冶金行业的工业设备与原材料 B2B 供应商。团队与创始人的行业经验自 1994 年起积累。",
    } as LocalizedText,
  },
  hero: {
    h1: {
      ru: "О компании ОСКОЛ-МЕТ-ТРЕЙД",
      en: "About OSKOL-MET-TRADE",
      zh: "关于 OSKOL-MET-TRADE",
    } as LocalizedText,
    intro: {
      ru: "Отраслевой опыт команды и основателя бизнеса формируется с 1994 года, когда начали работу первые компании основателя. ООО «ОСКОЛ-МЕТ-ТРЕЙД» продолжает и развивает этот опыт в сфере металлургии и промышленного оборудования.",
      en: "The industry experience of the team and the founder has been building since 1994, when the founder's first companies started operating. OSKOL-MET-TRADE LLC continues and develops this experience in metallurgy and industrial equipment.",
      zh: "团队与企业创始人的行业经验自 1994 年开始积累，当时创始人的首批公司开始运营。OSKOL-MET-TRADE 有限责任公司在冶金和工业设备领域延续并发展着这一经验。",
    } as LocalizedText,
  },
  sections: {
    history: {
      ru: "Наша история",
      en: "Our history",
      zh: "发展历程",
    } as LocalizedText,
    team: {
      ru: "Технический эксперт",
      en: "Technical expert",
      zh: "技术专家",
    } as LocalizedText,
    metrics: {
      ru: "Ключевые сведения",
      en: "Key facts",
      zh: "关键信息",
    } as LocalizedText,
    // partners section intentionally removed — no verified public
    // partners or certificates are available in the repository.
  },
  timeline: [
    {
      year: "1994",
      dateTime: "1994",
      title: {
        ru: "Начало отраслевого опыта основателя",
        en: "Start of the founder's industry experience",
        zh: "创始人行业经验的起点",
      },
      description: {
        ru: "Начинают работу первые компании основателя бизнеса в сфере металлургии и промышленного оборудования.",
        en: "The founder's first companies begin operating in metallurgy and industrial equipment.",
        zh: "企业创始人在冶金与工业设备领域的首批公司开始运营。",
      },
    },
    {
      year: "—",
      dateTime: "",
      title: {
        ru: "Специализированные поставки оборудования",
        en: "Specialized equipment supply",
        zh: "专业化设备供应",
      },
      description: {
        ru: "ООО «ОСКОЛ-МЕТ-ТРЕЙД» ведёт специализированную поставку станков с ЧПУ и обрабатывающих центров под конкретные проектные задания.",
        en: "OSKOL-MET-TRADE LLC carries out specialized supply of CNC machines and machining centers based on specific project requirements.",
        zh: "OSKOL-MET-TRADE 有限责任公司根据具体项目需求，专业从事数控机床和加工中心的供应。",
      },
    },
  ] as TimelineEvent[],
  team: [
    {
      initials: "КС",
      name: {
        ru: "Кургузов Сергей Анатольевич",
        en: "Kurguzov Sergey Anatolyevich",
        zh: "库尔古佐夫·谢尔盖·阿纳托利耶维奇",
      },
      title: {
        ru: "Технический директор",
        en: "Technical Director",
        zh: "技术总监",
      },
      credentials: {
        ru: "Профильное инженерное образование в области технологии машиностроения (подтверждающие документы предоставляются по запросу).",
        en: "Specialised engineering background in mechanical engineering technology (supporting documents provided on request).",
        zh: "机械制造工艺方向的专业工程背景（可应要求提供相关证明文件）。",
      },
      expertise: {
        ru: "Единственный поимённо указанный на сайте технический эксперт компании.",
        en: "The only technical expert of the company named on the website.",
        zh: "网站上唯一列出姓名的公司技术专家。",
      },
    },
  ] as TeamMember[],
  metrics: [
    {
      value: "1994",
      label: {
        ru: "опыт команды и основателя с",
        en: "team and founder experience since",
        zh: "团队与创始人的经验起始于",
      },
      iconKey: "building",
    },
    {
      value: "4",
      label: {
        ru: "направления деятельности",
        en: "business areas",
        zh: "业务方向",
      },
      iconKey: "globe",
    },
  ] as Metric[],
  // partners: intentionally omitted (placeholders removed).
};

/* ============================================================
 * CASES page — quarantined
 * ============================================================
 * All previously listed customer names, projects, metrics and case
 * studies have been removed from public content because the
 * repository does not contain public supporting documents or
 * disclosure approvals. Only the neutral quarantine notice below is
 * rendered.
 */

export const casesContent = {
  meta: {
    title: {
      ru: "Проекты — раздел готовится к публикации | ОСКОЛ-МЕТ-ТРЕЙД",
      en: "Projects — section being prepared for publication | OSKOL-MET-TRADE",
      zh: "项目案例 — 资料整理中 | OSKOL-MET-TRADE",
    } as LocalizedText,
    description: {
      ru: "Раздел документированных проектов ООО «ОСКОЛ-МЕТ-ТРЕЙД» готовится к публикации. Конкретные кейсы не публикуются до завершения проверки документов и согласований на раскрытие названий заказчиков.",
      en: "The documented project section of OSKOL-MET-TRADE LLC is being prepared for publication. Specific case studies are not published until supporting documents and customer-name disclosure permissions have been verified.",
      zh: "OSKOL-MET-TRADE 有限责任公司的项目案例资料正在整理中。在相关证明文件与客户名称披露授权完成核验之前，本网站暂不发布具体案例。",
    } as LocalizedText,
  },
  notice: {
    h1: {
      ru: "Раздел проектов готовится к публикации",
      en: "The projects section is being prepared for publication",
      zh: "项目案例资料正在整理中",
    } as LocalizedText,
    body: {
      ru: "Раздел документированных проектов готовится к публикации. До завершения проверки документов, показателей и разрешений на раскрытие названий заказчиков конкретные кейсы не публикуются.",
      en: "The documented project section is being prepared for publication. Specific case studies are not published until the supporting documents, reported metrics and permissions to disclose customer names have been verified.",
      zh: "项目案例资料正在整理中。在相关证明文件、项目指标以及客户名称披露授权完成核验之前，本网站暂不发布具体案例。",
    } as LocalizedText,
  },
};

/* ============================================================
 * CNC MACHINES page
 * ============================================================ */

export interface Advantage {
  iconKey: "shield" | "truck" | "cog" | "wrench";
  title: LocalizedText;
  text: LocalizedText;
}

export interface FaqEntry {
  q: LocalizedText;
  a: LocalizedText;
}

export const cncContent = {
  meta: {
    title: {
      ru: "Станки с ЧПУ — подбор и организация поставки | ОСКОЛ-МЕТ-ТРЕЙД",
      en: "CNC machines — selection and supply coordination | OSKOL-MET-TRADE",
      zh: "数控机床 — 选型与供货协调 | OSKOL-MET-TRADE",
    } as LocalizedText,
    description: {
      ru: "ООО «ОСКОЛ-МЕТ-ТРЕЙД» выполняет подбор и организацию поставки металлообрабатывающего оборудования с ЧПУ. Конфигурация, сроки, гарантия, монтаж и пусконаладка определяются под конкретный проект и фиксируются в договоре.",
      en: "OSKOL-MET-TRADE LLC provides selection and supply coordination for CNC metalworking equipment. Configuration, delivery time, warranty, installation and commissioning are defined per project and specified in the contract.",
      zh: "OSKOL-MET-TRADE 有限责任公司提供数控金属加工设备的选型与供货协调服务。设备配置、交付周期、质保、安装及调试条件均按具体项目确定，并在合同中明确。",
    } as LocalizedText,
  },
  hero: {
    h1: {
      ru: "Станки с ЧПУ — подбор и организация поставки",
      en: "CNC machines — selection and supply coordination",
      zh: "数控机床 — 选型与供货协调",
    } as LocalizedText,
    intro: {
      ru: "ООО «ОСКОЛ-МЕТ-ТРЕЙД» предлагает подбор и организацию поставки металлообрабатывающего оборудования с ЧПУ. Конфигурация, производитель, комплектация, сроки, гарантия, монтаж и пусконаладка определяются для конкретного проекта и фиксируются в коммерческом предложении и договоре.",
      en: "OSKOL-MET-TRADE LLC provides selection and supply coordination for CNC metalworking equipment. The configuration, manufacturer, scope of supply, delivery time, warranty, installation and commissioning are determined for each project and specified in the commercial proposal and contract.",
      zh: "OSKOL-MET-TRADE 有限责任公司提供数控金属加工设备的选型与供货协调服务。设备配置、制造商、供货范围、交付周期、质保、安装及调试条件均根据具体项目确定，并在商务报价和合同中明确。",
    } as LocalizedText,
  },
  sections: {
    types: { ru: "Категории оборудования", en: "Equipment categories", zh: "设备类别" } as LocalizedText,
    why: { ru: "Как мы работаем", en: "How we work", zh: "工作方式" } as LocalizedText,
    faq: {
      ru: "Часто задаваемые вопросы",
      en: "Frequently asked questions",
      zh: "常见问题",
    } as LocalizedText,
  },
  // Category list only — presented as categories the company can
  // source or evaluate under a project, NOT as guaranteed stock.
  machineTypes: [
    { ru: "Токарные станки с ЧПУ", en: "CNC turning machines", zh: "数控车床" },
    {
      ru: "Фрезерные обрабатывающие центры",
      en: "Milling machining centers",
      zh: "铣削加工中心",
    },
    {
      ru: "Вертикальные обрабатывающие центры (VMC)",
      en: "Vertical machining centers (VMC)",
      zh: "立式加工中心（VMC）",
    },
    {
      ru: "Горизонтальные обрабатывающие центры (HMC)",
      en: "Horizontal machining centers (HMC)",
      zh: "卧式加工中心（HMC）",
    },
    { ru: "Шлифовальные станки с ЧПУ", en: "CNC grinding machines", zh: "数控磨床" },
    {
      ru: "Электроэрозионные станки (EDM)",
      en: "Electrical discharge machines (EDM)",
      zh: "电火花加工机床（EDM）",
    },
    {
      ru: "Координатно-расточные станки",
      en: "Jig boring machines",
      zh: "坐标镗床",
    },
    {
      ru: "Токарно-фрезерные станки",
      en: "Turn-mill machines",
      zh: "车铣复合机床",
    },
  ] as LocalizedText[],
  categoriesNote: {
    ru: "Перечень категорий указан как направления, по которым компания может подобрать или оценить оборудование под проект. Наличие конкретной модели и её доступность определяются после согласования технического задания и подтверждаются в коммерческом предложении.",
    en: "The list of categories describes areas in which the company can select or evaluate equipment for a project. Availability of a specific model is determined after the technical requirements are agreed and is confirmed in the commercial proposal.",
    zh: "上述类别为公司可根据项目进行选型或评估的方向。具体机型是否可供货，需在确认技术任务书后由商务报价予以确认。",
  } as LocalizedText,
  advantages: [
    {
      iconKey: "shield",
      title: {
        ru: "Гарантия — по договору",
        en: "Warranty — per contract",
        zh: "质保 — 按合同约定",
      },
      text: {
        ru: "Условия гарантии зависят от выбранного производителя, комплектации и договора.",
        en: "Warranty terms depend on the selected manufacturer, configuration and contract.",
        zh: "质保条款取决于所选制造商、配置及合同。",
      },
    },
    {
      iconKey: "truck",
      title: {
        ru: "Сроки поставки — по проекту",
        en: "Delivery time — per project",
        zh: "交付周期 — 按项目",
      },
      text: {
        ru: "Срок поставки рассчитывается после подтверждения производителя, комплектации, производственной готовности, маршрута и таможенных условий.",
        en: "Delivery time is calculated after the manufacturer, configuration, production status, route and customs conditions are confirmed.",
        zh: "交付周期在确认制造商、配置、生产就绪情况、运输路线及报关条件后核算。",
      },
    },
    {
      iconKey: "cog",
      title: {
        ru: "Подбор по ТЗ",
        en: "Selection to specification",
        zh: "按技术任务书选型",
      },
      text: {
        ru: "Инженеры подбирают модель под технологический процесс, материал и серийность в рамках согласованного технического задания.",
        en: "Engineers select a model matching the process, material and batch size within the agreed technical specification.",
        zh: "工程师在双方约定的技术任务书范围内，根据工艺、材料和批量匹配合适机型。",
      },
    },
    {
      iconKey: "wrench",
      title: {
        ru: "Монтаж и обучение — опционально",
        en: "Installation and training — optional",
        zh: "安装与培训 — 可选",
      },
      text: {
        ru: "Монтаж, пусконаладка и обучение могут входить в объём проекта, если это прямо указано в коммерческом предложении и договоре.",
        en: "Installation, commissioning and training may be included in the project scope when specified in the commercial proposal and contract.",
        zh: "如商务报价和合同中明确列示，安装、调试及培训可纳入项目范围。",
      },
    },
  ] as Advantage[],
  faqs: [
    {
      q: {
        ru: "Какой срок поставки станка с ЧПУ?",
        en: "What is the delivery time for a CNC machine?",
        zh: "数控机床的交付周期是多少？",
      },
      a: {
        ru: "Срок поставки рассчитывается после подтверждения производителя, комплектации, производственной готовности, маршрута и таможенных условий. Точные сроки фиксируются в коммерческом предложении и договоре.",
        en: "Delivery time is calculated after the manufacturer, configuration, production status, route and customs conditions are confirmed. Exact terms are fixed in the commercial proposal and contract.",
        zh: "交付周期在确认制造商、配置、生产就绪情况、运输路线及报关条件后核算。具体交期在商务报价和合同中确定。",
      },
    },
    {
      q: {
        ru: "Предоставляете ли вы монтаж и пусконаладку?",
        en: "Do you provide installation and commissioning?",
        zh: "是否提供安装与调试？",
      },
      a: {
        ru: "Монтаж, пусконаладка и обучение персонала могут быть включены в объём проекта, если это прямо указано в коммерческом предложении и договоре.",
        en: "Installation, commissioning and personnel training may be included in the project scope when specified in the commercial proposal and contract.",
        zh: "如商务报价和合同中明确列示，安装、调试与人员培训可纳入项目范围。",
      },
    },
    {
      q: {
        ru: "Какая стойка ЧПУ устанавливается на станки?",
        en: "Which CNC control is installed on the machines?",
        zh: "机床配备哪种数控系统？",
      },
      a: {
        ru: "Доступные варианты системы ЧПУ зависят от выбранной модели станка и производителя. Итоговая конфигурация фиксируется в коммерческом предложении и договоре.",
        en: "Available CNC control options depend on the selected machine model and manufacturer. The final configuration is fixed in the commercial proposal and contract.",
        zh: "可选数控系统取决于所选机型和制造商。最终配置在商务报价和合同中确定。",
      },
    },
    {
      q: {
        ru: "Возможен ли лизинг или рассрочка?",
        en: "Are leasing or installment payments available?",
        zh: "是否支持融资租赁或分期付款？",
      },
      a: {
        ru: "Возможные варианты лизинга или иного финансирования рассматриваются индивидуально совместно с профильной финансовой организацией.",
        en: "Leasing or other financing options, where available, are considered individually with the relevant financing organization.",
        zh: "如有可行的融资租赁或其他融资方案，将与相关融资机构按个案协商确定。",
      },
    },
  ] as FaqEntry[],
};

/* ============================================================
 * Language-aware breadcrumb helpers
 * ============================================================ */

export const SITE_ORIGIN_URL = "https://www.xn-----llccbycikqb3afub.xn--p1ai";

export function homePathFor(lang: ContentLanguage): string {
  return lang === "ru" ? "/" : lang === "en" ? "/en" : "/zh";
}

/* Claim register moved to /docs/claim-register.ts to keep customer names and
 * unsupported claim strings out of the production JavaScript bundle. It is
 * intentionally not imported from src/. */

