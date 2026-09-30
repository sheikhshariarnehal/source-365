import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'services',
    title: 'IT Services',
    submenu: [
      { id: 'boosting', label: 'Facebook Boosting', href: '/services#boosting' },
      { id: 'growth-prog', label: 'Growth Program', href: '/growth-program' },
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
    id: 'growth-program-nav',
    title: 'Growth Program',
    submenu: [
      { id: 'growth-overview', label: 'Program Overview & Benefits', href: '/growth-program' },
      { id: 'account-manager', label: 'Key Account Manager', href: '/growth-program#account-manager' },
      { id: 'reporting', label: '7/15/30-Day Reporting', href: '/growth-program#reporting' },
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
