import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Internal Audit | Solanki Singh & CO.",
  description: "Internal Audit is part of our Audit & Assurance practice at Solanki Singh & CO.",
};

export default function InternalAuditPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Internal Audit"
          parentTitle="Audit & Assurance"
          parentHref="/audit-assurancev/"
          overview={[
            "Internal audit is a critical function that helps organizations evaluate and improve the effectiveness of their internal controls, risk management, and governance processes. It provides an independent and objective assessment of whether operations are functioning as intended and in compliance with policies, regulations, and industry standards.",
            "Internal audits help identify potential risks, inefficiencies, and areas for improvement, offering valuable insights to management and the board. By continuously monitoring and reviewing systems and processes, internal audits play a key role in safeguarding assets, ensuring operational effectiveness, and supporting the organization in achieving its strategic objectives.",
            "We work collaboratively with your management and audit committees to identify potential risks, ensure compliance with policies and regulations, and recommend improvements. Our approach focuses on providing insights that not only safeguard assets but also enhance operational efficiency and support the achievement of your organizational goals.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
