"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/site/cta-button";
import { Reveal } from "@/components/site/reveal";

export function CtaBanner({
  contactHref = "/contact/",
}: {
  contactHref?: string;
}) {
  return (
    <section aria-label="Schedule a consultation" className="bg-background py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-surface-strong px-8 py-14 text-center shadow-2 md:px-16 md:py-16">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.25),transparent_45%),radial-gradient(circle_at_10%_90%,rgba(0,0,0,0.15),transparent_45%)]"
            />
            <div className="relative flex flex-col items-center gap-6">
              <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-text-inverse md:text-4xl">
                Ready to simplify your finances?
              </h2>
              <p className="max-w-lg text-md text-text-inverse/85">
                Book a free 20-minute consultation. No obligation, just a
                clear read on where your business stands.
              </p>
              <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
                <CtaButton
                  href={contactHref}
                  variant="inverse"
                  size="lg"
                  className="h-12 px-7 text-base"
                >
                  Schedule Your Free Consultation
                </CtaButton>
                <Button
                  render={<a href="tel:+919810779908" />}
                  variant="outline"
                  size="lg"
                  className="group relative h-12 overflow-hidden rounded-[var(--radius-md)] border-white/30 bg-transparent px-7 text-base text-text-inverse transition-token transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-text-inverse hover:shadow-xl active:translate-y-0"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1/3 -translate-x-[250%] -skew-x-12 bg-white/15 transition-transform duration-700 ease-out group-hover:translate-x-[350%]"
                  />
                  <Phone className="relative size-4" />
                  <span className="relative">+91 98107 79908</span>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
