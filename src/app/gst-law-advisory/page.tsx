import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { ServiceDetail } from "@/components/site/service-detail";
import { CtaBanner } from "@/components/site/cta-banner";
import { Footer } from "@/components/site/footer";
import { SERVICES } from "@/components/site/services-data";

const service = SERVICES[2];

export const metadata: Metadata = {
  title: `${service.title} | Solanki Singh & CO.`,
  description: service.description,
};

export default function GstLawAdvisoryPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <ServiceDetail service={service} />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
