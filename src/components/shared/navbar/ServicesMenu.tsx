'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';

interface ServiceItem {
  title: string;
  desc: string;
  href: string;
  badge?: string;
  iconSvg: string;
}

const servicesList: ServiceItem[] = [
  {
    title: 'Facebook Boosting Service',
    desc: 'Targeted reach, audience optimization & ROI boost',
    href: '/services#boosting',
    iconSvg: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Growth Program',
    desc: 'End-to-end branding, calendar & Key Account Manager',
    href: '/growth-program',
    badge: 'Popular',
    iconSvg: 'M16 6l4 14H4L8 6h8zm-4 4v6m-3-3h6',
  },
  {
    title: 'Web Development',
    desc: 'Modern, high-speed responsive custom web solutions',
    href: '/services#web-development',
    iconSvg: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    title: 'App Development',
    desc: 'Tailored iOS & Android mobile application engineering',
    href: '/services#app-development',
    iconSvg: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  },
  {
    title: 'SEO (Search Optimization)',
    desc: 'Keyword ranking, technical audits & search visibility',
    href: '/services#seo',
    iconSvg: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  },
  {
    title: 'SQA (Software QA)',
    desc: 'Rigorous automated and manual software reliability testing',
    href: '/services#sqa',
    iconSvg: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Server-Side Tracking',
    desc: 'Accurate event attribution & conversion measurement',
    href: '/services#tracking',
    badge: 'Advanced',
    iconSvg: 'M5 12h14M12 5l7 7-7 7',
  },
  {
    title: 'Graphics Design',
    desc: 'High-impact creative branding and social marketing assets',
    href: '/services#graphics',
    iconSvg: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
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
      <div
        className={cn(
          'dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[760px] -translate-x-1/2 bg-transparent',
          menuDropdownId === 'services-mega-menu' ? '!pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="services-mega-menu"
        className={cn(
          'dropdown-menu dark:bg-background-8 border-stroke-1 dark:border-background-7 pointer-events-none absolute top-full left-1/2 z-50 mt-2 w-full -translate-x-1/2 rounded-[24px] border bg-white p-6 shadow-2xl opacity-0 transition-all duration-300 md:w-[760px]',
          menuDropdownId === 'services-mega-menu'
            ? '!pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        <div className="mb-4 flex items-center justify-between border-b border-stroke-1 dark:border-stroke-6 pb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary/60 dark:text-accent/60">
            Source 365 Professional IT Services
          </span>
          <Link
            href="/services"
            onClick={handleClose}
            className="text-xs font-medium text-primary-500 hover:underline">
            View All Services →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {servicesList.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              onClick={handleClose}
              className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-background-2 dark:hover:bg-background-6">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-500/10 text-primary-500 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={service.iconSvg} />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-medium text-secondary dark:text-accent group-hover:text-primary-500 transition-colors">
                    {service.title}
                  </h4>
                  {service.badge && (
                    <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-[10px] font-semibold text-cyan-600 dark:text-cyan-400">
                      {service.badge}
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-xs text-secondary/60 dark:text-accent/60 line-clamp-1">
                  {service.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-4 rounded-xl bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-transparent p-3.5 border border-cyan-500/20 flex items-center justify-between">
          <div className="space-y-0.5">
            <p className="text-xs font-bold text-secondary dark:text-accent">
              Ready to scale your business end-to-end?
            </p>
            <p className="text-[11px] text-secondary/60 dark:text-accent/60">
              Get an assigned Key Account Manager & structured performance tracking.
            </p>
          </div>
          <Link
            href="/growth-program"
            onClick={handleClose}
            className="rounded-full bg-secondary dark:bg-accent text-white dark:text-secondary px-3.5 py-1.5 text-xs font-semibold hover:opacity-90 transition-opacity">
            Growth Program
          </Link>
        </div>
      </div>
    </div>
  );
}
