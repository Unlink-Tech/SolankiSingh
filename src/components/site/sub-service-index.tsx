import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, RevealGroup } from "@/components/site/reveal";

export function SubServiceIndex({
  title,
  parentTitle,
  parentHref,
  items,
}: {
  title: string;
  parentTitle: string;
  parentHref: string;
  items: { label: string; href: string }[];
}) {
  return (
    <>
      <PageHero
        icon={<FileText className="size-3.5 text-surface-strong" aria-hidden="true" />}
        badgeLabel={parentTitle}
        heading={title}
        description={`Part of our ${parentTitle} practice.`}
      />

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-semibold tracking-wider text-text-primary/70 uppercase">
              {title}
            </p>
          </Reveal>

          <RevealGroup
            className="mt-4 flex flex-col divide-y divide-border overflow-hidden rounded-2xl border border-border bg-background shadow-1"
            stagger={0.05}
          >
            {items.map((item) => (
              <Reveal key={item.href} y={8}>
                <Link
                  href={item.href}
                  className="group flex items-center justify-between gap-4 p-5 text-sm font-semibold text-text-tertiary transition-colors duration-200 hover:bg-surface-muted/40 hover:text-surface-strong"
                >
                  {item.label}
                  <ArrowRight
                    className="size-4 shrink-0 text-surface-strong opacity-0 transition-all duration-200 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>
            ))}
          </RevealGroup>

          <Reveal delay={0.1}>
            <Link
              href={parentHref}
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-surface-strong transition-opacity duration-200 hover:opacity-80"
            >
              <ArrowLeft
                className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
                aria-hidden="true"
              />
              Back to {parentTitle}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
