import { IService } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import { ButtonWithIcon } from '../ui/button/ButtonWithIcon';

const Services = () => {
  const servicesData = getMarkDownData<IService & { [key: string]: unknown }>('src/data/services');

  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-5 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan">Source 365 Capabilities</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h1 className="mx-auto max-w-[878px] text-heading-2 font-medium text-secondary dark:text-accent">
                A to Z Digital Solutions Tailored for Measurable Growth.
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mx-auto max-w-[700px] text-secondary/70 dark:text-accent/70 text-base leading-relaxed">
                Explore our full spectrum of professional IT and growth services—engineered with precision, data intelligence, and complete accountability.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-y-5 md:gap-8 xl:gap-8">
          {servicesData.map((service, index) => (
            <RevealAnimation key={service.slug} delay={0.5 + index * 0.1}>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="bg-background-3 dark:bg-background-7 grid items-center justify-center space-y-6 rounded-[20px] px-6 py-8 text-center transition-transform duration-500 ease-in-out hover:translate-y-[-10px]">
                  <div className="flex items-center justify-center">
                    <span className={`${service.icon} text-secondary dark:text-accent text-[52px]`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5 line-clamp-1">{service.title}</h3>
                    <p className="mx-auto line-clamp-3 max-w-[361px]">{service.description}</p>
                  </div>
                  <div className="flex justify-center">
                    <ButtonWithIcon
                      href={`/services/${service.slug}`}
                      label="Read more"
                      className="h-10 text-xs ps-5 pe-12 hover:ps-12 hover:pe-5"
                      iconClassName="w-8 h-8 group-hover:right-[calc(100%-36px)]"
                    />
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
