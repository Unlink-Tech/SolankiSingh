import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Due Diligence | Solanki Singh & CO.",
  description: "Due Diligence is part of our Corporate Law Services practice at Solanki Singh & CO.",
};

export default function DueDiligencePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Due Diligence"
          parentTitle="Corporate Law Services"
          parentHref="/corporate-law-services/"
          overview={[
            "Due diligence is the process of conducting a comprehensive assessment of a company's financial, operational, legal, and commercial aspects before entering into significant transactions such as mergers, acquisitions, investments, or joint ventures. It involves analyzing all relevant documentation, financial records, contracts, and potential liabilities to assess the value and risks associated with the transaction.",
            "We offer thorough due diligence services, conducting detailed investigations to uncover any hidden risks, financial discrepancies, or potential liabilities that could impact the transaction. We provide you with an in-depth analysis of the target company's business model, financial health, legal standing, and market position, enabling you to make informed decisions.",
            "Whether you're acquiring a new business or entering into a strategic partnership, we ensure that you are well-prepared, minimizing risks and maximizing the potential for a successful transaction.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
