import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { ServiceSidebar } from "@/components/site/service-sidebar";
import { Reveal, RevealGroup } from "@/components/site/reveal";
import { getChildrenFor } from "@/components/site/nav-data";
import type { Service } from "@/components/site/services-data";

const PLACEHOLDER_POINTS = [
  "Initial review and gap assessment",
  "Clear, fixed-scope engagement letter",
  "Dedicated point of contact throughout",
  "Ongoing advisory as regulations change",
];

export function ServiceDetail({ service }: { service: Service }) {
  const subServices = getChildrenFor(service.href);

  return (
    <>
      <PageHero
        icon={<service.icon className="size-3.5 text-surface-strong" aria-hidden="true" />}
        badgeLabel={service.title}
        heading={service.title}
        description={service.description}
      />

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr] lg:gap-14">
            <ServiceSidebar />

            {subServices.length > 0 ? (
              <div>
                <Reveal>
                  <span className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-white/10 bg-surface-base px-4 py-1.5 text-xs font-medium text-text-secondary shadow-1">
                    <service.icon className="size-3.5 text-surface-strong" aria-hidden="true" />
                    {service.title}
                  </span>
                  <p className="mt-4 max-w-2xl text-md text-text-primary">
                    {service.description}
                  </p>
                </Reveal>

                <RevealGroup
                  className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
                  stagger={0.05}
                >
                  {subServices.map((sub) => (
                    <Reveal key={sub.href} y={8}>
                      <Link
                        href={sub.href}
                        className="group flex h-full flex-col justify-between gap-8 rounded-2xl border border-border bg-surface-muted/25 p-6 shadow-1 transition-all duration-200 hover:-translate-y-0.5 hover:border-surface-strong/30 hover:bg-background hover:shadow-2"
                      >
                        <div>
                          <span className="inline-flex size-10 items-center justify-center rounded-xl bg-surface-strong/10 text-surface-strong">
                            <service.icon className="size-4.5" aria-hidden="true" />
                          </span>
                          <h3 className="mt-4 text-md leading-snug font-semibold text-text-tertiary">
                            {sub.label}
                          </h3>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-surface-strong">
                          Learn more
                          <ArrowRight
                            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </RevealGroup>
              </div>
            ) : (
              <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
                <Reveal className="relative">
                  <div className="relative mx-auto max-w-md md:max-w-none">
                    <div
                      aria-hidden="true"
                      className="absolute -top-4 -right-4 hidden h-full w-full rounded-2xl bg-surface-muted sm:block"
                    />
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 420px, 90vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <span className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-white/10 bg-surface-base px-4 py-1.5 text-xs font-medium text-text-secondary shadow-1">
                    <service.icon className="size-3.5 text-surface-strong" aria-hidden="true" />
                    {service.title}
                  </span>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-tertiary md:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-md text-text-primary">
                    {service.description}
                  </p>
                  <p className="mt-4 text-md text-text-primary">
                    This is placeholder content. Final copy for {service.title}{" "}
                    will be added here, covering exactly how we approach this
                    service, what&rsquo;s included, and what working with us
                    looks like from kickoff to delivery.
                  </p>

                  <ul className="mt-6 flex flex-col gap-3">
                    {PLACEHOLDER_POINTS.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-surface-strong text-text-inverse">
                          <Check className="size-3" aria-hidden="true" />
                        </span>
                        <span className="text-sm text-text-primary">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
