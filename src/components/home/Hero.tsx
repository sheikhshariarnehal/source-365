'use client';

import avatar1 from '@public/images/ns-avatar-1.png';
import avatar2 from '@public/images/ns-avatar-2.png';
import avatar3 from '@public/images/ns-avatar-3.png';
import Image, { StaticImageData } from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import HeroAnimation from './HeroAnimation';

interface AvatarData {
  id: number;
  src: StaticImageData;
  alt: string;
}

interface ClientLogo {
  id: number;
  name: string;
  light: string;
  dark: string;
  width: number;
  height: number;
}

const clientLogos: ClientLogo[] = [
  { id: 1, name: 'Mantio', light: '/images/icons/client-logo-1.svg', dark: '/images/icons/client-logo-1-white.svg', width: 144, height: 40 },
  { id: 2, name: 'Acme', light: '/images/icons/client-logo-2.svg', dark: '/images/icons/client-logo-2-white.svg', width: 144, height: 40 },
  { id: 3, name: 'Gopro', light: '/images/icons/client-logo-3.svg', dark: '/images/icons/client-logo-3-white.svg', width: 144, height: 40 },
  { id: 4, name: 'Apple', light: '/images/icons/client-logo-4.svg', dark: '/images/icons/client-logo-4-white.svg', width: 144, height: 40 },
  { id: 5, name: 'Kenio', light: '/images/icons/client-logo-5.svg', dark: '/images/icons/client-logo-5-white.svg', width: 144, height: 40 },
];

const avatarData: AvatarData[] = [
  {
    id: 1,
    src: avatar1,
    alt: 'Avatar 1',
  },
  {
    id: 2,
    src: avatar2,
    alt: 'Avatar 2',
  },
  {
    id: 3,
    src: avatar3,
    alt: 'Avatar 3',
  },
];

const Hero = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="relative z-10 bg-[url('/images/ns-img-291.png')] bg-cover bg-center bg-no-repeat pt-[160px] pb-[80px] md:pt-[180px] md:pb-[90px] lg:pt-[200px] lg:pb-[100px] 2xl:pt-[240px]">
        {/* Dark mode background overlay for high contrast readability */}
        <div className="absolute inset-0 -z-10 hidden dark:block bg-[#070B10]/92 pointer-events-none" />

        {/* dot bg  */}
        <figure className="absolute bottom-0 left-1/2 -z-10 h-full w-full max-w-[1362px] -translate-x-1/2 pointer-events-none opacity-60 dark:opacity-20">
          <Image src="/images/ns-img-292.svg" alt="Hero shape" className="h-auto w-full object-contain" width={1362} height={800} priority />
        </figure>

        <div className="main-container z-10">
          {/* Two-Column Split Layout: Details on Left, SVG Image Illustration on Right */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12 2xl:gap-16 mb-16 lg:mb-20">
            {/* Left Column: Details (Badge, Heading, Subtitle, CTAs, Trust Indicator) */}
            <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start text-left">
              <RevealAnimation delay={0.1} direction="left" offset={30}>
                <div>
                  <h1 className="text-secondary dark:text-accent mb-5 font-semibold tracking-[-0.025em] text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[52px] leading-[1.14] text-balance">
                    Your Ultimate Destination for A to Z Digital Solutions
                  </h1>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.2} direction="left" offset={30}>
                <p className="text-secondary/75 dark:text-accent/75 mb-8 max-w-[560px] text-base sm:text-lg leading-[1.65]">
                  We are building extraordinary digital experiences. Accelerate your business with high-ROI Facebook boosting, custom web &amp; mobile engineering, precision server-side tracking, and dedicated growth programs.
                </p>
              </RevealAnimation>

              <RevealAnimation delay={0.3} direction="left" offset={30}>
                <ul className="mb-8 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:items-center">
                  <li className="w-full sm:w-auto">
                    <LinkButton
                      href="/contact-us"
                      className="btn btn-secondary btn-xl dark:btn-accent hover:btn-white dark:hover:btn-white-dark w-full sm:w-auto shadow-xl">
                      Get Free Growth Consultation
                    </LinkButton>
                  </li>
                  <li className="w-full sm:w-auto">
                    <LinkButton
                      href="/services"
                      className="btn hover:btn-secondary dark:btn-dark btn-white btn-xl dark:bg-accent/20 dark:text-secondary w-full border-0 sm:w-auto shadow-md">
                      Explore IT Services
                    </LinkButton>
                  </li>
                </ul>
              </RevealAnimation>

              {/* Avatars and Trust Indicator */}
              <RevealAnimation delay={0.4} direction="left" offset={30}>
                <div className="flex items-center gap-x-4 pt-1 w-full max-w-[520px]">
                  <div className="flex -space-x-3 shrink-0">
                    {avatarData.map((avatar) => (
                      <Image
                        key={avatar.id}
                        className="inline-block size-11 rounded-full bg-[#98AAC3] ring-2 ring-white dark:ring-black object-cover"
                        src={avatar.src}
                        alt={avatar.alt}
                        width={44}
                        height={44}
                      />
                    ))}
                    <div className="text-secondary/80 text-tagline-3 inline-flex size-11 items-center justify-center rounded-full bg-[#98AAC3] font-semibold ring-2 ring-white dark:ring-black">
                      365+
                    </div>
                  </div>
                  <div>
                    <p className="text-secondary dark:text-accent text-tagline-2 block font-semibold">
                      Dedicated Growth Partnership
                    </p>
                    <p className="text-secondary/65 dark:text-accent/65 text-tagline-3 max-w-[280px]">
                      Assigned Key Account Managers &amp; daily campaign monitoring.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            </div>

            {/* Right Column: Animated Vector Illustration */}
            <div className="lg:col-span-5 xl:col-span-6 w-full flex items-center justify-center lg:justify-end">
              <RevealAnimation delay={0.25} direction="right" offset={40}>
                <HeroAnimation />
              </RevealAnimation>
            </div>
          </div>

          {/* Client Logos Strip Across Full Bottom - Infinite Animated Loop Marquee */}
          <RevealAnimation delay={0.5} instant={true}>
            <div className="relative pt-8 lg:pt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <Marquee autoFill speed={35} pauseOnHover={true}>
                <div className="flex items-center gap-12 sm:gap-16 lg:gap-20 pr-12 sm:pr-16 lg:pr-20">
                  {clientLogos.map((logo) => (
                    <figure
                      key={logo.id}
                      className="shrink-0 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                      <Image
                        src={logo.light}
                        alt={`${logo.name} logo`}
                        className="h-8 sm:h-9 w-auto object-contain dark:hidden"
                        width={logo.width}
                        height={logo.height}
                      />
                      <Image
                        src={logo.dark}
                        alt={`${logo.name} logo`}
                        className="hidden h-8 sm:h-9 w-auto object-contain dark:block"
                        width={logo.width}
                        height={logo.height}
                      />
                    </figure>
                  ))}
                </div>
              </Marquee>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Hero;

