import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Transfer Pricing | Solanki Singh & CO.",
  description: "Transfer Pricing is part of our Income Tax Advisory practice at Solanki Singh & CO.",
};

export default function TransferPricingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Transfer Pricing"
          parentTitle="Income Tax Advisory"
          parentHref="/income-tax-advisory/"
          overview={[
            "We offer specialized transfer pricing services to help businesses manage their intercompany transactions in compliance with local and international regulations. Transfer pricing involves setting prices for goods, services, or intellectual property exchanged between related entities within a multinational group.",
            "We assist in developing robust transfer pricing policies, preparing necessary documentation, and conducting benchmarking studies to ensure that your transactions align with the arm's length principle. Additionally, we support you during audits or inquiries from tax authorities, helping to mitigate risks and avoid potential penalties.",
            "Our goal is to provide practical solutions that balance compliance requirements with your business objectives.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
