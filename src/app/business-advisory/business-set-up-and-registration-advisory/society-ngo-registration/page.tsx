import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Society/NGO Registration | Solanki Singh & CO.",
  description: "Society/NGO Registration is part of our Business Set up and Registration Advisory practice at Solanki Singh & CO.",
};

export default function SocietyNgoRegistrationPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Society/NGO Registration"
          parentTitle="Business Set up and Registration Advisory"
          parentHref="/business-advisory/business-set-up-and-registration-advisory/"
          overview={[
            "The registration of a society or non-governmental organization (NGO) is an essential step for those aiming to establish an entity focused on social, cultural, educational, or charitable purposes. Our firm provides comprehensive advisory services for clients seeking to register a society or NGO, helping them understand the relevant legal framework under the Societies Registration Act, or respective state-specific laws.",
            "We assist with drafting the Memorandum of Association (MOA) and Rules & Regulations, preparing the necessary documents, and filing the registration forms with the appropriate authorities. In addition to the registration process, we provide guidance on governance, compliance, and operational best practices, ensuring that the organization functions effectively, receives tax exemptions, and meets its objectives efficiently.",
            "Our advisory services also include advising on fund-raising strategies, donor management, and compliance with sector-specific regulations.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
