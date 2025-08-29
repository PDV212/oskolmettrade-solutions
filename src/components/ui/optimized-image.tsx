import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  priority?: boolean;
  aspectRatio?: 'square' | 'video' | 'photo' | 'auto';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  quality?: number;
  placeholder?: boolean;
  onLoad?: () => void;
  onError?: () => void;
  enableWebP?: boolean;
}

const OptimizedImage = ({
  src,
  alt,
  className,
  loading = 'lazy',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
  aspectRatio = 'auto',
  objectFit = 'cover',
  quality = 85,
  placeholder = true,
  enableWebP = true,
  onLoad,
  onError
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case 'square': return 'aspect-square';
      case 'video': return 'aspect-video';
      case 'photo': return 'aspect-[4/3]';
      default: return '';
    }
  };

  const getObjectFitClass = () => {
    switch (objectFit) {
      case 'contain': return 'object-contain';
      case 'cover': return 'object-cover';
      case 'fill': return 'object-fill';
      case 'none': return 'object-none';
      case 'scale-down': return 'object-scale-down';
      default: return 'object-cover';
    }
  };

  const getWebPSrc = (originalSrc: string) => {
    if (!enableWebP) return originalSrc;
    
    // Convert file extensions to .webp
    const webpSrc = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    return webpSrc;
  };

  const shouldShowImage = priority || isInView;

  return (
    <div 
      ref={imgRef}
      className={cn(
        'relative overflow-hidden bg-muted',
        getAspectRatioClass(),
        className
      )}
    >
      {/* Blur placeholder */}
      {placeholder && !isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 animate-pulse" />
      )}

      {/* Main image with WebP support */}
      {shouldShowImage && !hasError && enableWebP && (
        <picture>
          <source 
            srcSet={getWebPSrc(src)} 
            type="image/webp"
            sizes={sizes}
          />
          <img
            src={src}
            alt={alt}
            loading={loading}
            sizes={sizes}
            onLoad={handleLoad}
            onError={handleError}
            className={cn(
              'w-full h-full transition-opacity duration-300',
              getObjectFitClass(),
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
            style={{
              imageRendering: 'crisp-edges'
            }}
          />
        </picture>
      )}

      {/* Fallback for when WebP is disabled */}
      {shouldShowImage && !hasError && !enableWebP && (
        <img
          src={src}
          alt={alt}
          loading={loading}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'w-full h-full transition-opacity duration-300',
            getObjectFitClass(),
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          style={{
            imageRendering: 'crisp-edges'
          }}
        />
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
          <div className="text-center">
            <div className="text-sm">Не удалось загрузить изображение</div>
          </div>
        </div>
      )}

      {/* Loading indicator for priority/eager images */}
      {!isLoaded && !hasError && shouldShowImage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;