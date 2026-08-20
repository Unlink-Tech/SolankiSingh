import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Corporate Law Advisory | Solanki Singh & CO.",
  description: "Corporate Law Advisory is part of our Corporate Law Services practice at Solanki Singh & CO.",
};

export default function CorporateLawAdvisoryPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Corporate Law Advisory"
          parentTitle="Corporate Law Services"
          parentHref="/corporate-law-services/"
          overview={[
            "Corporate Law Advisory involves providing expert legal advice on a broad spectrum of issues related to business operations and governance. This can include guidance on mergers and acquisitions, corporate structuring, contracts, intellectual property, and ensuring compliance with applicable laws.",
            "We offer personalized corporate law advisory services that are tailored to the unique needs of your business. We work closely with your management team to identify potential legal risks and opportunities, advising on how to structure transactions, protect intellectual property, and optimize operational efficiency while ensuring compliance with all relevant corporate laws.",
            "Whether you are navigating a complex legal issue or making strategic business decisions, we provide you with the necessary insights to protect your interests and make informed choices.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
