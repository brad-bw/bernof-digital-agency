
import { useEffect } from 'react';

interface TrackyConfig {
  googleAnalytics: {
    enabled: boolean;
    measurementId: string;
  };
  amplitude: {
    enabled: boolean;
    apiKey: string;
  };
  // Add other tracking services here as needed
  hotjar?: {
    enabled: boolean;
    hjid: number;
  };
  mixpanel?: {
    enabled: boolean;
    token: string;
  };
}

const TRACKING_CONFIG: TrackyConfig = {
  googleAnalytics: {
    enabled: true,
    measurementId: 'G-BYCC3QQSTC'
  },
  amplitude: {
    enabled: true,
    apiKey: 'YOUR_AMPLITUDE_API_KEY' // Replace with your actual Amplitude API key
  },
  // Example of other services you might want to add
  // hotjar: {
  //   enabled: false,
  //   hjid: 12345
  // }
};

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

const Tracky = () => {
  useEffect(() => {
    // Initialize Google Analytics
    if (TRACKING_CONFIG.googleAnalytics.enabled) {
      // GA script is already in index.html, just configure it
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', TRACKING_CONFIG.googleAnalytics.measurementId, {
          page_title: document.title,
          page_location: window.location.href
        });
        console.log('✅ Google Analytics initialized');
      }
    }

    // Initialize Amplitude
    if (TRACKING_CONFIG.amplitude.enabled) {
      console.log('🔄 Loading Amplitude...');
      const script = document.createElement('script');
      script.src = 'https://cdn.amplitude.com/libs/amplitude-8.21.9-min.gz.js';
      script.async = true;
      script.onload = () => {
        console.log('📦 Amplitude script loaded');
        if (window.amplitude) {
          try {
            window.amplitude.getInstance().init(TRACKING_CONFIG.amplitude.apiKey);
            window.amplitudeReady = true;
            console.log('✅ Amplitude initialized with API key:', TRACKING_CONFIG.amplitude.apiKey);
            
            // Test tracking
            window.amplitude.track('Amplitude Initialized', {
              timestamp: new Date().toISOString(),
              page: window.location.pathname
            });
          } catch (error) {
            console.error('❌ Amplitude initialization failed:', error);
          }
        } else {
          console.error('❌ Amplitude object not found after script load');
        }
      };
      script.onerror = () => {
        console.error('❌ Failed to load Amplitude script');
      };
      document.head.appendChild(script);
    }

    // Initialize Hotjar (example)
    // if (TRACKING_CONFIG.hotjar?.enabled) {
    //   (function(h,o,t,j,a,r){
    //     h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    //     h._hjSettings={hjid:TRACKING_CONFIG.hotjar.hjid,hjsv:6};
    //     a=o.getElementsByTagName('head')[0];
    //     r=o.createElement('script');r.async=1;
    //     r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    //     a.appendChild(r);
    //   })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    //   console.log('✅ Hotjar initialized');
    // }

  }, []);

  // This component doesn't render anything, it just handles tracking initialization
  return null;
};

export default Tracky;
export { TRACKING_CONFIG };
