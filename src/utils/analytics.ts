// Analytics configuration
export const ANALYTICS_CONFIG = {
  // Google Analytics 4 Measurement ID
  GA4_MEASUREMENT_ID: 'G-XXXXXXXXXX', // Замените на ваш GA4 ID
  
  // Яндекс.Метрика Counter ID  
  YANDEX_COUNTER_ID: 'XXXXXXXX', // Замените на ваш ID счетчика
  
  // Facebook Pixel ID
  FACEBOOK_PIXEL_ID: 'XXXXXXXXXXXXXXX', // Замените на ваш Pixel ID
};

// Типы событий для аналитики
export type AnalyticsEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
};

// Глобальные объекты аналитики
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    ym: (counterId: number, method: string, ...args: any[]) => void;
    fbq: {
      (...args: any[]): void;
      callMethod?: (...args: any[]) => void;
      queue?: any[];
      push?: any;
      loaded?: boolean;
      version?: string;
    };
    _fbq: any;
  }
}

class Analytics {
  private static instance: Analytics;
  private isInitialized = false;

  public static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  // Инициализация всех аналитических систем
  public init(): void {
    if (this.isInitialized) return;

    this.initGA4();
    this.initYandexMetrica();
    this.initFacebookPixel();
    
    this.isInitialized = true;
    console.log('Analytics initialized');
  }

  // Google Analytics 4
  private initGA4(): void {
    if (!ANALYTICS_CONFIG.GA4_MEASUREMENT_ID || ANALYTICS_CONFIG.GA4_MEASUREMENT_ID === 'G-XXXXXXXXXX') return;

    // Создаем dataLayer если его нет
    window.dataLayer = window.dataLayer || [];
    
    // Функция gtag
    window.gtag = function(...args: any[]) {
      window.dataLayer.push(args);
    };

    // Инициализируем GA4
    window.gtag('js', new Date());
    window.gtag('config', ANALYTICS_CONFIG.GA4_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href
    });

    // Загружаем скрипт GA4
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.GA4_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }

  // Яндекс.Метрика
  private initYandexMetrica(): void {
    if (!ANALYTICS_CONFIG.YANDEX_COUNTER_ID || ANALYTICS_CONFIG.YANDEX_COUNTER_ID === 'XXXXXXXX') return;

    // Создаем функцию ym
    window.ym = window.ym || function(...args: any[]) {
      (window.ym as any).a = (window.ym as any).a || [];
      (window.ym as any).a.push(args);
    };

    // Инициализируем Яндекс.Метрику
    window.ym(parseInt(ANALYTICS_CONFIG.YANDEX_COUNTER_ID), 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
      trackHash: true
    });

    // Загружаем скрипт Яндекс.Метрики
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://mc.yandex.ru/metrika/tag.js';
    document.head.appendChild(script);

    // Создаем noscript счетчик
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.src = `https://mc.yandex.ru/watch/${ANALYTICS_CONFIG.YANDEX_COUNTER_ID}`;
    img.style.position = 'absolute';
    img.style.left = '-9999px';
    img.alt = '';
    noscript.appendChild(img);
    document.body.appendChild(noscript);
  }

  // Facebook Pixel
  private initFacebookPixel(): void {
    if (!ANALYTICS_CONFIG.FACEBOOK_PIXEL_ID || ANALYTICS_CONFIG.FACEBOOK_PIXEL_ID === 'XXXXXXXXXXXXXXX') return;

    // Создаем функцию fbq
    const fbq = function(...args: any[]) {
      if (fbq.callMethod) {
        fbq.callMethod.apply(fbq, args);
      } else {
        fbq.queue = fbq.queue || [];
        fbq.queue.push(args);
      }
    } as Window['fbq'];

    window.fbq = fbq;
    window._fbq = fbq;
    window.fbq.push = window.fbq;
    window.fbq.loaded = true;
    window.fbq.version = '2.0';
    window.fbq.queue = [];

    // Инициализируем Facebook Pixel
    window.fbq('init', ANALYTICS_CONFIG.FACEBOOK_PIXEL_ID);
    window.fbq('track', 'PageView');

    // Загружаем скрипт Facebook Pixel
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);

    // Создаем noscript счетчик
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = `https://www.facebook.com/tr?id=${ANALYTICS_CONFIG.FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`;
    noscript.appendChild(img);
    document.body.appendChild(noscript);
  }

  // Отправка событий во все аналитические системы
  public trackEvent(event: AnalyticsEvent): void {
    if (!this.isInitialized) return;

    // Google Analytics 4
    if (window.gtag && ANALYTICS_CONFIG.GA4_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      window.gtag('event', event.action, {
        event_category: event.category || 'engagement',
        event_label: event.label,
        value: event.value,
        ...event.custom_parameters
      });
    }

    // Яндекс.Метрика
    if (window.ym && ANALYTICS_CONFIG.YANDEX_COUNTER_ID !== 'XXXXXXXX') {
      const counterId = parseInt(ANALYTICS_CONFIG.YANDEX_COUNTER_ID);
      window.ym(counterId, 'reachGoal', event.action, {
        category: event.category,
        label: event.label,
        value: event.value,
        ...event.custom_parameters
      });
    }

    // Facebook Pixel
    if (window.fbq && ANALYTICS_CONFIG.FACEBOOK_PIXEL_ID !== 'XXXXXXXXXXXXXXX') {
      window.fbq('track', 'CustomEvent', {
        event_name: event.action,
        category: event.category,
        label: event.label,
        value: event.value,
        ...event.custom_parameters
      });
    }
  }

  // Отслеживание просмотра страницы
  public trackPageView(path?: string): void {
    const currentPath = path || window.location.pathname;
    
    // Google Analytics 4
    if (window.gtag && ANALYTICS_CONFIG.GA4_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      window.gtag('config', ANALYTICS_CONFIG.GA4_MEASUREMENT_ID, {
        page_path: currentPath,
        page_title: document.title,
        page_location: window.location.href
      });
    }

    // Яндекс.Метрика
    if (window.ym && ANALYTICS_CONFIG.YANDEX_COUNTER_ID !== 'XXXXXXXX') {
      const counterId = parseInt(ANALYTICS_CONFIG.YANDEX_COUNTER_ID);
      window.ym(counterId, 'hit', currentPath);
    }

    // Facebook Pixel
    if (window.fbq && ANALYTICS_CONFIG.FACEBOOK_PIXEL_ID !== 'XXXXXXXXXXXXXXX') {
      window.fbq('track', 'PageView');
    }
  }

  // Отслеживание конверсий и целей
  public trackConversion(goalName: string, value?: number): void {
    this.trackEvent({
      action: 'conversion',
      category: 'goal',
      label: goalName,
      value: value
    });
  }

  // Отслеживание форм
  public trackFormSubmission(formName: string): void {
    this.trackEvent({
      action: 'form_submit',
      category: 'engagement',
      label: formName
    });
  }

  // Отслеживание кликов по ссылкам
  public trackLinkClick(linkText: string, url: string): void {
    this.trackEvent({
      action: 'click',
      category: 'link',
      label: linkText,
      custom_parameters: {
        url: url
      }
    });
  }

  // Отслеживание скачивания файлов
  public trackFileDownload(fileName: string, fileType: string): void {
    this.trackEvent({
      action: 'file_download',
      category: 'download',
      label: fileName,
      custom_parameters: {
        file_type: fileType
      }
    });
  }

  // Отслеживание времени на сайте
  public trackTimeOnSite(): void {
    let startTime = Date.now();
    
    window.addEventListener('beforeunload', () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      this.trackEvent({
        action: 'time_on_site',
        category: 'engagement',
        value: timeSpent
      });
    });
  }
}

export default Analytics;