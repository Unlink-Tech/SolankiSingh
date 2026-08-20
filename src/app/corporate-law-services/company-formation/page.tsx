import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Company Formation | Solanki Singh & CO.",
  description: "Company Formation is part of our Corporate Law Services practice at Solanki Singh & CO.",
};

export default function CompanyFormationPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Company Formation"
          parentTitle="Corporate Law Services"
          parentHref="/corporate-law-services/"
          overview={[
            "Company formation is the process of establishing a new legal entity, such as a private limited company, partnership, or limited liability partnership, in accordance with the prevailing laws and regulations. This process includes choosing the appropriate legal structure, registering with the relevant government authorities, and ensuring the business complies with all regulatory requirements.",
            "At our firm, we guide businesses through every stage of the company formation process. From selecting the optimal structure that aligns with your business goals to filing the necessary documents with government agencies, we ensure that all legal formalities are completed efficiently.",
            "We also assist with obtaining any required licenses and registrations, such as GST registration, and advise on governance and compliance structures to ensure your business is set up for long-term success.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
