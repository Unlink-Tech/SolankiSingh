import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Monthly MIS of Indirect Tax Compliance | Solanki Singh & CO.",
  description: "Monthly MIS of Indirect Tax Compliance is part of our GST Law Advisory practice at Solanki Singh & CO.",
};

export default function MonthlyMisOfIndirectTaxCompliancePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Monthly MIS of Indirect Tax Compliance"
          parentTitle="GST Law Advisory"
          parentHref="/gst-law-advisory/"
          overview={[
            "Monthly MIS of Indirect Tax Compliance involves generating regular management reports that monitor a business's compliance with indirect taxes, each month. These reports offer a clear overview of the business's tax status, helping ensure that all required filings, payments, and compliance actions are completed on time and in accordance with tax regulations.",
            "Our Monthly MIS (Management Information System) of Indirect Tax Compliance service provides businesses with regular reports on their indirect tax obligations. These reports offer a comprehensive overview of your GST compliance status, highlighting any areas that need attention.",
            "By keeping you informed of your ongoing tax responsibilities, our service helps you stay proactive in managing indirect taxes, ensuring that your business remains compliant with all regulatory deadlines and requirements.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
