import { Suspense } from 'react';
import { Metadata } from 'next';
import ShowcaseView from '@/components/showcase/ShowcaseView';
import CTA from '@/components/shared/cta/CTA';
import { generateMetadata } from '@/utils/generateMetaData';

export const metadata: Metadata = generateMetadata(
  'Web & App Development Showcase - Live Projects & Demos || Source 365',
  'Explore live production websites, e-commerce stores, modern Next.js/React applications, and full-stack MERN dashboards built by Source 365.',
  'https://source365.org/showcase'
);

export default function ShowcasePage() {
  return (
    <main className="bg-background-3 dark:bg-background-7 min-h-screen">
      <Suspense
        fallback={
          <div className="flex min-h-[60vh] items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary-500 border-t-transparent" />
          </div>
        }>
        <ShowcaseView />
      </Suspense>
      <CTA
        className="dark:bg-background-6 bg-white"
        badgeClass="hidden"
        ctaHeading="Have a custom web project in"
        spanText="mind?"
        description="Let's build a lightning-fast, high-converting digital product tailored to your business."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Start Your Project"
      />
    </main>
  );
}