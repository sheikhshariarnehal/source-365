'use client';

import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const CTA = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="border-stroke-4 dark:border-stroke-6 dark:bg-background-5 border-t pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[112px]">
        <div className="main-container">
          <div className="mx-auto max-w-[720px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan mb-5">Start Growing Today</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mb-4 text-secondary dark:text-accent font-medium">Ready to accelerate your brand&apos;s growth?</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mb-8 text-secondary/70 dark:text-accent/70 text-base leading-relaxed">
                Partner with Source 365 for end-to-end digital solutions, data-driven Facebook boosting, and dedicated Key Account Management. Let&apos;s engineer your next growth breakthrough.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <LinkButton
                  href="/contact-us"
                  className="btn btn-secondary hover:btn-white btn-md dark:btn-accent dark:hover:btn-white-dark shadow-xl w-full sm:w-auto">
                  Book Your Strategy Session
                </LinkButton>
                <a
                  href="https://wa.me/8801931623820?text=Hello%20Source%20365%2C%20I%20would%20like%20to%20schedule%20a%20strategy%20call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-white dark:bg-background-6 dark:text-accent hover:btn-secondary dark:hover:btn-white-dark btn-md w-full sm:w-auto flex items-center justify-center gap-2 border border-stroke-2 dark:border-stroke-6 shadow-sm">
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default CTA;
