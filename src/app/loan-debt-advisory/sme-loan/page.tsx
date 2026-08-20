import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "SME Loan | Solanki Singh & CO.",
  description: "SME Loan is part of our Loan & Debt Advisory practice at Solanki Singh & CO.",
};

export default function SmeLoanPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="SME Loan"
          parentTitle="Loan & Debt Advisory"
          parentHref="/loan-debt-advisory/"
          overview={[
            "An SME loan is designed to help small and medium enterprises (SMEs) access financing to fund business operations, expansion, or capital investments. These loans are crucial for businesses looking to grow but are unable to meet traditional financing criteria.",
            "Our firm offers comprehensive advisory services to SMEs, helping them understand the various loan products available, assess eligibility, and identify the most suitable financing options. We guide businesses through the application process, ensuring that they meet the necessary requirements and prepare the necessary documentation. Our expertise helps SMEs secure favorable loan terms while ensuring compliance with financial regulations.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
