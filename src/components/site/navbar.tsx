"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DesktopNav } from "@/components/site/desktop-nav";
import { MobileNav } from "@/components/site/mobile-nav";
import { CtaButton } from "@/components/site/cta-button";
import { CONTACT_DETAILS } from "@/components/site/contact-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [logoCardOpen, setLogoCardOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-token transition-all duration-300 ${
        scrolled
          ? "border-border bg-background shadow-2 backdrop-blur-md"
          : "border-transparent bg-background"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:px-8">
        <div
          className="relative flex h-full shrink-0 items-center"
          onMouseEnter={() => setLogoCardOpen(true)}
          onMouseLeave={() => setLogoCardOpen(false)}
        >
          <Link
            href="/"
            className="flex items-center rounded-xs focus-visible:outline-offset-4"
            onFocus={() => setLogoCardOpen(true)}
            onBlur={() => setLogoCardOpen(false)}
          >
            <Image
              src="/logo.jpeg"
              alt="Solanki Singh & CO., Chartered Accountants"
              width={1617}
              height={263}
              priority
              sizes="(min-width: 640px) 240px, 180px"
              className="h-9 w-auto sm:h-11"
            />
          </Link>

          <AnimatePresence>
            {logoCardOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scaleY: 0.96 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -10, scaleY: 0.96 }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                style={{ transformOrigin: "top" }}
                className="absolute top-full left-0 z-50 w-[21rem] max-w-[calc(100vw-2.5rem)] origin-top rounded-2xl border border-border bg-background p-6 shadow-2"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-white p-1.5">
                    <Image
                      src="/logo.jpeg"
                      alt=""
                      width={1617}
                      height={263}
                      className="h-full w-auto object-contain"
                    />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-text-tertiary">
                      Solanki Singh &amp; CO.
                    </p>
                    <p className="text-xs text-text-primary">
                      Chartered Accountants
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-3.5 border-t border-border pt-5">
                  {CONTACT_DETAILS.map((detail) => (
                    <div key={detail.label} className="flex items-center gap-3.5">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-surface-strong/10 text-surface-strong">
                        <detail.icon className="size-4" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-medium tracking-wide text-text-primary uppercase">
                          {detail.label}
                        </p>
                        <p className="text-xs leading-snug text-text-tertiary">
                          {detail.href ? (
                            <a
                              href={detail.href}
                              className="transition-colors hover:text-surface-strong"
                            >
                              {detail.value}
                            </a>
                          ) : (
                            detail.value
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <DesktopNav />

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+919810779908"
            className="group flex items-center gap-2 rounded-full border border-border py-1 pr-3.5 pl-2 text-sm font-medium text-text-primary transition-colors duration-200 hover:border-surface-strong/30 hover:text-text-tertiary"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-surface-muted text-surface-strong transition-colors duration-200 group-hover:bg-surface-strong group-hover:text-text-inverse">
              <Phone className="size-5" aria-hidden="true" />
            </span>
            <span className="whitespace-nowrap">+91 98107 79908</span>
          </a>
          <CtaButton href="/contact/">Book a Consultation</CtaButton>
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="flex w-full max-w-xs flex-col p-0">
            <SheetHeader className="border-b border-border px-5 py-4">
              <SheetTitle>Solanki Singh &amp; CO.</SheetTitle>
            </SheetHeader>
            <div className="flex-1 overflow-y-auto">
              <MobileNav />
            </div>
            <div className="flex flex-col gap-3 border-t border-border px-5 py-4">
              <a
                href="tel:+919810779908"
                className="flex items-center gap-2 text-sm font-medium text-text-primary"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-surface-muted text-surface-strong">
                  <Phone className="size-4" aria-hidden="true" />
                </span>
                +91 98107 79908
              </a>
              <SheetClose
                render={<CtaButton href="/contact/" className="w-full justify-center" />}
              >
                Book a Consultation
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
