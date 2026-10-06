'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { CheckCircle2 } from 'lucide-react';

const pricingPlans = [
  {
    duration: '1 MONTH',
    originalPrice: null,
    price: '৳15,000',
    unit: '/mo',
    badge: null,
    savingsBadge: null,
    isPopular: false,
    summary: 'Ideal for channel validation, technical health audit, and launching an agile ad engine.',
    buttonText: 'Choose plan',
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
    originalPrice: '৳45,000',
    price: '৳42,000',
    unit: 'total',
    badge: 'MOST POPULAR',
    savingsBadge: 'Save ৳3,000',
    isPopular: true,
    summary: 'The proven growth cycle to optimize conversion funnels, lower CAC, and scale reliable revenue.',
    buttonText: 'Choose plan',
    features: [
      'Everything included in the 1 Month plan',
      'Tailored commercial strategy & calendar',
      'Competitor ad intelligence analysis',
      'Multi-platform allocation (Meta + Google)',
      'High-converting commercial copywriting',
      'Weekly performance briefs & syncs',
      'Continuous A/B testing & budget scaling',
    ],
    waMessage: 'Hello Source 365, I want to scale my business with the 3 Months (৳42,000) Business Scale-UP package.',
  },
  {
    duration: '6 MONTHS',
    originalPrice: '৳90,000',
    price: '৳85,000',
    unit: 'total',
    badge: 'BEST VALUE',
    savingsBadge: 'Save ৳5,000',
    isPopular: false,
    summary: 'Long-term sustainable market dominance, omnichannel brand authority, and compounding sales growth.',
    buttonText: 'Choose plan',
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
        {/* Impeccable Typeset Section Header */}
        <div className="text-center max-w-[760px] mx-auto mb-10 md:mb-12 space-y-4">
          <RevealAnimation delay={0.1}>
            <div className="inline-flex items-center justify-center rounded-full border border-stroke-2 dark:border-stroke-6 bg-white/70 dark:bg-background-7/70 backdrop-blur-xs px-4.5 py-1.5 text-xs md:text-sm font-normal text-secondary/80 dark:text-accent/80 shadow-2xs">
              <span>Transparent Investment</span>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] font-bold text-secondary dark:text-accent tracking-tight leading-[1.12] max-w-[680px] mx-auto">
              Business Scale-UP
              <br />
              Pricing Plans
            </h2>
          </RevealAnimation>
        </div>

        {/* 3 Pricing Cards matching reference layout with bottom alignment & top protruding banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-end pt-8">
          {pricingPlans.map((plan, index) => {
            return (
              <RevealAnimation key={plan.duration} delay={0.08 * (index + 1)}>
                {plan.isPopular ? (
                  /* Featured Card with top banner protruding above */
                  <div className="relative rounded-[26px] bg-[#E11D48] p-[2px] shadow-xs transition-all duration-300">
                    {/* Top Popular Banner */}
                    <div className="py-2.5 px-4 text-center">
                      <span className="text-xs font-black uppercase tracking-wider text-white">
                        {plan.badge}
                      </span>
                    </div>

                    {/* Inner Card Container */}
                    <div className="bg-white dark:bg-background-7 rounded-[24px] p-6 sm:p-8">
                      {/* Top Row: Plan Title & Savings Pill */}
                      <div className="h-8 flex items-center justify-between gap-2">
                        <h3 className="text-xl font-bold text-secondary dark:text-accent tracking-tight">
                          {plan.duration}
                        </h3>
                        {plan.savingsBadge && (
                          <span className="rounded-full bg-background-2 dark:bg-background-8 border border-stroke-2 dark:border-stroke-6 px-3 py-1 text-xs font-semibold text-secondary/80 dark:text-accent/80 shadow-2xs">
                            {plan.savingsBadge}
                          </span>
                        )}
                      </div>

                      {/* Pricing block with aligned vertical baseline */}
                      <div className="mt-4">
                        <div className="h-5 flex items-center">
                          {plan.originalPrice ? (
                            <span className="text-sm font-medium text-secondary/40 dark:text-accent/40 line-through">
                              {plan.originalPrice}
                            </span>
                          ) : (
                            <span className="text-xs text-transparent select-none" aria-hidden="true">
                              &nbsp;
                            </span>
                          )}
                        </div>
                        <div className="flex items-baseline gap-1.5 mt-0.5">
                          <span className="text-4xl sm:text-[42px] font-black tracking-tight text-[#E11D48] dark:text-[#F43F5E]">
                            {plan.price}
                          </span>
                          <span className="text-xs sm:text-sm font-medium text-secondary/55 dark:text-accent/55 lowercase">
                            {plan.unit}
                          </span>
                        </div>
                      </div>

                      {/* Action CTA Button placed right below price */}
                      <div className="mt-6">
                        <a
                          href={`https://wa.me/8801408185323?text=${encodeURIComponent(plan.waMessage)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn w-full h-12 rounded-xl font-semibold text-sm flex items-center justify-center transition-all duration-300 shadow-2xs bg-[#E11D48] hover:bg-[#BE123C] text-white border-transparent">
                          <span>{plan.buttonText}</span>
                        </a>
                      </div>

                      {/* Summary Note right under button */}
                      <p className="min-h-[36px] text-xs text-secondary/65 dark:text-accent/65 mt-3 leading-relaxed">
                        {plan.summary}
                      </p>

                      {/* Divider */}
                      <div className="w-full h-px bg-stroke-2 dark:bg-stroke-6 my-6" />

                      {/* Deliverables / Features List */}
                      <div className="space-y-3">
                        <p className="text-[11px] font-semibold text-secondary/50 dark:text-accent/50 uppercase tracking-wider">
                          Included deliverables:
                        </p>
                        <ul className="space-y-2.5">
                          {plan.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2.5 text-xs text-secondary/80 dark:text-accent/80 font-normal">
                              <CheckCircle2 className="size-4 text-secondary/60 dark:text-accent/60 shrink-0 mt-0.5" />
                              <span className="leading-snug">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Standard Card */
                  <div className="relative rounded-3xl border border-stroke-2 dark:border-stroke-6 bg-white dark:bg-background-7 p-6 sm:p-8 shadow-xs hover:border-stroke-1 transition-all duration-300">
                    {/* Top Row: Plan Title & Savings Pill */}
                    <div className="h-8 flex items-center justify-between gap-2">
                      <h3 className="text-xl font-bold text-secondary dark:text-accent tracking-tight">
                        {plan.duration}
                      </h3>
                      {plan.savingsBadge ? (
                        <span className="rounded-full bg-background-2 dark:bg-background-8 border border-stroke-2 dark:border-stroke-6 px-3 py-1 text-xs font-semibold text-secondary/80 dark:text-accent/80 shadow-2xs">
                          {plan.savingsBadge}
                        </span>
                      ) : (
                        <div className="h-6" aria-hidden="true" />
                      )}
                    </div>

                    {/* Pricing block with aligned vertical baseline */}
                    <div className="mt-4">
                      <div className="h-5 flex items-center">
                        {plan.originalPrice ? (
                          <span className="text-sm font-medium text-secondary/40 dark:text-accent/40 line-through">
                            {plan.originalPrice}
                          </span>
                        ) : (
                          <span className="text-xs text-transparent select-none" aria-hidden="true">
                            &nbsp;
                          </span>
                        )}
                      </div>
                      <div className="flex items-baseline gap-1.5 mt-0.5">
                        <span className="text-4xl sm:text-[42px] font-black tracking-tight text-secondary dark:text-accent">
                          {plan.price}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-secondary/55 dark:text-accent/55 lowercase">
                          {plan.unit}
                        </span>
                      </div>
                    </div>

                    {/* Action CTA Button placed right below price */}
                    <div className="mt-6">
                      <a
                        href={`https://wa.me/8801408185323?text=${encodeURIComponent(plan.waMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn w-full h-12 rounded-xl font-semibold text-sm flex items-center justify-center transition-all duration-300 shadow-2xs bg-transparent border border-secondary/25 dark:border-stroke-6 hover:border-secondary dark:hover:border-accent text-secondary dark:text-accent hover:bg-secondary/5 dark:hover:bg-accent/5">
                        <span>{plan.buttonText}</span>
                      </a>
                    </div>

                    {/* Summary Note right under button */}
                    <p className="min-h-[36px] text-xs text-secondary/65 dark:text-accent/65 mt-3 leading-relaxed">
                      {plan.summary}
                    </p>

                    {/* Divider */}
                    <div className="w-full h-px bg-stroke-2 dark:bg-stroke-6 my-6" />

                    {/* Deliverables / Features List */}
                    <div className="space-y-3">
                      <p className="text-[11px] font-semibold text-secondary/50 dark:text-accent/50 uppercase tracking-wider">
                        Included deliverables:
                      </p>
                      <ul className="space-y-2.5">
                        {plan.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2.5 text-xs text-secondary/80 dark:text-accent/80 font-normal">
                            <CheckCircle2 className="size-4 text-secondary/60 dark:text-accent/60 shrink-0 mt-0.5" />
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </RevealAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
