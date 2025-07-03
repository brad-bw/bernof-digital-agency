
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { VitePluginPrerender } from 'vite-plugin-prerender'
import { sitemap } from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    VitePluginPrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: [
        '/',
        '/blog',
        '/startup-development',
        '/global-services',
        '/privacy-policy',
        '/terms-of-service',
        '/cookie-policy',
        '/vibe-coding'
      ],
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        headless: true,
        renderAfterTime: 5000,
      },
    }),
    sitemap({
      hostname: 'https://bernofco.com',
      routes: [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        { url: '/startup-development', changefreq: 'weekly', priority: 0.9 },
        { url: '/blog', changefreq: 'daily', priority: 0.8 },
        { url: '/global-services', changefreq: 'weekly', priority: 0.9 },
        { url: '/vibe-coding', changefreq: 'weekly', priority: 0.8 },
        { url: '/privacy-policy', changefreq: 'monthly', priority: 0.3 },
        { url: '/terms-of-service', changefreq: 'monthly', priority: 0.3 },
        { url: '/cookie-policy', changefreq: 'monthly', priority: 0.3 }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8080,
  },
})
