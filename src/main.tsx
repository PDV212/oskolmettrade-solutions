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

    const criticalImages = [
      "/assets/hero-industrial.jpg",
      "/lovable-uploads/b3c22956-096b-4475-8619-90ea784e020b.png",
      "/lovable-uploads/adb38e62-ebf5-4d0f-92a9-272c1f38c8f4.png",
    ];
    const lazyImages = [
      "/assets/equipment-manufacturing.jpg",
      "/assets/metallurgy-furnace.jpg",
      "/assets/raw-materials.jpg",
    ];

    cacheManager.preloadImages(criticalImages).catch(() => {});
    window.setTimeout(() => {
      cacheManager.preloadImages(lazyImages).catch(() => {});
    }, 2000);
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
