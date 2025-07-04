import React, { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '100vw'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Preload priority images
    if (priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setError(true);
    }
  }, [src, priority]);

  // Generate WebP and AVIF sources for next-gen formats
  const generateSources = () => {
    const baseUrl = src.split('.')[0];
    const extension = src.split('.').pop();
    
    return (
      <>
        <source
          srcSet={`${baseUrl}.avif`}
          type="image/avif"
          sizes={sizes}
        />
        <source
          srcSet={`${baseUrl}.webp`}
          type="image/webp"
          sizes={sizes}
        />
        <source
          srcSet={src}
          type={`image/${extension}`}
          sizes={sizes}
        />
      </>
    );
  };

  if (error && src === src) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      <picture>
        {generateSources()}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`${className} ${isLoaded ? 'loaded' : ''}`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            ...(width && height ? { aspectRatio: `${width}/${height}` } : {})
          }}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;
