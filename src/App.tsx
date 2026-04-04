import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import RoofLanding from "./pages/RoofLanding";
import NotFound from "./pages/NotFound";

// Lazy load all non-critical pages
const TaktvattPage = lazy(() => import("./pages/TaktvattPage"));
const TakmalningPage = lazy(() => import("./pages/TakmalningPage"));
const FasadtvattPage = lazy(() => import("./pages/FasadtvattPage"));
const TakbehandlingPage = lazy(() => import("./pages/TakbehandlingPage"));
const OmOssPage = lazy(() => import("./pages/OmOssPage"));
const OmdomenPage = lazy(() => import("./pages/OmdomenPage"));
const KontaktPage = lazy(() => import("./pages/KontaktPage"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const AuthGuard = lazy(() => import("./components/roof/AuthGuard"));

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#fafaf8]">
    <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/h2o-taktvatt">
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
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
            <Route path="/admin" element={
              <Suspense fallback={<PageLoader />}>
                <AuthGuard><AdminDashboard /></AuthGuard>
              </Suspense>
            } />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
