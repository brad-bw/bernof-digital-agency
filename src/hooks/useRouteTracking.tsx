
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/utils/trackingUtils';

export const useRouteTracking = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return location;
};

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
