import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Analytics from '@/utils/analytics';

export const useAnalytics = () => {
  const location = useLocation();
  const analytics = Analytics.getInstance();

  // Инициализация аналитики при монтировании (только на клиенте)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      analytics.init();
      analytics.trackTimeOnSite();
    }
  }, [analytics]);

  // Отслеживание смены страниц (только на клиенте)
  useEffect(() => {
    if (typeof window !== 'undefined' && analytics) {
      analytics.trackPageView(location.pathname + location.search);
    }
  }, [location, analytics]);

  // Возвращаем безопасные методы
  return {
    trackEvent: (event: any) => {
      if (typeof window !== 'undefined') {
        analytics.trackEvent(event);
      }
    },
    trackConversion: (goalName: string, value?: number) => {
      if (typeof window !== 'undefined') {
        analytics.trackConversion(goalName, value);
      }
    },
    trackFormSubmission: (formName: string) => {
      if (typeof window !== 'undefined') {
        analytics.trackFormSubmission(formName);
      }
    },
    trackLinkClick: (linkText: string, url: string) => {
      if (typeof window !== 'undefined') {
        analytics.trackLinkClick(linkText, url);
      }
    },
    trackFileDownload: (fileName: string, fileType: string) => {
      if (typeof window !== 'undefined') {
        analytics.trackFileDownload(fileName, fileType);
      }
    },
  };
};