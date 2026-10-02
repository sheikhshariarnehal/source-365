'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { footerLinks } from '@/data/footer-data';
import { cn } from '@/utils/cn';
import facebook from '@public/images/icons/facebook.svg';
import instagram from '@public/images/icons/instagram.svg';
import linkedin from '@public/images/icons/linkedin.svg';
import tiktok from '@public/images/icons/tiktok.svg';
import youtube from '@public/images/icons/youtube.svg';
import gradientImg from '@public/images/ns-img-532.png';
import headerLogoDark from '@public/images/logo/header-logo-dark.png';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';
import FooterDivider from './FooterDivider';

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn('bg-secondary dark:bg-background-8 relative z-0 overflow-hidden text-white', className)}>
      <RevealAnimation delay={0.3} offset={50} direction="up">
        <figure className="pointer-events-none absolute -top-[1320px] left-1/2 -z-1 size-[1635px] -translate-x-1/2 select-none">
          <Image src={gradientImg} alt="footer gradient" className="size-full object-cover" />
        </figure>
      </RevealAnimation>

      <div className="main-container px-5">
        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-16 pt-16 pb-12 xl:pt-[90px]">

          {/* Brand & Social */}
          <RevealAnimation delay={0.1}>
            <div className="col-span-12 xl:col-span-4">
              <div className="max-w-[306px]">
                <figure className="max-w-[195px]">
                  <Image src={headerLogoDark} alt="Source 365 Logo" priority />
                </figure>
                <p className="text-accent/60 text-tagline-1 mt-4 mb-7 font-normal leading-relaxed">
                  Your ultimate destination for A to Z digital solutions. We build extraordinary digital
                  experiences, high-conversion ad funnels, and robust software engineering.
                </p>

                {/* Social Icons — template style with divider bars */}
                <div className="flex items-center gap-3">
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/source365bd"
                    aria-label="Facebook"
                    className="footer-social-link">
                    <Image className="size-6" src={facebook} alt="Facebook" />
                  </Link>
                  <div className="bg-stroke-1/20 h-6 w-px" />
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/source365.official"
                    aria-label="Instagram"
                    className="footer-social-link">
                    <Image className="size-6" src={instagram} alt="Instagram" />
                  </Link>
                  <div className="bg-stroke-1/20 h-6 w-px" />
                  <Link
                    target="_blank"
                    href="https://www.youtube.com/@source365"
                    aria-label="YouTube"
                    className="footer-social-link">
                    <Image className="size-6" src={youtube} alt="YouTube" />
                  </Link>
                  <div className="bg-stroke-1/20 h-6 w-px" />
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/company/source365"
                    aria-label="LinkedIn"
                    className="footer-social-link">
                    <Image className="size-6" src={linkedin} alt="LinkedIn" />
                  </Link>
                  <div className="bg-stroke-1/20 h-6 w-px" />
                  <Link
                    target="_blank"
                    href="https://www.tiktok.com/@source365"
                    aria-label="TikTok"
                    className="footer-social-link">
                    <Image className="size-6" src={tiktok} alt="TikTok" />
                  </Link>
                </div>
              </div>
            </div>
          </RevealAnimation>

          {/* Navigation Columns */}
          <div className="col-span-12 grid grid-cols-12 gap-x-0 gap-y-8 xl:col-span-8">
            {footerLinks.map(({ title, links }, index) => (
              <div className="col-span-12 md:col-span-4" key={title}>
                <RevealAnimation delay={0.2 + index * 0.1}>
                  <div className="space-y-8">
                    <p className="sm:text-heading-6 text-tagline-1 text-primary-50 font-normal">{title}</p>
                    <ul className="space-y-5">
                      {links.map(({ label, href }) => (
                        <li key={label}>
                          <Link href={href} className="footer-link">
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
        <div className="relative pt-[26px] pb-[42px] text-center">
          <FooterDivider className="bg-accent/10 dark:bg-stroke-6" />
          <RevealAnimation delay={0.7} offset={10} start="top 105%">
            <p className="text-tagline-1 text-primary-50 font-normal">
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
