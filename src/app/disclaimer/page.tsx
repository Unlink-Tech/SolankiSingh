import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { LegalContent, type LegalSection } from "@/components/site/legal-content";
import { Footer } from "@/components/site/footer";
import { OFFICE_ADDRESS } from "@/components/site/contact-data";

export const metadata: Metadata = {
  title: "Disclaimer | Solanki Singh & CO.",
  description:
    "This website is meant only to provide information about Solanki Singh & CO., in accordance with the regulations of the Institute of Chartered Accountants of India (ICAI).",
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Purpose of This Website",
    paragraphs: [
      "This website is meant solely to provide information about Solanki Singh & CO., a Chartered Accountancy firm, and the services we offer. It is not, and must not be construed as, an advertisement, solicitation, invitation, or inducement of any sort to engage our services.",
    ],
  },
  {
    heading: "In Compliance with ICAI Regulations",
    paragraphs: [
      "As per the rules of the Institute of Chartered Accountants of India (ICAI), Chartered Accountant firms in India are not permitted to solicit clients or professional work through advertisement, personal communication, or solicitation of any kind. This website has been designed only for the purpose of providing information about the firm to those who choose to visit it on their own initiative.",
      "By choosing to browse this website, you acknowledge that you are seeking information about Solanki Singh & CO. of your own accord, and that there has been no solicitation, invitation, or inducement of any sort from the firm or any of its members to create a professional relationship through this website.",
    ],
  },
  {
    heading: "No Professional Advice",
    paragraphs: [
      "The content on this website, including descriptions of our services and any commentary on tax, GST, audit, corporate law, FEMA/RBI, or advisory matters, is provided for general informational purposes only. It does not constitute professional advice and should not be relied upon or acted upon without first obtaining specific advice from us on the facts of your situation.",
    ],
  },
  {
    heading: "Accuracy and Currency of Information",
    paragraphs: [
      "We endeavour to keep the information on this website accurate and current. However, laws, rules, and rates referred to on this website (including under Income Tax, GST, Companies Act, and FEMA/RBI regulations) are subject to frequent change, and we do not guarantee that all content reflects the most recent legal position at the time you read it.",
    ],
  },
  {
    heading: "No Liability",
    paragraphs: [
      "Solanki Singh & CO. and its partners, employees, and representatives shall not be held liable for any loss, damage, or consequence arising from any action taken, or not taken, based on the content of this website, in the absence of a formal engagement with the firm.",
    ],
  },
  {
    heading: "External Links",
    paragraphs: [
      "This website may contain links to third-party or government websites (such as the Income Tax Department, GSTN, or MCA portals) provided for reference only. We do not endorse and are not responsible for the content, accuracy, or practices of those external websites.",
    ],
  },
  {
    heading: "Firm Credentials",
    paragraphs: [
      "Any information regarding the firm's history, years of practice, or areas of service on this website is provided as general background about Solanki Singh & CO. and does not constitute a representation, warranty, or guarantee of outcomes for any prospective or existing engagement.",
    ],
  },
  {
    heading: "Queries and Verification",
    paragraphs: [
      `If you have any questions about this Disclaimer, or wish to verify any information presented on this website, please contact us at solankisinghco@gmail.com or 0120-4484999. Our office is located at ${OFFICE_ADDRESS}.`,
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <LegalContent
          icon={AlertTriangle}
          badgeLabel="Legal"
          title="Disclaimer"
          description="This website provides information only, in accordance with ICAI regulations governing Chartered Accountant firms in India."
          effectiveDate="August 20, 2026"
          sections={SECTIONS}
        />
      </main>
      <Footer />
    </>
  );
}
