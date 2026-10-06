'use client';

import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import { ButtonWithIcon } from '../ui/button/ButtonWithIcon';

interface StatItem {
  id: number;
  value: string;
  suffix: string;
  label: string;
  sublabel?: string;
}

const statsData: StatItem[] = [
  {
    id: 1,
    value: '65',
    suffix: '+',
    label: 'Enterprise & Global Partners',
    sublabel: 'Collaborating across 12 industries',
  },
  {
    id: 2,
    value: '14',
    suffix: '+',
    label: 'Years of Proven Experience',
    sublabel: 'Delivering end-to-end digital mastery',
  },
  {
    id: 3,
    value: '20',
    suffix: '+',
    label: 'Industry & Design Awards',
    sublabel: 'Recognized for technical excellence',
  },
];

const AboutOverview = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section
        className="bg-background-2 dark:bg-background-5 py-16 md:py-24 lg:py-28"
        aria-label="About Source 365 Overview">
        <div className="main-container px-4 sm:px-6 lg:px-8">
          {/* Heading and Description Row */}
          <div className="mb-12 grid grid-cols-1 gap-6 lg:mb-16 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <RevealAnimation delay={0.2}>
                <h2 className="text-secondary dark:text-accent font-medium text-heading-3 md:text-heading-2 max-w-[620px] text-balance tracking-tight">
                  From vision to reality — we build what your business needs to grow
                </h2>
              </RevealAnimation>
            </div>
            <div className="flex flex-col items-start gap-5 lg:col-span-5 lg:items-start">
              <RevealAnimation delay={0.3}>
                <p className="max-w-[480px] text-secondary/70 dark:text-accent/70 text-base leading-relaxed text-left">
                  We combine strategic engineering, human-centered design, and performance-driven marketing to turn ambitious ideas into scalable market realities.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <ButtonWithIcon
                  href="/about"
                  label="Explore our story"
                  aria-label="Explore our story and company background"
                />
              </RevealAnimation>
            </div>
          </div>

          {/* Bottom Grid: 2x2 Stats on Left + Photo on Right */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6 items-stretch">
            {/* Left 4 Stat Cards (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:col-span-7">
              {statsData.map((stat, index) => (
                <RevealAnimation key={stat.id} delay={0.3 + index * 0.1}>
                  <div className="group relative bg-white dark:bg-[#111622]/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between min-h-[170px] sm:min-h-[185px] border border-slate-200/80 dark:border-white/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/30 hover:shadow-lg dark:hover:border-primary-400/30 dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-secondary dark:text-accent tabular-nums">
                        {stat.value}
                      </span>
                      <span className="text-2xl sm:text-3xl font-medium text-primary-500">
                        {stat.suffix}
                      </span>
                    </div>
                    <div className="mt-4 space-y-1">
                      <p className="text-secondary dark:text-accent text-sm font-semibold tracking-tight">
                        {stat.label}
                      </p>
                      {stat.sublabel && (
                        <p className="text-secondary/60 dark:text-accent/60 text-xs">
                          {stat.sublabel}
                        </p>
                      )}
                    </div>
                  </div>
                </RevealAnimation>
              ))}

              {/* Trustpilot Card */}
              <RevealAnimation delay={0.6}>
                <div className="group relative bg-white dark:bg-[#111622]/90 rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-center text-center min-h-[170px] sm:min-h-[185px] border border-slate-200/80 dark:border-white/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00b67a]/40 hover:shadow-lg dark:hover:border-[#00b67a]/40 dark:hover:shadow-[0_8px_24px_rgba(0,182,122,0.15)]">
                  {/* Trustpilot Brand Header */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <svg width={22} height={22} viewBox="0 0 24 24" fill="#00b67a" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-base font-bold text-[#191919] dark:text-white tracking-tight">
                      Trustpilot
                    </span>
                  </div>

                  {/* Authentic 4.5 Star Rating */}
                  <div className="flex items-center gap-1 mb-2.5" aria-label="Trustpilot rating 4.5 out of 5 stars">
                    {/* 4 Full Green Stars */}
                    {[1, 2, 3, 4].map((star) => (
                      <div
                        key={star}
                        className="size-5 rounded-[3px] bg-[#00b67a] flex items-center justify-center">
                        <svg width={11} height={11} viewBox="0 0 24 24" fill="white" aria-hidden="true">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                    ))}
                    {/* 5th Star: Half-Green / Half-Gray for 4.5 */}
                    <div
                      className="size-5 rounded-[3px] bg-[linear-gradient(to_right,#00b67a_50%,#dcdce6_50%)] dark:bg-[linear-gradient(to_right,#00b67a_50%,#2a3240_50%)] flex items-center justify-center">
                      <svg width={11} height={11} viewBox="0 0 24 24" fill="white" aria-hidden="true">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                  </div>

                  {/* Rating Label & Trust Qualifier */}
                  <div className="space-y-0.5">
                    <p className="text-secondary dark:text-accent text-sm font-semibold tracking-tight">
                      Rated 4.5 / 5.0
                    </p>
                    <p className="text-secondary/60 dark:text-accent/60 text-xs">
                      Based on verified reviews
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 flex flex-col">
              <RevealAnimation delay={0.4} className="h-full">
                <div className="group relative w-full h-full min-h-[300px] sm:min-h-[360px] lg:min-h-[390px] rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                  <Image
                    src="/images/home-page-1/partner-meeting.jpg"
                    alt="Source 365 executive strategy and client consultation session"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default AboutOverview;
