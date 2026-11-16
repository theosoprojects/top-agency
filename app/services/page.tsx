import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design, mobile apps, custom software, and pre-vetted senior remote engineers from TOP Agency.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Services"
          title="Four practices. One account team."
          lede="Web, mobile, and custom software are project engagements. Global talent places senior engineers into a sprint you already run, typically within 48–72 hours."
        />
        <Services />
      </main>
      <Footer />
    </>
  );
}
