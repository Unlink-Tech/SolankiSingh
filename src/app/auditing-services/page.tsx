import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { SubServiceIndex } from "@/components/site/sub-service-index";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Auditing Services | Solanki Singh & CO.",
  description:
    "Statutory, tax, and internal audit services are part of our Audit & Assurance practice at Solanki Singh & CO.",
};

const ITEMS = [
  { label: "Statutory Audit", href: "/auditing-services/statutory-audit/" },
  { label: "Tax Audit", href: "/auditing-services/tax-audit/" },
  { label: "Internal Audit", href: "/auditing-services/internal-audit/" },
];

export default function AuditingServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <SubServiceIndex
          title="Auditing Services"
          parentTitle="Audit & Assurance"
          parentHref="/audit-assurancev/"
          items={ITEMS}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
