
import { createContext, useContext, useEffect, ReactNode } from 'react';
import { analyticsConfig, trackPageView } from '@/config/analytics';
import { useLocation } from 'react-router-dom';

const AnalyticsContext = createContext(analyticsConfig);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  const location = useLocation();

  useEffect(() => {
    // Initialize analytics on mount
    if (analyticsConfig.GA_TRACKING_ID && typeof window !== 'undefined') {
      // Google Analytics is already initialized in index.html
      trackPageView(window.location.href, document.title);
    }
    
    // Initialize Amplitude
    if (analyticsConfig.AMPLITUDE_API_KEY && typeof window !== 'undefined') {
      import('@amplitude/analytics-browser').then(({ init, track }) => {
        init(analyticsConfig.AMPLITUDE_API_KEY!);
        track('Page View', { url: window.location.href });
      }).catch(console.error);
    }

    // Initialize Hotjar
    if (analyticsConfig.HOTJAR_ID && typeof window !== 'undefined' && window.hj) {
      window.hj('trigger', 'page_view');
    }
  }, []);

  // Track route changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      trackPageView(window.location.href, document.title);
    }
  }, [location]);

  return (
    <AnalyticsContext.Provider value={analyticsConfig}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => useContext(AnalyticsContext);
