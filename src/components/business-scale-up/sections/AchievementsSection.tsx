'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import OurAchievements from '@/components/shared/OurAchievements';
import { Rocket, TrendingUp, Calendar, HeartHandshake } from 'lucide-react';

const scaleAchievements = [
  {
    id: '1',
    icon: Rocket,
    number: 140,
    suffix: '+',
    label: 'Campaigns Scaled',
    bgColor: 'bg-red-500/20 text-red-500',
  },
  {
    id: '2',
    icon: TrendingUp,
    number: 4,
    suffix: '.5x',
    label: 'Avg. Return on Ad Spend',
    bgColor: 'bg-emerald-500/20 text-emerald-500',
  },
  {
    id: '3',
    icon: Calendar,
    number: 365,
    suffix: ' Days',
    label: 'Active Dedicated Support',
    bgColor: 'bg-cyan-500/20 text-cyan-500',
  },
  {
    id: '4',
    icon: HeartHandshake,
    number: 98,
    suffix: '%',
    label: 'Client Retention Rate',
    bgColor: 'bg-amber-500/20 text-amber-500',
  },
];

export default function AchievementsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="main-container">
        <div className="text-center max-w-[760px] mx-auto mb-10 md:mb-12 space-y-4">
          <RevealAnimation delay={0.1}>
            <div className="inline-flex items-center justify-center rounded-full border border-stroke-2 dark:border-stroke-6 bg-white/70 dark:bg-background-7/70 backdrop-blur-xs px-4.5 py-1.5 text-xs md:text-sm font-normal text-secondary/80 dark:text-accent/80 shadow-2xs">
              <span>Proven Track Record</span>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-secondary dark:text-accent tracking-tight leading-[1.14] max-w-[700px] mx-auto">
              Results That Build Long-Term
              <br />
              Business Equity
            </h2>
          </RevealAnimation>
        </div>

        <OurAchievements
          achievements={scaleAchievements}
          defaultClassName="bg-white dark:bg-background-7 border border-stroke-2 dark:border-stroke-6 rounded-3xl py-4 shadow-sm"
        />
      </div>
    </section>
  );
}
