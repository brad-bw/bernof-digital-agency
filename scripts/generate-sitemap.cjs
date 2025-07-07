console.log("=== SITEMAP SCRIPT RAN AT: " + new Date().toISOString());
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const BASE_URL = 'https://bernofco.com';
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');

// Pre-build: Delete old sitemap if it exists
if (fs.existsSync(sitemapPath)) {
  fs.unlinkSync(sitemapPath);
  console.log('🗑️  Deleted old sitemap.xml before generating new one.');
}

// 1. Use the real public routes from App.tsx
const staticRoutes = [
  '/',
  '/blog',
  '/global-services',
  '/global-services/ch',
  '/global-services/uk',
  '/global-services/us',
  '/global-services/it',
  '/startup-development',
  '/vibe-coding',
  '/privacy-policy',
  '/terms-of-service',
  '/cookie-policy',
  '/ch/web-development',
  '/ch/software-development',
  '/ch/startup-development',
  '/uk/web-development',
  '/uk/software-development',
  '/uk/startup-development',
  '/us/web-development',
  '/us/software-development',
  '/us/startup-development',
  '/it/web-development',
  '/it/software-development',
  '/it/startup-development',
];

const staticUrls = staticRoutes.map(route => ({
  loc: BASE_URL + route,
  changefreq: 'monthly',
  priority: 0.8
}));

// 2. Fetch blog posts from Sanity
async function fetchBlogPosts() {
  const query = '*[_type == "blogPost" && defined(slug.current) && !(_id in path("drafts.**"))]{slug, publishedAt}';
  const encodedQuery = encodeURIComponent(query);
  const url = `https://kvyko3sv.api.sanity.io/v2023-10-01/data/query/production?query=${encodedQuery}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Sanity fetch failed: ${res.status}`);
    const data = await res.json();
    return data.result || [];
  } catch (err) {
    console.error('Error fetching blog posts from Sanity:', err);
    return [];
  }
}

// 3. Generate sitemap XML
function generateSitemap(urls) {
  const urlElements = urls.map(route => {
    const lastmod = route.lastmod || route.publishedAt || new Date().toISOString().split('T')[0];
    return [
      '  <url>',
      `    <loc>${route.loc}</loc>`,
      lastmod ? `    <lastmod>${lastmod.split('T')[0]}</lastmod>` : '',
      route.changefreq ? `    <changefreq>${route.changefreq}</changefreq>` : '',
      route.priority ? `    <priority>${route.priority}</priority>` : '',
      '  </url>'
    ].filter(Boolean).join('\n');
  }).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlElements}\n</urlset>\n`;
}

// 4. Main runner
(async () => {
  console.log('🔄 Fetching blog posts from Sanity...');
  const blogPosts = await fetchBlogPosts();
  console.log(`✅ Fetched ${blogPosts.length} blog posts from Sanity.`);
  const blogUrls = blogPosts.map(post => ({
    loc: `${BASE_URL}/blog/${post.slug.current}`,
    lastmod: post.publishedAt ? post.publishedAt.split('T')[0] : undefined,
    changefreq: 'weekly',
    priority: 0.7
  }));
  const allUrls = [...staticUrls, ...blogUrls];
  const sitemap = generateSitemap(allUrls);
  fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
  console.log(`🎉 Sitemap generated with ${allUrls.length} URLs → public/sitemap.xml`);
  allUrls.forEach(u => console.log('  -', u.loc));

  // Post-generation validation: ensure sitemap.xml exists
  if (fs.existsSync(sitemapPath)) {
    console.log('✅ sitemap.xml exists after generation.');
  } else {
    console.error('❌ ERROR: sitemap.xml was not generated! This is critical for SEO.');
    process.exit(1);
  }
})(); 