"use client";

import { motion } from "framer-motion";
import { useReveal } from "@/components/motion";

const services = [
  {
    title: "Web Design & Development",
    body: "High-performance websites and landing pages built for speed, SEO, and high conversion rates.",
    tags: ["Speed", "SEO", "Conversion"],
    span: "md:col-span-4",
    dark: false,
  },
  {
    title: "Mobile App Design & Engineering",
    body: "Human-centered iOS and Android mobile apps engineered for clarity and speed.",
    tags: ["iOS", "Android", "Clarity"],
    span: "md:col-span-2",
    dark: false,
  },
  {
    title: "Custom Software & SaaS Systems",
    body: "Scalable web apps, internal dashboards, and custom software tailored for operational scale.",
    tags: ["SaaS", "Dashboards", "Scale"],
    span: "md:col-span-2",
    dark: false,
  },
  {
    title: "Global Remote Engineering Talent",
    body: "Skip 6-week hiring bottlenecks. Plug pre-vetted senior full-stack developers directly into your sprint cycle with full US/Canada time-zone overlap.",
    tags: ["48–72 hours", "US/Canada hours", "Senior"],
    span: "md:col-span-4",
    dark: true,
  },
];

export default function Services() {
  const reveal = useReveal();

  return (
    <section id="services" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1160px]">
        <p className="text-xs font-semibold tracking-[0.18em] text-[#2563EB] uppercase">Services</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
          Four ways to put TOP Agency on the work.
        </h2>
        <motion.div {...reveal.container} className="mt-10 grid gap-4 md:grid-cols-6">
          {services.map((service) => (
            <motion.article
              key={service.title}
              {...reveal.item}
              className={`lift motion-reveal rounded-3xl border p-7 ${service.span} ${
                service.dark
                  ? "border-white/10 bg-[#090A0F] text-white"
                  : "border-black/5 bg-[#FAFAFA]"
              }`}
            >
              <h3 className="text-2xl font-extrabold tracking-tight">{service.title}</h3>
              <p className={`mt-4 text-sm leading-relaxed ${service.dark ? "text-white/70" : "text-[#3d4654]"}`}>
                {service.body}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      service.dark ? "bg-white/10 text-white" : "bg-white text-[#0D1117]"
                    }`}
                  >
                    {tag}
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
