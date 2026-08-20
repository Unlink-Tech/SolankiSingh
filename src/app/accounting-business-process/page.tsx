import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";
import { SERVICES } from "@/components/site/services-data";

const service = SERVICES[8];

export const metadata: Metadata = {
  title: `${service.title} | Solanki Singh & CO.`,
  description: service.description,
};

export default function AccountingBusinessProcessPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title={service.title}
          parentTitle="Our Services"
          parentHref="/#services"
          description="One of our core service verticals at Solanki Singh & CO."
          image={service.image}
          overview={[
            "Accurate and efficient accounting is the cornerstone of any successful business, providing a clear financial picture and aiding in strategic decision-making. Our accounting and related services encompass a wide range of solutions tailored to meet the unique needs of businesses.",
            "From maintaining accurate bookkeeping records to preparing detailed financial statements, we ensure that your financial data is organized, reliable, and compliant with regulatory standards. Our services include managing accounts payable and receivable, payroll processing, bank reconciliations, and preparation of management reports.",
            "We also assist with periodic audits and tax filings, ensuring that all statutory obligations are met. Additionally, we leverage advanced accounting software to streamline processes, provide real-time financial insights, and support businesses in optimizing their financial operations.",
            "With our comprehensive accounting services, clients can focus on their core business activities while having confidence in the accuracy and integrity of their financial systems.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
