// Centralized error logging utility
// Usage: import logError from './logError';
// const errorId = logError(error, { context: 'BlogPost fetch', extra: { slug } });

let errorCounter = 0;

export interface LogErrorOptions {
  context?: string;
  extra?: Record<string, any>;
}

function generateErrorId() {
  errorCounter += 1;
  return `ERR-${Date.now()}-${errorCounter}`;
}

export default function logError(error: any, options: LogErrorOptions = {}): string {
  const errorId = generateErrorId();
  const { context, extra } = options;

  // Log to console
  console.error(`\n[ErrorBoundary] Error ID: ${errorId}`);
  if (context) console.error('Context:', context);
  if (extra) console.error('Extra:', extra);
  console.error(error);

  // Log to analytics (Google Analytics, etc.)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      description: `${context ? `[${context}] ` : ''}${error?.message || error}`,
      fatal: false,
      errorId,
      ...extra
    });
  }

  // TODO: Integrate with Sentry or other external service here

  return errorId;
} 