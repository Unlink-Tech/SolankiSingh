import { Factory } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";

export function IndustriesHero() {
  return (
    <PageHero
      icon={<Factory className="size-3.5 text-surface-strong" aria-hidden="true" />}
      badgeLabel="Industries Served"
      heading="Sectors we know inside out"
      description="Nineteen industries, one consistent standard of advisory. Wherever your business sits, we've already done the work to understand how it runs."
    />
  );
}
