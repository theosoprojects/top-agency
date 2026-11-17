"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { useReveal } from "@/components/motion";
import { useSite } from "@/components/SiteProvider";

const studies: {
  name: string;
  field: string;
  site: string;
  summary: string;
  href?: string;
  span: string;
  visual: ReactNode;
}[] = [
  {
    name: "Camora",
    field: "Live events",
    site: "camora.online",
    summary:
      "Real-time mobile media-sharing and discovery ecosystem for live events. People in the room can share and find media while the event is happening.",
    href: "https://camora.online",
    span: "md:col-span-7",
    visual: <CamoraFrame />,
  },
  {
    name: "Workmen",
    field: "Services",
    site: "No public site yet",
    summary:
      "High-converting service platform replacing outdated templates. The interface is built around a clearer path from the visit to an enquiry.",
    span: "md:col-span-5",
    visual: <WorkmenFrame />,
  },
  {
    name: "Elevate Co",
    field: "B2B web",
    site: "elevatebrandco.online",
    summary:
      "Scalable corporate web experience engineered for B2B lead capture. A commercial visitor can read the offer and reach the team without a template in the way.",
    href: "https://elevatebrandco.online",
    span: "md:col-span-5",
    visual: <ElevateFrame />,
  },
  {
    name: "Chef D",
    field: "Hospitality",
    site: "chefdidenko.com",
    summary:
      "Responsive, mobile-first hospitality website optimized for direct orders. Guests reach the kitchen’s own ordering path from the phone.",
    href: "https://chefdidenko.com",
    span: "md:col-span-7",
    visual: <ChefFrame />,
  },
];

export default function CaseStudies() {
  const reveal = useReveal();
  const { openConsult } = useSite();

  return (
    <section id="works" className="scroll-mt-24 py-20 md:py-28">
      <div className="site-shell">
        <p className="text-xs font-semibold tracking-[0.18em] text-[#2563EB] uppercase">Works</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
          Recent platforms, built for the business in front of them.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#3d4654]">
          Camora, Elevate Co, and Chef D link to the live sites. Workmen does not have a public URL, so that case opens a project conversation.
        </p>
        <motion.div {...reveal.container} className="mt-10 grid gap-4 md:grid-cols-12">
          {studies.map((study) => (
            <motion.article
              key={study.name}
              {...reveal.item}
              className={`lift motion-reveal overflow-hidden rounded-3xl border border-black/5 bg-[#FAFAFA] ${study.span}`}
            >
              <div className="h-64 border-b border-black/5 bg-[#0D1117]">{study.visual}</div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold tracking-[0.16em] text-[#2563EB] uppercase">
                    {study.field}
                  </p>
                  <p className="text-xs text-[#5c6570]">{study.site}</p>
                </div>
                <h3 className="mt-3 text-2xl font-extrabold tracking-tight">{study.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#3d4654]">{study.summary}</p>
                {study.href ? (
                  <a
                    href={study.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold"
                  >
                    See Case
                    <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => openConsult("project")}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold"
                  >
                    See Case
                    <ArrowUpRight size={16} />
                  </button>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CamoraFrame() {
  return (
    <div className="flex h-full items-end justify-center gap-4 px-6 pt-8" aria-hidden="true">
      <div className="w-40 rounded-[28px] border border-white/10 bg-[#12141c] p-3 text-white">
        <span className="rounded-full bg-[#e11d48] px-2 py-0.5 text-[10px] font-bold uppercase">Live</span>
        <p className="mt-3 text-sm font-bold">Tonight</p>
        <div className="mt-3 grid grid-cols-2 gap-1.5">
          <div className="h-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#38bdf8]" />
          <div className="h-12 rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#db2777]" />
        </div>
      </div>
    </div>
  );
}

function WorkmenFrame() {
  return (
    <div className="flex h-full items-center px-6" aria-hidden="true">
      <div className="w-full rounded-2xl bg-white p-4 text-[#0D1117]">
        <p className="text-xs font-semibold text-[#5c6570]">Service desk</p>
        <div className="mt-3 grid gap-2">
          {["Request", "Schedule", "Confirm"].map((row) => (
            <div key={row} className="flex items-center justify-between rounded-xl bg-[#FAFAFA] px-3 py-2 text-xs font-semibold">
              {row}
              <span className="h-2 w-8 rounded-full bg-[#2563EB]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ElevateFrame() {
  return (
    <div className="flex h-full items-center px-6" aria-hidden="true">
      <div className="w-full overflow-hidden rounded-2xl bg-white text-[#0D1117]">
        <div className="flex items-center gap-1.5 border-b border-black/5 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#fda4af]" />
          <span className="h-2 w-2 rounded-full bg-[#fde68a]" />
          <span className="h-2 w-2 rounded-full bg-[#86efac]" />
        </div>
        <div className="grid grid-cols-[72px_1fr] gap-3 p-4">
          <div className="h-16 rounded-xl bg-[#090A0F]" />
          <div>
            <div className="h-3 w-2/3 rounded bg-[#e8edf5]" />
            <div className="mt-2 h-8 rounded-lg bg-[#2563EB]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ChefFrame() {
  return (
    <div className="flex h-full items-end justify-center px-6 pt-8" aria-hidden="true">
      <div className="w-full max-w-sm rounded-t-3xl bg-[#fff7ed] p-5 text-[#0D1117]">
        <p className="text-xs font-semibold tracking-[0.16em] text-[#c2410c] uppercase">Tonight’s menu</p>
        <p className="mt-2 text-lg font-extrabold tracking-tight">Direct orders</p>
        <div className="mt-4 h-10 rounded-full bg-[#090A0F]" />
      </div>
    </div>
  );
}
