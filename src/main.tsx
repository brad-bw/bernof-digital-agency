import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'

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
