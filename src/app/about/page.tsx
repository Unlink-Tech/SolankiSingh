import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { AboutHero } from "@/components/site/about-hero";
import { AboutMission } from "@/components/site/about-mission";
import { AboutStory } from "@/components/site/about-story";
import { AboutReach } from "@/components/site/about-reach";
import { AboutTeam } from "@/components/site/about-team";
import { AboutValues } from "@/components/site/about-values";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "About Us | Solanki Singh & CO.",
  description:
    "Established in 1988, Solanki Singh & CO. is a full-service, multidisciplinary Chartered Accountancy firm serving national and international clients across every major sector.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <AboutHero />
        <AboutMission />
        <AboutStory />
        <AboutReach />
        <AboutTeam />
        <AboutValues />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
