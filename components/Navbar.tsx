"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Mark from "@/components/Mark";
import { useSite } from "@/components/SiteProvider";

const links = [
  { href: "/about", label: "About", note: "Leadership and the studio" },
  { href: "/services", label: "Services", note: "Web, mobile, software, talent" },
  { href: "/process", label: "Process", note: "From the first call to a sprint" },
  { href: "/work", label: "Work", note: "Camora, Elevate, Chef D, Workmen" },
  { href: "/talent", label: "Global Talent", note: "Winnipeg and Lagos" },
  { href: "/pricing", label: "Pricing", note: "Scoped on a call" },
  { href: "/faq", label: "FAQ", note: "Timelines, stack, and fees" },
];

export default function Navbar() {
  const { openConsult } = useSite();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function close() {
    setOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-30 border-b backdrop-blur-md transition-colors ${
        scrolled || open
          ? "border-black/10 bg-white/90 shadow-[0_10px_40px_rgba(9,10,15,0.06)]"
          : "border-black/5 bg-[#FAFAFA]/75"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1160px] items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={close}>
          <Mark />
          <span className="leading-tight">
            <span className="block text-[15px] font-extrabold tracking-tight">TOP Agency</span>
            <span className="hidden text-[11px] font-medium text-[#5c6570] sm:block">The Oso Project</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`text-[13px] font-semibold hover:text-[#090A0F] ${
                pathname === link.href ? "text-[#2563EB]" : "text-[#3d4654]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <p className="hidden items-center gap-2 rounded-full border border-emerald-600/15 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-[#065f46] lg:inline-flex">
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
        <nav className="border-t border-black/5 bg-white px-5 py-4 xl:hidden" aria-label="Mobile">
          <div className="mx-auto grid max-w-[1160px] gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`rounded-2xl px-3 py-3 hover:bg-[#FAFAFA] ${
                  pathname === link.href ? "bg-[#f4f6fb]" : ""
                }`}
              >
                <span className="block text-sm font-semibold">{link.label}</span>
                <span className="block text-xs text-[#5c6570]">{link.note}</span>
              </Link>
            ))}
            <p className="px-3 pt-3 text-xs font-semibold text-[#065f46]">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Available for new projects
            </p>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
