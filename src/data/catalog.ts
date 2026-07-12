/**
 * Typed multilingual catalog data source (RU / EN / zh-Hans).
 *
 * Claim-safety policy:
 *  - Products listed here are OWNER-CONFIRMED positions the company can
 *    offer. They are NOT asserted as manufactured by OSKOL-MET-TRADE.
 *  - No exact technical specifications are published from this file until
 *    matched to an approved public manufacturer document via
 *    `sourceDocumentId` and a corresponding `CatalogDocument` entry.
 *  - No price, no availability, no manufacturer, no country of origin,
 *    no certificate/standard is asserted unless explicitly verified.
 *  - Product/Offer/Brand JSON-LD MUST NOT be generated from this data
 *    while `evidenceStatus` is not `verified-public` and no documents
 *    are attached.
 */

export type CatalogLanguage = "ru" | "en" | "zh";

export type CatalogCategoryId =
  | "equipment"
  | "materials"
  | "furnaces"
  | "manufacturing";

export type ProductEvidenceStatus =
  | "owner-confirmed-position"
  | "verified-public"
  | "requires-owner-verification";

export interface LocalizedText {
  ru: string;
  en: string;
  zh: string;
}

export interface CatalogDocument {
  id: string;
  type:
    | "manufacturer-catalogue"
    | "technical-passport"
    | "certificate"
    | "test-report"
    | "specification";
  title: LocalizedText;
  url: string;
  language?: "ru" | "en" | "zh" | "multi";
  verifiedForProduct: boolean;
  publicDisclosureApproved: boolean;
}

export interface CatalogSpecification {
  id: string;
  label: LocalizedText;
  value: string;
  unit?: string;
  sourceDocumentId: string;
}

export interface CatalogSubcategory {
  id: string;
  label: LocalizedText;
}

export interface CatalogCategory {
  id: CatalogCategoryId;
  label: LocalizedText;
  iconKey: "wrench" | "package" | "flame" | "building";
  subcategories: CatalogSubcategory[];
}

export interface CatalogProduct {
  id: string;
  model?: string;
  name: LocalizedText;
  categoryId: CatalogCategoryId;
  subcategoryId: string;
  tags: LocalizedText[];
  summary: LocalizedText;
  image?: string;
  imageAlt: LocalizedText;
  imageStatus: "illustrative" | "product-confirmed";
  evidenceStatus: ProductEvidenceStatus;
  manufacturer?: string | null;
  countryOfOrigin?: string | null;
  specifications: CatalogSpecification[];
  documents: CatalogDocument[];
  availabilityStatus: "not-published";
  priceStatus: "on-request-not-an-offer";
}

/* ============================================================
 * Categories
 * ============================================================ */

export const CATALOG_CATEGORIES: CatalogCategory[] = [
  {
    id: "equipment",
    label: {
      ru: "Металлообрабатывающее оборудование",
      en: "Metalworking equipment",
      zh: "金属加工设备",
    },
    iconKey: "wrench",
    subcategories: [
      {
        id: "cnc-machining-centers",
        label: {
          ru: "Обрабатывающие центры с ЧПУ",
          en: "CNC machining centers",
          zh: "数控加工中心",
        },
      },
      {
        id: "lathes",
        label: { ru: "Токарные станки", en: "Lathes", zh: "车床" },
      },
      {
        id: "grinding-machines",
        label: {
          ru: "Шлифовальные станки",
          en: "Grinding machines",
          zh: "磨床",
        },
      },
      {
        id: "hydraulic-presses",
        label: {
          ru: "Гидравлические прессы",
          en: "Hydraulic presses",
          zh: "液压机",
        },
      },
      {
        id: "robotic-systems",
        label: {
          ru: "Роботизированные системы",
          en: "Robotic systems",
          zh: "机器人系统",
        },
      },
    ],
  },
  {
    id: "materials",
    label: {
      ru: "Металлургическое сырьё",
      en: "Metallurgical raw materials",
      zh: "冶金原材料",
    },
    iconKey: "package",
    subcategories: [
      {
        id: "ores-concentrates",
        label: {
          ru: "Руды и концентраты",
          en: "Ores and concentrates",
          zh: "矿石与精矿",
        },
      },
      {
        id: "ferroalloys",
        label: { ru: "Ферросплавы", en: "Ferroalloys", zh: "铁合金" },
      },
      {
        id: "alloying-elements",
        label: {
          ru: "Легирующие элементы",
          en: "Alloying elements",
          zh: "合金元素",
        },
      },
      {
        id: "refractories",
        label: {
          ru: "Огнеупорные материалы",
          en: "Refractory materials",
          zh: "耐火材料",
        },
      },
    ],
  },
  {
    id: "furnaces",
    label: {
      ru: "Металлургические печи",
      en: "Metallurgical furnaces",
      zh: "冶金炉",
    },
    iconKey: "flame",
    subcategories: [
      {
        id: "induction",
        label: {
          ru: "Индукционные печи",
          en: "Induction furnaces",
          zh: "感应炉",
        },
      },
      {
        id: "arc",
        label: { ru: "Дуговые печи", en: "Arc furnaces", zh: "电弧炉" },
      },
      {
        id: "resistance",
        label: {
          ru: "Печи сопротивления",
          en: "Resistance furnaces",
          zh: "电阻炉",
        },
      },
      {
        id: "vacuum",
        label: { ru: "Вакуумные печи", en: "Vacuum furnaces", zh: "真空炉" },
      },
    ],
  },
  {
    id: "manufacturing",
    label: {
      ru: "Направления изготовления",
      en: "Manufacturing directions",
      zh: "制造方向",
    },
    iconKey: "building",
    subcategories: [
      {
        id: "oil-gas-parts",
        label: {
          ru: "Детали для нефтегаза",
          en: "Oil & gas components",
          zh: "石油天然气部件",
        },
      },
      {
        id: "nuclear-engineering",
        label: {
          ru: "Атомное машиностроение",
          en: "Nuclear engineering",
          zh: "核工程",
        },
      },
      {
        id: "general-engineering",
        label: {
          ru: "Общее машиностроение",
          en: "General engineering",
          zh: "通用机械制造",
        },
      },
      {
        id: "special-parts",
        label: {
          ru: "Специальные изделия",
          en: "Special components",
          zh: "特殊部件",
        },
      },
    ],
  },
];

/* ============================================================
 * Products — owner-confirmed offered positions only.
 * No specifications are published (specifications: []) until an
 * approved public manufacturer document is attached.
 * ============================================================ */

export const CATALOG_PRODUCTS: CatalogProduct[] = [
  {
    id: "vmc-850",
    model: "VMC-850",
    name: {
      ru: "Вертикальный обрабатывающий центр VMC-850",
      en: "VMC-850 vertical machining center",
      zh: "VMC-850 立式加工中心",
    },
    categoryId: "equipment",
    subcategoryId: "cnc-machining-centers",
    tags: [
      { ru: "ЧПУ", en: "CNC", zh: "数控" },
      {
        ru: "вертикальный обрабатывающий центр",
        en: "vertical machining center",
        zh: "立式加工中心",
      },
    ],
    summary: {
      ru: "Предлагаемая позиция вертикального обрабатывающего центра. Производитель, система ЧПУ, перемещения, шпиндель, точность, комплектация и условия поставки уточняются для конкретного коммерческого предложения.",
      en: "An offered vertical machining center position. The manufacturer, CNC control, travels, spindle, accuracy, configuration and supply conditions are confirmed for the specific commercial proposal.",
      zh: "可供应的立式加工中心型号。制造商、数控系统、行程、主轴、精度、设备配置及供货条件以具体商务报价确认为准。",
    },
    image: "/lovable-uploads/b5b9d48f-fa70-463f-b4c5-98e99b19fbaa.png",
    imageAlt: {
      ru: "Иллюстрация вертикального обрабатывающего центра",
      en: "Illustration of a vertical machining center",
      zh: "立式加工中心示意图",
    },
    imageStatus: "illustrative",
    evidenceStatus: "owner-confirmed-position",
    manufacturer: null,
    countryOfOrigin: null,
    specifications: [],
    documents: [],
    availabilityStatus: "not-published",
    priceStatus: "on-request-not-an-offer",
  },
  {
    id: "cnc-320",
    model: "CNC-320",
    name: {
      ru: "Токарный станок с ЧПУ CNC-320",
      en: "CNC-320 CNC lathe",
      zh: "CNC-320 数控车床",
    },
    categoryId: "equipment",
    subcategoryId: "lathes",
    tags: [
      { ru: "ЧПУ", en: "CNC", zh: "数控" },
      { ru: "токарный", en: "lathe", zh: "车床" },
    ],
    summary: {
      ru: "Предлагаемая позиция токарного станка с ЧПУ. Производитель, диаметр и длина обработки, система ЧПУ, комплектация и условия поставки подтверждаются для конкретного коммерческого предложения.",
      en: "An offered CNC lathe position. The manufacturer, machining diameter and length, CNC control, configuration and supply conditions are confirmed for the specific commercial proposal.",
      zh: "可供应的数控车床型号。制造商、加工直径与长度、数控系统、设备配置及供货条件以具体商务报价确认为准。",
    },
    image: "/lovable-uploads/9037fa8f-e102-4232-a549-87fbfcd6bdd2.png",
    imageAlt: {
      ru: "Иллюстрация токарного станка с ЧПУ",
      en: "Illustration of a CNC lathe",
      zh: "数控车床示意图",
    },
    imageStatus: "illustrative",
    evidenceStatus: "owner-confirmed-position",
    manufacturer: null,
    countryOfOrigin: null,
    specifications: [],
    documents: [],
    availabilityStatus: "not-published",
    priceStatus: "on-request-not-an-offer",
  },
  {
    id: "robotic-welding-system",
    name: {
      ru: "Роботизированный сварочный комплекс",
      en: "Robotic welding system",
      zh: "机器人焊接系统",
    },
    categoryId: "equipment",
    subcategoryId: "robotic-systems",
    tags: [
      { ru: "роботизированная система", en: "robotic system", zh: "机器人系统" },
      { ru: "сварка", en: "welding", zh: "焊接" },
      {
        ru: "проектная конфигурация",
        en: "project configuration",
        zh: "项目配置",
      },
    ],
    summary: {
      ru: "Предлагаемое проектное решение для роботизированной сварки. Производитель робота, грузоподъёмность, рабочая зона, сварочное оборудование, датчики и уровень автоматизации определяются по техническому заданию.",
      en: "A proposed project solution for robotic welding. The robot manufacturer, payload, working envelope, welding equipment, sensors and automation level are determined from the technical requirements.",
      zh: "可提供的机器人焊接项目方案。机器人制造商、负载、工作范围、焊接设备、传感器及自动化程度根据技术要求确定。",
    },
    image: "/lovable-uploads/761c2c04-8071-4122-94b3-bb0d459d2e87.png",
    imageAlt: {
      ru: "Иллюстрация роботизированной сварочной ячейки",
      en: "Illustration of a robotic welding cell",
      zh: "机器人焊接单元示意图",
    },
    imageStatus: "illustrative",
    evidenceStatus: "owner-confirmed-position",
    manufacturer: null,
    countryOfOrigin: null,
    specifications: [],
    documents: [],
    availabilityStatus: "not-published",
    priceStatus: "on-request-not-an-offer",
  },
  {
    id: "manganese-ore-mr25",
    model: "МР-25",
    name: {
      ru: "Марганцевая руда МР-25",
      en: "МР-25 manganese ore",
      zh: "МР-25 锰矿",
    },
    categoryId: "materials",
    subcategoryId: "ores-concentrates",
    tags: [
      { ru: "марганцевая руда", en: "manganese ore", zh: "锰矿" },
      {
        ru: "спецификация партии",
        en: "lot specification",
        zh: "批次规格",
      },
    ],
    summary: {
      ru: "Предлагаемая позиция марганцевой руды МР-25. Химический состав, влажность, фракция, происхождение и объём подтверждаются для конкретной партии в спецификации и сопроводительных документах.",
      en: "An offered МР-25 manganese ore position. Chemical composition, moisture, particle size, origin and volume are confirmed for each lot in the specification and accompanying documents.",
      zh: "可供应的 МР-25 锰矿。化学成分、水分、粒度、原产地及数量按具体批次在技术规格和随附文件中确认。",
    },
    image: "/lovable-uploads/a6f5d8cf-10e5-4159-9959-51419a44edc9.png",
    imageAlt: {
      ru: "Иллюстрация марганцевой руды",
      en: "Illustration of manganese ore",
      zh: "锰矿示意图",
    },
    imageStatus: "illustrative",
    evidenceStatus: "owner-confirmed-position",
    manufacturer: null,
    countryOfOrigin: null,
    specifications: [],
    documents: [],
    availabilityStatus: "not-published",
    priceStatus: "on-request-not-an-offer",
  },
  {
    id: "ferrochrome-fecr60",
    model: "FeCr60",
    name: {
      ru: "Феррохром FeCr60",
      en: "FeCr60 ferrochrome",
      zh: "FeCr60 铬铁",
    },
    categoryId: "materials",
    subcategoryId: "ferroalloys",
    tags: [
      { ru: "феррохром", en: "ferrochrome", zh: "铬铁" },
      {
        ru: "спецификация партии",
        en: "lot specification",
        zh: "批次规格",
      },
    ],
    summary: {
      ru: "Предлагаемая позиция феррохрома FeCr60. Содержание элементов, углеродистость, фракция, происхождение и объём подтверждаются для конкретной партии.",
      en: "An offered FeCr60 ferrochrome position. Element content, carbon grade, particle size, origin and volume are confirmed for each lot.",
      zh: "可供应的 FeCr60 铬铁。元素含量、碳等级、粒度、原产地及数量按具体批次确认。",
    },
    image: "/lovable-uploads/9676f778-2096-4758-bdfe-13e24c70089a.png",
    imageAlt: {
      ru: "Иллюстрация ферросплава",
      en: "Illustration of a ferroalloy",
      zh: "铁合金示意图",
    },
    imageStatus: "illustrative",
    evidenceStatus: "owner-confirmed-position",
    manufacturer: null,
    countryOfOrigin: null,
    specifications: [],
    documents: [],
    availabilityStatus: "not-published",
    priceStatus: "on-request-not-an-offer",
  },
  {
    id: "induction-furnace-ip10",
    model: "ИП-10",
    name: {
      ru: "Индукционная печь ИП-10",
      en: "ИП-10 induction furnace",
      zh: "ИП-10 感应炉",
    },
    categoryId: "furnaces",
    subcategoryId: "induction",
    tags: [
      { ru: "индукционная печь", en: "induction furnace", zh: "感应炉" },
      {
        ru: "проектная конфигурация",
        en: "project configuration",
        zh: "项目配置",
      },
    ],
    summary: {
      ru: "Предлагаемая позиция индукционной печи. Производитель, назначение, полезная ёмкость, мощность, частота, система управления и условия интеграции подтверждаются по техническому заданию и документации выбранного производителя.",
      en: "An offered induction-furnace position. The manufacturer, application, working capacity, power, frequency, control system and integration conditions are confirmed from the technical requirements and the selected manufacturer's documentation.",
      zh: "可供应的感应炉型号。制造商、用途、有效容量、功率、频率、控制系统及集成条件根据技术要求和选定制造商的技术文件确认。",
    },
    image: "/lovable-uploads/edf23884-f593-4722-b789-00f5ca57510a.png",
    imageAlt: {
      ru: "Иллюстрация индукционной печи",
      en: "Illustration of an induction furnace",
      zh: "感应炉示意图",
    },
    imageStatus: "illustrative",
    evidenceStatus: "owner-confirmed-position",
    manufacturer: null,
    countryOfOrigin: null,
    specifications: [],
    documents: [],
    availabilityStatus: "not-published",
    priceStatus: "on-request-not-an-offer",
  },
];

/* ============================================================
 * UI translations
 * ============================================================ */

export interface CatalogUiStrings {
  sectionHeading: string;
  sectionIntro: string;
  searchPlaceholder: string;
  searchAriaLabel: string;
  activeFilters: string;
  clearAll: string;
  sections: string;
  allSections: string;
  tagFilters: string;
  foundCount: (n: number) => string;
  emptyTitle: string;
  emptyBody: string;
  clearFilters: string;
  termsOnRequest: string;
  conservativeNote: string;
  ctaLabel: string;
  gridViewLabel: string;
  listViewLabel: string;
  removeFilterLabel: (label: string) => string;
  expandSectionLabel: (label: string) => string;
}

export const CATALOG_UI: Record<CatalogLanguage, CatalogUiStrings> = {
  ru: {
    sectionHeading: "Каталог предлагаемых позиций",
    sectionIntro:
      "Перечень позиций, которые компания подтверждает к предложению. Технические параметры, производитель и условия уточняются под конкретный запрос.",
    searchPlaceholder: "Поиск по каталогу…",
    searchAriaLabel: "Поиск по каталогу",
    activeFilters: "Активные фильтры",
    clearAll: "Очистить все",
    sections: "Разделы каталога",
    allSections: "Все разделы",
    tagFilters: "Фильтры по тегам",
    foundCount: (n) => `Найдено позиций: ${n}`,
    emptyTitle: "Позиции не найдены",
    emptyBody: "Измените критерии поиска или очистите фильтры.",
    clearFilters: "Очистить фильтры",
    termsOnRequest: "Условия по запросу",
    conservativeNote:
      "Цена, наличие, производитель, сроки и комплектация определяются для конкретного запроса.",
    ctaLabel: "Уточнить параметры",
    gridViewLabel: "Отображение сеткой",
    listViewLabel: "Отображение списком",
    removeFilterLabel: (l) => `Убрать фильтр: ${l}`,
    expandSectionLabel: (l) => `Развернуть раздел: ${l}`,
  },
  en: {
    sectionHeading: "Catalogue of offered positions",
    sectionIntro:
      "Positions the company confirms it can offer. Technical parameters, manufacturer and terms are clarified for each specific enquiry.",
    searchPlaceholder: "Search the catalogue…",
    searchAriaLabel: "Search the catalogue",
    activeFilters: "Active filters",
    clearAll: "Clear all",
    sections: "Catalogue sections",
    allSections: "All sections",
    tagFilters: "Filters by tags",
    foundCount: (n) => `Found: ${n} position${n === 1 ? "" : "s"}`,
    emptyTitle: "No positions found",
    emptyBody: "Change your search criteria or clear the filters.",
    clearFilters: "Clear filters",
    termsOnRequest: "Terms on request",
    conservativeNote:
      "Price, availability, manufacturer, delivery time and configuration are determined for the specific enquiry.",
    ctaLabel: "Request parameters",
    gridViewLabel: "Grid view",
    listViewLabel: "List view",
    removeFilterLabel: (l) => `Remove filter: ${l}`,
    expandSectionLabel: (l) => `Expand section: ${l}`,
  },
  zh: {
    sectionHeading: "可供应型号目录",
    sectionIntro:
      "公司确认可供应的型号清单。技术参数、制造商及条件根据具体询盘确认。",
    searchPlaceholder: "搜索目录……",
    searchAriaLabel: "搜索目录",
    activeFilters: "已选筛选",
    clearAll: "全部清除",
    sections: "目录分类",
    allSections: "全部分类",
    tagFilters: "按标签筛选",
    foundCount: (n) => `共找到 ${n} 项`,
    emptyTitle: "未找到相关型号",
    emptyBody: "请调整搜索条件或清除筛选。",
    clearFilters: "清除筛选",
    termsOnRequest: "条件请询",
    conservativeNote:
      "价格、供货状态、制造商、交付周期及配置根据具体询盘确定。",
    ctaLabel: "咨询参数",
    gridViewLabel: "网格视图",
    listViewLabel: "列表视图",
    removeFilterLabel: (l) => `移除筛选：${l}`,
    expandSectionLabel: (l) => `展开分类：${l}`,
  },
};
