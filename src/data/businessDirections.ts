/**
 * Business Directions — single typed multilingual data source.
 *
 * Powers <BusinessDirections> (RU), <BusinessDirectionsEn>, and
 * <BusinessDirectionsZh>. Any change to visible direction text, features
 * or IDs must happen here. Do NOT duplicate translated strings inside
 * per-language components.
 *
 * Claim-safety policy applied:
 *  - No "since 2015" LLC operating claim.
 *  - No "group of companies" / "full cycle" section framing.
 *  - No AI trajectory, Tekla, laser sensor, complete-automation claims.
 *  - No specific furnace capacity ranges.
 *  - No common-ownership / group affiliation with VSZ.
 *  - No unsupported quality adjectives (high-quality, premium, etc.).
 *  - Verification statuses are for internal use ONLY; not rendered publicly.
 */

import { Wrench, Flame, Building2, Factory } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import equipmentImageAsset from '@/assets/equipment-manufacturing.jpg';
import materialsImageAsset from '@/assets/raw-materials.jpg';
import furnaceImageAsset from '@/assets/metallurgy-furnace.jpg';

const rawMaterialsMainImage = '/lovable-uploads/raw-materials.png';

export type Lang = 'ru' | 'en' | 'zh';

export interface LocalizedText {
  ru: string;
  en: string;
  zh: string;
}

export type DirectionId = 'equipment' | 'materials' | 'furnaces' | 'manufacturing';

export type FeatureEvidenceStatus =
  | 'owner-confirmed-direction'
  | 'verified-public'
  | 'requires-owner-verification';

export interface DirectionFeature {
  id: string;
  label: LocalizedText;
  /**
   * Optional feature-level illustration, rendered underneath the feature.
   * Only used when a specific supporting visual exists.
   */
  image?: string;
  evidenceStatus: FeatureEvidenceStatus;
}

export type DirectionActionType = 'contact' | 'external-link';

export interface DirectionDetails {
  processHeading: LocalizedText;
  processText: LocalizedText;
  scopeHeading: LocalizedText;
  scopeItems: LocalizedText[];
  resultHeading: LocalizedText;
  resultText: LocalizedText;
}

export interface BusinessDirection {
  id: DirectionId;
  icon: LucideIcon;
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  features: DirectionFeature[];
  /** Optional heading shown above the feature list. */
  featuresHeading?: LocalizedText;
  /** Optional structured details rendered between description and features. */
  details?: DirectionDetails;
  /** Section-hero image, optional. */
  image?: string;
  actionType: DirectionActionType;
  externalUrl?: string;
  externalLabel?: LocalizedText;
  gradient: string;
  iconColor: string;
}

/* --------------------------------------------------------------- */
/* Section-level intro (RU/EN/ZH)                                  */
/* --------------------------------------------------------------- */

export const businessDirectionsIntro = {
  heading: {
    ru: 'Направления деятельности',
    en: 'Business directions',
    zh: '业务方向',
  } as LocalizedText,
  lead: {
    ru: 'Направления поставок и проектного взаимодействия для металлургических и машиностроительных предприятий.',
    en: 'Supply and project-coordination areas for metallurgical and mechanical engineering enterprises.',
    zh: '面向冶金及机械制造企业的供货与项目协调业务方向。',
  } as LocalizedText,
  gallery: [{ src: rawMaterialsMainImage, alt: 'OSKOL-MET-TRADE' }],
};

/* --------------------------------------------------------------- */
/* Direction data                                                  */
/* --------------------------------------------------------------- */

const _rawDirections: BusinessDirection[] = [
  {
    id: 'equipment',
    icon: Wrench,
    title: {
      ru: 'Металлообрабатывающее оборудование',
      en: 'Metalworking equipment',
      zh: '金属加工设备',
    },
    subtitle: {
      ru: 'Подбор и поставка по ТЗ',
      en: 'Selection and supply',
      zh: '按技术任务选型供货',
    },
    description: {
      ru:
        'Подбор и организация поставки оборудования по техническому заданию заказчика. Помогаем сформировать запрос, согласовать технические параметры, упаковку, логистику и сопровождение до коммерческого предложения или контракта.',
      en:
        'Selection and organization of equipment supply based on the customer’s technical requirements. We help shape the request, agree on technical parameters, packaging, logistics, and support through commercial offer or contract.',
      zh:
        '根据客户技术任务进行设备选型与供货组织。我们协助明确需求、协调技术参数、包装、物流，并提供从报价到合同的全流程支持。',
    },
    image: equipmentImageAsset,
    actionType: 'contact',
    gradient: 'bg-gradient-to-br from-primary/15 to-accent/10',
    iconColor: 'text-primary',
    details: {
      processHeading: {
        ru: 'Как формируется предложение',
        en: 'How the offer is prepared',
        zh: '报价方案的形成',
      },
      processText: {
        ru: 'Работа начинается с анализа технического задания, чертежей деталей, обрабатываемых материалов и требований к производительности. Если исходных данных недостаточно, мы помогаем сформировать перечень параметров для запроса производителям и сопоставления доступных решений.',
        en: 'Work starts with a review of the technical specification, part drawings, materials to be machined and productivity requirements. When the input data is incomplete, we help compile the parameter list needed to issue requests to manufacturers and to compare available solutions.',
        zh: '工作始于对技术任务、零件图纸、被加工材料及生产率要求的分析。如原始资料不足，我们协助整理向制造商询价及对比可选方案所需的参数清单。',
      },
      scopeHeading: {
        ru: 'Что согласовывается по проекту',
        en: 'What is agreed within the project',
        zh: '项目中需协调的内容',
      },
      scopeItems: [
        {
          ru: 'Тип оборудования и выполняемые технологические операции',
          en: 'Equipment type and machining operations to be performed',
          zh: '设备类型及所执行的加工工序',
        },
        {
          ru: 'Рабочая зона, перемещения, мощность и требуемая точность',
          en: 'Working envelope, travels, power and required accuracy',
          zh: '加工范围、行程、功率及所需精度',
        },
        {
          ru: 'Система ЧПУ, инструментальная оснастка и уровень автоматизации',
          en: 'CNC control system, tooling and fixtures, level of automation',
          zh: '数控系统、刀具及工装、自动化程度',
        },
        {
          ru: 'Требования к электропитанию, фундаменту и размещению оборудования',
          en: 'Power supply, foundation and installation layout requirements',
          zh: '供电、基础及设备布置要求',
        },
        {
          ru: 'Упаковка, схема загрузки и условия международной перевозки',
          en: 'Packaging, loading arrangement and international shipping terms',
          zh: '包装、装载方案及国际运输条件',
        },
      ],
      resultHeading: {
        ru: 'Результат для заказчика',
        en: 'Deliverable for the customer',
        zh: '客户获得的成果',
      },
      resultText: {
        ru: 'Заказчик получает технически сопоставимое предложение с описанием конфигурации, комплектации, условий поставки и перечнем вопросов, требующих подтверждения производителя. Окончательные характеристики, сроки, гарантия, монтаж и сервис фиксируются в коммерческом предложении и договоре.',
        en: 'The customer receives a technically comparable offer describing the configuration, scope of supply, delivery terms and the list of points that require manufacturer confirmation. Final specifications, lead times, warranty, installation and service are fixed in the commercial offer and contract.',
        zh: '客户获得技术上可比的方案，涵盖配置、供货范围、交付条件以及需由制造商确认的事项清单。最终技术参数、交货期、保修、安装及服务均在报价与合同中确定。',
      },
    },
    features: [
      {
        id: 'equipment-by-spec',
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Подбор и поставка оборудования по ТЗ заказчика',
          en: 'Equipment selection and supply per customer specification',
          zh: '按客户技术规格选型供货',
        },
      },
      {
        id: 'robotic-welding-painting',
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Роботизированные сварочные и покрасочные комплексы',
          en: 'Robotic welding and painting complexes',
          zh: '机器人焊接与喷涂系统',
        },
      },
      {
        id: 'packaging-loading-logistics',
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Согласование упаковки, загрузки и логистики',
          en: 'Coordination of packaging, loading and logistics',
          zh: '包装、装载及物流协调',
        },
      },
      {
        id: 'commercial-escort',
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Сопровождение до КП и поставки',
          en: 'Support through quotation and delivery',
          zh: '从报价到交付的全程支持',
        },
      },
    ],
  },

  {
    id: 'furnaces',
    icon: Flame,
    title: {
      ru: 'Металлургические печи',
      en: 'Metallurgical furnaces',
      zh: '冶金炉',
    },
    subtitle: {
      ru: 'Типы печей и интеграция',
      en: 'Furnace types and integration',
      zh: '炉型与集成',
    },
    description: {
      ru:
        'Тип печи, полезная ёмкость, мощность, система управления и интеграция определяются по техническому заданию. Конкретные параметры подтверждаются документацией выбранного производителя.',
      en:
        'Furnace type, working capacity, power, control system and integration scope are determined from the technical requirements. Specific parameters are confirmed by the selected manufacturer’s documentation.',
      zh:
        '炉型、有效容量、功率、控制系统及集成范围根据技术要求确定。具体参数以选定制造商的技术文件为准。',
    },
    image: furnaceImageAsset,
    actionType: 'contact',
    gradient: 'bg-gradient-to-br from-secondary/20 to-secondary/5',
    iconColor: 'text-secondary',
    details: {
      processHeading: {
        ru: 'Подбор под технологический процесс',
        en: 'Selection based on the process',
        zh: '按工艺要求选型',
      },
      processText: {
        ru: 'При выборе печи учитываются назначение установки, обрабатываемый материал, рабочая температура, масса или объём загрузки, требуемая атмосфера и продолжительность цикла. Для плавильных и нагревательных решений отдельно согласовываются производительность, энергопотребление и способ загрузки.',
        en: 'Furnace selection considers the intended application, the material to be processed, operating temperature, charge mass or volume, required atmosphere and cycle duration. For melting and heating solutions, throughput, energy consumption and charging method are agreed separately.',
        zh: '选型时需综合考虑设备用途、被处理材料、工作温度、装料质量或容积、所需气氛及工艺周期。对于熔炼和加热方案，还需单独确认产能、能耗及装料方式。',
      },
      scopeHeading: {
        ru: 'Состав технической проработки',
        en: 'Scope of technical assessment',
        zh: '技术论证的内容',
      },
      scopeItems: [
        {
          ru: 'Тип печи и рекомендуемый технологический процесс',
          en: 'Furnace type and recommended process',
          zh: '炉型及推荐工艺',
        },
        {
          ru: 'Полезная ёмкость, температурный диапазон и установленная мощность',
          en: 'Working capacity, temperature range and installed power',
          zh: '有效容量、温度范围及装机功率',
        },
        {
          ru: 'Вакуумная, инертная или контролируемая рабочая атмосфера',
          en: 'Vacuum, inert or controlled furnace atmosphere',
          zh: '真空、惰性或受控炉内气氛',
        },
        {
          ru: 'Система охлаждения, газоснабжения и удаления продуктов сгорания',
          en: 'Cooling, gas supply and flue-gas exhaust systems',
          zh: '冷却、供气及烟气排放系统',
        },
        {
          ru: 'Автоматизация, регистрация параметров и интеграция с линией',
          en: 'Automation, parameter logging and line integration',
          zh: '自动化、参数记录及生产线集成',
        },
        {
          ru: 'Требования к фундаменту, коммуникациям и промышленной безопасности',
          en: 'Foundation, utility connections and industrial safety requirements',
          zh: '基础、公用工程接入及工业安全要求',
        },
      ],
      resultHeading: {
        ru: 'Результат для заказчика',
        en: 'Deliverable for the customer',
        zh: '客户获得的成果',
      },
      resultText: {
        ru: 'По техническому заданию формируется проектная конфигурация для запроса производителю. В предложении указываются состав оборудования, вспомогательные системы, требования к подключению, границы поставки и доступные варианты пусконаладочного сопровождения. Все параметры подтверждаются технической документацией выбранного изготовителя.',
        en: 'Based on the technical specification, a project configuration is prepared for the manufacturer request. The offer states the equipment scope, auxiliary systems, connection requirements, scope of supply and available commissioning support options. All parameters are confirmed by the selected manufacturer’s technical documentation.',
        zh: '根据技术任务形成用于向制造商询价的项目配置。方案中明确设备组成、辅助系统、接入要求、供货范围以及可选的安装调试支持内容。所有参数以选定制造商的技术文件为准。',
      },
    },
    features: [
      {
        id: 'vacuum-arc',
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Вакуумно-дуговые печи',
          en: 'Vacuum arc furnaces',
          zh: '真空电弧炉',
        },
      },
      {
        id: 'induction',
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Индукционные печи (нагрев и плавка)',
          en: 'Induction heating and melting furnaces',
          zh: '感应加热与熔炼炉',
        },
      },
      {
        id: 'gas',
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Печи газового нагрева',
          en: 'Gas heating furnaces',
          zh: '燃气加热炉',
        },
      },
      {
        id: 'controls',
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Системы автоматического управления',
          en: 'Automatic control systems',
          zh: '自动控制系统',
        },
      },
      {
        id: 'integration',
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Интеграция в производственные линии',
          en: 'Integration into production lines',
          zh: '集成到生产线',
        },
      },
    ],
  },

  {
    id: 'materials',
    icon: Factory,
    title: {
      ru: 'Ферросплавы и материалы для металлургии',
      en: 'Ferroalloys and materials for metallurgy',
      zh: '铁合金及冶金材料',
    },
    subtitle: {
      ru: 'Поставки для металлургических предприятий',
      en: 'Supplies for metallurgical enterprises',
      zh: '面向冶金企业供货',
    },
    description: {
      ru:
        'Мы организуем поставки ферросплавов и вспомогательных материалов для металлургических предприятий напрямую от производителей и проверенных экспортёров. Работаем с позициями для сталеплавильного, литейного и ферросплавного производства, подбираем спецификацию, упаковку, базис поставки и логистическое решение под требования заказчика. Подбираем производителей, запрашиваем COA/MTC, согласовываем технические параметры, проверяем упаковку и загрузку контейнера, рассчитываем ориентировочную логистику и сопровождаем переговоры до коммерческого предложения или пробной поставки. Заказчик получает не просто цену, а понятный вариант поставки с техническими и коммерческими условиями.',
      en:
        'We arrange supplies of ferroalloys and auxiliary materials for metallurgical enterprises directly from manufacturers and verified exporters. We work with items for steelmaking, foundry and ferroalloy production, selecting specifications, packaging, delivery basis and logistics solutions according to customer requirements. We select manufacturers, request COA/MTC, agree technical parameters, check packaging and container loading, calculate indicative logistics and support negotiations up to a commercial offer or trial shipment. The customer receives not just a price, but a clear supply option with technical and commercial terms.',
      zh:
        '我们为冶金企业组织铁合金及辅助材料的供应，直接对接生产商及经核实出口商。产品涵盖炼钢、铸造及铁合金生产用物料，并根据客户要求匹配规格、包装、交货条件与物流方案。我们筛选生产商、索取 COA/MTC、协调技术参数、检查包装与集装箱装载、核算参考物流成本，并跟进谈判直至形成报价或试运交付。客户获得的不仅是价格，而是一套附有技术与商务条款的清晰供应方案。',
    },
    image: materialsImageAsset,
    actionType: 'contact',
    gradient: 'bg-gradient-to-br from-accent/20 to-accent/5',
    iconColor: 'text-accent',
    featuresHeading: {
      ru: 'Номенклатура поставок',
      en: 'Supply range',
      zh: '供货范围',
    },
    features: [
      {
        id: 'ferrosilicomanganese',
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Ферросиликомарганец FeSiMn / SiMn 6516 / 6517 / 6518',
          en: 'Ferrosilicomanganese FeSiMn / SiMn 6516 / 6517 / 6518',
          zh: '硅锰合金 FeSiMn / SiMn 6516 / 6517 / 6518',
        },
      },
      {
        id: 'ferrosilicon',
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Ферросилиций FeSi65 / FeSi75',
          en: 'Ferrosilicon FeSi65 / FeSi75',
          zh: '硅铁 FeSi65 / FeSi75',
        },
      },
      {
        id: 'ferrovanadium',
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Феррованадий FeV80',
          en: 'Ferrovanadium FeV80',
          zh: '钒铁 FeV80',
        },
      },
      {
        id: 'ferromanganese',
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Ферромарганец FeMn78 и другие марки FeMn',
          en: 'Ferromanganese FeMn78 and other FeMn grades',
          zh: '锰铁 FeMn78 及其他牌号',
        },
      },
      {
        id: 'ferrochrome',
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Феррохром HC FeCr / LC FeCr / MC FeCr',
          en: 'Ferrochrome HC FeCr / LC FeCr / MC FeCr',
          zh: '铬铁 HC FeCr / LC FeCr / MC FeCr',
        },
      },
      {
        id: 'ferrotitanium',
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Ферротитан FeTi30 / FeTi70',
          en: 'Ferrotitanium FeTi30 / FeTi70',
          zh: '钛铁 FeTi30 / FeTi70',
        },
      },
      {
        id: 'ferromolybdenum',
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Ферромолибден FeMo',
          en: 'Ferromolybdenum FeMo',
          zh: '钼铁 FeMo',
        },
      },
      {
        id: 'casi-cored-wire',
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'CaSi cored wire, включая проволоку Ø14 мм',
          en: 'CaSi cored wire, including Ø14 mm wire',
          zh: 'CaSi 包芯线，含 Ø14 mm 线材',
        },
      },
      {
        id: 'calcium-materials',
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Силикокальций и кальцийсодержащие материалы',
          en: 'Calcium silicon and calcium-containing materials',
          zh: '硅钙及含钙材料',
        },
      },
      {
        id: 'graphite-electrodes',
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Графитированные электроды',
          en: 'Graphitized electrodes',
          zh: '石墨电极',
        },
      },
      {
        id: 'metallurgical-deoxidizers',
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Металлургические раскислители',
          en: 'Metallurgical deoxidizers',
          zh: '冶金脱氧剂',
        },
      },
      {
        id: 'alloying-additives',
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Легирующие и модифицирующие добавки',
          en: 'Alloying and modifying additives',
          zh: '合金及变质添加剂',
        },
      },
      {
        id: 'ladle-treatment',
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Материалы для внепечной обработки стали',
          en: 'Materials for ladle metallurgy / secondary steel treatment',
          zh: '钢包精炼及炉外处理材料',
        },
      },
      {
        id: 'custom-spec',
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Ферросплавы и спецматериалы под индивидуальную спецификацию заказчика',
          en: 'Ferroalloys and special materials to customer specification',
          zh: '按客户特殊规格供应的铁合金及特种材料',
        },
      },
    ],
  },
];

// Homepage order: equipment, furnaces, ferroalloys / metallurgical materials.
const _orderIds: DirectionId[] = ['equipment', 'furnaces', 'materials'];
export const businessDirections: BusinessDirection[] = _orderIds
  .map((id) => _rawDirections.find((d) => d.id === id)!)
  .filter(Boolean);
