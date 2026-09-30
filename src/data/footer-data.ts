import { FooterData } from '@/interface';

export const footerLinks: FooterData[] = [
  {
    title: 'IT Services',
    links: [
      { label: 'Facebook Boosting', href: '/services#boosting' },
      { label: 'Web Development', href: '/services#web-development' },
      { label: 'App Development', href: '/services#app-development' },
      { label: 'SEO Optimization', href: '/services#seo' },
      { label: 'Software QA (SQA)', href: '/services#sqa' },
      { label: 'Server-Side Tracking', href: '/services#tracking' },
      { label: 'Graphics Design', href: '/services#graphics' },
    ],
  },
  {
    title: 'Growth & Business',
    links: [
      { label: 'Growth Program', href: '/growth-program' },
      { label: 'Key Account Management', href: '/growth-program#account-manager' },
      { label: 'Business Partnerships', href: '/business#partnerships' },
      { label: 'Digital Products', href: '/business#digital-products' },
      { label: 'Subscriptions Sales', href: '/business#subscriptions' },
      { label: 'Currency Exchange', href: '/business#exchange' },
    ],
  },
  {
    title: 'Company & Contact',
    links: [
      { label: 'About Source 365', href: '/about' },
      { label: 'Frequently Asked Questions', href: '/faq' },
      { label: 'Contact Us', href: '/contact-us' },
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
];
