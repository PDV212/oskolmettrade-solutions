// KILL-SWITCH SERVICE WORKER
//
// Previously this file was a stateful app-shell Service Worker (v2026-07-14…)
// that precached assets and used StaleWhileRevalidate / CacheFirst / etc.
// That worker caused returning visitors to be stuck on an obsolete build
// until they performed Ctrl+Shift+R, because:
//   - StaleWhileRevalidate on /assets/*.js|css served the previously cached
//     hashed bundles referenced by an outdated cached HTML shell;
//   - CacheFirst on images kept old media for 30 days;
//   - the SW itself is browser-held state and updates only after a full
//     lifecycle rotation that a normal reload does not always complete.
//
// This file is now a one-shot kill switch (per Lovable PWA skill guidance
// for "existing broken PWA" cleanup). It:
//   1. Deletes ONLY caches this application previously created (matched by
//      the exact prefixes the old SW used). Cache Storage is origin-scoped,
//      so a blanket wipe would evict unrelated third-party workers — we
//      never do that.
//   2. Claims all clients and force-navigates open tabs so they immediately
//      leave the SW-controlled context.
//   3. Unregisters itself in `finally`, guaranteeing the registration is
//      removed even if any earlier step throws.
//
// Registration from src/main.tsx has been removed, so no NEW visitor will
// install this worker. Existing installations receive this replacement at
// the same URL, run its activate handler once, and disappear.
//
// Keep this file at /sw.js for at least two release cycles so any returning
// browser still holding the old SW gets the eviction. It may be deleted
// later, but only after telemetry / a deliberate wait period.

const APP_CACHE_PREFIXES = [
  'oskol-met-trade-',
  'static-v',
  'dynamic-v',
  'images-v',
];

function isOwnCache(name) {
  return APP_CACHE_PREFIXES.some((p) => name.startsWith(p));
}

self.addEventListener('install', () => {
  // Take over immediately so `activate` runs on the next tick rather than
  // waiting for all tabs to close.
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      try {
        const cacheNames = await caches.keys();
        await Promise.allSettled(
          cacheNames.filter(isOwnCache).map((name) => caches.delete(name)),
        );
        await self.clients.claim();
        const windowClients = await self.clients.matchAll({ type: 'window' });
        await Promise.allSettled(
          windowClients.map((client) => client.navigate(client.url).catch(() => {})),
        );
      } finally {
        // Always unregister — even if cache eviction / navigation fails,
        // the registration must not survive past this activation.
        try { await self.registration.unregister(); } catch { /* noop */ }
      }
    })(),
  );
});

// Do NOT install a fetch handler. With no fetch handler this worker is
// "passthrough" — the browser handles requests as if no SW existed, so it
// cannot serve any stale response before it manages to unregister.
