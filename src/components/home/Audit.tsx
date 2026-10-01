'use client';

import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import { ButtonWithIcon } from '../ui/button/ButtonWithIcon';
import { Check, Phone } from 'lucide-react';

const auditChecklist = [
  'Competitor intelligence & market research review',
  'Funnel diagnosis & server-side tracking health check',
  'Actionable 30-day growth roadmap with realistic ROI targets',
];

const Audit = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section
        className="py-16 md:py-20 lg:py-28 bg-white dark:bg-black"
        aria-label="Personalized Digital Audit & Scaling Plan">
        <div className="main-container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-20">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <RevealAnimation delay={0.1}>
                  <div className="mb-5">
                    <span className="badge badge-cyan">Zero Risk Evaluation</span>
                  </div>
                </RevealAnimation>

                <RevealAnimation delay={0.2}>
                  <h2 className="text-secondary dark:text-accent font-medium tracking-tight">
                    Get a personalized digital audit &amp; scaling plan.
                  </h2>
                </RevealAnimation>

                <RevealAnimation delay={0.3}>
                  <p className="text-secondary/70 dark:text-accent/70 text-base leading-relaxed max-w-[540px]">
                    We analyze your current digital presence, ad accounts, and conversion tracking to show you exactly how Source 365 can optimize your ad spend and scale your customer acquisition—before you spend a dime.
                  </p>
                </RevealAnimation>
              </div>

              {/* Distilled Checklist */}
              <RevealAnimation delay={0.35}>
                <ul className="space-y-3">
                  {auditChecklist.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                        <Check size={12} strokeWidth={2.5} />
                      </div>
                      <span className="text-[13.5px] font-medium text-secondary/85 dark:text-accent/85">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </RevealAnimation>

              {/* Call to Action */}
              <RevealAnimation delay={0.4}>
                <div className="pt-2 flex flex-wrap items-center gap-5">
                  <ButtonWithIcon
                    href="/contact-us"
                    label="Claim Free Growth Consultation"
                  />
                  <a
                    href="tel:01931623820"
                    className="group inline-flex items-center gap-2 text-xs font-medium text-secondary/70 dark:text-accent/70 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    <div className="flex size-7 items-center justify-center rounded-full border border-slate-200/80 bg-slate-50 text-secondary/70 group-hover:border-primary-400 group-hover:text-primary-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-accent/70 dark:group-hover:border-primary-400 dark:group-hover:text-primary-400 transition-colors">
                      <Phone size={12} />
                    </div>
                    <span>Or Call: 01931-623820</span>
                  </a>
                </div>
              </RevealAnimation>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-6">
              <RevealAnimation delay={0.4}>
                <div className="rounded-2xl border border-slate-200/60 dark:border-white/[0.06] bg-[#f8f9fb] dark:bg-[#11141c] p-2 sm:p-3 shadow-[0_8px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] overflow-hidden">
                  <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[440px] rounded-xl overflow-hidden bg-white dark:bg-[#0c0f14]">
                    <Image
                      src="/images/ns-img-25.png"
                      alt="Source 365 personalized growth and conversion analytics audit"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Audit;
