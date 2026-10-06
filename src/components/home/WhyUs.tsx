'use client';

import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface FeatureItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  side: 'left' | 'right';
}

const featureItems: FeatureItem[] = [
  {
    id: 1,
    icon: 'ns-shape-15',
    title: 'A to Z Digital Solutions',
    description: 'Zero vendor fragmentation. We unify ad marketing, software engineering, tracking, and creative design.',
    side: 'left',
  },
  {
    id: 2,
    icon: 'ns-shape-24',
    title: 'Precision Server-Side Tracking',
    description: 'We build robust server-side analytics ensuring 100% accurate conversion tracking and optimal ad delivery.',
    side: 'left',
  },
  {
    id: 3,
    icon: 'ns-shape-9',
    title: 'Data-Driven Facebook Boosting',
    description: 'Target high-intent audiences and maximize return on ad spend with continuous daily campaign adjustments.',
    side: 'left',
  },
  {
    id: 4,
    icon: 'ns-shape-7',
    title: 'Dedicated Account Manager',
    description: 'Your assigned Key Account Manager provides daily communication and strategic oversight.',
    side: 'right',
  },
  {
    id: 5,
    icon: 'ns-shape-34',
    title: '7, 15 & 30-Day Reporting',
    description: 'Clear, transparent multi-interval performance reporting keeping you informed at every growth milestone.',
    side: 'right',
  },
  {
    id: 6,
    icon: 'ns-shape-36',
    title: 'Commercial Business Scaling',
    description: 'From enterprise partnerships to digital asset solutions, we help entrepreneurs build sustainable revenue.',
    side: 'right',
  },
];

const WhyUs = () => {
  const leftFeatures = featureItems.filter((item) => item.side === 'left');
  const rightFeatures = featureItems.filter((item) => item.side === 'right');

  return (
    <RevealAnimation delay={0.1}>
      <section className="pt-10 pb-10 sm:pt-14 sm:pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
        <div className="main-container px-3.5 sm:px-5">
          <div className="bg-secondary relative z-10 overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-4xl px-4 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-14 lg:py-[42px]">
            <RevealAnimation delay={0.1} direction="right" offset={100}>
              <figure className="pointer-events-none absolute -top-[44%] -right-[120%] -z-10 size-[1060px] -rotate-[290deg] select-none sm:-top-[35%] sm:-right-[100%] sm:-rotate-[260deg] md:-top-[78%] md:-right-[104%] lg:-top-[78%] lg:-right-[74%] xl:-top-[58%] xl:-right-[54%] opacity-50">
                <Image src="/images/ns-img-498.png" alt="gradient" width={1060} height={1060} priority={false} />
              </figure>
            </RevealAnimation>

            <div className="relative z-10 space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-[70px]">
              {/* Header */}
              <div className="space-y-5 sm:space-y-7 text-center md:text-left">
                <div className="space-y-2.5 sm:space-y-3 md:w-full">
                  <RevealAnimation delay={0.2}>
                    <div>
                      <span className="badge badge-cyan mb-2.5">Our Competitive Edge</span>
                      <h2 className="text-accent max-w-[571px] text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-semibold md:font-medium leading-tight mx-auto md:mx-0">
                        Why Source 365?
                      </h2>
                    </div>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <p className="text-accent/70 max-w-[520px] text-sm sm:text-base leading-relaxed mx-auto md:mx-0">
                      We don&apos;t just manage campaigns; we engineer your complete digital growth ecosystem with full accountability.
                    </p>
                  </RevealAnimation>
                </div>
                <RevealAnimation delay={0.4}>
                  <div className="pt-1">
                    <LinkButton href="/contact-us" className="btn btn-dark btn-md hover:btn-white shadow-lg w-full sm:w-auto inline-flex justify-center items-center">
                      Speak with our Growth Specialists
                    </LinkButton>
                  </div>
                </RevealAnimation>
              </div>

              {/* Desktop view (lg and above): 3 columns (Left 3 items, Center Image, Right 3 items) */}
              <div className="hidden lg:flex mx-auto max-w-[1178px] flex-row items-center justify-between gap-x-8">
                <div className="w-full max-w-[300px] xl:max-w-[320px] space-y-8">
                  {leftFeatures.map((feature, index) => (
                    <RevealAnimation key={feature.id} delay={0.5 + index * 0.1} direction="left">
                      <div className="space-y-3">
                        <div className="inline-block overflow-hidden">
                          <span className={`${feature.icon} text-accent text-[36px]`}> </span>
                        </div>
                        <div>
                          <h3 className="text-tagline-1 text-accent font-semibold">{feature.title}</h3>
                          <p className="text-tagline-2 text-accent/70 leading-relaxed mt-1">{feature.description}</p>
                        </div>
                      </div>
                    </RevealAnimation>
                  ))}
                </div>

                <RevealAnimation delay={0.4} offset={100}>
                  <figure className="rounded-2xl max-w-[380px] xl:max-w-[460px] shadow-2xl overflow-hidden shrink-0 border border-white/10">
                    <Image
                      src="/images/ns-img-293.png"
                      alt="Source 365 performance dashboard"
                      className="rounded-2xl object-cover w-full h-auto"
                      width={480}
                      height={400}
                    />
                  </figure>
                </RevealAnimation>

                <div className="w-full max-w-[300px] xl:max-w-[320px] space-y-8">
                  {rightFeatures.map((feature, index) => (
                    <RevealAnimation key={feature.id} delay={0.5 + index * 0.1} direction="right">
                      <div className="space-y-3">
                        <div className="inline-block overflow-hidden">
                          <span className={`${feature.icon} text-accent text-[36px]`}> </span>
                        </div>
                        <div>
                          <h3 className="text-tagline-1 text-accent font-semibold">{feature.title}</h3>
                          <p className="text-tagline-2 text-accent/70 leading-relaxed mt-1">{feature.description}</p>
                        </div>
                      </div>
                    </RevealAnimation>
                  ))}
                </div>
              </div>

              {/* Mobile & Tablet view (< lg): Visual Hero followed by clean 1 or 2-column cards */}
              <div className="flex flex-col lg:hidden space-y-8 sm:space-y-10">
                {/* Visual Graphic */}
                <RevealAnimation delay={0.3} offset={50}>
                  <figure className="w-full max-w-sm sm:max-w-md mx-auto rounded-2xl shadow-2xl overflow-hidden border border-white/10">
                    <Image
                      src="/images/ns-img-293.png"
                      alt="Source 365 performance dashboard"
                      className="w-full h-auto rounded-2xl object-cover"
                      width={480}
                      height={400}
                    />
                  </figure>
                </RevealAnimation>

                {/* 6 Features in responsive 1-col (mobile) / 2-col (tablet) grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {featureItems.map((feature, index) => (
                    <RevealAnimation key={feature.id} delay={0.1 + index * 0.08}>
                      <div className="h-full rounded-2xl bg-white/[0.04] border border-white/[0.08] p-4 sm:p-5 flex flex-col justify-start space-y-2.5 transition-colors hover:bg-white/[0.07]">
                        <div className="inline-flex size-10 items-center justify-center rounded-xl bg-white/5">
                          <span className={`${feature.icon} text-accent text-2xl`}> </span>
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-base text-accent font-semibold tracking-tight">
                            {feature.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-accent/70 leading-relaxed mt-1">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </RevealAnimation>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default WhyUs;
