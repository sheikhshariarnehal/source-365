import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import BusinessScaleUpView from '@/components/business-scale-up/BusinessScaleUpView';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Business Scale-UP Service — SOURCE 365',
  description:
    'Smart Strategy. Stronger Presence. Sustainable Growth. Source 365 Business Scale-UP Service offers complete platform allocation, tailored content strategy, targeted ads management, and dedicated marketing leadership.',
};

export default function BusinessScaleUpPage() {
  return <BusinessScaleUpView />;
}
