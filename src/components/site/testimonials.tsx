"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/site/reveal";

const TESTIMONIALS = [
  {
    quote:
      "They caught a filing error our previous firm missed for two years. The switch paid for itself in the first quarter alone.",
    name: "Amara P.",
    role: "Founder, retail startup",
  },
  {
    quote:
      "Monthly books arrive reconciled and on time, every time. That predictability alone changed how we plan.",
    name: "David N.",
    role: "Operations Lead, manufacturing",
  },
  {
    quote:
      "Our accountant actually answers the phone. For a firm our size, that direct access has been invaluable.",
    name: "Priya K.",
    role: "Principal, professional services",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-background py-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-wide text-surface-strong uppercase">
            Client stories
          </span>
          <h2
            id="testimonials-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-text-tertiary md:text-4xl"
          >
            Trusted by owners who need it done right
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <Reveal key={testimonial.name}>
              <motion.figure
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="flex h-full flex-col gap-5 rounded-xl border border-border bg-background p-7 shadow-1 transition-shadow duration-300 hover:shadow-2"
              >
                <Quote className="size-6 text-surface-strong" aria-hidden="true" />
                <blockquote className="flex-1 text-md text-text-tertiary">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div
                  className="flex items-center gap-0.5"
                  role="img"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-3.5 fill-surface-strong text-surface-strong"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <figcaption className="flex items-center gap-3 border-t border-border pt-4">
                  <span className="flex size-9 items-center justify-center rounded-full bg-surface-strong/15 text-sm font-semibold text-surface-strong">
                    {testimonial.name.charAt(0)}
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold text-text-tertiary">
                      {testimonial.name}
                    </span>
                    <span className="text-xs text-text-primary">
                      {testimonial.role}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
