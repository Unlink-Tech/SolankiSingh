import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { PageHero } from "@/components/site/page-hero";
import { Faq } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "FAQ | Solanki Singh & CO.",
  description:
    "Answers to the questions we hear most from clients of Solanki Singh & CO., Chartered Accountants — onboarding, pricing, security, and more.",
};

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero
          icon={<HelpCircle className="size-3.5 text-surface-strong" aria-hidden="true" />}
          badgeLabel="FAQ"
          heading="Frequently Asked Questions"
          description="Answers to what clients ask us most, before and after they sign on."
        />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
