import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Allotment of Shares to non residents | Solanki Singh & CO.",
  description: "Allotment of Shares to non residents is part of our FEMA/RBI related Services practice at Solanki Singh & CO.",
};

export default function AllotmentOfSharesToNonResidentsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Allotment of Shares to non residents"
          parentTitle="FEMA/RBI related Services"
          parentHref="/fema-rbi-related-services/"
          overview={[
            "The allotment of shares to non-residents is a process regulated by FEMA and RBI, ensuring that foreign investments comply with India's foreign exchange regulations. When non-residents purchase shares in an Indian company, the transaction must adhere to the prescribed guidelines, including obtaining the necessary approvals and completing the required formalities.",
            "Our firm offers comprehensive support in this process, ensuring that the allotment of shares to non-residents is carried out in full compliance with the regulations. We guide businesses through the steps required to make the allotment legally valid, including obtaining RBI permissions, preparing necessary documentation, and ensuring the accurate reporting of the transaction.",
            "Our expertise ensures that all formalities are completed promptly and in line with the prevailing legal framework, minimizing the risk of regulatory issues and ensuring a compliant investment process.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
