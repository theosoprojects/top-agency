"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Mark from "@/components/Mark";
import { useSite } from "@/components/SiteProvider";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#talent", label: "Global Talent" },
  { href: "/#works", label: "Works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const { openConsult } = useSite();
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-[#FAFAFA]/80 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1160px] items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/#top" className="flex items-center gap-2.5" onClick={close}>
          <Mark />
          <span className="text-[15px] font-extrabold tracking-tight">TOP Agency</span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#3d4654] hover:text-[#090A0F]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <p className="hidden items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs font-semibold text-[#0D1117] lg:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 motion-safe:animate-pulse" />
            Available for new projects
          </p>
          <button
            type="button"
            onClick={() => openConsult()}
            className="inline-flex h-10 items-center rounded-full bg-[#090A0F] px-4 text-sm font-semibold text-white hover:bg-[#2563EB]"
          >
            Let&apos;s Talk
          </button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-black/10 xl:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-black/5 bg-[#FAFAFA] px-5 py-4 xl:hidden" aria-label="Mobile">
          <div className="mx-auto grid max-w-[1160px] gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-2xl px-3 py-3 text-sm font-semibold hover:bg-white"
              >
                {link.label}
              </Link>
            ))}
            <p className="px-3 pt-2 text-xs font-semibold text-[#3d4654]">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Available for new projects
            </p>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
