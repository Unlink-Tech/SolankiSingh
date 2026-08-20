import {
  BedDouble,
  Briefcase,
  Building2,
  Cpu,
  Factory,
  Globe2,
  GraduationCap,
  Hammer,
  HeartPulse,
  Landmark,
  Plane,
  Truck,
} from "lucide-react";
import { Reveal, RevealGroup } from "@/components/site/reveal";

const SECTORS = [
  { icon: Factory, label: "Manufacturing" },
  { icon: Briefcase, label: "Service Sector" },
  { icon: Landmark, label: "Government Infrastructure" },
  { icon: Building2, label: "Real Estate" },
  { icon: HeartPulse, label: "Medical & Health Care" },
  { icon: BedDouble, label: "Hospitality" },
  { icon: Truck, label: "Transportation & Logistics" },
  { icon: Hammer, label: "High Steel Fabrication" },
  { icon: Cpu, label: "Information Technology" },
  { icon: Plane, label: "Civil Aviation" },
  { icon: GraduationCap, label: "Education" },
];

export function AboutReach() {
  return (
    <section className="relative overflow-hidden bg-surface-muted/40 py-20 md:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(196,154,77,0.1),transparent_50%)]"
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-white/10 bg-surface-base px-4 py-1.5 text-xs font-medium text-text-secondary shadow-1">
            <Globe2 className="size-3.5 text-surface-strong" aria-hidden="true" />
            Our Reach
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-tertiary md:text-4xl">
            Committed to being one of the best CA firms in Delhi NCR
          </h2>
          <p className="mt-4 text-md text-text-primary">
            Our firm has immense experience rendering diverse professional
            services to an extensive base of national and international
            clients, across sectors as varied as the businesses we serve.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 md:gap-7 lg:grid-cols-4"
          stagger={0.05}
        >
          {SECTORS.map((sector) => (
            <Reveal key={sector.label} y={16} className="h-full">
              <div className="group relative flex h-full min-h-[220px] flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl border border-border bg-background p-8 text-center shadow-1 transition-token transition-all duration-300 hover:-translate-y-1.5 hover:border-surface-strong/40 hover:shadow-2">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 origin-top scale-y-0 bg-[radial-gradient(circle_at_50%_0%,rgba(196,154,77,0.12),transparent_70%)] transition-transform duration-500 ease-out group-hover:scale-y-100"
                />
                <span className="relative flex size-20 items-center justify-center rounded-full bg-surface-muted text-surface-strong transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-surface-strong group-hover:text-text-inverse">
                  <sector.icon className="size-9" aria-hidden="true" />
                </span>
                <span className="relative text-sm leading-snug font-semibold text-text-tertiary">
                  {sector.label}
                </span>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
