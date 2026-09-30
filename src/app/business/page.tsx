import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Business Solutions & Partnerships — SOURCE 365',
  description:
    'Explore commercial opportunities, business partnerships, digital product sales, subscriptions, and authorized currency exchange solutions with Source 365.',
};

const solutions = [
  {
    id: 'partnerships',
    badge: 'Strategic Collaboration',
    title: 'Business Partnership',
    desc: 'Share commercial opportunities, explore collaborative business ventures, and establish co-scaling partnerships with Source 365. Partnership and investment structures are customized based on mutual goals and terms.',
    ctaText: 'Propose Partnership',
    features: ['Joint venture scaling', 'Commercial co-marketing', 'Enterprise referrals', 'Technology integration'],
  },
  {
    id: 'digital-products',
    badge: 'Digital Assets',
    title: 'Digital Products Sales',
    desc: 'Access curated digital products, workflow assets, and software resources engineered for businesses, digital creators, and modern online enterprises.',
    ctaText: 'Inquire Products',
    features: ['Pre-engineered assets', 'Creator tooling', 'Business automation templates', 'Verified digital licenses'],
  },
  {
    id: 'subscriptions',
    badge: 'Enterprise Access',
    title: 'Subscription Sales',
    desc: 'Streamlined access and support for digital subscriptions, enterprise tool licenses, and ongoing service plans to empower your internal teams.',
    ctaText: 'Explore Subscriptions',
    features: ['SaaS license facilitation', 'Team accounts', 'Consolidated billing support', 'Priority onboarding'],
  },
  {
    id: 'exchange',
    badge: 'Financial Facilitation',
    title: 'Dollar Buy & Sell / Exchange',
    desc: 'Contact Source 365 for information regarding currency exchange-related services and payment settlement facilitation for international digital transactions.',
    disclaimer: 'Notice: Any currency exchange-related services are strictly subject to applicable national and international laws, central bank regulations, and statutory authorization.',
    ctaText: 'Contact for Information',
    features: ['Compliant digital settlements', 'International advertising payment support', 'Secure processing', 'Transparent rates'],
  },
];

export default function BusinessPage() {
  return (
    <main className="bg-white dark:bg-background-9">
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28 lg:pt-52 lg:pb-32 bg-[url('/images/ns-img-291.png')] bg-cover bg-center">
        <div className="main-container relative z-10">
          <div className="mx-auto max-w-[840px] text-center space-y-6">
            <RevealAnimation delay={0.1}>
              <div>
                <span className="badge badge-cyan">Commercial Ecosystem</span>
                <h1 className="mt-4 text-heading-2 md:text-heading-1 font-medium text-secondary dark:text-accent tracking-tight">
                  Business &amp; Career Opportunities with Source 365
                </h1>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-lg text-secondary/70 dark:text-accent/70 leading-relaxed max-w-[720px] mx-auto">
                Explore commercial partnerships, digital product licensing, enterprise subscriptions, and compliant currency exchange facilitation.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <LinkButton
                  href="/contact-us"
                  className="btn btn-secondary dark:btn-accent hover:btn-white dark:hover:btn-white-dark btn-xl shadow-xl">
                  Contact Business Team
                </LinkButton>
                <a
                  href="https://wa.me/8801931623820?text=Hello%20Source%20365%2C%20I%20would%20like%20to%20discuss%20a%20business%20partnership"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-white dark:bg-background-8 dark:text-accent hover:btn-secondary btn-xl shadow-md border border-stroke-2 dark:border-stroke-6">
                  Chat on WhatsApp
                </a>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Solutions Cards */}
      <section className="py-20 md:py-28 bg-background-2 dark:bg-background-8">
        <div className="main-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((item, index) => (
              <RevealAnimation key={item.id} delay={0.1 + index * 0.1}>
                <div
                  id={item.id}
                  className="rounded-[24px] border border-stroke-2 dark:border-stroke-6 bg-white dark:bg-background-7 p-8 shadow-sm h-full flex flex-col justify-between hover:shadow-xl transition-all">
                  <div className="space-y-5">
                    <span className="rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold text-primary-500">
                      {item.badge}
                    </span>
                    <h3 className="text-heading-4 font-bold text-secondary dark:text-accent">{item.title}</h3>
                    <p className="text-sm text-secondary/70 dark:text-accent/70 leading-relaxed">{item.desc}</p>

                    {item.disclaimer && (
                      <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5 text-xs text-amber-700 dark:text-amber-300">
                        {item.disclaimer}
                      </div>
                    )}

                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-secondary/50 dark:text-accent/50">
                        Key Features:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-secondary/80 dark:text-accent/80">
                        {item.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <span className="text-emerald-500 font-bold">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8">
                    <LinkButton
                      href="/contact-us"
                      className="btn btn-secondary dark:btn-accent hover:btn-white dark:hover:btn-white-dark btn-md w-full text-center shadow-md">
                      {item.ctaText}
                    </LinkButton>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Office & Direct Contact Notice */}
      <section className="py-20 md:py-24">
        <div className="main-container">
          <div className="rounded-[28px] border border-stroke-2 dark:border-stroke-6 bg-secondary text-white p-8 md:p-14 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="badge badge-cyan">Ashulia Office &amp; In-Person Consultations</span>
                <h3 className="text-heading-4 md:text-heading-3 font-semibold">
                  Visit or Call Source 365 for Strategic Discussion
                </h3>
                <p className="text-accent/70 text-sm max-w-[620px] leading-relaxed">
                  Partnership agreements and commercial discussions are welcomed at our office or via scheduled conference call.
                </p>
                <div className="space-y-2 pt-2 text-sm text-accent/80">
                  <p><strong>Address:</strong> Ashulia School &amp; College Market, Ashulia, Savar, Dhaka, Bangladesh</p>
                  <p><strong>Phone:</strong> 01931-623820 / 01408-185323</p>
                  <p><strong>Email:</strong> contact@source365.org</p>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-3">
                <LinkButton href="/contact-us" className="btn btn-primary btn-lg w-full text-center shadow-lg">
                  Submit Proposal
                </LinkButton>
                <a
                  href="tel:01931623820"
                  className="btn btn-white hover:btn-secondary btn-lg w-full text-center shadow-md">
                  Call Now: 01931-623820
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
