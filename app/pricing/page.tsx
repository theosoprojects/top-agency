import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "TOP Agency scopes Starter Web Design, a Growth Retainer, and a Dedicated Remote Engineering Squad on a call. There is no public rate card.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Pricing"
          title="Three engagements. The fee follows the scope."
          lede="There is no public rate card. The $5,000 figure on this site is the average monthly salary saving cited per senior hire, not a price."
        />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
