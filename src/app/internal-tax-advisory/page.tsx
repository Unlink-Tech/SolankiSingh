import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Internal Tax Advisory | Solanki Singh & CO.",
  description: "Internal Tax Advisory is part of our Income Tax Advisory practice at Solanki Singh & CO.",
};

export default function InternalTaxAdvisoryPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Internal Tax Advisory"
          parentTitle="Income Tax Advisory"
          parentHref="/income-tax-advisory/"
          overview={[
            "We offer internal tax advisory services to help businesses navigate complex tax landscapes and make informed financial decisions. Our approach goes beyond basic compliance, providing strategic advice tailored to your organization's unique needs.",
            "We analyze your financial operations to identify tax-saving opportunities and ensure your tax strategy aligns with current laws and regulations. Whether you're planning a merger, acquisition, or expanding internationally, we provide guidance on the tax implications to help you structure transactions efficiently.",
            "Our goal is to help you minimize tax liabilities, optimize cash flow, and align your tax strategy with your broader business objectives.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
