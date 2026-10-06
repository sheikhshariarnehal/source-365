'use client';

import React, { useState, useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import heroAnimationData from '@public/animations/hero.json';
import { Send, CheckCircle2 } from 'lucide-react';

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

      {/* Email Contact Form - Minimal Border Radius & Subtle Elevation */}
      <div className="w-full max-w-[420px] sm:max-w-[460px] md:max-w-[480px] mt-1 sm:mt-1.5 px-2 sm:px-0">
        <form
          onSubmit={handleSubmit}
          className="relative flex items-center rounded-lg border border-slate-100 dark:border-white/5 bg-white dark:bg-slate-900/95 p-1.5 shadow-xl shadow-slate-900/5 dark:shadow-black/30 transition-all focus-within:border-blue-400/40 focus-within:ring-2 focus-within:ring-blue-500/10"
        >
          {submitted ? (
            <div className="flex w-full items-center justify-center gap-2 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="size-4.5 shrink-0" />
              <span>Thanks! We&apos;ll be in touch shortly.</span>
            </div>
          ) : (
            <>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                aria-label="Enter your email address"
                className="w-full bg-transparent px-3.5 sm:px-4 py-2 text-sm sm:text-base text-slate-800 dark:text-white placeholder:text-[#94A3B8] focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                aria-label="Send email"
                className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-md bg-[#2563EB] hover:bg-[#1D4ED8] text-white transition-all hover:scale-105 active:scale-95 shadow-md shadow-blue-500/30 disabled:opacity-60 cursor-pointer"
              >
                {loading ? (
                  <span className="size-3.5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <Send className="size-4 -translate-x-0.5" />
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
