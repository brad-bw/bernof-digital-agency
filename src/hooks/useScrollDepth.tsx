
import { useEffect, useRef } from 'react';
import { useAnalytics } from './useAnalytics';

export const useScrollDepth = () => {
  const { trackScrollDepth } = useAnalytics();
  const thresholds = useRef(new Set([25, 50, 75, 90, 100]));
  const trackedThresholds = useRef(new Set<number>());

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      thresholds.current.forEach(threshold => {
        if (scrollPercent >= threshold && !trackedThresholds.current.has(threshold)) {
          trackedThresholds.current.add(threshold);
          trackScrollDepth(threshold);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackScrollDepth]);
};
