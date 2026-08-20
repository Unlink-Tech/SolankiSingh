import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Start up Registration & Advisory | Solanki Singh & CO.",
  description: "Start up Registration & Advisory is part of our Business Set up and Registration Advisory practice at Solanki Singh & CO.",
};

export default function StartUpRegistrationAdvisoryPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Start up Registration & Advisory"
          parentTitle="Business Set up and Registration Advisory"
          parentHref="/business-advisory/business-set-up-and-registration-advisory/"
          overview={[
            "Starting a new venture involves several critical steps, and having the right advisory services can be pivotal for success. Our firm provides expert guidance on the registration process for start-ups, helping entrepreneurs select the most appropriate legal structure for their business (such as LLP, Private Limited Company, etc.).",
            "We assist in preparing the necessary documents, filing registration forms with the Ministry of Corporate Affairs (MCA), and ensuring compliance with the relevant tax and legal regulations. Our advisory services go beyond registration; we also provide valuable insights into structuring the business to optimize funding, tax benefits, and operational efficiency.",
            "We help start-ups navigate complex challenges such as choosing the right investor models, business scalability, and legal compliance, ensuring they are well-positioned to grow and succeed.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
