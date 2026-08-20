import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Corporate Law Compliance | Solanki Singh & CO.",
  description: "Corporate Law Compliance is part of our Corporate Law Services practice at Solanki Singh & CO.",
};

export default function CorporateLawCompliancePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Corporate Law Compliance"
          parentTitle="Corporate Law Services"
          parentHref="/corporate-law-services/"
          overview={[
            "Corporate Law Compliance involves the adherence to a wide range of legal requirements and regulatory standards that govern business activities. These include statutory obligations, reporting requirements, governance standards, and the timely filing of documents with various regulatory authorities.",
            "We provide comprehensive corporate law compliance services to ensure that your business stays in line with current laws and avoids penalties for non-compliance. We assist with monitoring and managing your legal obligations, including preparing and submitting annual returns, managing corporate governance practices, and maintaining records in accordance with regulatory standards.",
            "Our team works proactively with your business to ensure that you are always in compliance, minimizing legal risks and enabling you to focus on your core business operations with confidence.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
