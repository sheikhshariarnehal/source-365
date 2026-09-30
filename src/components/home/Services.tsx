'use client';

import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import StackCardItem from '../ui/stack-card/StackCardItem';
import StackCardWrapper from '../ui/stack-card/StackCardWrapper';

interface ServiceCard {
  id: number;
  icon: string;
  iconType: 'shape' | 'svg';
  title: string;
  description: string;
}

const servicesData: ServiceCard[] = [
  {
    id: 1,
    icon: 'ns-shape-19',
    iconType: 'shape',
    title: 'Facebook Boosting Service',
    description: 'Targeted audience reach, campaign optimization, and budget maximization to turn ad spend into profitable conversions.',
  },
  {
    id: 2,
    icon: 'ns-shape-25',
    iconType: 'shape',
    title: 'End-to-End Growth Program',
    description: 'Structured A to Z growth blueprint: 3-day content calendar, competitor audits, sales funnels, and a dedicated Key Account Manager.',
  },
  {
    id: 3,
    icon: 'ns-shape-17',
    iconType: 'shape',
    title: 'Custom Web Development',
    description: 'High-speed, SEO-optimized, and responsive web applications built with cutting-edge modern engineering architectures.',
  },
  {
    id: 4,
    icon: 'ns-shape-34',
    iconType: 'shape',
    title: 'Mobile App Development',
    description: 'Tailored iOS and Android mobile solutions engineered for exceptional user engagement and business scalability.',
  },
  {
    id: 5,
    icon: 'local-seo',
    iconType: 'svg',
    title: 'SEO & Search Optimization',
    description: 'Comprehensive keyword strategies, technical SEO audits, and content architecture to dominate organic rankings.',
  },
  {
    id: 6,
    icon: 'ns-shape-9',
    iconType: 'shape',
    title: 'Software Quality Assurance (SQA)',
    description: 'Rigorous manual and automated testing protocols ensuring software stability, security, and flawless user experience.',
  },
  {
    id: 7,
    icon: 'analytics',
    iconType: 'svg',
    title: 'Server-Side Tracking',
    description: 'First-party data infrastructure and Server-Side Conversion API integration for impenetrable attribution and tracking accuracy.',
  },
  {
    id: 8,
    icon: 'ns-shape-15',
    iconType: 'shape',
    title: 'Creative Graphics Design',
    description: 'Striking brand assets, marketing creatives, advertising collateral, and social media visual identities that convert.',
  },
];

const Services = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="pt-14 pb-[220px] sm:pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
        <div className="main-container">
          <div className="flex flex-col items-start justify-center max-md:gap-y-18 md:flex-row md:justify-between md:gap-x-[120px]">
            {/* Left: Intro */}
            <div className="lg:sticky lg:top-28">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-cyan mb-5">Source 365 Services</span>
              </RevealAnimation>
              <div className="mb-14 space-y-3 md:max-w-[595px]">
                <RevealAnimation delay={0.2}>
                  <h2 className="text-secondary dark:text-accent font-medium">
                    Comprehensive IT services engineered for growth.
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="max-w-[512px] text-secondary/70 dark:text-accent/70 leading-relaxed">
                    From Facebook post boosting to full-stack software development and advanced server-side tracking, Source 365 provides the complete technology and marketing foundation your business needs to scale.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.4}>
                <div>
                  <LinkButton
                    href="/services"
                    className="btn btn-secondary hover:btn-white dark:btn-accent dark:hover:btn-white-dark btn-md">
                    View Full Services Breakdown
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            {/* Right: Interactive Stacked Cards */}
            <StackCardWrapper topOffset="13vh" gap="20px" initDelay={100} className="w-full max-w-xl">
              {servicesData.map((service) => (
                <StackCardItem key={service.id}>
                  <div
                    className="bg-background-2 dark:bg-background-8 relative z-0 min-h-[170px] w-full space-y-4 overflow-hidden rounded-[20px] p-8 border-none shadow-none">
                    <div className="inline-block">
                      {service.iconType === 'shape' ? (
                        <span className={`${service.icon} text-secondary dark:text-accent text-[52px]`}> </span>
                      ) : service.icon === 'local-seo' ? (
                        <svg width={52} height={52} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M47.6693 13.4643L26.0026 0.953125L4.33594 13.4643M47.6693 13.4643L26.0026 25.6406M47.6693 13.4643V18.1908L43.1449 20.8227M26.0026 50.998L47.6693 38.1518V33.1116M26.0026 50.998L4.33594 38.1518V33.1116M26.0026 50.998V46.0505M4.33594 13.4643L26.0026 25.6406M4.33594 13.4643V18.1908L8.86032 20.8227M26.0026 25.6406V30.7947M26.0026 30.7947L8.86032 20.8227M26.0026 30.7947L43.1449 20.8227M26.0026 35.8919L47.6693 23.0099M26.0026 35.8919L4.33594 23.0099M26.0026 35.8919V40.9533M47.6693 23.0099V27.9218L43.1449 30.573M47.6693 23.0099L43.1449 20.8227M4.33594 23.0099V27.9218L8.86032 30.573M4.33594 23.0099L8.86032 20.8227M26.0026 40.9533L8.86032 30.573M26.0026 40.9533L43.1449 30.573M26.0026 46.0505L47.6693 33.1116M26.0026 46.0505L4.33594 33.1116M47.6693 33.1116L43.1449 30.573M4.33594 33.1116L8.86032 30.573"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="dark:stroke-accent stroke-black"
                          />
                        </svg>
                      ) : service.icon === 'analytics' ? (
                        <svg width={52} height={52} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M47.6693 13.4781L26.0026 0.953125L17.317 5.97407M47.6693 13.4781V38.528L26.0026 51.0529M47.6693 13.4781L38.9367 18.5261M26.0026 51.0529V26.003M26.0026 51.0529L17.317 46.032V40.6548M4.33594 13.4781V38.528L12.7853 43.4123M4.33594 13.4781L26.0026 26.003M4.33594 13.4781L12.7853 8.59371L17.317 11.2247M26.0026 26.003L34.4051 21.1458M12.7853 43.4123V29.1393L17.317 32.0697V40.6548M12.7853 43.4123L17.317 40.6548M38.9367 33.6746V18.5261M38.9367 33.6746L34.4051 36.4632V31.0714M38.9367 33.6746L34.4051 31.0714M38.9367 18.5261L17.317 5.97407M34.4051 21.1458V31.0714M34.4051 21.1458L17.317 11.2247M17.317 5.97407V11.2247"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="dark:stroke-accent stroke-black"
                          />
                        </svg>
                      ) : null}
                    </div>
                    <div>
                      <h3 className="text-heading-5 text-secondary dark:text-accent font-semibold">{service.title}</h3>
                      <p className="text-secondary/70 dark:text-accent/70 mt-1 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </StackCardItem>
              ))}
            </StackCardWrapper>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Services;
