'use client';

import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const statsData = [
  {
    id: 1,
    value: '65+',
    label: 'Trusted partners',
  },
  {
    id: 2,
    value: '14+',
    label: 'Years of experience',
  },
  {
    id: 3,
    value: '20+',
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
          <div className="mb-6">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-primary-light inline-flex items-center gap-1.5 uppercase font-semibold text-xs tracking-wider">
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-primary-500">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                About Us
              </span>
            </RevealAnimation>
          </div>

          {/* Heading and Description Row */}
          <div className="mb-12 grid grid-cols-1 gap-6 lg:mb-16 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <RevealAnimation delay={0.2}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-secondary dark:text-accent leading-[1.15]">
                  From vision to reality—we build what your business needs to grow
                </h2>
              </RevealAnimation>
            </div>
            <div className="flex flex-col items-start gap-5 lg:col-span-5 lg:items-end lg:text-right">
              <RevealAnimation delay={0.3}>
                <p className="text-base text-secondary/70 dark:text-accent/70 leading-relaxed max-w-[440px] text-left lg:text-right">
                  From concept to launch, we focus on creating digital products that solve real problems, improve user experience, and help brands grow faster.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white dark:bg-background-7 hover:bg-background-1 dark:hover:bg-background-8 px-6 py-3 text-sm font-semibold text-secondary dark:text-accent transition-all">
                  <span>Learn more</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </Link>
              </RevealAnimation>
            </div>
          </div>

          {/* Bottom Grid: 2x2 Stats on Left + Photo on Right */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 items-stretch">
            {/* Left 4 Stat Cards (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:col-span-7">
              {statsData.map((stat, index) => (
                <RevealAnimation key={stat.id} delay={0.3 + index * 0.1}>
                  <div className="bg-white dark:bg-background-7 rounded-2xl p-7 lg:p-8 flex flex-col justify-between min-h-[170px] sm:min-h-[190px] border-none shadow-none">
                    <span className="text-4xl sm:text-5xl font-bold tracking-tight text-secondary dark:text-accent">
                      {stat.value}
                    </span>
                    <span className="text-sm font-medium text-secondary/70 dark:text-accent/70 mt-8">
                      {stat.label}
                    </span>
                  </div>
                </RevealAnimation>
              ))}

              {/* Trustpilot Card */}
              <RevealAnimation delay={0.6}>
                <div className="bg-white dark:bg-background-7 rounded-2xl p-7 lg:p-8 flex flex-col items-center justify-center text-center min-h-[170px] sm:min-h-[190px] border-none shadow-none">
                  {/* Trustpilot Brand Header */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <svg width={22} height={22} viewBox="0 0 24 24" fill="#00b67a">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-lg font-bold text-[#191919] dark:text-white tracking-tight">
                      Trustpilot
                    </span>
                  </div>

                  {/* 5 Green Rating Star Boxes */}
                  <div className="flex items-center gap-1 mb-2.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div
                        key={star}
                        className="size-5 rounded-[2px] bg-[#00b67a] flex items-center justify-center">
                        <svg width={12} height={12} viewBox="0 0 24 24" fill="white">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                    ))}
                  </div>

                  {/* Rating Label */}
                  <span className="text-xs sm:text-sm font-medium text-secondary/70 dark:text-accent/70">
                    Rated 4.5/5.0
                  </span>
                </div>
              </RevealAnimation>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 h-full">
              <RevealAnimation delay={0.4}>
                <div className="relative h-full min-h-[340px] sm:min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden border-none shadow-none">
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
