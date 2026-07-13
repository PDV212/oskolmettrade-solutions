// Application Service Worker for the OSKOL-MET-TRADE informational site.
//
// Three application caches are actually used at runtime:
//   - STATIC_CACHE  -> precache list + Stale-While-Revalidate for hashed
//                      built assets (/assets/*, CSS/JS) and Cache-First for
//                      same-origin fonts.
//   - DYNAMIC_CACHE -> Network-First for same-origin HTML documents.
//   - IMAGE_CACHE   -> Cache-First for same-origin images.
//
// No fourth "brand" cache is opened. All application caches share the
// controlled prefixes below so activation only evicts our own caches and
// never touches unrelated third-party workers on the same origin.

const CACHE_VERSION = 'v2026-07-14-hero-cache1';
const STATIC_CACHE = 'static-' + CACHE_VERSION;
const DYNAMIC_CACHE = 'dynamic-' + CACHE_VERSION;
const IMAGE_CACHE = 'images-' + CACHE_VERSION;

const CURRENT_CACHES = [STATIC_CACHE, DYNAMIC_CACHE, IMAGE_CACHE];

// Prefixes owned by this application. Activation deletes any cache that
// begins with one of these prefixes and is not in CURRENT_CACHES. The
// legacy 'oskol-met-trade-' prefix is retained here so pre-remediation
// clients on ssr / ssr2 are cleaned up.
const APP_CACHE_PREFIXES = [
  'oskol-met-trade-',
  'static-v',
  'dynamic-v',
  'images-v',
];

// Precache only truly static, language-neutral assets that are guaranteed
// to exist in the final dist/ output. Every entry must be same-origin,
// absolute, and present in the shipped build.
const STATIC_ASSETS = [
  '/manifest.json',
  '/lovable-uploads/b3c22956-096b-4475-8619-90ea784e020b.png',
  '/lovable-uploads/adb38e62-ebf5-4d0f-92a9-272c1f38c8f4.png',
];

const IMAGE_EXTENSIONS = /\.(jpg|jpeg|png|gif|webp|svg|ico|avif)$/i;
const FONT_EXTENSIONS = /\.(woff|woff2|ttf|eot)$/i;
const CSS_JS_EXTENSIONS = /\.(css|js)$/i;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS)),
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names.map((name) => {
          const isApp = APP_CACHE_PREFIXES.some((p) => name.startsWith(p));
          if (isApp && !CURRENT_CACHES.includes(name)) {
            return caches.delete(name);
          }
          return undefined;
        }),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Only apply application caches to same-origin requests. Cross-origin
  // requests fall through to the browser's normal network handling.
  if (url.origin !== self.location.origin) return;

  if (IMAGE_EXTENSIONS.test(url.pathname) || url.pathname.includes('/lovable-uploads/')) {
    event.respondWith(cacheFirstStrategy(request, IMAGE_CACHE, 30 * 24 * 60 * 60 * 1000));
  } else if (FONT_EXTENSIONS.test(url.pathname)) {
    event.respondWith(cacheFirstStrategy(request, STATIC_CACHE, 365 * 24 * 60 * 60 * 1000));
  } else if (CSS_JS_EXTENSIONS.test(url.pathname) || url.pathname.includes('/assets/')) {
    event.respondWith(staleWhileRevalidateStrategy(request, STATIC_CACHE));
  } else {
    event.respondWith(networkFirstStrategy(request, DYNAMIC_CACHE));
  }
});

async function cacheFirstStrategy(request, cacheName, maxAge = 7 * 24 * 60 * 60 * 1000) {
  try {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    if (cached) {
      const cachedType = cached.headers.get('content-type') || '';
      const looksLikeImage = cachedType.startsWith('image/') || cachedType.startsWith('font/') || cachedType.includes('font');
      // Reject poisoned entries (HTML fallback stored under an image URL).
      if (!looksLikeImage && (cacheName.startsWith('images-') || IMAGE_EXTENSIONS.test(new URL(request.url).pathname))) {
        await cache.delete(request);
      } else {
        const cachedDate = new Date(cached.headers.get('sw-cached-date') || 0);
        if (Date.now() - cachedDate.getTime() < maxAge) return cached;
      }
    }
    const response = await fetch(request);
    if (response.ok) {
      const respType = response.headers.get('content-type') || '';
      const isImageReq = cacheName.startsWith('images-') || IMAGE_EXTENSIONS.test(new URL(request.url).pathname);
      // Never cache non-image responses under an image URL (SPA fallback poisoning).
      if (isImageReq && !respType.startsWith('image/')) {
        return response;
      }
      const clone = response.clone();
      const headers = new Headers(clone.headers);
      headers.set('sw-cached-date', new Date().toISOString());
      const modified = new Response(await clone.blob(), {
        status: clone.status,
        statusText: clone.statusText,
        headers,
      });
      cache.put(request, modified);
    }
    return response;
  } catch (error) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    return cached || new Response('Resource unavailable', { status: 504 });
  }
}

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
    return cached || new Response('Offline', {
      status: 504,
      headers: { 'Content-Type': 'text/html' },
    });
  }
}

async function staleWhileRevalidateStrategy(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const fetchPromise = fetch(request)
    .then((response) => {
      if (response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(() => cached);
  return cached || fetchPromise;
}
