import './globals.css'
import { Inter } from 'next/font/google'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Toaster } from '@/components/ui/sonner'
import ErrorBoundary from '@/components/ErrorBoundary'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata = {
  title: 'Bernof Co - Managing the Future | Digital Solutions & Growth Services',
  description: 'Transform your digital presence with Bernof Co\'s comprehensive development, design, and marketing services. Book your discovery call today.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-inter">
        <ErrorBoundary>
          <HelmetProvider>
            <ThemeProvider>
              {children}
              <Toaster />
            </ThemeProvider>
          </HelmetProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}