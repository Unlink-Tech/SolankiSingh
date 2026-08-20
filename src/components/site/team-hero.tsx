import { Users } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { TEAM } from "@/components/site/team-data";

export function TeamHero() {
  return (
    <PageHero
      icon={<Users className="size-3.5 text-surface-strong" aria-hidden="true" />}
      badgeLabel="Our Team"
      heading="The people behind every number"
      description={`${TEAM.length} Chartered Accountants, advocates, consultants and specialists, working as one team behind every engagement.`}
    />
  );
}
