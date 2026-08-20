import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Setting up Joint Venture (JV) | Solanki Singh & CO.",
  description: "Setting up Joint Venture (JV) is part of our FEMA/RBI related Services practice at Solanki Singh & CO.",
};

export default function SettingUpJointVentureJvPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Setting up Joint Venture (JV)"
          parentTitle="FEMA/RBI related Services"
          parentHref="/fema-rbi-related-services/"
          overview={[
            "A Joint Venture (JV) involves a partnership between a foreign entity and an Indian business, enabling both parties to pool their resources to achieve a shared objective. The process of setting up a JV in India requires compliance with various FEMA and RBI regulations, as well as careful structuring of the business model to ensure compliance with Indian laws.",
            "Our firm provides expert guidance in setting up JVs, helping clients choose the most suitable legal structure, navigate the regulatory approval processes, and fulfill necessary reporting obligations. We assist in drafting the joint venture agreement, obtaining necessary RBI approvals, and ensuring that the investment structure aligns with both parties' objectives.",
            "Whether the foreign investor is contributing capital, technology, or expertise, our team ensures that the JV is structured effectively and remains fully compliant with both Indian and international regulations.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
