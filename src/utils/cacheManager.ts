// Cache Manager для управления кешированием в приложении

interface CacheConfig {
  name: string;
  version: string;
  maxAge: number; // в миллисекундах
  maxItems?: number;
}

class CacheManager {
  private static instance: CacheManager;
  private caches: Map<string, Cache> = new Map();

  public static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager();
    }
    return CacheManager.instance;
  }

  // Регистрация Service Worker
  public async registerServiceWorker(): Promise<void> {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered:', registration.scope);
        
        // Отправляем критические URL для предварительного кеширования
        this.sendCriticalUrls();
      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    }
  }

  // Send critical URLs for precaching.
  // Only shipped, unhashed public assets are eligible here. Images that
  // live in src/assets/ are imported by components and are emitted with
  // Vite content hashes, so they cannot be precached by static path.
  private sendCriticalUrls(): void {
    const criticalUrls = [
      '/lovable-uploads/b3c22956-096b-4475-8619-90ea784e020b.png',
      '/lovable-uploads/adb38e62-ebf5-4d0f-92a9-272c1f38c8f4.png',
    ];

    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'CACHE_URLS',
        payload: criticalUrls
      });
    }
  }

  // Кеширование в localStorage с TTL
  public setLocalCache(key: string, data: any, maxAge: number = 24 * 60 * 60 * 1000): void {
    try {
      const cacheData = {
        data,
        timestamp: Date.now(),
        maxAge
      };
      localStorage.setItem(`cache_${key}`, JSON.stringify(cacheData));
    } catch (error) {
      console.warn('Failed to set local cache:', error);
    }
  }

  // Получение из localStorage с проверкой TTL
  public getLocalCache<T>(key: string): T | null {
    try {
      const cached = localStorage.getItem(`cache_${key}`);
      if (!cached) return null;

      const cacheData = JSON.parse(cached);
      const now = Date.now();
      
      if (now - cacheData.timestamp > cacheData.maxAge) {
        localStorage.removeItem(`cache_${key}`);
        return null;
      }

      return cacheData.data;
    } catch (error) {
      console.warn('Failed to get local cache:', error);
      return null;
    }
  }

  // Предзагрузка изображений
  public preloadImages(urls: string[]): Promise<void[]> {
    const promises = urls.map(url => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
        img.src = url;
      });
    });

    return Promise.all(promises);
  }

  // Кеширование API запросов
  public async cacheApiResponse(url: string, response: any, maxAge: number = 5 * 60 * 1000): Promise<void> {
    this.setLocalCache(`api_${url}`, response, maxAge);
  }

  public getCachedApiResponse<T>(url: string): T | null {
    return this.getLocalCache<T>(`api_${url}`);
  }

  // Очистка устаревших кешей
  public clearExpiredCaches(): void {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith('cache_')) {
        try {
          const cached = JSON.parse(localStorage.getItem(key) || '');
          const now = Date.now();
          
          if (now - cached.timestamp > cached.maxAge) {
            localStorage.removeItem(key);
          }
        } catch (error) {
          // Удаляем поврежденные записи
          localStorage.removeItem(key);
        }
      }
    });
  }

  // Получение размера кеша
  public getCacheSize(): string {
    let size = 0;
    const keys = Object.keys(localStorage);
    
    keys.forEach(key => {
      if (key.startsWith('cache_')) {
        size += (localStorage.getItem(key) || '').length;
      }
    });

    return `${(size / 1024).toFixed(2)} KB`;
  }

  // Инициализация менеджера кеширования
  public init(): void {
    // Регистрируем Service Worker
    this.registerServiceWorker();
    
    // Очищаем устаревшие кеши при запуске
    this.clearExpiredCaches();

    // Периодическая очистка кеша (каждые 30 минут)
    setInterval(() => {
      this.clearExpiredCaches();
    }, 30 * 60 * 1000);
  }
}

export default CacheManager;