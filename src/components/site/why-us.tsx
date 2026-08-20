"use client";

import { motion } from "framer-motion";
import {
  CalendarClock,
  Clock,
  LineChart,
  Lock,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Wallet,
  Zap,
} from "lucide-react";
import { CtaButton } from "@/components/site/cta-button";
import { Reveal, RevealGroup } from "@/components/site/reveal";

const REASONS = [
  {
    icon: UserCheck,
    title: "Dedicated Accountant",
    description:
      "A dedicated accountant who knows your business, not a rotating queue.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    description: "Fixed, transparent pricing agreed before any work begins.",
  },
  {
    icon: CalendarClock,
    title: "Early Filings",
    description: "Filings submitted early, never at the deadline wire.",
  },
  {
    icon: ShieldCheck,
    title: "Bank-Grade Security",
    description: "Bank-grade document security on every file you share.",
  },
  {
    icon: Zap,
    title: "Fast Response",
    description: "Real answers within one business day, every time.",
  },
  {
    icon: LineChart,
    title: "Quarterly Advisory",
    description: "Advisory built on your actual numbers, reviewed quarterly.",
  },
];

const STATS = [
  { icon: TrendingUp, value: "96%", label: "Client retention rate" },
  { icon: Clock, value: "24h", label: "Average response time" },
  { icon: Lock, value: "Encrypted", label: "Document vault" },
  { icon: MessageCircle, value: "Direct", label: "Accountant access" },
];

export function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="bg-background py-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface-base px-6 py-14 shadow-2 sm:px-10 md:px-14 md:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(196,154,77,0.18),transparent_60%)]"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-24 size-72 rounded-full bg-surface-strong/10 blur-3xl"
            />

            <div className="relative flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-text-secondary backdrop-blur-sm">
                <Zap className="size-3.5 text-surface-strong" aria-hidden="true" />
                Why Solanki Singh &amp; CO.
              </span>
              <h2
                id="why-us-heading"
                className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-text-inverse md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
              >
                Accounting that{" "}
                <span className="text-surface-strong">
                  doesn&rsquo;t slow you down
                </span>
              </h2>
              <p className="mt-5 max-w-xl text-md text-text-secondary">
                We built our practice around responsiveness and accuracy, the
                two things most firms quietly compromise on as they scale.
              </p>
            </div>

            <RevealGroup
              className="relative mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-3"
              stagger={0.06}
            >
              {REASONS.map((reason) => (
                <Reveal key={reason.title} y={12} className="h-full">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-200 hover:border-surface-strong/30 hover:bg-white/[0.07]"
                  >
                    <span className="flex size-10 items-center justify-center rounded-xl bg-surface-strong/15 text-surface-strong">
                      <reason.icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-text-inverse">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {reason.description}
                    </p>
                  </motion.div>
                </Reveal>
              ))}
            </RevealGroup>

            <Reveal className="relative mt-12 md:mt-16">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="flex flex-col items-center text-center">
                      <span className="flex size-9 items-center justify-center rounded-full bg-surface-strong/15 text-surface-strong">
                        <stat.icon className="size-4" aria-hidden="true" />
                      </span>
                      <p className="mt-3 text-xl font-bold text-surface-strong md:text-2xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs leading-snug text-text-secondary sm:text-sm">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-9 flex flex-col gap-6 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:gap-10">
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-text-inverse sm:text-xl">
                      &ldquo;Less time explaining our numbers, more time
                      acting on them.&rdquo;
                    </p>
                    <p className="mt-1.5 text-sm text-text-secondary">
                      What working with us feels like.
                    </p>
                  </div>
                  <CtaButton
                    href="/contact/"
                    size="lg"
                    className="h-12 shrink-0 px-7 text-base"
                  >
                    Book a Free Consultation
                  </CtaButton>
                </div>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
