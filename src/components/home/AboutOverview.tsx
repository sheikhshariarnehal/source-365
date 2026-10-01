'use client';

import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import { ButtonWithIcon } from '../ui/button/ButtonWithIcon';

const statsData = [
  {
    id: 1,
    value: '65',
    suffix: '+',
    label: 'Trusted partners',
  },
  {
    id: 2,
    value: '14',
    suffix: '+',
    label: 'Years of experience',
  },
  {
    id: 3,
    value: '20',
    suffix: '+',
    label: 'Awards won',
  },
];

const AboutOverview = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section
        className="bg-background-2 dark:bg-background-5 py-16 md:py-20 lg:py-28"
        aria-label="About Source 365 Overview">
        <div className="main-container px-4 sm:px-6 lg:px-8">
          {/* Top Badge */}
          <div className="mb-5">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan">About Us</span>
            </RevealAnimation>
          </div>

          {/* Heading and Description Row */}
          <div className="mb-12 grid grid-cols-1 gap-6 lg:mb-16 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <RevealAnimation delay={0.2}>
                <h2 className="text-secondary dark:text-accent font-medium max-w-[620px]">
                  From vision to reality—we build what your business needs to grow
                </h2>
              </RevealAnimation>
            </div>
            <div className="flex flex-col items-start gap-4 lg:col-span-5 lg:items-end lg:text-right">
              <RevealAnimation delay={0.3}>
                <p className="max-w-[440px] text-secondary/70 dark:text-accent/70 leading-relaxed text-left lg:text-right">
                  From concept to launch, we focus on creating digital products that solve real problems, improve user experience, and help brands grow faster.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <ButtonWithIcon
                  href="/about"
                  label="Learn more"
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
                  <div className="bg-white dark:bg-[#11141c] rounded-2xl p-6 sm:p-7 flex flex-col justify-between min-h-[160px] sm:min-h-[175px] border border-slate-200/50 dark:border-white/[0.05] shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-slate-300/80 dark:hover:border-white/12">
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-heading-3 font-semibold text-secondary dark:text-accent">
                        {stat.value}
                      </span>
                      <span className="text-heading-5 font-medium text-primary-500">
                        {stat.suffix}
                      </span>
                    </div>
                    <span className="text-secondary/70 dark:text-accent/70 text-sm font-medium mt-4">
                      {stat.label}
                    </span>
                  </div>
                </RevealAnimation>
              ))}

              {/* Trustpilot Card */}
              <RevealAnimation delay={0.6}>
                <div className="bg-white dark:bg-[#11141c] rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-center text-center min-h-[160px] sm:min-h-[175px] border border-slate-200/50 dark:border-white/[0.05] shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-slate-300/80 dark:hover:border-white/12">
                  {/* Trustpilot Brand Header */}
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <svg width={20} height={20} viewBox="0 0 24 24" fill="#00b67a">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-base font-semibold text-[#191919] dark:text-white tracking-tight">
                      Trustpilot
                    </span>
                  </div>

                  {/* 5 Green Rating Star Boxes */}
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div
                        key={star}
                        className="size-4.5 rounded-[3px] bg-[#00b67a] flex items-center justify-center">
                        <svg width={10} height={10} viewBox="0 0 24 24" fill="white">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                    ))}
                  </div>

                  {/* Rating Label */}
                  <span className="text-secondary/70 dark:text-accent/70 text-xs sm:text-sm font-medium">
                    Rated 4.5/5.0
                  </span>
                </div>
              </RevealAnimation>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 h-full">
              <RevealAnimation delay={0.4}>
                <div className="relative h-full min-h-[320px] sm:min-h-[380px] lg:min-h-full rounded-2xl overflow-hidden border border-slate-200/50 dark:border-white/[0.05] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                  <Image
                    src="/images/home-page-1/partner-meeting.jpg"
                    alt="Source 365 partner consultation and strategy meeting"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
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
