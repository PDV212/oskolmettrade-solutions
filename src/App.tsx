import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { usePerformanceMonitor } from "@/hooks/usePerformanceMonitor";
import Index from "./pages/Index";
import English from "./pages/English";
import Chinese from "./pages/Chinese";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Кеширование запросов на 5 минут
      staleTime: 5 * 60 * 1000,
      // Данные считаются свежими 10 минут
      gcTime: 10 * 60 * 1000,
      // Повторные запросы при ошибках
      retry: 3,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
      // Рефетчинг при фокусе окна
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  // Инициализируем мониторинг производительности
  usePerformanceMonitor();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/en" element={<English />} />
            <Route path="/zh" element={<Chinese />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
