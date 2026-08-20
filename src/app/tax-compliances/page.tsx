import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Tax Compliances | Solanki Singh & CO.",
  description: "Tax Compliances is part of our Income Tax Advisory practice at Solanki Singh & CO.",
};

export default function TaxCompliancesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Tax Compliances"
          parentTitle="Income Tax Advisory"
          parentHref="/income-tax-advisory/"
          overview={[
            "At our firm, we understand the complexities of navigating ever-changing tax laws and regulations. Our tax compliance services are designed to help businesses meet their tax obligations accurately and on time.",
            "We assist with the preparation and filing of tax returns, ensuring that all applicable tax laws are calculated and reported correctly. We also help you stay up-to-date with regulatory changes and maintain proper documentation to support your filings.",
            "In the event of a tax audit or inquiry, we provide expert guidance to ensure a smooth resolution. Our goal is to help you minimize compliance risks while allowing you to focus on running your business confidently.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
