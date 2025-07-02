
import { getAllCountries } from '@/config/countries';

interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export const generateSitemap = (): string => {
  const baseUrl = 'https://bernofco.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const pages: SitemapEntry[] = [
    // Main pages
    {
      loc: baseUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      loc: `${baseUrl}/startup-development`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/vibe-coding`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/global-services`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    // Country hub pages
    {
      loc: `${baseUrl}/global-services/ch`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.85
    },
    {
      loc: `${baseUrl}/global-services/uk`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.85
    },
    {
      loc: `${baseUrl}/global-services/us`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.85
    },
    {
      loc: `${baseUrl}/global-services/it`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.85
    },
    // Legal pages
    {
      loc: `${baseUrl}/privacy-policy`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.3
    },
    {
      loc: `${baseUrl}/terms-of-service`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.3
    },
    {
      loc: `${baseUrl}/cookie-policy`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.3
    }
  ];

  // Add country-specific service pages
  const countries = getAllCountries();
  const services = ['web-development', 'software-development', 'startup-development'];
  
  countries.forEach(country => {
    services.forEach(service => {
      pages.push({
        loc: `${baseUrl}/${country.code}/${service}`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8
      });
    });
  });

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(page => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xmlContent;
};

// Function to download sitemap (can be called from dev tools)
export const downloadSitemap = () => {
  const sitemap = generateSitemap();
  const blob = new Blob([sitemap], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Make it available globally for easy access
if (typeof window !== 'undefined') {
  (window as any).generateSitemap = generateSitemap;
  (window as any).downloadSitemap = downloadSitemap;
}
