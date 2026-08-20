import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Working Capital Term Loan | Solanki Singh & CO.",
  description: "Working Capital Term Loan is part of our Loan & Debt Advisory practice at Solanki Singh & CO.",
};

export default function WorkingCapitalTermLoanPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Working Capital Term Loan"
          parentTitle="Loan & Debt Advisory"
          parentHref="/loan-debt-advisory/"
          overview={[
            "A working capital term loan is a type of financing designed to meet a company's short-term operational needs, such as purchasing inventory, paying salaries, or covering other immediate expenses. Unlike traditional term loans, these loans are typically smaller in value and have shorter repayment terms.",
            "Our firm provides advisory services to businesses in determining the suitability of a working capital term loan for their cash flow needs. We help clients assess their financial position, identify potential lenders, and navigate the application process. We also provide assistance in structuring the loan terms and ensuring compliance with regulatory requirements, helping businesses maintain smooth operations and meet their working capital needs.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
