import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { TeamHero } from "@/components/site/team-hero";
import { TeamGrid } from "@/components/site/team-grid";
import { TeamShowcase } from "@/components/site/team-showcase";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Our Team | Solanki Singh & CO.",
  description:
    "Meet the Chartered Accountants, advocates, consultants and specialists behind Solanki Singh & CO.",
};

export default function OurTeamPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <TeamHero />
        <TeamGrid />
        <TeamShowcase />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
