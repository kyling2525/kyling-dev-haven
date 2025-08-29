import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";   // <— KHÔNG import BrowserRouter
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        {/* Route khác thêm ở trên */}
        <Route path="*" element={<Navigate to="/" replace />} />
        {/* hoặc dùng <NotFound /> nếu bạn muốn */}
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
