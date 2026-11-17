"use client";

import { motion } from "framer-motion";
import { useReveal } from "@/components/motion";
import { useSite, type Engagement } from "@/components/SiteProvider";

const services: {
  index: string;
  title: string;
  body: string;
  points: string[];
  span: string;
  dark: boolean;
  engagement: Engagement;
}[] = [
  {
    index: "01",
    title: "Web Design & Development",
    body: "High-performance websites and landing pages built for speed, SEO, and high conversion rates.",
    points: ["Marketing sites and landing systems", "Mobile layout", "A path from visit to enquiry"],
    span: "md:col-span-4",
    dark: false,
    engagement: "project",
  },
  {
    index: "02",
    title: "Mobile App Design & Engineering",
    body: "Human-centered iOS and Android mobile apps engineered for clarity and speed.",
    points: ["iOS and Android", "Clear flows", "A build ready for the store path"],
    span: "md:col-span-2",
    dark: false,
    engagement: "project",
  },
  {
    index: "03",
    title: "Custom Software & SaaS Systems",
    body: "Scalable web apps, internal dashboards, and custom software tailored for operational scale.",
    points: ["Web apps", "Internal dashboards", "Software shaped to the operation"],
    span: "md:col-span-2",
    dark: false,
    engagement: "project",
  },
  {
    index: "04",
    title: "Global Remote Engineering Talent",
    body: "Skip 6-week hiring bottlenecks. Plug pre-vetted senior full-stack developers directly into your sprint cycle with full US/Canada time-zone overlap.",
    points: ["Placement in 48–72 hours", "US and Canadian hour overlap", "Account management from Winnipeg"],
    span: "md:col-span-4",
    dark: true,
    engagement: "talent",
  },
];

export default function Services() {
  const reveal = useReveal();
  const { openConsult } = useSite();

  return (
    <section id="services" className="scroll-mt-24 py-20 md:py-28">
      <div className="site-shell">
        <p className="text-xs font-semibold tracking-[0.18em] text-[#2563EB] uppercase">Services</p>
        <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
            Four ways to put TOP Agency on the work.
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-[#3d4654]">
            A project engagement covers the build. A talent engagement places senior engineers into the sprint you already run.
          </p>
        </div>
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
              <p className={`text-xs font-semibold tracking-[0.16em] ${service.dark ? "text-[#93c5fd]" : "text-[#2563EB]"}`}>
                {service.index}
              </p>
              <h3 className="mt-3 text-2xl font-extrabold tracking-tight">{service.title}</h3>
              <p className={`mt-4 text-sm leading-relaxed ${service.dark ? "text-white/70" : "text-[#3d4654]"}`}>
                {service.body}
              </p>
              <ul className="mt-6 grid gap-2">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm">
                    <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${service.dark ? "bg-[#2563EB]" : "bg-[#090A0F]"}`} />
                    {point}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => openConsult(service.engagement)}
                className={`mt-6 text-sm font-semibold ${service.dark ? "text-[#93c5fd]" : "text-[#2563EB]"}`}
              >
                {service.engagement === "talent" ? "Hire senior talent" : "Start this kind of project"}
              </button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
