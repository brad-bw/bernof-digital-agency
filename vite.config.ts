
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePluginRadar } from 'vite-plugin-radar';

const VITE_GA_TRACKING_ID = process.env.VITE_GA_TRACKING_ID;

// Sitemap generation plugin
const SitemapPlugin = () => {
  return {
    name: 'sitemap-generation',
    writeBundle() {
      // Generate sitemap during build
      import('./src/utils/sitemapGenerator.js').then(({ generateSitemap }) => {
        generateSitemap();
      });
    }
  };
};

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    componentTagger(),
    SitemapPlugin(),
    ...(VITE_GA_TRACKING_ID ? [VitePluginRadar({
      analytics: {
        id: VITE_GA_TRACKING_ID,
      },
    })] : [])
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext'
  }
}));
