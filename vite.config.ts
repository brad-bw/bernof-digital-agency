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
        '/blog',
        '/global-services',
        '/global-services/ch',
        '/global-services/uk', 
        '/global-services/us',
        '/global-services/it',
        '/startup-development',
        '/vibe-coding',
        '/privacy-policy',
        '/terms-of-service',
        '/cookie-policy',
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
        '/it/startup-development'
      ],
      generateRobotsTxt: false  // Keep this false since robots.txt already works
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
