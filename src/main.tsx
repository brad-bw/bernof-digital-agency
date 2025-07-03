import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Export your app component as the default export for SSG
export default App

// Client‐only bootstrap (won’t be used in SSR/SSG)
if (import.meta.env.SSR === false) {
  const root = ReactDOM.createRoot(document.getElementById('root')!)
  root.render(<App />)
}
