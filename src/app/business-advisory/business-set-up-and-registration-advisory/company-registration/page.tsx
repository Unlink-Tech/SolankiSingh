import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Company Registration | Solanki Singh & CO.",
  description: "Company Registration is part of our Business Set up and Registration Advisory practice at Solanki Singh & CO.",
};

export default function CompanyRegistrationPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Company Registration"
          parentTitle="Business Set up and Registration Advisory"
          parentHref="/business-advisory/business-set-up-and-registration-advisory/"
          overview={[
            "Company registration is a critical first step for businesses looking to establish a formal legal entity in India. Whether you're setting up a Private Limited Company, a Public Limited Company, or a One Person Company, our firm offers full advisory services to ensure that the registration process is smooth and compliant.",
            "We help clients determine the most appropriate business structure based on their specific needs, whether it's for raising capital, limiting liability, or facilitating business growth. Our services include advising on the drafting of the Memorandum of Association (MOA) and Articles of Association (AOA), obtaining the necessary approvals, filing incorporation documents with the Ministry of Corporate Affairs (MCA), and ensuring compliance with tax regulations.",
            "We also assist with obtaining PAN, TAN, and GST registration, if applicable. Our expertise helps clients navigate the entire registration process, ensuring that their company is set up correctly and adheres to all regulatory requirements.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
