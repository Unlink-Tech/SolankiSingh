"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Reveal } from "@/components/site/reveal";
import { Breadcrumb } from "@/components/site/breadcrumb";

export function PageHero({
  icon,
  badgeLabel,
  heading,
  description,
}: {
  icon: ReactNode;
  badgeLabel: string;
  heading: ReactNode;
  description?: ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();
  const blobTransition = {
    duration: shouldReduceMotion ? 0 : 20,
    repeat: shouldReduceMotion ? 0 : Infinity,
    repeatType: "mirror" as const,
    ease: "easeInOut" as const,
  };

  return (
    <section className="relative overflow-hidden bg-surface-base pt-14 pb-16 md:pt-20 md:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          className="absolute top-[-15%] left-[8%] size-80 rounded-full bg-surface-strong/20 blur-3xl"
          animate={{ x: [0, 60, -20, 0], y: [0, 40, -30, 0], scale: [1, 1.15, 0.95, 1] }}
          transition={blobTransition}
        />
        <motion.div
          className="absolute right-[10%] bottom-[-25%] size-72 rounded-full bg-surface-strong/15 blur-3xl"
          animate={{ x: [0, -50, 30, 0], y: [0, -30, 20, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ ...blobTransition, duration: shouldReduceMotion ? 0 : 25 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-transparent to-surface-base/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Breadcrumb />

          <span className="mt-8 inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-text-secondary backdrop-blur-sm">
            {icon}
            {badgeLabel}
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-text-inverse md:text-5xl">
            {heading}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-md text-text-secondary">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
