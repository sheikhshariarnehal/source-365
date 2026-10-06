import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'services',
    title: 'IT Services',
    submenu: [
      { id: 'boosting', label: 'Facebook Boosting', href: '/services#boosting' },
      { id: 'business-scale-up', label: 'Business Scale-UP', href: '/business-scale-up' },
      { id: 'web-dev', label: 'Web Development', href: '/services#web-development' },
      { id: 'app-dev', label: 'App Development', href: '/services#app-development' },
      { id: 'seo', label: 'Search Engine Optimization (SEO)', href: '/services#seo' },
      { id: 'sqa', label: 'Software Quality Assurance (SQA)', href: '/services#sqa' },
      { id: 'tracking', label: 'Server-Side Tracking', href: '/services#tracking' },
      { id: 'graphics', label: 'Graphics Design', href: '/services#graphics' },
      { id: 'all-services', label: 'All Services Overview', href: '/services' },
    ],
  },
  {
    id: 'business-scale-up-nav',
    title: 'Business Scale-UP',
    submenu: [
      { id: 'scale-up-overview', label: 'Service Overview & Benefits', href: '/business-scale-up' },
      { id: 'scale-up-included', label: "What's Included", href: '/business-scale-up#whats-included' },
      { id: 'scale-up-pricing', label: 'Pricing Plans', href: '/business-scale-up#pricing-plans' },
    ],
  },
  {
    id: 'business-nav',
    title: 'Business Solutions',
    submenu: [
      { id: 'partnerships', label: 'Business Partnerships', href: '/business#partnerships' },
      { id: 'digital-products', label: 'Digital Products & Subscriptions', href: '/business#digital-products' },
      { id: 'currency-exchange', label: 'Currency Exchange (Dollar Buy & Sell)', href: '/business#exchange' },
    ],
  },
  {
    id: 'company',
    title: 'Company & Contact',
    submenu: [
      { id: 'about-us', label: 'About Source 365', href: '/about' },
      { id: 'faq', label: 'Frequently Asked Questions', href: '/faq' },
      { id: 'contact-us', label: 'Get in Touch', href: '/contact-us' },
      { id: 'terms', label: 'Terms & Conditions', href: '/terms-conditions' },
      { id: 'privacy', label: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
];
