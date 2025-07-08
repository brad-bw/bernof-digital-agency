
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import logError from '@/utils/logError';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  private errorId: string | null = null;

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Use centralized error logger
    this.errorId = logError(error, {
      context: 'ErrorBoundary',
      extra: {
        errorInfo,
        url: typeof window !== 'undefined' ? window.location.href : undefined
      }
    });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    this.errorId = null;
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Something went wrong
              </h1>
              <p className="text-gray-600 mb-6">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
              {this.errorId && (
                <div className="mb-4 text-xs text-gray-500">
                  Error ID: <span className="font-mono">{this.errorId}</span>
                </div>
              )}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-left bg-red-50 p-4 rounded-lg mb-4">
                  <summary className="cursor-pointer text-red-800 font-medium">
                    Error Details
                  </summary>
                  <pre className="mt-2 text-xs text-red-700 overflow-auto">
                    {this.state.error.message}
                  </pre>
                </details>
              )}
            </div>
            
            <div className="space-y-4">
              <Button onClick={this.handleReset} className="w-full">
                Try Again
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/'}
                className="w-full"
              >
                Go Home
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
