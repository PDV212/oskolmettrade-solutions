import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * Centralized route-scroll policy:
 * - PUSH/REPLACE without hash → scroll to top (auto).
 * - Navigation with hash → scroll target into view (respects scroll-margin-top).
 * - POP → let the browser restore its remembered position.
 *
 * SSR-safe: all browser access is inside effects.
 */
const RouteScrollManager = () => {
  const location = useLocation();
  const navType = useNavigationType(); // 'PUSH' | 'REPLACE' | 'POP'
  const lastKey = useRef<string | null>(null);

  // Disable the browser's automatic scroll restoration so we control PUSH,
  // while still allowing POP to restore via history state.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if ('scrollRestoration' in window.history) {
      const prev = window.history.scrollRestoration;
      window.history.scrollRestoration = 'manual';
      return () => {
        window.history.scrollRestoration = prev;
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Skip the very first render (initial load / hydration): let the browser
    // handle direct-load anchor jumps and preserve refresh position.
    if (lastKey.current === null) {
      lastKey.current = location.key;
      if (location.hash) {
        scrollToHash(location.hash);
      }
      return;
    }
    lastKey.current = location.key;

    if (navType === 'POP') {
      // Browser will restore position from history state; nothing to do.
      return;
    }

    if (location.hash) {
      scrollToHash(location.hash);
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.key, location.pathname, location.hash, navType]);

  return null;
};

function scrollToHash(hash: string) {
  const id = decodeURIComponent(hash.replace(/^#/, ''));
  if (!id) {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    return;
  }
  let attempts = 0;
  const maxAttempts = 30; // ~500ms at 60fps
  const tick = () => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'auto', block: 'start' });
      return;
    }
    if (attempts++ < maxAttempts) {
      requestAnimationFrame(tick);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  };
  requestAnimationFrame(tick);
}

export default RouteScrollManager;
