import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: string;
}

const getNextGenSources = (src: string) => {
  // Only replace .png or .jpg/.jpeg
  if (!src.match(/\.(png|jpe?g)$/i)) return null;
  const base = src.replace(/\.(png|jpe?g)$/i, '');
  return {
    avif: `${base}.avif`,
    webp: `${base}.webp`,
    fallback: src
  };
};

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y4ZmFmYyIvPjwvc3ZnPg=='
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (priority) {
      const img = new window.Image();
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setError(true);
      img.src = src;
    }
  }, [src, priority]);

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => setError(true);

  const sources = getNextGenSources(src);

  // Generate responsive srcSet for different screen sizes
  const generateSrcSet = (imageSrc: string) => {
    const sizes = [320, 640, 768, 1024, 1280];
    return sizes
      .map(size => `${imageSrc}?w=${size} ${size}w`)
      .join(', ');
  };

  // Generate sizes attribute for responsive images
  const generateSizes = () => {
    if (width && height) {
      return `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${width}px`;
    }
    return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
  };

  if (error) {
    return (
      <div 
        className={`bg-gray-100 flex items-center justify-center ${className}`}
        style={{ width: width || 'auto', height: height || 'auto' }}
      >
        <span className="text-gray-400 text-sm">Image failed to load</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width: width || undefined, height: height || undefined }}>
      {/* Placeholder */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-100 animate-pulse"
          style={{ 
            backgroundImage: `url(${placeholder})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}
      <picture>
        {sources && <source srcSet={sources.avif} type="image/avif" />}
        {sources && <source srcSet={sources.webp} type="image/webp" />}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          style={{
            width: width ? `${width}px` : 'auto',
            height: height ? `${height}px` : 'auto',
            objectFit: 'cover',
            aspectRatio: width && height ? `${width} / ${height}` : undefined
          }}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;
