
interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

const routes: SitemapUrl[] = [
  {
    loc: 'https://bernofco.com',
    changefreq: 'daily',
    priority: 1.0,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: 'https://bernofco.com/blog',
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: 'https://bernofco.com/startup-development',
    changefreq: 'monthly',
    priority: 0.9,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: 'https://bernofco.com/vibe-coding',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: 'https://bernofco.com/global-services',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString().split('T')[0]
  },
  // Country-specific pages
  {
    loc: 'https://bernofco.com/ch/web-development',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: 'https://bernofco.com/ch/software-development',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: 'https://bernofco.com/ch/startup-development',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: 'https://bernofco.com/uk/web-development',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: 'https://bernofco.com/uk/software-development',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: 'https://bernofco.com/uk/startup-development',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: 'https://bernofco.com/us/web-development',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: 'https://bernofco.com/us/software-development',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: 'https://bernofco.com/us/startup-development',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: 'https://bernofco.com/it/web-development',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: 'https://bernofco.com/it/software-development',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: 'https://bernofco.com/it/startup-development',
    changefreq: 'monthly',
    priority: 0.8
  }
];

export const generateSitemap = (): string => {
  const urlElements = routes.map(route => {
    const urlElement = [
      '  <url>',
      `    <loc>${route.loc}</loc>`,
      route.lastmod ? `    <lastmod>${route.lastmod}</lastmod>` : '',
      route.changefreq ? `    <changefreq>${route.changefreq}</changefreq>` : '',
      route.priority ? `    <priority>${route.priority}</priority>` : '',
      '  </url>'
    ].filter(Boolean).join('\n');
    
    return urlElement;
  }).join('\n');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
};

export const downloadSitemap = () => {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
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
  } else {
    console.log('downloadSitemap can only be called in browser environment');
    return;
  }
};

// Make downloadSitemap available globally for console use (browser only)
if (typeof window !== 'undefined') {
  (window as any).downloadSitemap = downloadSitemap;
}
