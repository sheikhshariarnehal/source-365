'use client';

import React from 'react';
import { cn } from '@/utils/cn';
import {
  Zap,
  Globe,
  Gauge,
  ShieldCheck,
  LayoutGrid,
  Layers,
  Code2,
  Lock,
  Flame,
  FileCode,
  Smartphone,
  PhoneCall,
  Calendar,
  Sparkles,
  Search,
} from 'lucide-react';

interface TechBadgeProps {
  tag: string;
  className?: string;
}

export const getTechIcon = (tag: string): React.ReactNode => {
  const normalized = tag.toLowerCase().trim();

  // WordPress
  if (normalized.includes('wordpress')) {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#21759B" />
        <path
          d="M12 3.25C7.17 3.25 3.25 7.17 3.25 12c0 2.05.7 3.94 1.88 5.44L9.08 6.9c.14-.38.07-.46-.16-.46H8.7c-.23 0-.35-.23-.35-.46 0-.23.12-.46.35-.46h4.34c.23 0 .35.23.35.46 0 .23-.12.46-.35.46h-.22c-.23 0-.3.08-.16.46l3.95 10.54c1.18-1.5 1.88-3.39 1.88-5.44 0-4.83-3.92-8.75-8.74-8.75zm-6.62 9.53c0 .28.02.56.07.83l3.22 8.84c-3.14-1.35-5.38-4.47-5.38-8.1 0-.53.05-1.05.14-1.57h1.95zm6.62 7.97l-2.6-7.57 2.45-6.72 2.62 7.57-2.47 6.72zm5.79-1.92l-3.3-9.06h1.53c.23 0 .35-.23.35-.46 0-.23-.12-.46-.35-.46h-2.12c-.23 0-.35.23-.35.46 0 .23.12.46.35.46h.22c.23 0 .3.08.16.46l-2.42 6.64 2.91 8.2c2.08-1.46 3.47-3.77 3.67-6.28z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  // WooCommerce
  if (normalized.includes('woocommerce')) {
    return (
      <svg className="w-4.5 h-3.5 shrink-0" viewBox="0 0 28 20" fill="none">
        <rect width="28" height="20" rx="4" fill="#7F54B3" />
        <path
          d="M7.2 6.5c-1.1 0-1.9.9-1.9 2.2 0 1.9 1.1 4.3 2.5 4.3.7 0 1.2-.5 1.6-1.3.4.8.9 1.3 1.6 1.3 1.4 0 2.5-2.4 2.5-4.3 0-1.3-.8-2.2-1.9-2.2-.8 0-1.4.5-1.8 1.4-.4-.9-1-1.4-1.9-1.4zm9.3 0c-1.5 0-2.6 1.5-2.6 3.4 0 1.9 1.1 3.4 2.6 3.4s2.6-1.5 2.6-3.4c0-1.9-1.1-3.4-2.6-3.4z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  // Elementor / Elementor Pro
  if (normalized.includes('elementor')) {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="#D30C5C" />
        <rect x="7" y="7" width="2" height="10" rx="1" fill="#ffffff" />
        <rect x="11" y="7" width="6" height="2" rx="1" fill="#ffffff" />
        <rect x="11" y="11" width="6" height="2" rx="1" fill="#ffffff" />
        <rect x="11" y="15" width="6" height="2" rx="1" fill="#ffffff" />
      </svg>
    );
  }

  // bKash / Stripe
  if (normalized.includes('bkash') || normalized.includes('stripe')) {
    return (
      <svg className="w-4 h-4 shrink-0 text-[#E2136E]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.07 2.5L2 12.72l9.08 2.06L14.07 2.5zM12.98 16.5l-6.32 5 13.91-2.93-7.59-2.07zM22 6.82l-6.62 6.1 4.71 1.28L22 6.82z" />
      </svg>
    );
  }

  // Speed Optimized / Core Web Vitals
  if (normalized.includes('speed') || normalized.includes('vitals') || normalized.includes('performance')) {
    return (
      <svg className="w-4 h-4 shrink-0 text-[#00c988]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
      </svg>
    );
  }

  // Next.js
  if (normalized.includes('next.js') || normalized.includes('nextjs')) {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="#000000" className="dark:fill-white" />
        <path
          d="M16.5 16.5L9.6 7.5H8v9h1.6v-6.9l6 7.9h.9zM15.4 7.5h-1.6v5.8l1.6 2.1V7.5z"
          fill="#ffffff"
          className="dark:fill-black"
        />
      </svg>
    );
  }

  // React
  if (normalized.includes('react')) {
    return (
      <svg className="w-4 h-4 shrink-0 text-[#00D8FF]" viewBox="0 0 24 24" fill="currentColor">
        <ellipse cx="12" cy="12" rx="4" ry="11" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="11" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="11" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes('tailwind')) {
    return (
      <svg className="w-4 h-4 shrink-0 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    );
  }

  // TypeScript
  if (normalized.includes('typescript')) {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M11.5 10H6.5v2h1.5v7h2v-7h1.5v-2zm7.2 2.2c-.4-.5-1.1-.9-2.1-.9-1.2 0-2 .6-2 1.6 0 .9.6 1.4 1.7 1.7l.7.2c.8.2 1.1.5 1.1.9 0 .5-.5.9-1.2.9-.8 0-1.4-.4-1.8-1l-1.3 1.2c.6.9 1.7 1.6 3.1 1.6 2.3 0 3.3-1.2 3.3-2.6 0-1.1-.7-1.7-2-2.1l-.7-.2c-.6-.2-.9-.4-.9-.8 0-.4.4-.7 1-.7.6 0 1.1.2 1.5.6l1.3-1.2z" fill="#ffffff" />
      </svg>
    );
  }

  // MongoDB
  if (normalized.includes('mongodb')) {
    return (
      <svg className="w-4 h-4 shrink-0 text-[#13AA52]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 1.5c-.3 0-.6.1-.8.3C8.5 4.5 4.5 9.8 4.5 14.5c0 4.1 3.4 7.5 7.5 7.5s7.5-3.4 7.5-7.5c0-4.7-4-10-6.7-12.7-.2-.2-.5-.3-.8-.3zm-.2 2.7c1.8 2.2 4.9 6.7 4.9 10.3 0 2.6-2.1 4.7-4.7 4.7-.7 0-1.4-.2-2-.5v-14.5z" />
      </svg>
    );
  }

  // Node.js
  if (normalized.includes('node')) {
    return (
      <svg className="w-4 h-4 shrink-0 text-[#5FA04E]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2zm0 2.3l6.5 3.8v7.5L12 19.3l-6.5-3.8V8.1L12 4.3z" />
      </svg>
    );
  }

  // Express / Express.js
  if (normalized.includes('express')) {
    return <Code2 className="w-4 h-4 shrink-0 text-slate-700 dark:text-slate-200" />;
  }

  // Socket.io
  if (normalized.includes('socket')) {
    return <Flame className="w-4 h-4 shrink-0 text-[#010101] dark:text-white" />;
  }

  // WhatsApp
  if (normalized.includes('whatsapp')) {
    return (
      <svg className="w-4 h-4 shrink-0 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.79 14.13c-.24.67-1.39 1.27-1.92 1.35-.49.07-1.12.1-3.26-.78-2.73-1.13-4.5-3.89-4.63-4.07-.14-.18-1.1-1.46-1.1-2.78 0-1.32.69-1.97.94-2.24.24-.26.54-.33.72-.33.18 0 .36 0 .52.01.17.01.4.06.61.56.24.58.82 2 .89 2.15.07.15.12.33.02.53-.1.2-.15.33-.3.51-.15.18-.32.4-.46.54-.15.15-.31.31-.13.62.18.31.79 1.3 1.7 2.11 1.17 1.04 2.16 1.36 2.47 1.51.31.15.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.71-.15.29.1 1.84.87 2.15 1.03.31.15.52.23.6.36.07.13.07.75-.17 1.42z" />
      </svg>
    );
  }

  // Framer Motion / GSAP / Animation
  if (normalized.includes('framer') || normalized.includes('gsap') || normalized.includes('motion') || normalized.includes('animation')) {
    return <Sparkles className="w-4 h-4 shrink-0 text-indigo-500" />;
  }

  // Lighthouse / SEO
  if (normalized.includes('lighthouse') || normalized.includes('seo')) {
    return <Gauge className="w-4 h-4 shrink-0 text-emerald-500" />;
  }

  // Security / Auth / JWT / RBAC / Encryption
  if (normalized.includes('jwt') || normalized.includes('rbac') || normalized.includes('ssl') || normalized.includes('encryption') || normalized.includes('auth')) {
    return <ShieldCheck className="w-4 h-4 shrink-0 text-sky-500" />;
  }

  // Gutenberg / Blocks / Headless CMS
  if (normalized.includes('gutenberg') || normalized.includes('headless') || normalized.includes('cms')) {
    return <Layers className="w-4 h-4 shrink-0 text-slate-700 dark:text-slate-300" />;
  }

  // Kanban / Management
  if (normalized.includes('kanban') || normalized.includes('board')) {
    return <LayoutGrid className="w-4 h-4 shrink-0 text-violet-500" />;
  }

  // Multi-Language / Code
  if (normalized.includes('language') || normalized.includes('multi-lang')) {
    return <Code2 className="w-4 h-4 shrink-0 text-slate-500 dark:text-slate-400" />;
  }

  // Mobile / Table / Lead
  if (normalized.includes('mobile')) {
    return <Smartphone className="w-4 h-4 shrink-0 text-teal-500" />;
  }
  if (normalized.includes('table') || normalized.includes('booking')) {
    return <Calendar className="w-4 h-4 shrink-0 text-amber-500" />;
  }
  if (normalized.includes('lead') || normalized.includes('search')) {
    return <Search className="w-4 h-4 shrink-0 text-blue-500" />;
  }

  // Default fallback
  return <Code2 className="w-4 h-4 shrink-0 text-slate-500" />;
};

export default function TechBadge({ tag, className }: TechBadgeProps) {
  const icon = getTechIcon(tag);

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-xl bg-slate-100/90 hover:bg-slate-200/80 px-3.5 py-1.5 text-xs font-medium text-secondary/85 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] dark:text-accent/90 transition-colors shadow-2xs',
        className
      )}>
      {icon}
      <span>{tag}</span>
    </span>
  );
}
