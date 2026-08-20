import type { LucideIcon } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export function LegalContent({
  icon: Icon,
  badgeLabel,
  title,
  description,
  effectiveDate,
  sections,
}: {
  icon: LucideIcon;
  badgeLabel: string;
  title: string;
  description: string;
  effectiveDate: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero
        icon={<Icon className="size-3.5 text-surface-strong" aria-hidden="true" />}
        badgeLabel={badgeLabel}
        heading={title}
        description={description}
      />

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr] lg:gap-14">
            <Reveal className="lg:sticky lg:top-24 lg:self-start">
              <p className="text-xs font-semibold tracking-wider text-text-primary/70 uppercase">
                Effective {effectiveDate}
              </p>
              <nav
                aria-label="Sections on this page"
                className="mt-4 flex flex-col gap-1 rounded-2xl border border-border bg-surface-muted/25 p-2"
              >
                {sections.map((section, i) => (
                  <a
                    key={section.heading}
                    href={`#section-${i + 1}`}
                    className="rounded-xl px-3.5 py-3 text-sm leading-snug text-text-primary transition-colors duration-200 hover:bg-background/60 hover:text-surface-strong"
                  >
                    {i + 1}. {section.heading}
                  </a>
                ))}
              </nav>
            </Reveal>

            <div className="flex max-w-3xl flex-col gap-10">
              {sections.map((section, i) => (
                <Reveal key={section.heading} y={12} delay={Math.min(i * 0.03, 0.2)}>
                  <div id={`section-${i + 1}`} className="scroll-mt-28">
                    <h2 className="text-xl font-semibold tracking-tight text-text-tertiary md:text-2xl">
                      {i + 1}. {section.heading}
                    </h2>
                    <div className="mt-3 flex flex-col gap-3">
                      {section.paragraphs?.map((paragraph) => (
                        <p key={paragraph} className="text-md text-text-primary">
                          {paragraph}
                        </p>
                      ))}
                      {section.list && (
                        <ul className="flex flex-col gap-2">
                          {section.list.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-md text-text-primary">
                              <span
                                aria-hidden="true"
                                className="mt-2.5 size-1.5 shrink-0 rounded-full bg-surface-strong"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
