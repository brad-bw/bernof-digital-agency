
import { useEffect } from 'react';
import { generateSitemap } from '@/utils/sitemapGenerator';

export const useSitemapGenerator = () => {
  useEffect(() => {
    // Auto-generate sitemap in development mode
    if (import.meta.env.DEV) {
      console.log('Sitemap generated:', generateSitemap());
      console.log('To download sitemap, run: downloadSitemap() in console');
    }
  }, []);

  return {
    generateSitemap,
    downloadSitemap: () => {
      if (typeof window !== 'undefined' && (window as any).downloadSitemap) {
        (window as any).downloadSitemap();
      }
    }
  };
};
