import Features from '@/components/services/Features';
import Pricing from '@/components/services/Pricing';
import Services from '@/components/services/Services';
import Solutions from '@/components/services/Solutions';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'IT Services — SOURCE 365',
  description: 'Explore full-service IT solutions: Facebook Boosting, Web Development, App Engineering, SEO, SQA, Server-Side Tracking, and Graphics Design.',
};

const page = () => {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <Services />
      <Features />
      <Solutions />
      <CTA
        className="dark:bg-background-6 bg-white"
        badgeClass="hidden"
        ctaHeading="Ready to engineer your digital"
        spanText="transformation?"
        description="Book a strategic consultation today and find out how Source 365 accelerates your business."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Get Free Consultation"
      />
    </main>
  );
};

export default page;
