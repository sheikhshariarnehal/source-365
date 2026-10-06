'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { ButtonWithIcon } from '@/components/ui/button/ButtonWithIcon';
import TacticalHighlights from './TacticalHighlights';
import Image from 'next/image';
import marketingIllustration from '@public/images/marketing/Digital marketing social media and data analysis.svg';
import {
  CheckCircle2,
  PhoneCall,
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-32 md:pt-40 lg:pt-44 bg-background-2 dark:bg-background-8">
      <div className="main-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <RevealAnimation delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-[48px] xl:text-[56px] font-black text-secondary dark:text-accent tracking-tight leading-[1.05] uppercase">
                BUSINESS <span className="text-[#E11D48] dark:text-[#F43F5E]">SCALE-UP</span>
                <br />
                SERVICE
              </h1>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <p className="text-sm md:text-base text-secondary/70 dark:text-accent/70 leading-relaxed max-w-[540px] mx-auto lg:mx-0 font-normal">
                Stop wasting marketing budget on unmonitored ad campaigns. Our all-inclusive Business Scale-UP service equips your brand with a dedicated Marketing Manager, structured monthly content planning, active ad scaling, and strict budget protection.
              </p>
            </RevealAnimation>

            {/* Quiet trust badges */}
            <RevealAnimation delay={0.25}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs text-secondary/80 dark:text-accent/80">
                <span className="flex items-center gap-2 bg-white dark:bg-background-7 px-3.5 py-1.5 rounded-full border border-stroke-2 dark:border-stroke-6 shadow-2xs">
                  <CheckCircle2 className="size-3.5 text-secondary/60 dark:text-accent/60 shrink-0" />
                  Starting from ৳15,000/Month
                </span>
                <span className="flex items-center gap-2 bg-white dark:bg-background-7 px-3.5 py-1.5 rounded-full border border-stroke-2 dark:border-stroke-6 shadow-2xs">
                  <CheckCircle2 className="size-3.5 text-secondary/60 dark:text-accent/60 shrink-0" />
                  Ads Kill &amp; Scale Protocol
                </span>
                <span className="flex items-center gap-2 bg-white dark:bg-background-7 px-3.5 py-1.5 rounded-full border border-stroke-2 dark:border-stroke-6 shadow-2xs">
                  <CheckCircle2 className="size-3.5 text-secondary/60 dark:text-accent/60 shrink-0" />
                  Dedicated Marketing Manager
                </span>
              </div>
            </RevealAnimation>

            {/* Actions */}
            <RevealAnimation delay={0.3}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <ButtonWithIcon
                  label="View Pricing Plans"
                  href="#pricing-plans"
                  className="bg-secondary text-white dark:bg-white dark:text-secondary shadow-sm"
                />

                <a
                  href="https://wa.me/8801408185323?text=Hello%20Source%20365%2C%20I%20want%20to%20scale%20my%20business%20with%20the%20Business%20Scale-UP%20Service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white dark:bg-background-7 text-secondary dark:text-accent border border-stroke-2 dark:border-stroke-6 px-7 h-12 text-sm font-medium hover:bg-secondary hover:text-white dark:hover:bg-white dark:hover:text-secondary transition-all duration-300 shadow-2xs hover:-translate-y-0.5 active:scale-95">
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </RevealAnimation>

            {/* Hotline & URL */}
            <RevealAnimation delay={0.35}>
              <div className="pt-1 flex items-center justify-center lg:justify-start gap-2 text-xs text-secondary/60 dark:text-accent/60">
                <PhoneCall className="size-3.5 text-secondary/50 dark:text-accent/50" />
                <span>Hotline:</span>
                <a href="tel:01408185323" className="font-semibold text-secondary dark:text-accent hover:text-[#E11D48] transition-colors">
                  01408 185323
                </a>
                <span className="text-stroke-3 dark:text-stroke-7">|</span>
                <a href="https://www.source365.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#E11D48] transition-colors">
                  source365.org
                </a>
              </div>
            </RevealAnimation>
          </div>

          {/* Right Column: Digital Marketing & Data Analysis SVG Illustration */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            <RevealAnimation delay={0.2} direction="left" offset={20} className="w-full">
              <figure className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-[520px] sm:max-w-[560px] lg:max-w-[600px] xl:max-w-[660px] flex items-center justify-center">
                <Image
                  src={marketingIllustration}
                  alt="Digital marketing social media and data analysis"
                  priority
                  className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-sm"
                />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>

      {/* 4 Protocol Highlights Grid with section background ending at vertical center of cards */}
      <div className="relative mt-14 lg:mt-20">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white dark:bg-background-9 pointer-events-none" />
        <div className="main-container relative z-10">
          <TacticalHighlights />
        </div>
      </div>
    </section>
  );
}
