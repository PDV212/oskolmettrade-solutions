import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Award, Star, TrendingUp, Shield } from "lucide-react";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105",
  {
    variants: {
      variant: {
        leader: "bg-gradient-to-r from-accent via-accent-glow to-accent text-white border-accent/30 shadow-accent-glow",
        experience: "bg-gradient-to-r from-primary via-primary-glow to-primary text-white border-primary/30 shadow-primary-glow", 
        premium: "bg-gradient-to-r from-secondary via-secondary/80 to-secondary text-white border-secondary/30 shadow-secondary-glow",
        trusted: "bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 text-white border-emerald-400/30 shadow-emerald-glow",
        outline: "border-primary/50 text-primary bg-background/80 backdrop-blur-sm hover:bg-primary/10",
        glass: "bg-white/15 text-white border-white/30 backdrop-blur-md shadow-lg hover:bg-white/25"
      },
      size: {
        default: "px-4 py-2 text-sm",
        sm: "px-3 py-1.5 text-xs",
        lg: "px-6 py-3 text-base",
        xl: "px-8 py-4 text-lg"
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
        glow: "animate-glow",
        float: "animate-float"
      }
    },
    defaultVariants: {
      variant: "leader",
      size: "default",
      animation: "none"
    },
  }
);

export interface BadgePremiumProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ComponentType<{ className?: string }>;
  text: string;
  pulse?: boolean;
}

function BadgePremium({ 
  className, 
  variant, 
  size, 
  animation,
  icon: Icon,
  text, 
  pulse = false,
  ...props 
}: BadgePremiumProps) {
  return (
    <div 
      className={cn(
        badgeVariants({ variant, size, animation }), 
        pulse && "animate-pulse",
        className
      )} 
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span>{text}</span>
    </div>
  );
}

// Предустановленные бейджи для удобства
export const IndustryLeaderBadge = ({ className, ...props }: Omit<BadgePremiumProps, 'text' | 'icon'>) => (
  <BadgePremium
    variant="leader"
    icon={Award}
    text="Лидер отрасли"
    className={className}
    {...props}
  />
);

export const ExperienceBadge = ({ className, ...props }: Omit<BadgePremiumProps, 'text' | 'icon'>) => (
  <BadgePremium
    variant="experience"
    icon={Star}
    text="30 лет опыта"
    className={className}
    {...props}
  />
);

export const TrustedBadge = ({ className, ...props }: Omit<BadgePremiumProps, 'text' | 'icon'>) => (
  <BadgePremium
    variant="trusted"
    icon={Shield}
    text="Надежный партнер"
    className={className}
    {...props}
  />
);

export const GrowthBadge = ({ className, ...props }: Omit<BadgePremiumProps, 'text' | 'icon'>) => (
  <BadgePremium
    variant="premium"
    icon={TrendingUp}
    text="2500+ станков поставлено"
    className={className}
    {...props}
  />
);

// Английские версии бейджей
export const IndustryLeaderBadgeEn = ({ className, ...props }: Omit<BadgePremiumProps, 'text' | 'icon'>) => (
  <BadgePremium
    variant="leader"
    icon={Award}
    text="Industry Leader"
    className={className}
    {...props}
  />
);

export const ExperienceBadgeEn = ({ className, ...props }: Omit<BadgePremiumProps, 'text' | 'icon'>) => (
  <BadgePremium
    variant="experience"
    icon={Star}
    text="30 Years Experience"
    className={className}
    {...props}
  />
);

export const TrustedBadgeEn = ({ className, ...props }: Omit<BadgePremiumProps, 'text' | 'icon'>) => (
  <BadgePremium
    variant="trusted"
    icon={Shield}
    text="Trusted Partner"
    className={className}
    {...props}
  />
);

export const GrowthBadgeEn = ({ className, ...props }: Omit<BadgePremiumProps, 'text' | 'icon'>) => (
  <BadgePremium
    variant="premium"
    icon={TrendingUp}
    text="2500+ Machines Delivered"
    className={className}
    {...props}
  />
);

// Китайские версии бейджей
export const IndustryLeaderBadgeZh = ({ className, ...props }: Omit<BadgePremiumProps, 'text' | 'icon'>) => (
  <BadgePremium
    variant="leader"
    icon={Award}
    text="行业领先"
    className={className}
    {...props}
  />
);

export const ExperienceBadgeZh = ({ className, ...props }: Omit<BadgePremiumProps, 'text' | 'icon'>) => (
  <BadgePremium
    variant="experience"
    icon={Star}
    text="30年经验"
    className={className}
    {...props}
  />
);

export const TrustedBadgeZh = ({ className, ...props }: Omit<BadgePremiumProps, 'text' | 'icon'>) => (
  <BadgePremium
    variant="trusted"
    icon={Shield}
    text="可靠伙伴"
    className={className}
    {...props}
  />
);

export const GrowthBadgeZh = ({ className, ...props }: Omit<BadgePremiumProps, 'text' | 'icon'>) => (
  <BadgePremium
    variant="premium"
    icon={TrendingUp}
    text="交付2500+台机器"
    className={className}
    {...props}
  />
);

export { BadgePremium, badgeVariants };