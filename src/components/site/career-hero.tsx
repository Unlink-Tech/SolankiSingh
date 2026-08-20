import { Briefcase } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";

export function CareerHero() {
  return (
    <PageHero
      icon={<Briefcase className="size-3.5 text-surface-strong" aria-hidden="true" />}
      badgeLabel="Career"
      heading="Career"
    />
  );
}
