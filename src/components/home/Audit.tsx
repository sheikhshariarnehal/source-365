'use client';

import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import { ButtonWithIcon } from '../ui/button/ButtonWithIcon';
import { Phone } from 'lucide-react';

interface AuditItem {
  id: number;
  title: string;
  description: string;
}

const auditChecklist: AuditItem[] = [
  {
    id: 1,
    title: 'Competitor & Market Intelligence:',
    description: 'Benchmarking your ad strategies against industry leaders to uncover winning traffic angles.',
  },
  {
    id: 2,
    title: 'Funnel & Tracking Health Check:',
    description: 'Pinpointing conversion leaks, tracking discrepancies, and pixel fidelity across your funnel.',
  },
  {
    id: 3,
    title: 'Custom 30-Day Growth Roadmap:',
    description: 'A step-by-step sprint plan with realistic ROI milestones, creative guidelines, and budget allocation.',
  },
];

const Audit = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section
        className="py-16 md:py-24 lg:py-28 bg-white dark:bg-black"
        aria-label="Personalized Digital Audit & Scaling Plan">
        <div className="main-container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-20">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <RevealAnimation delay={0.2}>
                  <h2 className="text-secondary dark:text-accent font-semibold text-3xl sm:text-4xl lg:text-[42px] tracking-[-0.025em] leading-[1.18] text-balance">
                    Get a personalized digital audit &amp; scaling plan
                  </h2>
                </RevealAnimation>

                <RevealAnimation delay={0.3}>
                  <p className="text-secondary/70 dark:text-accent/70 text-base sm:text-[17px] leading-[1.65] max-w-[520px]">
                    We analyze your ad accounts, funnel architecture, and conversion tracking to show you exactly how Source 365 can eliminate wasted spend and accelerate customer acquisition — 100% free before you commit.
                  </p>
                </RevealAnimation>
              </div>

              {/* Service-style Checklist with Web-Development Dots */}
              <RevealAnimation delay={0.35}>
                <ul className="space-y-4 sm:space-y-5">
                  {auditChecklist.map((item) => (
                    <li key={item.id} className="flex items-start gap-3.5">
                      {/* Web-development style solid dot with checkmark */}
                      <div className="size-5 shrink-0 mt-0.5 rounded-full bg-secondary text-white dark:bg-accent dark:text-secondary flex items-center justify-center shadow-sm">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          className="size-5 shrink-0"
                          aria-hidden="true">
                          <rect
                            width={20}
                            height={20}
                            rx={10}
                            className="fill-secondary dark:fill-accent"
                          />
                          <path
                            d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                            className="fill-white dark:fill-secondary"
                          />
                        </svg>
                      </div>
                      <p className="text-[14.5px] sm:text-[15.5px] text-secondary/75 dark:text-accent/75 leading-[1.6]">
                        <strong className="font-semibold text-secondary dark:text-accent mr-1.5">
                          {item.title}
                        </strong>
                        <span>{item.description}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </RevealAnimation>

              {/* Call to Action */}
              <RevealAnimation delay={0.4}>
                <div className="pt-2 flex flex-wrap items-center gap-5">
                  <ButtonWithIcon
                    href="/contact-us"
                    label="Claim Your Free Digital Audit"
                    aria-label="Claim your free personalized digital audit and scaling roadmap"
                  />
                  <a
                    href="tel:01931623820"
                    aria-label="Call Source 365 growth hotline at 01931-623820"
                    className="group inline-flex items-center gap-2.5 text-xs sm:text-sm font-medium text-secondary/70 dark:text-accent/70 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    <div className="flex size-8 items-center justify-center rounded-full border border-slate-200/80 bg-slate-50 text-secondary/70 group-hover:border-primary-400 group-hover:text-primary-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-accent/70 dark:group-hover:border-primary-400 dark:group-hover:text-primary-400 transition-all">
                      <Phone size={13} />
                    </div>
                    <span className="tabular-nums tracking-wide">Direct: 01931-623820</span>
                  </a>
                </div>
              </RevealAnimation>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <RevealAnimation delay={0.4} direction="left">
                <div className="relative flex items-center justify-center w-full max-w-[520px] mx-auto">
                  {/* Ambient subtle glow for depth */}
                  <div className="absolute inset-4 -z-10 bg-gradient-to-tr from-primary-500/15 via-[#83e7ee]/10 to-transparent rounded-full blur-3xl opacity-70 dark:opacity-40" />
                  <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[460px]">
                    <Image
                      src="/images/audit/adit_01.png"
                      alt="Source 365 personalized digital audit and growth strategy illustration"
                      fill
                      className="object-contain drop-shadow-2xl"
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
