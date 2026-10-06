'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { footerLinks } from '@/data/footer-data';
import { cn } from '@/utils/cn';
import facebook from '@public/images/icons/facebook.svg';
import instagram from '@public/images/icons/instagram.svg';
import linkedin from '@public/images/icons/linkedin.svg';
import tiktok from '@public/images/icons/tiktok.svg';
import youtube from '@public/images/icons/youtube.svg';
import headerLogoDark from '@public/images/logo/header-logo-dark.png';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';
import FooterDivider from './FooterDivider';
import { FlickeringGrid } from '@/registry/magicui/flickering-grid';

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn('bg-black relative z-0 overflow-hidden text-white', className)}>
      <FlickeringGrid
        className="pointer-events-none absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.2}
        flickerChance={0.1}
      />

      <div className="main-container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 justify-between gap-y-10 pt-12 pb-8 sm:gap-y-12 sm:pt-16 sm:pb-12 xl:gap-x-10 xl:gap-y-16 xl:pt-[90px]">

          {/* Brand & Social */}
          <RevealAnimation delay={0.1}>
            <div className="col-span-12 xl:col-span-4">
              <div className="max-w-md xl:max-w-[320px]">
                <figure className="w-auto max-w-[170px] sm:max-w-[195px]">
                  <Image src={headerLogoDark} alt="Source 365 Logo" priority className="h-auto w-full" />
                </figure>
                <p className="text-accent/60 text-sm sm:text-tagline-1 mt-3 sm:mt-4 mb-5 sm:mb-7 font-normal leading-relaxed">
                  Your ultimate destination for A to Z digital solutions. We build extraordinary digital
                  experiences, high-conversion ad funnels, and robust software engineering.
                </p>

                {/* Social Icons with accessible touch targets */}
                <div className="flex items-center flex-wrap gap-2.5 sm:gap-3">
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/source365bd"
                    aria-label="Facebook"
                    className="footer-social-link inline-flex min-h-[40px] min-w-[40px] items-center justify-center p-2 rounded-lg transition-transform hover:-translate-y-0.5 active:scale-95">
                    <Image className="size-5 sm:size-6" src={facebook} alt="Facebook" />
                  </Link>
                  <div className="bg-stroke-1/20 h-5 w-px shrink-0" />
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/source365.official"
                    aria-label="Instagram"
                    className="footer-social-link inline-flex min-h-[40px] min-w-[40px] items-center justify-center p-2 rounded-lg transition-transform hover:-translate-y-0.5 active:scale-95">
                    <Image className="size-5 sm:size-6" src={instagram} alt="Instagram" />
                  </Link>
                  <div className="bg-stroke-1/20 h-5 w-px shrink-0" />
                  <Link
                    target="_blank"
                    href="https://www.youtube.com/@source365"
                    aria-label="YouTube"
                    className="footer-social-link inline-flex min-h-[40px] min-w-[40px] items-center justify-center p-2 rounded-lg transition-transform hover:-translate-y-0.5 active:scale-95">
                    <Image className="size-5 sm:size-6" src={youtube} alt="YouTube" />
                  </Link>
                  <div className="bg-stroke-1/20 h-5 w-px shrink-0" />
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/company/source365"
                    aria-label="LinkedIn"
                    className="footer-social-link inline-flex min-h-[40px] min-w-[40px] items-center justify-center p-2 rounded-lg transition-transform hover:-translate-y-0.5 active:scale-95">
                    <Image className="size-5 sm:size-6" src={linkedin} alt="LinkedIn" />
                  </Link>
                  <div className="bg-stroke-1/20 h-5 w-px shrink-0" />
                  <Link
                    target="_blank"
                    href="https://www.tiktok.com/@source365"
                    aria-label="TikTok"
                    className="footer-social-link inline-flex min-h-[40px] min-w-[40px] items-center justify-center p-2 rounded-lg transition-transform hover:-translate-y-0.5 active:scale-95">
                    <Image className="size-5 sm:size-6" src={tiktok} alt="TikTok" />
                  </Link>
                </div>
              </div>
            </div>
          </RevealAnimation>

          {/* Navigation Columns */}
          <div className="col-span-12 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:gap-8 xl:col-span-8">
            {footerLinks.map(({ title, links }, index) => (
              <div className="col-span-1" key={title}>
                <RevealAnimation delay={0.2 + index * 0.1}>
                  <div className="space-y-3.5 sm:space-y-5 lg:space-y-6">
                    <p className="text-base sm:text-heading-6 text-primary-50 font-semibold sm:font-normal tracking-tight">
                      {title}
                    </p>
                    <ul className="space-y-2.5 sm:space-y-3.5 lg:space-y-4">
                      {links.map(({ label, href }) => (
                        <li key={label}>
                          <Link href={href} className="footer-link inline-block py-0.5 text-sm sm:text-tagline-1">
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealAnimation>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative pt-6 sm:pt-[26px] pb-16 sm:pb-10 text-center">
          <FooterDivider className="bg-accent/10 dark:bg-stroke-6" />
          <RevealAnimation delay={0.7} offset={10} start="top 105%">
            <p className="text-xs sm:text-tagline-1 text-accent/60 leading-relaxed font-normal">
              © 2025 <strong className="text-white font-semibold">Source 365</strong>. All Rights Reserved. Designed for the Future • A to Z Digital Solutions
            </p>
          </RevealAnimation>
        </div>
      </div>

      <ThemeToggle />
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;
