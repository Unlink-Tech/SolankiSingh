import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "GST Compliance and Advisory | Solanki Singh & CO.",
  description: "GST Compliance and Advisory is part of our GST Law Advisory practice at Solanki Singh & CO.",
};

export default function GstComplianceAndAdvisoryPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="GST Compliance and Advisory"
          parentTitle="GST Law Advisory"
          parentHref="/gst-law-advisory/"
          overview={[
            "We provide expert GST compliance and advisory services to help businesses maintain adherence to GST laws and optimize their tax position. Our team assists in understanding complex GST provisions, including taxability, exemptions, and classifications.",
            "We offer tailored advice on how to structure your transactions, manage input tax credits, and handle GST-related issues to ensure your business remains compliant while minimizing tax liabilities.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
