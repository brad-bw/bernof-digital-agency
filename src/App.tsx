
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Toaster } from '@/components/ui/sonner'
import ErrorBoundary from '@/components/ErrorBoundary'

// Import pages
import HomePage from '@/pages/HomePage'
import CountryServicePage from '@/pages/CountryServicePage'
import GlobalServicesPage from '@/pages/GlobalServicesPage'
import CountryHubPage from '@/pages/CountryHubPage'
import BlogPage from '@/pages/BlogPage'
import BlogPostPage from '@/pages/BlogPostPage'
import StartupDevelopmentPage from '@/pages/StartupDevelopmentPage'
import VibeCodingPage from '@/pages/VibeCodingPage'
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage'
import TermsOfServicePage from '@/pages/TermsOfServicePage'
import CookiePolicyPage from '@/pages/CookiePolicyPage'
import NotFoundPage from '@/pages/NotFoundPage'

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/global-services" element={<GlobalServicesPage />} />
              <Route path="/global-services/:country" element={<CountryHubPage />} />
              <Route path="/:country/:service" element={<CountryServicePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/startup-development" element={<StartupDevelopmentPage />} />
              <Route path="/vibe-coding" element={<VibeCodingPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Router>
          <Toaster />
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  )
}

export default App
