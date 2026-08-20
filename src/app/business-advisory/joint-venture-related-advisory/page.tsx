import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Joint Venture related Advisory | Solanki Singh & CO.",
  description: "Joint Venture related Advisory is part of our Business Advisory practice at Solanki Singh & CO.",
};

export default function JointVentureRelatedAdvisoryPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Joint Venture related Advisory"
          parentTitle="Business Advisory"
          parentHref="/business-advisory/"
          overview={[
            "Joint ventures (JVs) involve collaboration between two or more entities to pursue shared business objectives. Setting up a joint venture requires careful planning and structuring to align the interests of all parties involved.",
            "Our firm provides comprehensive advisory services to businesses seeking to enter into a joint venture, helping them evaluate potential partners, negotiate terms, and draft joint venture agreements. We assist in determining the right structure for the JV (whether as an LLP, partnership, or limited company), ensuring that the legal and financial aspects of the agreement are clear and that all regulatory requirements are met.",
            "Our services also include guidance on the financial and operational aspects of the JV, providing insights into risk management, governance structures, and dispute resolution mechanisms. We work closely with clients to ensure that the joint venture is designed to foster mutual growth and minimize potential conflicts.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
