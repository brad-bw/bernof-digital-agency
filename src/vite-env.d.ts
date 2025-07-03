
/// <reference types="vite/client" />

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    hj?: (event: string, data?: any) => void;
    amplitude?: any;
  }
}

export {};
