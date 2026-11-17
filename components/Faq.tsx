"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const questions = [
  {
    q: "How long does a web or app project take?",
    a: "The schedule is set after a short call. A single site and a multi-surface product are different lengths of work, and we confirm the timeline before production starts.",
  },
  {
    q: "How fast can a senior developer join?",
    a: "Pre-vetted senior engineers are typically placed within 48–72 hours, working with overlap on US and Canadian hours.",
  },
  {
    q: "Which technologies do you build with?",
    a: "Web and product work is commonly React, Node.js, and Python, with iOS and Android when the product is mobile. The stack follows the system.",
  },
  {
    q: "How does pricing work?",
    a: "Projects and retainers are quoted from scope. Dedicated engineers are a separate engagement. The $5,000 figure on this site is the average monthly salary saving cited per senior hire, not a published rate. Write to business@theosoprojects.online or use Let’s Talk.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 py-20 md:py-28">
      <div className="site-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-[#2563EB] uppercase">FAQ</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            Timelines, talent, stack, and fees.
          </h2>
        </div>
        <div className="border-t border-black/10">
          {questions.map((item, index) => {
            const expanded = open === index;
            return (
              <div key={item.q} className="border-b border-black/10">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? null : index)}
                >
                  <span className="text-base font-extrabold tracking-tight md:text-lg">{item.q}</span>
                  <Plus
                    size={18}
                    className={`shrink-0 transition-transform ${expanded ? "rotate-45" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {expanded ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-5 text-sm leading-relaxed text-[#3d4654]">{item.a}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
