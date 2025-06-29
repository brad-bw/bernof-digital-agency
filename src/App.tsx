
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from "@/components/ThemeProvider";
import ErrorBoundary from "@/components/ErrorBoundary";
import Loading from "@/components/Loading";

const Index = lazy(() => import("./pages/Index"));
const GlobalServices = lazy(() => import("./pages/GlobalServices"));
const StartupDevelopment = lazy(() => import("./pages/StartupDevelopment"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const SwitzerlandHub = lazy(() => import("./pages/countries/SwitzerlandHub"));
const UKHub = lazy(() => import("./pages/countries/UKHub"));
const USHub = lazy(() => import("./pages/countries/USHub"));
const ItalyHub = lazy(() => import("./pages/countries/ItalyHub"));
const SwitzerlandWebDevelopment = lazy(() => import("./pages/countries/SwitzerlandWebDevelopment"));
const SwitzerlandSoftwareDevelopment = lazy(() => import("./pages/countries/SwitzerlandSoftwareDevelopment"));
const SwitzerlandStartupDevelopment = lazy(() => import("./pages/countries/SwitzerlandStartupDevelopment"));
const UKWebDevelopment = lazy(() => import("./pages/countries/UKWebDevelopment"));
const UKSoftwareDevelopment = lazy(() => import("./pages/countries/UKSoftwareDevelopment"));
const UKStartupDevelopment = lazy(() => import("./pages/countries/UKStartupDevelopment"));
const USAWebDevelopment = lazy(() => import("./pages/countries/USAWebDevelopment"));
const USASoftwareDevelopment = lazy(() => import("./pages/countries/USASoftwareDevelopment"));
const USAStartupDevelopment = lazy(() => import("./pages/countries/USAStartupDevelopment"));
const ItalyWebDevelopment = lazy(() => import("./pages/countries/ItalyWebDevelopment"));
const ItalySoftwareDevelopment = lazy(() => import("./pages/countries/ItalySoftwareDevelopment"));
const ItalyStartupDevelopment = lazy(() => import("./pages/countries/ItalyStartupDevelopment"));

const queryClient = new QueryClient();

const App = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider defaultTheme="light" storageKey="bernof-ui-theme">
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Suspense fallback={<Loading />}>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/global-services" element={<GlobalServices />} />
                    <Route path="/global-services/ch" element={<SwitzerlandHub />} />
                    <Route path="/global-services/uk" element={<UKHub />} />
                    <Route path="/global-services/us" element={<USHub />} />
                    <Route path="/global-services/it" element={<ItalyHub />} />
                    <Route path="/startup-development" element={<StartupDevelopment />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/cookie-policy" element={<CookiePolicy />} />
                    
                    <Route path="/ch/web-development" element={<SwitzerlandWebDevelopment />} />
                    <Route path="/ch/software-development" element={<SwitzerlandSoftwareDevelopment />} />
                    <Route path="/ch/startup-development" element={<SwitzerlandStartupDevelopment />} />
                    
                    <Route path="/uk/web-development" element={<UKWebDevelopment />} />
                    <Route path="/uk/software-development" element={<UKSoftwareDevelopment />} />
                    <Route path="/uk/startup-development" element={<UKStartupDevelopment />} />
                    
                    <Route path="/us/web-development" element={<USAWebDevelopment />} />
                    <Route path="/us/software-development" element={<USASoftwareDevelopment />} />
                    <Route path="/us/startup-development" element={<USAStartupDevelopment />} />
                    
                    <Route path="/it/web-development" element={<ItalyWebDevelopment />} />
                    <Route path="/it/software-development" element={<ItalySoftwareDevelopment />} />
                    <Route path="/it/startup-development" element={<ItalyStartupDevelopment />} />
                    
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </BrowserRouter>
            </TooltipProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
