"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSite } from "@/components/SiteProvider";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const { openConsult } = useSite();
  const reduce = useReducedMotion();

  function enter(delay: number) {
    return reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease },
        };
  }

  return (
    <section id="top" className="relative flex min-h-[calc(100svh-4.75rem)] items-center overflow-hidden bg-[#090A0F] text-white">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="hero-horizon pointer-events-none absolute -top-64 h-[320px]" />
      <div className="hero-orb pointer-events-none absolute top-[12%] -left-16 h-64 w-64 rounded-full bg-[#0284C7]/30 blur-3xl" />
      <div className="hero-orb hero-orb-delay pointer-events-none absolute right-[-8%] bottom-[8%] h-72 w-72 rounded-full bg-[#6366f1]/25 blur-3xl" />
      <div className="site-shell relative grid w-full items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)]">
        <div>
          <motion.p
            {...enter(0)}
            className="motion-reveal inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-white/80 backdrop-blur-md"
          >
            Top Creative, Web & Engineering Talent Agency
          </motion.p>
          <motion.h1
            {...enter(0.08)}
            className="motion-reveal mt-6 text-[clamp(2.6rem,4.6vw,5.25rem)] leading-[1.02] font-extrabold tracking-tight"
          >
            We engineer high-performance digital infrastructure & elite remote teams.
          </motion.h1>
          <motion.p
            {...enter(0.16)}
            className="motion-reveal mt-6 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg"
          >
            Custom websites, scalable mobile & web platforms, and pre-vetted senior
            remote developers—built to turn visitors into measurable revenue and
            accelerate your product roadmap.
          </motion.p>
          <motion.div {...enter(0.24)} className="motion-reveal mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => openConsult("project")}
              className="inline-flex h-12 items-center rounded-full bg-[#2563EB] px-6 text-sm font-semibold text-white shadow-[0_0_32px_rgba(37,99,235,0.35)] hover:bg-[#1d4ed8]"
            >
              Start a Project
            </button>
            <button
              type="button"
              onClick={() => openConsult("talent")}
              className="inline-flex h-12 items-center rounded-full border border-white/20 bg-white/5 px-6 text-sm font-semibold backdrop-blur-md hover:border-white/40"
            >
              Hire Senior Talent
            </button>
          </motion.div>
          <motion.ul
            {...enter(0.32)}
            className="motion-reveal mt-8 grid grid-cols-3 gap-6 border-t border-white/10 pt-6 text-left"
          >
            {[
              ["Web", "Sites built for enquiries"],
              ["Product", "Software and mobile"],
              ["Talent", "Senior squads, 48–72h"],
            ].map(([label, note]) => (
              <li key={label}>
                <p className="text-sm font-bold">{label}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/55">{note}</p>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.aside
          {...enter(0.2)}
          className="motion-reveal rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-[#93c5fd] uppercase">
            Delivery
          </p>
          <dl className="mt-5 grid gap-5">
            <div className="border-b border-white/10 pb-4">
              <dt className="text-sm text-white/55">North America hub</dt>
              <dd className="mt-1 text-lg font-bold tracking-tight">Winnipeg, Canada</dd>
              <dd className="mt-1 text-xs text-white/50">Strategy, accounts, and product architecture.</dd>
            </div>
            <div className="border-b border-white/10 pb-4">
              <dt className="text-sm text-white/55">Engineering hub</dt>
              <dd className="mt-1 text-lg font-bold tracking-tight">Lagos, Nigeria</dd>
              <dd className="mt-1 text-xs text-white/50">Senior full-stack, frontend, backend, and mobile.</dd>
            </div>
            <div>
              <dt className="text-sm text-white/55">Senior placement</dt>
              <dd className="mt-1 text-lg font-bold tracking-tight">48–72 hours</dd>
              <dd className="mt-1 text-xs text-white/50">Overlap with US and Canadian working hours.</dd>
            </div>
          </dl>
        </motion.aside>
      </div>
    </section>
  );
}
