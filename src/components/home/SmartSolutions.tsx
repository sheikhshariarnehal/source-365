'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import CapsuleButton from '../ui/button/CapsuleButton';

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
    index: '(01)',
    title: 'UI/UX Design',
    shortDescription: 'Intuitive interfaces designed to turn visitors into loyal users.',
    expandedDescription: 'Human-centric design systems, user journeys, and prototypes tailored to convert.',
    features: [
      'UI/UX prototyping & wireframing',
      'Brand identity & visual systems',
      'High-converting landing page UI',
      'Mobile & web application design',
      'Interactive design systems',
    ],
    link: '/services/graphics-design',
    image: '/images/home-page-1/card-art-1.jpg',
  },
  {
    id: 'web-dev',
    index: '(02)',
    title: 'Web Development',
    shortDescription: 'Fast, scalable builds engineered to drive real business growth.',
    expandedDescription: 'Clean architecture and modern stacks that keep your product reliable, secure, and ready to scale.',
    features: [
      'Custom web applications',
      'CMS & eCommerce',
      'API integrations',
      'Performance optimization',
      'Cloud deployment',
    ],
    link: '/services/web-development',
    image: '/images/home-page-1/card-art-2.jpg',
  },
  {
    id: 'brand-strategy',
    index: '(03)',
    title: 'Brand Strategy',
    shortDescription: 'Distinctive identity systems that make your brand memorable.',
    expandedDescription: 'End-to-end growth roadmaps, competitor intelligence, and market positioning.',
    features: [
      'Structured growth blueprint',
      'Competitor intelligence audits',
      '3-day monthly content calendar',
      'High-converting sales funnels',
      'Dedicated Key Account Manager',
    ],
    link: '/growth-program',
    image: '/images/ns-img-499.png',
  },
  {
    id: 'digital-marketing',
    index: '(04)',
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
    image: '/images/ns-img-510.png',
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
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-stroke-3 dark:bg-stroke-6" />
                <span className="badge badge-primary-light inline-flex items-center gap-1.5 uppercase font-semibold text-xs tracking-wider">
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" className="text-primary-500">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  Services
                </span>
                <span className="h-px w-8 bg-stroke-3 dark:bg-stroke-6" />
              </div>
            </RevealAnimation>

            {/* Title */}
            <RevealAnimation delay={0.2}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-secondary dark:text-accent max-w-[720px] mb-4">
                Smart solutions for growing brands
              </h2>
            </RevealAnimation>

            {/* Subtitle */}
            <RevealAnimation delay={0.3}>
              <p className="text-base text-secondary/70 dark:text-accent/70 max-w-[620px] leading-relaxed mb-7">
                From design to development, our services are built to simplify your journey and accelerate your growth with clarity and precision.
              </p>
            </RevealAnimation>

            {/* CTA Button */}
            <RevealAnimation delay={0.4}>
              <CapsuleButton href="/contact-us" variant="white" size="md">
                Learn more
              </CapsuleButton>
            </RevealAnimation>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
            {servicesList.map((service, index) => {
              const isSelected = activeCard === service.id;

              return (
                <RevealAnimation key={service.id} delay={0.2 + index * 0.1}>
                  <div
                    onMouseEnter={() => setActiveCard(service.id)}
                    onMouseLeave={() => setActiveCard(null)}
                    onClick={() => setActiveCard(isSelected ? null : service.id)}
                    className="group bg-background-2 dark:bg-background-7 rounded-2xl p-6 flex flex-col justify-between min-h-[480px] transition-all duration-500 relative cursor-pointer overflow-hidden border-none shadow-none">
                    {/* Top Content */}
                    <div className="space-y-2 z-10">
                      <span className="text-xs font-semibold text-secondary/50 dark:text-accent/50 tracking-wider">
                        {service.index}
                      </span>
                      <h3 className="text-xl font-bold text-secondary dark:text-accent">
                        {service.title}
                      </h3>
                      <p className="text-sm text-secondary/70 dark:text-accent/70 leading-relaxed min-h-[40px]">
                        {isSelected ? service.expandedDescription : service.shortDescription}
                      </p>
                    </div>

                    {/* Middle / Bottom Content Area */}
                    <div className="relative w-full h-[260px] mt-6 flex flex-col justify-end">
                      {/* Image State (shown when not hovered) */}
                      <div
                        className={`absolute inset-0 transition-all duration-500 rounded-xl overflow-hidden ${
                          isSelected
                            ? 'opacity-0 scale-95 pointer-events-none'
                            : 'opacity-100 scale-100'
                        }`}>
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover rounded-xl"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                      </div>

                      {/* Feature List State (shown on hover / click) */}
                      <div
                        className={`absolute inset-0 flex flex-col justify-between py-2 transition-all duration-500 ${
                          isSelected
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-95 pointer-events-none'
                        }`}>
                        {/* Features */}
                        <ul className="space-y-2.5">
                          {service.features.map((feat, fIndex) => (
                            <li
                              key={fIndex}
                              className="text-sm text-secondary/80 dark:text-accent/80 flex items-center gap-2">
                              <span className="text-[#8b5cf6] font-bold">→</span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Bottom Explore Link */}
                        <div className="pt-4 border-t border-stroke-2 dark:border-stroke-6 flex items-center justify-between">
                          <Link
                            href={service.link}
                            className="text-sm font-semibold text-secondary dark:text-accent hover:text-[#8b5cf6] dark:hover:text-[#a78bfa] inline-flex items-center gap-1.5 transition-colors">
                            Explore service
                            <span className="text-[#8b5cf6] font-bold">→</span>
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
