import type { Metadata } from "next";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers on TOP Agency timelines, senior developer placement, technology, and how pricing is set.",
};

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="FAQ"
          title="Timelines, talent, stack, and fees."
          lede="A short set of answers. If yours is not here, write to business@theosoprojects.online or use Let’s Talk. The note opens in your email app and is not stored on this site."
        />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
