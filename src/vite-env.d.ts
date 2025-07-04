/// <reference types="vite/client" />

declare global {
  interface Window {
    hj?: (event: string, data?: any) => void;
  }
}

export {};
