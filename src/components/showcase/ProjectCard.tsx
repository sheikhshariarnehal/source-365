'use client';

import React from 'react';
import Image from 'next/image';
import { ShowcaseProject } from '@/data/showcase-data';
import { Card, CardPanel } from '@/components/ui/card';
import { ButtonWithIcon } from '@/components/ui/button/ButtonWithIcon';
import TechBadge from '@/components/showcase/TechBadge';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface ProjectCardProps {
  project: ShowcaseProject;
  variant?: 'default' | 'spotlight';
  className?: string;
}

export default function ProjectCard({
  project,
  variant = 'default',
  className,
}: ProjectCardProps) {
  const isSpotlight = variant === 'spotlight';
  const imgSrc = project.image || project.images?.[0];

  const ImageSection = (
    <div
      className={cn(
        'group/img relative w-full overflow-hidden bg-slate-100 dark:bg-white/[0.03] select-none',
        isSpotlight
          ? 'lg:col-span-7 flex flex-col h-full min-h-[280px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-stroke-1 dark:border-white/10'
          : 'border-b border-stroke-1 dark:border-white/10'
      )}>
      <div
        className={cn(
          'relative w-full overflow-hidden',
          isSpotlight
            ? 'h-64 sm:h-80 lg:h-full lg:min-h-full aspect-[16/10] lg:aspect-auto flex-1'
            : 'aspect-[16/10]'
        )}>
        <Image
          src={imgSrc}
          alt={`${project.title} preview`}
          fill
          priority={isSpotlight}
          sizes={
            isSpotlight
              ? '(max-width: 1024px) 100vw, 58vw'
              : '(max-width: 768px) 100vw, 50vw'
          }
          className="object-cover object-center transition-transform duration-700 ease-out group-hover/card:scale-103"
        />
      </div>

      {project.highlight && (
        <div
          className={cn(
            'absolute top-3.5 right-3.5 z-20 pointer-events-none',
            isSpotlight && 'lg:hidden'
          )}>
          <span className="rounded-full bg-black/80 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white shadow-xs">
            {project.highlight}
          </span>
        </div>
      )}
    </div>
  );

  const DetailsSection = (
    <CardPanel
      className={cn(
        'flex flex-col justify-between',
        isSpotlight
          ? 'lg:col-span-5 p-6 sm:p-8 lg:p-10 h-full space-y-5'
          : 'p-6 sm:p-7 flex-1 space-y-5'
      )}>
      <div className="space-y-3">
        {isSpotlight && project.highlight && (
          <span className="hidden lg:inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#e6fbf3] text-[#00b074] dark:bg-emerald-950/60 dark:text-emerald-400">
            {project.highlight}
          </span>
        )}

        <h3
          className={cn(
            'font-bold text-secondary dark:text-accent tracking-tight leading-snug',
            isSpotlight ? 'text-2xl sm:text-3xl' : 'text-xl'
          )}>
          {project.title}
        </h3>

        <p
          className={cn(
            'text-sm text-secondary/70 dark:text-accent/70 leading-relaxed',
            !isSpotlight && 'line-clamp-3'
          )}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <TechBadge key={tag} tag={tag} />
          ))}
        </div>
      </div>

      <div className="pt-2">
        <ButtonWithIcon
          href={project.liveUrl}
          label="View Live Project"
          aria-label={`View live demo of ${project.title}`}
          className={cn(
            'font-semibold shadow-xs',
            isSpotlight ? 'h-11 ps-6 pe-14 text-sm' : 'h-10 ps-5 pe-12 text-xs'
          )}
          iconClassName={
            isSpotlight
              ? 'w-9 h-9 group-hover/btn:right-[calc(100%-40px)]'
              : 'w-8 h-8 group-hover/btn:right-[calc(100%-36px)]'
          }
          icon={<ExternalLink size={isSpotlight ? 15 : 14} />}
        />
      </div>
    </CardPanel>
  );

  if (isSpotlight) {
    return (
      <Card
        as="article"
        className={cn(
          'mb-10 sm:mb-12 overflow-hidden rounded-3xl border border-stroke-1 bg-white dark:border-white/10 dark:bg-background-8 transition-all duration-300 hover:shadow-xl',
          className
        )}>
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {ImageSection}
          {DetailsSection}
        </div>
      </Card>
    );
  }

  return (
    <Card
      as="article"
      className={cn(
        'relative flex flex-col justify-between h-full overflow-hidden rounded-3xl border border-stroke-1 bg-white dark:border-white/10 dark:bg-background-8 transition-all duration-300 hover:shadow-xl',
        className
      )}>
      {ImageSection}
      {DetailsSection}
    </Card>
  );
}
