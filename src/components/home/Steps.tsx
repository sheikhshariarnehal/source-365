'use client';

import RevealAnimation from '../animation/RevealAnimation';

interface ProcessItem {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
}

const processItems: ProcessItem[] = [
  {
    id: 1,
    stepNumber: '01',
    title: 'Discovery & strategy',
    description: 'Start with comprehensive market analysis, competitor audits, and customized strategic roadmaps.',
  },
  {
    id: 2,
    stepNumber: '02',
    title: 'Design & prototype',
    description: 'Transform ideas into high-converting user interfaces, sales funnel blueprints, and interactive prototypes.',
  },
  {
    id: 3,
    stepNumber: '03',
    title: 'Development & testing',
    description: 'Full-stack agile engineering, rigorous quality assurance testing, and seamless deployment.',
  },
];

const Steps = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section
        className="py-16 md:py-20 lg:py-28 bg-white dark:bg-black"
        aria-label="Our Process">
        <div className="main-container px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 md:mb-16 space-y-4 max-w-[650px]">
            <RevealAnimation delay={0.1}>
              <div className="mb-5">
                <span className="badge badge-cyan">Our process</span>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-secondary dark:text-accent font-medium max-w-[720px] mb-4">
                From Idea to app store simplified
              </h2>
            </RevealAnimation>
          </div>

          {/* 3-Column Process Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10 lg:gap-14">
            {processItems.map((process, index) => (
              <RevealAnimation key={process.id} delay={0.3 + index * 0.1}>
                <div className="group space-y-3.5" aria-label={`Step ${process.stepNumber}`}>
                  {/* Subtle hairline top indicator */}
                  <div className="relative h-px w-full bg-slate-200/80 dark:bg-white/10 overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-12 bg-primary-500/60 dark:bg-primary-400/60 transition-all duration-500 group-hover:w-full" />
                  </div>

                  {/* Step number */}
                  <span className="inline-block text-[11.5px] font-mono tracking-widest text-secondary/40 dark:text-accent/40 uppercase pt-1">
                    ({process.stepNumber})
                  </span>

                  {/* Title */}
                  <h3 className="text-heading-5 text-secondary dark:text-accent font-semibold transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    {process.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] text-secondary/70 dark:text-accent/70 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Steps;
