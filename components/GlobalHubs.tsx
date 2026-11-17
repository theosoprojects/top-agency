"use client";

import { motion } from "framer-motion";
import { useReveal } from "@/components/motion";

const hubs = [
  {
    place: "Winnipeg, MB",
    title: "North America Hub (Canada & US)",
    points: [
      "Strategy",
      "Client Success",
      "Product Architecture",
      "Direct Account Management",
    ],
  },
  {
    place: "Lagos, Nigeria",
    title: "West Africa Engineering Hub (Nigeria)",
    points: [
      "Pre-vetted Senior Full-Stack Engineers",
      "Frontend Engineers",
      "Backend Engineers",
      "Mobile Software Engineers",
    ],
  },
];

export default function GlobalHubs() {
  const reveal = useReveal();

  return (
    <section id="talent" className="relative scroll-mt-24 overflow-hidden bg-[#0D1117] py-20 text-white md:py-28">
      <div className="hero-glow pointer-events-none absolute inset-0 opacity-70" />
      <div className="site-shell relative">
        <p className="text-xs font-semibold tracking-[0.18em] text-[#93c5fd] uppercase">
          Global talent
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
          Two hubs. One sprint across US and Canadian hours.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
          Strategy and account management sit in Winnipeg. Senior engineering is
          delivered from Nigeria, aligned to the client’s working day.
        </p>
        <motion.div {...reveal.container} className="mt-10 grid gap-4 md:grid-cols-2">
          {hubs.map((hub) => (
            <motion.article
              key={hub.title}
              {...reveal.item}
              className="motion-reveal rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-[#93c5fd] uppercase">
                {hub.place}
              </p>
              <h3 className="mt-3 text-2xl font-extrabold tracking-tight">{hub.title}</h3>
              <ul className="mt-6 grid gap-3">
                {hub.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
