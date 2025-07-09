import { useState, useCallback } from 'react';
import logError, { LogErrorOptions } from '@/utils/logError';

export function useErrorLogger() {
  const [error, setError] = useState<{ message: string; errorId: string } | null>(null);

  const log = useCallback((err: any, options?: LogErrorOptions) => {
    const errorId = logError(err, options);
    setError({ message: err?.message || String(err), errorId });
    return errorId;
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return { error, log, clearError };
}

export default useErrorLogger; 