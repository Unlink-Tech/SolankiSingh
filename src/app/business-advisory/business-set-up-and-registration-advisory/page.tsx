import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceDetail } from "@/components/site/sub-service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Business Set up and Registration Advisory | Solanki Singh & CO.",
  description: "Business Set up and Registration Advisory is part of our Business Advisory practice at Solanki Singh & CO.",
};

export default function BusinessSetUpAndRegistrationAdvisoryPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceDetail
          title="Business Set up and Registration Advisory"
          parentTitle="Business Advisory"
          parentHref="/business-advisory/"
          overview={[
            "Business setup and registration advisory helps entrepreneurs and organizations navigate the complex legal and regulatory landscape involved in starting a new business. Setting up a business requires a clear understanding of the available legal structures, whether it's a sole proprietorship, partnership, Limited Liability Partnership (LLP), or company.",
            "Our firm offers a thorough and systematic approach to the setup process, helping clients determine the best structure based on their business goals, ownership preferences, and tax considerations. From advising on the necessary documentation and registration procedures to assisting with obtaining the relevant licenses and permits, we ensure that businesses comply with all applicable laws and are set up for success.",
            "We provide step-by-step guidance throughout the process, addressing any challenges that may arise, and offering ongoing support to help businesses thrive from day one.",
          ]}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
