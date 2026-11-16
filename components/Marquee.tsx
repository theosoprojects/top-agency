"use client";

import { useSite } from "@/components/SiteProvider";

const projects: { name: string; note: string; href?: string; talent?: boolean }[] = [
  { name: "Camora", note: "Live events", href: "https://camora.online" },
  { name: "Chef D", note: "Hospitality", href: "https://chefdidenko.com" },
  { name: "Workmen", note: "Services" },
  { name: "Elevate Co", note: "B2B web", href: "https://elevatebrandco.online" },
  { name: "Sam & Kemi", note: "Site", href: "https://samandkemoyeyiola.com" },
  { name: "TOP Talent Portal", note: "Remote squads", talent: true },
];

export default function Marquee() {
  const { openConsult } = useSite();
  const loop = [...projects, ...projects];

  return (
    <section className="marquee overflow-hidden border-y border-white/10 bg-[#090A0F] py-4 text-white" aria-label="Selected work">
      <div className="marquee-track flex w-max items-center">
        {loop.map((project, index) => {
          const label = (
            <span className="flex flex-col px-8">
              <span className="text-sm font-semibold tracking-[0.14em] uppercase">{project.name}</span>
              <span className="text-[10px] font-medium tracking-[0.16em] text-white/45 uppercase">{project.note}</span>
            </span>
          );
          return (
            <span key={`${project.name}-${index}`} className="flex items-center text-white/80 hover:text-white">
              {project.href ? (
                <a href={project.href} target="_blank" rel="noreferrer">
                  {label}
                </a>
              ) : project.talent ? (
                <button type="button" onClick={() => openConsult("talent")}>
                  {label}
                </button>
              ) : (
                label
              )}
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
            </span>
          );
        })}
      </div>
    </section>
  );
}
