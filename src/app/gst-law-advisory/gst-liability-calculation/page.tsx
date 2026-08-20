import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "GST Liability Calculation | Solanki Singh & CO.",
  description: "GST Liability Calculation is part of our GST Law Advisory practice at Solanki Singh & CO.",
};

export default function GstLiabilityCalculationPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="GST Liability Calculation"
          parentTitle="GST Law Advisory"
          parentHref="/gst-law-advisory/"
          overview={[
            "GST Liability Calculation is the process of determining the amount of GST a business owes to the government based on its sales and purchases. It involves calculating the tax payable on outputs (sales) and the input tax credit available on inputs (purchases), ensuring accurate reporting and timely payment of GST dues.",
            "We offer precise GST liability calculation services to ensure that your business correctly determines its GST obligations. By reviewing your transactions, input tax credits, and applicable rates, we calculate the correct GST liability for your business, helping to avoid underpayment or overpayment.",
            "Our detailed calculations ensure that your liabilities are fully compliant with tax laws and that you are not exposed to penalties or interest due to errors.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
