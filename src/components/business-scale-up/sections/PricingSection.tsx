'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

const pricingPlans = [
  {
    duration: '1 MONTH',
    price: '৳15,000',
    unit: 'PER MONTH',
    badge: null,
    savingsBadge: null,
    isPopular: false,
    summary: 'Ideal for channel validation, technical health audit, and launching an agile ad engine.',
    buttonText: 'Start 1-Month Validation',
    features: [
      'Website & page health performance audit',
      'Targeted ad campaign setup & launch',
      'Daily continuous ad monitoring',
      'Ads Kill & Ads Scale protocol',
      'Daily performance updates on WhatsApp',
      'Dedicated Marketing Manager assigned',
      '1 Monthly strategic review meeting',
    ],
    waMessage: 'Hello Source 365, I want to start the 1 Month (৳15,000) Business Scale-UP validation plan.',
  },
  {
    duration: '3 MONTHS',
    price: '৳42,000',
    unit: 'TOTAL PACKAGE',
    badge: 'MOST POPULAR',
    savingsBadge: 'Save ৳3,000',
    isPopular: true,
    summary: 'The proven growth cycle to optimize conversion funnels, lower CAC, and scale reliable monthly revenue.',
    buttonText: 'Claim 3-Month Scale-UP Package',
    features: [
      'Everything included in the 1 Month plan',
      'Tailored commercial strategy + monthly content calendar',
      'Comprehensive competitor ad intelligence analysis',
      'Multi-platform allocation (Meta + Google / TikTok)',
      'High-converting commercial copywriting & hooks',
      'Weekly performance briefs & monthly strategy meetings',
      'Continuous A/B testing & aggressive budget scaling',
    ],
    waMessage: 'Hello Source 365, I want to scale my business with the 3 Months (৳42,000) Business Scale-UP package.',
  },
  {
    duration: '6 MONTHS',
    price: '৳85,000',
    unit: 'TOTAL PACKAGE',
    badge: 'BEST VALUE',
    savingsBadge: 'Save ৳5,000',
    isPopular: false,
    summary: 'Long-term sustainable market dominance, omnichannel brand authority, and compounding sales growth.',
    buttonText: 'Select 6-Month Enterprise Plan',
    features: [
      'Everything included in the 3 Months plan',
      'End-to-end multi-channel growth architecture',
      'Omnichannel digital media management',
      'Advanced retargeting funnels & LTV optimization',
      'Senior Growth Director direct oversight',
      'Priority VIP hotline & WhatsApp communication',
      'Executive quarterly roadmap & milestone reviews',
    ],
    waMessage: 'Hello Source 365, I want full market dominance with the 6 Months (৳85,000) Business Scale-UP package.',
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 md:py-24" id="pricing-plans">
      <div className="main-container">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-14 space-y-3">
          <RevealAnimation delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full border border-stroke-2 dark:border-stroke-6 bg-background-2 dark:bg-background-8 px-4 py-1 text-xs font-medium text-secondary/80 dark:text-accent/80">
              <Sparkles className="size-3.5 text-secondary/50 dark:text-accent/50" />
              <span>Transparent Investment</span>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-3 md:text-heading-2 font-semibold text-secondary dark:text-accent">
              Business Scale-UP Pricing Plans
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/70 dark:text-accent/70 text-base leading-relaxed font-normal">
              Fixed-fee management packages without hidden costs. Pick the timeline tailored to your growth goals.
            </p>
          </RevealAnimation>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch pt-2">
          {pricingPlans.map((plan, index) => {
            return (
              <RevealAnimation key={plan.duration} delay={0.08 * (index + 1)}>
                <div
                  className={`relative rounded-3xl p-8 flex flex-col justify-between h-full transition-all duration-300 ${
                    plan.isPopular
                      ? 'border border-red-500/50 bg-white dark:bg-background-7 shadow-lg'
                      : 'border border-stroke-2 dark:border-stroke-6 bg-white dark:bg-background-7 shadow-xs hover:border-stroke-1'
                  }`}>
                  {/* Top Badge for Featured Tier */}
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-secondary text-accent dark:bg-white dark:text-secondary px-3.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider shadow-xs flex items-center gap-1">
                      <span>{plan.badge}</span>
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* Header info */}
                    <div className="border-b border-stroke-2 dark:border-stroke-6 pb-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-secondary dark:text-accent tracking-wide">
                          {plan.duration}
                        </h3>
                        {plan.savingsBadge && (
                          <span className="rounded-md bg-background-2 dark:bg-background-8 border border-stroke-2 dark:border-stroke-6 px-2.5 py-0.5 text-[11px] font-medium text-secondary/75 dark:text-accent/75">
                            {plan.savingsBadge}
                          </span>
                        )}
                      </div>

                      <div className="mt-4 flex items-baseline gap-2">
                        <span className={`text-4xl font-bold tracking-tight ${plan.isPopular ? 'text-red-600 dark:text-red-400' : 'text-secondary dark:text-accent'}`}>
                          {plan.price}
                        </span>
                        <span className="text-[11px] font-medium text-secondary/55 dark:text-accent/55 uppercase">
                          {plan.unit}
                        </span>
                      </div>

                      <p className="text-xs text-secondary/65 dark:text-accent/65 mt-2.5 leading-relaxed">
                        {plan.summary}
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="space-y-3 pt-1">
                      <p className="text-[10px] font-semibold text-secondary/45 dark:text-accent/45 uppercase tracking-wider">
                        Included deliverables:
                      </p>
                      <ul className="space-y-2.5">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5 text-xs text-secondary/75 dark:text-accent/75">
                            <CheckCircle2 className="size-3.5 text-secondary/50 dark:text-accent/50 shrink-0 mt-0.5" />
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="pt-7">
                    {plan.isPopular ? (
                      <a
                        href={`https://wa.me/8801408185323?text=${encodeURIComponent(plan.waMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn w-full btn-md font-semibold shadow-sm bg-red-600 hover:bg-red-700 text-white border-red-700 flex items-center justify-center gap-2 group">
                        <span>{plan.buttonText}</span>
                        <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ) : (
                      <a
                        href={`https://wa.me/8801408185323?text=${encodeURIComponent(plan.waMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn w-full btn-md font-medium shadow-xs btn-secondary dark:btn-accent hover:btn-white dark:hover:btn-white-dark flex items-center justify-center gap-2">
                        <span>{plan.buttonText}</span>
                      </a>
                    )}
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
