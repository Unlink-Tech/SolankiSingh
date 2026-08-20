import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Tax Audit | Solanki Singh & CO.",
  description: "Tax Audit is part of our Audit & Assurance practice at Solanki Singh & CO.",
};

export default function TaxAuditPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Tax Audit"
          parentTitle="Audit & Assurance"
          parentHref="/audit-assurancev/"
          overview={[
            "A tax audit is an independent review and examination of a taxpayer's financial records, tax returns, and related documents to ensure that all tax obligations are accurately reported and compliant with the applicable tax laws and regulations. The primary objective of a tax audit is to verify the correctness of income, expenses, deductions, and other tax-related information, ensuring that the tax liability is calculated properly and in accordance with the law.",
            "During a tax audit, we thoroughly scrutinize your financial statements, transaction records, and supporting documents to identify any discrepancies or errors in your tax filings. We also assess your internal controls, accounting practices, and compliance with relevant tax laws. This process ensures that your tax reporting is accurate and transparent, helping to reduce the risk of penalties, fines, or legal issues.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
