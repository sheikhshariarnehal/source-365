'use client';

import HeroSection from './sections/HeroSection';
import InclusionsSection from './sections/InclusionsSection';
import ManagerSpotlight from './sections/ManagerSpotlight';
import AchievementsSection from './sections/AchievementsSection';
import PricingSection from './sections/PricingSection';
import FaqSection from './sections/FaqSection';
import CtaSection from './sections/CtaSection';

export default function BusinessScaleUpView() {
  return (
    <main className="bg-white dark:bg-background-9 selection:bg-red-500 selection:text-white">
      <HeroSection />
      <InclusionsSection />
      <ManagerSpotlight />
      <AchievementsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
