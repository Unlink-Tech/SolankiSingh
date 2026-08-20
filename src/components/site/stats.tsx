"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { RevealGroup, Reveal } from "@/components/site/reveal";

const STATS = [
  { value: "18+", label: "Years in practice" },
  { value: "500+", label: "Businesses served" },
  { value: "12,000+", label: "Returns filed accurately" },
  { value: "96%", label: "Client retention rate" },
];

function parseStat(value: string) {
  const match = value.match(/^([\d,]+)(.*)$/);
  if (!match) return { target: 0, suffix: value };
  return { target: Number(match[1].replace(/,/g, "")), suffix: match[2] };
}

function StatValue({ value }: { value: string }) {
  const { target, suffix } = parseStat(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(shouldReduceMotion ? target : 0);

  useEffect(() => {
    if (!inView || shouldReduceMotion) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, target, shouldReduceMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section aria-label="Firm statistics" className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <RevealGroup className="grid grid-cols-2 divide-x divide-y divide-border overflow-hidden rounded-2xl border border-border sm:grid-cols-4 sm:divide-y-0">
          {STATS.map((stat) => (
            <Reveal
              key={stat.label}
              className="group flex flex-col items-center gap-1.5 px-4 py-10 text-center transition-colors duration-300 hover:bg-surface-muted/30"
            >
              <span className="text-3xl font-semibold tracking-tight text-surface-strong transition-transform duration-300 group-hover:scale-110 md:text-4xl">
                <StatValue value={stat.value} />
              </span>
              <span className="text-sm text-text-primary">{stat.label}</span>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
