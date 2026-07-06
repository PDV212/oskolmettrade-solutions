import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import CacheManager from '@/utils/cacheManager';

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
  width?: number;
  height?: number;
  itemProp?: string;
}

const OptimizedImage = ({
  src,
  alt,
  className,
  loading = 'lazy',
  sizes = '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw',
  priority = false,
  aspectRatio = 'auto',
  objectFit = 'cover',
  quality = 85,
  placeholder = true,
  onLoad,
  onError,
  width,
  height,
  itemProp
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const cacheManager = CacheManager.getInstance();

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
    
    // Кешируем успешно загруженное изображение
    if (priority) {
      cacheManager.setLocalCache(`img_${src}`, {
        loaded: true,
        timestamp: Date.now()
      }, 24 * 60 * 60 * 1000); // 24 часа
    }
    
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Оптимизированные размеры изображения
  const getOptimizedSrc = (originalSrc: string) => {
    // Если это внешний URL или уже оптимизированный, возвращаем как есть
    if (originalSrc.startsWith('http') || originalSrc.includes('?')) {
      return originalSrc;
    }
    
    // Для локальных изображений добавляем параметры оптимизации
    const params = new URLSearchParams();
    if (width) params.set('w', width.toString());
    if (height) params.set('h', height.toString());
    if (quality && quality !== 85) params.set('q', quality.toString());
    
    const queryString = params.toString();
    return queryString ? `${originalSrc}?${queryString}` : originalSrc;
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

  const shouldShowImage = priority || isInView;
  const optimizedSrc = getOptimizedSrc(src);

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

      {/* Main image */}
      {shouldShowImage && !hasError && (
        <img
          src={optimizedSrc}
          alt={alt}
          loading={loading}
          sizes={sizes}
          width={width}
          height={height}
          onLoad={handleLoad}
          onError={handleError}
          itemProp={itemProp}
          className={cn(
            'w-full h-full transition-opacity duration-300 optimized-image',
            getObjectFitClass(),
            isLoaded ? 'opacity-100' : 'opacity-0',
            priority && 'priority-image'
          )}
          style={{
            imageRendering: 'auto'
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