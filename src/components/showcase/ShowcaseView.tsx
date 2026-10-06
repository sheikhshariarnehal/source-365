'use client';

import React, { useTransition, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  showcaseProjects,
  showcaseCategories,
  ShowcaseCategoryId,
  ShowcaseProject,
} from '@/data/showcase-data';
import ProjectCard from '@/components/showcase/ProjectCard';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';

export default function ShowcaseView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get('category') as ShowcaseCategoryId) || 'all';

  const [activeCategory, setActiveCategory] = useState<ShowcaseCategoryId>(initialCategory);
  const [, startTransition] = useTransition();

  // Sync state when URL query changes
  useEffect(() => {
    const cat = (searchParams.get('category') as ShowcaseCategoryId) || 'all';
    setActiveCategory(cat);
  }, [searchParams]);

  const handleCategoryChange = (category: ShowcaseCategoryId) => {
    setActiveCategory(category);
    startTransition(() => {
      const url = category === 'all' ? '/showcase' : `/showcase?category=${category}`;
      router.replace(url, { scroll: false });
    });
  };

  const filteredProjects: ShowcaseProject[] =
    activeCategory === 'all'
      ? showcaseProjects
      : showcaseProjects.filter((project) => project.category === activeCategory);

  const featuredProject =
    filteredProjects.find((p) => p.featured) || filteredProjects[0];
  const companionProjects = filteredProjects.filter((p) => p.id !== featuredProject?.id);

  return (
    <section className="pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-32">
      <div className="relative main-container px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Top Header: Unobstructed Full-Width Page Flow */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <RevealAnimation delay={0.1}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-secondary dark:text-accent tracking-tight">
              Selected Work
            </h1>
          </RevealAnimation>

          <RevealAnimation delay={0.15}>
            <p className="mt-3 text-base sm:text-lg text-secondary/70 dark:text-accent/70 leading-relaxed">
              Production websites, platforms, and dashboards engineered by Source 365.
            </p>
          </RevealAnimation>
        </div>

        {/* Mobile / Tablet Horizontal Category Bar */}
        <RevealAnimation delay={0.2}>
          <div className="2xl:hidden mb-10 sm:mb-12 flex justify-center">
            <nav
              aria-label="Filter projects by category"
              className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-stroke-1 bg-white/90 p-1.5 dark:border-white/10 dark:bg-background-8 shadow-xs">
              {showcaseCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                const count =
                  cat.id === 'all'
                    ? showcaseProjects.length
                    : showcaseProjects.filter((p) => p.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryChange(cat.id)}
                    aria-pressed={isActive}
                    aria-label={`Filter by ${cat.label} (${count} projects)`}
                    className={cn(
                      'cursor-pointer rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium transition-all flex items-center gap-2',
                      isActive
                        ? 'bg-secondary text-white dark:bg-white dark:text-secondary shadow-xs font-semibold'
                        : 'text-secondary/80 hover:text-secondary hover:bg-slate-100 dark:text-accent/80 dark:hover:text-accent dark:hover:bg-white/5'
                    )}>
                    <span>{cat.label}</span>
                    <span
                      className={cn(
                        'text-[11px] rounded-full px-1.5 py-0.2 font-semibold',
                        isActive
                          ? 'bg-white/20 text-white dark:bg-black/10 dark:text-secondary'
                          : 'bg-slate-100 text-secondary/60 dark:bg-white/10 dark:text-accent/60'
                      )}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </RevealAnimation>

        {/* Projects Section with Anchored Outer Sticky Vertical Sidebar */}
        <div className="relative">
          {/* Desktop Floating Outer Vertical Sidebar (Sticky as user scrolls projects) */}
          <aside className="hidden 2xl:block absolute -left-64 min-[1680px]:-left-72 top-0 h-full w-56 min-[1680px]:w-64 z-30 pointer-events-none">
            <div className="sticky top-28 pointer-events-auto rounded-2xl border border-stroke-1 bg-white/95 p-3 dark:border-white/10 dark:bg-background-8/95 shadow-md backdrop-blur-md">
              <div className="px-3 py-1.5 mb-1 text-[11px] font-semibold uppercase tracking-wider text-secondary/50 dark:text-accent/50">
                Filter by Category
              </div>
              <nav
                aria-label="Filter projects by category"
                className="flex flex-col gap-1.5">
                {showcaseCategories.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  const count =
                    cat.id === 'all'
                      ? showcaseProjects.length
                      : showcaseProjects.filter((p) => p.category === cat.id).length;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategoryChange(cat.id)}
                      aria-pressed={isActive}
                      aria-label={`Filter by ${cat.label} (${count} projects)`}
                      className={cn(
                        'cursor-pointer rounded-xl px-3.5 py-2.5 text-xs font-medium transition-all flex items-center justify-between gap-2 text-left w-full',
                        isActive
                          ? 'bg-secondary text-white dark:bg-white dark:text-secondary shadow-xs font-semibold'
                          : 'text-secondary/80 hover:text-secondary hover:bg-slate-100 dark:text-accent/80 dark:hover:text-accent dark:hover:bg-white/5'
                      )}>
                      <span className="truncate">{cat.label}</span>
                      <span
                        className={cn(
                          'text-[11px] rounded-full px-2 py-0.5 font-semibold transition-colors shrink-0',
                          isActive
                            ? 'bg-white/20 text-white dark:bg-black/10 dark:text-secondary'
                            : 'bg-slate-100 text-secondary/60 dark:bg-white/10 dark:text-accent/60'
                        )}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Full-Width Projects Feed */}
          <div className="space-y-8 sm:space-y-10">
            {/* Featured Spotlight Card */}
            {featuredProject && (
              <RevealAnimation delay={0.25}>
                <ProjectCard project={featuredProject} variant="spotlight" />
              </RevealAnimation>
            )}

            {/* Companion Projects 2-Column Grid */}
            {companionProjects.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {companionProjects.map((project, index) => (
                  <RevealAnimation key={project.id} delay={0.1 + (index % 2) * 0.08}>
                    <ProjectCard project={project} />
                  </RevealAnimation>
                ))}
              </div>
            )}

            {/* Back Link */}
            <div className="pt-6 text-center">
              <Link
                href="/services/web-development"
                className="inline-flex items-center text-xs font-medium text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent transition-colors">
                ← Return to Web Development Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
