import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="site-shell py-16 md:py-24">
        <div className="max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-[#2563EB] uppercase">Legal</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <div className="mt-6 grid gap-4 text-sm leading-relaxed text-slate-600">
          <p>
            TOP Agency / The Oso Project publishes this website at
            theosoprojects.online. Consultation and roadmap notes are opened in
            your email app and addressed to business@theosoprojects.online. This
            site does not store those notes.
          </p>
          <p>
            A single browser preference records whether you dismissed the cookie
            notice. The site does not run analytics cookies and does not sell
            personal information.
          </p>
          <p>
            To ask about information you have emailed us, write to
            business@theosoprojects.online or call +1 204 887 5918.
          </p>
          <p>
            <Link href="/cookies" className="font-semibold text-[#2563EB]">
              Read the cookie policy
            </Link>
          </p>
        </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
