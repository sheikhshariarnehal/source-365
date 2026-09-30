import ContactInfo from '@/components/contact-page/ContactInfo';
import ContactMap from '@/components/contact-page/ContactMap';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Contact Us — SOURCE 365',
  description: 'Get in touch with Source 365. Schedule a digital consultation, inquire about our Growth Program, or visit our office in Ashulia, Savar, Dhaka.',
};

const ContactUs = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <ContactInfo />
      <ContactMap />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeClass="badge-cyan"
        badgeText="Immediate Action"
        ctaBtnText="Chat on WhatsApp"
        ctaHeading="Need an urgent campaign boost?"
        description="Connect with our digital specialists directly on WhatsApp for same-day campaign setup and onboarding."
      />
    </main>
  );
};

export default ContactUs;
