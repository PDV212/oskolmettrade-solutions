/**
 * Centralized company data registry — single source of truth.
 *
 * Verification model:
 *  - "verified-public"              — publicly documented; safe to render as strong fact.
 *  - "verified-internal"            — owner-confirmed; safe for internal use, not
 *                                     as an unqualified public claim.
 *  - "owner-confirmed-direction"    — company-stated business direction; may be
 *                                     rendered as an offered direction, NOT as
 *                                     externally verified evidence of a product,
 *                                     configuration, stock or manufacturer link.
 *  - "channel-displayed"            — a contact channel is displayed on the site
 *                                     (e.g. a QR image), but the destination is
 *                                     not independently verified from source.
 *  - "requires-owner-verification"  — placeholder awaiting owner evidence.
 *  - "unsupported"                  — retained for context but must not be rendered.
 *  - "not-applicable"               — structural, non-factual field.
 *
 * Public rendering guardrails:
 *  - Do not expose verificationStatus / sourceNote / evidence to visitors.
 *  - Do not expose sensitive evidence paths in the production bundle.
 *  - "Present on the old website" or "in marketing materials" is not evidence.
 */

export type Lang = 'ru' | 'en' | 'zh';

export interface Translated {
  ru: string;
  en: string;
  zh: string;
}

export type VerificationStatus =
  | 'verified-public'
  | 'verified-internal'
  | 'owner-confirmed-direction'
  | 'channel-displayed'
  | 'requires-owner-verification'
  | 'unsupported'
  | 'not-applicable';

export interface Evidence {
  sourceType:
    | 'official-registry'
    | 'manufacturer-document'
    | 'contract'
    | 'certificate'
    | 'owner-confirmation'
    | 'public-web-source';
  sourceTitle: string;
  sourceUrl?: string;
  sourceFile?: string;
  checkedAt?: string;
  publicDisclosureApproved: boolean;
}

export interface Fact<T> {
  value: T;
  verificationStatus: VerificationStatus;
  evidence?: Evidence[];
  sourceNote?: string;
}

/* ------------------------------------------------------------------ */
/* 1. Company identity                                                 */
/* ------------------------------------------------------------------ */

export const companyIdentity = {
  legalName: {
    value: {
      ru: 'ООО «ОСКОЛ-МЕТ-ТРЕЙД»',
      en: 'OSKOL-MET-TRADE LLC',
      zh: 'OSKOL-MET-TRADE 有限责任公司',
    },
    verificationStatus: 'verified-public',
    evidence: [
      {
        sourceType: 'official-registry',
        sourceTitle: 'EGRUL / ФНС registry',
        publicDisclosureApproved: true,
      },
    ],
  } as Fact<Translated>,
  shortName: {
    value: {
      ru: 'ОСКОЛ-МЕТ-ТРЕЙД',
      en: 'OSKOL-MET-TRADE',
      zh: '奥斯科尔-金属-贸易',
    },
    verificationStatus: 'verified-public',
    sourceNote: 'Brand name used across the site.',
  } as Fact<Translated>,
  alternateNames: {
    value: ['ОМТ', 'Оскол-Мет-Трейд', 'OSKOL-MET-TRADE'],
    verificationStatus: 'verified-public',
    sourceNote: 'Common trade abbreviations.',
  } as Fact<string[]>,
  /**
   * Historical / experience context ONLY.
   * NOT the legal registration date of ООО «ОСКОЛ-МЕТ-ТРЕЙД».
   * Do not use in Schema.org foundingDate or in an LLC "years on market" calculation.
   */
  founderTeamExperienceStartYear: {
    value: 1994,
    verificationStatus: 'verified-internal',
    sourceNote:
      "Owner-confirmed start of the founder's industry work and accumulated team experience; not the founding date of the current legal entity.",
  } as Fact<number>,
  /**
   * Legal registration date of the LLC.
   * Not present in the repository as a verified public source; do not infer
   * from OGRN. Awaiting owner evidence.
   */
  legalRegistrationDate: {
    value: null,
    verificationStatus: 'requires-owner-verification',
    sourceNote:
      'No verified EGRUL / ФНС document with an exact registration date is stored in the repository. Do NOT publish or infer.',
  } as Fact<string | null>,
  address: {
    value: {
      ru: '309181, Белгородская область, Губкин, ул. Мира, 20, оф. 312/1',
      en: '309181, Belgorod region, Gubkin, Mira str., 20, office 312/1',
      zh: '俄罗斯别尔哥罗德州古布金市 Mira 街 20 号 312/1 办公室，邮编 309181',
    },
    verificationStatus: 'verified-public',
    evidence: [
      {
        sourceType: 'official-registry',
        sourceTitle: 'EGRUL registered legal address',
        publicDisclosureApproved: true,
      },
    ],
  } as Fact<Translated>,
} as const;

/* ------------------------------------------------------------------ */
/* 2. Legal identifiers                                                */
/* ------------------------------------------------------------------ */

export const legalIdentifiers = {
  INN: {
    value: '3127508337',
    verificationStatus: 'verified-public',
    sourceNote: 'Taxpayer ID (ИНН), ФНС registry.',
  } as Fact<string>,
  KPP: {
    value: '312701001',
    verificationStatus: 'verified-public',
    sourceNote: 'Tax registration reason code (КПП), ФНС registry.',
  } as Fact<string>,
  OGRN: {
    value: '1033108702868',
    verificationStatus: 'verified-public',
    sourceNote: 'Primary state registration number (ОГРН), EGRUL.',
  } as Fact<string>,
  OKPO: {
    value: '14943277',
    verificationStatus: 'verified-public',
    sourceNote: 'National classifier code (ОКПО), Rosstat.',
  } as Fact<string>,
  registeredAddress: {
    value: {
      ru: '309181, Белгородская область, Губкин, ул. Мира, 20, оф. 312/1',
      en: '309181, Belgorod region, Gubkin, Mira str., 20, office 312/1',
      zh: '俄罗斯别尔哥罗德州古布金市 Mira 街 20 号 312/1 办公室，邮编 309181',
    },
    verificationStatus: 'verified-public',
    sourceNote: 'Registered legal address, EGRUL registry.',
  } as Fact<Translated>,
} as const;

/* ------------------------------------------------------------------ */
/* 3. Contact details                                                  */
/* ------------------------------------------------------------------ */

export const contactDetails = {
  phones: {
    value: ['+7 495 240 91 99', '+7 909 097 71 74'],
    verificationStatus: 'verified-internal',
    sourceNote: 'Owner-confirmed, intentionally published business phones.',
  } as Fact<string[]>,
  primaryPhone: {
    value: '+7 909 097 71 74',
    verificationStatus: 'verified-internal',
    sourceNote: 'Owner-confirmed primary CTA phone (WhatsApp-enabled).',
  } as Fact<string>,
  email: {
    value: '89090977174@mail.ru',
    verificationStatus: 'verified-internal',
    sourceNote: 'Owner-confirmed commercial / technical inquiries email.',
  } as Fact<string>,
  /**
   * Messenger channels:
   *  - WhatsApp destination is a verified phone-number link.
   *  - Telegram and WeChat are DISPLAYED as QR-image channels in
   *    ContactSection.tsx (RU/EN/ZH), but the encoded destinations are
   *    not decoded from source. Do NOT claim the accounts do not exist,
   *    and do NOT publish account IDs / URLs until owner-verified.
   */
  messengers: {
    value: {
      whatsapp: {
        status: 'verified-internal' as VerificationStatus,
        href: 'https://wa.me/79090977174',
        note: 'WhatsApp click-to-chat link tied to the primary phone.',
      },
      telegram: {
        status: 'channel-displayed' as VerificationStatus,
        href: null as string | null,
        note: 'Telegram QR image is displayed on the site; destination requires owner verification.',
      },
      wechat: {
        status: 'channel-displayed' as VerificationStatus,
        href: null as string | null,
        note: 'WeChat QR image is displayed on the site; destination requires owner verification.',
      },
    },
    verificationStatus: 'channel-displayed',
    sourceNote:
      'QR assets (see Contact section) are locally hosted; decoded destinations are not stored in source and must not be assumed.',
  } as Fact<{
    whatsapp: { status: VerificationStatus; href: string | null; note: string };
    telegram: { status: VerificationStatus; href: string | null; note: string };
    wechat: { status: VerificationStatus; href: string | null; note: string };
  }>,
  workingHours: {
    value: {
      ru: 'Пн–Пт 8:00–18:00, Сб 9:00–15:00 (Мск)',
      en: 'Mon–Fri 8:00–18:00, Sat 9:00–15:00 (Moscow time)',
      zh: '周一至周五 8:00–18:00，周六 9:00–15:00（莫斯科时间）',
    },
    verificationStatus: 'verified-internal',
    sourceNote: 'Standard office hours.',
  } as Fact<Translated>,
} as const;

/* ------------------------------------------------------------------ */
/* 4. Services (offered directions, NOT product verification)          */
/* ------------------------------------------------------------------ */

export interface ServiceItem {
  id: string;
  name: Translated;
  anchor: string;
}

export const services: Fact<ServiceItem[]> = {
  value: [
    {
      id: 'equipment',
      anchor: '#equipment',
      name: {
        ru: 'Металлообрабатывающее оборудование',
        en: 'Metalworking equipment',
        zh: '金属加工设备',
      },
    },
    {
      id: 'materials',
      anchor: '#materials',
      name: {
        ru: 'Металлургическое сырьё',
        en: 'Metallurgical raw materials',
        zh: '冶金原材料',
      },
    },
    {
      id: 'furnaces',
      anchor: '#furnaces',
      name: {
        ru: 'Металлургические печи',
        en: 'Industrial furnaces',
        zh: '工业熔炉',
      },
    },
    {
      id: 'manufacturing',
      anchor: '#manufacturing',
      name: {
        ru: 'Производственные возможности ВСЗ',
        en: 'VSZ manufacturing capabilities',
        zh: 'VSZ 制造能力',
      },
    },
  ],
  verificationStatus: 'owner-confirmed-direction',
  sourceNote:
    'Four company-stated business directions. Not evidence of stock, manufacturer relationships, or a specific technical configuration.',
};

/* ------------------------------------------------------------------ */
/* 5. Product / material categories                                    */
/* ------------------------------------------------------------------ */

export interface ProductItem {
  id: string;
  category: 'equipment' | 'materials' | 'furnaces' | 'manufacturing';
  name: Translated;
}

/**
 * Generic category-level offered directions.
 * Presence here means the direction is company-stated; it does NOT mean
 * a specific model, configuration, manufacturer relationship or stock
 * availability is verified. Do NOT auto-generate schema.org/Product or
 * schema.org/Offer from this list.
 */
export const products: Fact<ProductItem[]> = {
  value: [
    {
      id: 'cnc-machining-centers',
      category: 'equipment',
      name: {
        ru: 'Обрабатывающие центры с ЧПУ',
        en: 'CNC machining centers',
        zh: '数控加工中心',
      },
    },
    {
      id: 'cnc-turning-centers',
      category: 'equipment',
      name: {
        ru: 'Токарные центры с ЧПУ',
        en: 'CNC turning centers',
        zh: '数控车削中心',
      },
    },
    {
      id: 'cnc-grinding',
      category: 'equipment',
      name: {
        ru: 'Шлифовальные станки с ЧПУ',
        en: 'CNC grinding machines',
        zh: '数控磨床',
      },
    },
    {
      id: 'hydraulic-presses',
      category: 'equipment',
      name: {
        ru: 'Гидравлические прессы',
        en: 'Hydraulic presses',
        zh: '液压机',
      },
    },
    {
      id: 'robotic-lines',
      category: 'equipment',
      name: {
        ru: 'Роботизированные комплексы сварки и покраски',
        en: 'Robotic welding and painting systems',
        zh: '机器人焊接与喷涂系统',
      },
    },
    {
      id: 'manganese-ore',
      category: 'materials',
      name: {
        ru: 'Марганцевая руда',
        en: 'Manganese ore',
        zh: '锰矿',
      },
    },
    {
      id: 'iron-ore',
      category: 'materials',
      name: {
        ru: 'Железная руда',
        en: 'Iron ore',
        zh: '铁矿石',
      },
    },
    {
      id: 'bentonite',
      category: 'materials',
      name: { ru: 'Бентонит', en: 'Bentonite', zh: '膨润土' },
    },
    {
      id: 'ferrochrome',
      category: 'materials',
      name: {
        ru: 'Феррохром FeCr',
        en: 'Ferrochrome FeCr',
        zh: '铬铁 FeCr',
      },
    },
    {
      id: 'npi',
      category: 'materials',
      name: {
        ru: 'Никельсодержащий чугун (NPI)',
        en: 'Nickel-containing pig iron (NPI)',
        zh: '含镍生铁 (NPI)',
      },
    },
    {
      id: 'ss-slabs',
      category: 'materials',
      name: {
        ru: 'Слябы из нержавеющей стали',
        en: 'Stainless-steel slabs',
        zh: '不锈钢板坯',
      },
    },
    {
      id: 'vacuum-arc-furnace',
      category: 'furnaces',
      name: {
        ru: 'Вакуумно-дуговые печи',
        en: 'Vacuum arc furnaces',
        zh: '真空电弧炉',
      },
    },
    {
      id: 'induction-furnace',
      category: 'furnaces',
      name: {
        ru: 'Индукционные печи (нагрев / плавка)',
        en: 'Induction heating / melting furnaces',
        zh: '感应加热 / 熔炼炉',
      },
    },
    {
      id: 'gas-furnace',
      category: 'furnaces',
      name: {
        ru: 'Печи газового нагрева',
        en: 'Gas heating furnaces',
        zh: '燃气加热炉',
      },
    },
    {
      id: 'vsz-cooperation',
      category: 'manufacturing',
      name: {
        ru: 'Производственная кооперация с ВСЗ',
        en: 'Manufacturing cooperation with VSZ',
        zh: '与 VSZ 的制造合作',
      },
    },
  ],
  verificationStatus: 'owner-confirmed-direction',
  sourceNote:
    'Category-level offered directions. Configuration, manufacturer, tonnage and stock are project-specific and contract-fixed.',
};

/* ------------------------------------------------------------------ */
/* 6. Trust signals                                                    */
/* ------------------------------------------------------------------ */

export const trustSignals = {
  businessDirections: {
    value: 4,
    verificationStatus: 'verified-public',
    sourceNote: 'Four directions listed on the live site.',
  } as Fact<number>,
  equipmentDelivered: {
    value: null,
    verificationStatus: 'requires-owner-verification',
    sourceNote:
      'Historic marketing claim "2500+ units" is not published pending sales-record evidence.',
  } as Fact<number | null>,
  asianPartnerFactories: {
    value: null,
    verificationStatus: 'requires-owner-verification',
    sourceNote:
      'Historic marketing claim "25+ Asian factories" is not published pending procurement-record evidence.',
  } as Fact<number | null>,
} as const;

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const isDev =
  typeof import.meta !== 'undefined' && (import.meta as any)?.env?.DEV === true;

/**
 * Translation resolver for public-facing registry fields.
 *
 * Public safety rule: do NOT silently return Russian text on English or
 * Chinese indexable pages. When a required translation is missing:
 *  - in development, warn loudly (helps catch the omission during dev),
 *  - in production, return an empty string rather than crashing or
 *    leaking a cross-language fallback.
 */
export const t = <T extends Translated>(field: T, lang: Lang): string => {
  const v = field[lang];
  if (v && v.trim().length > 0) return v;
  if (isDev) {
    // eslint-disable-next-line no-console
    console.warn(
      `[companyRegistry.t] Missing "${lang}" translation for field`,
      field,
    );
  }
  return '';
};

/**
 * Guard for STRONG public factual claims backed by external evidence.
 * Use this before rendering a claim as verified fact in HTML/JSON-LD.
 */
export const canRenderPublicly = <T>(fact: Fact<T>): boolean =>
  fact.verificationStatus === 'verified-public' &&
  (fact.evidence?.some((e) => e.publicDisclosureApproved) ?? false);

/**
 * Policy check for ordinary owner-confirmed content that is intentionally
 * published (contact details, offered business directions). This does NOT
 * imply externally verified public evidence.
 */
export const canPublishAsOwnerConfirmed = <T>(fact: Fact<T>): boolean =>
  fact.verificationStatus === 'verified-public' ||
  fact.verificationStatus === 'verified-internal' ||
  fact.verificationStatus === 'owner-confirmed-direction';

export const companyRegistry = {
  companyIdentity,
  legalIdentifiers,
  contactDetails,
  services,
  products,
  trustSignals,
} as const;

export default companyRegistry;
