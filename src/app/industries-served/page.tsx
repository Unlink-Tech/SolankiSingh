import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { IndustriesHero } from "@/components/site/industries-hero";
import { IndustriesGrid } from "@/components/site/industries-grid";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Industries Served | Solanki Singh & CO.",
  description:
    "Solanki Singh & CO. serves clients across manufacturing, real estate, healthcare, IT, hospitality, aviation, and more, across 19 industries, one consistent standard of advisory.",
};

export default function IndustriesServedPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <IndustriesHero />
        <IndustriesGrid />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
