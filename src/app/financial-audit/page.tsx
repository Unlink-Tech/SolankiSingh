import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Financial Audit | Solanki Singh & CO.",
  description: "Financial Audit is part of our Audit & Assurance practice at Solanki Singh & CO.",
};

export default function FinancialAuditPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Financial Audit"
          parentTitle="Audit & Assurance"
          parentHref="/audit-assurancev/"
          overview={[
            "Our financial audit services focus on providing an objective review of your organization's financial statements. Our role is to ensure that these statements present a true and fair view in accordance with applicable accounting standards and regulatory requirements.",
            "We conduct a thorough examination of your financial records and internal controls to identify any material misstatements, whether due to error or fraud. Our audits are designed to help your organization meet its statutory obligations while providing stakeholders with reliable financial information.",
            "Through a systematic and professional approach, we aim to deliver a clear and unbiased assessment of your financial reporting.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
