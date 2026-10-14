import { forwardRef, type HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
  dot?: boolean;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', size = 'md', dot = false, children, className = '', ...props }, ref) => {
    const variants = {
      default: 'bg-violet-500/20 text-violet-300 border border-violet-500/30',
      success: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
      warning: 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
      error: 'bg-rose-500/20 text-rose-300 border border-rose-500/30',
      info: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
    };

    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm',
    };

    return (
      <span
        ref={ref}
        className={`inline-flex items-center gap-1.5 rounded-full border font-medium ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {dot && (
          <span
            className={`w-1.5 h-1.5 rounded-full ${variant === 'default' && 'bg-violet-500'}
              ${variant === 'success' && 'bg-emerald-500'}
              ${variant === 'warning' && 'bg-amber-500'}
              ${variant === 'error' && 'bg-rose-500'}
              ${variant === 'info' && 'bg-blue-500'}`}
            aria-hidden="true"
          />
        )}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';