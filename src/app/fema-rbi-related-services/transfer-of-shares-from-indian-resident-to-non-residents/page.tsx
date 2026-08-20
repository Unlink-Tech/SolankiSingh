import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Transfer of shares from Indian resident to non-residents | Solanki Singh & CO.",
  description: "Transfer of shares from Indian resident to non-residents is part of our FEMA/RBI related Services practice at Solanki Singh & CO.",
};

export default function TransferOfSharesFromIndianResidentToNonResidentsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Transfer of shares from Indian resident to non-residents"
          parentTitle="FEMA/RBI related Services"
          parentHref="/fema-rbi-related-services/"
          overview={[
            "The transfer of shares from an Indian resident to a non-resident requires careful compliance with FEMA and RBI guidelines to ensure that the foreign exchange regulations are followed correctly. This includes obtaining approval from the Reserve Bank of India, adhering to prescribed pricing mechanisms, and completing all necessary documentation.",
            "Our firm offers full support in managing the transfer process, helping clients navigate the various legal requirements and ensuring compliance with all relevant provisions. We assist in the valuation of shares, obtaining necessary approvals from RBI, and filing the relevant forms and reports to ensure that the transfer is legally sound.",
            "With our services, both the resident seller and non-resident buyer can be confident that the transfer is compliant with all applicable regulations, ensuring the process is both smooth and efficient.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
