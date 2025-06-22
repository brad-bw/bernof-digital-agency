
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

// Country-specific pages - Switzerland
const SwitzerlandWebDevelopment = lazy(() => import("./pages/countries/SwitzerlandWebDevelopment"));
const SwitzerlandSoftwareDevelopment = lazy(() => import("./pages/countries/SwitzerlandSoftwareDevelopment"));
const SwitzerlandStartupDevelopment = lazy(() => import("./pages/countries/SwitzerlandStartupDevelopment"));

// Country-specific pages - UK
const UKWebDevelopment = lazy(() => import("./pages/countries/UKWebDevelopment"));
const UKSoftwareDevelopment = lazy(() => import("./pages/countries/UKSoftwareDevelopment"));
const UKStartupDevelopment = lazy(() => import("./pages/countries/UKStartupDevelopment"));

// Country-specific pages - USA
const USAWebDevelopment = lazy(() => import("./pages/countries/USAWebDevelopment"));
const USASoftwareDevelopment = lazy(() => import("./pages/countries/USASoftwareDevelopment"));
const USAStartupDevelopment = lazy(() => import("./pages/countries/USAStartupDevelopment"));

// Country-specific pages - Italy
const ItalyWebDevelopment = lazy(() => import("./pages/countries/ItalyWebDevelopment"));
const ItalySoftwareDevelopment = lazy(() => import("./pages/countries/ItalySoftwareDevelopment"));
const ItalyStartupDevelopment = lazy(() => import("./pages/countries/ItalyStartupDevelopment"));

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
            <Suspense fallback={<Loading type="page" />}>
              <Routes>
                {/* Main pages */}
                <Route path="/" element={<Index />} />
                <Route path="/startup-development" element={<StartupDevelopment />} />
                
                {/* Switzerland */}
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
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                
                {/* Catch-all route must be last */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
