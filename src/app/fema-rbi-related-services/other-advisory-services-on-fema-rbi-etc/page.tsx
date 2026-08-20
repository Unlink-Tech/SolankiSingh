import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Other Advisory Services on FEMA / RBI etc. | Solanki Singh & CO.",
  description: "Other Advisory Services on FEMA / RBI etc. is part of our FEMA/RBI related Services practice at Solanki Singh & CO.",
};

export default function OtherAdvisoryServicesOnFemaRbiEtcPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Other Advisory Services on FEMA / RBI etc."
          parentTitle="FEMA/RBI related Services"
          parentHref="/fema-rbi-related-services/"
          overview={[
            "Our firm offers a wide range of advisory services related to FEMA and RBI regulations, providing businesses with tailored solutions to navigate the complexities of foreign exchange laws in India. We specialize in advising clients on issues related to foreign direct investment (FDI), external commercial borrowings (ECBs), repatriation of funds, and compliance with various RBI regulations.",
            "Whether it's structuring cross-border transactions, resolving issues related to foreign investments, or ensuring compliance with regulatory requirements, our team is equipped to provide expert legal and financial advice.",
            "We work closely with clients to understand their specific needs and provide strategic guidance to ensure that all foreign exchange transactions are compliant with the law, minimizing regulatory risks and ensuring smooth business operations.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
