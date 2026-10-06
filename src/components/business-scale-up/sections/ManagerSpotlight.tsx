'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import Image from 'next/image';
import { CheckCircle2, UserCheck, ShieldAlert, Sparkles } from 'lucide-react';

export default function ManagerSpotlight() {
  return (
    <section className="py-20 md:py-28 bg-background-2 dark:bg-background-8 border-y border-stroke-2 dark:border-stroke-6" id="account-manager">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 xl:gap-16">
          {/* Left Column: Manager value proposition */}
          <div className="lg:col-span-7 space-y-6">
            <RevealAnimation delay={0.1}>
              <div className="inline-flex items-center justify-center rounded-full border border-stroke-2 dark:border-stroke-6 bg-white/70 dark:bg-background-7/70 backdrop-blur-xs px-4.5 py-1.5 text-xs md:text-sm font-normal text-secondary/80 dark:text-accent/80 shadow-2xs">
                <span>Dedicated Marketing Leadership</span>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-secondary dark:text-accent tracking-tight leading-[1.14]">
                An Expert Marketing Manager
                <br />
                Dedicated to Your Revenue
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="text-secondary/65 dark:text-accent/65 text-sm sm:text-base md:text-lg leading-relaxed font-normal pt-1">
                Direct 1-on-1 accountability, daily ad monitoring, and active budget defense — no entry-level interns or automated guesswork.
              </p>
            </RevealAnimation>

            {/* Checklist items */}
            <div className="space-y-4 pt-3">
              <RevealAnimation delay={0.35}>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-background-7 border border-stroke-2 dark:border-stroke-6 shadow-sm">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base text-secondary dark:text-accent">
                      Direct WhatsApp &amp; Phone Line
                    </h4>
                    <p className="text-xs md:text-sm text-secondary/65 dark:text-accent/65 mt-0.5 leading-relaxed">
                      Instant feedback loops, weekly check-ins, and fast creative approvals directly in your dedicated group.
                    </p>
                  </div>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.4}>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-background-7 border border-stroke-2 dark:border-stroke-6 shadow-sm">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-red-500/15 text-red-600 dark:text-red-400 font-bold">
                    <ShieldAlert className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base text-secondary dark:text-accent">
                      Strict Ads Kill &amp; Ads Scale Protocol
                    </h4>
                    <p className="text-xs md:text-sm text-secondary/65 dark:text-accent/65 mt-0.5 leading-relaxed">
                      Continuous vigilance over CPM, CTR, and CPA. Losing ads are cut within hours; high-performing ads are aggressively scaled.
                    </p>
                  </div>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.45}>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-background-7 border border-stroke-2 dark:border-stroke-6 shadow-sm">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 font-bold">
                    <Sparkles className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base text-secondary dark:text-accent">
                      Strategic Multi-Interval Reviews
                    </h4>
                    <p className="text-xs md:text-sm text-secondary/65 dark:text-accent/65 mt-0.5 leading-relaxed">
                      Daily micro-updates, weekly metric retrospectives, and monthly forward-looking strategy meetings.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>

          {/* Right Column: Official Flyer Card Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <RevealAnimation delay={0.3} direction="left" offset={30}>
              <div className="relative rounded-[32px] border border-stroke-2 dark:border-stroke-6 bg-white dark:bg-background-7 p-4 md:p-6 shadow-2xl max-w-[440px] w-full">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4.2] w-full bg-slate-900 border border-stroke-2 dark:border-stroke-6 shadow-md group">
                  <Image
                    src="/images/business-scale-up-flyer.jpg"
                    alt="Source 365 Business Scale-Up Service Official Program Poster"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 440px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs font-semibold text-white">Official Service Framework Poster</span>
                  </div>
                </div>
                <div className="pt-4 text-center">
                  <p className="text-xs font-bold text-secondary/70 dark:text-accent/70 uppercase tracking-wider">
                    Official Service Program Blueprint
                  </p>
                  <p className="text-[11px] text-secondary/50 dark:text-accent/50 mt-1">
                    Verified Source 365 Growth Architecture
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
