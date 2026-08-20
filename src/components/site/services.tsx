"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, LayoutGrid } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SERVICES } from "@/components/site/services-data";

export function Services() {
  const [active, setActive] = useState(SERVICES[0]);
  const activeIndex = SERVICES.indexOf(active);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-surface-muted/40 py-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-white/10 bg-surface-base px-4 py-1.5 text-xs font-medium text-text-secondary shadow-1">
            <LayoutGrid className="size-3.5 text-surface-strong" aria-hidden="true" />
            Our Services
          </span>
          <h2
            id="services-heading"
            className="mt-4 text-4xl font-semibold tracking-tight text-text-tertiary md:text-5xl"
          >
            Why choose us as your accounting partner?
          </h2>
          <p className="mt-4 text-md text-text-primary">
            One firm, one point of contact, and a team that treats your books
            like they matter as much as you do.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="grid overflow-hidden rounded-3xl shadow-2 md:grid-cols-[280px_1fr]">
            <ul className="flex gap-0.5 overflow-x-auto bg-surface-base p-3 md:flex-col md:overflow-x-visible md:overflow-y-auto">
              {SERVICES.map((service, index) => {
                const isActive = service.title === active.title;
                return (
                  <li key={service.title} className="shrink-0 md:shrink">
                    <button
                      type="button"
                      onClick={() => setActive(service)}
                      aria-pressed={isActive}
                      className={`group relative flex w-full items-center gap-3 rounded-2xl px-3.5 py-3 text-left whitespace-nowrap transition-colors duration-300 md:whitespace-normal ${
                        isActive ? "bg-white/5" : "hover:bg-white/5"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute top-1/2 left-0 hidden h-4 w-0.5 -translate-y-1/2 rounded-full transition-colors duration-300 md:block ${
                          isActive ? "bg-surface-strong" : "bg-transparent"
                        }`}
                      />
                      <span
                        className={`w-4 shrink-0 font-mono text-[11px] tabular-nums transition-colors duration-300 ${
                          isActive ? "text-surface-strong" : "text-white/30"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <service.icon
                        className={`size-4 shrink-0 transition-colors duration-300 ${
                          isActive ? "text-surface-strong" : "text-white/40"
                        }`}
                        aria-hidden="true"
                      />
                      <span
                        className={`text-sm transition-colors duration-300 ${
                          isActive
                            ? "font-semibold text-text-inverse"
                            : "font-medium text-white/45 group-hover:text-white/70"
                        }`}
                      >
                        {service.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="relative min-h-[26rem] md:min-h-[34rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="object-cover"
                    priority={activeIndex === 0}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-transparent"
                  />

                  <span className="absolute top-6 right-6 font-mono text-xs font-semibold tracking-wider text-white/70 md:top-8 md:right-8">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
                  </span>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-x-6 bottom-6 max-w-md md:inset-x-10 md:bottom-10"
                  >
                    <span className="flex size-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-surface-strong backdrop-blur-sm">
                      <active.icon className="size-5.5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-2xl font-semibold text-text-inverse md:text-3xl">
                      {active.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
                      {active.description}
                    </p>
                    <Link
                      href={active.href}
                      className="group relative mt-6 inline-flex w-fit items-center gap-2 overflow-hidden rounded-[var(--radius-md)] bg-white px-5 py-2.5 text-sm font-semibold text-text-tertiary shadow-2 transition-token transition-all duration-300 hover:-translate-y-0.5 hover:bg-text-secondary hover:shadow-xl active:translate-y-0"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-y-0 left-0 w-1/3 -translate-x-[250%] -skew-x-12 bg-text-tertiary/10 transition-transform duration-700 ease-out group-hover:translate-x-[350%]"
                      />
                      <span className="relative">
                        View {active.title}
                      </span>
                      <ArrowRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
