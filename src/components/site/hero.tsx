"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/site/cta-button";
import { HeroSlider } from "@/components/site/hero-slider";

const TRUST_ITEMS = [
  "Startups",
  "Retail & E-commerce",
  "Manufacturing",
  "Professional Services",
];

const HEADINGS = [
  "A keen eye for detail transforms data into actionable insights.",
  "Where others see chaos, we find structure and solutions.",
  "The heart of India’s economic engine beats with precision, diligence, and foresight.",
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-surface-base"
      aria-label="Introduction"
    >
      <HeroSlider onIndexChange={setActiveSlide} />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-5 pt-24 pb-20 text-center md:px-8 md:pt-32 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-text-secondary backdrop-blur-sm"
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-surface-strong opacity-75" />
            <span className="relative inline-flex size-1.5 rounded-full bg-surface-strong" />
          </span>
          {new Date().getFullYear() - 1988}+ Years of Trusted Financial Expertise
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.08 }}
          className="max-w-4xl text-4xl font-semibold tracking-tight text-text-inverse md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={activeSlide}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="block"
            >
              {HEADINGS[activeSlide]}
            </motion.span>
          </AnimatePresence>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.16 }}
          className="mt-6 max-w-2xl text-lg text-text-secondary"
        >
          Solanki Singh &amp; CO. handles your tax planning, compliance, and
          books with precision, so you can spend your time running the
          business instead of reconciling it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.24 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <CtaButton href="/contact/" size="lg" className="h-12 px-7 text-base">
            Book a Free Consultation
          </CtaButton>
          <Button
            render={<Link href="#services" />}
            variant="outline"
            size="lg"
            className="group relative h-12 overflow-hidden rounded-[var(--radius-md)] border-white/20 bg-transparent px-7 text-base text-text-inverse transition-token transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-text-inverse hover:shadow-xl active:translate-y-0"
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1/3 -translate-x-[250%] -skew-x-12 bg-white/15 transition-transform duration-700 ease-out group-hover:translate-x-[350%]"
            />
            <span className="relative">View Our Services</span>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-20 flex w-full flex-col items-center gap-7 border-t border-white/10 pt-10"
        >
          <p className="flex items-center gap-2 text-xs font-medium tracking-[0.15em] text-text-secondary/70 uppercase">
            <ShieldCheck className="size-3.5 text-surface-strong" aria-hidden="true" />
            Trusted across every stage of growth
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {TRUST_ITEMS.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.4,
                  delay: 0.15 + i * 0.08,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-text-secondary backdrop-blur-sm transition-colors duration-300 hover:border-surface-strong/30 hover:bg-white/10 hover:text-text-inverse"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
