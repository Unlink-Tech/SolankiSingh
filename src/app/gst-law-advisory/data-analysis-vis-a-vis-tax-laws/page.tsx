import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Data Analysis Vis a Vis Tax Laws | Solanki Singh & CO.",
  description: "Data Analysis Vis a Vis Tax Laws is part of our GST Law Advisory practice at Solanki Singh & CO.",
};

export default function DataAnalysisVisAVisTaxLawsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Data Analysis Vis a Vis Tax Laws"
          parentTitle="GST Law Advisory"
          parentHref="/gst-law-advisory/"
          overview={[
            "Data Analysis in the context of tax laws involves reviewing a business's financial records and transactions to ensure they align with the relevant tax regulations. This process identifies potential discrepancies, errors, and inefficiencies in the data that may affect compliance or tax liability.",
            "Our data analysis service examines your financial data in the context of applicable tax laws, particularly GST, to identify potential risks or opportunities for improvement. By analyzing transaction data, we help ensure that your records align with the regulatory requirements and provide actionable insights to optimize your tax processes.",
            "This service is particularly valuable in identifying discrepancies, improving data accuracy, and ensuring the proper application of GST.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
