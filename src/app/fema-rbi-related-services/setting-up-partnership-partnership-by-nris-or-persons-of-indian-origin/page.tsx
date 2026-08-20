import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Setting up Partnership / Partnership by NRI'S or persons of Indian origin | Solanki Singh & CO.",
  description: "Setting up Partnership / Partnership by NRI'S or persons of Indian origin is part of our FEMA/RBI related Services practice at Solanki Singh & CO.",
};

export default function SettingUpPartnershipPartnershipByNrisOrPersonsOfIndianOriginPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Setting up Partnership / Partnership by NRI'S or persons of Indian origin"
          parentTitle="FEMA/RBI related Services"
          parentHref="/fema-rbi-related-services/"
          overview={[
            "Setting up a partnership in India involving Non-Resident Indians (NRIs) or Persons of Indian Origin (PIOs) requires compliance with FEMA regulations, especially regarding foreign investment and business operations. These partnerships must be structured in accordance with both Indian laws and the specific provisions outlined by the RBI.",
            "Our firm provides comprehensive assistance to NRIs and PIOs looking to establish a partnership in India. We help with structuring the partnership agreement, ensuring the proper legal documentation, and obtaining any necessary approvals from RBI and other regulatory bodies.",
            "We also provide guidance on the types of businesses permissible for NRIs and PIOs to invest in, ensuring that the partnership is compliant with the foreign exchange rules and regulations while meeting both business and legal requirements.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
