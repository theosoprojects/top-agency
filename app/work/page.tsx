import type { Metadata } from "next";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected TOP Agency work, including Camora, Elevate Co, Chef D, and Workmen.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Work"
          title="Platforms shipped for the business in front of them."
          lede="Camora, Elevate Co, and Chef D are live. Workmen is a service platform without a public URL, so that case opens a project conversation."
        />
        <CaseStudies />
      </main>
      <Footer />
    </>
  );
}
