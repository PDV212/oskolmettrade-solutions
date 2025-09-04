import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Конфигурация аналитики
const ANALYTICS_CONFIG = {
  GA_ID: 'G-XXXXXXXXXX',
  YM_ID: 12345678 // Замените на ваш ID Яндекс.Метрики
};

// Типы для аналитики
declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
    ym: (id: number, action: string, url?: string, options?: any) => void;
  }
}

interface AnalyticsProps {
  language?: 'ru' | 'en' | 'zh';
}

const Analytics = ({ language = 'ru' }: AnalyticsProps) => {
  const location = useLocation();

  useEffect(() => {
    // Отслеживание смены страницы в Google Analytics
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', ANALYTICS_CONFIG.GA_ID, {
        page_path: location.pathname,
        page_title: getPageTitle(location.pathname, language),
        content_group1: language,
        custom_map: {
          'dimension1': 'page_language'
        }
      });

      window.gtag('event', 'page_view', {
        page_language: language,
        page_path: location.pathname
      });
    }

    // Отслеживание смены страницы в Яндекс.Метрике
    if (typeof window.ym !== 'undefined') {
      window.ym(ANALYTICS_CONFIG.YM_ID, 'hit', location.pathname, {
        title: getPageTitle(location.pathname, language),
        language: language,
        page_type: getPageType(location.pathname)
      });
    }
  }, [location, language]);

  return null;
};

// Функция получения заголовка страницы по языку
const getPageTitle = (pathname: string, language: string): string => {
  const titles = {
    ru: {
      '/': 'ОСКОЛ-МЕТ-ТРЕЙД - Главная',
      '/en': 'OSKOL-MET-TRADE - Home',
      '/zh': '奥斯科尔-金属-贸易 - 首页'
    },
    en: {
      '/': 'OSKOL-MET-TRADE - Home',
      '/en': 'OSKOL-MET-TRADE - Home',
      '/zh': 'OSKOL-MET-TRADE - Home'
    },
    zh: {
      '/': '奥斯科尔-金属-贸易 - 首页',
      '/en': '奥斯科尔-金属-贸易 - 首页', 
      '/zh': '奥斯科尔-金属-贸易 - 首页'
    }
  };

  return titles[language as keyof typeof titles]?.[pathname] || 'ОСКОЛ-МЕТ-ТРЕЙД';
};

// Определение типа страницы для аналитики
const getPageType = (pathname: string): string => {
  if (pathname === '/') return 'homepage_ru';
  if (pathname === '/en') return 'homepage_en';  
  if (pathname === '/zh') return 'homepage_zh';
  return 'other';
};

// Функции для отслеживания событий
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  // Google Analytics
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, parameters);
  }

  // Яндекс.Метрика
  if (typeof window.ym !== 'undefined') {
    window.ym(ANALYTICS_CONFIG.YM_ID, 'reachGoal', eventName);
  }
};

// Отслеживание кликов по кнопкам
export const trackButtonClick = (buttonName: string, section: string, language: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    section: section,
    language: language,
    event_category: 'engagement'
  });
};

// Отслеживание скроллинга
export const trackScrollDepth = (depth: number, language: string) => {
  trackEvent('scroll_depth', {
    scroll_depth: depth,
    language: language,
    event_category: 'engagement'
  });
};

// Отслеживание переключения языка
export const trackLanguageSwitch = (fromLanguage: string, toLanguage: string) => {
  trackEvent('language_switch', {
    from_language: fromLanguage,
    to_language: toLanguage,
    event_category: 'user_interaction'
  });
};

// Отслеживание заявок/звонков
export const trackLead = (leadType: 'phone' | 'email' | 'form', language: string) => {
  trackEvent('lead_generated', {
    lead_type: leadType,
    language: language,
    event_category: 'conversion'
  });
};

// Отслеживание просмотра секций
export const trackSectionView = (sectionName: string, language: string) => {
  trackEvent('section_view', {
    section_name: sectionName,
    language: language,
    event_category: 'engagement'
  });
};

export default Analytics;