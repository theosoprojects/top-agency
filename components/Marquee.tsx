"use client";

import { useSite } from "@/components/SiteProvider";

const projects: { name: string; href?: string }[] = [
  { name: "Camora", href: "https://camora.online" },
  { name: "Chef D", href: "https://chefdidenko.com" },
  { name: "Workmen" },
  { name: "Elevate Co", href: "https://elevatebrandco.online" },
  { name: "Sam & Kemi", href: "https://samandkemoyeyiola.com" },
  { name: "TOP Talent Portal" },
];

export default function Marquee() {
  const { openConsult } = useSite();
  const loop = [...projects, ...projects];

  return (
    <section className="marquee overflow-hidden border-y border-white/10 bg-[#090A0F] py-5 text-white" aria-label="Selected work">
      <div className="marquee-track flex w-max items-center">
        {loop.map((project, index) => (
          <span key={`${project.name}-${index}`} className="flex items-center">
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="px-8 text-sm font-semibold tracking-[0.14em] text-white/75 uppercase hover:text-white"
              >
                {project.name}
              </a>
            ) : project.name === "TOP Talent Portal" ? (
              <button
                type="button"
                onClick={() => openConsult("talent")}
                className="px-8 text-sm font-semibold tracking-[0.14em] text-white/75 uppercase hover:text-white"
              >
                {project.name}
              </button>
            ) : (
              <span className="px-8 text-sm font-semibold tracking-[0.14em] text-white/75 uppercase">
                {project.name}
              </span>
            )}
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
          </span>
        ))}
      </div>
    </section>
  );
}
