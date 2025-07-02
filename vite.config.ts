import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import Sitemap from 'vite-plugin-sitemap'

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
    // Only add componentTagger in development mode
    mode === 'development' && componentTagger(),
    // Only generate sitemap in production builds
    mode === 'production' && Sitemap({
      hostname: 'https://bernofco.com',
      dynamicRoutes: [
        '/',
        '/web-development',
        '/software-development', 
        '/startup-development',
        '/global-services',
        '/privacy-policy',
        '/terms-of-service',
        '/blog'
      ],
      exclude: ['/admin'],
      generateRobotsTxt: true,
      robots: [
        {
          userAgent: '*',
          allow: '/',
          sitemap: 'https://bernofco.com/sitemap.xml'
        }
      ]
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));