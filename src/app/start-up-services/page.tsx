import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";
import { SERVICES } from "@/components/site/services-data";

const service = SERVICES[6];

export const metadata: Metadata = {
  title: `${service.title} | Solanki Singh & CO.`,
  description: service.description,
};

export default function StartUpServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title={service.title}
          parentTitle="Our Services"
          parentHref="/#services"
          description="One of our core service verticals at Solanki Singh & CO."
          image={service.image}
          overview={[
            "Starting a business involves navigating various challenges, from validating a business idea to ensuring legal compliance. Our start-up services provide comprehensive support throughout this journey. We assist with business idea validation, helping entrepreneurs assess market demand and financial viability.",
            "Our financial planning and forecasting services equip start-ups with detailed budgets and cash flow projections, ensuring efficient resource management. For those seeking funding, we offer fundraising support, including creating compelling investor pitches and identifying suitable funding sources. We also handle start-up registration and compliance, guiding clients through the legal process of establishing their business structure and obtaining necessary registrations like GST and PAN.",
            "Additionally, our tax advisory services help optimize tax liabilities by leveraging available deductions and exemptions, while our accounting and bookkeeping ensure accurate financial records. As start-ups scale, we provide growth advisory to identify expansion opportunities and optimize operations.",
            "For those planning an exit, we offer exit strategy and valuation services to maximize returns and negotiate favorable terms. Our holistic approach ensures that start-ups are well-positioned for long-term success.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
