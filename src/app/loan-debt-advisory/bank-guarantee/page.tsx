import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Bank Guarantee | Solanki Singh & CO.",
  description: "Bank Guarantee is part of our Loan & Debt Advisory practice at Solanki Singh & CO.",
};

export default function BankGuaranteePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Bank Guarantee"
          parentTitle="Loan & Debt Advisory"
          parentHref="/loan-debt-advisory/"
          overview={[
            "A bank guarantee is a financial instrument issued by a bank to assure a third party that a borrower will meet their contractual obligations. If the borrower fails to meet these obligations, the bank steps in to pay the third party.",
            "Our firm helps businesses and individuals understand the various types of bank guarantees and their uses in different business transactions. We assist in evaluating the need for a guarantee, the terms involved, and the documentation required to obtain one. Our services help businesses secure bank guarantees for various purposes, such as performance guarantees, advance payment guarantees, and financial guarantees, ensuring they meet the requirements for smooth business operations.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
