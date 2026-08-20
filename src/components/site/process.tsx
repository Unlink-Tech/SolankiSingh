"use client";

import { motion } from "framer-motion";
import { Reveal, RevealGroup } from "@/components/site/reveal";

const STEPS = [
  {
    number: "01",
    title: "Discovery call",
    description:
      "A 20-minute conversation about your business, your current setup, and what's not working.",
  },
  {
    number: "02",
    title: "Document collection",
    description:
      "Securely upload financials to your encrypted client portal. We tell you exactly what we need.",
  },
  {
    number: "03",
    title: "Review & strategy",
    description:
      "We audit your position and build a plan covering compliance, tax exposure, and cash flow.",
  },
  {
    number: "04",
    title: "Ongoing support",
    description:
      "Monthly bookkeeping, proactive filing reminders, and a direct line to your accountant.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="bg-surface-muted/40 py-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-wide text-surface-strong uppercase">
            How we work
          </span>
          <h2
            id="process-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-text-tertiary md:text-4xl"
          >
            From first call to filed and reconciled
          </h2>
        </Reveal>

        <RevealGroup className="relative mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute top-6 right-0 left-0 hidden h-px bg-border md:block"
          />
          {STEPS.map((step) => (
            <Reveal key={step.number} className="relative">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col gap-4"
              >
                <span className="relative z-10 flex size-12 items-center justify-center rounded-full border-2 border-surface-strong bg-background text-sm font-semibold text-surface-strong transition-token transition-colors duration-300 group-hover:bg-surface-strong group-hover:text-text-inverse">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-text-tertiary">
                  {step.title}
                </h3>
                <p className="text-sm text-text-primary">
                  {step.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
