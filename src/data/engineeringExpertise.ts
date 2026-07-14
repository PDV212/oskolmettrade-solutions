export type ContentLanguage = "ru" | "en" | "zh";

export interface LocalizedText {
  ru: string;
  en: string;
  zh: string;
}

export interface Credential {
  title: LocalizedText;
  text: LocalizedText;
}

export const engineeringExpertise = {
  sectionId: "engineering-expertise",
  eyebrow: {
    ru: "ИНЖЕНЕРНАЯ ЭКСПЕРТИЗА И СЕРВИС",
    en: "ENGINEERING EXPERTISE AND SERVICE",
    zh: "工程专业能力与服务",
  } as LocalizedText,
  heading: {
    ru: "Экспертная команда технического сопровождения",
    en: "Expert technical support team",
    zh: "专业设备技术支持团队",
  } as LocalizedText,
  lead: {
    ru: "Техническое направление ООО «ОСКОЛ-МЕТ-ТРЕЙД» возглавляет Кургузов Сергей Анатольевич — технический директор по сопровождению и сервису оборудования, кандидат технических наук, доцент по кафедре технологии машиностроения и ведущий публично представленный технический эксперт компании.",
    en: "The technical function of OSKOL-MET-TRADE LLC is led by Sergey Anatolyevich Kurguzov, Technical Director for Equipment Support and Service, Candidate of Technical Sciences, holder of the academic title of Associate Professor in Mechanical Engineering Technology, and the company's leading publicly named technical expert.",
    zh: "OSKOL-MET-TRADE 有限责任公司的技术工作由设备支持与服务技术总监谢尔盖·阿纳托利耶维奇·库尔古佐夫负责。他拥有技术科学副博士学位和机械制造工艺方向副教授学术职称，是公司公开列名的主要技术专家。",
  } as LocalizedText,
  expert: {
    name: {
      ru: "Кургузов Сергей Анатольевич",
      en: "Sergey Anatolyevich Kurguzov",
      zh: "谢尔盖·阿纳托利耶维奇·库尔古佐夫",
    } as LocalizedText,
    position: {
      ru: "Технический директор по сопровождению и сервису оборудования",
      en: "Technical Director for Equipment Support and Service",
      zh: "设备支持与服务技术总监",
    } as LocalizedText,
    profileHeading: {
      ru: "Профессиональный профиль",
      en: "Professional profile",
      zh: "专业概况",
    } as LocalizedText,
    profile: {
      ru: "Профессиональный профиль Сергея Анатольевича связан с технологией машиностроения, металлообрабатывающим оборудованием, станками с ЧПУ, техническим сопровождением, шеф-монтажом, пусконаладочными и сервисными работами. Учёная степень и учёное звание подтверждены публикуемыми документами.",
      en: "Sergey Kurguzov's professional profile covers mechanical engineering technology, metalworking equipment, CNC machines, technical support, installation supervision, commissioning, and equipment service. His academic degree and title are confirmed by the published documents.",
      zh: "库尔古佐夫的专业领域包括机械制造工艺、金属加工设备、数控机床、技术支持、安装指导、调试及设备服务。其学位和学术职称由公开文件证明。",
    } as LocalizedText,
  },
  credentialsHeading: {
    ru: "Подтверждённая квалификация",
    en: "Verified qualifications",
    zh: "已验证的资质",
  } as LocalizedText,
  credentials: [
    {
      title: {
        ru: "Кандидат технических наук",
        en: "Candidate of Technical Sciences",
        zh: "技术科学副博士",
      },
      text: {
        ru: "Учёная степень присуждена в 1997 году решением диссертационного совета при Магнитогорском государственном техническом университете.",
        en: "Academic degree awarded in 1997 by the decision of the Dissertation Council at Magnitogorsk State Technical University.",
        zh: "该学位由马格尼托哥尔斯克国立技术大学论文委员会于1997年授予。",
      },
    },
    {
      title: {
        ru: "Доцент по кафедре технологии машиностроения",
        en: "Associate Professor in Mechanical Engineering Technology",
        zh: "机械制造工艺方向副教授",
      },
      text: {
        ru: "Учёное звание присвоено в 2000 году решением Министерства образования Российской Федерации.",
        en: "Academic title awarded in 2000 by the decision of the Ministry of Education of the Russian Federation.",
        zh: "该学术职称由俄罗斯联邦教育部于2000年授予。",
      },
    },
    {
      title: {
        ru: "Технология машиностроения",
        en: "Mechanical Engineering Technology",
        zh: "机械制造工艺",
      },
      text: {
        ru: "Подтверждённая профессиональная и научная специализация технического руководителя компании.",
        en: "Verified professional and academic specialization of the company's technical leader.",
        zh: "公司技术负责人经验证的专业与学术方向。",
      },
    },
    {
      title: {
        ru: "Руководство техническим сервисом",
        en: "Technical Service Leadership",
        zh: "技术服务领导",
      },
      text: {
        ru: "Техническое руководство сопровождением и сервисом поставляемого промышленного оборудования.",
        en: "Management of equipment support and service at OSKOL-MET-TRADE LLC.",
        zh: "负责所供工业设备的技术支持与服务管理。",
      },
    },
  ] as Credential[],
  staffingHeading: {
    ru: "Собственная техническая и сервисная структура",
    en: "In-house technical and service structure",
    zh: "自有技术与服务组织架构",
  } as LocalizedText,
  staffingText: {
    ru: "Утверждённое штатное расписание ООО «ОСКОЛ-МЕТ-ТРЕЙД», действующее с 1 февраля 2026 года, предусматривает семь штатных единиц. Технический и сервисный контур включает технического директора по сопровождению и сервису оборудования, главного инженера, начальника сервисного отдела и сервисного инженера.",
    en: "The approved staffing schedule of OSKOL-MET-TRADE LLC, effective 1 February 2026, provides for seven staff positions. The technical and service structure includes a Technical Director for Equipment Support and Service, Chief Engineer, Head of Service Department, and Service Engineer.",
    zh: "OSKOL-MET-TRADE 有限责任公司自 2026 年 2 月 1 日起生效的经批准人员编制设有七个岗位。技术与服务体系包括设备支持与服务技术总监、总工程师、服务部门负责人和服务工程师。",
  } as LocalizedText,
  staffingClarification: {
    ru: "Штатное расписание документально подтверждает предусмотренную организационную структуру и количество штатных единиц.",
    en: "The staffing schedule documents the approved organizational structure and the number of staff positions.",
    zh: "人员编制文件确认了经批准的组织结构和岗位数量。",
  } as LocalizedText,
  capabilitiesHeading: {
    ru: "Возможности технической команды",
    en: "Technical team capabilities",
    zh: "技术团队能力",
  } as LocalizedText,
  capabilitiesIntro: {
    ru: "Сочетание научно-инженерной квалификации технического директора и собственной технической структуры позволяет формировать квалифицированную проектную команду для сопровождения металлообрабатывающего и металлургического оборудования.",
    en: "The combination of the technical director's scientific and engineering qualifications with the in-house technical structure enables the company to assemble a qualified project team for support of metalworking and metallurgical equipment.",
    zh: "技术总监的科学与工程资质与公司自有技术架构的结合，使公司能够组建合格的项目团队，为金属加工与冶金设备提供支持。",
  } as LocalizedText,
  capabilities: {
    ru: [
      "Анализ технического задания заказчика",
      "Консультирование при выборе оборудования",
      "Подбор и согласование технической конфигурации",
      "Техническое взаимодействие с изготовителем",
      "Проверка технической и эксплуатационной документации",
      "Подготовка и координация шеф-монтажных работ",
      "Организация пусконаладочных работ",
      "Сопровождение ввода оборудования в эксплуатацию",
      "Консультирование и инструктаж персонала заказчика",
      "Диагностика и сервисное сопровождение",
      "Организация поставки запасных и изнашиваемых частей",
      "Сопровождение гарантийных обращений",
      "Координация гарантийного обслуживания с изготовителем",
      "Послегарантийное сопровождение по отдельному договору",
    ],
    en: [
      "Customer technical-requirement analysis",
      "Equipment-selection consultation",
      "Technical-configuration coordination",
      "Technical communication with the manufacturer",
      "Review of technical and operating documentation",
      "Preparation and coordination of installation supervision",
      "Organization of commissioning work",
      "Equipment start-up support",
      "Customer-personnel consultation and instruction",
      "Equipment diagnostics and service support",
      "Spare- and wear-parts supply coordination",
      "Warranty-claim support",
      "Coordination of warranty service with the manufacturer",
      "Post-warranty support under a separate agreement",
    ],
    zh: [
      "分析客户技术任务书",
      "提供设备选型咨询",
      "协调技术配置",
      "与设备制造商进行技术沟通",
      "审查技术及操作文件",
      "准备和协调安装指导工作",
      "组织设备调试",
      "设备投产过程中的技术支持",
      "为客户人员提供咨询和操作指导",
      "设备诊断与服务支持",
      "协调备件和易损件供应",
      "支持质保申请",
      "与制造商协调质保服务",
      "根据单独协议提供质保期后支持",
    ],
  },
  capabilityStatement: {
    ru: "Квалификация технического руководителя и предусмотренная штатная структура позволяют формировать проектную команду для технически компетентного сопровождения поставки, монтажа, запуска и последующей эксплуатации оборудования.",
    en: "The technical director's qualifications and the approved staffing structure enable the company to assemble a project team for technically competent support of equipment supply, installation, commissioning, and subsequent operation.",
    zh: "技术总监的资质及经批准的人员架构使公司能够组建项目团队，为设备供应、安装、调试及后续运行提供技术上称职的支持。",
  } as LocalizedText,
  contractQualification: {
    ru: "Конкретный состав команды и работ, сроки, место выполнения, гарантийные обязательства, участие изготовителя, необходимые допуски специалистов и порядок консультирования персонала определяются техническим заданием, коммерческим предложением и договором.",
    en: "The exact team composition, scope, schedule, work location, warranty obligations, manufacturer involvement, required specialist authorizations, and personnel consultation procedure are defined in the technical specification, commercial proposal, and contract.",
    zh: "具体团队组成、工作范围、期限、实施地点、质保义务、制造商参与方式、专业人员资质要求及客户人员咨询程序，以技术任务书、商务报价和合同约定为准。",
  } as LocalizedText,
  evidenceHeading: {
    ru: "Документальное подтверждение",
    en: "Documentary evidence",
    zh: "文件证明",
  } as LocalizedText,
  evidenceStatement: {
    ru: "Сведения и изображения документов опубликованы с письменного согласия Кургузова Сергея Анатольевича.",
    en: "The information and documentary images are published with the written consent of Sergey Anatolyevich Kurguzov.",
    zh: "相关信息和文件图片经谢尔盖·阿纳托利耶维奇·库尔古佐夫书面同意后发布。",
  } as LocalizedText,
  academicDocument: {
    src: "/media/kurguzov-academic-credentials.jpg",
    width: 1600,
    height: 1100,
    caption: {
      ru: "Диплом кандидата технических наук и аттестат доцента по кафедре технологии машиностроения Кургузова Сергея Анатольевича.",
      en: "Candidate of Technical Sciences diploma and Associate Professor certificate in Mechanical Engineering Technology of Sergey Anatolyevich Kurguzov.",
      zh: "谢尔盖·阿纳托利耶维奇·库尔古佐夫的技术科学副博士学位证书和机械制造工艺方向副教授证书。",
    } as LocalizedText,
  },
  staffingDocument: {
    src: "/media/omt-staffing-structure.jpg",
    width: 1900,
    height: 1400,
    caption: {
      ru: "Утверждённое штатное расписание ООО «ОСКОЛ-МЕТ-ТРЕЙД», действующее с 1 февраля 2026 года и предусматривающее семь штатных единиц.",
      en: "Approved staffing schedule of OSKOL-MET-TRADE LLC, effective 1 February 2026, providing for seven staff positions.",
      zh: "OSKOL-MET-TRADE 有限责任公司自 2026 年 2 月 1 日起生效、设有七个岗位的经批准人员编制。",
    } as LocalizedText,
  },
  viewDocument: {
    ru: "Открыть документ",
    en: "View document",
    zh: "查看文件",
  } as LocalizedText,
  closeDocument: {
    ru: "Закрыть",
    en: "Close",
    zh: "关闭",
  } as LocalizedText,
  home: {
    heading: {
      ru: "Инженерная экспертиза и собственная сервисная структура",
      en: "Engineering expertise and an in-house service structure",
      zh: "工程专业能力与自有服务架构",
    } as LocalizedText,
    text: {
      ru: "Техническое направление ООО «ОСКОЛ-МЕТ-ТРЕЙД» возглавляет Кургузов Сергей Анатольевич — кандидат технических наук, доцент по кафедре технологии машиностроения и технический директор по сопровождению и сервису оборудования.",
      en: "The technical function of OSKOL-MET-TRADE LLC is led by Sergey Anatolyevich Kurguzov — Candidate of Technical Sciences, Associate Professor in Mechanical Engineering Technology, and Technical Director for Equipment Support and Service.",
      zh: "OSKOL-MET-TRADE 有限责任公司的技术工作由谢尔盖·阿纳托利耶维奇·库尔古佐夫负责——技术科学副博士、机械制造工艺方向副教授、设备支持与服务技术总监。",
    } as LocalizedText,
    trustSignals: {
      ru: [
        "Кандидат технических наук",
        "Доцент по кафедре технологии машиностроения",
        "Технический директор по сопровождению и сервису оборудования",
        "Собственная техническая и сервисная структура",
      ],
      en: [
        "Candidate of Technical Sciences",
        "Associate Professor in Mechanical Engineering Technology",
        "Technical Director for Equipment Support and Service",
        "In-house technical and service structure",
      ],
      zh: [
        "技术科学副博士",
        "机械制造工艺方向副教授",
        "设备支持与服务技术总监",
        "自有技术与服务架构",
      ],
    },
    link: {
      ru: "Подробнее об экспертной команде",
      en: "Learn more about the expert team",
      zh: "了解专家团队",
    } as LocalizedText,
  },
};

export const aboutPathFor = (lang: ContentLanguage) =>
  lang === "ru" ? "/about" : lang === "en" ? "/en/about" : "/zh/about";
