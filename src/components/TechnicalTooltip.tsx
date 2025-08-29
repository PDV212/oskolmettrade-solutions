import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface TechnicalTooltipProps {
  children: React.ReactNode;
  tooltip: string;
  className?: string;
}

const TechnicalTooltip = ({ children, tooltip, className }: TechnicalTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className={`underline decoration-dotted decoration-muted-foreground cursor-help ${className || ''}`}>
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs text-sm">
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TechnicalTooltip;