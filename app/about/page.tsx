import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Team from "@/components/Team";

export const metadata: Metadata = {
  title: "About",
  description:
    "TOP Agency is led from Winnipeg, with senior engineering delivered from Lagos. Rilwan Badru is Managing Director.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="About"
          title="A technology partner with a named managing director."
          lede="TOP Agency, part of The Oso Project, builds high-performance web infrastructure and places pre-vetted senior engineers. The account line sits in Winnipeg. The engineering network sits in Lagos."
        />
        <Team />
      </main>
      <Footer />
    </>
  );
}
