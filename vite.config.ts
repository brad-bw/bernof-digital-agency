import { ssgPlugin } from '@wroud/vite-plugin-ssg'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { ssgPlugin } from "@wroud/vite-plugin-ssg";
import { VitePluginRadar } from "vite-plugin-radar";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ssgPlugin({ renderTimeout: 30000 }),
    VitePluginRadar({...})
  ],
  appType: 'mpa' // Should be 'mpa', not 'spa'
})
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    ssgPlugin({
      renderTimeout: 30000, // 30 seconds for complex pages
      routes: [
        '/',
        '/blog',
        '/startup-development',
        '/vibe-coding',
        '/global-services',
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
        '/privacy-policy',
        '/terms-of-service',
        '/cookie-policy'
      ]
    }),
    VitePluginRadar({
      analytics: { 
        id: process.env.VITE_GA_TRACKING_ID || 'G-BYCC3QQSTC'
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          analytics: ['@amplitude/analytics-browser'],
          seo: ['react-helmet-async']
        }
      }
    }
  },
  appType: 'mpa',
  ssr: {
    noExternal: ['react-helmet-async'] // Fix SSG compatibility issues
  }
}));
