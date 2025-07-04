import React, { useEffect } from 'react';
import { analyticsConfig } from '../config/analytics';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    amplitude: any;
    hotjar: any;
    fbq: any;
    dataLayer: any[];
  }
}

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics
    const initGoogleAnalytics = () => {
      try {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.GA_TRACKING_ID}`;
        script.onerror = () => console.warn('Failed to load Google Analytics');
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        window.gtag = function() {
          window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', analyticsConfig.GA_TRACKING_ID, {
          send_page_view: false // We'll handle this manually
        });
      } catch (error) {
        console.warn('Google Analytics initialization failed:', error);
      }
    };

    // Initialize Amplitude with error handling
    const initAmplitude = () => {
      try {
        if (!analyticsConfig.AMPLITUDE_API_KEY) {
          console.warn('Amplitude API key not configured');
          return;
        }

        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://cdn.amplitude.com/libs/amplitude-8.21.0-min.gz.js';
        script.onerror = () => console.warn('Failed to load Amplitude');
        script.onload = () => {
          try {
            if (window.amplitude) {
              window.amplitude.init(analyticsConfig.AMPLITUDE_API_KEY, undefined, {
                includeReferrer: true,
                includeUtm: true,
                trackingSessionEvents: true,
                logLevel: 'WARN' // Reduce console noise
              });
            }
          } catch (error) {
            console.warn('Amplitude initialization failed:', error);
          }
        };
        document.head.appendChild(script);
      } catch (error) {
        console.warn('Amplitude setup failed:', error);
      }
    };

    // Initialize Hotjar
    const initHotjar = () => {
      try {
        if (!analyticsConfig.HOTJAR_ID) return;

        const script = document.createElement('script');
        script.async = true;
        script.innerHTML = `
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:${analyticsConfig.HOTJAR_ID},hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `;
        script.onerror = () => console.warn('Failed to load Hotjar');
        document.head.appendChild(script);
      } catch (error) {
        console.warn('Hotjar initialization failed:', error);
      }
    };

    // Initialize Facebook Pixel
    const initFacebookPixel = () => {
      try {
        if (!analyticsConfig.FACEBOOK_PIXEL_ID) return;

        const script = document.createElement('script');
        script.async = true;
        script.innerHTML = `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${analyticsConfig.FACEBOOK_PIXEL_ID}');
          fbq('track', 'PageView');
        `;
        script.onerror = () => console.warn('Failed to load Facebook Pixel');
        document.head.appendChild(script);
      } catch (error) {
        console.warn('Facebook Pixel initialization failed:', error);
      }
    };

    // Initialize all analytics with delays to prevent blocking
    setTimeout(initGoogleAnalytics, 100);
    setTimeout(initAmplitude, 200);
    setTimeout(initHotjar, 300);
    setTimeout(initFacebookPixel, 400);

  }, []);

  return <>{children}</>;
};
