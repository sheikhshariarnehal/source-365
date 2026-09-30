import Contact from '@/components/faq/Contact';
import FaqTab from '@/components/faq/FaqTab';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Frequently Asked Questions — SOURCE 365',
  description: 'Find answers to common questions about Source 365 IT services, Facebook boosting, the Growth Program, and business solutions.',
};

const FAQ = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <FaqTab />
      <Contact />
      <CTA
        className="dark:bg-background-6 bg-white"
        badgeClass="!badge-cyan"
        badgeText="Get Started"
        ctaHeading="Have more questions about our services?"
        description="Our team is available 24/7 to discuss your project requirements and configure your growth plan."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Contact Us Today"
      />
    </main>
  );
};

export default FAQ;
