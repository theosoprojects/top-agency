"use client";

import Link from "next/link";
import Mark from "@/components/Mark";
import { useSite } from "@/components/SiteProvider";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/process", label: "Process" },
      { href: "/faq", label: "FAQ" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/cookies", label: "Cookie Policy" },
    ],
  },
  {
    title: "Practice",
    links: [
      { href: "/services", label: "Services" },
      { href: "/work", label: "Work" },
      { href: "/talent", label: "Global Talent" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
];

export default function Footer() {
  const { openConsult } = useSite();

  return (
    <footer className="bg-[#090A0F] text-white">
      <div className="site-shell py-20 md:py-28">
        <p className="text-xs font-semibold tracking-[0.18em] text-[#93c5fd] uppercase">Next step</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
          Ready to accelerate your digital roadmap? Let&apos;s build together.
        </h2>
        <button
          type="button"
          onClick={() => openConsult()}
          className="mt-8 inline-flex h-12 items-center rounded-full bg-[#2563EB] px-6 text-sm font-semibold text-white shadow-[0_0_32px_rgba(37,99,235,0.35)] hover:bg-[#1d4ed8]"
        >
          Let&apos;s Talk
        </button>
      </div>
      <div className="border-t border-white/10">
        <div className="site-shell grid gap-10 py-12 md:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-semibold tracking-[0.16em] text-white/45 uppercase">{column.title}</p>
              <ul className="mt-4 grid gap-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/75 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-white/45 uppercase">Locations</p>
            <p className="mt-4 text-sm font-semibold">Winnipeg</p>
            <p className="mt-1 text-sm text-white/65">Strategy, accounts, and product architecture.</p>
            <p className="mt-4 text-sm font-semibold">Lagos</p>
            <p className="mt-1 text-sm text-white/65">Senior full-stack, frontend, backend, and mobile.</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-white/45 uppercase">Contact</p>
            <a href="mailto:business@theosoprojects.online" className="mt-4 block text-sm text-white/75 hover:text-white">
              business@theosoprojects.online
            </a>
            <a href="tel:+12048875918" className="mt-2 block text-sm text-white/75 hover:text-white">
              +1 204 887 5918
            </a>
            <p className="mt-4 text-xs leading-relaxed text-white/45">
              Let’s Talk opens your email app. The note is not stored on this site.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="site-shell flex flex-col gap-4 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex items-center gap-2 text-white">
            <Mark light />
            <span className="font-extrabold tracking-tight">TOP Agency</span>
          </Link>
          <p>© 2026 TOP Agency / The Oso Project. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
