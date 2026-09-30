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
      <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
        <div className="main-container">
          <div className="bg-secondary relative z-10 overflow-hidden rounded-4xl px-6 py-[42px] sm:px-14">
            <RevealAnimation delay={0.1} direction="right" offset={100}>
              <figure className="pointer-events-none absolute -top-[44%] -right-[120%] -z-10 size-[1060px] -rotate-[290deg] select-none sm:-top-[35%] sm:-right-[100%] sm:-rotate-[260deg] md:-top-[78%] md:-right-[104%] lg:-top-[78%] lg:-right-[74%] xl:-top-[58%] xl:-right-[54%] opacity-50">
                <Image src="/images/ns-img-498.png" alt="gradient" width={1060} height={1060} />
              </figure>
            </RevealAnimation>
            <div className="relative z-10 space-y-[70px]">
              <div className="space-y-7 text-center md:w-full md:text-left">
                <div className="space-y-3 md:w-full">
                  <RevealAnimation delay={0.2}>
                    <div>
                      <span className="badge badge-cyan mb-2">Our Competitive Edge</span>
                      <h2 className="text-accent max-w-[571px] font-medium">Why Source 365?</h2>
                    </div>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <p className="text-accent/70 max-w-[520px] md:w-full text-base">
                      We don&apos;t just manage campaigns; we engineer your complete digital growth ecosystem with full accountability.
                    </p>
                  </RevealAnimation>
                </div>
                <RevealAnimation delay={0.4}>
                  <div>
                    <LinkButton href="/contact-us" className="btn btn-dark btn-md hover:btn-white shadow-lg">
                      Speak with our Growth Specialists
                    </LinkButton>
                  </div>
                </RevealAnimation>
              </div>

              <div className="mx-auto flex max-w-[1178px] flex-col items-center justify-between gap-y-8 sm:gap-x-8 sm:gap-y-0 md:flex-row">
                <div className="max-w-[300px] space-y-8 md:w-full">
                  {leftFeatures.map((feature, index) => (
                    <RevealAnimation key={feature.id} delay={0.5 + index * 0.1} direction="left">
                      <div className="space-y-3">
                        <div className="inline-block overflow-hidden">
                          <span className={`${feature.icon} text-accent text-[36px]`}> </span>
                        </div>
                        <div>
                          <h3 className="text-tagline-1 text-accent font-semibold">{feature.title}</h3>
                          <p className="text-tagline-2 text-accent/70 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </RevealAnimation>
                  ))}
                </div>

                <RevealAnimation delay={0.4} offset={100}>
                  <figure className="order-last rounded-2xl md:order-none md:w-full md:max-w-[350px] lg:max-w-[400px] xl:max-w-[480px] shadow-2xl overflow-hidden">
                    <Image
                      src="/images/ns-img-293.png"
                      alt="Source 365 performance dashboard"
                      className="rounded-2xl object-cover"
                      width={480}
                      height={400}
                    />
                  </figure>
                </RevealAnimation>

                <div className="max-w-[300px] space-y-8 md:w-full">
                  {rightFeatures.map((feature, index) => (
                    <RevealAnimation key={feature.id} delay={0.5 + index * 0.1} direction="right">
                      <div className="space-y-3">
                        <div className="inline-block overflow-hidden">
                          <span className={`${feature.icon} text-accent text-[36px]`}> </span>
                        </div>
                        <div>
                          <h3 className="text-tagline-1 text-accent font-semibold">{feature.title}</h3>
                          <p className="text-tagline-2 text-accent/70 leading-relaxed">{feature.description}</p>
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
