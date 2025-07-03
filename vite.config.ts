

import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { componentTagger } from 'lovable-tagger'
import Sitemap from 'vite-plugin-sitemap'
import { VitePluginRadar } from 'vite-plugin-radar'

export default defineConfig(({ command }) => {
  const isDev = command === 'serve'

  // SEO-critical pages for sitemap
  const routes = [
    '/',
    '/blog',
    '/global-services',
    '/startup-development',
    '/vibe-coding',
    '/cookie-policy',
    '/privacy-policy',
    '/terms-of-service',
  ]

  return {
    server: {
      port: 8080
    },

    plugins: [
      react(),
      isDev && componentTagger(),
      Sitemap({
        hostname: 'https://bernofco.com',
        dynamicRoutes: routes,
        changefreq: (url: string) =>
          url === '/' ? 'daily' :
          url === '/blog' ? 'weekly' : 'monthly',
        priority: (url: string) =>
          url === '/' ? 1.0 :
          url === '/startup-development' ? 0.9 : 0.8,
      }),
      process.env.VITE_GA_TRACKING_ID && VitePluginRadar({
        analytics: { id: process.env.VITE_GA_TRACKING_ID },
      }),
    ].filter(Boolean),

    resolve: {
      alias: { '@': path.resolve(__dirname, './src') },
    },

    build: {
      target: 'esnext',
      outDir: 'dist',
    },
  }
})

