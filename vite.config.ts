
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { ssgPlugin } from "@wroud/vite-plugin-ssg";
import { VitePluginRadar } from "vite-plugin-radar";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    watch: {
      // Reduce the number of files being watched
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/dist/**',
        '**/build/**',
        '**/.next/**',
        '**/coverage/**',
        '**/.nyc_output/**',
        '**/tmp/**',
        '**/temp/**'
      ],
      // Use polling instead of native file system events
      usePolling: true,
      // Reduce polling interval
      interval: 1000
    }
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    ssgPlugin({
      renderTimeout: 30000, // 30 seconds for complex pages
    }),
    VitePluginRadar({
      analytics: { 
        id: process.env.VITE_GA_TRACKING_ID || 'G-BYCC3QQSTC'
      },
      amplitude: { 
        apiKey: process.env.VITE_AMPLITUDE_API_KEY || '63ef5ba84b1fe4949bdfcfbdc0b1ebb8'
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
  appType: 'spa',
  ssr: {
    noExternal: ['react-helmet-async'] // Fix SSG compatibility issues
  }
}));
