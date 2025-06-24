
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface InteractiveHoverCardProps {
  imageUrl?: string;
  heading: string;
  text: string;
  className?: string;
  width?: number;
  height?: number;
}

const InteractiveHoverCard: React.FC<InteractiveHoverCardProps> = ({
  imageUrl,
  heading,
  text,
  className,
  width = 400,
  height = 200,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer",
        className
      )}
      style={{ width, height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
      
      <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
        {imageUrl && (
          <div className="w-16 h-16 mb-4 flex items-center justify-center">
            <img 
              src={imageUrl} 
              alt={heading}
              className="w-full h-full object-contain"
            />
          </div>
        )}
        
        <h3 className="text-xl font-bold text-foreground mb-3">
          {heading}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};

export default InteractiveHoverCard;
