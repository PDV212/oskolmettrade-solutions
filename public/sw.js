// KILL-SWITCH SERVICE WORKER
//
// Replaces the previous stateful app-shell SW. On activation it:
//   1) deletes ONLY caches this application previously created;
//   2) claims all clients;
//   3) posts OMT_LEGACY_SERVICE_WORKER_REMOVED to each controlled window
//      so the page can perform ONE guarded reload if it has the listener;
//   4) unregisters itself.
//
// No fetch handler is installed — the browser handles requests as if no
// SW existed, so no stale response can be served before we unregister.
// We deliberately do NOT call client.navigate() from the SW: that can
// disrupt a visitor mid-read or mid-form. The page-side listener owns the
// reload decision and guards it with sessionStorage.

const OWN_CACHE_PREFIXES = [
  "omt-",
  "oskol-met-trade-",
  "static-v",
  "dynamic-v",
  "images-v",
];

function isOwnCache(name) {
  return OWN_CACHE_PREFIXES.some((prefix) => name.startsWith(prefix));
}

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      try {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.filter(isOwnCache).map((name) => caches.delete(name)),
        );
        await self.clients.claim();
        const clients = await self.clients.matchAll({
          type: "window",
          includeUncontrolled: true,
        });
        for (const client of clients) {
          try {
            client.postMessage({ type: "OMT_LEGACY_SERVICE_WORKER_REMOVED" });
          } catch {
            /* ignore */
          }
        }
      } finally {
        try {
          await self.registration.unregister();
        } catch {
          /* noop */
        }
      }
    })(),
  );
});
