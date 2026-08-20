import { Building2 } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";

export function AboutHero() {
  return (
    <PageHero
      icon={<Building2 className="size-3.5 text-surface-strong" aria-hidden="true" />}
      badgeLabel="About Us"
      heading="Built on trust, driven by expertise"
      description="Since 1988, Solanki Singh & CO. has stood beside businesses of every size with the same promise: clear numbers, sound advice, and a team that treats your books like they matter."
    />
  );
}
