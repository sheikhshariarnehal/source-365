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
        <div className="text-center max-w-[680px] mx-auto mb-10 space-y-3">
          <RevealAnimation delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1 text-xs font-semibold text-red-600 dark:text-red-400">
              <span>Verified Track Record</span>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 md:text-heading-3 font-bold text-secondary dark:text-accent">
              Results that build long-term business equity.
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
