import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'arrow' | 'external' | React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'right',
    isLoading = false,
    children,
    className = '',
    disabled,
    ...props
  }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center gap-2 font-medium
      rounded-xl transition-all duration-200
      focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-500 focus-visible:outline-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const variants = {
      primary: `
        bg-gradient-to-br from-violet-500 to-violet-600 text-white
        shadow-[0_4px_20px_-4px_rgba(139,92,246,0.4)]
        hover:from-violet-600 hover:to-violet-700
        hover:shadow-[0_8px_30px_-6px_rgba(139,92,246,0.5)]
        hover:-translate-y-0.5
        active:translate-y-0
      `,
      secondary: `
        bg-white/5 text-navy-100 border border-white/10
        hover:bg-white/10 hover:border-white/20
      `,
      ghost: `
        bg-transparent text-navy-300
        hover:text-navy-100 hover:bg-white/5
      `,
    };

    const sizes = {
      sm: 'px-4 py-2.5 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const iconMap = {
      arrow: <ArrowRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />,
      external: <ExternalLink className="w-4 h-4 flex-shrink-0" aria-hidden="true" />,
    };

    const IconComponent = typeof icon === 'string' ? iconMap[icon] : icon;

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading ? (
          <svg
            className="w-5 h-5 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          <>
            {iconPosition === 'left' && IconComponent && !isLoading}
            <span>{children}</span>
            {iconPosition === 'right' && IconComponent && !isLoading}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';