import React, { createContext, useContext, ReactNode } from 'react';
import Analytics, { AnalyticsEvent } from '@/utils/analytics';

interface AnalyticsContextType {
  trackEvent: (event: AnalyticsEvent) => void;
  trackConversion: (goalName: string, value?: number) => void;
  trackFormSubmission: (formName: string) => void;
  trackLinkClick: (linkText: string, url: string) => void;
  trackFileDownload: (fileName: string, fileType: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const analytics = Analytics.getInstance();

  const contextValue: AnalyticsContextType = {
    trackEvent: analytics.trackEvent.bind(analytics),
    trackConversion: analytics.trackConversion.bind(analytics),
    trackFormSubmission: analytics.trackFormSubmission.bind(analytics),
    trackLinkClick: analytics.trackLinkClick.bind(analytics),
    trackFileDownload: analytics.trackFileDownload.bind(analytics),
  };

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalyticsContext = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalyticsContext must be used within an AnalyticsProvider');
  }
  return context;
};