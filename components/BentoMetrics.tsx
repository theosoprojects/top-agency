"use client";

import { motion } from "framer-motion";
import { useReveal } from "@/components/motion";

const metrics = [
  {
    figure: "48–72 Hrs",
    body: "Average deployment time for pre-vetted senior remote engineers.",
  },
  {
    figure: "$5,000/mo",
    body: "Average monthly salary savings per senior developer hire.",
  },
  {
    figure: "+38%",
    body: "Average conversion rate lift from our custom web redesigns.",
  },
];

export default function BentoMetrics() {
  const reveal = useReveal(0.08);

  return (
    <section className="py-20 md:py-28">
      <div className="site-shell">
        <p className="text-xs font-semibold tracking-[0.18em] text-[#2563EB] uppercase">Impact</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl">
          Numbers we put in front of a new engagement.
        </h2>
        <motion.div {...reveal.container} className="mt-10 grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <motion.article
              key={metric.figure}
              {...reveal.item}
              className="lift motion-reveal rounded-3xl border border-black/5 bg-white p-7 shadow-[0_20px_50px_rgba(9,10,15,0.04)]"
            >
              <p className="text-4xl font-extrabold tracking-tight text-[#090A0F] md:text-5xl">
                {metric.figure}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#3d4654]">{metric.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
