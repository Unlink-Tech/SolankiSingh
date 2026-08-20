"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  NAV_ITEMS,
  collectHrefs,
  isPathActive,
  type NavChild,
} from "@/components/site/nav-data";

function topLevelLinkClass(active: boolean) {
  return `relative inline-flex h-9 items-center rounded-lg px-3 text-sm font-medium transition-colors duration-200 ${
    active
      ? "text-surface-strong data-popup-open:text-surface-strong"
      : "text-text-primary hover:text-text-tertiary focus:text-text-tertiary data-popup-open:text-text-tertiary"
  }`;
}

function ActiveDot({ active }: { active: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute -bottom-0.5 left-1/2 -translate-x-1/2 size-1 rounded-full bg-surface-strong transition-all duration-300 ${
        active ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    />
  );
}

function RowDot({ active }: { active: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`size-1.5 shrink-0 rounded-full bg-surface-strong transition-all duration-300 ${
        active ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    />
  );
}

function AboutPanel({ items }: { items: NavChild[] }) {
  const pathname = usePathname();

  return (
    <ul className="flex w-64 flex-col gap-0.5 p-2">
      {items.map((item) => {
        const active = isPathActive(item.href, pathname);
        return (
          <li key={item.href}>
            <NavigationMenuLink
              render={<Link href={item.href} />}
              className={`group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors duration-200 ${
                active
                  ? "font-semibold text-surface-strong"
                  : "text-text-tertiary hover:text-surface-strong"
              }`}
            >
              <span className="flex items-center gap-2.5">
                <RowDot active={active} />
                {item.label}
              </span>
              <ArrowRight
                className={`size-3.5 transition-all duration-200 ${
                  active
                    ? "translate-x-0 text-surface-strong opacity-100"
                    : "-translate-x-1 text-surface-strong opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                }`}
              />
            </NavigationMenuLink>
          </li>
        );
      })}
    </ul>
  );
}

function ServiceDetail({ category }: { category: NavChild }) {
  const pathname = usePathname();
  const hasChildren = category.children && category.children.length > 0;

  return (
    <motion.div
      key={category.href}
      initial={{ opacity: 0, x: 8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col"
    >
      <p className="mb-3 px-2 text-[11px] font-semibold tracking-wider text-text-primary/70 uppercase">
        {category.label}
      </p>

      {hasChildren ? (
        <div className="flex flex-col gap-1">
          {category.children!.map((child) => {
            const childActive = isPathActive(child.href, pathname);
            return (
              <div key={child.href}>
                <NavigationMenuLink
                  render={<Link href={child.href} />}
                  className={`group/link flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors duration-150 ${
                    childActive
                      ? "font-semibold text-surface-strong"
                      : "text-text-tertiary hover:text-surface-strong"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <RowDot active={childActive} />
                    <span className="leading-snug">{child.label}</span>
                  </span>
                  <ChevronRight
                    className={`size-3.5 shrink-0 transition-transform duration-150 group-hover/link:translate-x-0.5 group-hover/link:text-surface-strong ${
                      childActive ? "text-surface-strong" : "text-text-primary/40"
                    }`}
                  />
                </NavigationMenuLink>
                {child.children && child.children.length > 0 && (
                  <div className="mb-2 ml-4 flex flex-col gap-1 border-l border-border pl-4">
                    {child.children.map((grandchild) => {
                      const grandchildActive = isPathActive(grandchild.href, pathname);
                      return (
                        <NavigationMenuLink
                          key={grandchild.href}
                          render={<Link href={grandchild.href} />}
                          className={`block rounded-md px-2 py-1.5 text-xs leading-snug transition-colors duration-150 hover:text-surface-strong ${
                            grandchildActive
                              ? "font-semibold text-surface-strong"
                              : "text-text-primary"
                          }`}
                        >
                          {grandchild.label}
                        </NavigationMenuLink>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p className="px-3 py-2.5 text-sm text-text-primary">
          Full-service {category.label.toLowerCase()}, handled end-to-end by
          a dedicated point of contact.
        </p>
      )}

      <NavigationMenuLink
        render={<Link href={category.href} />}
        className="mt-5 flex items-center gap-1.5 self-start rounded-md px-2 py-1.5 text-xs font-semibold text-surface-strong transition-opacity duration-150 hover:opacity-80"
      >
        View {category.label}
        <ArrowRight className="size-3.5" />
      </NavigationMenuLink>
    </motion.div>
  );
}

function ServicesPanel({ items }: { items: NavChild[] }) {
  const pathname = usePathname();
  const currentCategory = items.find((item) =>
    [item.href, ...(item.children ? collectHrefs(item.children) : [])].some(
      (href) => isPathActive(href, pathname)
    )
  );
  const [hovered, setHovered] = useState<NavChild | null>(null);
  const displayed = hovered ?? currentCategory ?? items[0];

  return (
    <div className="flex w-[min(700px,90vw)]">
      <div className="flex w-60 shrink-0 flex-col gap-1 bg-surface-muted/25 p-3.5">
        {items.map((item) => {
          const isDisplayed = item.href === displayed.href;
          const isCurrentPage = item === currentCategory;
          return (
            <NavigationMenuLink
              key={item.href}
              render={<Link href={item.href} />}
              onMouseEnter={() => setHovered(item)}
              onFocus={() => setHovered(item)}
              className={`relative flex items-center justify-between gap-2 rounded-md py-3 pr-3 pl-4 text-sm transition-colors duration-150 ${
                isDisplayed
                  ? "bg-background font-semibold text-text-tertiary shadow-1"
                  : "text-text-primary hover:bg-background/60 hover:text-text-tertiary"
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute top-1/2 left-0 h-4 w-0.5 -translate-y-1/2 rounded-full bg-surface-strong transition-opacity duration-150 ${
                  isDisplayed ? "opacity-100" : "opacity-0"
                }`}
              />
              <span className="flex items-center gap-2">
                {item.label}
                {isCurrentPage && (
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 rounded-full bg-surface-strong"
                  />
                )}
              </span>
              {item.children && item.children.length > 0 && (
                <ChevronRight
                  className={`size-3.5 shrink-0 transition-colors duration-150 ${
                    isDisplayed ? "text-surface-strong" : "text-text-primary/40"
                  }`}
                />
              )}
            </NavigationMenuLink>
          );
        })}
      </div>
      <div className="max-h-[28rem] flex-1 overflow-y-auto bg-background p-7">
        <AnimatePresence mode="wait" initial={false}>
          <ServiceDetail category={displayed} />
        </AnimatePresence>
      </div>
    </div>
  );
}

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <NavigationMenu className="hidden lg:flex" aria-label="Primary">
      <NavigationMenuList className="gap-0.5">
        {NAV_ITEMS.map((item) => {
          if (!item.children) {
            const active = isPathActive(item.href ?? "/", pathname);
            return (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  render={<Link href={item.href ?? "/"} />}
                  className={topLevelLinkClass(active)}
                >
                  {item.label}
                  <ActiveDot active={active} />
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          }

          const parentActive = collectHrefs(item.children).some((href) =>
            isPathActive(href, pathname)
          );

          return (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuTrigger className={topLevelLinkClass(parentActive)}>
                {item.label}
                <ActiveDot active={parentActive} />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-0">
                {item.label === "Services" ? (
                  <ServicesPanel items={item.children} />
                ) : (
                  <AboutPanel items={item.children} />
                )}
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
