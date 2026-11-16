import type { Metadata } from "next";
import Footer from "@/components/Footer";
import GlobalHubs from "@/components/GlobalHubs";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Global Talent",
  description:
    "TOP Agency places pre-vetted senior engineers from Lagos, with account management in Winnipeg and US/Canada hour overlap.",
};

export default function TalentPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Global Talent"
          title="Senior engineers, placed into your sprint."
          lede="Strategy and account management run from Winnipeg. Senior full-stack, frontend, backend, and mobile engineers work from Lagos, overlapping US and Canadian hours. Typical placement is 48–72 hours."
        />
        <GlobalHubs />
      </main>
      <Footer />
    </>
  );
}
