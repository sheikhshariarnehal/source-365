'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { ButtonWithIcon } from '@/components/ui/button/ButtonWithIcon';
import {
  TrendingUp,
  ShieldCheck,
  Zap,
  CheckCircle2,
  PhoneCall,
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28 lg:pt-52 lg:pb-32 bg-[url('/images/ns-img-291.png')] bg-cover bg-center">
      {/* Soft, restrained ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-500/5 dark:bg-red-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="main-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <RevealAnimation delay={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full border border-stroke-2 dark:border-stroke-6 bg-background-2 dark:bg-background-8 px-4 py-1.5 text-xs font-medium text-secondary/80 dark:text-accent/80">
                <span className="size-1.5 rounded-full bg-red-500" />
                <span>Smart Strategy • Stronger Presence • Sustainable Growth</span>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-3 md:text-heading-1 font-semibold text-secondary dark:text-accent tracking-tight leading-[1.15]">
                BUSINESS <span className="text-[#E11D48] dark:text-[#F43F5E] font-bold">SCALE-UP</span> SERVICE
              </h1>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="text-base md:text-lg text-secondary/70 dark:text-accent/70 leading-relaxed max-w-[600px] mx-auto lg:mx-0 font-normal">
                Stop wasting marketing budget on unmonitored ad campaigns. Our all-inclusive Business Scale-UP service equips your brand with a dedicated Marketing Manager, structured monthly content planning, active ad scaling, and strict budget protection.
              </p>
            </RevealAnimation>

            {/* Quiet trust metrics */}
            <RevealAnimation delay={0.35}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs text-secondary/70 dark:text-accent/70">
                <span className="flex items-center gap-1.5 bg-background-2 dark:bg-background-7 px-3 py-1.5 rounded-lg border border-stroke-2 dark:border-stroke-6">
                  <CheckCircle2 className="size-3.5 text-secondary/60 dark:text-accent/60 shrink-0" />
                  Starting from ৳15,000/Month
                </span>
                <span className="flex items-center gap-1.5 bg-background-2 dark:bg-background-7 px-3 py-1.5 rounded-lg border border-stroke-2 dark:border-stroke-6">
                  <CheckCircle2 className="size-3.5 text-secondary/60 dark:text-accent/60 shrink-0" />
                  Ads Kill &amp; Scale Protocol
                </span>
                <span className="flex items-center gap-1.5 bg-background-2 dark:bg-background-7 px-3 py-1.5 rounded-lg border border-stroke-2 dark:border-stroke-6">
                  <CheckCircle2 className="size-3.5 text-secondary/60 dark:text-accent/60 shrink-0" />
                  Dedicated Marketing Manager
                </span>
              </div>
            </RevealAnimation>

            {/* Actions */}
            <RevealAnimation delay={0.4}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
                <ButtonWithIcon
                  label="View Pricing Plans"
                  href="#pricing-plans"
                  className="bg-secondary text-accent dark:bg-white dark:text-secondary shadow-md"
                />

                <a
                  href="https://wa.me/8801408185323?text=Hello%20Source%20365%2C%20I%20want%20to%20scale%20my%20business%20with%20the%20Business%20Scale-UP%20Service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-white dark:bg-background-8 dark:text-accent hover:btn-secondary btn-xl shadow-xs border border-stroke-2 dark:border-stroke-6 flex items-center gap-2">
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </RevealAnimation>

            {/* Hotline & URL */}
            <RevealAnimation delay={0.45}>
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-secondary/55 dark:text-accent/55">
                <PhoneCall className="size-3.5 text-secondary/50 dark:text-accent/50" />
                <span>Hotline:</span>
                <a href="tel:01408185323" className="font-medium text-secondary dark:text-accent hover:text-red-500 transition-colors">
                  01408 185323
                </a>
                <span className="text-stroke-3 dark:text-stroke-7">|</span>
                <a href="https://www.source365.org" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                  source365.org
                </a>
              </div>
            </RevealAnimation>
          </div>

          {/* Right Column: Quiet, Sophisticated Analytics Preview */}
          <div className="lg:col-span-5 relative">
            <RevealAnimation delay={0.25} direction="left" offset={30}>
              <div className="relative mx-auto max-w-[450px] rounded-3xl border border-stroke-2 dark:border-stroke-6 bg-white dark:bg-background-7 p-6 shadow-xl">
                {/* Visual Chart Accent */}
                <div className="relative h-[200px] w-full rounded-2xl bg-background-2 dark:bg-background-8 p-5 flex flex-col justify-between overflow-hidden border border-stroke-2 dark:border-stroke-6">
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-2.5">
                      <div className="size-7 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center">
                        <TrendingUp className="size-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-secondary dark:text-accent">
                          Scale Trajectory
                        </span>
                        <p className="text-[11px] text-secondary/55 dark:text-accent/55">3-Stage Growth Framework</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-background-1 dark:bg-background-7 border border-stroke-2 dark:border-stroke-6 text-[11px] font-medium text-secondary dark:text-accent">
                      +340% ROAS
                    </span>
                  </div>

                  {/* Restrained Bar Graphic */}
                  <div className="relative z-10 flex items-end justify-between gap-4 h-24 pt-3 px-3">
                    <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <div className="w-full bg-secondary/15 dark:bg-accent/15 rounded-t-md h-[40%] transition-all duration-500" />
                      <span className="text-[10px] font-medium text-secondary/55 dark:text-accent/55">1 Mo</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <div className="w-full bg-red-500/80 dark:bg-red-500/90 rounded-t-md h-[75%] transition-all duration-500" />
                      <span className="text-[10px] font-semibold text-red-600 dark:text-red-400">3 Mo</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <div className="w-full bg-secondary/30 dark:bg-accent/30 rounded-t-md h-[100%] transition-all duration-500" />
                      <span className="text-[10px] font-medium text-secondary/55 dark:text-accent/55">6 Mo</span>
                    </div>
                  </div>
                </div>

                {/* Quiet Supporting Cards */}
                <div className="mt-4 space-y-2.5">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-background-1 dark:bg-background-8 border border-stroke-2 dark:border-stroke-6">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center">
                        <TrendingUp className="size-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-secondary dark:text-accent">3 Months Accelerator</h4>
                        <p className="text-[11px] text-secondary/55 dark:text-accent/55">৳42,000 Total Package</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-red-600 dark:text-red-400">Featured</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-background-1 dark:bg-background-8 border border-stroke-2 dark:border-stroke-6">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-secondary/5 dark:bg-accent/5 text-secondary dark:text-accent flex items-center justify-center">
                        <ShieldCheck className="size-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-secondary dark:text-accent">Ads Kill &amp; Scale Protocol</h4>
                        <p className="text-[11px] text-secondary/55 dark:text-accent/55">Budget protection active</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-secondary/60 dark:text-accent/60">Standard</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-background-1 dark:bg-background-8 border border-stroke-2 dark:border-stroke-6">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-secondary/5 dark:bg-accent/5 text-secondary dark:text-accent flex items-center justify-center">
                        <Zap className="size-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-secondary dark:text-accent">Dedicated Marketing Manager</h4>
                        <p className="text-[11px] text-secondary/55 dark:text-accent/55">Direct WhatsApp group</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-secondary/60 dark:text-accent/60">1-on-1</span>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
