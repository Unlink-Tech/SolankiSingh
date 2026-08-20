import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Home Loan | Solanki Singh & CO.",
  description: "Home Loan is part of our Loan & Debt Advisory practice at Solanki Singh & CO.",
};

export default function HomeLoanPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Home Loan"
          parentTitle="Loan & Debt Advisory"
          parentHref="/loan-debt-advisory/"
          overview={[
            "A home loan is a type of secured loan taken by individuals to purchase or construct residential property. The property itself serves as collateral for the loan.",
            "Our firm assists clients in evaluating their eligibility for a home loan, comparing interest rates, and choosing the right lender. We provide guidance on the various types of home loans available, such as fixed-rate, floating-rate, and hybrid loans, and help clients navigate the documentation and application process. Our aim is to ensure that clients secure the best possible home loan terms, facilitating a smooth and financially manageable home purchase while adhering to all necessary regulatory and compliance requirements.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
