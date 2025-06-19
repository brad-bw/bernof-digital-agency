
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

    // Also track in Amplitude if available
    if (typeof window !== 'undefined' && window.amplitude) {
      window.amplitude.track(eventName, parameters);
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

  const trackFormSubmission = useCallback((formName: string) => {
    trackEvent('form_submit', {
      form_name: formName
    });
    trackConversion('form_submission');
  }, [trackEvent, trackConversion]);

  const trackCTAClick = useCallback((ctaName: string, location: string) => {
    trackEvent('cta_click', {
      cta_name: ctaName,
      cta_location: location
    });
  }, [trackEvent]);

  const trackScrollDepth = useCallback((depth: number) => {
    trackEvent('scroll_depth', {
      scroll_depth: depth
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackConversion,
    trackFormSubmission,
    trackCTAClick,
    trackScrollDepth
  };
};

// Extend window interface for amplitude
declare global {
  interface Window {
    amplitude: any;
  }
}
