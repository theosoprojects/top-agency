"use client";

import { motion } from "framer-motion";
import { useReveal } from "@/components/motion";
import { useSite, type Engagement } from "@/components/SiteProvider";

const tiers: {
  name: string;
  cadence: string;
  body: string;
  points: string[];
  action: string;
  engagement: Engagement;
  featured: boolean;
}[] = [
  {
    name: "Starter Web Design",
    cadence: "Project",
    body: "A focused marketing site or landing system, designed and built to take enquiries.",
    points: ["One primary website", "Mobile layout", "Launch support"],
    action: "Start a Project",
    engagement: "project",
    featured: false,
  },
  {
    name: "Growth Retainer",
    cadence: "Monthly",
    body: "Ongoing design and engineering for a product that needs a steady release cadence.",
    points: ["Named point of contact", "Design and development capacity", "Iteration on a live product"],
    action: "Start a Project",
    engagement: "project",
    featured: true,
  },
  {
    name: "Dedicated Remote Engineering Squad",
    cadence: "Embedded",
    body: "Senior engineers placed into your sprint, typically within 48–72 hours.",
    points: ["Full-stack, frontend, backend, or mobile", "US and Canadian hour overlap", "Account management from Winnipeg"],
    action: "Hire Senior Talent",
    engagement: "talent",
    featured: false,
  },
];

export default function Pricing() {
  const reveal = useReveal();
  const { openConsult } = useSite();

  return (
    <section id="pricing" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1160px]">
        <p className="text-xs font-semibold tracking-[0.18em] text-[#2563EB] uppercase">Pricing</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
          Three ways to engage. The fee follows the scope.
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#3d4654]">
          TOP Agency does not publish a rate card. The $5,000 figure elsewhere on
          this site is the average monthly salary saving cited per senior hire, not
          a price.
        </p>
        <motion.div {...reveal.container} className="mt-10 grid gap-4 lg:grid-cols-3">
          {tiers.map((tier) => (
            <motion.article
              key={tier.name}
              {...reveal.item}
              className={`motion-reveal flex flex-col rounded-3xl border p-7 ${
                tier.featured
                  ? "border-[#2563EB] bg-[#090A0F] text-white"
                  : "border-black/5 bg-[#FAFAFA]"
              }`}
            >
              <p className={`text-xs font-semibold tracking-[0.16em] uppercase ${tier.featured ? "text-[#93c5fd]" : "text-[#2563EB]"}`}>
                {tier.cadence}
              </p>
              <h3 className="mt-3 text-2xl font-extrabold tracking-tight">{tier.name}</h3>
              <p className={`mt-4 text-sm leading-relaxed ${tier.featured ? "text-white/70" : "text-[#3d4654]"}`}>
                {tier.body}
              </p>
              <ul className="mt-6 grid flex-1 gap-3">
                {tier.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${tier.featured ? "bg-[#2563EB]" : "bg-[#090A0F]"}`} />
                    {point}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => openConsult(tier.engagement)}
                className={`mt-8 inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-semibold ${
                  tier.featured
                    ? "bg-[#2563EB] text-white hover:bg-[#1d4ed8]"
                    : "bg-[#090A0F] text-white hover:bg-[#2563EB]"
                }`}
              >
                {tier.action}
              </button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
