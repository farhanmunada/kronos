import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

type Variant = 'solid' | 'outline' | 'ghost';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const base =
  'inline-flex items-center justify-center gap-3 px-8 py-4 text-[0.72rem] font-medium uppercase tracking-[0.22em] transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-50';

const variants: Record<Variant, string> = {
  solid: 'bg-accent text-white hover:bg-[#8a5306]',
  outline:
    'border border-foreground/25 text-foreground hover:border-foreground hover:bg-foreground hover:text-background',
  ghost: 'text-muted-foreground hover:text-accent',
};

export function Button({
  children,
  href,
  variant = 'solid',
  type = 'button',
  disabled,
  className,
  onClick,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
