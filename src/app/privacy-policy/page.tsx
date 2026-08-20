import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { LegalContent, type LegalSection } from "@/components/site/legal-content";
import { Footer } from "@/components/site/footer";
import { OFFICE_ADDRESS } from "@/components/site/contact-data";

export const metadata: Metadata = {
  title: "Privacy Policy | Solanki Singh & CO.",
  description:
    "How Solanki Singh & CO., Chartered Accountants, collects, uses, and protects information submitted through this website.",
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Introduction",
    paragraphs: [
      "Solanki Singh & CO. (“we”, “us”, “the firm”) is a Chartered Accountancy practice based in Noida, Delhi NCR, operating across Audit & Assurance, Income Tax Advisory, GST Law Advisory, Corporate Law Services, FEMA/RBI related Services, Loan & Debt Advisory, Start up Services, Business Advisory, and Accounting & Business Process.",
      "This Privacy Policy explains what information we collect through this website (solankisingh.co and its pages), why we collect it, and how it is used and protected. It applies only to information submitted through this website, and not to information shared with us separately under a client engagement, such as documents exchanged over email or our client portal, which are governed by the terms of your engagement letter.",
    ],
  },
  {
    heading: "Information We Collect",
    paragraphs: [
      "We collect information you choose to share with us directly through the forms on this website:",
    ],
    list: [
      "Contact form: your name, email address, phone number, the service you are enquiring about, and your message.",
      "Career applications: your first and last name, email address, mobile number, the role you are applying for, a short introduction, and your uploaded resume (PDF or Word document).",
      "Newsletter sign-up: your email address, used to send tax deadline reminders and firm updates.",
    ],
  },
  {
    heading: "How We Use Your Information",
    paragraphs: ["We use the information you submit only to:"],
    list: [
      "Respond to your enquiry and discuss the services you are interested in.",
      "Evaluate career applications and contact shortlisted candidates.",
      "Send newsletter updates to subscribers, who may unsubscribe at any time.",
      "Maintain internal records of enquiries for quality and follow-up purposes.",
    ],
  },
  {
    heading: "Sharing of Information",
    paragraphs: [
      "We do not sell, rent, or trade your personal information. Information you submit is accessible only to authorised members of our team and, where necessary, to service providers who help us operate this website (such as our hosting and email providers), under confidentiality obligations.",
      "We may disclose information where required by law, regulation, or a valid order from a court or government authority.",
    ],
  },
  {
    heading: "Data Retention",
    paragraphs: [
      "We retain enquiry and application information only for as long as needed to respond to you, consider your application, or comply with our own record-keeping and regulatory obligations, after which it is deleted or anonymised.",
    ],
  },
  {
    heading: "Data Security",
    paragraphs: [
      "We take reasonable technical and organisational measures to protect information submitted through this website from unauthorised access, alteration, or disclosure. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Cookies",
    paragraphs: [
      "This website may use essential cookies required for it to function correctly, and may use basic analytics to understand how visitors use the site. These do not identify you personally. You can control or disable cookies through your browser settings.",
    ],
  },
  {
    heading: "Your Choices",
    paragraphs: [
      "You may ask us to access, correct, or delete personal information you have submitted through this website by writing to us at the email address below. Newsletter subscribers can unsubscribe using the link in any email we send.",
    ],
  },
  {
    heading: "Children's Privacy",
    paragraphs: [
      "This website and our services are intended for businesses and individuals of legal contracting age. We do not knowingly collect information from children.",
    ],
  },
  {
    heading: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The “Effective” date at the top of this page indicates when it was last revised.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [
      `If you have questions about this Privacy Policy or how your information is handled, write to us at solankisinghco@gmail.com, call 0120-4484999, or reach us at our office: ${OFFICE_ADDRESS}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <LegalContent
          icon={ShieldCheck}
          badgeLabel="Legal"
          title="Privacy Policy"
          description="How we collect, use, and protect information submitted through this website."
          effectiveDate="August 20, 2026"
          sections={SECTIONS}
        />
      </main>
      <Footer />
    </>
  );
}
