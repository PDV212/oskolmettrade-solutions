import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * Centralized route-scroll policy (Model B — application-managed POP).
 *
 * - history.scrollRestoration = "manual" (previous value restored on unmount).
 * - Positions are saved per location.key in sessionStorage before each
 *   navigation and on pagehide.
 * - PUSH/REPLACE without hash → scroll to top.
 * - Hash navigation → scroll target into view (bounded rAF retries; respects
 *   scroll-margin-top on the target).
 * - POP → restore the saved position for the destination location.key, or
 *   fall back to top when none exists.
 *
 * SSR-safe: all browser access is inside effects.
 */

const STORAGE_PREFIX = 'omt:scroll:';

const readSaved = (key: string): number | null => {
  try {
    const raw = sessionStorage.getItem(STORAGE_PREFIX + key);
    if (raw == null) return null;
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
};

const writeSaved = (key: string, y: number) => {
  try {
    sessionStorage.setItem(STORAGE_PREFIX + key, String(y));
  } catch {
    /* quota / disabled — ignore */
  }
};

const RouteScrollManager = () => {
  const location = useLocation();
  const navType = useNavigationType(); // 'PUSH' | 'REPLACE' | 'POP'
  const prevKeyRef = useRef<string | null>(null);
  const isFirstRef = useRef(true);
  const rafHandles = useRef<number[]>([]);

  const cancelPending = () => {
    for (const h of rafHandles.current) cancelAnimationFrame(h);
    rafHandles.current = [];
  };

  const schedule = (cb: FrameRequestCallback) => {
    const h = requestAnimationFrame((t) => {
      rafHandles.current = rafHandles.current.filter((x) => x !== h);
      cb(t);
    });
    rafHandles.current.push(h);
  };

  const scrollToHash = (hash: string) => {
    let id = '';
    try {
      id = decodeURIComponent(hash.replace(/^#/, ''));
    } catch {
      id = hash.replace(/^#/, '');
    }
    if (!id) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }
    let attempts = 0;
    const maxAttempts = 30;
    const tick = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'auto', block: 'start' });
        return;
      }
      if (attempts++ < maxAttempts) schedule(tick);
      else window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };
    schedule(tick);
  };

  // Take control of history scroll restoration; restore prior value on unmount.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    let prev: ScrollRestoration | undefined;
    if ('scrollRestoration' in window.history) {
      prev = window.history.scrollRestoration;
      window.history.scrollRestoration = 'manual';
    }
    const savePageHide = () => {
      if (prevKeyRef.current) writeSaved(prevKeyRef.current, window.scrollY);
    };
    window.addEventListener('pagehide', savePageHide);
    return () => {
      window.removeEventListener('pagehide', savePageHide);
      if (prev && 'scrollRestoration' in window.history) {
        window.history.scrollRestoration = prev;
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Persist the outgoing entry's scroll position before applying the new one.
    if (prevKeyRef.current && prevKeyRef.current !== location.key) {
      writeSaved(prevKeyRef.current, window.scrollY);
    }

    // First mount: honor a direct-load hash but do not force scroll otherwise.
    if (isFirstRef.current) {
      isFirstRef.current = false;
      prevKeyRef.current = location.key;
      if (location.hash) {
        cancelPending();
        scrollToHash(location.hash);
      }
      return;
    }

    prevKeyRef.current = location.key;
    cancelPending();

    // Priority: hash > POP restore > top.
    if (location.hash) {
      scrollToHash(location.hash);
      return;
    }

    if (navType === 'POP') {
      const saved = readSaved(location.key);
      const y = saved ?? 0;
      // Restore after the new route has committed layout.
      schedule(() => {
        window.scrollTo({ top: y, left: 0, behavior: 'auto' });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.key, location.pathname, location.hash, navType]);

  useEffect(() => cancelPending, []);

  return null;
};

export default RouteScrollManager;
