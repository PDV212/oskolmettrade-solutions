import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initAppVersionWatcher, primeChunkErrorRecovery } from "./lib/appVersion";

// Browser-only bootstrap. Anything that touches window / document /
// navigator / localStorage / service worker MUST live inside runBrowserOnly()
// so it cannot be executed by the build-time static renderer.
function runBrowserOnly() {
  if (typeof window === "undefined") return;

  void import("./utils/cacheManager.ts").then(({ default: CacheManager }) => {
    const cacheManager = CacheManager.getInstance();
    cacheManager.init();
  });

  // One-shot cleanup for returning visitors that still have the legacy
  // app-shell Service Worker registered. The current /sw.js is a kill
  // switch that unregisters itself, but a returning browser must first
  // fetch that replacement — we also proactively unregister any SW
  // scoped to this origin here so no NEW page load can be intercepted
  // by a stale worker. Kept for at least two release cycles.
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .getRegistrations()
      .then((registrations) => {
        for (const registration of registrations) {
          try {
            const scopeUrl = new URL(registration.scope);
            if (scopeUrl.origin === window.location.origin) {
              registration.unregister().catch(() => {});
            }
          } catch {
            /* ignore malformed scope */
          }
        }
      })
      .catch(() => {});

    // Page-side guarded reload triggered by the kill-switch SW after it
    // has evicted its own caches. Exactly one automatic reload per tab,
    // keyed in sessionStorage so a stuck message can never cause a loop.
    const LEGACY_SW_RELOAD_KEY = "omt:legacy-sw-cleanup-reload";
    navigator.serviceWorker.addEventListener("message", (event) => {
      if (event?.data?.type !== "OMT_LEGACY_SERVICE_WORKER_REMOVED") return;
      try {
        if (sessionStorage.getItem(LEGACY_SW_RELOAD_KEY) === "1") return;
        sessionStorage.setItem(LEGACY_SW_RELOAD_KEY, "1");
      } catch {
        /* if storage is unavailable, do NOT reload — safer than a loop */
        return;
      }
      // Small delay so any in-flight UI settles.
      setTimeout(() => window.location.reload(), 100);
    });
  }

  // Wire up automatic deployment-version detection (fetches /version.json,
  // shows an update toast, safe first-load recovery, ChunkLoadError guard).
  primeChunkErrorRecovery();
  initAppVersionWatcher();
}

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element #root not found");

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (rootEl.firstElementChild) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}

runBrowserOnly();
