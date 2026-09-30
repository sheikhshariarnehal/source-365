import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Growth Program — SOURCE 365',
  description:
    'Accelerate your brand with the Source 365 Growth Program. Includes monthly content calendars, sales funnel architecture, a dedicated Key Account Manager, and 7/15/30-day performance reports.',
};

const inclusions = [
  {
    step: '01',
    title: 'Market Research & Competitor Benchmarking',
    desc: 'Deep analysis of your market niche, identifying competitors’ vulnerabilities, audience demographics, and high-converting commercial angles.',
    iconSvg: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    step: '02',
    title: '3-Day Monthly Content Calendar',
    desc: 'Structured, high-impact content strategy delivered each month, complete with copywriting prompts, creative visual direction, and posting timing.',
    iconSvg: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    step: '03',
    title: 'High-Converting Funnel Design',
    desc: 'Multi-stage digital sales funnels engineered to guide prospects from initial awareness to consideration and final purchase decision.',
    iconSvg: 'M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z',
  },
  {
    step: '04',
    title: 'Dedicated Key Account Manager',
    desc: 'A dedicated growth strategist assigned directly to your business to configure campaigns, handle troubleshooting, and maintain daily communication.',
    iconSvg: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  },
  {
    step: '05',
    title: 'Proactive Daily Campaign Monitoring',
    desc: 'Continuous live ad inspection to optimize daily budgets, test ad creatives, combat audience fatigue, and prevent wasted ad spend.',
    iconSvg: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
  },
  {
    step: '06',
    title: '7, 15, and 30-Day Performance Reports',
    desc: 'Transparent multi-interval reporting delivered on schedule with cost per result, reach, conversion attribution, and next-phase scaling blueprints.',
    iconSvg: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
];

export default function GrowthProgramPage() {
  return (
    <main className="bg-white dark:bg-background-9">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28 lg:pt-52 lg:pb-32 bg-[url('/images/ns-img-291.png')] bg-cover bg-center">
        <div className="main-container relative z-10">
          <div className="mx-auto max-w-[840px] text-center space-y-6">
            <RevealAnimation delay={0.1}>
              <div>
                <span className="badge badge-cyan">Source 365 Flagship Framework</span>
                <h1 className="mt-4 text-heading-2 md:text-heading-1 font-medium text-secondary dark:text-accent tracking-tight">
                  The A to Z Growth Program for Ambitious Brands
                </h1>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-lg text-secondary/70 dark:text-accent/70 leading-relaxed max-w-[720px] mx-auto">
                A structured, fully managed digital marketing program providing monthly content calendars, sales funnel architecture, a dedicated Key Account Manager, and milestone performance reviews.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <LinkButton
                  href="/contact-us"
                  className="btn btn-secondary dark:btn-accent hover:btn-white dark:hover:btn-white-dark btn-xl shadow-xl">
                  Enroll in Growth Program
                </LinkButton>
                <a
                  href="https://wa.me/8801931623820?text=Hello%20Source%20365%2C%20I%20am%20interested%20in%20the%20Growth%20Program"
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

      {/* Program Deliverables */}
      <section className="py-20 md:py-28 bg-background-2 dark:bg-background-8">
        <div className="main-container">
          <div className="text-center max-w-[700px] mx-auto mb-16 space-y-3">
            <span className="badge badge-cyan">Comprehensive Deliverables</span>
            <h2 className="text-heading-3 md:text-heading-2 font-medium text-secondary dark:text-accent">
              What Is Included in the Growth Program?
            </h2>
            <p className="text-secondary/70 dark:text-accent/70 text-base">
              Everything required to establish market authority, maintain consistent customer touchpoints, and scale ad profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inclusions.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.1 + index * 0.1}>
                <div className="rounded-[24px] border border-stroke-2 dark:border-stroke-6 bg-white dark:bg-background-7 p-8 shadow-sm h-full flex flex-col justify-between hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={item.iconSvg} />
                        </svg>
                      </div>
                      <span className="text-2xl font-bold text-secondary/20 dark:text-accent/20">{item.step}</span>
                    </div>
                    <h3 className="text-heading-6 font-semibold text-secondary dark:text-accent">{item.title}</h3>
                    <p className="text-sm text-secondary/70 dark:text-accent/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting & Account Manager Deep Dive */}
      <section className="py-20 md:py-28" id="account-manager">
        <div className="main-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 xl:gap-20">
            <div className="space-y-6">
              <span className="badge badge-cyan">Dedicated Human Partnership</span>
              <h2 className="text-heading-3 md:text-heading-2 font-medium text-secondary dark:text-accent leading-tight">
                A Key Account Manager dedicated to your numbers.
              </h2>
              <p className="text-secondary/70 dark:text-accent/70 text-base leading-relaxed">
                You never have to deal with automated ticket queues or generic support agents. Your Key Account Manager is a skilled growth professional with full context on your goals, actively monitoring your campaigns daily.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500 font-bold text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-secondary dark:text-accent">Daily Campaign Adjustments</h4>
                    <p className="text-sm text-secondary/60 dark:text-accent/60">Proactive budget shifts to winning creative hooks and audiences.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500 font-bold text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-secondary dark:text-accent">Direct Daily Communication</h4>
                    <p className="text-sm text-secondary/60 dark:text-accent/60">Daily progress updates and rapid answers to your marketing questions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4" id="reporting">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500 font-bold text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-secondary dark:text-accent">7, 15, and 30-Day Milestone Reviews</h4>
                    <p className="text-sm text-secondary/60 dark:text-accent/60">Rigorous analytics breakdowns verifying return on ad spend and growth velocity.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-stroke-2 dark:border-stroke-6 bg-secondary dark:bg-background-8 text-white p-8 md:p-12 shadow-2xl space-y-8">
              <div className="space-y-3">
                <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-400">Custom Growth Consultation</span>
                <h3 className="text-2xl font-bold">Contact Source 365 for Pricing &amp; Onboarding</h3>
                <p className="text-accent/70 text-sm leading-relaxed">
                  Program charges are tailored to your business scale, monthly ad budget, and market complexity. Speak with our team to configure your program.
                </p>
              </div>

              <div className="space-y-4 border-t border-white/10 pt-6 text-sm text-accent/80">
                <p className="flex items-center gap-3">
                  <span className="font-semibold text-white">Call Direct:</span>
                  <a href="tel:01931623820" className="text-primary-400 hover:underline">01931-623820</a>
                  <span>/</span>
                  <a href="tel:01408185323" className="text-primary-400 hover:underline">01408-185323</a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-semibold text-white">Email:</span>
                  <a href="mailto:contact@source365.org" className="text-primary-400 hover:underline">contact@source365.org</a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-semibold text-white">Office:</span>
                  <span>Ashulia School &amp; College Market, Ashulia, Savar, Dhaka</span>
                </p>
              </div>

              <div className="pt-2">
                <LinkButton
                  href="/contact-us"
                  className="btn btn-primary btn-lg w-full text-center shadow-lg">
                  Inquire About Growth Program
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
