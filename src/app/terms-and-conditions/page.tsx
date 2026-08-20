import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { LegalContent, type LegalSection } from "@/components/site/legal-content";
import { Footer } from "@/components/site/footer";
import { OFFICE_ADDRESS } from "@/components/site/contact-data";

export const metadata: Metadata = {
  title: "Terms & Conditions | Solanki Singh & CO.",
  description:
    "The terms that govern your use of the Solanki Singh & CO. website, and how our client engagements are separately governed by signed engagement letters.",
};

const SECTIONS: LegalSection[] = [
  {
    heading: "About Us",
    paragraphs: [
      "Solanki Singh & CO. is a Chartered Accountancy firm established in 1988, with over 38 years of continuous practice across Audit & Assurance, Income Tax Advisory, GST Law Advisory, Corporate Law Services, FEMA/RBI related Services, Loan & Debt Advisory, Start up Services, Business Advisory, and Accounting & Business Process, headquartered in Noida, Delhi NCR.",
    ],
  },
  {
    heading: "Acceptance of These Terms",
    paragraphs: [
      "By accessing or using this website, you agree to these Terms & Conditions. If you do not agree, please discontinue use of the website.",
    ],
  },
  {
    heading: "Website Use is Informational Only",
    paragraphs: [
      "The content on this website — including service descriptions, articles, and any figures or examples — is provided for general information only. It is not, and should not be treated as, professional tax, audit, legal, or financial advice for your specific circumstances. Regulations referenced on this website change frequently; always confirm current requirements with us directly before acting.",
    ],
  },
  {
    heading: "No Engagement Created by Website Use",
    paragraphs: [
      "Browsing this website, submitting the contact form, or subscribing to our newsletter does not create a client relationship or professional engagement with Solanki Singh & CO. A formal engagement begins only once we have agreed on scope and fees and issued a signed engagement letter, in accordance with the Code of Ethics of the Institute of Chartered Accountants of India (ICAI).",
    ],
  },
  {
    heading: "Intellectual Property",
    paragraphs: [
      "The text, layout, graphics, and firm name/logo on this website are the property of Solanki Singh & CO. unless otherwise credited. You may view and share pages of this website for personal, non-commercial reference, but may not reproduce, republish, or use our content or branding commercially without our written permission.",
    ],
  },
  {
    heading: "Accuracy of Information",
    paragraphs: [
      "We take care to keep this website accurate and up to date, but we do not warrant that all content is complete, current, or error-free. We are not liable for decisions made solely on the basis of website content without seeking direct advice from us.",
    ],
  },
  {
    heading: "Limitation of Liability",
    paragraphs: [
      "To the extent permitted by law, Solanki Singh & CO. shall not be liable for any loss or damage arising from your use of, or inability to use, this website, or from any reliance placed on its content in the absence of a formal engagement with us.",
    ],
  },
  {
    heading: "Links to Other Websites",
    paragraphs: [
      "This website may link to third-party websites (such as government portals like the Income Tax Department or GSTN) for your convenience. We do not control and are not responsible for the content or practices of those external sites.",
    ],
  },
  {
    heading: "Career Applications",
    paragraphs: [
      "By submitting an application through our Careers page, including your resume, you confirm that the information provided is accurate and that you consent to us reviewing it for recruitment purposes and contacting you about it.",
    ],
  },
  {
    heading: "Governing Law & Jurisdiction",
    paragraphs: [
      `These Terms are governed by the laws of India. Any dispute arising out of your use of this website shall be subject to the exclusive jurisdiction of the courts at Noida / Gautam Buddha Nagar, Uttar Pradesh.`,
    ],
  },
  {
    heading: "Changes to These Terms",
    paragraphs: [
      "We may revise these Terms from time to time. The “Effective” date at the top of this page indicates when it was last updated. Continued use of the website after changes are posted constitutes acceptance of the revised Terms.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [
      `Questions about these Terms can be sent to solankisinghco@gmail.com, or by phone at 0120-4484999. Our office is located at ${OFFICE_ADDRESS}.`,
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <LegalContent
          icon={FileText}
          badgeLabel="Legal"
          title="Terms & Conditions"
          description="The terms that govern your use of this website. Client engagements are governed separately by a signed engagement letter."
          effectiveDate="August 20, 2026"
          sections={SECTIONS}
        />
      </main>
      <Footer />
    </>
  );
}
