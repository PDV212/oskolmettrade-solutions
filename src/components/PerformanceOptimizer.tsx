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

      // 3. Локальные ресурсы интерфейса
      dnsPrefetch(window.location.origin);

      // 4. Lazy loading для изображений
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

      // 5. Оптимизация для Core Web Vitals.
      // Hero/section images live in src/assets/ and are imported by
      // components — Vite emits them with content hashes. Idle-time
      // preloading of unhashed /assets/*.jpg URLs produced 404s in
      // production and has been removed.

      // 6. Оптимизация скроллинга
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

      // 7. (removed) Legacy Service Worker registration hint. The app-shell
      //    SW has been replaced by a kill switch at /sw.js and is no longer
      //    registered from main.tsx. See src/lib/appVersion.ts for the
      //    current deploy-update flow.

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