import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Check, Phone, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/site/cta-button";
import { Reveal, RevealGroup } from "@/components/site/reveal";

const HIGHLIGHTS = [
  {
    title: "Established in 1988",
    description:
      "With more than 38 years of standing, our firm has built lasting trust across generations of clients.",
  },
  {
    title: "Full Service, Multi Disciplinary Practice",
    description:
      "Audit & Assurance, Income Tax Advisory, GST Law Advisory, Corporate Law Services, FEMA/RBI related Services, Loan & Debt Advisory, Startup Services, Business Advisory, and Accounting & Business Process.",
  },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-background py-24 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 md:px-8 lg:grid-cols-2 lg:gap-14">
        <Reveal className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -top-4 -right-4 hidden h-full w-full rounded-2xl bg-surface-muted sm:block"
            />
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2">
              <Image
                src="/about.webp"
                alt="Advisor reviewing a client's financials with a colleague"
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
            </div>

            <Reveal
              delay={0.15}
              y={16}
              className="absolute -bottom-8 left-2 w-60 overflow-hidden rounded-xl bg-background p-6 shadow-2 sm:-left-8 sm:w-64"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-surface-muted text-surface-strong">
                <UserRound className="size-5" aria-hidden="true" />
              </span>
              <p className="mt-3 text-sm font-semibold text-text-tertiary">
                Need help? Get a free consultation.
              </p>
              <CtaButton
                href="/contact/"
                className="mt-4 w-full justify-center px-5"
              >
                Book a Consultation
              </CtaButton>
            </Reveal>
          </div>
        </Reveal>

        <div className="lg:pl-4">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-white/10 bg-surface-base px-4 py-1.5 text-xs font-medium text-text-secondary shadow-1">
              <Building2 className="size-3.5 text-surface-strong" aria-hidden="true" />
              About Us
            </span>
            <h2
              id="about-heading"
              className="mt-4 text-3xl font-semibold tracking-tight text-text-tertiary md:text-4xl"
            >
              Decades of experience, built on trust
            </h2>
            <p className="mt-4 text-md text-text-primary">
              Founded in 1988, Solanki Singh &amp; CO. brings more than 36
              years of experience to every engagement. We operate as a full
              service, multi disciplinary practice built to support
              businesses at every stage of growth.
            </p>
          </Reveal>

          <RevealGroup className="mt-8 flex flex-col">
            {HIGHLIGHTS.map((item, i) => (
              <Reveal
                key={item.title}
                y={12}
                className="relative flex gap-4 pb-8 last:pb-0"
              >
                {i < HIGHLIGHTS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-10 left-[19px] h-[calc(100%-2.25rem)] w-px bg-border"
                  />
                )}
                <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-surface-base text-text-inverse">
                  <Check className="size-4.5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-md font-semibold text-text-tertiary">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-text-primary">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </RevealGroup>

          <Reveal className="mt-10 flex flex-wrap items-center gap-6">
            <Button
              render={<Link href="/about/" />}
              size="lg"
              className="group relative h-12 overflow-hidden rounded-[var(--radius-md)] bg-surface-base px-6 text-text-inverse shadow-2 transition-token transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-base/90 hover:shadow-xl active:translate-y-0"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-1/3 -translate-x-[250%] -skew-x-12 bg-white/20 transition-transform duration-700 ease-out group-hover:translate-x-[350%]"
              />
              <span className="relative">Discover More</span>
              <ArrowRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-surface-muted text-surface-strong">
                <Phone className="size-4.5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs text-text-primary">
                  Do you have a question?
                </p>
                <a
                  href="tel:+919810779908"
                  className="text-md font-semibold text-text-tertiary transition-colors hover:text-surface-strong"
                >
                  +91 98107 79908
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
