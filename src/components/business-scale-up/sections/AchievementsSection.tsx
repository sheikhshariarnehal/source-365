'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import { Rocket, TrendingUp, Calendar, HeartHandshake } from 'lucide-react';

const scaleAchievements = [
  {
    id: '1',
    icon: Rocket,
    number: '140+',
    label: 'Campaigns Scaled',
    sublabel: 'Across Meta & Google',
  },
  {
    id: '2',
    icon: TrendingUp,
    number: '4.5x',
    label: 'Avg. Ad Return (ROAS)',
    sublabel: 'Proven growth multiplier',
  },
  {
    id: '3',
    icon: Calendar,
    number: '365',
    suffix: ' Days',
    label: 'Dedicated Support',
    sublabel: 'Active continuous supervision',
  },
  {
    id: '4',
    icon: HeartHandshake,
    number: '98%',
    label: 'Client Retention Rate',
    sublabel: 'Long-term business equity',
  },
];

export default function AchievementsSection() {
  return (
    <section className="py-16 md:py-20 bg-transparent">
      <div className="main-container">
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-10 md:mb-12 space-y-4">
          <RevealAnimation delay={0.1}>
            <div className="inline-flex items-center justify-center rounded-full border border-stroke-2 dark:border-stroke-6 bg-white/70 dark:bg-background-7/70 backdrop-blur-xs px-4 py-1 text-xs md:text-sm font-normal text-secondary/75 dark:text-accent/75 shadow-2xs">
              <span>Proven Track Record</span>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-secondary dark:text-accent tracking-tight leading-[1.14] max-w-[680px] mx-auto text-balance">
              Results That Build Long-Term
              <br />
              Business Equity
            </h2>
          </RevealAnimation>
        </div>

        {/* Polished, Quiet Metrics Grid Card */}
        <RevealAnimation delay={0.3}>
          <div className="rounded-[24px] sm:rounded-[28px] bg-white dark:bg-background-7 border border-stroke-2/80 dark:border-stroke-6 shadow-xs overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-stroke-2/70 dark:divide-stroke-6/60">
              {scaleAchievements.map((item) => (
                <div
                  key={item.id}
                  className="group relative flex flex-col items-center text-center p-6 sm:p-7 lg:p-9 transition-colors duration-300 hover:bg-black/[0.015] dark:hover:bg-white/[0.015]">
                  {/* Subtle, Unified Icon Container */}
                  <div className="size-12 rounded-xl flex items-center justify-center mb-4.5 bg-secondary/[0.04] text-secondary/70 dark:bg-white/[0.06] dark:text-accent/80 transition-all duration-300 group-hover:bg-secondary/[0.08] dark:group-hover:bg-white/[0.1]">
                    <item.icon className="size-5" />
                  </div>

                  {/* Number Stat */}
                  <div className="flex items-baseline justify-center text-3xl sm:text-4xl lg:text-[38px] font-bold text-secondary dark:text-accent tracking-tight leading-none mb-2">
                    <span>{item.number}</span>
                    {item.suffix && <span className="text-lg sm:text-xl font-medium ml-1 text-secondary/70 dark:text-accent/70">{item.suffix}</span>}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-sm sm:text-base font-semibold text-secondary dark:text-accent mb-1 tracking-tight">
                    {item.label}
                  </h3>
                  <p className="text-xs text-secondary/60 dark:text-accent/60 font-normal leading-relaxed">
                    {item.sublabel}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
