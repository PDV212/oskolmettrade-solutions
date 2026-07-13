// Shared global-UI localization + link helpers.
// Single typed source consumed by Header, Footer and mobile navigation.

export type Lang = 'ru' | 'en' | 'zh';

export const LANGUAGE_HOME: Record<Lang, string> = {
  ru: '/',
  en: '/en',
  zh: '/zh',
} as const;

export type HomeSection =
  | 'directions'
  | 'equipment'
  | 'materials'
  | 'furnaces'
  | 'manufacturing'
  | 'advantages'
  | 'contacts';

/**
 * Build an absolute link to a homepage section for a given language.
 * Always resolves against the language-home root, never the current pathname,
 * so nested pages never produce e.g. `/zh/privacy/#equipment`.
 */
export function buildHomeSectionHref(language: Lang, section: HomeSection): string {
  const base = LANGUAGE_HOME[language];
  return base === '/' ? `/#${section}` : `${base}#${section}`;
}

export interface GlobalUiStrings {
  headerTagline: string;
  home: string;
  directions: string;
  company: string;
  equipment: string;
  materials: string;
  furnaces: string;
  manufacturing: string;
  advantages: string;
  contacts: string;
  backToTop: string;
  skipToContent: string;
}

export const GLOBAL_UI: Record<Lang, GlobalUiStrings> = {
  ru: {
    headerTagline: 'Металлообработка • Металлургия • Производство',
    home: 'Главная',
    directions: 'О компании',
    company: 'Реквизиты',
    equipment: 'Оборудование',
    materials: 'Сырье',
    furnaces: 'Печи',
    manufacturing: 'Производство ВСЗ',
    advantages: 'Преимущества',
    contacts: 'Контакты',
    backToTop: 'Наверх',
    skipToContent: 'Перейти к основному содержанию',
  },
  en: {
    headerTagline: 'Metalworking • Metallurgy • Manufacturing',
    home: 'Home',
    directions: 'About',
    company: 'Company',
    equipment: 'Equipment',
    materials: 'Materials',
    furnaces: 'Furnaces',
    manufacturing: 'VSZ Production',
    advantages: 'Advantages',
    contacts: 'Contacts',
    backToTop: 'Top',
    skipToContent: 'Skip to main content',
  },
  zh: {
    headerTagline: '金属加工 • 冶金 • 制造',
    home: '首页',
    directions: '关于我们',
    company: '公司信息',
    equipment: '设备',
    materials: '原材料',
    furnaces: '炉子',
    manufacturing: 'VSZ生产',
    advantages: '优势',
    contacts: '联系方式',
    backToTop: '返回顶部',
    skipToContent: '跳至主要内容',
  },
};

/** Route that hosts the Company details page for a language. */
export function companyRouteFor(language: Lang): string {
  return language === 'ru' ? '/company' : `/${language}/company`;
}
