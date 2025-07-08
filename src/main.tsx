import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './index.css'

// Standard React entry point for Lovable compatibility
const container = document.getElementById('root')
if (container) {
  const root = ReactDOM.createRoot(container)
  root.render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  )
}

// Unregister any existing service worker (after removing sw.js)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      registrations.forEach(reg => reg.unregister());
    });
  });
}
