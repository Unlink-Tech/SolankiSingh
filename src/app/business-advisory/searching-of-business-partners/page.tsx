import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Searching of Business Partners | Solanki Singh & CO.",
  description: "Searching of Business Partners is part of our Business Advisory practice at Solanki Singh & CO.",
};

export default function SearchingOfBusinessPartnersPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Searching of Business Partners"
          parentTitle="Business Advisory"
          parentHref="/business-advisory/"
          overview={[
            "Finding the right business partner is critical for expanding operations, entering new markets, or forming strategic alliances. Our firm offers expert advisory services in identifying and evaluating potential business partners.",
            "We assist clients in searching for partners that align with their business goals, financial capabilities, and operational needs. Using our extensive network and market research tools, we help businesses identify trustworthy partners and provide support in due diligence, ensuring that the partnership will be beneficial for both parties.",
            "Whether it's for a joint venture, collaboration, or distribution agreement, our firm helps clients navigate the partner selection process, negotiate terms, and establish a strong foundation for a successful and mutually beneficial business relationship.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
