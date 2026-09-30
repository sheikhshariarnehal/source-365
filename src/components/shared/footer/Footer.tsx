'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { footerLinks } from '@/data/footer-data';
import { cn } from '@/utils/cn';
import facebook from '@public/images/icons/facebook.svg';
import instagram from '@public/images/icons/instagram.svg';
import youtube from '@public/images/icons/youtube.svg';
import gradientImg from '@public/images/ns-img-532.png';
import mainLogoDark from '@public/images/shared/main-logo-dark.svg';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';
import FooterDivider from './FooterDivider';

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn('bg-secondary dark:bg-background-8 relative z-0 overflow-hidden text-white', className)}>
      <RevealAnimation delay={0.3} offset={50} direction="up">
        <figure className="pointer-events-none absolute -top-[1320px] left-1/2 -z-1 size-[1635px] -translate-x-1/2 select-none opacity-40">
          <Image src={gradientImg} alt="footer gradient" className="size-full object-cover" />
        </figure>
      </RevealAnimation>

      <div className="main-container px-5">
        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-12 pt-16 pb-12 xl:pt-[80px]">
          {/* Brand & Contact Information */}
          <RevealAnimation delay={0.1}>
            <div className="col-span-12 xl:col-span-4">
              <div className="max-w-[340px]">
                <figure className="max-w-[190px]">
                  <Image src={mainLogoDark} alt="Source 365 Logo" priority />
                </figure>
                <p className="text-accent/70 text-tagline-1 mt-4 mb-5 font-normal leading-relaxed">
                  Your ultimate destination for A to Z digital solutions. We build extraordinary digital experiences, high-conversion ad funnels, and robust software engineering.
                </p>

                {/* Direct Contact Details */}
                <div className="space-y-2 text-xs text-accent/80 mb-6">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-white">Office:</span>
                    <span>Ashulia School & College Market, Ashulia, Savar, Dhaka, Bangladesh</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-white">Phone:</span>
                    <a href="tel:01931623820" className="hover:text-primary-400 transition-colors">01931-623820</a>
                    <span>/</span>
                    <a href="tel:01408185323" className="hover:text-primary-400 transition-colors">01408-185323</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-white">Email:</span>
                    <a href="mailto:contact@source365.org" className="hover:text-primary-400 transition-colors">contact@source365.org</a>
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  <Link target="_blank" href="https://www.facebook.com/source365bd" aria-label="Facebook">
                    <div className="flex size-9 items-center justify-center rounded-full bg-white/10 hover:bg-primary-500 transition-colors">
                      <Image className="size-4" src={facebook} alt="Facebook" />
                    </div>
                  </Link>
                  <Link target="_blank" href="https://www.instagram.com/source365.official" aria-label="Instagram">
                    <div className="flex size-9 items-center justify-center rounded-full bg-white/10 hover:bg-primary-500 transition-colors">
                      <Image className="size-4" src={instagram} alt="Instagram" />
                    </div>
                  </Link>
                  <Link target="_blank" href="https://www.youtube.com/@source365" aria-label="YouTube">
                    <div className="flex size-9 items-center justify-center rounded-full bg-white/10 hover:bg-primary-500 transition-colors">
                      <Image className="size-4" src={youtube} alt="YouTube" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </RevealAnimation>

          {/* Footer Navigation Columns */}
          <div className="col-span-12 grid grid-cols-12 gap-x-4 gap-y-8 xl:col-span-8">
            {footerLinks.map(({ title, links }, index) => (
              <div className="col-span-12 sm:col-span-4" key={title}>
                <RevealAnimation delay={0.2 + index * 0.1}>
                  <div className="space-y-6">
                    <p className="text-tagline-1 font-semibold text-white tracking-wide">{title}</p>
                    <ul className="space-y-3.5">
                      {links.map(({ label, href }) => (
                        <li key={label}>
                          <Link href={href} className="text-sm text-accent/70 hover:text-white transition-colors duration-200">
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
        <div className="relative pt-6 pb-10 text-center">
          <FooterDivider className="bg-accent/10 dark:bg-stroke-6" />
          <RevealAnimation delay={0.4} offset={10} start="top 105%">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-accent/60">
              <p>© 2026 <strong className="text-white">SOURCE 365</strong>. All Rights Reserved.</p>
              <p className="text-accent/50 font-medium">Designed for the Future • A to Z Digital Solutions</p>
            </div>
          </RevealAnimation>
        </div>
      </div>
      <ThemeToggle />
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;
