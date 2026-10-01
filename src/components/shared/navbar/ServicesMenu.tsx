'use client';

import React from 'react';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import {
  Zap,
  TrendingUp,
  Globe,
  Smartphone,
  Search,
  ShieldCheck,
  Activity,
  Palette,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface ServiceItem {
  title: string;
  desc: string;
  href: string;
  badge?: string;
  icon: React.ComponentType<{ className?: string; size?: number; strokeWidth?: number }>;
}

const servicesList: ServiceItem[] = [
  {
    title: 'Facebook Boosting',
    desc: 'Paid campaigns, audience targeting & ROI scaling',
    href: '/services#boosting',
    icon: Zap,
  },
  {
    title: 'Growth Program',
    desc: 'Full-funnel branding & dedicated growth management',
    href: '/growth-program',
    badge: 'Popular',
    icon: TrendingUp,
  },
  {
    title: 'Web Development',
    desc: 'Fast, responsive custom web applications & portals',
    href: '/services#web-development',
    icon: Globe,
  },
  {
    title: 'App Development',
    desc: 'Native iOS & Android mobile product engineering',
    href: '/services#app-development',
    icon: Smartphone,
  },
  {
    title: 'SEO & Search Visibility',
    desc: 'Technical site audits, backlinks & top rankings',
    href: '/services#seo',
    icon: Search,
  },
  {
    title: 'SQA & Software QA',
    desc: 'Automated test pipelines & software reliability',
    href: '/services#sqa',
    icon: ShieldCheck,
  },
  {
    title: 'Server-Side Tracking',
    desc: 'Precision CAPI attribution & conversion telemetry',
    href: '/services#tracking',
    badge: 'Advanced',
    icon: Activity,
  },
  {
    title: 'Graphics & Brand Design',
    desc: 'Visual identities, UI design & marketing creatives',
    href: '/services#graphics',
    icon: Palette,
  },
];

export default function ServicesMenu({
  menuDropdownId,
  setMenuDropdownId,
}: {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}) {
  const handleClose = () => setMenuDropdownId(null);

  return (
    <div>
      {/* Invisible hover bridge */}
      <div
        className={cn(
          'dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-4 w-full min-w-[760px] -translate-x-1/2 bg-transparent',
          menuDropdownId === 'services-mega-menu' ? '!pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />

      {/* Mega Menu Dropdown */}
      <div
        id="services-mega-menu"
        className={cn(
          'dropdown-menu pointer-events-none absolute top-full left-1/2 z-50 mt-2 w-[740px] -translate-x-1/2 rounded-2xl border border-stroke-1/80 bg-white/98 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-300 dark:border-stroke-6/80 dark:bg-[#0f131a]/98 dark:shadow-[0_20px_50px_rgba(0,0,0,0.45)] opacity-0',
          menuDropdownId === 'services-mega-menu'
            ? '!pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2 opacity-0',
        )}>
        {/* Header strip */}
        <div className="mb-3 flex items-center justify-between border-b border-stroke-1/60 pb-2.5 dark:border-stroke-6/60">
          <span className="text-[11px] font-medium tracking-wide text-secondary/45 uppercase dark:text-accent/40">
            Services & Capabilities
          </span>
          <Link
            href="/services"
            onClick={handleClose}
            className="group inline-flex items-center gap-1 text-xs font-medium text-secondary/70 transition-colors hover:text-primary-600 dark:text-accent/70 dark:hover:text-primary-400">
            <span>View all services</span>
            <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-2 gap-1.5">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                onClick={handleClose}
                className="group flex items-center gap-3 rounded-xl p-2.5 transition-colors duration-150 hover:bg-black/[0.025] dark:hover:bg-white/[0.03]">
                <div className="flex size-9.5 shrink-0 items-center justify-center rounded-[12px] border border-slate-200/80 bg-white text-secondary/75 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors duration-200 group-hover:border-slate-300 group-hover:text-secondary dark:border-white/10 dark:bg-white/[0.03] dark:text-accent/75 dark:group-hover:border-white/20 dark:group-hover:text-accent">
                  <Icon size={17} strokeWidth={1.75} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="truncate text-[13.5px] font-medium text-secondary/90 transition-colors group-hover:text-primary-600 dark:text-accent/90 dark:group-hover:text-primary-400">
                      {service.title}
                    </span>
                    {service.badge && (
                      <span
                        className={cn(
                          'rounded-md px-1.5 py-0.5 text-[9.5px] font-medium leading-none',
                          service.badge === 'Popular'
                            ? 'bg-emerald-500/[0.08] text-emerald-700/90 dark:bg-emerald-500/15 dark:text-emerald-300'
                            : 'bg-primary-500/[0.08] text-primary-700/90 dark:bg-primary-500/15 dark:text-primary-300',
                        )}>
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 truncate text-[11.5px] text-secondary/50 dark:text-accent/50">
                    {service.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Quiet Bottom Banner */}
        <div className="mt-3.5 flex items-center justify-between rounded-xl border border-stroke-1/70 bg-slate-50/50 p-2.5 px-3 dark:border-stroke-6/70 dark:bg-white/[0.02]">
          <div className="flex items-center gap-2.5">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-[9px] border border-slate-200/70 bg-white text-secondary/60 dark:border-white/10 dark:bg-white/[0.03] dark:text-accent/60">
              <Sparkles size={13} strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-xs font-medium text-secondary/90 dark:text-accent/90">
                Need an end-to-end partner to scale your business?
              </p>
              <p className="text-[11px] text-secondary/50 dark:text-accent/50">
                Dedicated Key Account Manager & weekly growth performance tracking.
              </p>
            </div>
          </div>
          <Link
            href="/growth-program"
            onClick={handleClose}
            className="group ml-3 inline-flex shrink-0 items-center gap-1 rounded-full bg-secondary px-3 py-1 text-[11.5px] font-medium text-white shadow-none transition-colors duration-150 hover:bg-secondary/85 dark:bg-accent dark:text-secondary dark:hover:bg-accent/85">
            <span>Growth Program</span>
            <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
