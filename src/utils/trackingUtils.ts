
import { TRACKING_CONFIG } from '@/components/Tracky';

// Centralized tracking utilities
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Google Analytics
  if (TRACKING_CONFIG.googleAnalytics.enabled && typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: properties?.label || '',
      value: properties?.value || 0,
      ...properties
    });
  }

  // Amplitude
  if (TRACKING_CONFIG.amplitude.enabled && typeof window !== 'undefined' && window.amplitude) {
    window.amplitude.track(eventName, properties);
  }

  console.log(`📊 Event tracked: ${eventName}`, properties);
};

export const trackPageView = (pagePath: string, pageTitle?: string) => {
  // Google Analytics
  if (TRACKING_CONFIG.googleAnalytics.enabled && typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', TRACKING_CONFIG.googleAnalytics.measurementId, {
      page_path: pagePath,
      page_title: pageTitle || document.title,
    });
  }

  // Amplitude
  if (TRACKING_CONFIG.amplitude.enabled && typeof window !== 'undefined' && window.amplitude) {
    window.amplitude.track('Page View', {
      page_path: pagePath,
      page_title: pageTitle || document.title
    });
  }

  console.log(`📄 Page view tracked: ${pagePath}`);
};

export const identifyUser = (userId: string, userProperties?: Record<string, any>) => {
  // Google Analytics
  if (TRACKING_CONFIG.googleAnalytics.enabled && typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', TRACKING_CONFIG.googleAnalytics.measurementId, {
      user_id: userId
    });
  }

  // Amplitude
  if (TRACKING_CONFIG.amplitude.enabled && typeof window !== 'undefined' && window.amplitude) {
    window.amplitude.setUserId(userId);
    if (userProperties) {
      window.amplitude.identify(new window.amplitude.Identify().setOnce(userProperties));
    }
  }

  console.log(`👤 User identified: ${userId}`, userProperties);
};
