'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { XCircle, Rocket, Clock, CalendarDays } from 'lucide-react';

const highlights = [
  {
    title: 'ADS KILL',
    tagline: 'Budget Protection Rule',
    desc: 'Underperforming ads are paused within 24–48 hours to prevent wasted ad spend.',
    icon: XCircle,
  },
  {
    title: 'ADS SCALE',
    tagline: 'Revenue Expansion',
    desc: 'High-converting, profitable ad campaigns are systematically scaled to maximize return.',
    icon: Rocket,
  },
  {
    title: 'DAILY REPORTING',
    tagline: 'Real-Time Visibility',
    desc: 'Daily campaign updates, spend metrics, and lead counts sent directly to your WhatsApp group.',
    icon: Clock,
  },
  {
    title: 'WEEKLY & MONTHLY REPORTING',
    tagline: 'Strategic Reviews',
    desc: 'Structured ROI breakdowns, CAC analysis, and future roadmap planning with your team.',
    icon: CalendarDays,
  },
];

export default function TacticalHighlights() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {highlights.map((item, idx) => {
        const Icon = item.icon;
        return (
          <RevealAnimation key={item.title} delay={0.08 * (idx + 1)}>
            <div className="group rounded-xl border border-stroke-2 dark:border-stroke-6 bg-white dark:bg-background-7 p-6 shadow-xs hover:shadow-md hover:border-stroke-1 transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="size-10 rounded-full bg-secondary/5 dark:bg-accent/5 text-secondary dark:text-accent flex items-center justify-center group-hover:text-[#E11D48] transition-colors">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-[11px] font-medium tracking-wide px-2.5 py-0.5 rounded-md bg-background-2 dark:bg-background-8 border border-stroke-2 dark:border-stroke-6 text-secondary/60 dark:text-accent/60">
                    Protocol
                  </span>
                </div>
                <h3 className="font-bold text-sm text-secondary dark:text-accent tracking-wider uppercase">
                  {item.title}
                </h3>
                <p className="text-xs font-normal text-secondary/50 dark:text-accent/50 mt-1">
                  {item.tagline}
                </p>
                <p className="text-xs text-secondary/65 dark:text-accent/65 mt-3.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          </RevealAnimation>
        );
      })}
    </div>
  );
}
