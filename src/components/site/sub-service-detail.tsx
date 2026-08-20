import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, RevealGroup } from "@/components/site/reveal";
import { getChildrenFor } from "@/components/site/nav-data";
import { SERVICES } from "@/components/site/services-data";

const FALLBACK_IMAGES = SERVICES.map((service) => service.image);

function pickImage(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return FALLBACK_IMAGES[hash % FALLBACK_IMAGES.length];
}

export function SubServiceDetail({
  title,
  parentTitle,
  parentHref,
  description,
  image: imageOverride,
  overview,
}: {
  title: string;
  parentTitle: string;
  parentHref: string;
  description?: string;
  image?: string;
  overview?: string[];
}) {
  const image =
    imageOverride ??
    SERVICES.find((service) => service.href === parentHref)?.image ??
    pickImage(title);
  const related = getChildrenFor(parentHref).filter(
    (item) => item.label !== title
  );

  return (
    <>
      <PageHero
        icon={<FileText className="size-3.5 text-surface-strong" aria-hidden="true" />}
        badgeLabel={parentTitle}
        heading={title}
        description={description ?? `Part of our ${parentTitle} practice.`}
      />

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <Reveal className="relative">
              <div className="relative mx-auto max-w-2xl lg:max-w-none">
                <div
                  aria-hidden="true"
                  className="absolute -top-4 -right-4 hidden h-full w-full rounded-2xl bg-surface-muted sm:block"
                />
                <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-2">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 1024px) 640px, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <span className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-white/10 bg-surface-base px-4 py-1.5 text-xs font-medium text-text-secondary shadow-1">
                <FileText className="size-3.5 text-surface-strong" aria-hidden="true" />
                {parentTitle}
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-tertiary md:text-4xl">
                {title}
              </h2>

              <p className="mt-5 text-xs font-semibold tracking-wider text-text-primary/70 uppercase">
                Overview
              </p>
              <div className="mt-3 flex flex-col gap-4">
                {overview ? (
                  overview.map((paragraph) => (
                    <p key={paragraph} className="text-md text-text-primary">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <>
                    <p className="text-md text-text-primary">
                      This is placeholder content. Final copy for {title} will
                      be added here, covering exactly how we approach this
                      service, what&rsquo;s included, and what working with us
                      looks like from kickoff to delivery.
                    </p>
                    <p className="text-md text-text-primary">
                      In the meantime, reach out and a member of our team will
                      walk you through it directly.
                    </p>
                  </>
                )}
              </div>
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

          {related.length > 0 && (
            <div className="mt-16 rounded-2xl border border-border bg-surface-muted/25 p-6 shadow-1 md:mt-20 md:p-8">
              <Reveal>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 className="text-xl font-semibold tracking-tight text-text-tertiary">
                    Related services
                  </h3>
                  <p className="text-sm text-text-primary/70">
                    More from our {parentTitle} practice
                  </p>
                </div>
              </Reveal>
              <RevealGroup
                className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
                stagger={0.04}
              >
                {related.map((item) => (
                  <Reveal key={item.href} y={8}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3.5 text-sm font-semibold text-text-tertiary shadow-1 transition-all duration-200 hover:-translate-y-0.5 hover:border-surface-strong/30 hover:shadow-2"
                    >
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-strong/10 text-surface-strong">
                        <FileText className="size-4" aria-hidden="true" />
                      </span>
                      <span className="flex-1 leading-snug">{item.label}</span>
                      <ArrowRight
                        className="size-4 shrink-0 text-surface-strong opacity-0 transition-all duration-200 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </Link>
                  </Reveal>
                ))}
              </RevealGroup>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
