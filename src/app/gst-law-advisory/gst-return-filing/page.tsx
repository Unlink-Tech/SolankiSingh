import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "GST Return Filing | Solanki Singh & CO.",
  description: "GST Return Filing is part of our GST Law Advisory practice at Solanki Singh & CO.",
};

export default function GstReturnFilingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="GST Return Filing"
          parentTitle="GST Law Advisory"
          parentHref="/gst-law-advisory/"
          overview={[
            "GST Return Filing is the process of submitting periodic returns to the tax authorities, detailing the business's sales, purchases, tax liabilities, and input tax credits. These returns must be filed on a regular basis (monthly, quarterly, or annually) to ensure compliance with GST laws and avoid penalties.",
            "Our GST return filing service ensures timely and accurate submission of all required GST returns, including monthly, quarterly, or annual filings. We manage the preparation of GST returns, ensuring that all the necessary details are correctly reported.",
            "Our service also includes a thorough review to minimize the risk of errors or omissions that could result in penalties. We help you meet all deadlines, keeping your business in full compliance with GST requirements.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
