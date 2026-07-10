/**
 * Typed multilingual content for About / Cases / CNC Machines page groups.
 *
 * Source of truth: the current Russian pages. English and Simplified Chinese
 * versions are faithful translations of the same facts — no added claims, no
 * removed disclaimers. Legal names, model identifiers, standards and units
 * are preserved verbatim. See STEP 2 notes in the task brief for claim-safety
 * rules applied here.
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
 * Shared UI strings (breadcrumbs, section labels, etc.)
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
  task: { ru: "Задача", en: "Task", zh: "任务" } as LocalizedText,
  solution: { ru: "Решение", en: "Solution", zh: "解决方案" } as LocalizedText,
  results: { ru: "Результаты", en: "Results", zh: "成果" } as LocalizedText,
  yearOfProject: {
    ru: "Год проекта",
    en: "Project year",
    zh: "项目年份",
  } as LocalizedText,
  unitsSuffix: {
    ru: "единиц оборудования",
    en: "units of equipment",
    zh: "台设备",
  } as LocalizedText,
  supplied: { ru: "поставлено", en: "supplied", zh: "已交付" } as LocalizedText,
  productivityGain: {
    ru: "рост производительности",
    en: "productivity gain",
    zh: "生产率提升",
  } as LocalizedText,
  durationMonths: {
    ru: "месяцев срок реализации",
    en: "months implementation time",
    zh: "个月实施周期",
  } as LocalizedText,
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
      ru: "ООО «ОСКОЛ-МЕТ-ТРЕЙД» — B2B-поставщик промышленного оборудования и сырья. Отраслевой опыт команды и основателя — с 1994 года.",
      en: "OSKOL-MET-TRADE LLC — B2B supplier of industrial equipment and raw materials. Industry experience of the team and founder since 1994.",
      zh: "OSKOL-MET-TRADE 有限责任公司 — 工业设备与原材料的 B2B 供应商。团队与创始人自 1994 年起积累的行业经验。",
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
      zh: "团队与企业创始人的行业经验自 1994 年开始积累，当时创始人的首批公司开始运营。OSKOL-MET-TRADE 有限责任公司 在冶金和工业设备领域延续并发展着这一经验。",
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
      ru: "Наши цифры",
      en: "Key figures",
      zh: "关键数字",
    } as LocalizedText,
    partners: {
      ru: "Сертификаты и партнёры",
      en: "Certificates and partners",
      zh: "证书与合作伙伴",
    } as LocalizedText,
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
      year: "2015",
      dateTime: "2015",
      title: {
        ru: "Специализированные поставки оборудования",
        en: "Specialized equipment supply",
        zh: "专业化设备供应",
      },
      description: {
        ru: "ООО «ОСКОЛ-МЕТ-ТРЕЙД» ведёт специализированную поставку станков с ЧПУ и обрабатывающих центров.",
        en: "OSKOL-MET-TRADE LLC carries out specialized supply of CNC machines and machining centers.",
        zh: "OSKOL-MET-TRADE 有限责任公司 专业从事数控机床和加工中心的供应。",
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
        ru: "Кандидат технических наук, доцент по технологии машиностроения",
        en: "Candidate of Technical Sciences, Associate Professor of Mechanical Engineering Technology",
        zh: "技术科学副博士，机械制造工艺副教授",
      },
      expertise: {
        ru: "Единственный поимённо указанный технический эксперт на сайте.",
        en: "The only technical expert named on the website.",
        zh: "网站上唯一列出姓名的技术专家。",
      },
    },
  ] as TeamMember[],
  metrics: [
    {
      value: "1994",
      label: {
        ru: "опыт команды с",
        en: "team experience since",
        zh: "团队经验起始于",
      },
      iconKey: "building",
    },
    {
      value: "≈2 500",
      label: {
        ru: "единиц — совокупный опыт",
        en: "units — cumulative experience",
        zh: "台 — 累计经验",
      },
      iconKey: "award",
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
    {
      value: "10",
      label: {
        ru: "стран в географии опыта",
        en: "countries in the geography of experience",
        zh: "个国家的经验覆盖范围",
      },
      iconKey: "users",
    },
  ] as Metric[],
  partners: [
    { ru: "Производитель ЧПУ №1", en: "CNC manufacturer No. 1", zh: "数控设备制造商 1" },
    { ru: "Производитель ЧПУ №2", en: "CNC manufacturer No. 2", zh: "数控设备制造商 2" },
    { ru: "Металлургический комбинат", en: "Metallurgical plant", zh: "冶金联合企业" },
    { ru: "Инженерный концерн", en: "Engineering group", zh: "工程集团" },
    { ru: "Лизинговая компания", en: "Leasing company", zh: "融资租赁公司" },
    { ru: "Сервисный центр Урал", en: "Ural service center", zh: "乌拉尔服务中心" },
  ] as LocalizedText[],
};

/* ============================================================
 * CASES page
 * ============================================================ */

export interface CaseRecord {
  id: number;
  iconKey: "factory" | "pickaxe" | "wrench" | "flame";
  title: LocalizedText;
  industry: LocalizedText;
  location: LocalizedText;
  task: LocalizedText;
  solution: LocalizedList;
  metrics: {
    units: string;
    productivity: string;
    duration: string;
  };
  year: string;
}

export const casesContent = {
  meta: {
    title: {
      ru: "Реализованные проекты — кейсы ОСКОЛ-МЕТ-ТРЕЙД",
      en: "Case studies — OSKOL-MET-TRADE projects",
      zh: "项目案例 — OSKOL-MET-TRADE",
    } as LocalizedText,
    description: {
      ru: "Реальные кейсы поставки станков ЧПУ, металлургического сырья, роботизированных комплексов и промышленных печей. 30+ лет опыта, 2500+ поставок.",
      en: "Case studies of CNC machine supply, metallurgical raw materials, robotic systems and industrial furnaces. 30+ years of experience, 2,500+ deliveries.",
      zh: "数控机床、冶金原材料、机器人系统与工业炉供应的项目案例。30 余年经验，累计 2,500 余次交付。",
    } as LocalizedText,
  },
  hero: {
    h1: {
      ru: "Реализованные проекты ОСКОЛ-МЕТ-ТРЕЙД",
      en: "OSKOL-MET-TRADE case studies",
      zh: "OSKOL-MET-TRADE 项目案例",
    } as LocalizedText,
    intro: {
      ru: "За 30+ лет работы компания реализовала более 2500 поставок промышленного оборудования, металлургического сырья и комплексных решений для автоматизации. Ниже — выборка проектов с конкретными метриками и результатами.",
      en: "Over 30+ years of operation, the company has completed more than 2,500 deliveries of industrial equipment, metallurgical raw materials and complex automation solutions. Below is a selection of projects with specific metrics and results.",
      zh: "在 30 余年的运营中，公司已完成 2,500 余次工业设备、冶金原材料及综合自动化解决方案的交付。以下为部分项目的具体指标与成果。",
    } as LocalizedText,
    since: "1994",
  },
  cases: [
    {
      id: 1,
      iconKey: "factory",
      title: {
        ru: "Модернизация цеха ЧПУ для АО «АвтоПромДеталь»",
        en: "CNC workshop modernization for JSC AvtoPromDetal",
        zh: "为 АО «АвтоПромДеталь» 进行数控车间现代化改造",
      },
      industry: {
        ru: "Автомобильная промышленность",
        en: "Automotive industry",
        zh: "汽车工业",
      },
      location: {
        ru: "Тольятти, Россия",
        en: "Togliatti, Russia",
        zh: "俄罗斯，陶里亚蒂",
      },
      task: {
        ru: "Заменить морально устаревший парк токарных и фрезерных станков 1990-х годов на современные ЧПУ-центры с повышением производительности серийного производства деталей подвески.",
        en: "Replace the outdated fleet of 1990s turning and milling machines with modern CNC centers, increasing productivity of serial production of suspension parts.",
        zh: "将 1990 年代陈旧的车削与铣削设备更换为现代化数控加工中心，提高悬挂系统零件批量生产的生产率。",
      },
      solution: {
        ru: [
          "Поставлено 18 токарных станков CK6140 с системой ЧПУ Siemens 828D",
          "Установлено 6 вертикальных обрабатывающих центров VMC-855 для 3-осевой обработки",
          "Проведено обучение 24 операторов и наладчиков на площадке заказчика",
        ],
        en: [
          "Supplied 18 CK6140 turning machines with Siemens 828D CNC systems",
          "Installed 6 VMC-855 vertical machining centers for 3-axis machining",
          "Trained 24 operators and setup technicians on the customer's site",
        ],
        zh: [
          "供应 18 台配备 Siemens 828D 数控系统的 CK6140 车床",
          "安装 6 台用于 3 轴加工的 VMC-855 立式加工中心",
          "在客户现场培训 24 名操作员与调机技术人员",
        ],
      },
      metrics: { units: "24", productivity: "35", duration: "8" },
      year: "2023",
    },
    {
      id: 2,
      iconKey: "pickaxe",
      title: {
        ru: "Поставка сырья для Новолипецкого металлургического комбината",
        en: "Raw material supply for Novolipetsk Metallurgical Plant",
        zh: "为新利佩茨克冶金联合企业供应原材料",
      },
      industry: {
        ru: "Чёрная металлургия",
        en: "Ferrous metallurgy",
        zh: "黑色冶金",
      },
      location: {
        ru: "Липецк, Россия",
        en: "Lipetsk, Russia",
        zh: "俄罗斯，利佩茨克",
      },
      task: {
        ru: "Обеспечить бесперебойные поставки марганцевой руды и феррохрома для выплавки высокопрочных сталей в условиях перенастройки логистических цепочек.",
        en: "Ensure uninterrupted supply of manganese ore and ferrochrome for smelting high-strength steels under reconfigured logistics chains.",
        zh: "在物流链重组的条件下，保障用于冶炼高强度钢的锰矿石与铬铁的不间断供应。",
      },
      solution: {
        ru: [
          "Организованы прямые поставки марганцевой руды из Индии объёмом 12 000 тонн/квартал",
          "Налажен регулярный импорт феррохрома из Китая с таможенным сопровождением",
          "Внедрена система резервного складирования на складе в Белгородской области",
        ],
        en: [
          "Direct supply of manganese ore from India, 12,000 tons per quarter",
          "Regular ferrochrome imports from China with customs support",
          "Reserve storage system implemented at a warehouse in Belgorod Region",
        ],
        zh: [
          "组织自印度直供锰矿石，每季度 12,000 吨",
          "建立自中国定期进口铬铁并提供报关支持",
          "在别尔哥罗德州仓库实施备用仓储体系",
        ],
      },
      metrics: { units: "48 000", productivity: "0", duration: "6" },
      year: "2022",
    },
    {
      id: 3,
      iconKey: "wrench",
      title: {
        ru: "Роботизированный комплекс сварки для ПАО «УралТяжМаш»",
        en: "Robotic welding cell for PJSC UralTyazhMash",
        zh: "为 ПАО «УралТяжМаш» 提供机器人焊接系统",
      },
      industry: {
        ru: "Машиностроение",
        en: "Mechanical engineering",
        zh: "机械制造",
      },
      location: {
        ru: "Екатеринбург, Россия",
        en: "Yekaterinburg, Russia",
        zh: "俄罗斯，叶卡捷琳堡",
      },
      task: {
        ru: "Создать полностью автоматизированный участок дуговой сварки корпусных конструкций с программированием траекторий по 3D-моделям Tekla Structures.",
        en: "Build a fully automated arc-welding section for structural bodies, with path programming from Tekla Structures 3D models.",
        zh: "建设一条全自动的结构件电弧焊生产线，并基于 Tekla Structures 3D 模型进行轨迹编程。",
      },
      solution: {
        ru: [
          "Поставлены 4 роботизированные ячейки сварки с системой AI-расчёта траекторий",
          "Интегрировано ПО для импорта траекторий из Tekla Structures напрямую в контроллер",
          "Организован сервисный контракт с аккредитованным центром на Урале",
        ],
        en: [
          "Supplied 4 robotic welding cells with AI-based path computation",
          "Integrated software importing paths from Tekla Structures directly into the controller",
          "Service contract arranged with an accredited service center in the Urals",
        ],
        zh: [
          "供应 4 套配备 AI 轨迹计算的机器人焊接单元",
          "集成可将轨迹直接从 Tekla Structures 导入控制器的软件",
          "与乌拉尔地区经认证的服务中心签署维护合同",
        ],
      },
      metrics: { units: "4", productivity: "60", duration: "10" },
      year: "2024",
    },
    {
      id: 4,
      iconKey: "flame",
      title: {
        ru: "Вакуумно-дуговая печь для завода титановых сплавов",
        en: "Vacuum-arc furnace for a titanium alloys plant",
        zh: "为钛合金厂提供真空电弧炉",
      },
      industry: {
        ru: "Цветная металлургия",
        en: "Non-ferrous metallurgy",
        zh: "有色冶金",
      },
      location: {
        ru: "Свердловская область, Россия",
        en: "Sverdlovsk Region, Russia",
        zh: "俄罗斯，斯维尔德洛夫斯克州",
      },
      task: {
        ru: "Модернизировать плавильный участок с заменой устаревшей дуговой печи на вакуумно-дуговую установку мощностью 10 МВА для выплавки титановых слитков.",
        en: "Modernize the smelting section by replacing an outdated arc furnace with a 10 MVA vacuum-arc unit for casting titanium ingots.",
        zh: "改造熔炼车间，将陈旧的电弧炉更换为 10 MVA 的真空电弧装置，用于浇注钛锭。",
      },
      solution: {
        ru: [
          "Спроектирована и поставлена вакуумно-дуговая печь VDU-10 с системой ЧПУ плавки",
          "Выполнен монтаж, пусконаладка и аттестация оборудования под надзором Ростехнадзора",
          "Проведено обучение персонала и передача технологических карт",
        ],
        en: [
          "Designed and supplied a VDU-10 vacuum-arc furnace with a CNC melting system",
          "Installation, commissioning and equipment certification under Rostekhnadzor supervision",
          "Personnel training and handover of process route sheets",
        ],
        zh: [
          "设计并供应配备数控熔炼系统的 VDU-10 真空电弧炉",
          "在俄罗斯联邦技术监督局监督下完成安装、调试及设备认证",
          "开展人员培训并移交工艺卡片",
        ],
      },
      metrics: { units: "1", productivity: "22", duration: "14" },
      year: "2023",
    },
  ] as CaseRecord[],
};

/* ============================================================
 * CNC MACHINES page
 * ============================================================ */

export interface TechRow {
  model: string;
  type: LocalizedText;
  accuracy: string;
  application: LocalizedText;
}

export interface ComparisonRow {
  type: LocalizedText;
  accuracy: string;
  application: LocalizedText;
  price: LocalizedText;
}

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
      ru: "Станки с ЧПУ — поставка с 1994 года | ОСКОЛ-МЕТ-ТРЕЙД",
      en: "CNC machines — supplied since 1994 | OSKOL-MET-TRADE",
      zh: "数控机床 — 自 1994 年供货 | OSKOL-MET-TRADE",
    } as LocalizedText,
    description: {
      ru: "Поставка станков с ЧПУ: токарные, фрезерные, шлифовальные обрабатывающие центры. 30+ лет опыта, 2500+ поставок, гарантия и сервис по всей России.",
      en: "Supply of CNC machines: turning, milling and grinding machining centers. 30+ years of experience, 2,500+ deliveries, warranty and service across Russia.",
      zh: "数控机床供应：车削、铣削、磨削加工中心。30 余年经验，2,500 余次交付，覆盖全俄的质保与售后服务。",
    } as LocalizedText,
  },
  hero: {
    h1: {
      ru: "Станки с ЧПУ — поставка с 1994 года",
      en: "CNC machines — supplied since 1994",
      zh: "数控机床 — 自 1994 年起供货",
    } as LocalizedText,
    intro: {
      ru: "ООО «ОСКОЛ-МЕТ-ТРЕЙД» поставляет металлообрабатывающее оборудование с ЧПУ напрямую от ведущих производителей Юго-Восточной Азии. 30+ лет опыта в металлургии и 2500+ поставок станков по России, Казахстану, Беларуси, Китаю и Индии. Каждое решение сопровождается монтажом, пусконаладкой и сервисной поддержкой.",
      en: "OSKOL-MET-TRADE LLC supplies CNC metalworking equipment directly from leading manufacturers in Southeast Asia. 30+ years of experience in metallurgy and 2,500+ machine deliveries across Russia, Kazakhstan, Belarus, China and India. Every solution is accompanied by installation, commissioning and after-sales service.",
      zh: "OSKOL-MET-TRADE 有限责任公司 直接从东南亚主要制造商采购并供应数控金属加工设备。在冶金行业积累了 30 余年经验，累计在俄罗斯、哈萨克斯坦、白俄罗斯、中国及印度交付 2,500 余台设备。每套方案均包含安装调试与售后服务。",
    } as LocalizedText,
    since: "1994",
  },
  sections: {
    types: { ru: "Типы оборудования", en: "Equipment types", zh: "设备类型" } as LocalizedText,
    specs: {
      ru: "Технические характеристики",
      en: "Technical specifications",
      zh: "技术参数",
    } as LocalizedText,
    comparison: {
      ru: "Сравнение типов станков ЧПУ",
      en: "Comparison of CNC machine types",
      zh: "数控机床类型对比",
    } as LocalizedText,
    comparisonCaption: {
      ru: "Сравнительная таблица точности, применения и ценового сегмента станков с ЧПУ",
      en: "Comparison of accuracy, application and price segment of CNC machines",
      zh: "数控机床精度、应用与价格区间的对比表",
    } as LocalizedText,
    why: { ru: "Почему мы", en: "Why us", zh: "选择我们的理由" } as LocalizedText,
    faq: {
      ru: "FAQ о станках ЧПУ",
      en: "CNC machines FAQ",
      zh: "数控机床常见问题",
    } as LocalizedText,
    tableModel: { ru: "Модель", en: "Model", zh: "型号" } as LocalizedText,
    tableType: { ru: "Тип", en: "Type", zh: "类型" } as LocalizedText,
    tableAccuracy: { ru: "Точность", en: "Accuracy", zh: "精度" } as LocalizedText,
    tableApplication: { ru: "Применение", en: "Application", zh: "应用" } as LocalizedText,
    tablePrice: {
      ru: "Ценовой сегмент",
      en: "Price segment",
      zh: "价格区间",
    } as LocalizedText,
    tableMachineType: {
      ru: "Тип станка",
      en: "Machine type",
      zh: "机床类型",
    } as LocalizedText,
  },
  machineTypes: [
    { ru: "Токарные станки с ЧПУ", en: "CNC turning machines", zh: "数控车床" },
    {
      ru: "Фрезерные обрабатывающие центры (3/4/5-осевые)",
      en: "Milling machining centers (3/4/5-axis)",
      zh: "铣削加工中心（3/4/5 轴）",
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
      ru: "Многозадачные токарно-фрезерные станки",
      en: "Multi-tasking turn-mill machines",
      zh: "多任务车铣复合机床",
    },
  ] as LocalizedText[],
  techRows: [
    {
      model: "CK6140",
      type: { ru: "Токарный", en: "Turning", zh: "车床" },
      accuracy: "±0,008 мм",
      application: {
        ru: "Серийное производство валов",
        en: "Serial production of shafts",
        zh: "轴类零件批量生产",
      },
    },
    {
      model: "VMC-855",
      type: {
        ru: "Вертикальный обр. центр",
        en: "Vertical machining center",
        zh: "立式加工中心",
      },
      accuracy: "±0,005 мм",
      application: {
        ru: "Корпусные детали",
        en: "Housing parts",
        zh: "箱体类零件",
      },
    },
    {
      model: "HMC-630",
      type: {
        ru: "Горизонтальный обр. центр",
        en: "Horizontal machining center",
        zh: "卧式加工中心",
      },
      accuracy: "±0,006 мм",
      application: {
        ru: "Массивные узлы",
        en: "Massive assemblies",
        zh: "大型部件",
      },
    },
    {
      model: "MK1320",
      type: { ru: "Шлифовальный", en: "Grinding", zh: "磨床" },
      accuracy: "±0,002 мм",
      application: {
        ru: "Прецизионная обработка",
        en: "Precision machining",
        zh: "精密加工",
      },
    },
    {
      model: "DK7745",
      type: {
        ru: "Электроэрозионный",
        en: "Electrical discharge",
        zh: "电火花加工",
      },
      accuracy: "±0,003 мм",
      application: {
        ru: "Сложные контуры и штампы",
        en: "Complex contours and dies",
        zh: "复杂轮廓与模具",
      },
    },
  ] as TechRow[],
  comparisonRows: [
    {
      type: { ru: "Токарные", en: "Turning", zh: "车削类" },
      accuracy: "±0,008 мм",
      application: {
        ru: "Серийное производство валов, втулок, фланцев",
        en: "Serial production of shafts, bushings, flanges",
        zh: "轴、套、法兰的批量生产",
      },
      price: { ru: "Средний", en: "Medium", zh: "中等" },
    },
    {
      type: { ru: "Фрезерные", en: "Milling", zh: "铣削类" },
      accuracy: "±0,005 мм",
      application: {
        ru: "Корпусные детали, сложные 3D-контуры",
        en: "Housing parts, complex 3D contours",
        zh: "箱体零件，复杂 3D 轮廓",
      },
      price: {
        ru: "Средний–высокий",
        en: "Medium to high",
        zh: "中高",
      },
    },
    {
      type: { ru: "Шлифовальные", en: "Grinding", zh: "磨削类" },
      accuracy: "±0,002 мм",
      application: {
        ru: "Прецизионная отделка поверхностей",
        en: "Precision surface finishing",
        zh: "精密表面精加工",
      },
      price: { ru: "Высокий", en: "High", zh: "高" },
    },
    {
      type: {
        ru: "Обрабатывающие центры",
        en: "Machining centers",
        zh: "加工中心",
      },
      accuracy: "±0,005 мм",
      application: {
        ru: "Универсальная обработка в одном зажиме",
        en: "Universal machining in a single setup",
        zh: "单次装夹的通用加工",
      },
      price: { ru: "Высокий", en: "High", zh: "高" },
    },
  ] as ComparisonRow[],
  advantages: [
    {
      iconKey: "shield",
      title: {
        ru: "Гарантия 12–24 мес.",
        en: "12–24 month warranty",
        zh: "12–24 个月质保",
      },
      text: {
        ru: "Постгарантийное обслуживание через аккредитованный сервис на Урале.",
        en: "Post-warranty service through an accredited service center in the Urals.",
        zh: "通过乌拉尔地区经认证的服务中心提供保修后服务。",
      },
    },
    {
      iconKey: "truck",
      title: {
        ru: "Логистика «под ключ»",
        en: "Turnkey logistics",
        zh: "一站式物流",
      },
      text: {
        ru: "Доставка, таможенная очистка, монтаж и пусконаладка по всей РФ.",
        en: "Delivery, customs clearance, installation and commissioning across the Russian Federation.",
        zh: "覆盖全俄的运输、报关、安装与调试。",
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
        ru: "Инженеры подберут модель под технологию, материал и серийность.",
        en: "Our engineers select a model that matches the process, material and batch size.",
        zh: "工程师根据工艺、材料和批量匹配合适的机型。",
      },
    },
    {
      iconKey: "wrench",
      title: {
        ru: "Запчасти и обучение",
        en: "Spare parts and training",
        zh: "备件与培训",
      },
      text: {
        ru: "Склад ЗИП в РФ и обучение операторов на площадке заказчика.",
        en: "Spare-parts warehouse in Russia and operator training at the customer's site.",
        zh: "在俄罗斯设有备件仓库，并在客户现场进行操作员培训。",
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
        ru: "Со склада в РФ — 2–4 недели. Под заказ из ЮВА — 8–14 недель, включая морскую логистику и таможенное оформление.",
        en: "From stock in Russia — 2 to 4 weeks. Made-to-order from Southeast Asia — 8 to 14 weeks, including sea freight and customs clearance.",
        zh: "俄罗斯本地库存 — 2 至 4 周。东南亚定制订单 — 8 至 14 周，包含海运与报关。",
      },
    },
    {
      q: {
        ru: "Предоставляете ли вы пусконаладку?",
        en: "Do you provide commissioning?",
        zh: "是否提供安装调试？",
      },
      a: {
        ru: "Да. В стоимость поставки включён монтаж, пусконаладка и обучение операторов на площадке заказчика.",
        en: "Yes. The delivery price includes installation, commissioning and operator training at the customer's site.",
        zh: "是。交付价格包含在客户现场进行的安装、调试与操作员培训。",
      },
    },
    {
      q: {
        ru: "Какая стойка ЧПУ устанавливается на станки?",
        en: "Which CNC control is installed on the machines?",
        zh: "机床配备哪种数控系统？",
      },
      a: {
        ru: "По выбору заказчика: Siemens 828D/840D, Fanuc 0i-MF, Mitsubishi M80, а также аналоги отечественной локализации.",
        en: "At the customer's choice: Siemens 828D/840D, Fanuc 0i-MF, Mitsubishi M80, as well as locally adapted equivalents.",
        zh: "由客户选择：Siemens 828D/840D、Fanuc 0i-MF、Mitsubishi M80，以及本土化的同类系统。",
      },
    },
    {
      q: {
        ru: "Возможен ли лизинг и рассрочка?",
        en: "Are leasing and installment payments available?",
        zh: "是否支持融资租赁与分期付款？",
      },
      a: {
        ru: "Да, работаем с лизинговыми компаниями и предлагаем рассрочку для постоянных клиентов на индивидуальных условиях.",
        en: "Yes, we work with leasing companies and offer installment plans for repeat customers on individual terms.",
        zh: "是。我们与租赁公司合作，并按个案条款为老客户提供分期付款方案。",
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
