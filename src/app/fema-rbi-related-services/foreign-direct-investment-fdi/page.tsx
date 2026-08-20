import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Foreign Direct Investment (FDI) | Solanki Singh & CO.",
  description: "Foreign Direct Investment (FDI) is part of our FEMA/RBI related Services practice at Solanki Singh & CO.",
};

export default function ForeignDirectInvestmentFdiPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Foreign Direct Investment (FDI)"
          parentTitle="FEMA/RBI related Services"
          parentHref="/fema-rbi-related-services/"
          overview={[
            "Foreign Direct Investment (FDI) involves foreign investors making investments directly into Indian businesses, typically by acquiring equity shares or establishing new ventures. FDI is governed by FEMA and RBI regulations, which dictate the sectors, procedures, and limits for foreign investment in India.",
            "Our firm provides expert assistance in managing FDI transactions, from helping clients understand which sectors are open for foreign investment to ensuring that the investment structure complies with the necessary regulations. We assist in obtaining approvals from the Reserve Bank of India (RBI), completing the required filings, and ensuring that all reporting requirements are met.",
            "Our firm works closely with clients to structure their FDI deals, ensuring they meet legal requirements, maximize the potential for growth, and comply with India's foreign exchange and investment laws. With our guidance, businesses can attract foreign investment while ensuring full legal compliance, paving the way for successful partnerships and expansions in India.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
