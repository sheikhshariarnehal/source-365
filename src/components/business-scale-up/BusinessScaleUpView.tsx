'use client';

import HeroSection from './sections/HeroSection';
import InclusionsSection from './sections/InclusionsSection';
import AchievementsSection from './sections/AchievementsSection';
import Testimonial from '@/components/home/Testimonial';
import PricingSection from './sections/PricingSection';
import FaqSection from './sections/FaqSection';
import CtaSection from './sections/CtaSection';

export default function BusinessScaleUpView() {
  return (
    <main className="bg-white dark:bg-background-9 selection:bg-red-500 selection:text-white">
      <HeroSection />
      <InclusionsSection />
      <AchievementsSection />
      <Testimonial
        bgClassName="bg-transparent py-16 md:py-20"
        gradientClassName="from-white dark:from-background-9"
        showBadge
      />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
