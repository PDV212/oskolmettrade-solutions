import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Оптимизация производительности
    const optimizePerformance = () => {
      // 1. Предзагрузка критических ресурсов
      const preloadResource = (href: string, as: string, type?: string) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
        if (type) link.type = type;
        document.head.appendChild(link);
      };

      // 2. DNS prefetch для внешних доменов
      const dnsPrefetch = (domain: string) => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      };

      // 3. Предзагрузка критических шрифтов
      preloadResource('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2', 'font', 'font/woff2');

      // 4. DNS prefetch для аналитики и других сервисов
      dnsPrefetch('//www.googletagmanager.com');
      dnsPrefetch('//mc.yandex.ru');
      dnsPrefetch('//fonts.googleapis.com');

      // 5. Lazy loading для изображений
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src!;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));

      // 6. Оптимизация для Core Web Vitals
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          // Предзагружаем некритичные ресурсы в idle time
          const nonCriticalImages = [
            '/assets/equipment-manufacturing.jpg',
            '/assets/metallurgy-furnace.jpg',
            '/assets/raw-materials.jpg'
          ];
          
          nonCriticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
          });
        });
      }

      // 7. Оптимизация скроллинга
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      // 8. Compression hint для браузера
      if ('serviceWorker' in navigator && 'caches' in window) {
        // Service worker уже регистрируется в main.tsx
        console.log('Performance optimizations applied');
      }

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    };

    const cleanup = optimizePerformance();
    return cleanup;
  }, []);

  return null; // Этот компонент не рендерит ничего
};

export default PerformanceOptimizer;