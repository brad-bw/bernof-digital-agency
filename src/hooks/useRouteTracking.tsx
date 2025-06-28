
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useRouteTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view in Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-BYCC3QQSTC', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }

    // Log route change for debugging
    console.log('Route changed to:', location.pathname);
  }, [location]);

  return location;
};

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
