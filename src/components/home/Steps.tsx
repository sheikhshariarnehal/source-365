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
        className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]"
        aria-label="Our Process">
        <div className="main-container">
          {/* Header */}
          <div className="mb-14 space-y-4 max-w-[650px] md:mb-16">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-primary-light">Our process</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-secondary dark:text-accent leading-[1.15]">
                From Idea to app store simplified
              </h2>
            </RevealAnimation>
          </div>

          {/* 3-Column Process Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10 lg:gap-14">
            {processItems.map((process, index) => (
              <RevealAnimation key={process.id} delay={0.3 + index * 0.1}>
                <div className="space-y-4" aria-label={`Step ${process.stepNumber}`}>
                  {/* Cyan top indicator line */}
                  <div className="h-[2px] w-full rounded-full bg-[#38d7d4] dark:bg-[#38d7d4]" />

                  {/* Step number */}
                  <p className="text-sm font-semibold text-[#8b5cf6] dark:text-[#a78bfa]">
                    {process.stepNumber}
                  </p>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-secondary dark:text-accent">
                    {process.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-secondary/70 dark:text-accent/70 leading-relaxed">
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
