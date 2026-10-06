import { IService } from '@/interface';
import getMarkDownContent from '@/utils/getMarkDownContent';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import { ButtonWithIcon } from '@/components/ui/button/ButtonWithIcon';
import RevealAnimation from '../animation/RevealAnimation';
import TableOfContent from './TableOfContent';
import UserReview from './UserReview';

const Contents = ({ slug }: { slug: string }) => {
  const service = getMarkDownContent('src/data/services/', slug);

  return (
    <section className="pt-32 pb-24 sm:pt-36 md:pt-42 md:pb-36 lg:pb-44 xl:pt-[180px] xl:pb-[200px]">
      <div className="main-container">
        <div className="flex items-start lg:gap-[72px]">
          <div className="w-full max-w-full lg:max-w-[767px]">
            <RevealAnimation delay={0.3}>
              <div className="services-details-content mb-[72px]">
                <ReactMarkdown
                  rehypePlugins={[[rehypeSlug]]}
                  components={{
                    table: ({ ...props }) => (
                      <div className="my-6 w-full overflow-x-auto">
                        <table {...props} />
                      </div>
                    ),
                    p: ({ children, node, ...props }) => {
                      const hasShowcaseButton = Array.isArray(node?.children) && node.children.some(
                        (child: any) =>
                          child &&
                          child.type === 'element' &&
                          child.tagName === 'a' &&
                          typeof child.properties?.href === 'string' &&
                          child.properties.href.startsWith('/showcase'),
                      );

                      if (hasShowcaseButton) {
                        return <div className="pt-2 pb-6">{children}</div>;
                      }
                      return <p {...props}>{children}</p>;
                    },
                    a: ({ href, children, ...props }) => {
                      if (href?.startsWith('/showcase')) {
                        return (
                          <ButtonWithIcon
                            href={href}
                            label={typeof children === 'string' ? children : undefined}
                            className="h-11 ps-6 pe-14 text-xs sm:text-sm font-semibold shadow-xs"
                            iconClassName="w-8 h-8 group-hover:right-[calc(100%-38px)]">
                            {children}
                          </ButtonWithIcon>
                        );
                      }
                      return (
                        <a href={href} {...props} className="text-primary-600 underline hover:text-primary-700">
                          {children}
                        </a>
                      );
                    },
                  }}>
                  {service.content}
                </ReactMarkdown>
              </div>
            </RevealAnimation>

            {/* user review  */}
            <UserReview service={service.data as IService} />
          </div>

          {/* Table of Contents */}
          <TableOfContent markdownContent={service.content} />
        </div>
      </div>
    </section>
  );
};
Contents.displayName = 'Contents';
export default Contents;
