'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { mobileMenuData } from '@/data/navbar-data';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import headerLogoDark from '@public/images/logo/header-logo-dark.png';
import headerLogo from '@public/images/logo/header-logo.png';
import logoIconDark from '@public/images/logo/logo-icon-dark.png';
import logoIcon from '@public/images/logo/logo-icon.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ButtonWithIcon } from '@/components/ui/button/ButtonWithIcon';
import MobileMenu from '../mobile-menu/MobileMenu';
import MobileMenuButton from '../mobile-menu/MobileMenuButton';
import ServicesMenu from './ServicesMenu';

const Navbar = () => {
  const [menuDropdownId, setMenuDropdownId] = useState<string | null>(null);
  const { isScrolled } = useNavbarScroll(150);

  const handleMenuHover = (dropdownId?: string | null) => {
    setMenuDropdownId(dropdownId || null);
  };

  return (
    <MobileMenuProvider>
      <header
        onMouseLeave={() => handleMenuHover(null)}
        className={cn(
          'lp:!max-w-[1290px] fixed top-5 left-1/2 z-50 mx-auto w-full max-w-[350px] -translate-x-1/2 transition-all duration-500 min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]',
          isScrolled && 'top-2',
        )}>
        <RevealAnimation direction="up" offset={100} delay={0.1} instant>
          <div
            className={cn(
              'border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 mx-auto flex items-center justify-between rounded-full border px-2.5 py-2.5 xl:py-0',
            )}>
            {/* Logo */}
            <div className="flex items-center justify-center pl-2 sm:pl-3">
              <Link href="/" className="inline-flex items-center">
                <span className="sr-only">Source 365</span>
                <figure className="hidden lg:block lg:max-w-[185px] xl:max-w-[205px]">
                  <Image src={headerLogo} alt="Source 365" className="block h-auto w-full dark:hidden" priority />
                  <Image src={headerLogoDark} alt="Source 365" className="hidden h-auto w-full dark:block" priority />
                </figure>
                <figure className="block max-w-[48px] lg:hidden">
                  <Image src={logoIcon} alt="Source 365" className="block h-auto w-full dark:hidden" priority />
                  <Image src={logoIconDark} alt="Source 365" className="hidden h-auto w-full dark:block" priority />
                </figure>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center xl:flex">
              <ul className="flex items-center">
                {/* IT Services Dropdown */}
                <li
                  className="group/item relative cursor-pointer py-2.5"
                  data-menu="services-mega-menu"
                  onMouseEnter={() => handleMenuHover('services-mega-menu')}>
                  <button
                    type="button"
                    className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex cursor-pointer items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                    <span>IT Services</span>
                    <span className="block origin-center translate-y-px transition-all duration-300 group-hover/item:rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </button>
                  <ServicesMenu menuDropdownId={menuDropdownId} setMenuDropdownId={setMenuDropdownId} />
                </li>

                {/* Direct Links */}
                <li className="relative cursor-pointer py-2.5">
                  <Link
                    href="/growth-program"
                    className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                    <span>Growth Program</span>
                  </Link>
                </li>

                <li className="relative cursor-pointer py-2.5">
                  <Link
                    href="/business"
                    className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                    <span>Business Solutions</span>
                  </Link>
                </li>

                <li className="relative cursor-pointer py-2.5">
                  <Link
                    href="/about"
                    className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                    <span>About Us</span>
                  </Link>
                </li>

                <li className="relative cursor-pointer py-2.5">
                  <Link
                    href="/faq"
                    className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                    <span>FAQ</span>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Right Action Button */}
            <div className="hidden items-center justify-center xl:flex">
              <ButtonWithIcon
                href="/contact-us"
                label="Contact Us"
                className="h-10 text-xs ps-5 pe-12 hover:ps-12 hover:pe-5"
                iconClassName="w-8 h-8 group-hover:right-[calc(100%-36px)]"
              />
            </div>

            <MobileMenuButton />
          </div>
        </RevealAnimation>
      </header>
      <MobileMenu menuData={mobileMenuData} />
    </MobileMenuProvider>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
