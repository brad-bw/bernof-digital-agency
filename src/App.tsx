
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, lazy } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Loading from "./components/Loading";
import { useRouteTracking } from "./hooks/useRouteTracking";
import { usePerformance } from "./hooks/usePerformance";
import { useScrollDepth } from "./hooks/useScrollDepth";
import { useSitemapGenerator } from "./hooks/useSitemapGenerator";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const StartupDevelopment = lazy(() => import("./pages/StartupDevelopment"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Global Services Hub Pages
const GlobalServices = lazy(() => import("./pages/GlobalServices"));
const SwitzerlandHub = lazy(() => import("./pages/countries/SwitzerlandHub"));
const UKHub = lazy(() => import("./pages/countries/UKHub"));

// Import country pages directly instead of lazy loading to fix routing issues
import SwitzerlandWebDevelopment from "./pages/countries/SwitzerlandWebDevelopment";
import SwitzerlandSoftwareDevelopment from "./pages/countries/SwitzerlandSoftwareDevelopment";
import SwitzerlandStartupDevelopment from "./pages/countries/SwitzerlandStartupDevelopment";
import UKWebDevelopment from "./pages/countries/UKWebDevelopment";
import UKSoftwareDevelopment from "./pages/countries/UKSoftwareDevelopment";
import UKStartupDevelopment from "./pages/countries/UKStartupDevelopment";
import USAWebDevelopment from "./pages/countries/USAWebDevelopment";
import USASoftwareDevelopment from "./pages/countries/USASoftwareDevelopment";
import USAStartupDevelopment from "./pages/countries/USAStartupDevelopment";
import ItalyWebDevelopment from "./pages/countries/ItalyWebDevelopment";
import ItalySoftwareDevelopment from "./pages/countries/ItalySoftwareDevelopment";
import ItalyStartupDevelopment from "./pages/countries/ItalyStartupDevelopment";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (renamed from cacheTime)
      retry: 1,
      refetchOnWindowFocus: false
    }
  }
});

const RouteTracker = () => {
  useRouteTracking();
  usePerformance();
  useScrollDepth();
  useSitemapGenerator();
  return null;
};

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <RouteTracker />
            <Routes>
              {/* Main pages */}
              <Route path="/" element={<Suspense fallback={<Loading type="page" />}><Index /></Suspense>} />
              <Route path="/startup-development" element={<Suspense fallback={<Loading type="page" />}><StartupDevelopment /></Suspense>} />
              
              {/* Global Services Hub Routes */}
              <Route path="/global-services" element={<Suspense fallback={<Loading type="page" />}><GlobalServices /></Suspense>} />
              <Route path="/global-services/ch" element={<Suspense fallback={<Loading type="page" />}><SwitzerlandHub /></Suspense>} />
              <Route path="/global-services/uk" element={<Suspense fallback={<Loading type="page" />}><UKHub /></Suspense>} />
              <Route path="/global-services/us" element={<Suspense fallback={<Loading type="page" />}><GlobalServices /></Suspense>} />
              <Route path="/global-services/it" element={<Suspense fallback={<Loading type="page" />}><GlobalServices /></Suspense>} />
              
              {/* Switzerland - direct imports, no lazy loading */}
              <Route path="/ch/web-development" element={<SwitzerlandWebDevelopment />} />
              <Route path="/ch/software-development" element={<SwitzerlandSoftwareDevelopment />} />
              <Route path="/ch/startup-development" element={<SwitzerlandStartupDevelopment />} />
              
              {/* United Kingdom */}
              <Route path="/uk/web-development" element={<UKWebDevelopment />} />
              <Route path="/uk/software-development" element={<UKSoftwareDevelopment />} />
              <Route path="/uk/startup-development" element={<UKStartupDevelopment />} />
              
              {/* United States */}
              <Route path="/us/web-development" element={<USAWebDevelopment />} />
              <Route path="/us/software-development" element={<USASoftwareDevelopment />} />
              <Route path="/us/startup-development" element={<USAStartupDevelopment />} />
              
              {/* Italy */}
              <Route path="/it/web-development" element={<ItalyWebDevelopment />} />
              <Route path="/it/software-development" element={<ItalySoftwareDevelopment />} />
              <Route path="/it/startup-development" element={<ItalyStartupDevelopment />} />
              
              {/* Legal pages */}
              <Route path="/privacy-policy" element={<Suspense fallback={<Loading type="page" />}><PrivacyPolicy /></Suspense>} />
              <Route path="/terms-of-service" element={<Suspense fallback={<Loading type="page" />}><TermsOfService /></Suspense>} />
              <Route path="/cookie-policy" element={<Suspense fallback={<Loading type="page" />}><CookiePolicy /></Suspense>} />
              
              {/* Catch-all route must be last */}
              <Route path="*" element={<Suspense fallback={<Loading type="page" />}><NotFound /></Suspense>} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
