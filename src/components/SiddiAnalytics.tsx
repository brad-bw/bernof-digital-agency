
import React from 'react';

export const SiddiAnalytics: React.FC = () => (
  <>
    {/* Google Analytics */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX" />
    <script dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXX');
      `
    }} />
  </>
);
