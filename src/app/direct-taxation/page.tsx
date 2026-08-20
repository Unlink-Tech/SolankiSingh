import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceIndex } from "@/components/site/sub-service-index";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Direct Taxation | Solanki Singh & CO.",
  description:
    "Transfer pricing and direct taxation services are part of our Income Tax Advisory practice at Solanki Singh & CO.",
};

const ITEMS = [
  { label: "Transfer Pricing", href: "/direct-taxation/transfer-pricing/" },
];

export default function DirectTaxationPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceIndex
          title="Direct Taxation"
          parentTitle="Income Tax Advisory"
          parentHref="/income-tax-advisory/"
          items={ITEMS}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
