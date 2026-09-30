'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'white' | 'purple' | 'dark' | 'cyan';
  size?: 'sm' | 'md' | 'lg';
};

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    onClick?: never;
  };

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export type CapsuleButtonProps = LinkProps | ButtonProps;

const CapsuleButton: React.FC<CapsuleButtonProps> = ({
  children,
  className,
  variant = 'white',
  size = 'md',
  ...props
}) => {
  // Size configurations with proportional squircle badge
  const sizeConfig = {
    sm: {
      outer: 'p-[3px]',
      inner: 'pl-3.5 pr-1 py-0.5 text-[13px] gap-2.5 font-medium',
      badge: 'h-7 w-8 rounded-[12px]',
      icon: 13,
      stroke: 1.6,
    },
    md: {
      outer: 'p-[4px]',
      inner: 'pl-5 pr-1.5 py-1 text-[15px] gap-3.5 font-normal',
      badge: 'h-[36px] w-[42px] rounded-[16px]',
      icon: 15,
      stroke: 1.6,
    },
    lg: {
      outer: 'p-[5px]',
      inner: 'pl-6 pr-2 py-1.5 text-base gap-4 font-normal',
      badge: 'h-11 w-13 rounded-[18px]',
      icon: 18,
      stroke: 1.75,
    },
  }[size];

  // Variant configurations matching reference design exactly
  const variantConfig = {
    white: {
      outer:
        'border border-[#dde3ea] dark:border-white/10 bg-[#edf2f7]/80 dark:bg-white/[0.04] shadow-xs hover:border-[#cbd5e1] dark:hover:border-white/20',
      inner:
        'border border-[#e2e8f0] dark:border-white/10 bg-[#f8f9fb] dark:bg-background-8 text-[#18181b] dark:text-[#f8fafc]',
      badge:
        'bg-white dark:bg-background-6 text-[#18181b] dark:text-[#f8fafc] border border-slate-100 dark:border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.4)]',
    },
    purple: {
      outer:
        'border border-[#dde3ea] dark:border-white/10 bg-[#edf2f7]/80 dark:bg-white/[0.04] shadow-xs hover:border-[#8a3ffc]/40 dark:hover:border-white/20',
      inner:
        'border border-[#8a3ffc] bg-[#8a3ffc] hover:bg-[#7c3aed] text-white transition-colors duration-300',
      badge:
        'bg-white text-[#18181b] shadow-[0_4px_12px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.08)]',
    },
    dark: {
      outer:
        'border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/10 shadow-xs hover:border-black/25 dark:hover:border-white/25',
      inner:
        'border border-black/20 dark:border-white/20 bg-secondary dark:bg-accent text-white dark:text-secondary',
      badge:
        'bg-white dark:bg-secondary text-secondary dark:text-accent shadow-[0_4px_12px_rgba(0,0,0,0.15)]',
    },
    cyan: {
      outer:
        'border border-[#dde3ea] dark:border-white/10 bg-[#edf2f7]/80 dark:bg-white/[0.04] shadow-xs hover:border-cyan-500/50',
      inner:
        'border border-cyan-500/40 bg-[#38d7d4] hover:bg-cyan-400 text-secondary',
      badge:
        'bg-white text-secondary shadow-[0_4px_12px_rgba(0,0,0,0.12)]',
    },
  }[variant];

  const content = (
    <span
      className={cn(
        'group inline-flex items-center rounded-full transition-all duration-300 ease-out cursor-pointer select-none',
        variantConfig.outer,
        sizeConfig.outer,
        className,
      )}>
      <span
        className={cn(
          'inline-flex items-center justify-between rounded-full font-normal transition-all duration-300 ease-out',
          variantConfig.inner,
          sizeConfig.inner,
        )}>
        {/* Button Label */}
        <span className="tracking-[-0.01em] font-normal">{children}</span>

        {/* Floating Tactile Squircle Badge with Animated Arrow */}
        <span
          className={cn(
            'shrink-0 flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-[1.02] group-hover:shadow-[0_6px_16px_rgba(0,0,0,0.10)]',
            variantConfig.badge,
            sizeConfig.badge,
          )}>
          <svg
            width={sizeConfig.icon}
            height={sizeConfig.icon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={sizeConfig.stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transform -rotate-45 transition-transform duration-300 ease-out group-hover:rotate-0">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </span>
    </span>
  );

  if ('href' in props && props.href) {
    const { href, ...linkProps } = props as LinkProps;
    return (
      <Link href={href} {...linkProps} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      {...(props as ButtonProps)}
      className="inline-block bg-transparent border-0 p-0 cursor-pointer">
      {content}
    </button>
  );
};

CapsuleButton.displayName = 'CapsuleButton';
export default CapsuleButton;
