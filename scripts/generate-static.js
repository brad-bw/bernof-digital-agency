import fs from 'fs'
import path from 'path'

// All routes to generate static HTML for
const routes = [
  '/',
  '/blog',
  '/global-services',
  '/startup-development',
  '/vibe-coding',
  '/cookie-policy',
  '/privacy-policy',
  '/terms-of-service',
  '/global-services/ch',
  '/global-services/uk',
  '/global-services/us',
  '/global-services/it',
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
]

// Read the template HTML
const template = fs.readFileSync('dist/index.html', 'utf-8')

console.log('🚀 Generating static HTML for all routes...')

routes.forEach(route => {
  // Create the file path
  const routePath = route === '/' ? '/index.html' : `${route}/index.html`
  const filePath = path.resolve('dist', routePath.slice(1))
  
  // Ensure directory exists
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  
  // Copy the template HTML for each route
  // This creates static HTML files that will be served by Netlify
  // The client-side routing will handle the actual page content
  fs.writeFileSync(filePath, template)
  
  console.log(`✅ Generated: ${routePath}`)
})

// Copy static files from public/ to dist/ if they exist
const staticFiles = ['404.html', '_redirects', 'robots.txt', 'sitemap.xml'];
staticFiles.forEach(file => {
  const src = path.resolve('public', file);
  const dest = path.resolve('dist', file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✅ Copied ${file} to dist/`);
  }
});

console.log('🎉 Static generation complete!')
console.log('📝 Note: This creates static HTML files for Netlify routing.')
console.log('🔧 Your existing React app will handle client-side routing and SEO.') 