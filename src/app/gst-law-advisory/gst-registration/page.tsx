import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "GST Registration | Solanki Singh & CO.",
  description: "GST Registration is part of our GST Law Advisory practice at Solanki Singh & CO.",
};

export default function GstRegistrationPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="GST Registration"
          parentTitle="GST Law Advisory"
          parentHref="/gst-law-advisory/"
          overview={[
            "GST Registration is the process through which a business is recognized under the Goods and Services Tax (GST) system. It is mandatory for businesses whose turnover exceeds the prescribed threshold limit or for those involved in specific types of transactions. Registration enables businesses to collect GST on sales, claim input tax credits, and comply with tax reporting requirements.",
            "Our GST Registration service helps businesses understand the requirements for registration under GST and ensures that the process is completed accurately and on time. Whether you're a new business or need to update your registration details, we guide you through the registration procedure, ensuring compliance with the latest regulations.",
            "We also assist in determining the appropriate registration type for your business, whether as a regular taxpayer, composition scheme, or other categories.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
