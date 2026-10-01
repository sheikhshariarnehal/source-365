'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/utils/cn';
import Link from 'next/link';

export interface ButtonWithIconProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const ButtonWithIcon = ({
  label = "Let's Collaborate",
  href,
  onClick,
  className,
  iconClassName,
  icon,
  children,
}: ButtonWithIconProps) => {
  const content = (
    <>
      <span className="relative z-10 transition-all duration-500 select-none">
        {children || label}
      </span>
      <div
        className={cn(
          'absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45 shadow-sm',
          iconClassName
        )}>
        {icon || <ArrowUpRight size={16} />}
      </div>
    </>
  );

  const baseClasses = cn(
    'relative inline-flex items-center text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer bg-secondary text-accent dark:bg-white dark:text-secondary',
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={baseClasses} onClick={onClick}>
      {content}
    </button>
  );
};

const ButtonWithIconDemo = () => {
  return <ButtonWithIcon />;
};

export default ButtonWithIconDemo;
