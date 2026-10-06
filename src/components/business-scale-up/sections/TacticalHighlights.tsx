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
    <section className="py-12 bg-background-2 dark:bg-background-8 border-y border-stroke-2 dark:border-stroke-6">
      <div className="main-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <RevealAnimation key={item.title} delay={0.06 * (idx + 1)}>
                <div className="group rounded-2xl border border-stroke-2 dark:border-stroke-6 bg-white dark:bg-background-7 p-5 shadow-xs hover:shadow-md hover:border-stroke-1 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="size-9 rounded-xl bg-secondary/5 dark:bg-accent/5 text-secondary dark:text-accent flex items-center justify-center group-hover:text-red-500 transition-colors">
                        <Icon className="size-4.5" />
                      </div>
                      <span className="text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-md bg-background-2 dark:bg-background-8 border border-stroke-2 dark:border-stroke-6 text-secondary/60 dark:text-accent/60">
                        Protocol
                      </span>
                    </div>
                    <h3 className="font-semibold text-sm text-secondary dark:text-accent tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-[11px] font-medium text-secondary/50 dark:text-accent/50 mt-0.5">
                      {item.tagline}
                    </p>
                    <p className="text-xs text-secondary/65 dark:text-accent/65 mt-2.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
