import { useEffect } from 'react';
import CacheManager from '@/utils/cacheManager';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

export const usePerformanceMonitor = () => {
  useEffect(() => {
    const cacheManager = CacheManager.getInstance();
    
    // Мониторинг загрузки страницы
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const metrics: Partial<PerformanceMetrics> = {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        };

        // First Contentful Paint
        const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
        if (fcp) {
          metrics.firstContentfulPaint = fcp.startTime;
        }

        // Largest Contentful Paint
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            metrics.largestContentfulPaint = lastEntry.startTime;
          });
          
          try {
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
          } catch (e) {
            console.warn('LCP observation not supported');
          }

          // Cumulative Layout Shift
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            for (const entry of list.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                clsValue += (entry as any).value;
              }
            }
            metrics.cumulativeLayoutShift = clsValue;
          });
          
          try {
            clsObserver.observe({ entryTypes: ['layout-shift'] });
          } catch (e) {
            console.warn('CLS observation not supported');
          }

          // First Input Delay
          const fidObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              metrics.firstInputDelay = (entry as any).processingStart - entry.startTime;
            }
          });
          
          try {
            fidObserver.observe({ entryTypes: ['first-input'] });
          } catch (e) {
            console.warn('FID observation not supported');
          }
        }

        // Сохраняем метрики в кеш для анализа
        setTimeout(() => {
          cacheManager.setLocalCache('performance_metrics', metrics, 60 * 60 * 1000); // 1 час
          console.log('Performance metrics:', metrics);
        }, 3000);
      }
    };

    // Мониторинг использования кеша
    const monitorCache = () => {
      const cacheSize = cacheManager.getCacheSize();
      console.log('Cache size:', cacheSize);
      
      // Очистка кеша если он слишком большой (> 5MB)
      const sizeMB = parseFloat(cacheSize.replace(' KB', '')) / 1024;
      if (sizeMB > 5) {
        cacheManager.clearExpiredCaches();
        console.log('Cache cleaned due to size limit');
      }
    };

    // Мониторинг сетевых запросов
    const monitorNetworkRequests = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const resource = entry as PerformanceResourceTiming;
            
            // Логируем медленные ресурсы
            if (resource.duration > 2000) {
              console.warn('Slow resource:', resource.name, `${resource.duration}ms`);
            }
            
            // Кешируем информацию об успешных запросах изображений
            if (resource.name.match(/\.(jpg|jpeg|png|webp|svg)$/i) && resource.responseEnd > 0) {
              cacheManager.setLocalCache(`resource_${resource.name}`, {
                size: resource.transferSize,
                duration: resource.duration,
                cached: resource.transferSize === 0
              }, 24 * 60 * 60 * 1000);
            }
          }
        });
        
        try {
          observer.observe({ entryTypes: ['resource'] });
        } catch (e) {
          console.warn('Resource timing observation not supported');
        }
      }
    };

    // Запуск мониторинга
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }
    
    monitorCache();
    monitorNetworkRequests();

    // Периодический мониторинг кеша
    const cacheInterval = setInterval(monitorCache, 5 * 60 * 1000); // каждые 5 минут

    return () => {
      clearInterval(cacheInterval);
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  // Возвращаем утилиты для ручного управления производительностью
  return {
    clearCache: () => {
      const cacheManager = CacheManager.getInstance();
      cacheManager.clearExpiredCaches();
    },
    getCacheSize: () => {
      const cacheManager = CacheManager.getInstance();
      return cacheManager.getCacheSize();
    },
    preloadImages: (urls: string[]) => {
      const cacheManager = CacheManager.getInstance();
      return cacheManager.preloadImages(urls);
    }
  };
};