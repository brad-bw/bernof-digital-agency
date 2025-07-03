/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://bernofco.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 1.0,
  exclude: ['/404'],
  additionalPaths: async (config) => {
    const paths = [];
    
    // Add all your dynamic routes
    const countries = ['ch', 'uk', 'us', 'it'];
    const services = ['web-development', 'software-development', 'startup-development'];
    
    // Country hub pages
    countries.forEach(country => {
      paths.push({
        loc: `/global-services/${country}`,
        changefreq: 'weekly',
        priority: 0.85,
      });
    });
    
    // Country service pages
    countries.forEach(country => {
      services.forEach(service => {
        paths.push({
          loc: `/${country}/${service}`,
          changefreq: 'weekly',
          priority: 0.8,
        });
      });
    });

    return paths;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://bernofco.com/sitemap.xml',
    ],
  },
}