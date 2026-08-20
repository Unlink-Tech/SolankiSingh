import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { Button } from "@/components/ui/button";

export function CtaButton({
  href,
  children,
  className = "",
  variant = "solid",
  ...props
}: {
  href: string;
  children?: ReactNode;
  className?: string;
  variant?: "solid" | "inverse";
} & Omit<
  ComponentProps<typeof Button>,
  "href" | "render" | "className" | "children" | "variant"
>) {
  const palette =
    variant === "inverse"
      ? "bg-text-inverse text-surface-strong hover:bg-text-inverse/90"
      : "bg-surface-strong text-text-inverse hover:bg-surface-strong-hover";
  const shineColor = variant === "inverse" ? "bg-surface-strong/15" : "bg-white/25";

  return (
    <Button
      render={<Link href={href} />}
      className={`group relative h-11 overflow-hidden rounded-[var(--radius-md)] px-6 text-sm font-semibold shadow-2 transition-token transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 ${palette} ${className}`}
      {...props}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-y-0 left-0 w-1/3 -translate-x-[250%] -skew-x-12 transition-transform duration-700 ease-out group-hover:translate-x-[350%] ${shineColor}`}
      />
      <span className="relative">{children}</span>
      <ArrowRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Button>
  );
}
