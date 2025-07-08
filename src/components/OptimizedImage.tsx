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

  // Determine if width/height are numbers for attribute vs style application
  const numericWidth = typeof width === 'number' ? width : undefined;
  const numericHeight = typeof height === 'number' ? height : undefined;

  useEffect(() => {
    if (priority) {
      const img = new window.Image();
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setError(true);
      img.src = src; // Preload the main src
    }
  }, [src, priority]);

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => {
    setError(true);
    setIsLoaded(true); // Stop showing placeholder if image fails
  };

  const sources = getNextGenSources(src);

  // NOTE: The generateSrcSet and generateSizes functions are currently unused
  // because scripts/convert-images.cjs only produces single-size next-gen formats.
  // To enable responsive sizes, convert-images.cjs would need to generate multiple
  // size variants (e.g., image-320w.webp), and these functions would need to
  // be updated to point to those files. Then, srcSet and sizes attributes should be
  // added to the <source> elements and the fallback <img>.
  /*
  const generateSrcSet = (imageSrc: string) => {
    // This is a placeholder for how it might work if image service supported ?w=
    // Or if multiple pre-rendered sizes existed (e.g. image-320w.webp)
    const sizes = [320, 640, 768, 1024, 1280];
    return sizes
      .map(size => `${imageSrc}?w=${size} ${size}w`) // Example, adjust if pre-rendered
      .join(', ');
  };

  const generateSizes = () => {
    if (numericWidth) {
      return `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${numericWidth}px`;
    }
    return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
  };
  */

  if (error) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center text-gray-500 ${className}`}
        style={{
          width: numericWidth ? `${numericWidth}px` : (width || '100%'),
          height: numericHeight ? `${numericHeight}px` : (height || 'auto'),
          aspectRatio: numericWidth && numericHeight ? `${numericWidth}/${numericHeight}` : undefined
        }}
      >
        <span className="text-xs p-2 text-center">Image failed to load: {alt}</span>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        width: numericWidth ? `${numericWidth}px` : (width || undefined),
        height: numericHeight ? `${numericHeight}px` : (height || undefined),
        aspectRatio: numericWidth && numericHeight ? `${numericWidth}/${numericHeight}` : undefined
      }}
    >
      {/* Placeholder */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-100 animate-pulse"
          style={{ 
            backgroundImage: `url(${placeholder})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%'
          }}
        />
      )}
      <picture>
        {sources && <source srcSet={sources.avif} type="image/avif" />}
        {sources && <source srcSet={sources.webp} type="image/webp" />}
        <img
          src={src}
          alt={alt}
          width={numericWidth} // Use numeric width for attribute
          height={numericHeight} // Use numeric height for attribute
          className={`transition-opacity duration-300 w-full h-full ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          style={{
            objectFit: 'cover', // Applied via className or explicitly if needed
            // aspectRatio is handled by the parent div or Tailwind's aspect classes
          }}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;
