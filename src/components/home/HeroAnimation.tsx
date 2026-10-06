'use client';

import React, { useState, useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import heroAnimationData from '@public/animations/hero.json';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

const HeroAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Destroy any existing instance
    if (animRef.current) {
      animRef.current.destroy();
    }

    // Load animation directly from in-memory JSON data to avoid XHR extension conflicts and load instantly
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: heroAnimationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet',
        progressiveLoad: true,
      },
    });

    anim.addEventListener('DOMLoaded', () => {
      // Precise cropped viewBox so all elements are 100% visible with zero extra whitespace
      const svg = containerRef.current?.querySelector('svg');
      if (svg) {
        svg.setAttribute('viewBox', '263.2 56 1412.8 894');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.style.width = '100%';
        svg.style.height = 'auto';
        svg.style.display = 'block';
      }
    });

    animRef.current = anim;

    return () => {
      anim.destroy();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }, 500);
  };

  return (
    <div className="relative w-full max-w-[620px] lg:max-w-[580px] xl:max-w-[680px] 2xl:max-w-[740px] flex flex-col items-center justify-center">
      {/* Live Animated Vector Illustration */}
      <div
        ref={containerRef}
        className="relative w-full flex items-center justify-center select-none overflow-visible min-h-[260px] sm:min-h-[320px] lg:min-h-[340px] xl:min-h-[380px]"
        aria-label="A to Z Digital Solutions Animation"
      />

      {/* Polished Email Contact Form - Minimal Border Radius Style */}
      <div className="w-full max-w-[420px] sm:max-w-[460px] md:max-w-[480px] mt-1 sm:mt-2 px-2 sm:px-0">
        <form
          onSubmit={handleSubmit}
          className="group/form relative flex items-center rounded-lg border border-stroke-1 dark:border-white/10 bg-white dark:bg-[#13171E] p-1.5 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.06),0_4px_12px_-2px_rgba(0,0,0,0.03)] dark:shadow-[0_10px_35px_-5px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-stroke-1/90 dark:hover:border-white/20 hover:shadow-[0_14px_35px_-5px_rgba(0,0,0,0.08)] focus-within:border-secondary/40 dark:focus-within:border-white/40 focus-within:ring-2 focus-within:ring-secondary/5 dark:focus-within:ring-white/5"
        >
          {submitted ? (
            <div className="flex w-full items-center justify-center gap-2.5 py-2 px-4 text-sm font-medium text-emerald-600 dark:text-emerald-400 animate-in fade-in duration-300">
              <CheckCircle2 className="size-5 shrink-0" />
              <span>Thanks! We&apos;ll be in touch shortly.</span>
            </div>
          ) : (
            <>
              <div className="flex items-center pl-2 sm:pl-2.5 text-secondary/50 dark:text-accent/50 group-focus-within/form:text-secondary dark:group-focus-within/form:text-accent transition-colors duration-200">
                <Mail className="size-4.5 sm:size-5 shrink-0 stroke-[1.75]" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                aria-label="Enter your email address"
                className="w-full bg-transparent px-2.5 sm:px-3 py-1.5 text-sm sm:text-base text-secondary dark:text-accent placeholder:text-secondary/40 dark:placeholder:text-accent/40 font-normal focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                aria-label="Send email"
                className="group/btn flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-md bg-secondary text-white hover:bg-black dark:bg-white dark:text-secondary dark:hover:bg-accent transition-all duration-300 hover:scale-[1.04] active:scale-[0.96] shadow-sm disabled:opacity-60 cursor-pointer"
              >
                {loading ? (
                  <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                ) : (
                  <Send className="size-4 -translate-x-0.5 group-hover/btn:translate-x-0 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                )}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default HeroAnimation;
