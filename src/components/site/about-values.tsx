import {
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Handshake,
  HeartHandshake,
  Landmark,
  UserCheck,
} from "lucide-react";
import { Reveal, RevealGroup } from "@/components/site/reveal";

const VALUES = [
  {
    icon: HeartHandshake,
    title: "Customer first",
    description:
      "Every engagement starts with what's right for your business.",
  },
  {
    icon: Landmark,
    title: "Good corporate citizenship",
    description:
      "Operating responsibly, within the letter and spirit of the law.",
  },
  {
    icon: Handshake,
    title: "Building long term relationship",
    description:
      "We measure success in years of partnership, not single engagements.",
  },
  {
    icon: BadgeCheck,
    title: "Commitment to quality",
    description:
      "Rigorous review at every stage, with zero room for shortcuts.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professionalism",
    description: "Clear communication and reliable delivery, every time.",
  },
  {
    icon: UserCheck,
    title: "Dignity of the individual",
    description: "Respect for every client and colleague we work with.",
  },
];

export function AboutValues() {
  return (
    <section className="bg-surface-muted/40 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-white/10 bg-surface-base px-4 py-1.5 text-xs font-medium text-text-secondary shadow-1">
            <Award className="size-3.5 text-surface-strong" aria-hidden="true" />
            Why Us
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-tertiary md:text-4xl">
            The principles behind every engagement
          </h2>
          <p className="mt-4 text-md text-text-primary">
            Six commitments that shape how we work with every client, on
            every file, every time.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {VALUES.map((value) => (
            <Reveal key={value.title} y={16} className="h-full">
              <div className="group relative flex h-full min-h-[220px] flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl border border-border bg-background p-8 text-center shadow-1 transition-token transition-all duration-300 hover:-translate-y-1.5 hover:border-surface-strong/40 hover:shadow-2">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 origin-top scale-y-0 bg-[radial-gradient(circle_at_50%_0%,rgba(196,154,77,0.12),transparent_70%)] transition-transform duration-500 ease-out group-hover:scale-y-100"
                />
                <span className="relative flex size-20 items-center justify-center rounded-full bg-surface-muted text-surface-strong transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-surface-strong group-hover:text-text-inverse">
                  <value.icon className="size-9" aria-hidden="true" />
                </span>
                <div className="relative">
                  <h3 className="text-lg font-semibold text-text-tertiary">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-primary">
                    {value.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
