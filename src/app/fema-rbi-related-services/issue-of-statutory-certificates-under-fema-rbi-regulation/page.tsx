import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Issue of Statutory Certificates under FEMA & RBI regulation | Solanki Singh & CO.",
  description: "Issue of Statutory Certificates under FEMA & RBI regulation is part of our FEMA/RBI related Services practice at Solanki Singh & CO.",
};

export default function IssueOfStatutoryCertificatesUnderFemaRbiRegulationPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Issue of Statutory Certificates under FEMA & RBI regulation"
          parentTitle="FEMA/RBI related Services"
          parentHref="/fema-rbi-related-services/"
          overview={[
            "Certain transactions under FEMA and RBI regulations require the issuance of statutory certificates by a Chartered Accountant to confirm compliance with regulatory frameworks. These certifications are crucial for transactions such as foreign investments, repatriation, transfer of shares, and other cross-border activities.",
            "Our firm offers statutory certification services, providing the necessary documentation and verification required under FEMA and RBI guidelines. We ensure that these certificates are issued in accordance with the legal requirements and in a timely manner.",
            "Our services include preparing the necessary reports, reviewing financial statements, and ensuring that all the formalities are completed to facilitate compliance. With our assistance, businesses can confidently proceed with their foreign exchange-related transactions, assured that all regulatory requirements have been met.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
