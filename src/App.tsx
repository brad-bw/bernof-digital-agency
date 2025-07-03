
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Toaster } from '@/components/ui/sonner'
import ErrorBoundary from '@/components/ErrorBoundary'
import { SiddiAnalytics } from '@/components/SiddiAnalytics'

// Import main page
import HomePage from '@/components/HomePage'

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold">Page Not Found</h1>
                    <p>The page you're looking for doesn't exist.</p>
                  </div>
                </div>
              } />
            </Routes>
          </Router>
          <Toaster />
          <SiddiAnalytics />
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  )
}

export default App
