import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Partnership registration | Solanki Singh & CO.",
  description: "Partnership registration is part of our Business Set up and Registration Advisory practice at Solanki Singh & CO.",
};

export default function PartnershipRegistrationPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Partnership registration"
          parentTitle="Business Set up and Registration Advisory"
          parentHref="/business-advisory/business-set-up-and-registration-advisory/"
          overview={[
            "A partnership involves two or more individuals or entities agreeing to operate a business together for mutual benefit. Partnership registration is the process of formalizing this arrangement under the law to ensure that the business operations are legally recognized and that partners' interests are protected.",
            "Our firm assists clients in choosing the right partnership model, whether it's a general partnership or a limited partnership, and guides them through the process of drafting a well-structured partnership agreement that outlines profit-sharing, responsibilities, and conflict resolution mechanisms. We ensure compliance with the registration process, helping clients file necessary documents with the Registrar of Firms and ensuring that all legal requirements are met.",
            "Additionally, we provide strategic advice to ensure that the partnership is structured for success, minimizing potential legal issues in the future.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
