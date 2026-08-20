import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Mortgage Loan | Solanki Singh & CO.",
  description: "Mortgage Loan is part of our Loan & Debt Advisory practice at Solanki Singh & CO.",
};

export default function MortgageLoanPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Mortgage Loan"
          parentTitle="Loan & Debt Advisory"
          parentHref="/loan-debt-advisory/"
          overview={[
            "A mortgage loan is a type of secured loan where property is used as collateral to borrow funds. This is typically used for purchasing, refinancing, or improving real estate.",
            "Our firm provides advisory services to individuals and businesses seeking mortgage loans, helping them navigate the complexities of mortgage options, interest rates, and repayment terms. We assist clients in understanding the implications of mortgage terms, preparing the necessary documentation, and ensuring that the loan application is strong. Whether it's a residential or commercial property, we ensure our clients are well-informed about their financing options and are equipped to make the right decisions.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
