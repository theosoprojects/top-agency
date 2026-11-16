import BentoMetrics from "@/components/BentoMetrics";
import CaseStudies from "@/components/CaseStudies";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import GlobalHubs from "@/components/GlobalHubs";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Team from "@/components/Team";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <BentoMetrics />
        <Services />
        <Process />
        <CaseStudies />
        <GlobalHubs />
        <Team />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
