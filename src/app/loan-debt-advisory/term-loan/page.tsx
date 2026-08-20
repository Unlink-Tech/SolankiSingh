import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Term Loan | Solanki Singh & CO.",
  description: "Term Loan is part of our Loan & Debt Advisory practice at Solanki Singh & CO.",
};

export default function TermLoanPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Term Loan"
          parentTitle="Loan & Debt Advisory"
          parentHref="/loan-debt-advisory/"
          overview={[
            "A term loan is a traditional type of financing provided by financial institutions for a specified period, typically used for capital expenditures, expansion, or business development. It involves fixed repayment schedules over a set period.",
            "Our firm helps clients evaluate whether a term loan is the right financial solution for their needs, guiding them through the process of selecting the right loan amount, tenure, and interest rate. We provide assistance in preparing the required documentation and completing the application process, ensuring that businesses have a clear understanding of repayment terms.",
            "Our goal is to help clients secure a term loan that supports their business growth while maintaining manageable debt levels.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
