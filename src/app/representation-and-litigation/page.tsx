import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Representation and Litigation | Solanki Singh & CO.",
  description: "Representation and Litigation is part of our Income Tax Advisory practice at Solanki Singh & CO.",
};

export default function RepresentationAndLitigationPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Representation and Litigation"
          parentTitle="Income Tax Advisory"
          parentHref="/income-tax-advisory/"
          overview={[
            "We provide representation and litigation services to support businesses in resolving tax disputes and managing interactions with tax authorities. Whether it's responding to inquiries, handling audits, or addressing disputes, we represent your interests at every stage of the process.",
            "Our team offers expert guidance to help you navigate complex legal and regulatory frameworks, ensuring compliance while protecting your rights. If litigation becomes necessary, we work to build a strong case, leveraging our in-depth knowledge of tax laws and regulations.",
            "Our objective is to help you achieve fair outcomes efficiently, minimizing disruptions to your business operations.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
