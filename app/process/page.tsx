import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Process from "@/components/Process";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How a TOP Agency engagement moves from the first call to a live sprint, with account management in Winnipeg.",
};

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Process"
          title="The same four steps, whether you need a build or a team."
          lede="An intro call sets the engagement. Shape locks the plan. Build ships in reviewable slices. Embed adds senior engineers from Lagos when you need capacity."
        />
        <Process />
      </main>
      <Footer />
    </>
  );
}
