'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { Phone, Globe, ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-background-9">
      <div className="main-container">
        <div className="relative rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] bg-secondary dark:bg-background-8 text-white py-14 sm:py-18 md:py-20 px-6 sm:px-10 md:px-14 overflow-hidden border border-white/10 dark:border-stroke-6/50 shadow-xl">
          {/* Calm, understated ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[280px] bg-red-600/8 blur-[150px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-[820px] mx-auto text-center space-y-6">
            {/* Calm, minimalist pill badge */}
            <RevealAnimation delay={0.1}>
              <div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4.5 py-1.5 text-xs md:text-sm font-normal text-white/75 shadow-2xs">
                <span>Ready to Scale?</span>
              </div>
            </RevealAnimation>

            {/* Headline */}
            <RevealAnimation delay={0.2}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold tracking-tight text-white leading-[1.12] text-balance">
                Let&apos;s Scale Your Business
                <br />
                Together
              </h2>
            </RevealAnimation>

            {/* Sub-headline */}
            <RevealAnimation delay={0.3}>
              <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-[600px] mx-auto leading-relaxed font-normal">
                Partner with dedicated marketing managers who actively protect your ad budget and scale your revenue.
              </p>
            </RevealAnimation>

            {/* Understated Contact Detail Pills */}
            <RevealAnimation delay={0.35}>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-sm">
                <a
                  href="tel:01408185323"
                  className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-white/80 hover:border-white/20 hover:bg-white/[0.08] hover:text-white transition-all duration-300 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white">
                  <Phone className="size-3.5 text-red-400/90" />
                  <span className="font-normal text-white/70">Hotline:</span>
                  <span className="text-white font-semibold tracking-wide">01408 185323</span>
                </a>

                <a
                  href="https://www.source365.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-white/80 hover:border-white/20 hover:bg-white/[0.08] hover:text-white transition-all duration-300 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white">
                  <Globe className="size-3.5 text-red-400/90" />
                  <span className="text-white font-medium tracking-wide">www.source365.org</span>
                </a>
              </div>
            </RevealAnimation>

            {/* Action Triggers */}
            <RevealAnimation delay={0.4}>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <a
                  href="https://wa.me/8801408185323?text=Hello%20Source%20365%2C%20let%27s%20scale%20my%20business%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#E11D48] hover:bg-[#BE123C] text-white px-7 sm:px-8 h-12 text-sm sm:text-base font-semibold shadow-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white">
                  <span>Start Scaling on WhatsApp</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>

                <LinkButton
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-full bg-white text-secondary hover:bg-white/90 dark:bg-background-7 dark:text-white dark:hover:bg-background-6 px-7 sm:px-8 h-12 text-sm sm:text-base font-semibold border border-stroke-2 dark:border-stroke-6 shadow-2xs transition-all duration-300 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white">
                  <span>Book Direct Consultation</span>
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
