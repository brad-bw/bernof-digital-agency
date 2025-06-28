
import { TRACKING_CONFIG } from '@/components/Tracky';

// Extend the Window interface to include amplitude
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    amplitude: {
      getInstance: () => {
        init: (apiKey: string) => void;
      };
      track: (eventName: string, properties?: Record<string, any>) => void;
      setUserId: (userId: string) => void;
      identify: (identify: any) => void;
      Identify: new () => {
        setOnce: (properties: Record<string, any>) => any;
      };
    };
    amplitudeReady?: boolean;
  }
}

// Helper function to wait for Amplitude to be ready
const waitForAmplitude = (callback: () => void, maxAttempts: number = 10) => {
  if (window.amplitude && window.amplitudeReady) {
    callback();
  } else if (maxAttempts > 0) {
    setTimeout(() => waitForAmplitude(callback, maxAttempts - 1), 100);
  } else {
    console.warn('⚠️ Amplitude not ready after waiting');
  }
};

// Centralized tracking utilities
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  console.log(`📊 Tracking event: ${eventName}`, properties);

  // Google Analytics
  if (TRACKING_CONFIG.googleAnalytics.enabled && typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: properties?.label || '',
      value: properties?.value || 0,
      ...properties
    });
    console.log('✅ GA event tracked');
  }

  // Amplitude
  if (TRACKING_CONFIG.amplitude.enabled && typeof window !== 'undefined') {
    waitForAmplitude(() => {
      if (window.amplitude) {
        window.amplitude.track(eventName, properties);
        console.log('✅ Amplitude event tracked');
      }
    });
  }
};

export const trackPageView = (pagePath: string, pageTitle?: string) => {
  console.log(`📄 Tracking page view: ${pagePath}`);

  // Google Analytics
  if (TRACKING_CONFIG.googleAnalytics.enabled && typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', TRACKING_CONFIG.googleAnalytics.measurementId, {
      page_path: pagePath,
      page_title: pageTitle || document.title,
    });
    console.log('✅ GA page view tracked');
  }

  // Amplitude
  if (TRACKING_CONFIG.amplitude.enabled && typeof window !== 'undefined') {
    waitForAmplitude(() => {
      if (window.amplitude) {
        window.amplitude.track('Page View', {
          page_path: pagePath,
          page_title: pageTitle || document.title
        });
        console.log('✅ Amplitude page view tracked');
      }
    });
  }
};

export const identifyUser = (userId: string, userProperties?: Record<string, any>) => {
  console.log(`👤 Identifying user: ${userId}`, userProperties);

  // Google Analytics
  if (TRACKING_CONFIG.googleAnalytics.enabled && typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', TRACKING_CONFIG.googleAnalytics.measurementId, {
      user_id: userId
    });
    console.log('✅ GA user identified');
  }

  // Amplitude
  if (TRACKING_CONFIG.amplitude.enabled && typeof window !== 'undefined') {
    waitForAmplitude(() => {
      if (window.amplitude) {
        window.amplitude.setUserId(userId);
        if (userProperties) {
          window.amplitude.identify(new window.amplitude.Identify().setOnce(userProperties));
        }
        console.log('✅ Amplitude user identified');
      }
    });
  }
};
