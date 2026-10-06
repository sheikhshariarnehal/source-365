import React from 'react';
import { cn } from '@/utils/cn';

export interface FrameProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export const Frame = React.forwardRef<HTMLDivElement, FrameProps>(
  ({ className, as: Component = 'div', ...props }, ref) => (
    <Component
      ref={ref}
      className={cn('w-full flex flex-col', className)}
      {...props}
    />
  )
);
Frame.displayName = 'Frame';

export const FrameHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 mb-4', className)}
      {...props}
    />
  )
);
FrameHeader.displayName = 'FrameHeader';

export const FrameTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-xl font-bold text-secondary dark:text-accent leading-tight tracking-tight', className)}
      {...props}
    />
  )
);
FrameTitle.displayName = 'FrameTitle';

export const FrameDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-secondary/70 dark:text-accent/70 leading-relaxed', className)}
      {...props}
    />
  )
);
FrameDescription.displayName = 'FrameDescription';

export default Frame;
