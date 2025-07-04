import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { componentTagger } from 'lovable-tagger'
import Sitemap from 'vite-plugin-sitemap'
import { VitePluginRadar } from 'vite-plugin-radar'

export default defineConfig(({ command, mode }) => {
  const isDev = command === 'serve'

  // All routes for SSG generation (for sitemap)
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

  const plugins = [
    react(),
    isDev ? componentTagger() : null,
    Sitemap({
      hostname: 'https://bernofco.com',
      dynamicRoutes: routes,
      changefreq: {
        '/': 'daily',
        '/blog': 'weekly',
        '/startup-development': 'weekly',
        '/global-services': 'weekly',
        '/vibe-coding': 'weekly',
        '/cookie-policy': 'monthly',
        '/privacy-policy': 'monthly',
        '/terms-of-service': 'monthly',
        '/global-services/ch': 'weekly',
        '/global-services/uk': 'weekly',
        '/global-services/us': 'weekly',
        '/global-services/it': 'weekly',
        '/ch/web-development': 'weekly',
        '/ch/software-development': 'weekly',
        '/ch/startup-development': 'weekly',
        '/uk/web-development': 'weekly',
        '/uk/software-development': 'weekly',
        '/uk/startup-development': 'weekly',
        '/us/web-development': 'weekly',
        '/us/software-development': 'weekly',
        '/us/startup-development': 'weekly',
        '/it/web-development': 'weekly',
        '/it/software-development': 'weekly',
        '/it/startup-development': 'weekly',
      },
      priority: {
        '/': 1.0,
        '/startup-development': 0.9,
        '/global-services': 0.9,
        '/vibe-coding': 0.9,
        '/blog': 0.8,
        '/global-services/ch': 0.8,
        '/global-services/uk': 0.8,
        '/global-services/us': 0.8,
        '/global-services/it': 0.8,
        '/ch/web-development': 0.8,
        '/ch/software-development': 0.8,
        '/ch/startup-development': 0.8,
        '/uk/web-development': 0.8,
        '/uk/software-development': 0.8,
        '/uk/startup-development': 0.8,
        '/us/web-development': 0.8,
        '/us/software-development': 0.8,
        '/us/startup-development': 0.8,
        '/it/web-development': 0.8,
        '/it/software-development': 0.8,
        '/it/startup-development': 0.8,
        '/cookie-policy': 0.3,
        '/privacy-policy': 0.3,
        '/terms-of-service': 0.3,
      },
    }),
    process.env.VITE_GA_TRACKING_ID ? VitePluginRadar({
      analytics: { id: process.env.VITE_GA_TRACKING_ID },
    }) : null,
  ].filter(Boolean)

  return {
    server: {
      port: 8080
    },
    plugins,
    resolve: {
      alias: { '@': __dirname + '/src' },
    },
    build: {
      target: 'esnext',
      outDir: 'dist',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: !isDev,
          drop_debugger: !isDev,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'router': ['react-router-dom'],
            'ui': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-toast'],
            'utils': ['clsx', 'tailwind-merge', 'class-variance-authority'],
            'analytics': ['@amplitude/analytics-browser'],
            'seo': ['react-helmet-async']
          },
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name?.split('.') || []
            const ext = info[info.length - 1]
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
              return `assets/images/[name]-[hash][extname]`
            }
            return `assets/[name]-[hash][extname]`
          }
        }
      },
      chunkSizeWarningLimit: 1000,
    },
    appType: 'mpa',
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
    },
  }
})

