
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Next.js build process...');

try {
  // Run Next.js build
  execSync('next build', { stdio: 'inherit' });
  
  // Check if sitemap was generated
  const sitemapPath = path.join(process.cwd(), 'out', 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    console.log('✅ Sitemap generated successfully');
  }
  
  // Check if robots.txt was generated
  const robotsPath = path.join(process.cwd(), 'out', 'robots.txt');
  if (fs.existsSync(robotsPath)) {
    console.log('✅ Robots.txt generated successfully');
  }
  
  console.log('✅ Build completed successfully!');
  console.log('📊 Ready for deployment to Netlify');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
