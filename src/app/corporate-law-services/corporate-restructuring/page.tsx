import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Corporate Restructuring | Solanki Singh & CO.",
  description: "Corporate Restructuring is part of our Corporate Law Services practice at Solanki Singh & CO.",
};

export default function CorporateRestructuringPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Corporate Restructuring"
          parentTitle="Corporate Law Services"
          parentHref="/corporate-law-services/"
          overview={[
            "Corporate restructuring involves reorganizing a company's operations, financials, or legal structure to enhance business performance, reduce operational costs, or address financial challenges. This may include mergers, acquisitions, divestitures, or internal changes such as debt restructuring or asset transfers.",
            "Our firm specializes in guiding businesses through corporate restructuring processes, providing strategic advice on the best approach for optimizing your organizational structure. We collaborate with management teams to assess the company's existing structure, identify inefficiencies, and recommend appropriate restructuring options.",
            "Whether your goal is to streamline operations, improve financial health, or prepare for future growth, we offer tailored solutions designed to achieve sustainable success and ensure that the restructuring process aligns with your long-term business objectives.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
