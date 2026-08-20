import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Corporate Governance | Solanki Singh & CO.",
  description: "Corporate Governance is part of our Corporate Law Services practice at Solanki Singh & CO.",
};

export default function CorporateGovernancePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Corporate Governance"
          parentTitle="Corporate Law Services"
          parentHref="/corporate-law-services/"
          overview={[
            "Corporate governance encompasses the frameworks, systems, and processes that determine how a company is directed and controlled, with an emphasis on accountability, fairness, and transparency. It is essential for building trust with stakeholders, including investors, employees, and regulatory bodies.",
            "We offer comprehensive corporate governance services that help businesses establish effective governance structures. We advise on best practices for board composition, management oversight, and the implementation of internal controls to ensure compliance with legal requirements.",
            "Our team works closely with your organization to develop governance policies that enhance decision-making, mitigate risks, and ensure long-term sustainability. We also assist with establishing corporate social responsibility (CSR) frameworks and aligning governance practices with international standards, helping you build a business that is both compliant and ethical.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
