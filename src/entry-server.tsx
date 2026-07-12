import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppShell, AppRoutes } from "./AppShell";

// Build-time static renderer. Called by scripts/prerender.mjs with an
// explicit route path. Must not touch window/document/navigator/localStorage
// or register the service worker. QueryClient is created per-call inside
// AppShell so caches never leak between routes.
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppShell>
        <AppRoutes />
      </AppShell>
    </StaticRouter>
  );
}

export default { render };
