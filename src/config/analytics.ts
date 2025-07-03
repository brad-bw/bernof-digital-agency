
export const analyticsConfig = {
  GA_TRACKING_ID: import.meta.env.VITE_GA_TRACKING_ID || 'G-BYCC3QQSTC',
  AMPLITUDE_API_KEY: import.meta.env.VITE_AMPLITUDE_API_KEY || '63ef5ba84b1fe4949bdfcfbdc0b1ebb8',
  HOTJAR_ID: import.meta.env.VITE_HOTJAR_ID,
  FACEBOOK_PIXEL_ID: import.meta.env.VITE_FACEBOOK_PIXEL_ID,
} as const;

// Analytics tracking utilities
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }

  // Amplitude
  if (typeof window !== 'undefined' && window.amplitude) {
    window.amplitude.track(eventName, properties);
  }

  console.log(`Analytics Event: ${eventName}`, properties);
};

export const trackPageView = (url: string, title: string) => {
  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', analyticsConfig.GA_TRACKING_ID, {
      page_title: title,
      page_location: url
    });
  }

  // Amplitude
  if (typeof window !== 'undefined' && window.amplitude) {
    window.amplitude.track('Page View', { url, title });
  }
};
