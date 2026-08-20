import { MessageCircle } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";

export function ContactHero() {
  return (
    <PageHero
      icon={<MessageCircle className="size-3.5 text-surface-strong" aria-hidden="true" />}
      badgeLabel="Contact Us"
      heading="Let’s talk about your books"
      description="Fill out the form and a member of our team will respond within one business day. Prefer to talk now? Call the number below."
    />
  );
}
