import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { ContactHero } from "@/components/site/contact-hero";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Contact Us | Solanki Singh & CO.",
  description:
    "Get in touch with Solanki Singh & CO., Chartered Accountants. Call, email, or send us a message and we'll respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <ContactHero />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
