import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import SkipLink from "@/components/SkipLink";
import Index from "./pages/Index";
import English from "./pages/English";
import Chinese from "./pages/Chinese";
import LegalPage from "./pages/LegalPage";
import CncMachines from "./pages/CncMachines";
import About from "./pages/About";
import Cases from "./pages/Cases";
import Company from "./pages/Company";
import NotFound from "./pages/NotFound";
import LegalPlaceholder from "./pages/LegalPlaceholder";
import Faq from "./pages/Faq";

// Shared route table used by both browser (BrowserRouter) and build-time
// static (StaticRouter) entries. No Router wrapper here — the entry chooses.
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/en" element={<English />} />
      <Route path="/zh" element={<Chinese />} />
      <Route path="/privacy" element={<LegalPage lang="ru" topic="privacy" />} />
      <Route path="/en/privacy" element={<LegalPage lang="en" topic="privacy" />} />
      <Route path="/zh/privacy" element={<LegalPage lang="zh" topic="privacy" />} />
      <Route path="/cookies" element={<LegalPage lang="ru" topic="cookies" />} />
      <Route path="/en/cookies" element={<LegalPage lang="en" topic="cookies" />} />
      <Route path="/zh/cookies" element={<LegalPage lang="zh" topic="cookies" />} />
      <Route path="/cnc-machines" element={<CncMachines lang="ru" />} />
      <Route path="/en/cnc-machines" element={<CncMachines lang="en" />} />
      <Route path="/zh/cnc-machines" element={<CncMachines lang="zh" />} />
      <Route path="/about" element={<About lang="ru" />} />
      <Route path="/en/about" element={<About lang="en" />} />
      <Route path="/zh/about" element={<About lang="zh" />} />
      <Route path="/cases" element={<Cases lang="ru" />} />
      <Route path="/en/cases" element={<Cases lang="en" />} />
      <Route path="/zh/cases" element={<Cases lang="zh" />} />
      <Route path="/company" element={<Company lang="ru" />} />
      <Route path="/ru/company" element={<Navigate to="/company" replace />} />
      <Route path="/en/company" element={<Company lang="en" />} />
      <Route path="/zh/company" element={<Company lang="zh" />} />
      <Route
        path="/personal-data-consent"
        element={<LegalPlaceholder lang="ru" topic="consent" />}
      />
      <Route
        path="/en/personal-data-consent"
        element={<LegalPlaceholder lang="en" topic="consent" />}
      />
      <Route
        path="/zh/personal-data-consent"
        element={<LegalPlaceholder lang="zh" topic="consent" />}
      />
      <Route path="/en/faq" element={<Faq lang="en" />} />
      <Route path="/ru/faq" element={<Faq lang="ru" />} />
      <Route path="/zh/faq" element={<Faq lang="zh" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

// SSR-safe providers wrapper. QueryClient is instantiated per-render on the
// server to avoid sharing cache across requests / render passes.
export function AppShell({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000,
            gcTime: 10 * 60 * 1000,
            retry: 3,
            retryDelay: (i) => Math.min(1000 * 2 ** i, 30000),
            refetchOnWindowFocus: false,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <PerformanceOptimizer />
        <SkipLink />
        {children}
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
