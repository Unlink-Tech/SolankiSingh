"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { TEAM, type TeamMember } from "@/components/site/team-data";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const MEMBERS = TEAM.slice(1);
const RING_RADIUS = 34;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

export function TeamShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selected, setSelected] = useState<TeamMember | null>(null);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = Number((entry.target as HTMLElement).dataset.index);
          if (!Number.isNaN(idx)) setActiveIndex(idx);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    panelRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const total = MEMBERS.length;

  const blobTransition = {
    duration: shouldReduceMotion ? 0 : 22,
    repeat: shouldReduceMotion ? 0 : Infinity,
    repeatType: "mirror" as const,
    ease: "easeInOut" as const,
  };

  return (
    <section
      aria-labelledby="team-showcase-heading"
      className="relative bg-background py-20 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          className="absolute top-[8%] left-[6%] size-72 rounded-full bg-surface-strong/10 blur-3xl sm:size-96"
          animate={{ x: [0, 60, -20, 0], y: [0, 40, -30, 0], scale: [1, 1.15, 0.95, 1] }}
          transition={blobTransition}
        />
        <motion.div
          className="absolute top-1/2 right-[4%] size-64 rounded-full bg-surface-strong/8 blur-3xl sm:size-80"
          animate={{ x: [0, -50, 30, 0], y: [0, -30, 20, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ ...blobTransition, duration: shouldReduceMotion ? 0 : 27 }}
        />
        <motion.div
          className="absolute bottom-[5%] left-[30%] size-72 rounded-full bg-white blur-3xl"
          animate={{ x: [0, 40, -40, 0], y: [0, 20, -20, 0] }}
          transition={{ ...blobTransition, duration: shouldReduceMotion ? 0 : 19 }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[280px_1fr] md:gap-14 lg:grid-cols-[320px_1fr]">
          <div className="md:sticky md:top-24 md:self-start">
            <Reveal>
              <span className="text-xs font-semibold tracking-wide text-surface-strong uppercase">
                The Rest of the Team
              </span>
              <h2
                id="team-showcase-heading"
                className="mt-3 text-3xl font-semibold tracking-tight text-text-tertiary md:text-4xl"
              >
                Specialists behind every engagement
              </h2>
              <p className="mt-4 max-w-sm text-md text-text-primary">
                Scroll to meet the advocates, consultants, and specialists
                working alongside CA(Dr.) Solanki on every file.
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-border pt-7">
                <div className="relative flex size-20 shrink-0 items-center justify-center">
                  <svg viewBox="0 0 80 80" className="absolute inset-0 -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r={RING_RADIUS}
                      fill="none"
                      strokeWidth="4"
                      className="stroke-border"
                    />
                    <motion.circle
                      cx="40"
                      cy="40"
                      r={RING_RADIUS}
                      fill="none"
                      strokeWidth="4"
                      strokeLinecap="round"
                      className="stroke-surface-strong"
                      strokeDasharray={RING_CIRCUMFERENCE}
                      animate={{
                        strokeDashoffset:
                          RING_CIRCUMFERENCE -
                          (RING_CIRCUMFERENCE * (activeIndex + 1)) / total,
                      }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    />
                  </svg>
                  <span className="relative font-mono text-xl font-bold tabular-nums text-surface-strong">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium tracking-wide text-text-primary/60 uppercase">
                    Currently viewing
                  </span>
                  <span className="font-mono text-sm text-text-primary/70">
                    {String(activeIndex + 1).padStart(2, "0")} of{" "}
                    {String(total).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-14 md:gap-16">
            {MEMBERS.map((member, i) => {
              const isActive = i === activeIndex;
              return (
                <div
                  key={member.name}
                  ref={(el) => {
                    panelRefs.current[i] = el;
                  }}
                  data-index={i}
                  className={`flex min-h-[42vh] flex-col items-start gap-6 transition-opacity duration-500 sm:flex-row sm:items-center sm:gap-10 md:min-h-[46vh] ${
                    isActive ? "opacity-100" : "opacity-35"
                  }`}
                >
                  <div className="relative shrink-0">
                    <div
                      aria-hidden="true"
                      className={`absolute -inset-2.5 rounded-full bg-surface-strong/10 transition-opacity duration-500 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <div className="relative size-32 overflow-hidden rounded-full border-4 border-background shadow-2 ring-1 ring-border sm:size-36">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        sizes="144px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-text-tertiary md:text-3xl">
                      {member.name}
                    </h3>
                    <p className="mt-1.5 text-sm font-semibold text-surface-strong">
                      {member.title}
                    </p>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-primary line-clamp-4">
                      {member.bio}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSelected(member)}
                      className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-surface-strong transition-opacity hover:opacity-75"
                    >
                      View Full Info
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent>
          {selected && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4">
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-full border border-border">
                    <Image
                      src={selected.photo}
                      alt={selected.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <DialogTitle>{selected.name}</DialogTitle>
                    <DialogDescription>{selected.title}</DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              <DialogBody>
                <p className="text-sm leading-relaxed text-text-primary">
                  {selected.bio}
                </p>
              </DialogBody>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
