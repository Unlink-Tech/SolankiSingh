import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Stats } from "@/components/site/stats";
import { About } from "@/components/site/about";
import { Services } from "@/components/site/services";
import { WhyUs } from "@/components/site/why-us";
import { Process } from "@/components/site/process";
import { Testimonials } from "@/components/site/testimonials";
import { CtaBanner } from "@/components/site/cta-banner";
import { Faq } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <Stats />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Testimonials />
        <CtaBanner />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
