"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BedDouble,
  Building2,
  Cpu,
  Factory,
  Flame,
  GraduationCap,
  Hammer,
  Handshake,
  HeartPulse,
  Home,
  Landmark,
  Link2,
  Megaphone,
  Pill,
  Plane,
  RadioTower,
  Settings2,
  Truck,
  Users,
} from "lucide-react";
import { Reveal, RevealGroup } from "@/components/site/reveal";

const INDUSTRIES = [
  { icon: Factory, label: "Manufacturing Sector" },
  { icon: Hammer, label: "Steel Sector" },
  { icon: RadioTower, label: "Telecommunication Sector" },
  { icon: Home, label: "Housing Development Sector" },
  { icon: Building2, label: "Real Estate and Infrastructure Sector" },
  { icon: Handshake, label: "Consulting Sector" },
  { icon: HeartPulse, label: "Hospitals and Healthcare Sector" },
  { icon: Pill, label: "Pharmaceuticals Sector" },
  { icon: Truck, label: "Transportation and Logistics Sector" },
  { icon: GraduationCap, label: "Educational Sector" },
  { icon: BedDouble, label: "Hotel and Hospitality Sector" },
  { icon: Settings2, label: "Technical Consulting Companies" },
  { icon: Plane, label: "Civil Aviation Sector" },
  { icon: Users, label: "Manpower Supply Sector" },
  { icon: Cpu, label: "Information Technology Sector" },
  { icon: Landmark, label: "Public Private Partnership (PPP) based Projects" },
  { icon: Link2, label: "Joint Venture and Special Purpose Vehicle (SPV) Companies" },
  { icon: Flame, label: "Oil and Refinery Sector" },
  { icon: Megaphone, label: "Digital Media and Advertising Sector" },
];

export function IndustriesGrid() {
  const shouldReduceMotion = useReducedMotion();
  const blobTransition = {
    duration: shouldReduceMotion ? 0 : 24,
    repeat: shouldReduceMotion ? 0 : Infinity,
    repeatType: "mirror" as const,
    ease: "easeInOut" as const,
  };

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          className="absolute top-[-10%] left-[10%] size-96 rounded-full bg-surface-strong/8 blur-3xl"
          animate={{ x: [0, 60, -20, 0], y: [0, 40, -30, 0], scale: [1, 1.15, 0.95, 1] }}
          transition={blobTransition}
        />
        <motion.div
          className="absolute right-[8%] bottom-[-10%] size-80 rounded-full bg-surface-strong/8 blur-3xl"
          animate={{ x: [0, -50, 30, 0], y: [0, -30, 20, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ ...blobTransition, duration: shouldReduceMotion ? 0 : 29 }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-white/10 bg-surface-base px-4 py-1.5 text-xs font-medium text-text-secondary shadow-1">
            <Factory className="size-3.5 text-surface-strong" aria-hidden="true" />
            {INDUSTRIES.length} Industries
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-tertiary md:text-4xl">
            Every sector, the same rigor
          </h2>
          <p className="mt-4 text-md text-text-primary">
            From manufacturing floors to digital agencies, our advisory
            adapts to the way your industry actually operates.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 md:gap-7 lg:grid-cols-4"
          stagger={0.04}
        >
          {INDUSTRIES.map((industry) => (
            <Reveal key={industry.label} y={16} className="h-full">
              <div className="group relative flex h-full min-h-[220px] flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl border border-border bg-background p-8 text-center shadow-1 transition-token transition-all duration-300 hover:-translate-y-1.5 hover:border-surface-strong/40 hover:shadow-2">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 origin-top scale-y-0 bg-[radial-gradient(circle_at_50%_0%,rgba(196,154,77,0.12),transparent_70%)] transition-transform duration-500 ease-out group-hover:scale-y-100"
                />
                <span className="relative flex size-20 items-center justify-center rounded-full bg-surface-muted text-surface-strong transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-surface-strong group-hover:text-text-inverse">
                  <industry.icon className="size-9" aria-hidden="true" />
                </span>
                <span className="relative text-sm leading-snug font-semibold text-text-tertiary">
                  {industry.label}
                </span>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
