import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Cash Credit Limit | Solanki Singh & CO.",
  description: "Cash Credit Limit is part of our Loan & Debt Advisory practice at Solanki Singh & CO.",
};

export default function CashCreditLimitPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Cash Credit Limit"
          parentTitle="Loan & Debt Advisory"
          parentHref="/loan-debt-advisory/"
          overview={[
            "A cash credit limit is a short-term financing option that allows businesses to borrow funds against their working capital requirements, such as inventory and receivables. It provides businesses with the flexibility to access funds as needed for day-to-day operations.",
            "Our firm offers advisory services on securing a cash credit limit, helping businesses determine their eligibility and choose the right financial institution. We guide clients through the process of applying for cash credit, preparing necessary documentation, and managing the credit facility effectively. By helping businesses manage their working capital needs efficiently, we ensure they can maintain liquidity and operational continuity.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
