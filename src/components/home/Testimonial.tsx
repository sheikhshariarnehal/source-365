'use client';

import { cn } from '@/utils/cn';
import gradient22Img from '@public/images/ns-img-510.png';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

import { Star } from 'lucide-react';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.5-.14-2.75-.14-2.8 0-4.75 1.7-4.75 4.9v2.6H7v4h3.5V22h3.5v-8.5z" />
  </svg>
);

interface TestimonialCard {
  id: number;
  name: string;
  company: string;
  avatar: string;
  testimonial: string;
  twitterUrl: string;
  rating?: number;
}

const testimonialCards: TestimonialCard[] = [
  {
    id: 1,
    name: 'Tanvir Hossain',
    company: 'Apex Retail BD',
    avatar: '/images/avatars/avatar-1.jpg',
    testimonial:
      'SOURCE 365 overhauled our e-commerce digital architecture and hyper-targeted our Meta ad campaigns. Our qualified inbound orders jumped 280% within the first 60 days.',
    twitterUrl: 'https://facebook.com/source365bd',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    company: 'Nova Direct Commerce',
    avatar: '/images/avatars/avatar-2.jpg',
    testimonial:
      'The Source 365 Growth Program took us from erratic ad spend to consistent 5.2x ROAS. Their server-side tracking setup completely resolved our iOS attribution blind spots.',
    twitterUrl: 'https://facebook.com/source365bd',
    rating: 5,
  },
  {
    id: 3,
    name: 'Rafiqul Islam',
    company: 'NextGen Logistics & Tech',
    avatar: '/images/avatars/avatar-3.jpg',
    testimonial:
      'From custom web development and SQA to high-volume campaigns, SOURCE 365 delivers like a dedicated, top-tier in-house digital department. Unbeatable technical execution.',
    twitterUrl: 'https://facebook.com/source365bd',
    rating: 5,
  },
];

interface TestimonialProps {
  className?: string;
  bgClassName?: string;
  gradientClassName?: string;
  cardClassName?: string;
  showBadge?: boolean;
}

const Testimonial = ({
  className,
  bgClassName = 'bg-background-3 dark:bg-background-7',
  gradientClassName = 'from-background-3 dark:from-background-7',
  cardClassName,
  showBadge = false,
}: TestimonialProps = {}) => {
  return (
    <RevealAnimation delay={0.1}>
      <section className={cn(bgClassName, 'pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[120px] xl:pb-[120px]', className)}>
        <div className="main-container">
          <div className="mb-10 md:mb-14 text-center space-y-3">
            {showBadge && (
              <RevealAnimation delay={0.1}>
                <div className="inline-flex items-center justify-center rounded-full border border-stroke-2 dark:border-stroke-6 bg-white/70 dark:bg-background-7/70 backdrop-blur-xs px-4.5 py-1.5 text-xs md:text-sm font-normal text-secondary/80 dark:text-accent/80 shadow-2xs">
                  <span>Client Reviews</span>
                </div>
              </RevealAnimation>
            )}
            <RevealAnimation delay={0.15}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-secondary dark:text-accent tracking-tight leading-[1.14]">
                What Our Partners Say
              </h2>
            </RevealAnimation>
          </div>
        </div>

        <RevealAnimation delay={0.2}>
          <div className="relative">
            <div className={cn('pointer-events-none absolute top-0 left-0 z-40 h-full w-[12%] bg-gradient-to-r to-transparent md:w-[18%]', gradientClassName)} />
            <div className={cn('pointer-events-none absolute top-0 right-0 z-40 h-full w-[12%] bg-gradient-to-l to-transparent md:w-[18%]', gradientClassName)} />
            <Marquee pauseOnHover={true} speed={35}>
              <div className="scroll-bar flex items-center gap-x-6 sm:gap-x-8 py-4">
                {testimonialCards.map((testimonial, index) => (
                  <article
                    key={testimonial.id}
                    className={cn(
                      'dark:bg-background-7 group hover:bg-secondary hover:dark:bg-background-8 relative min-w-[300px] cursor-pointer space-y-5 overflow-hidden rounded-[20px] bg-white p-6 sm:p-8 backdrop-blur-[22px] border border-stroke-2 dark:border-stroke-6 transition-all duration-500 ease-in-out sm:min-w-[380px] lg:min-w-[580px] shadow-xs hover:shadow-xl hover:-translate-y-1',
                      cardClassName,
                      index === 0 && 'ml-6 sm:ml-8',
                    )}>
                    <div className="pointer-events-none absolute -top-[147%] -right-[56%] max-w-[500px] rotate-[295deg] opacity-0 blur-[10px] transition-all duration-500 ease-in-out select-none group-hover:opacity-100 lg:-top-[162%] lg:-right-[56%] lg:max-w-[723px]">
                      <Image
                        src={gradient22Img}
                        alt="gradient"
                        className="size-full object-cover"
                        width={723}
                        height={500}
                      />
                    </div>

                    {/* Star Rating */}
                    <div className="relative z-10 flex items-center gap-1">
                      {[...Array(testimonial.rating || 5)].map((_, i) => (
                        <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <blockquote>
                      <p className="relative z-10 text-sm sm:text-base text-secondary/80 dark:text-accent/80 group-hover:text-accent/80 max-w-[520px] leading-relaxed transition-all duration-500 ease-in-out font-normal">
                        &ldquo;{testimonial.testimonial}&rdquo;
                      </p>
                    </blockquote>

                    <div className="relative z-10 flex items-center justify-between pt-2 border-t border-stroke-2/60 dark:border-stroke-6/60 group-hover:border-white/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <figure className="size-[48px] sm:size-[56px] transform overflow-hidden rounded-full transition-transform duration-500 ease-in-out group-hover:scale-[104%] shrink-0 border border-stroke-2 dark:border-stroke-6">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="size-full object-cover"
                            width={84}
                            height={84}
                          />
                        </figure>
                        <div className="space-y-0.5">
                          <h3 className="text-sm sm:text-base font-semibold group-hover:text-accent transform transition-all duration-500 ease-in-out">
                            {testimonial.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-secondary/60 dark:text-accent/60 group-hover:text-accent/60 transform transition-all duration-500 ease-in-out">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${testimonial.name}'s Facebook`}
                        href={testimonial.twitterUrl}
                        className="inline-flex size-8 sm:size-8.5 items-center justify-center rounded-full text-secondary/35 hover:text-secondary hover:bg-secondary/5 dark:text-accent/40 dark:hover:text-white dark:hover:bg-white/10 group-hover:text-white/50 group-hover:hover:text-white transition-all duration-200">
                        <FacebookIcon className="size-3.5 sm:size-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </Marquee>
          </div>
        </RevealAnimation>
      </section>
    </RevealAnimation>
  );
};

export default Testimonial;
