import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Letter of Credit | Solanki Singh & CO.",
  description: "Letter of Credit is part of our Loan & Debt Advisory practice at Solanki Singh & CO.",
};

export default function LetterOfCreditPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Letter of Credit"
          parentTitle="Loan & Debt Advisory"
          parentHref="/loan-debt-advisory/"
          overview={[
            "A letter of credit (LC) is a financial tool used in international trade to guarantee payment for goods or services. It ensures that the seller will receive payment from the buyer's bank, provided the seller meets specific terms and conditions.",
            "Our firm provides advisory services to businesses involved in international trade, helping them understand the different types of letters of credit, their terms, and how to use them effectively in cross-border transactions. We guide clients through the process of applying for an LC, ensure compliance with the terms, and help manage the documentation required to secure the letter of credit, ensuring that both the buyer and seller are protected throughout the transaction.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
