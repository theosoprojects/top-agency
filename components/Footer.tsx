"use client";

import Link from "next/link";
import Mark from "@/components/Mark";
import { useSite } from "@/components/SiteProvider";

export default function Footer() {
  const { openConsult } = useSite();

  return (
    <footer className="bg-[#090A0F] text-white">
      <div className="mx-auto max-w-[1160px] px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs font-semibold tracking-[0.18em] text-[#93c5fd] uppercase">
          Next step
        </p>
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
        <div className="mt-10 flex flex-col gap-2 text-sm text-white/75 sm:flex-row sm:gap-8">
          <a href="mailto:business@theosoprojects.online" className="hover:text-white">
            business@theosoprojects.online
          </a>
          <a href="tel:+12048875918" className="hover:text-white">
            +1 204 887 5918
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1160px] flex-col gap-4 px-5 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between md:px-8">
          <Link href="/#top" className="flex items-center gap-2 text-white">
            <Mark light />
            <span className="font-extrabold tracking-tight">TOP Agency</span>
          </Link>
          <p>© 2026 TOP Agency / The Oso Project. All Rights Reserved.</p>
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
