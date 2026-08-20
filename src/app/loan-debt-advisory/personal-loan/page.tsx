import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Personal Loan | Solanki Singh & CO.",
  description: "Personal Loan is part of our Loan & Debt Advisory practice at Solanki Singh & CO.",
};

export default function PersonalLoanPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Personal Loan"
          parentTitle="Loan & Debt Advisory"
          parentHref="/loan-debt-advisory/"
          overview={[
            "A personal loan is an unsecured loan provided to individuals based on their creditworthiness and repayment capacity. It can be used for various purposes, including personal expenses, medical emergencies, education, or home renovations.",
            "Our firm assists clients in evaluating their eligibility for personal loans and identifying the best loan offers available in the market. We provide guidance on loan terms, interest rates, and repayment schedules, helping clients select the most appropriate loan option for their needs. Additionally, we assist with the application process, ensuring that all required documentation is in place and that the loan is processed smoothly and efficiently.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
