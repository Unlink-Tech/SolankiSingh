import Image from "next/image";
import { BookOpen } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

export function AboutStory() {
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 md:px-8 lg:grid-cols-2 lg:gap-14">
        <Reveal className="lg:order-2">
          <span className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-white/10 bg-surface-base px-4 py-1.5 text-xs font-medium text-text-secondary shadow-1">
            <BookOpen className="size-3.5 text-surface-strong" aria-hidden="true" />
            Our Story
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-tertiary md:text-4xl">
            Nearly four decades of full-service practice
          </h2>
          <p className="mt-4 text-md text-text-primary">
            Our firm was established in 1988 and carries the standing of
            more than 38 years of continuous practice. We operate as a
            full-service, multidisciplinary firm across nine core verticals:
            Audit &amp; Assurance, Income Tax Advisory, GST Law Advisory,
            Corporate Law Services, FEMA/RBI related Services, Loan &amp;
            Debt Advisory, Startup Services, Business Advisory, and
            Accounting &amp; Business Process.
          </p>
        </Reveal>

        <Reveal className="relative lg:order-1">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -top-4 -left-4 hidden h-full w-full rounded-2xl bg-surface-muted sm:block"
            />
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2">
              <Image
                src="/about.webp"
                alt="Partner at Solanki Singh & CO. reviewing client financials"
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
            </div>

            <Reveal
              delay={0.15}
              y={16}
              className="absolute -bottom-8 right-2 flex w-52 items-center gap-4 overflow-hidden rounded-xl bg-background p-6 shadow-2 sm:-right-8"
            >
              <span className="text-3xl font-bold text-surface-strong">
                38+
              </span>
              <span className="text-sm leading-snug font-semibold text-text-tertiary">
                Years of
                <br />
                trusted practice
              </span>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
