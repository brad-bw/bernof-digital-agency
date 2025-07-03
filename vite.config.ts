import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { componentTagger } from 'lovable-tagger'
import { ssgPlugin } from '@wroud/vite-plugin-ssg'
import Sitemap from 'vite-plugin-sitemap'
import { VitePluginRadar } from 'vite-plugin-radar'

export default defineConfig(({ command }) => {
  const isDev = command === 'serve'

  // Only your top-level, SEO-critical pages
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
    appType: 'mpa',

    plugins: [
      react(),
      isDev && componentTagger(),
      ssgPlugin({
        renderTimeout: 30000,
        routes,
      }),
      Sitemap({
        hostname: 'https://bernofco.com',
        dynamicRoutes: routes,
        changefreq: (url) =>
          url === '/' ? 'daily' :
          url === '/blog' ? 'weekly' : 'monthly',
        priority: (url) =>
          url === '/' ? 1.0 :
          url === '/startup-development' ? 0.9 : 0.8,
      }),
      VitePluginRadar({
        analytics: { id: process.env.VITE_GA_TRACKING_ID },
      }),
    ].filter(Boolean),

    resolve: {
      alias: { '@': path.resolve(__dirname, './src') },
    },

    build: {
      target: 'esnext',
      outDir: 'dist',
      rollupOptions: {
        // Generate one HTML entry per route
        input: Object.fromEntries(
          routes.map((r) => {
            const name = r === '/' ? 'index' : r.slice(1).replace(/\//g, '-')
            return [name, path.resolve(__dirname, 'src/main.tsx') + '?ssg-entry']
          })
        ),
      }
    },

    ssr: {
      noExternal: ['react-helmet-async'],
    },
  }
})
