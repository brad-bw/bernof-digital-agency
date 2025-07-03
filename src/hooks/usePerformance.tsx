
import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  isLoading: boolean;
  loadTime: number | null;
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    isLoading: true,
    loadTime: null
  });

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart;
          setMetrics({
            isLoading: false,
            loadTime: Math.round(loadTime)
          });

          // Track performance in analytics
          if (window.gtag) {
            window.gtag('event', 'page_load_time', {
              event_category: 'performance',
              value: Math.round(loadTime)
            });
          }
        }
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, []);

  return metrics;
};
