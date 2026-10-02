'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import { ButtonWithIcon } from '../ui/button/ButtonWithIcon';
import { ArrowRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  index: string;
  title: string;
  shortDescription: string;
  expandedDescription: string;
  features: string[];
  link: string;
  image: string;
}

const servicesList: ServiceItem[] = [
  {
    id: 'ui-ux',
    index: '01',
    title: 'UI/UX Design',
    shortDescription: 'Intuitive interfaces designed to turn visitors into loyal users.',
    expandedDescription: 'Human-centric design systems, user journeys, and high-converting UI.',
    features: [
      'UI/UX prototyping & wireframing',
      'Brand identity & visual design systems',
      'High-converting landing page UI',
      'Mobile & web application design',
      'Interactive component libraries',
    ],
    link: '/services/graphics-design',
    image: '/images/services/ui-ux-design.png',
  },
  {
    id: 'web-dev',
    index: '02',
    title: 'Web Development',
    shortDescription: 'Fast, scalable builds engineered to drive real business growth.',
    expandedDescription: 'Clean architecture and modern stacks that keep your product secure and agile.',
    features: [
      'Custom full-stack web applications',
      'Headless CMS & modern eCommerce',
      'Robust API & backend integrations',
      'Core Web Vitals & speed optimization',
      'Automated cloud CI/CD pipelines',
    ],
    link: '/services/web-development',
    image: '/images/services/web-development.png',
  },
  {
    id: 'brand-strategy',
    index: '03',
    title: 'Brand Strategy',
    shortDescription: 'Distinctive identity systems that make your brand memorable.',
    expandedDescription: 'End-to-end growth blueprints, positioning, and marketing campaigns.',
    features: [
      'Comprehensive growth blueprint',
      'In-depth competitor intelligence audits',
      'Monthly structured content calendar',
      'High-converting organic funnels',
      'Dedicated Key Account Manager',
    ],
    link: '/growth-program',
    image: '/images/services/brand-strategy.png',
  },
  {
    id: 'digital-marketing',
    index: '04',
    title: 'Digital Marketing',
    shortDescription: 'Data-backed campaigns that attract and retain the right audience.',
    expandedDescription: 'Targeted Facebook boosting, precision analytics, and Server-Side tracking.',
    features: [
      'Facebook & Instagram ad boosting',
      'Server-side Conversion API (CAPI)',
      'Audience retargeting funnels',
      'Daily ROI & budget optimization',
      'Full-funnel attribution tracking',
    ],
    link: '/services/facebook-boosting',
    image: '/images/services/digital-marketing.png',
  },
];

const SmartSolutions = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <RevealAnimation delay={0.1}>
      <section
        className="py-16 md:py-20 lg:py-28 bg-white dark:bg-black"
        aria-label="Smart solutions for growing brands">
        <div className="main-container px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-14 md:mb-16 flex flex-col items-center text-center">
            {/* Top Badge */}
            <RevealAnimation delay={0.1}>
              <div className="mb-5">
                <span className="badge badge-cyan">Services</span>
              </div>
            </RevealAnimation>

            {/* Title */}
            <RevealAnimation delay={0.2}>
              <h2 className="text-secondary dark:text-accent font-medium max-w-[720px] mb-4">
                Smart solutions for growing brands
              </h2>
            </RevealAnimation>

            {/* Subtitle */}
            <RevealAnimation delay={0.3}>
              <p className="max-w-[620px] text-secondary/70 dark:text-accent/70 leading-relaxed mb-7">
                From design to development, our services are built to simplify your journey and accelerate your growth with clarity and precision.
              </p>
            </RevealAnimation>

            {/* CTA Button */}
            <RevealAnimation delay={0.4}>
              <ButtonWithIcon
                href="/contact-us"
                label="Learn more"
              />
            </RevealAnimation>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
            {servicesList.map((service, index) => {
              const isSelected = activeCard === service.id;

              return (
                <RevealAnimation key={service.id} delay={0.2 + index * 0.1}>
                  <div
                    onMouseEnter={() => setActiveCard(service.id)}
                    onMouseLeave={() => setActiveCard(null)}
                    onClick={() => setActiveCard(isSelected ? null : service.id)}
                    className="group bg-[#f8f9fb] dark:bg-[#11141c] rounded-2xl p-6 flex flex-col justify-between min-h-[460px] transition-all duration-300 relative cursor-pointer overflow-hidden border border-slate-200/50 dark:border-white/[0.05] hover:border-slate-300/80 dark:hover:border-white/15 hover:shadow-[0_8px_24px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
                    {/* Top Content */}
                    <div className="space-y-2 z-10">
                      <span className="text-[11px] font-mono tracking-widest text-secondary/40 dark:text-accent/40">
                        ({service.index})
                      </span>
                      <h3 className="text-heading-5 text-secondary dark:text-accent font-semibold">
                        {service.title}
                      </h3>
                      <p className="text-secondary/70 dark:text-accent/70 mt-1 leading-relaxed min-h-[38px]">
                        {isSelected ? service.expandedDescription : service.shortDescription}
                      </p>
                    </div>

                    {/* Middle / Bottom Content Area */}
                    <div className="relative w-full h-[250px] mt-5 flex flex-col justify-end">
                      {/* Image State (shown when not hovered) */}
                      <div
                        className={`absolute inset-0 transition-all duration-400 rounded-xl overflow-hidden flex items-center justify-center ${
                          isSelected
                            ? 'opacity-0 scale-95 pointer-events-none'
                            : 'opacity-100 scale-100'
                        }`}>
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-contain p-0.5 rounded-xl transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                      </div>

                      {/* Feature List State (shown on hover / click) */}
                      <div
                        className={`absolute inset-0 flex flex-col justify-between py-1 transition-all duration-400 ${
                          isSelected
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-95 pointer-events-none'
                        }`}>
                        {/* Features */}
                        <ul className="space-y-2">
                          {service.features.map((feat, fIndex) => (
                            <li
                              key={fIndex}
                              className="text-[12.5px] text-secondary/75 dark:text-accent/75 flex items-center gap-2">
                              <span className="size-1.5 rounded-full bg-primary-500 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Bottom Explore Link */}
                        <div className="pt-3 border-t border-stroke-2/60 dark:border-stroke-6/60 flex items-center justify-between">
                          <Link
                            href={service.link}
                            className="group/link text-xs font-semibold text-secondary/80 dark:text-accent/80 hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center gap-1.5 transition-colors">
                            <span>Explore service</span>
                            <ArrowRight size={12} className="transition-transform duration-200 group-hover/link:translate-x-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default SmartSolutions;
