import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppShell, AppRoutes } from "./AppShell";

// Browser-side application. The build-time static entry
// (src/entry-server.tsx) reuses AppShell + AppRoutes with StaticRouter so
// the same route tree is rendered in both environments.
function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <AppRoutes />
      </AppShell>
    </BrowserRouter>
  );

}

export default App;
