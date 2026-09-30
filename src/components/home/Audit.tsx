'use client';

import auditImage from '@public/images/ns-img-294.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Audit = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[120px] xl:pb-[120px]">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 xl:gap-x-[120px]">
            <div className="space-y-10">
              <div className="space-y-4">
                <RevealAnimation delay={0.1}>
                  <div>
                    <span className="badge badge-cyan">Zero Risk Evaluation</span>
                    <h2 className="text-secondary dark:text-accent font-medium tracking-tight">
                      Get a personalized digital audit &amp; scaling plan.
                    </h2>
                  </div>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p className="text-secondary/70 dark:text-accent/70 text-base leading-relaxed">
                    We analyze your current digital presence, ad accounts, and conversion tracking to show you exactly how Source 365 can optimize your ad spend and scale your customer acquisition—before you spend a dime.
                  </p>
                </RevealAnimation>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex size-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
                    <svg className="size-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-secondary dark:text-accent">Competitor intelligence &amp; market research review</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex size-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
                    <svg className="size-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-secondary dark:text-accent">Funnel diagnosis &amp; server-side tracking health check</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex size-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
                    <svg className="size-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-secondary dark:text-accent">Actionable 30-day growth roadmap with realistic ROI targets</span>
                </div>
              </div>

              <RevealAnimation delay={0.3}>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-secondary dark:btn-accent hover:btn-white dark:hover:btn-white-dark btn-md shadow-lg">
                    Claim Free Growth Consultation
                  </LinkButton>
                  <a
                    href="tel:01931623820"
                    className="text-sm font-semibold text-secondary/80 dark:text-accent/80 hover:text-primary-500 transition-colors">
                    Or Call: 01931-623820
                  </a>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.4}>
              <figure className="overflow-hidden rounded-3xl bg-[#D9D9D9] shadow-2xl">
                <Image src={auditImage} alt="Source 365 personalized growth audit" className="size-full object-cover" priority />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Audit;
