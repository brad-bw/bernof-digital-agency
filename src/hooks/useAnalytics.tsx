
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

    // Enhanced ecommerce tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: `conv_${Date.now()}`,
        value: value || 0,
        currency: 'GBP',
        items: [{
          item_id: conversionType,
          item_name: conversionType,
          category: 'service_inquiry',
          quantity: 1,
          price: value || 0
        }]
      });
    }
  }, [trackEvent]);

  const trackFormSubmission = useCallback((formName: string, formData?: Record<string, any>) => {
    trackEvent('form_submit', {
      form_name: formName,
      ...formData
    });
    trackConversion('form_submission', 100); // Assign £100 value to form submissions
  }, [trackEvent, trackConversion]);

  const trackCTAClick = useCallback((ctaName: string, location: string) => {
    trackEvent('cta_click', {
      cta_name: ctaName,
      cta_location: location,
      page_path: window.location.pathname
    });
  }, [trackEvent]);

  const trackScrollDepth = useCallback((depth: number) => {
    trackEvent('scroll_depth', {
      scroll_depth: depth,
      page_path: window.location.pathname
    });
  }, [trackEvent]);

  const trackServiceInquiry = useCallback((serviceName: string, packageType?: string) => {
    trackEvent('service_inquiry', {
      service_name: serviceName,
      package_type: packageType,
      page_path: window.location.pathname
    });
    trackConversion('service_inquiry', 500); // Assign £500 value to service inquiries
  }, [trackEvent, trackConversion]);

  const trackPhoneClick = useCallback(() => {
    trackEvent('phone_click', {
      contact_method: 'phone',
      page_path: window.location.pathname
    });
    trackConversion('phone_contact', 200);
  }, [trackEvent, trackConversion]);

  const trackEmailClick = useCallback(() => {
    trackEvent('email_click', {
      contact_method: 'email',
      page_path: window.location.pathname
    });
    trackConversion('email_contact', 150);
  }, [trackEvent, trackConversion]);

  return {
    trackEvent,
    trackConversion,
    trackFormSubmission,
    trackCTAClick,
    trackScrollDepth,
    trackServiceInquiry,
    trackPhoneClick,
    trackEmailClick
  };
};

// Extend window interface for amplitude
declare global {
  interface Window {
    amplitude: any;
  }
}
