/// <reference types="vite/client" />

// Injected at build time by vite.config.ts `define`. Used by
// src/lib/appVersion.ts to detect a newer deployment at runtime.
declare const __APP_VERSION__: string;
