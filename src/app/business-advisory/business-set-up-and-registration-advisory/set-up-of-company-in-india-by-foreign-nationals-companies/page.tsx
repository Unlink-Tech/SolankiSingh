import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Set up of Company in India by Foreign Nationals/ Companies | Solanki Singh & CO.",
  description: "Set up of Company in India by Foreign Nationals/ Companies is part of our Business Set up and Registration Advisory practice at Solanki Singh & CO.",
};

export default function SetUpOfCompanyInIndiaByForeignNationalsCompaniesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Set up of Company in India by Foreign Nationals/ Companies"
          parentTitle="Business Set up and Registration Advisory"
          parentHref="/business-advisory/business-set-up-and-registration-advisory/"
          overview={[
            "Setting up a company in India by foreign nationals or foreign companies involves compliance with complex regulations governed by the Foreign Exchange Management Act (FEMA), Reserve Bank of India (RBI), and the Companies Act. Our firm specializes in helping foreign clients establish their business operations in India, whether it's through a wholly owned subsidiary, a joint venture, or a liaison office.",
            "We provide guidance on the regulatory approvals required for foreign investments, advising on the most suitable business structure based on the client's objectives and the nature of the business. Our services include filing incorporation documents, obtaining necessary approvals from the RBI and the Foreign Investment Promotion Board (FIPB), and ensuring compliance with tax laws and reporting requirements.",
            "We offer end-to-end assistance to foreign investors, ensuring their businesses are established smoothly and in full compliance with Indian regulations.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
