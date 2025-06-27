
import { useCallback } from 'react';
import { trackEvent, identifyUser } from '@/utils/trackingUtils';

export const useAnalytics = () => {
  const trackConversion = useCallback((conversionType: string, value?: number) => {
    trackEvent('conversion', {
      conversion_type: conversionType,
      value: value || 0,
      currency: 'GBP'
    });

    // Enhanced ecommerce tracking for GA
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
  }, []);

  const trackFormSubmission = useCallback((formName: string, formData?: Record<string, any>) => {
    trackEvent('form_submit', {
      form_name: formName,
      ...formData
    });
    trackConversion('form_submission', 100);
  }, [trackConversion]);

  const trackCTAClick = useCallback((ctaName: string, location: string) => {
    trackEvent('cta_click', {
      cta_name: ctaName,
      cta_location: location,
      page_path: window.location.pathname
    });
  }, []);

  const trackScrollDepth = useCallback((depth: number) => {
    trackEvent('scroll_depth', {
      scroll_depth: depth,
      page_path: window.location.pathname
    });
  }, []);

  const trackServiceInquiry = useCallback((serviceName: string, packageType?: string) => {
    trackEvent('service_inquiry', {
      service_name: serviceName,
      package_type: packageType,
      page_path: window.location.pathname
    });
    trackConversion('service_inquiry', 500);
  }, [trackConversion]);

  const trackPhoneClick = useCallback(() => {
    trackEvent('phone_click', {
      contact_method: 'phone',
      page_path: window.location.pathname
    });
    trackConversion('phone_contact', 200);
  }, [trackConversion]);

  const trackEmailClick = useCallback(() => {
    trackEvent('email_click', {
      contact_method: 'email',
      page_path: window.location.pathname
    });
    trackConversion('email_contact', 150);
  }, [trackConversion]);

  return {
    trackEvent,
    trackConversion,
    trackFormSubmission,
    trackCTAClick,
    trackScrollDepth,
    trackServiceInquiry,
    trackPhoneClick,
    trackEmailClick,
    identifyUser
  };
};
