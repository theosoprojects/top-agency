import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Cookie Policy",
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16 md:px-8">
        <p className="text-xs font-semibold tracking-[0.18em] text-[#2563EB] uppercase">Legal</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">Cookie Policy</h1>
        <div className="mt-6 grid gap-4 text-sm leading-relaxed text-slate-600">
          <p>
            This site stores one item in local storage, named top-cookie-consent,
            when you accept or dismiss the notice at the bottom of the page. It
            remembers that choice so the notice does not return on this browser.
          </p>
          <p>
            TOP Agency does not set analytics, advertising, or third-party
            tracking cookies from this website. Clearing site data for
            theosoprojects.online removes the preference.
          </p>
          <p>
            <Link href="/privacy" className="font-semibold text-[#2563EB]">
              Read the privacy policy
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
