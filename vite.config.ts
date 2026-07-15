import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { execSync } from "node:child_process";
import { componentTagger } from "lovable-tagger";

// Resolve a stable build id so the running client bundle can compare
// itself against /version.json (see src/lib/appVersion.ts). Prefers the
// CI commit SHA when available; falls back to a local `git rev-parse`;
// finally to a timestamp so dev builds are still unique enough.
function resolveBuildId() {
  const commit =
    process.env.GITHUB_SHA ||
    (() => {
      try {
        return execSync("git rev-parse HEAD", {
          stdio: ["ignore", "pipe", "ignore"],
        })
          .toString()
          .trim();
      } catch {
        return "";
      }
    })();
  const short = commit ? commit.slice(0, 7) : "local";
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  return `${short}-${stamp}`;
}
const BUILD_ID = resolveBuildId();

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => ({
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  define: {
    // Injected at build time; consumed by src/lib/appVersion.ts. In dev
    // this resolves to a literal "dev" so the update watcher no-ops.
    __APP_VERSION__: JSON.stringify(mode === "development" ? "dev" : BUILD_ID),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "::",
    port: 8080,
    ...(mode === 'development' && {
      headers: {
        'Cache-Control': 'public, max-age=86400',
        'Expires': new Date(Date.now() + 86400000).toUTCString(),
      }
    })
  },
  build: {
    minify: 'terser',
    cssMinify: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: isSsrBuild
        ? {
            // SSR must emit image assets under the SAME path as the client
            // build so that SSR HTML `src` attributes match the actually
            // shipped file. Without this, SSR emits `/assets/name-hash.jpg`
            // while the client emits `/assets/images/name-hash.jpg`, and
            // the SSR reference 404s (soft-served as index.html).
            assetFileNames: (assetInfo) => {
              if (!assetInfo.name) return `assets/[name]-[hash][extname]`;
              const info = assetInfo.name.split('.');
              const ext = info[info.length - 1];
              if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
                return `assets/images/[name]-[hash][extname]`;
              }
              if (/css/i.test(ext)) {
                return `assets/css/[name]-[hash][extname]`;
              }
              return `assets/[name]-[hash][extname]`;
            },
          }
        : {
            manualChunks: {
              vendor: ['react', 'react-dom'],
              ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
            },
            assetFileNames: (assetInfo) => {
              if (!assetInfo.name) return `assets/[name]-[hash][extname]`;
              const info = assetInfo.name.split('.');
              const ext = info[info.length - 1];
              if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
                return `assets/images/[name]-[hash][extname]`;
              }
              if (/css/i.test(ext)) {
                return `assets/css/[name]-[hash][extname]`;
              }
              return `assets/[name]-[hash][extname]`;
            },
            chunkFileNames: 'assets/js/[name]-[hash].js',
            entryFileNames: 'assets/js/[name]-[hash].js',
          },
    },

  },
  // Оптимизация сборки
  assetsInclude: ['**/*.webp', '**/*.avif'],
}));
