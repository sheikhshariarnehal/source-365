'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { Phone, Globe, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary dark:bg-background-8 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="main-container relative z-10">
        <div className="max-w-[860px] mx-auto text-center space-y-5">
          <RevealAnimation delay={0.1}>
            <div className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xs px-4.5 py-1.5 text-xs md:text-sm font-normal text-white/90 shadow-2xs">
              <span>Ready to Scale?</span>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-white leading-[1.12]">
              Let&apos;s Scale Your Business
              <br />
              Together
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="text-white/75 text-sm sm:text-base md:text-lg max-w-[640px] mx-auto leading-relaxed pt-1">
              Partner with dedicated marketing managers who actively protect your ad budget and scale your revenue.
            </p>
          </RevealAnimation>

          {/* Contact Details from the Poster */}
          <RevealAnimation delay={0.35}>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-5 text-sm">
              <a
                href="tel:01408185323"
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 hover:border-red-400 hover:text-white transition-colors">
                <Phone className="size-4 text-red-400" />
                <span className="font-semibold text-white/90">Hotline:</span>
                <span className="text-white font-bold">01408 185323</span>
              </a>

              <a
                href="https://www.source365.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 hover:border-red-400 hover:text-white transition-colors">
                <Globe className="size-4 text-red-400" />
                <span className="text-white font-medium">www.source365.org</span>
              </a>
            </div>
          </RevealAnimation>

          {/* Action Triggers */}
          <RevealAnimation delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
              <a
                href="https://wa.me/8801408185323?text=Hello%20Source%20365%2C%20let%27s%20scale%20my%20business%21"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-xl shadow-xl bg-red-600 hover:bg-red-700 text-white border-red-700 flex items-center gap-2">
                <span>Start Scaling on WhatsApp</span>
                <ArrowRight className="size-5 ml-1" />
              </a>

              <LinkButton
                href="/contact-us"
                className="btn btn-white dark:bg-background-7 dark:text-accent hover:btn-secondary btn-xl shadow-md border border-stroke-2">
                <span>Book Direct Consultation</span>
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}
