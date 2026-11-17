"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useSite } from "@/components/SiteProvider";

export default function CookieBanner() {
  const { cookiesAcknowledged, acknowledgeCookies } = useSite();
  const reduce = useReducedMotion();
  if (cookiesAcknowledged) return null;

  return (
    <motion.div
      className="fixed inset-x-0 bottom-0 z-40 p-4"
      initial={reduce ? false : { y: 28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex w-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg md:flex-row md:items-center md:justify-between md:px-5">
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600">
          TOP Agency stores one preference in this browser so this notice stays
          dismissed. We do not run analytics cookies.{" "}
          <Link href="/cookies" className="font-semibold text-[#2563EB]">
            Cookie Policy
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={acknowledgeCookies}
            className="inline-flex h-10 items-center rounded-full bg-[#090A0F] px-4 text-sm font-semibold text-white"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={acknowledgeCookies}
            className="inline-flex h-10 items-center rounded-full border border-slate-200 px-4 text-sm font-semibold"
          >
            Dismiss
          </button>
        </div>
      </div>
    </motion.div>
  );
}
