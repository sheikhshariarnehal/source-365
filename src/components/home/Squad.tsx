'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import { ButtonWithIcon } from '../ui/button/ButtonWithIcon';

interface SquadMember {
  id: number;
  name: string;
  role: string;
  image: string;
  slug: string;
  desktopPosition: string;
  defaultZ: number;
  entranceDelay: number;
}

const squadMembers: SquadMember[] = [
  {
    id: 1,
    name: 'John Smith',
    role: 'CEO & Founder',
    image: '/images/ns-img-374.jpg',
    slug: 'jamessmith',
    desktopPosition: 'left-[2%] top-[70px]',
    defaultZ: 10,
    entranceDelay: 0,
  },
  {
    id: 2,
    name: 'John Lacker',
    role: 'Creative Director',
    image: '/images/ns-img-381.jpg',
    slug: 'davidbrown',
    desktopPosition: 'left-[19%] top-[190px]',
    defaultZ: 25,
    entranceDelay: 80,
  },
  {
    id: 3,
    name: 'William Finley',
    role: 'Lead Designer',
    image: '/images/ns-img-382.jpg',
    slug: 'cody-fisher',
    desktopPosition: 'left-[38%] top-[10px]',
    defaultZ: 10,
    entranceDelay: 160,
  },
  {
    id: 4,
    name: 'Micheal Jordan',
    role: 'Account Director',
    image: '/images/ns-img-383.jpg',
    slug: 'michaelwilliams',
    desktopPosition: 'left-[53%] top-[225px]',
    defaultZ: 25,
    entranceDelay: 240,
  },
  {
    id: 5,
    name: 'Jack Lavis',
    role: 'Senior Developer',
    image: '/images/ns-img-398.png',
    slug: 'robertjohnson',
    desktopPosition: 'left-[71%] top-[110px]',
    defaultZ: 10,
    entranceDelay: 320,
  },
];

const XIcon = () => (
  <svg width={10} height={10} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 23.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Squad = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const anyHovered = hoveredId !== null;

  return (
    <RevealAnimation delay={0.1}>
      <section
        className="py-16 md:py-24 lg:py-32 bg-white dark:bg-black relative overflow-hidden"
        aria-label="Source 365 Squad">
        <div className="main-container px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 md:mb-16 flex flex-col items-center text-center">
            <RevealAnimation delay={0.1}>
              <div className="mb-5">
                <span className="badge badge-cyan">Squad</span>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h2 className="text-secondary dark:text-accent font-medium max-w-[720px] mb-4">
                The people who make it happen
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="max-w-[620px] text-secondary/70 dark:text-accent/70 leading-relaxed mb-7">
                Each member of our team brings deep expertise and a shared focus — building solutions that are not
                only beautiful but built to perform.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <ButtonWithIcon href="/team" label="View All Members" />
            </RevealAnimation>
          </div>

          {/* ── Desktop: Overlapping spatial composition ── */}
          <div className="hidden md:block relative mx-auto w-full max-w-[1200px] h-[680px] lg:h-[720px]">
            {squadMembers.map((member) => {
              const isActive = hoveredId === member.id;
              const isDimmed = anyHovered && !isActive;

              /* All motion-critical values as inline styles so the browser
                 interpolates them in a single, unambiguous transition. */
              const cardStyle: React.CSSProperties = {
                zIndex: isActive ? 60 : member.defaultZ,
                transform: isActive
                  ? 'translateY(-10px) scale(1.018)'
                  : isDimmed
                    ? 'translateY(0px) scale(0.988)'
                    : 'translateY(0px) scale(1)',
                filter: isDimmed ? 'blur(1.5px)' : 'blur(0px)',
                opacity: isDimmed ? 0.5 : 1,
                transition:
                  'transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 500ms ease, opacity 500ms ease',
                willChange: 'transform, filter, opacity',
              };

              const photoStyle: React.CSSProperties = {
                transform: isActive ? 'scale(1.04)' : 'scale(1)',
                transition: 'transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              };

              const xBtnStyle: React.CSSProperties = {
                transform: isActive ? 'scale(1.12)' : 'scale(1)',
                transition: 'transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              };

              return (
                <div
                  key={member.id}
                  onMouseEnter={() => setHoveredId(member.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={cardStyle}
                  className={`absolute w-[295px] lg:w-[320px] cursor-pointer ${member.desktopPosition}`}>
                  <Link href={`/team/${member.slug}`} tabIndex={0}>
                    <div
                      className={`rounded-2xl bg-white dark:bg-[#11141c] p-2.5 pb-3.5 border transition-[box-shadow,border-color] duration-300 ${
                        isActive
                          ? 'border-slate-300/80 dark:border-white/20 shadow-[0_24px_56px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.06)] dark:shadow-[0_24px_56px_rgba(0,0,0,0.5)]'
                          : 'border-slate-200/60 dark:border-white/[0.06] shadow-[0_4px_16px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.25)]'
                      }`}>
                      {/* Photo — zooms on its own timeline */}
                      <div className="relative w-full h-[270px] lg:h-[295px] rounded-xl bg-background-3 dark:bg-background-8 overflow-hidden">
                        <Image
                          src={member.image}
                          alt={`${member.name}, ${member.role} at Source 365`}
                          fill
                          style={photoStyle}
                          className="object-cover"
                          sizes="300px"
                        />
                      </div>

                      {/* Info bar */}
                      <div className="pt-3 px-1.5 flex items-center justify-between">
                        <div>
                          <h4 className="text-[14.5px] font-semibold text-secondary/90 dark:text-accent/90 leading-snug">
                            {member.name}
                          </h4>
                          <p className="text-[12px] text-secondary/60 dark:text-accent/60 mt-0.5">{member.role}</p>
                        </div>

                        {/* X / social micro-button — spring pop */}
                        <div
                          style={xBtnStyle}
                          className={`size-6.5 rounded-full flex items-center justify-center transition-[background,color] duration-150 ${
                            isActive
                              ? 'bg-secondary dark:bg-white text-white dark:text-secondary'
                              : 'bg-slate-100 dark:bg-white/[0.05] text-secondary/50 dark:text-accent/50 hover:bg-secondary hover:text-white dark:hover:bg-white dark:hover:text-secondary'
                          }`}>
                          <XIcon />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* ── Mobile: simple grid with entrance stagger ── */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 pb-8">
            {squadMembers.map((member, i) => (
              <RevealAnimation key={member.id} delay={0.1 + i * 0.07}>
                <Link href={`/team/${member.slug}`}>
                  <div className="rounded-2xl bg-white dark:bg-[#11141c] p-2.5 pb-3.5 border border-slate-200/60 dark:border-white/[0.06] shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)]">
                    <div className="relative w-full h-[230px] rounded-xl bg-background-3 dark:bg-background-8 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={`${member.name}, ${member.role} at Source 365`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                    <div className="pt-3 px-1.5 flex items-center justify-between">
                      <div>
                        <h4 className="text-[14.5px] font-semibold text-secondary/90 dark:text-accent/90 leading-snug">
                          {member.name}
                        </h4>
                        <p className="text-[12px] text-secondary/60 dark:text-accent/60 mt-0.5">{member.role}</p>
                      </div>
                      <div className="size-6.5 rounded-full bg-slate-100 dark:bg-white/[0.05] flex items-center justify-center text-secondary/60 dark:text-accent/60">
                        <XIcon />
                      </div>
                    </div>
                  </div>
                </Link>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Squad;
