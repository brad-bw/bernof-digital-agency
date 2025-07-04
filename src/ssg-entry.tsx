import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');

// Check if the app was server-side rendered
if (container.innerHTML.trim()) {
  // Hydrate the SSR content
  hydrateRoot(container, 
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
} else {
  // Client-side render for development
  const root = createRoot(container);
  root.render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
}
