export const analyticsConfig = {
  GA_TRACKING_ID: import.meta.env.VITE_GA_TRACKING_ID || 'G-BYCC3QQSTC',
  AMPLITUDE_API_KEY: import.meta.env.VITE_AMPLITUDE_API_KEY || '63ef5ba84b1fe4949bdfcfbdc0b1ebb8',
  HOTJAR_ID: import.meta.env.VITE_HOTJAR_ID,
  FACEBOOK_PIXEL_ID: import.meta.env.VITE_FACEBOOK_PIXEL_ID,
} as const;

// Analytics tracking utilities with error handling
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  try {
    // Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, properties);
    }

    // Amplitude - only track if properly initialized
    if (typeof window !== 'undefined' && window.amplitude && window.amplitude.track) {
      window.amplitude.track(eventName, properties);
    }

    console.log(`Analytics Event: ${eventName}`, properties);
  } catch (error) {
    console.warn('Analytics tracking failed:', error);
  }
};

export const trackPageView = (url: string, title: string) => {
  try {
    // Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', analyticsConfig.GA_TRACKING_ID, {
        page_title: title,
        page_location: url
      });
    }

    // Amplitude - only track if properly initialized
    if (typeof window !== 'undefined' && window.amplitude && window.amplitude.track) {
      window.amplitude.track('Page View', { url, title });
    }
  } catch (error) {
    console.warn('Page view tracking failed:', error);
  }
};
