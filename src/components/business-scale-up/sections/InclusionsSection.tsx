'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import {
  Activity,
  Layers,
  CalendarCheck2,
  Wallet,
  Megaphone,
  PlayCircle,
  Users,
  TrendingUp,
  UserCheck,
  Sliders,
  BarChart3,
  FilePenLine,
  CheckCircle2,
  XCircle,
  Rocket,
  Clock,
} from 'lucide-react';

const distilledDeliverables = [
  {
    step: '01',
    title: 'Web & Page Health Analysis',
    desc: 'Review website and page performance to fix conversion friction.',
    icon: Activity,
    plan1Mo: 'Initial Audit',
    plan3Mo: 'Audit + Monthly Re-checks',
    plan6Mo: 'Continuous Optimization',
  },
  {
    step: '02',
    title: 'Platform Allocation',
    desc: 'Set up and optimize your key digital advertising platforms.',
    icon: Layers,
    plan1Mo: 'Meta (FB & IG)',
    plan3Mo: 'Meta + Google Ads',
    plan6Mo: 'Full Omnichannel',
  },
  {
    step: '03',
    title: 'Tailored Strategy & Calendar',
    desc: 'A clear commercial strategy and monthly content roadmap.',
    icon: CalendarCheck2,
    plan1Mo: '1 Month Plan',
    plan3Mo: '3 Months Scale Roadmap',
    plan6Mo: '6 Months Brand Strategy',
  },
  {
    step: '04',
    title: 'Budget Allocation',
    desc: 'Plan and allocate campaign ad budgets around your ROAS goals.',
    icon: Wallet,
    plan1Mo: 'Budget Pacing',
    plan3Mo: 'ROAS & CAC Modeling',
    plan6Mo: 'Dynamic Multi-Channel Scale',
  },
  {
    step: '05',
    title: 'Media Management',
    desc: 'Manage your brand’s digital media presence and visual standards.',
    icon: Megaphone,
    plan1Mo: 'Core Ad Media',
    plan3Mo: 'Full Multi-Channel Media',
    plan6Mo: '360° Omnichannel Authority',
  },
  {
    step: '06',
    title: 'Ads Run',
    desc: 'Launch laser-targeted advertising campaigns to qualified buyers.',
    icon: PlayCircle,
    plan1Mo: 'Targeted Campaigns',
    plan3Mo: 'Multi-Audience Funnels',
    plan6Mo: 'Advanced Retargeting & LTV',
  },
  {
    step: '07',
    title: 'Monthly Strategy Meeting',
    desc: 'Review historical performance and align on next scaling steps.',
    icon: Users,
    plan1Mo: '1 Monthly Review',
    plan3Mo: 'Monthly + Bi-Weekly Syncs',
    plan6Mo: 'Weekly & Monthly Executive Syncs',
  },
  {
    step: '08',
    title: 'Continuous Ads Monitoring',
    desc: 'Track live campaign performance to prevent ad fatigue.',
    icon: TrendingUp,
    plan1Mo: 'Daily Health Checks',
    plan3Mo: '24/7 Anomaly Tracking',
    plan6Mo: 'Dedicated Real-Time Oversight',
  },
  {
    step: '09',
    title: 'Expert Marketing Manager',
    desc: 'Dedicated marketing manager assigned with 1-on-1 accountability.',
    icon: UserCheck,
    plan1Mo: 'Assigned Manager',
    plan3Mo: 'Dedicated Manager + Direct Line',
    plan6Mo: 'Senior Growth Director Direct',
  },
  {
    step: '10',
    title: 'Continuous Ads Optimize',
    desc: 'Refine copy, creative variants, and audience bids for higher returns.',
    icon: Sliders,
    plan1Mo: 'Weekly Optimizations',
    plan3Mo: 'Continuous A/B Testing',
    plan6Mo: 'Algorithmic Bid Scaling',
  },
  {
    step: '11',
    title: 'Competitor Analysis',
    desc: 'Analyze competitor offers and shape your market positioning.',
    icon: BarChart3,
    plan1Mo: 'Initial Benchmark',
    plan3Mo: 'Deep Ad Intelligence',
    plan6Mo: 'Market Share Conquest',
  },
  {
    step: '12',
    title: 'High-Converting Copywriting',
    desc: 'Clear, persuasive copy crafted for your brand and campaigns.',
    icon: FilePenLine,
    plan1Mo: 'Ad Copywriting',
    plan3Mo: 'Ad Copy + Video Hooks',
    plan6Mo: 'Full-Funnel Sales Copywriting',
  },
  {
    step: 'P1',
    title: 'ADS KILL Protocol',
    desc: 'Pause underperforming ads fast to eliminate wasted budget.',
    icon: XCircle,
    plan1Mo: '48h Cutoff Rule',
    plan3Mo: '24h Strict Protection Cutoff',
    plan6Mo: 'Proactive Auto & Manual Kill',
  },
  {
    step: 'P2',
    title: 'ADS SCALE Protocol',
    desc: 'Scale winning high-ROAS campaigns aggressively for maximum profit.',
    icon: Rocket,
    plan1Mo: 'Standard Scaling',
    plan3Mo: 'Aggressive Budget & ROAS Scale',
    plan6Mo: 'Multi-Funnel Omnichannel Scale',
  },
  {
    step: 'P3',
    title: 'Daily & Monthly Reporting',
    desc: 'Transparent performance metrics delivered directly to your chat.',
    icon: Clock,
    plan1Mo: 'Daily WhatsApp Updates',
    plan3Mo: 'Daily Briefs + Weekly Reports',
    plan6Mo: 'Real-Time Dashboard + Reports',
  },
];

export default function InclusionsSection() {
  return (
    <section className="py-20 md:py-24" id="whats-included">
      <div className="main-container">
        {/* Distilled Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-12 space-y-3">
          <RevealAnimation delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full border border-stroke-2 dark:border-stroke-6 bg-background-2 dark:bg-background-8 px-4 py-1 text-xs font-medium text-secondary/80 dark:text-accent/80">
              <span>Official Deliverables</span>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-3 md:text-heading-2 font-semibold text-secondary dark:text-accent">
              What&apos;s Included in Business Scale-UP?
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="text-secondary/70 dark:text-accent/70 text-base leading-relaxed font-normal">
              Every deliverable from our official service blueprint, itemized across timeline tiers.
            </p>
          </RevealAnimation>
        </div>

        {/* Quiet Deliverables Table */}
        <RevealAnimation delay={0.2}>
          <div className="rounded-lg border border-stroke-2 dark:border-stroke-6 bg-white dark:bg-background-7 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[760px]">
                {/* Clean Table Header */}
                <thead>
                  <tr className="border-b border-stroke-2 dark:border-stroke-6 bg-background-2 dark:bg-background-8 text-secondary dark:text-accent">
                    <th className="py-4 px-6 font-semibold text-xs uppercase tracking-wider text-secondary/70 dark:text-accent/70 w-[46%] border-r border-stroke-2 dark:border-stroke-6">
                      Deliverable &amp; Scope
                    </th>
                    <th className="py-4 px-4 font-semibold text-xs text-center w-[18%] border-r border-stroke-2 dark:border-stroke-6">
                      <span className="block font-bold text-sm text-secondary dark:text-accent">1 MONTH</span>
                      <span className="text-[11px] font-normal text-secondary/60 dark:text-accent/60">৳15,000/Mo</span>
                    </th>
                    <th className="py-4 px-4 font-semibold text-xs text-center w-[18%] bg-red-500/[0.03] dark:bg-red-500/[0.06] border-r border-stroke-2 dark:border-stroke-6">
                      <span className="block font-bold text-sm text-secondary dark:text-accent">3 MONTHS</span>
                      <span className="text-[11px] font-medium text-red-600 dark:text-red-400">৳42,000 Total</span>
                    </th>
                    <th className="py-4 px-4 font-semibold text-xs text-center w-[18%]">
                      <span className="block font-bold text-sm text-secondary dark:text-accent">6 MONTHS</span>
                      <span className="text-[11px] font-normal text-secondary/60 dark:text-accent/60">৳85,000 Total</span>
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-stroke-2 dark:divide-stroke-6 text-sm">
                  {distilledDeliverables.map((item) => {
                    const Icon = item.icon;
                    return (
                      <tr
                        key={item.title}
                        className="hover:bg-background-1 dark:hover:bg-background-6/50 transition-colors">
                        {/* Title and Short Description */}
                        <td className="py-3.5 px-6 border-r border-stroke-2 dark:border-stroke-6 bg-background-2 dark:bg-background-8">
                          <div className="flex items-center gap-3">
                            <div className="flex size-7.5 shrink-0 items-center justify-center rounded-md bg-white dark:bg-background-7 border border-stroke-2 dark:border-stroke-6 text-secondary dark:text-accent shadow-2xs">
                              <Icon className="size-3.5" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold text-secondary/40 dark:text-accent/40">
                                  {item.step}
                                </span>
                                <h4 className="font-semibold text-xs md:text-sm text-secondary dark:text-accent">
                                  {item.title}
                                </h4>
                              </div>
                              <p className="text-xs text-secondary/60 dark:text-accent/60 leading-tight mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* 1 Month */}
                        <td className="py-3.5 px-4 text-center text-xs text-secondary/75 dark:text-accent/75 font-normal border-r border-stroke-2 dark:border-stroke-6">
                          {item.plan1Mo}
                        </td>

                        {/* 3 Months Featured */}
                        <td className="py-3.5 px-4 text-center text-xs bg-red-500/[0.02] dark:bg-red-500/[0.05] border-r border-stroke-2 dark:border-stroke-6 font-medium text-secondary dark:text-accent">
                          <div className="flex items-center justify-center gap-1.5">
                            <CheckCircle2 className="size-3.5 text-red-500 shrink-0" />
                            <span>{item.plan3Mo}</span>
                          </div>
                        </td>

                        {/* 6 Months */}
                        <td className="py-3.5 px-4 text-center text-xs text-secondary/75 dark:text-accent/75 font-normal">
                          {item.plan6Mo}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
