"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowUp, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import type { SVGProps } from "react";


const FOOTER_COLUMNS = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about/" },
      { label: "Our Team", href: "/our-team/" },
      { label: "Careers", href: "/career/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Audit & Assurance", href: "/audit-assurancev/" },
      { label: "Income Tax Advisory", href: "/income-tax-advisory/" },
      { label: "GST Law Advisory", href: "/gst-law-advisory/" },
      { label: "Corporate Law Services", href: "/corporate-law-services/" },
      { label: "Business Advisory", href: "/business-advisory/" },
      {
        label: "Accounting & Business Process",
        href: "/accounting-business-process/",
      },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Terms & Conditions", href: "/terms-and-conditions/" },
      { label: "FAQ", href: "/faq/" },
      { label: "Disclaimer", href: "/disclaimer/" },
    ],
  },
];



export function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
    event.currentTarget.reset();
  }

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="bg-surface-base text-text-secondary">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="inline-flex w-fit items-center self-start rounded-lg bg-white p-2.5"
            >
              <Image
                src="/logo.jpeg"
                alt="Solanki Singh & CO., Chartered Accountants"
                width={1617}
                height={263}
                sizes="200px"
                className="h-7 w-auto"
              />
            </Link>
            <p className="max-w-xs text-sm text-text-secondary/80">
              Tax, audit, and advisory services built for businesses that
              need clarity, not just compliance.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-2 flex flex-col gap-2"
            >
              <label
                htmlFor="footer-newsletter"
                className="text-xs font-medium text-text-secondary"
              >
                Subscribe for tax deadline reminders
              </label>
              <div className="flex gap-2">
                <Input
                  id="footer-newsletter"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="h-10 rounded-sm border-white/15 bg-white/5 text-text-inverse placeholder:text-text-secondary/50"
                />
                <Button
                  type="submit"
                  size="icon"
                  aria-label="Subscribe"
                  className="h-10 w-11 shrink-0 rounded-sm bg-surface-strong text-text-inverse transition-colors duration-300 hover:bg-surface-strong-hover"
                >
                  <Send className="size-4" />
                </Button>
              </div>
              <p role="status" className="min-h-4 text-xs text-surface-strong">
                {subscribed ? "You're subscribed." : ""}
              </p>
            </form>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3"
          >
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.heading}>
                <h3 className="text-sm font-semibold text-text-inverse">
                  {column.heading}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-text-secondary/80 transition-colors duration-200 hover:text-surface-strong"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-xs text-text-secondary/70">
            &copy; {new Date().getFullYear()} Solanki Singh &amp; CO. All
            rights reserved.
          </p>
          <Button
            type="button"
            size="icon"
            aria-label="Scroll to top"
            onClick={handleScrollToTop}
            className="h-9 w-9 shrink-0 rounded-full bg-surface-strong text-text-inverse transition-colors duration-300 hover:bg-surface-strong-hover"
          >
            <ArrowUp className="size-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
