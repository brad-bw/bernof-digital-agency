import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { componentTagger } from 'lovable-tagger'
import Sitemap from 'vite-plugin-sitemap'
import { VitePluginRadar } from 'vite-plugin-radar'
import { resolve } from 'path'

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
    componentTagger(),
    Sitemap({
      hostname: 'https://bernofco.com',
      dynamicRoutes: routes,
      generateRobotsTxt: false,
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
    VitePluginRadar({
      analytics: {
        id: 'G-BYCC3QQSTC'
      }
    })
  ]

  return {
    base: '/',
    server: {
      port: 3000
    },
    plugins,
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'es2015',
      outDir: 'dist',
      minify: 'terser',
      sourcemap: true,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
            ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-select'],
            utils: ['clsx', 'tailwind-merge', 'lucide-react'],
          },
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',
        },
      },
      chunkSizeWarningLimit: 1000,
    },
    appType: 'mpa',
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
    },
  }
})

