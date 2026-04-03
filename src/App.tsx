import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import RoofLanding from "./pages/RoofLanding";
import TaktvattPage from "./pages/TaktvattPage";
import TakmalningPage from "./pages/TakmalningPage";
import FasadtvattPage from "./pages/FasadtvattPage";
import TakbehandlingPage from "./pages/TakbehandlingPage";
import OmOssPage from "./pages/OmOssPage";
import OmdomenPage from "./pages/OmdomenPage";
import KontaktPage from "./pages/KontaktPage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AuthGuard from "./components/roof/AuthGuard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/agency360-clone">
        <ScrollToTop />
        <Routes>
          {/* Public */}
          <Route path="/" element={<RoofLanding />} />
          <Route path="/taktvatt" element={<TaktvattPage />} />
          <Route path="/takmalning" element={<TakmalningPage />} />
          <Route path="/fasadtvatt" element={<FasadtvattPage />} />
          <Route path="/takbehandling" element={<TakbehandlingPage />} />
          <Route path="/om-oss" element={<OmOssPage />} />
          <Route path="/omdomen" element={<OmdomenPage />} />
          <Route path="/kontakt" element={<KontaktPage />} />

          {/* Admin */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AuthGuard><AdminDashboard /></AuthGuard>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
