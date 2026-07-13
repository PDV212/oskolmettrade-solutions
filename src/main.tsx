import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Browser-only bootstrap. Anything that touches window / document /
// navigator / localStorage / service worker MUST live inside runBrowserOnly()
// so it cannot be executed by the build-time static renderer.
function runBrowserOnly() {
  if (typeof window === "undefined") return;

  // Lazy import so the static renderer's module graph never pulls
  // CacheManager (which touches window/navigator at method time).
  void import("./utils/cacheManager.ts").then(({ default: CacheManager }) => {
    const cacheManager = CacheManager.getInstance();
    cacheManager.init();
    // Note: hero and section images live in src/assets/ and are imported
    // by components — Vite emits hashed filenames. Preloading unhashed
    // paths here produced 404s in production, so those manual preloads
    // were removed. Components perform their own image loading.
  });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    });
  }
}

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element #root not found");

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If the prerender pipeline wrote real React markup into #root, hydrate
// over it. Otherwise (empty dev shell) do a fresh createRoot render.
if (rootEl.firstElementChild) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}

runBrowserOnly();
