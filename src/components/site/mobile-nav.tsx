"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SheetClose } from "@/components/ui/sheet";
import {
  NAV_ITEMS,
  collectHrefs,
  isPathActive,
  type NavChild,
  type NavItem,
} from "@/components/site/nav-data";

const DEPTH_TEXT = ["text-base font-medium", "text-sm font-medium", "text-sm"];
const DEPTH_PAD = ["pl-3", "pl-6", "pl-9"];

function ExpandableRow({
  label,
  href,
  depth,
  pathname,
  defaultOpen = false,
  children,
}: {
  label: string;
  href?: string;
  depth: number;
  pathname: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const active = href ? isPathActive(href, pathname) : false;

  return (
    <div>
      <div className="flex items-center">
        {href ? (
          <SheetClose
            render={
              <Link
                href={href}
                className={`flex flex-1 items-center gap-2 rounded-sm py-2.5 ${DEPTH_PAD[depth]} ${DEPTH_TEXT[depth]} transition-colors ${
                  active
                    ? "font-semibold text-surface-strong"
                    : "text-text-tertiary"
                }`}
              />
            }
          >
            <span
              aria-hidden="true"
              className={`size-1.5 shrink-0 rounded-full bg-surface-strong transition-all duration-300 ${
                active ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            />
            {label}
          </SheetClose>
        ) : (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className={`flex-1 rounded-sm py-2.5 text-left ${DEPTH_PAD[depth]} ${DEPTH_TEXT[depth]} text-text-tertiary transition-colors hover:bg-surface-muted`}
          >
            {label}
          </button>
        )}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`Toggle ${label} submenu`}
          className="mr-2 flex size-8 shrink-0 items-center justify-center rounded-sm text-text-primary transition-colors hover:bg-surface-muted"
        >
          <ChevronDown
            className={`size-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileNavChildren({
  items,
  depth,
  pathname,
}: {
  items: NavChild[];
  depth: number;
  pathname: string;
}) {
  return (
    <div className="flex flex-col">
      {items.map((item) =>
        item.children && item.children.length > 0 ? (
          <ExpandableRow
            key={item.href}
            label={item.label}
            href={item.href}
            depth={depth}
            pathname={pathname}
            defaultOpen={collectHrefs(item.children).some((href) =>
              isPathActive(href, pathname)
            )}
          >
            <MobileNavChildren
              items={item.children}
              depth={Math.min(depth + 1, 2)}
              pathname={pathname}
            />
          </ExpandableRow>
        ) : (
          <SheetClose
            key={item.href}
            render={
              <Link
                href={item.href}
                className={`flex items-center gap-2 rounded-sm py-2.5 ${DEPTH_PAD[depth]} ${DEPTH_TEXT[depth]} transition-colors ${
                  isPathActive(item.href, pathname)
                    ? "font-semibold text-surface-strong"
                    : "text-text-tertiary hover:bg-surface-muted"
                }`}
              />
            }
          >
            <span
              aria-hidden="true"
              className={`size-1.5 shrink-0 rounded-full bg-surface-strong transition-all duration-300 ${
                isPathActive(item.href, pathname) ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            />
            {item.label}
          </SheetClose>
        )
      )}
    </div>
  );
}

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Mobile primary" className="flex flex-col gap-1 px-4 py-4">
      {NAV_ITEMS.map((item: NavItem) =>
        item.children ? (
          <ExpandableRow
            key={item.label}
            label={item.label}
            href={item.href}
            depth={0}
            pathname={pathname}
            defaultOpen={collectHrefs(item.children).some((href) =>
              isPathActive(href, pathname)
            )}
          >
            <MobileNavChildren items={item.children} depth={1} pathname={pathname} />
          </ExpandableRow>
        ) : (
          <SheetClose
            key={item.label}
            render={
              <Link
                href={item.href ?? "/"}
                className={`flex items-center gap-2 rounded-sm py-2.5 ${DEPTH_PAD[0]} ${DEPTH_TEXT[0]} transition-colors ${
                  isPathActive(item.href ?? "/", pathname)
                    ? "font-semibold text-surface-strong"
                    : "text-text-tertiary hover:bg-surface-muted"
                }`}
              />
            }
          >
            <span
              aria-hidden="true"
              className={`size-1.5 shrink-0 rounded-full bg-surface-strong transition-all duration-300 ${
                isPathActive(item.href ?? "/", pathname) ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            />
            {item.label}
          </SheetClose>
        )
      )}
    </nav>
  );
}
