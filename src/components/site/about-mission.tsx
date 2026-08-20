import {
  BookOpen,
  Handshake,
  Lightbulb,
  Puzzle,
  ShieldCheck,
  Star,
  Target,
  Users,
} from "lucide-react";
import { Reveal, RevealGroup } from "@/components/site/reveal";

const VALUES = [
  { icon: Handshake, label: "Integrity" },
  { icon: BookOpen, label: "Knowledge" },
  { icon: Puzzle, label: "Contributing value" },
  { icon: Star, label: "Excellence" },
  { icon: ShieldCheck, label: "Trust" },
  { icon: Users, label: "Relationships" },
];

export function AboutMission() {
  return (
    <section className="bg-surface-muted/40 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal>
            <div className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-border bg-background p-8 shadow-1 transition-token transition-all duration-300 hover:-translate-y-1 hover:shadow-2 md:p-10">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_90%_-10%,rgba(196,154,77,0.14),transparent_55%)]"
              />
              <span className="relative flex size-14 items-center justify-center rounded-2xl bg-surface-muted text-surface-strong transition-transform duration-300 group-hover:-rotate-6">
                <Lightbulb className="size-7" aria-hidden="true" />
              </span>
              <h2 className="relative text-2xl font-semibold tracking-tight text-text-tertiary md:text-3xl">
                Our Mission
              </h2>
              <p className="relative text-md text-text-primary">
                To deliver qualitative expert services effecaciously, adding
                value to the client&rsquo;s business and sustaining enduring
                client relationships.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl bg-surface-base p-8 shadow-2 transition-token transition-all duration-300 hover:-translate-y-1 md:p-10">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_90%_-10%,rgba(196,154,77,0.3),transparent_55%)]"
              />
              <span className="relative flex size-14 items-center justify-center rounded-2xl bg-surface-strong text-text-inverse shadow-1 transition-transform duration-300 group-hover:rotate-6">
                <Target className="size-7" aria-hidden="true" />
              </span>
              <h2 className="relative text-2xl font-semibold tracking-tight text-text-inverse md:text-3xl">
                Our Goal
              </h2>
              <p className="relative text-md text-text-secondary">
                To be a preferred choice for clients as a top CA firm in
                India.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-16 md:mt-20">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-surface-strong"
            />
            <h3 className="text-2xl font-semibold tracking-tight text-text-tertiary md:text-3xl">
              Our Values
            </h3>
          </div>
        </Reveal>

        <RevealGroup
          className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6"
          stagger={0.05}
        >
          {VALUES.map((value) => (
            <Reveal key={value.label} y={12} className="h-full">
              <div className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-border bg-background px-4 py-8 text-center transition-token transition-all duration-300 hover:-translate-y-1 hover:border-surface-strong/30 hover:shadow-2">
                <span className="flex size-14 items-center justify-center rounded-full bg-surface-muted text-surface-strong transition-all duration-300 group-hover:scale-110 group-hover:bg-surface-strong group-hover:text-text-inverse">
                  <value.icon className="size-6" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-text-tertiary">
                  {value.label}
                </span>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
