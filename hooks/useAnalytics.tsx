
import { useCallback } from 'react';

export const useAnalytics = () => {
  const trackEvent = useCallback((eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'engagement',
        event_label: parameters?.label || '',
        value: parameters?.value || 0,
        ...parameters
      });
    }

    console.log(`Analytics Event: ${eventName}`, parameters);
  }, []);

  const trackConversion = useCallback((conversionType: string, value?: number) => {
    trackEvent('conversion', {
      conversion_type: conversionType,
      value: value || 0,
      currency: 'GBP'
    });
  }, [trackEvent]);

  const trackFormSubmission = useCallback((formName: string, formData?: Record<string, any>) => {
    trackEvent('form_submit', {
      form_name: formName,
      ...formData
    });
    trackConversion('form_submission', 100);
  }, [trackEvent, trackConversion]);

  const trackCTAClick = useCallback((ctaName: string, location: string) => {
    trackEvent('cta_click', {
      cta_name: ctaName,
      cta_location: location,
      page_path: window.location.pathname
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackConversion,
    trackFormSubmission,
    trackCTAClick
  };
};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
