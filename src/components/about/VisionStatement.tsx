import vision1Img from '@public/images/ns-img-353.png';
import vision2Img from '@public/images/ns-img-354.png';
import vision3Img from '@public/images/ns-img-355.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const VisionStatement = () => {
  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container space-y-14 md:space-y-[70px]">
        <div className="mx-auto max-w-[780px] space-y-3 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan mb-5">About Source 365</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h1 className="text-heading-2 font-medium text-secondary dark:text-accent">
              We are building extraordinary digital experiences.
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="text-secondary/70 dark:text-accent/70 text-base leading-relaxed">
              Source 365 is a full-spectrum digital solutions platform offering end-to-end IT services, marketing acceleration, and strategic business opportunities. Our mission is to help individuals, entrepreneurs, and modern businesses scale through proven technology, data-driven marketing, and dedicated growth partnerships.
            </p>
          </RevealAnimation>
        </div>
        <article className="grid grid-cols-12 justify-center gap-x-8 gap-y-8">
          <div className="col-span-12 space-y-8 md:col-span-6">
            <RevealAnimation delay={0.5} instant>
              <figure className="max-w-[630px] overflow-hidden rounded-[20px]">
                <Image src={vision1Img} alt="vision-1" className="h-auto w-full" />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.6} instant>
              <figure className="max-w-[630px] overflow-hidden rounded-[20px]">
                <Image src={vision2Img} alt="vision-2" className="h-auto w-full" />
              </figure>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.7} instant>
            <figure className="col-span-12 max-w-[630px] overflow-hidden rounded-[20px] md:col-span-6">
              <Image src={vision3Img} alt="vision-3" className="h-auto w-full" />
            </figure>
          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

VisionStatement.displayName = 'VisionStatement';
export default VisionStatement;
