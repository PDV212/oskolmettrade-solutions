/**
 * Centralized company data registry — single source of truth.
 *
 * Rules:
 *  - Translatable fields use { ru, en, zh }.
 *  - Every factual claim uses { value, verificationStatus, sourceNote }.
 *  - Do NOT invent metrics, countries, certificates, or expert names.
 *  - Update `sourceNote` and `verificationStatus` when data is confirmed
 *    against primary sources (official registry, contract, invoice, etc.).
 */

export type Lang = 'ru' | 'en' | 'zh';

export interface Translated {
  ru: string;
  en: string;
  zh: string;
}

export type VerificationStatus = 'verified' | 'unverified';

export interface Fact<T> {
  value: T;
  verificationStatus: VerificationStatus;
  sourceNote: string;
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
    verificationStatus: 'verified',
    sourceNote: 'Official legal name, EGRUL / ФНС registry.',
  } as Fact<Translated>,
  shortName: {
    value: {
      ru: 'ОСКОЛ-МЕТ-ТРЕЙД',
      en: 'OSKOL-MET-TRADE',
      zh: '奥斯科尔-金属-贸易',
    },
    verificationStatus: 'verified',
    sourceNote: 'Brand name used across site and marketing.',
  } as Fact<Translated>,
  alternateNames: {
    value: ['ОМТ', 'Оскол-Мет-Трейд', 'OSKOL-MET-TRADE'],
    verificationStatus: 'verified',
    sourceNote: 'Common trade abbreviations.',
  } as Fact<string[]>,
  foundedYear: {
    value: 1994,
    verificationStatus: 'verified',
    sourceNote: 'Company founding year, EGRUL registry.',
  } as Fact<number>,
  address: {
    value: {
      ru: '309181, Белгородская область, Губкин, ул. Мира, 20, оф. 312/1',
      en: '309181, Belgorod region, Gubkin, Mira str., 20, office 312/1',
      zh: '俄罗斯别尔哥罗德州古布金市 Mira 街 20 号 312/1 办公室，邮编 309181',
    },
    verificationStatus: 'verified',
    sourceNote: 'Registered legal address, EGRUL registry.',
  } as Fact<Translated>,
} as const;

/* ------------------------------------------------------------------ */
/* 2. Legal identifiers                                                */
/* ------------------------------------------------------------------ */

export const legalIdentifiers = {
  INN: {
    value: '3127508337',
    verificationStatus: 'verified',
    sourceNote: 'Taxpayer ID (ИНН), ФНС registry.',
  } as Fact<string>,
  KPP: {
    value: '312701001',
    verificationStatus: 'verified',
    sourceNote: 'Tax registration reason code (КПП), ФНС registry.',
  } as Fact<string>,
  OGRN: {
    value: '1033108702868',
    verificationStatus: 'verified',
    sourceNote: 'Primary state registration number (ОГРН), EGRUL.',
  } as Fact<string>,
  OKPO: {
    value: '14943277',
    verificationStatus: 'verified',
    sourceNote: 'National classifier code (ОКПО), Rosstat.',
  } as Fact<string>,
  registeredAddress: {
    value: {
      ru: '309181, Белгородская область, Губкин, ул. Мира, 20, оф. 312/1',
      en: '309181, Belgorod region, Gubkin, Mira str., 20, office 312/1',
      zh: '俄罗斯别尔哥罗德州古布金市 Mira 街 20 号 312/1 办公室，邮编 309181',
    },
    verificationStatus: 'verified',
    sourceNote: 'Registered legal address, EGRUL registry.',
  } as Fact<Translated>,
} as const;

/* ------------------------------------------------------------------ */
/* 3. Contact details                                                  */
/* ------------------------------------------------------------------ */

export const contactDetails = {
  phones: {
    value: ['+7 495 240 91 99', '+7 909 097 71 74'],
    verificationStatus: 'verified',
    sourceNote: 'Primary and mobile business phones.',
  } as Fact<string[]>,
  primaryPhone: {
    value: '+7 909 097 71 74',
    verificationStatus: 'verified',
    sourceNote: 'Primary CTA phone (WhatsApp-enabled).',
  } as Fact<string>,
  email: {
    value: '89090977174@mail.ru',
    verificationStatus: 'verified',
    sourceNote: 'Primary commercial and technical inquiries email.',
  } as Fact<string>,
  messengers: {
    value: {
      whatsapp: '+7 909 097 71 74',
      telegram: null,
      wechat: null,
    },
    verificationStatus: 'verified',
    sourceNote:
      'Only WhatsApp is officially available. No Telegram or WeChat accounts exist for the company.',
  } as Fact<{ whatsapp: string; telegram: string | null; wechat: string | null }>,
  workingHours: {
    value: {
      ru: 'Пн–Пт 8:00–18:00, Сб 9:00–15:00 (Мск)',
      en: 'Mon–Fri 8:00–18:00, Sat 9:00–15:00 (Moscow time)',
      zh: '周一至周五 8:00–18:00，周六 9:00–15:00（莫斯科时间）',
    },
    verificationStatus: 'verified',
    sourceNote: 'Standard office hours.',
  } as Fact<Translated>,
} as const;

/* ------------------------------------------------------------------ */
/* 4. Services                                                         */
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
        ru: 'Производство ВСЗ',
        en: 'VSZ in-house production',
        zh: 'VSZ 自有生产',
      },
    },
  ],
  verificationStatus: 'verified',
  sourceNote: 'Four business directions confirmed on the current live site.',
};

/* ------------------------------------------------------------------ */
/* 5. Products                                                         */
/* ------------------------------------------------------------------ */

export interface ProductItem {
  id: string;
  category: 'equipment' | 'materials' | 'furnaces' | 'manufacturing';
  name: Translated;
}

export const products: Fact<ProductItem[]> = {
  value: [
    {
      id: 'vmc-850',
      category: 'equipment',
      name: {
        ru: 'Вертикальный обрабатывающий центр с ЧПУ VMC-850',
        en: 'CNC vertical machining center VMC-850',
        zh: 'VMC-850 立式数控加工中心',
      },
    },
    {
      id: 'cnc-320',
      category: 'equipment',
      name: {
        ru: 'Токарный обрабатывающий центр с ЧПУ CNC-320',
        en: 'CNC turning center CNC-320',
        zh: 'CNC-320 数控车削中心',
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
        ru: 'Роботизированные линии сварки и покраски',
        en: 'Robotic welding and painting lines',
        zh: '机器人焊接与喷涂生产线',
      },
    },
    {
      id: 'raw-ore',
      category: 'materials',
      name: {
        ru: 'Руда и ферросплавы',
        en: 'Ore and ferroalloys',
        zh: '矿石与铁合金',
      },
    },
    {
      id: 'vacuum-furnace',
      category: 'furnaces',
      name: {
        ru: 'Вакуумные плавильные печи',
        en: 'Vacuum melting furnaces',
        zh: '真空熔炼炉',
      },
    },
    {
      id: 'induction-furnace',
      category: 'furnaces',
      name: {
        ru: 'Индукционные печи',
        en: 'Induction furnaces',
        zh: '感应炉',
      },
    },
    {
      id: 'vsz-parts',
      category: 'manufacturing',
      name: {
        ru: 'Изготовление деталей ВСЗ',
        en: 'VSZ custom parts manufacturing',
        zh: 'VSZ 定制零部件制造',
      },
    },
  ],
  verificationStatus: 'verified',
  sourceNote: 'Product families listed on current live site and marketing materials.',
};

/* ------------------------------------------------------------------ */
/* 6. Trust signals                                                    */
/* ------------------------------------------------------------------ */

export const trustSignals = {
  foundingYear: {
    value: 1994,
    verificationStatus: 'verified',
    sourceNote: 'EGRUL registry.',
  } as Fact<number>,
  yearsOnMarket: {
    value: new Date().getFullYear() - 1994,
    verificationStatus: 'verified',
    sourceNote: 'Computed from founding year.',
  } as Fact<number>,
  equipmentDelivered: {
    value: 2500,
    verificationStatus: 'unverified',
    sourceNote:
      'Marketing claim "2500+ units delivered" — pending confirmation from sales records.',
  } as Fact<number>,
  asianPartnerFactories: {
    value: 25,
    verificationStatus: 'unverified',
    sourceNote:
      'Marketing claim "25+ Asian factories" — pending confirmation from procurement records.',
  } as Fact<number>,
  businessDirections: {
    value: 4,
    verificationStatus: 'verified',
    sourceNote: 'Four directions listed on live site.',
  } as Fact<number>,
} as const;

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

export const t = <T extends Translated>(field: T, lang: Lang): string =>
  field[lang] ?? field.ru;

/**
 * Guard: returns true only for facts whose verificationStatus === 'verified'.
 * UI components must call this before rendering marketing metrics.
 */
export const isPubliclyVerified = <T,>(claim: Fact<T>): boolean =>
  claim.verificationStatus === 'verified';



export const companyRegistry = {
  companyIdentity,
  legalIdentifiers,
  contactDetails,
  services,
  products,
  trustSignals,
} as const;

export default companyRegistry;
