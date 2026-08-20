import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { CareerHero } from "@/components/site/career-hero";
import { CareerContent } from "@/components/site/career-content";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Career | Solanki Singh & CO.",
  description:
    "For career opportunities at Solanki Singh & CO., mail your resume to solankisinghco@gmail.com.",
};

export default function CareerPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <CareerHero />
        <CareerContent />
      </main>
      <Footer />
    </>
  );
}
