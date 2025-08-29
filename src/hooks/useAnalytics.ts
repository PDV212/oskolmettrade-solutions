import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Analytics from '@/utils/analytics';

export const useAnalytics = () => {
  const location = useLocation();
  const analytics = Analytics.getInstance();

  // Инициализация аналитики при монтировании
  useEffect(() => {
    analytics.init();
    analytics.trackTimeOnSite();
  }, []);

  // Отслеживание смены страниц
  useEffect(() => {
    analytics.trackPageView(location.pathname + location.search);
  }, [location, analytics]);

  // Возвращаем методы для использования в компонентах
  return {
    trackEvent: analytics.trackEvent.bind(analytics),
    trackConversion: analytics.trackConversion.bind(analytics),
    trackFormSubmission: analytics.trackFormSubmission.bind(analytics),
    trackLinkClick: analytics.trackLinkClick.bind(analytics),
    trackFileDownload: analytics.trackFileDownload.bind(analytics),
  };
};