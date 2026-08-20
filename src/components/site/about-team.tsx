import {
  Calculator,
  FileText,
  Gavel,
  GraduationCap,
  TrendingUp,
  Users,
} from "lucide-react";
import { Reveal, RevealGroup } from "@/components/site/reveal";

const ROLES = [
  { icon: Calculator, label: "Chartered Accountants" },
  { icon: GraduationCap, label: "MBAs" },
  { icon: FileText, label: "Company Secretaries" },
  { icon: Gavel, label: "Lawyers" },
  { icon: TrendingUp, label: "Financial Management Experts" },
];

export function AboutTeam() {
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-white/10 bg-surface-base px-4 py-1.5 text-xs font-medium text-text-secondary shadow-1">
            <Users className="size-3.5 text-surface-strong" aria-hidden="true" />
            Our People
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-tertiary md:text-4xl">
            An extensive team, one point of contact
          </h2>
          <p className="mt-4 text-md text-text-primary">
            Our CA firm has an extensive team of professionals with sound
            regulatory and professional knowledge, and strong business
            acumen, with in-depth working experience across every discipline
            your business touches.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5"
          stagger={0.06}
        >
          {ROLES.map((role) => (
            <Reveal key={role.label} y={16} className="h-full">
              <div className="group relative flex h-full min-h-[200px] flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl border border-border bg-background p-6 text-center shadow-1 transition-token transition-all duration-300 hover:-translate-y-1.5 hover:border-surface-strong/40 hover:shadow-2">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 origin-top scale-y-0 bg-[radial-gradient(circle_at_50%_0%,rgba(196,154,77,0.12),transparent_70%)] transition-transform duration-500 ease-out group-hover:scale-y-100"
                />
                <span className="relative flex size-20 items-center justify-center rounded-full bg-surface-muted text-surface-strong transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-surface-strong group-hover:text-text-inverse">
                  <role.icon className="size-9" aria-hidden="true" />
                </span>
                <span className="relative text-sm font-semibold text-text-tertiary">
                  {role.label}
                </span>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
