"use client";

import { Reveal } from "@/components/motion";

const people = [
  { mark: "RB", name: "Rilwan Badru", role: "Managing Director" },
  { mark: "Arch", name: "Lead Architect", role: "Product architecture, Winnipeg hub" },
  { mark: "UI", name: "Head of UI/UX", role: "Interface direction for product work" },
  { mark: "14", name: "Senior engineers", role: "14-person network, Lagos hub" },
];

export default function Team() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1160px] gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="rounded-3xl bg-[#090A0F] p-8 text-white md:p-10">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#93c5fd] uppercase">
            From the Managing Director
          </p>
          <blockquote className="mt-6 text-2xl leading-snug font-semibold tracking-tight md:text-3xl">
            “At TOP Agency, we believe world-class technology and elite engineering
            talent shouldn&apos;t be locked behind bloated budgets. We build the digital
            infrastructure and teams that drive lasting, measurable growth.”
          </blockquote>
          <p className="mt-8 text-sm font-semibold">Rilwan Badru</p>
          <p className="text-sm text-white/60">Managing Director, TOP Agency</p>
        </Reveal>
        <Reveal delay={0.08} className="grid gap-3 sm:grid-cols-2">
          {people.map((person) => (
            <article key={person.name} className="rounded-3xl border border-black/5 bg-white p-5">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#090A0F] text-[11px] font-extrabold tracking-tight text-white">
                {person.mark}
              </span>
              <h3 className="mt-4 text-base font-extrabold tracking-tight">{person.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#3d4654]">{person.role}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
