import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Domestic Tax Advisory | Solanki Singh & CO.",
  description: "Domestic Tax Advisory is part of our Income Tax Advisory practice at Solanki Singh & CO.",
};

export default function DomesticTaxAdvisoryPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Domestic Tax Advisory"
          parentTitle="Income Tax Advisory"
          parentHref="/income-tax-advisory/"
          overview={[
            "We provide comprehensive domestic tax advisory services to help businesses effectively manage their local tax obligations and optimize their tax position. Our expertise covers a broad spectrum of domestic tax areas, including income tax, corporate tax, and indirect taxes such as GST or VAT.",
            "We offer tailored advice on tax planning, compliance, and risk management, ensuring your business stays compliant while taking full advantage of available tax benefits.",
            "Whether you're streamlining tax processes, navigating audits, or planning for organizational changes, our practical solutions are designed to support your business objectives and enhance tax efficiency.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
