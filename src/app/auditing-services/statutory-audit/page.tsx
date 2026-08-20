import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Statutory Audit | Solanki Singh & CO.",
  description: "Statutory Audit is part of our Audit & Assurance practice at Solanki Singh & CO.",
};

export default function StatutoryAuditPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Statutory Audit"
          parentTitle="Audit & Assurance"
          parentHref="/audit-assurancev/"
          overview={[
            "A statutory audit is an independent examination of a company's financial statements, conducted in accordance with established accounting standards and statutory requirements. We offer comprehensive statutory audit services designed to help businesses meet legal and regulatory obligations.",
            "We assess the accuracy and completeness of your financial records, offering an objective opinion on whether they present a true and fair view of your business's financial position. Our team follows established accounting standards and regulations to identify any discrepancies, risks, or areas for improvement in your financial practices.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
