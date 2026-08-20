"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SERVICES } from "@/components/site/services-data";

export function ServiceSidebar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Service categories"
      className="lg:sticky lg:top-24 lg:self-start"
    >
      <p className="text-xs font-semibold tracking-wider text-text-primary/70 uppercase">
        Our Services
      </p>
      <ul className="mt-4 flex flex-col gap-1 rounded-2xl border border-border bg-surface-muted/25 p-2">
        {SERVICES.map((service) => {
          const active = pathname === service.href;
          return (
            <li key={service.href}>
              <Link
                href={service.href}
                aria-current={active || undefined}
                className={`group relative flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm transition-colors duration-200 ${
                  active
                    ? "bg-background font-semibold text-text-tertiary shadow-1"
                    : "text-text-primary hover:bg-background/60 hover:text-text-tertiary"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute top-1/2 left-0 h-4 w-0.5 -translate-y-1/2 rounded-full bg-surface-strong transition-opacity duration-200 ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
                <service.icon
                  className={`size-4 shrink-0 transition-colors duration-200 ${
                    active ? "text-surface-strong" : "text-text-primary/50 group-hover:text-surface-strong"
                  }`}
                  aria-hidden="true"
                />
                <span className="leading-snug">{service.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
