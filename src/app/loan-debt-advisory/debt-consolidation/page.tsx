import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Debt Consolidation | Solanki Singh & CO.",
  description: "Debt Consolidation is part of our Loan & Debt Advisory practice at Solanki Singh & CO.",
};

export default function DebtConsolidationPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Debt Consolidation"
          parentTitle="Loan & Debt Advisory"
          parentHref="/loan-debt-advisory/"
          overview={[
            "Debt consolidation involves combining multiple debts into a single loan to simplify repayment and potentially lower interest rates. This service is ideal for individuals or businesses struggling to manage several loans or credit lines.",
            "Our firm provides debt consolidation advisory by helping clients assess their current debt situation and determine whether consolidating their loans would be beneficial. We offer guidance on how to structure the consolidation process, compare loan terms, and choose the right financial institution. Our services aim to streamline repayment, reduce financial strain, and improve clients' financial management by consolidating debts into one manageable payment plan.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
