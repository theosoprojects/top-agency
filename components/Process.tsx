"use client";

import { motion } from "framer-motion";
import { useReveal } from "@/components/motion";

const steps = [
  {
    index: "01",
    title: "Intro call",
    body: "We align on the product stage and whether you need a build, a team, or both.",
    detail: "You leave with a clear engagement: project, talent, or both.",
  },
  {
    index: "02",
    title: "Shape",
    body: "Architecture, interface direction, and the sprint plan are set before production starts.",
    detail: "Scope, stack, and the first release are agreed in writing.",
  },
  {
    index: "03",
    title: "Build",
    body: "Web, software, or mobile ships in reviewable slices, with Winnipeg as the account line.",
    detail: "You review working slices instead of waiting for a single handover.",
  },
  {
    index: "04",
    title: "Embed",
    body: "When you need capacity, senior engineers join from Lagos inside US and Canadian hours.",
    detail: "Typical placement is 48–72 hours, with account management in Winnipeg.",
  },
];

export default function Process() {
  const reveal = useReveal(0.06);

  return (
    <section id="process" className="scroll-mt-24 py-20 md:py-28">
      <div className="site-shell">
        <p className="text-xs font-semibold tracking-[0.18em] text-[#2563EB] uppercase">Process</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl">
          A short path from the first call to a live sprint.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#3d4654]">
          Every engagement starts with the same conversation. The build and the embedded team can run together or on their own.
        </p>
        <motion.ol {...reveal.container} className="mt-10 grid gap-4 md:grid-cols-4">
          {steps.map((step) => (
            <motion.li
              key={step.index}
              {...reveal.item}
              className="motion-reveal rounded-3xl border border-black/5 bg-white p-6"
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-[#2563EB]">{step.index}</p>
              <h3 className="mt-4 text-xl font-extrabold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#3d4654]">{step.body}</p>
              <p className="mt-4 border-t border-black/5 pt-4 text-xs leading-relaxed font-medium text-[#0D1117]">
                {step.detail}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
