import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: 3,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <PerformanceOptimizer />
        <BrowserRouter>
          <SkipLink />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/en" element={<English />} />
            <Route path="/zh" element={<Chinese />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cnc-machines" element={<CncMachines />} />
            <Route path="/about" element={<About />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/company" element={<Company lang="ru" />} />
            <Route path="/ru/company" element={<Company lang="ru" />} />
            <Route path="/en/company" element={<Company lang="en" />} />
            <Route path="/zh/company" element={<Company lang="zh" />} />
            <Route path="/personal-data-consent" element={<LegalPlaceholder lang="ru" topic="consent" />} />
            <Route path="/cookies" element={<LegalPlaceholder lang="ru" topic="cookies" />} />
            <Route path="/en/privacy" element={<LegalPlaceholder lang="en" topic="privacy" />} />
            <Route path="/en/personal-data-consent" element={<LegalPlaceholder lang="en" topic="consent" />} />
            <Route path="/en/cookies" element={<LegalPlaceholder lang="en" topic="cookies" />} />
            <Route path="/zh/privacy" element={<LegalPlaceholder lang="zh" topic="privacy" />} />
            <Route path="/zh/personal-data-consent" element={<LegalPlaceholder lang="zh" topic="consent" />} />
            <Route path="/zh/cookies" element={<LegalPlaceholder lang="zh" topic="cookies" />} />
            <Route path="/en/faq" element={<Faq lang="en" />} />
            <Route path="/ru/faq" element={<Faq lang="ru" />} />
            <Route path="/zh/faq" element={<Faq lang="zh" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;