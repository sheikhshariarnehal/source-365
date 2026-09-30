'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

interface SquadMember {
  id: number;
  name: string;
  role: string;
  image: string;
  slug: string;
  desktopPosition: string;
  defaultZ: number;
}

const squadMembers: SquadMember[] = [
  {
    id: 1,
    name: 'John Smith',
    role: 'CEO & Founder',
    image: '/images/ns-avatar-4.png',
    slug: 'jamessmith',
    desktopPosition: 'left-[2%] top-[85px]',
    defaultZ: 10,
  },
  {
    id: 2,
    name: 'John Lacker',
    role: 'Creative Director',
    image: '/images/ns-avatar-5.png',
    slug: 'davidbrown',
    desktopPosition: 'left-[19%] top-[205px]',
    defaultZ: 25,
  },
  {
    id: 3,
    name: 'William Finley',
    role: 'Lead Designer',
    image: '/images/ns-avatar-6.png',
    slug: 'cody-fisher',
    desktopPosition: 'left-[38%] top-[15px]',
    defaultZ: 10,
  },
  {
    id: 4,
    name: 'Micheal Jordan',
    role: 'Account Director',
    image: '/images/ns-avatar-7.png',
    slug: 'michaelwilliams',
    desktopPosition: 'left-[53%] top-[245px]',
    defaultZ: 25,
  },
  {
    id: 5,
    name: 'Jack Lavis',
    role: 'Senior Developer',
    image: '/images/ns-avatar-8.png',
    slug: 'robertjohnson',
    desktopPosition: 'left-[71%] top-[125px]',
    defaultZ: 10,
  },
];

const Squad = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <RevealAnimation delay={0.1}>
      <section
        className="py-16 md:py-24 lg:py-32 bg-white dark:bg-black relative overflow-hidden"
        aria-label="Source 365 Squad">
        <div className="main-container px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 md:mb-16 flex flex-col items-center text-center">
            {/* Badge */}
            <RevealAnimation delay={0.1}>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-stroke-3 dark:bg-stroke-6" />
                <span className="badge badge-primary-light inline-flex items-center gap-1.5 uppercase font-semibold text-xs tracking-wider">
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" className="text-primary-500">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  Squad
                </span>
                <span className="h-px w-8 bg-stroke-3 dark:bg-stroke-6" />
              </div>
            </RevealAnimation>

            {/* Title */}
            <RevealAnimation delay={0.2}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-secondary dark:text-accent max-w-[720px] mb-4">
                The people who make it happen
              </h2>
            </RevealAnimation>

            {/* Subtitle */}
            <RevealAnimation delay={0.3}>
              <p className="text-base text-secondary/70 dark:text-accent/70 max-w-[620px] leading-relaxed mb-7">
                Each member of our team brings deep expertise and a shared focus— building solutions that are not only beautiful but built to perform.
              </p>
            </RevealAnimation>

            {/* View All Members Button */}
            <RevealAnimation delay={0.4}>
              <Link
                href="/team"
                className="group inline-flex items-center gap-2.5 rounded-full border border-stroke-3 dark:border-stroke-6 bg-white dark:bg-background-7 hover:bg-background-1 dark:hover:bg-background-8 px-6 py-2.5 text-sm font-semibold text-secondary dark:text-accent transition-all shadow-sm hover:shadow-md">
                <span>View All Members</span>
                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </Link>
            </RevealAnimation>
          </div>

          {/* Desktop Overlapping Staggered Composition (>= md) */}
          <div className="hidden md:block relative mx-auto w-full max-w-[1140px] h-[640px] lg:h-[680px]">
            {squadMembers.map((member) => {
              const isHovered = hoveredId === member.id;
              const isAnyHovered = hoveredId !== null;
              const isOther = isAnyHovered && !isHovered;

              return (
                <div
                  key={member.id}
                  onMouseEnter={() => setHoveredId(member.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{ zIndex: isHovered ? 60 : member.defaultZ }}
                  className={`absolute w-[250px] lg:w-[275px] transition-all duration-500 ease-out cursor-pointer ${member.desktopPosition}`}>
                  <div
                    className={`rounded-2xl bg-white dark:bg-background-7 p-2.5 pb-4 shadow-xl transition-all duration-500 border border-black/5 dark:border-white/5 ${
                      isHovered
                        ? 'scale-[1.08] shadow-2xl filter blur-0 opacity-100 ring-4 ring-white dark:ring-background-7'
                        : isOther
                        ? 'filter blur-[5px] opacity-40 scale-[0.96]'
                        : 'filter blur-0 opacity-100 scale-100'
                    }`}>
                    {/* Member Photo */}
                    <div className="relative w-full h-[230px] lg:h-[250px] rounded-xl bg-background-3 dark:bg-background-8 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="300px"
                      />
                    </div>

                    {/* Card Info Bar */}
                    <div className="pt-3 px-1.5 flex items-center justify-between">
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-secondary dark:text-accent leading-snug">
                          {member.name}
                        </h4>
                        <p className="text-xs text-secondary/60 dark:text-accent/60 mt-0.5">
                          {member.role}
                        </p>
                      </div>

                      {/* Social Icon Button */}
                      <div className="size-7 rounded-full bg-background-2 dark:bg-background-6 flex items-center justify-center text-secondary/70 dark:text-accent/70 hover:bg-[#8b5cf6] hover:text-white transition-colors">
                        <svg width={11} height={11} viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 23.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Staggered Cards View (< md) */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 pb-8">
            {squadMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-2xl bg-white dark:bg-background-7 p-2.5 pb-4 shadow-lg border border-black/5 dark:border-white/5">
                <div className="relative w-full h-[240px] rounded-xl bg-background-3 dark:bg-background-8 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="pt-3 px-1.5 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-secondary dark:text-accent leading-snug">
                      {member.name}
                    </h4>
                    <p className="text-xs text-secondary/60 dark:text-accent/60 mt-0.5">
                      {member.role}
                    </p>
                  </div>
                  <div className="size-7 rounded-full bg-background-2 dark:bg-background-6 flex items-center justify-center text-secondary/70 dark:text-accent/70">
                    <svg width={11} height={11} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 23.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Squad;
