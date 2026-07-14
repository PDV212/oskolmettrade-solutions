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

const cncMachineImage = '/lovable-uploads/b5b9d48f-fa70-463f-b4c5-98e99b19fbaa.png';
const manipulatorsImage = '/lovable-uploads/761c2c04-8071-4122-94b3-bb0d459d2e87.png';
const rawMaterialsImage = '/lovable-uploads/9676f778-2096-4758-bdfe-13e24c70089a.png';
const rawMaterials3Image = '/lovable-uploads/a6f5d8cf-10e5-4159-9959-51419a44edc9.png';
const heatingFurnacesImage = '/lovable-uploads/edf23884-f593-4722-b789-00f5ca57510a.png';
const vszManufacturingImage = '/lovable-uploads/9037fa8f-e102-4232-a549-87fbfcd6bdd2.png';
const manipulators2Image = '/lovable-uploads/f95317f5-d336-41bd-bee8-c76ec0ea6a0e.png';
const equipmentLogoImage = '/lovable-uploads/6ec4623e-736f-469e-b1e3-ec6dbe88be82.png';
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

export interface BusinessDirection {
  id: DirectionId;
  icon: LucideIcon;
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  features: DirectionFeature[];
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
  gallery: [
    { src: manipulators2Image, alt: 'OSKOL-MET-TRADE' },
    { src: equipmentLogoImage, alt: 'Equipment' },
    { src: rawMaterialsMainImage, alt: 'Raw materials' },
  ],
};

/* --------------------------------------------------------------- */
/* Direction data                                                  */
/* --------------------------------------------------------------- */

export const businessDirections: BusinessDirection[] = [
  {
    id: 'materials',
    icon: Factory,
    title: {
      ru: 'Металлургическое сырьё',
      en: 'Metallurgical raw materials',
      zh: '冶金原材料',
    },
    subtitle: {
      ru: 'Категории поставок сырья',
      en: 'Raw-material supply categories',
      zh: '原材料供应类别',
    },
    description: {
      ru: 'Категории поставок металлургического сырья и легирующих материалов. Марка, химический состав, фракция, происхождение, объём и условия поставки определяются для конкретной партии и фиксируются в спецификации и договоре.',
      en: 'Supply categories of metallurgical raw materials and alloying materials. Grade, chemical composition, particle size, origin, volume and delivery conditions are determined for each lot and specified in the specification and contract.',
      zh: '冶金原材料及合金材料的供应类别。牌号、化学成分、粒度、原产地、数量及交付条件均按具体批次确定，并在技术规格和合同中明确。',
    },
    image: materialsImageAsset,
    actionType: 'contact',
    gradient: 'bg-gradient-to-br from-accent/20 to-accent/5',
    iconColor: 'text-accent',
    features: [
      {
        id: 'manganese-iron-ore',
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Марганцевая и железная руда',
          en: 'Manganese and iron ore',
          zh: '锰矿与铁矿石',
        },
      },
      {
        id: 'bentonite',
        evidenceStatus: 'owner-confirmed-direction',
        label: { ru: 'Бентонит', en: 'Bentonite', zh: '膨润土' },
      },
      {
        id: 'ferrochrome',
        image: rawMaterials3Image,
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Феррохром FeCr (марка подтверждается по партии)',
          en: 'Ferrochrome FeCr (grade confirmed per lot)',
          zh: '铬铁 FeCr（牌号按批次确认）',
        },
      },
      {
        id: 'npi',
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Никельсодержащий чугун (NPI)',
          en: 'Nickel-containing pig iron (NPI)',
          zh: '含镍生铁 (NPI)',
        },
      },
      {
        id: 'ss-slabs',
        image: rawMaterialsImage,
        evidenceStatus: 'owner-confirmed-direction',
        label: {
          ru: 'Слябы из нержавеющей стали',
          en: 'Stainless-steel slabs',
          zh: '不锈钢板坯',
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
      ru: 'Тип печи, полезная ёмкость, мощность, система управления и интеграция определяются по техническому заданию. Конкретные параметры подтверждаются документацией выбранного производителя.',
      en: 'Furnace type, working capacity, power, control system and integration scope are determined from the technical requirements. Specific parameters are confirmed by the selected manufacturer’s documentation.',
      zh: '炉型、有效容量、功率、控制系统及集成范围根据技术要求确定。具体参数以选定制造商的技术文件为准。',
    },
    image: heatingFurnacesImage,
    actionType: 'contact',
    gradient: 'bg-gradient-to-br from-secondary/20 to-secondary/5',
    iconColor: 'text-secondary',
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
    id: 'manufacturing',
    icon: Building2,
    title: {
      ru: 'Производственные возможности ВСЗ',
      en: 'VSZ manufacturing capabilities',
      zh: 'VSZ 制造能力',
    },
    subtitle: {
      ru: 'Воронежский станкостроительный завод — отдельное юридическое лицо',
      en: 'Voronezh Machine Tool Plant — separate legal entity',
      zh: '沃罗涅日机床厂 — 独立法人实体',
    },
    description: {
      ru: 'Воронежский станкостроительный завод является отдельным юридическим лицом. Его производственные возможности могут рассматриваться для отдельных совместных проектов при наличии соответствующих договорённостей.',
      en: 'Voronezh Machine Tool Plant is a separate legal entity. Its manufacturing capabilities may be considered for individual joint projects subject to the relevant agreements.',
      zh: '沃罗涅日机床厂是独立法人实体。在具备相应合作协议的情况下，其制造能力可用于具体联合项目。',
    },
    image: vszManufacturingImage,
    actionType: 'external-link',
    externalUrl: 'https://stankozavod.com/',
    externalLabel: {
      ru: 'Перейти на сайт ВСЗ',
      en: 'Visit VSZ website',
      zh: '访问 VSZ 网站',
    },
    gradient: 'bg-gradient-to-br from-primary/15 to-accent/10',
    iconColor: 'text-primary',
    features: [
      {
        id: 'milling-turning',
        evidenceStatus: 'requires-owner-verification',
        label: {
          ru: 'Фрезерная и токарная обработка — заявленная возможность, подтверждается по проекту.',
          en: 'Milling and turning — stated capability, subject to project confirmation.',
          zh: '铣削与车削 — 声明的能力，需按项目确认。',
        },
      },
      {
        id: 'grinding-gearcutting',
        evidenceStatus: 'requires-owner-verification',
        label: {
          ru: 'Шлифовальные работы и зуборезка — заявленная возможность, подтверждается по проекту.',
          en: 'Grinding and gear cutting — stated capability, subject to project confirmation.',
          zh: '磨削与齿轮加工 — 声明的能力，需按项目确认。',
        },
      },
      {
        id: 'heat-treatment',
        evidenceStatus: 'requires-owner-verification',
        label: {
          ru: 'Отдельные операции термообработки — при технической подтверждаемости.',
          en: 'Selected heat-treatment operations, subject to technical confirmation.',
          zh: '部分热处理工序 — 需技术确认后进行。',
        },
      },
      {
        id: 'custom-documentation',
        evidenceStatus: 'requires-owner-verification',
        label: {
          ru: 'Изготовление по документации заказчика — при рассмотрении документации и заключении договора.',
          en: 'Manufacturing to customer documentation — subject to document review and contract.',
          zh: '按客户技术文件制造 — 需文件审查并签订合同。',
        },
      },
    ],
  },
];
