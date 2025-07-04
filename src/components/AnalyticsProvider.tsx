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
    // Defer analytics initialization to reduce blocking
    const initAnalytics = () => {
      // Google Analytics - already loaded in index.html, just track
      if (analyticsConfig.GA_TRACKING_ID && typeof window !== 'undefined') {
        trackPageView(window.location.href, document.title);
      }
      
      // Amplitude - load asynchronously
      if (analyticsConfig.AMPLITUDE_API_KEY && typeof window !== 'undefined') {
        import('@amplitude/analytics-browser').then(({ init, track }) => {
          init(analyticsConfig.AMPLITUDE_API_KEY!);
          track('Page View', { url: window.location.href });
        }).catch(console.error);
      }

      // Hotjar - load asynchronously
      if (analyticsConfig.HOTJAR_ID && typeof window !== 'undefined') {
        // Load Hotjar script dynamically
        const script = document.createElement('script');
        script.src = `https://static.hotjar.com/c/hotjar-${analyticsConfig.HOTJAR_ID}.js?sv=6`;
        script.async = true;
        document.head.appendChild(script);
      }
    };

    // Defer analytics initialization
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initAnalytics);
    } else {
      setTimeout(initAnalytics, 1000); // Defer by 1 second
    }
  }, []);

  // Track route changes with debouncing
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const timeoutId = setTimeout(() => {
        trackPageView(window.location.href, document.title);
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [location]);

  return (
    <AnalyticsContext.Provider value={analyticsConfig}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => useContext(AnalyticsContext);
