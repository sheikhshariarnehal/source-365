'use client';

import React from 'react';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { IconType } from 'react-icons';
import {
  PiGlobe,
  PiLightning,
  PiDeviceMobile,
  PiPulse,
  PiShieldCheck,
  PiMagnifyingGlass,
  PiPalette,
  PiSquaresFour,
  PiArrowRight,
} from 'react-icons/pi';

interface ServiceItem {
  title: string;
  desc: string;
  href: string;
  icon: IconType;
}

const services: ServiceItem[] = [
  {
    title: 'Web Development',
    desc: 'Custom web applications, portals & SaaS platforms',
    href: '/services/web-development',
    icon: PiGlobe,
  },
  {
    title: 'Facebook & Meta Boosting',
    desc: 'High-ROI paid campaigns & audience scaling',
    href: '/services/facebook-boosting',
    icon: PiLightning,
  },
  {
    title: 'Mobile App Development',
    desc: 'Native iOS & Android mobile applications',
    href: '/services/app-development',
    icon: PiDeviceMobile,
  },
  {
    title: 'Server-Side Tracking',
    desc: 'Meta CAPI, GA4 & precision conversion tracking',
    href: '/services/server-side-tracking',
    icon: PiPulse,
  },
  {
    title: 'Software QA & Testing',
    desc: 'Automated test suites & software reliability',
    href: '/services/sqa',
    icon: PiShieldCheck,
  },
  {
    title: 'SEO & Search Visibility',
    desc: 'Technical site audits, backlinks & top rankings',
    href: '/services/seo',
    icon: PiMagnifyingGlass,
  },
  {
    title: 'UI/UX & Brand Design',
    desc: 'Product design systems, UI & visual branding',
    href: '/services/graphics-design',
    icon: PiPalette,
  },
  {
    title: 'All IT Services Directory',
    desc: 'Explore our complete suite of capabilities',
    href: '/services',
    icon: PiSquaresFour,
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
  const isOpen = menuDropdownId === 'services-mega-menu';

  return (
    <div>
      {/* Hover bridge */}
      <div
        className={cn(
          'dropdown-menu-bridge pointer-events-none absolute top-full left-[-16px] z-40 h-5 w-[700px] bg-transparent',
          isOpen ? '!pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />

      {/* Clarified Menu Dropdown */}
      <div
        id="services-mega-menu"
        style={{ left: '-16px' }}
        className={cn(
          'dropdown-menu pointer-events-none absolute top-full z-50 mt-2 w-[700px] rounded-2xl border border-stroke-1 bg-white p-4 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] transition-all duration-200 ease-out dark:border-stroke-6 dark:bg-[#0e1219] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.06)] opacity-0',
          isOpen
            ? '!pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-1.5 opacity-0',
        )}>
        {/* 2-Column Clean Services Grid */}
        <div className="grid grid-cols-2 gap-1.5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                onClick={handleClose}
                className="group flex items-center gap-3 rounded-xl p-2.5 transition-colors duration-150 hover:bg-slate-100/70 dark:hover:bg-white/[0.04]">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-slate-200/80 bg-slate-50 text-secondary/70 shadow-2xs transition-colors duration-200 group-hover:border-primary-200 group-hover:bg-primary-50 group-hover:text-primary-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-accent/70 dark:group-hover:border-primary-500/30 dark:group-hover:bg-primary-500/10 dark:group-hover:text-primary-400">
                  <Icon size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block truncate text-[13.5px] font-medium text-secondary/90 transition-colors group-hover:text-primary-600 dark:text-accent/90 dark:group-hover:text-primary-400">
                    {service.title}
                  </span>
                  <p className="mt-0.5 truncate text-[11.5px] text-secondary/50 dark:text-accent/50">
                    {service.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Quiet Bottom Strip */}
        <div className="mt-2.5 flex items-center justify-between border-t border-stroke-1/70 px-2 pt-3 text-[11.5px] dark:border-stroke-6/70">
          <span className="text-secondary/55 dark:text-accent/55">
            Need a custom enterprise scope or dedicated team?
          </span>
          <Link
            href="/contact-us"
            onClick={handleClose}
            className="group inline-flex items-center gap-1 font-medium text-secondary/80 transition-colors hover:text-primary-600 dark:text-accent/80 dark:hover:text-primary-400">
            <span>Speak with an Architect</span>
            <PiArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}




