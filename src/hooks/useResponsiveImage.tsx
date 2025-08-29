import { useMemo } from 'react';

interface UseResponsiveImageOptions {
  breakpoints?: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

interface ResponsiveImageConfig {
  src: string;
  sizes: string;
  loading: 'lazy' | 'eager';
  className: string;
}

const useResponsiveImage = (
  baseSrc: string,
  options: UseResponsiveImageOptions = {}
): ResponsiveImageConfig => {
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    ...options.breakpoints
  };

  const config = useMemo(() => {
    // Determine optimal sizes based on image context
    const getSizes = (src: string) => {
      // Logo images - small fixed sizes
      if (src.includes('b3c22956-096b-4475-8619-90ea784e020b')) {
        return '(max-width: 768px) 40px, 48px';
      }
      
      // QR codes - small to medium sizes
      if (src.includes('783d99ba') || src.includes('0172be64') || src.includes('0667cb35')) {
        return '(max-width: 640px) 64px, (max-width: 768px) 80px, 96px';
      }
      
      // Hero background - full viewport
      if (src.includes('hero-industrial')) {
        return '100vw';
      }
      
      // Section images - responsive based on layout
      if (src.includes('equipment') || src.includes('materials') || src.includes('furnace')) {
        return '(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 400px';
      }
      
      // Default responsive sizes
      return '(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw';
    };

    const getClassName = (src: string) => {
      // Logo images
      if (src.includes('b3c22956-096b-4475-8619-90ea784e020b')) {
        return 'w-10 h-10 md:w-12 md:h-12 rounded-lg';
      }
      
      // QR codes
      if (src.includes('783d99ba') || src.includes('0172be64') || src.includes('0667cb35')) {
        return 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto rounded-lg';
      }
      
      return '';
    };

    const getLoading = (src: string): 'lazy' | 'eager' => {
      // Hero images and logos should load eagerly
      if (src.includes('hero') || src.includes('b3c22956-096b-4475-8619-90ea784e020b')) {
        return 'eager';
      }
      return 'lazy';
    };

    return {
      src: baseSrc,
      sizes: getSizes(baseSrc),
      loading: getLoading(baseSrc),
      className: getClassName(baseSrc)
    };
  }, [baseSrc, breakpoints]);

  return config;
};

export default useResponsiveImage;