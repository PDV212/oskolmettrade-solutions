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

  // Service Worker registration lives in src/main.tsx so there is only
  // one registrar. The CACHE_URLS message channel has been removed from
  // the Service Worker; no page-driven precache injection is performed.

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
    // Очищаем устаревшие записи localStorage при запуске
    this.clearExpiredCaches();

    // Периодическая очистка (каждые 30 минут)
    setInterval(() => {
      this.clearExpiredCaches();
    }, 30 * 60 * 1000);
  }
}

export default CacheManager;