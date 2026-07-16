// Automatic deployment update detection.
//
// The build injects the current build id as `__APP_VERSION__` (see
// vite.config.ts). At runtime we periodically fetch /version.json (which is
// regenerated on every deploy and served with `Cache-Control: no-store`)
// and compare. On mismatch we surface a localized toast with an "update
// now" action that performs a single guarded reload.
//
// Guardrails:
//   - version.json is fetched with `cache: "no-store"` and a cache-busting
//     query string, so no intermediate cache can hide a new build;
//   - one silent auto-reload is allowed per never-seen target version, keyed
//     in sessionStorage — prevents infinite loops if the mismatch persists;
//   - ChunkLoadError / dynamic-import failures trigger the same guarded
//     reload path (once), then fall back to showing the toast.

import { toast } from "sonner";

declare const __APP_VERSION__: string;

const CURRENT_VERSION: string =
  typeof __APP_VERSION__ !== "undefined" ? __APP_VERSION__ : "dev";

const VERSION_ENDPOINT = "/version.json";
const POLL_INTERVAL_MS = 10 * 60 * 1000; // 10 minutes
const RELOAD_KEY = "omt:last-auto-reloaded-version";
const CHUNK_RELOAD_KEY = "omt:chunk-reload-version";

type Lang = "ru" | "en" | "zh";

function detectLang(): Lang {
  if (typeof window === "undefined") return "ru";
  const path = window.location.pathname;
  if (path === "/en" || path.startsWith("/en/")) return "en";
  if (path === "/zh" || path.startsWith("/zh/")) return "zh";
  return "ru";
}

const COPY: Record<Lang, { message: string; action: string }> = {
  ru: {
    message: "Доступна обновлённая версия сайта.",
    action: "Обновить сейчас",
  },
  en: {
    message: "An updated version of the website is available.",
    action: "Update now",
  },
  zh: {
    message: "网站已有新版本。",
    action: "立即更新",
  },
};

let updateToastShown = false;
let latestKnownServerVersion: string | null = null;

async function fetchServerVersion(): Promise<string | null> {
  try {
    const bust = Date.now().toString(36);
    const res = await fetch(`${VERSION_ENDPOINT}?_=${bust}`, {
      cache: "no-store",
      headers: { "Cache-Control": "no-cache", Pragma: "no-cache" },
      credentials: "omit",
    });
    if (!res.ok) return null;
    const contentType = (res.headers.get("content-type") || "").toLowerCase();
    if (!contentType.includes("application/json")) return null;
    const data = (await res.json()) as {
      version?: string;
      buildId?: string;
      commit?: string;
    } | null;
    if (!data) return null;
    const version =
      (typeof data.version === "string" && data.version) ||
      (typeof data.buildId === "string" && data.buildId) ||
      (typeof data.commit === "string" && data.commit) ||
      "";
    if (typeof version !== "string" || version.trim() === "") return null;
    return version;
  } catch {
    return null;
  }
}

async function reloadForNewVersion(target: string, silent: boolean) {
  try {
    // Best-effort: unregister any of our own SWs (kill-switch cleanup).
    if ("serviceWorker" in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.allSettled(
        regs
          .filter((r) => {
            try {
              return new URL(r.scope).origin === window.location.origin;
            } catch {
              return false;
            }
          })
          .map((r) => r.unregister()),
      );
    }
    // Delete only our own CacheStorage buckets.
    if ("caches" in window) {
      const names = await caches.keys();
      await Promise.allSettled(
        names
          .filter((n) =>
            /^(oskol-met-trade-|static-v|dynamic-v|images-v)/.test(n),
          )
          .map((n) => caches.delete(n)),
      );
    }
  } catch {
    /* ignore */
  }
  try {
    sessionStorage.setItem(RELOAD_KEY, target);
  } catch {
    /* ignore */
  }
  if (!silent) {
    // Tiny defer so the toast dismisses cleanly.
    setTimeout(() => window.location.reload(), 50);
  } else {
    window.location.reload();
  }
}

function showUpdateToast(target: string) {
  if (updateToastShown) return;
  updateToastShown = true;
  const copy = COPY[detectLang()];
  toast(copy.message, {
    duration: Infinity,
    action: {
      label: copy.action,
      onClick: () => {
        void reloadForNewVersion(target, false);
      },
    },
  });
}

async function checkForUpdate() {
  const server = await fetchServerVersion();
  if (!server) return;
  latestKnownServerVersion = server;
  if (server === CURRENT_VERSION) return;

  // Safe first-load recovery: if this is the very first check after boot
  // and we haven't already auto-reloaded for this target, allow ONE silent
  // reload. Otherwise show the toast.
  let alreadyReloaded = false;
  try {
    alreadyReloaded = sessionStorage.getItem(RELOAD_KEY) === server;
  } catch {
    /* ignore */
  }
  if (!alreadyReloaded && !updateToastShown && !document.hidden) {
    // Only auto-reload on the very first mismatch we ever see, and only if
    // no user interaction is in progress (best-effort heuristic below).
    const isFirstDetection = latestKnownServerVersion === server;
    const noActiveForm = !document.activeElement ||
      !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName || "");
    if (isFirstDetection && noActiveForm && CURRENT_VERSION !== "dev") {
      await reloadForNewVersion(server, true);
      return;
    }
  }
  showUpdateToast(server);
}

export function initAppVersionWatcher() {
  if (typeof window === "undefined") return;
  // Do nothing in local dev — CURRENT_VERSION is "dev" and there is no
  // meaningful server version to compare against.
  if (CURRENT_VERSION === "dev") return;

  // Clear a stale reload marker once we've successfully booted on a
  // version different from the one we last auto-reloaded to. This lets a
  // later mismatch on the SAME target trigger the toast (not another
  // silent reload).
  // (No cleanup of RELOAD_KEY here — it self-invalidates because we only
  // silent-reload when RELOAD_KEY !== server.)

  const kick = () => {
    void checkForUpdate();
  };

  // Initial check shortly after interactive (do not block hydration).
  if (document.readyState === "complete") {
    setTimeout(kick, 1500);
  } else {
    window.addEventListener("load", () => setTimeout(kick, 1500), { once: true });
  }

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) kick();
  });
  window.addEventListener("focus", kick);
  window.addEventListener("online", kick);
  setInterval(kick, POLL_INTERVAL_MS);
}

// ChunkLoadError / dynamic-import failure recovery. Stale HTML that
// references removed hashed bundles surfaces as these errors. We attempt
// one guarded reload (keyed separately from the normal update flow so the
// two can't compound into a loop).
export function primeChunkErrorRecovery() {
  if (typeof window === "undefined") return;
  if (CURRENT_VERSION === "dev") return;

  const isChunkError = (msg: string): boolean =>
    /ChunkLoadError|Loading chunk [\w-]+ failed|Failed to fetch dynamically imported module|Importing a module script failed|error loading dynamically imported module|CSS chunk/i.test(
      msg,
    );

  const tryRecover = async (reason: string) => {
    const server = await fetchServerVersion();
    if (!server || server === CURRENT_VERSION) return;
    let already = false;
    try {
      already = sessionStorage.getItem(CHUNK_RELOAD_KEY) === server;
    } catch { /* ignore */ }
    if (already) {
      showUpdateToast(server);
      return;
    }
    try { sessionStorage.setItem(CHUNK_RELOAD_KEY, server); } catch { /* ignore */ }
    // eslint-disable-next-line no-console
    console.warn(`[appVersion] chunk failure (${reason}); reloading to ${server}`);
    await reloadForNewVersion(server, true);
  };

  window.addEventListener("error", (event) => {
    const msg = event?.message || String(event?.error || "");
    if (isChunkError(msg)) void tryRecover("error");
  });
  window.addEventListener("unhandledrejection", (event) => {
    const reason: any = event?.reason;
    const msg = typeof reason === "string" ? reason : reason?.message || "";
    if (isChunkError(msg)) void tryRecover("unhandledrejection");
  });
}
