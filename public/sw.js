const CACHE_NAME = 'oskol-met-trade-v2025-01-03';
const STATIC_CACHE = 'static-v2025-01-03';
const DYNAMIC_CACHE = 'dynamic-v2025-01-03';
const IMAGE_CACHE = 'images-v2025-01-03';

// Статические ресурсы для кеширования
const STATIC_ASSETS = [
  '/',
  '/en',
  '/zh',
  '/index.html',
  '/manifest.json',
  '/assets/hero-industrial.jpg',
  '/lovable-uploads/b3c22956-096b-4475-8619-90ea784e020b.png',
  '/lovable-uploads/adb38e62-ebf5-4d0f-92a9-272c1f38c8f4.png'
];

// Изображения и медиа файлы
const IMAGE_EXTENSIONS = /\.(jpg|jpeg|png|gif|webp|svg|ico|avif)$/i;
const FONT_EXTENSIONS = /\.(woff|woff2|ttf|eot)$/i;
const CSS_JS_EXTENSIONS = /\.(css|js)$/i;

// Установка Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Installing Service Worker');
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log('[SW] Caching static assets');
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Активация Service Worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating Service Worker');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && 
              cacheName !== STATIC_CACHE && 
              cacheName !== DYNAMIC_CACHE && 
              cacheName !== IMAGE_CACHE) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Обработка запросов
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Пропускаем не-GET запросы
  if (request.method !== 'GET') {
    return;
  }

  // Стратегия кеширования для разных типов ресурсов
  if (IMAGE_EXTENSIONS.test(url.pathname) || url.pathname.includes('/lovable-uploads/')) {
    // Изображения: Cache First с длительным кешированием
    event.respondWith(cacheFirstStrategy(request, IMAGE_CACHE, 30 * 24 * 60 * 60 * 1000)); // 30 дней
  } else if (FONT_EXTENSIONS.test(url.pathname)) {
    // Шрифты: Cache First с очень длительным кешированием
    event.respondWith(cacheFirstStrategy(request, STATIC_CACHE, 365 * 24 * 60 * 60 * 1000)); // 1 год
  } else if (CSS_JS_EXTENSIONS.test(url.pathname) || url.pathname.includes('/assets/')) {
    // CSS/JS: Stale While Revalidate
    event.respondWith(staleWhileRevalidateStrategy(request, STATIC_CACHE));
  } else if (url.origin === self.location.origin) {
    // HTML и API: Network First
    event.respondWith(networkFirstStrategy(request, DYNAMIC_CACHE));
  }
});

// Cache First - сначала кеш, потом сеть
async function cacheFirstStrategy(request, cacheName, maxAge = 7 * 24 * 60 * 60 * 1000) {
  try {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    
    if (cached) {
      const cachedDate = new Date(cached.headers.get('sw-cached-date') || 0);
      const now = new Date();
      
      // Проверяем, не устарел ли кеш
      if (now - cachedDate < maxAge) {
        return cached;
      }
    }
    
    // Если кеш пуст или устарел, делаем сетевой запрос
    const response = await fetch(request);
    
    if (response.ok) {
      const responseClone = response.clone();
      const headers = new Headers(responseClone.headers);
      headers.set('sw-cached-date', new Date().toISOString());
      
      const modifiedResponse = new Response(await responseClone.blob(), {
        status: responseClone.status,
        statusText: responseClone.statusText,
        headers: headers
      });
      
      cache.put(request, modifiedResponse);
    }
    
    return response;
  } catch (error) {
    // Если сеть недоступна, возвращаем кешированную версию
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    return cached || new Response('Ресурс недоступен', { status: 404 });
  }
}

// Network First - сначала сеть, потом кеш
async function networkFirstStrategy(request, cacheName) {
  try {
    const response = await fetch(request);
    
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    return cached || new Response('Страница недоступна', { 
      status: 404,
      headers: { 'Content-Type': 'text/html' }
    });
  }
}

// Stale While Revalidate - возврат кеша + обновление в фоне
async function staleWhileRevalidateStrategy(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  
  const fetchPromise = fetch(request).then((response) => {
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(() => cached);
  
  return cached || fetchPromise;
}

// Предварительное кеширование критических ресурсов
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CACHE_URLS') {
    const urlsToCache = event.data.payload;
    event.waitUntil(
      caches.open(IMAGE_CACHE).then((cache) => {
        return cache.addAll(urlsToCache);
      })
    );
  }
});