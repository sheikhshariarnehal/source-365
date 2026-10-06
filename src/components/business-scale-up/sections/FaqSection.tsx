'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: '1',
    question: 'Is the ad budget included in the ৳15K / ৳42K / ৳85K package fee?',
    answer:
      'No. The package fee covers our complete marketing management, dedicated manager leadership, tailored strategy, content calendar, copywriting, and daily ad optimization. Ad spend is paid directly to Meta or Google through your own payment card, giving you 100% financial transparency and control.',
  },
  {
    id: '2',
    question: 'How does the "Ads Kill" and "Ads Scale" protocol protect my budget?',
    answer:
      'We never let underperforming ads burn money unchecked. Our team continuously tracks metrics like CTR, CPC, and ROAS. If a campaign or creative fails to hit benchmark KPIs within 24–48 hours, it is paused (Ads Kill). When a winning offer is identified, we methodically increase budget allocation to maximize return (Ads Scale).',
  },
  {
    id: '3',
    question: 'How do I communicate with my dedicated Marketing Manager?',
    answer:
      'You get direct access through a dedicated WhatsApp communication group for real-time messaging, daily performance updates, and instant creative feedback. Additionally, we schedule structured monthly and weekly strategic review meetings to align on business milestones.',
  },
  {
    id: '4',
    question: 'Who provides the graphics, videos, and copywriting for our campaigns?',
    answer:
      'Our team crafts high-converting commercial copywriting and creative briefs tailored to your audience. We collaborate closely with you to leverage your product photos and videos, optimizing and structuring them into high-converting ad assets.',
  },
  {
    id: '5',
    question: 'Can I start with the 1-Month plan and upgrade to 3 Months later?',
    answer:
      'Yes! Many clients start with the 1-Month validation cycle (৳15K) to test channels and immediately upgrade to the 3-Month package (৳42K) within the first 14 days, crediting their initial payment toward the full scale-up engine.',
  },
];

export default function FaqSection() {
  return (
    <section className="py-20 md:py-28 bg-background-2 dark:bg-background-8 border-t border-stroke-2 dark:border-stroke-6" id="faq">
      <div className="main-container">
        {/* Header */}
        <div className="text-center max-w-[720px] mx-auto mb-14 space-y-3">
          <RevealAnimation delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1 text-xs font-semibold text-red-600 dark:text-red-400">
              <HelpCircle className="size-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-3 md:text-heading-2 font-bold text-secondary dark:text-accent">
              Everything you need to know before scaling.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/70 dark:text-accent/70 text-base">
              Clear answers regarding ad budgets, daily manager collaboration, and performance benchmarks.
            </p>
          </RevealAnimation>
        </div>

        {/* Accordion list */}
        <Accordion
          className="mx-auto w-full max-w-[880px] space-y-4"
          defaultValue="1"
          enableScrollAnimation={true}
          animationDelay={0.08}>
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-stroke-2 dark:border-stroke-6 bg-white dark:bg-background-7 rounded-2xl px-6 transition-all duration-300 shadow-sm">
              <AccordionTrigger
                value={faq.id}
                className="w-full py-5 text-left flex items-center justify-between font-bold text-base md:text-lg text-secondary dark:text-accent hover:text-red-600 dark:hover:text-red-400 transition-colors"
                titleClassName="pr-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent value={faq.id} className="text-sm md:text-base text-secondary/75 dark:text-accent/75 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
