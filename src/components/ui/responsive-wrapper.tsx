import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface ResponsiveWrapperProps {
  children: ReactNode;
  className?: string;
  mobileClassName?: string;
  desktopClassName?: string;
  tabletClassName?: string;
}

const ResponsiveWrapper = ({ 
  children, 
  className, 
  mobileClassName, 
  desktopClassName,
  tabletClassName 
}: ResponsiveWrapperProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={cn(
      className,
      isMobile && mobileClassName,
      !isMobile && desktopClassName,
      tabletClassName
    )}>
      {children}
    </div>
  );
};

export default ResponsiveWrapper;