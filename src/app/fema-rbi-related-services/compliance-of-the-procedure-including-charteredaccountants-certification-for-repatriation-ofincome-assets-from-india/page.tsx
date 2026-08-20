import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Compliance of the procedure including charteredAccountants Certification for repatriation of income/assets from India | Solanki Singh & CO.",
  description: "Compliance of the procedure including charteredAccountants Certification for repatriation of income/assets from India is part of our FEMA/RBI related Services practice at Solanki Singh & CO.",
};

export default function ComplianceOfTheProcedureIncludingCharteredaccountantsCertificationForRepatriationOfincomeAssetsFromIndiaPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Compliance of the procedure including charteredAccountants Certification for repatriation of income/assets from India"
          parentTitle="FEMA/RBI related Services"
          parentHref="/fema-rbi-related-services/"
          overview={[
            "Repatriation is the process of transferring income or assets from India to a foreign country, which is governed by the guidelines set forth by the Foreign Exchange Management Act (FEMA) and the Reserve Bank of India (RBI). This procedure involves ensuring that all necessary legal and regulatory requirements are met for a smooth and compliant transfer.",
            "Our firm assists clients with the entire repatriation process by providing Chartered Accountants Certification, which is required by the authorities as proof of compliance. We help individuals and businesses with the documentation, filings, and approvals necessary to ensure that income or assets can be repatriated legally.",
            "Our services encompass assisting with the preparation of the requisite forms and certifications, guiding clients through the complexities of the repatriation procedure, and liaising with banks and other regulatory bodies to ensure a seamless and hassle-free process.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
