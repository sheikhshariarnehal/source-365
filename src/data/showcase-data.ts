export interface ShowcaseProject {
  id: string;
  title: string;
  category: 'wordpress' | 'nextjs' | 'mern';
  categoryLabel: string;
  description: string;
  image: string;
  images: string[];
  tags: string[];
  liveUrl: string;
  featured?: boolean;
  highlight?: string;
}

export const showcaseCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'wordpress', label: 'WordPress & WooCommerce' },
  { id: 'nextjs', label: 'Modern Next.js & React' },
  { id: 'mern', label: 'Full-Stack MERN & Dashboards' },
] as const;

export type ShowcaseCategoryId = (typeof showcaseCategories)[number]['id'];

export const showcaseProjects: ShowcaseProject[] = [
  // WordPress & WooCommerce
  {
    id: 'wp-luxemart',
    title: 'LuxeMart – WooCommerce Apparel & Lifestyle Boutique',
    category: 'wordpress',
    categoryLabel: 'WordPress & WooCommerce',
    description:
      'High-converting WooCommerce fashion store with instant AJAX search, multi-currency support, bKash & SSLCommerz checkout, and 95+ mobile speed score.',
    image: '/images/ns-img-381.jpg',
    images: ['/images/ns-img-381.jpg', '/images/ns-img-384.png', '/images/ns-img-385.png'],
    tags: ['WordPress', 'WooCommerce', 'Elementor Pro', 'bKash / Stripe', 'Speed Optimized'],
    liveUrl: 'https://luxemart-demo.source365.org',
    featured: true,
    highlight: 'Conversion-Focused Store',
  },
  {
    id: 'wp-apexcorp',
    title: 'ApexCorp - Corporate Enterprise & Industrial Portal',
    category: 'wordpress',
    categoryLabel: 'WordPress & WooCommerce',
    description:
      'Custom Gutenberg block architecture with zero theme bloat, multi-branch department directory, investor relations portal, and lead capture workflows.',
    image: '/images/ns-img-382.jpg',
    images: ['/images/ns-img-382.jpg', '/images/ns-img-386.png', '/images/ns-img-387.png'],
    tags: ['WordPress', 'Custom Gutenberg', 'Multi-Language', 'Lead Gen', 'SEO 98/100'],
    liveUrl: 'https://apexcorp-demo.source365.org',
    highlight: 'Bespoke Theme Architecture',
  },
  {
    id: 'wp-epicbites',
    title: 'EpicBites - Restaurant, Dining & Online Food Ordering',
    category: 'wordpress',
    categoryLabel: 'WordPress & WooCommerce',
    description:
      'Interactive culinary showcase with table booking reservation system, takeaway food ordering, thermal kitchen receipts, and instant WhatsApp ordering.',
    image: '/images/ns-img-383.jpg',
    images: ['/images/ns-img-383.jpg', '/images/ns-img-388.png', '/images/ns-img-380.png'],
    tags: ['WordPress', 'WooCommerce', 'Table Booking', 'WhatsApp API', 'Mobile-First'],
    liveUrl: 'https://epicbites-demo.source365.org',
    highlight: 'Online Ordering & Table Reservation',
  },

  // Modern Next.js & React
  {
    id: 'next-saasify',
    title: 'SaaSify - Modern AI Analytics & Workflow Suite',
    category: 'nextjs',
    categoryLabel: 'Modern Next.js & React',
    description:
      'High-performance Next.js App Router landing page with server-side rendering, dark mode, interactive pricing tiers, and Google Lighthouse 100 scores.',
    image: '/images/ns-img-495.png',
    images: ['/images/ns-img-495.png', '/images/ns-img-498.png', '/images/ns-img-499.png'],
    tags: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Framer Motion', 'Lighthouse 100'],
    liveUrl: 'https://saasify-demo.source365.org',
    featured: true,
    highlight: 'Google Lighthouse 100/100',
  },
  {
    id: 'next-pulseagency',
    title: 'PulseAgency - Immersive Digital Creative Studio',
    category: 'nextjs',
    categoryLabel: 'Modern Next.js & React',
    description:
      'Award-winning design studio showcase built with Next.js, fluid GSAP layout animations, interactive cursor effects, and headless markdown integration.',
    image: '/images/ns-img-496.png',
    images: ['/images/ns-img-496.png', '/images/ns-img-501.png', '/images/ns-img-495.png'],
    tags: ['Next.js', 'React', 'GSAP Animations', 'Tailwind CSS', 'Headless CMS'],
    liveUrl: 'https://pulseagency-demo.source365.org',
    highlight: 'Interactive Micro-Animations',
  },
  {
    id: 'next-finflow',
    title: 'FinFlow - Global FinTech & Digital Banking Portal',
    category: 'nextjs',
    categoryLabel: 'Modern Next.js & React',
    description:
      'Enterprise financial tech web application featuring real-time currency converters, interactive return-on-investment calculators, and bank-grade security UX.',
    image: '/images/ns-img-497.png',
    images: ['/images/ns-img-497.png', '/images/ns-img-498.png', '/images/ns-img-496.png'],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Lucide Icons', 'Core Web Vitals'],
    liveUrl: 'https://finflow-demo.source365.org',
    highlight: 'Ultra-Fast FinTech UX',
  },

  // Full-Stack MERN
  {
    id: 'mern-cloudops',
    title: 'CloudOps - Enterprise Multi-Tenant CRM & Analytics Dashboard',
    category: 'mern',
    categoryLabel: 'Full-Stack MERN & Dashboards',
    description:
      'Complete centralized business management portal with granular RBAC permissions, live metric graphs, sales pipeline stages, and automated client billing.',
    image: '/images/ns-img-508.png',
    images: ['/images/ns-img-508.png', '/images/ns-img-514.png', '/images/ns-img-515.png'],
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT & RBAC'],
    liveUrl: 'https://cloudops-demo.source365.org',
    featured: true,
    highlight: 'Enterprise Role-Based Access Control',
  },
  {
    id: 'mern-taskflow',
    title: 'TaskFlow - Real-Time Team Collaboration & Sprint Suite',
    category: 'mern',
    categoryLabel: 'Full-Stack MERN & Dashboards',
    description:
      'Full-stack agile project workspace with smooth drag-and-drop Kanban boards, live presence updates powered by Socket.io, and team audit logs.',
    image: '/images/ns-img-509.png',
    images: ['/images/ns-img-509.png', '/images/ns-img-516.png', '/images/ns-img-508.png'],
    tags: ['MERN Stack', 'Socket.io', 'Kanban Board', 'Aggregation Pipeline', 'REST API'],
    liveUrl: 'https://taskflow-demo.source365.org',
    highlight: 'Real-Time WebSockets & Kanban',
  },
  {
    id: 'mern-medcare',
    title: 'MedCare - Telemedicine & Patient Portal Management',
    category: 'mern',
    categoryLabel: 'Full-Stack MERN & Dashboards',
    description:
      'Comprehensive clinic operating platform with encrypted patient medical histories, online doctor slot booking, digital prescription generator, and SMS alerts.',
    image: '/images/ns-img-510.png',
    images: ['/images/ns-img-510.png', '/images/ns-img-515.png', '/images/ns-img-509.png'],
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'SSL Encryption'],
    liveUrl: 'https://medcare-demo.source365.org',
    highlight: 'HIPAA-Compliant Patient Portal',
  },
];
