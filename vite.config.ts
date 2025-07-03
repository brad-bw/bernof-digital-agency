import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { componentTagger } from 'lovable-tagger'
import { ssgPlugin } from '@wroud/vite-plugin-ssg'
import { VitePluginRadar } from 'vite-plugin-radar'

export default defineConfig(({ command }) => {
  const isDev = command === 'serve'

  return {
    appType: 'mpa',

    plugins: [
      react(),
      isDev && componentTagger(),
      ssgPlugin({
        renderTimeout: 30000,
        routes: [
          '/', '/blog', '/startup-development', '/vibe-coding',
          '/global-services', /* … */, '/cookie-policy'
        ]
      }),
      VitePluginRadar({
        analytics: { id: process.env.VITE_GA_TRACKING_ID || 'G-BYCC3QQSTC' }
      })
    ].filter(Boolean),

    resolve: {
      alias: { '@': path.resolve(__dirname, './src') }
    },

    build: {
      target: 'esnext',             // support top-level await
      outDir: 'dist',
      rollupOptions: {
        input: {
          // server entry for SSG + client entry for build
          index: path.resolve(__dirname, 'src/main.tsx') + '?ssg-entry'
        }
        // manualChunks removed
      }
    },

    ssr: {
      noExternal: ['react-helmet-async']
    }
  }
})
