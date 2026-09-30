import AboutOverview from '@/components/home/AboutOverview';
import Audit from '@/components/home/Audit';
import Blog from '@/components/home/Blog';
import CTA from '@/components/home/CTA';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import SmartSolutions from '@/components/home/SmartSolutions';
import Squad from '@/components/home/Squad';
import Steps from '@/components/home/Steps';
import Testimonial from '@/components/home/Testimonial';
import WhyUs from '@/components/home/WhyUs';
import { IBlogPost } from '@/interface';
import { defaultMetadata } from '@/utils/generateMetaData';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'SOURCE 365 — A to Z Digital Solutions & Strategic Growth',
  description:
    'Your ultimate destination for A to Z digital solutions. Professional Facebook boosting, full-stack web and mobile development, server-side tracking, and dedicated growth programs.',
};

const page = () => {
  const blogs = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs').slice(0, 3);

  return (
    <main className="bg-white dark:bg-black">
      <Hero />
      <SmartSolutions />
      <Services />
      <Steps />
      <AboutOverview />
      <Squad />
      <WhyUs />
      <Testimonial />
      <Audit />
      <Blog blogs={blogs} />
      <CTA />
    </main>
  );
};

export default page;
