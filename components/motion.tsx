"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export function useReveal(stagger = 0.08) {
  const reduce = useReducedMotion();
  return {
    reduce,
    container: reduce
      ? {}
      : {
          initial: "hidden" as const,
          whileInView: "show" as const,
          viewport: { once: true, amount: 0.25 },
          variants: {
            hidden: {},
            show: { transition: { staggerChildren: stagger } },
          },
        },
    item: reduce ? {} : { variants: itemVariants },
  };
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`motion-reveal ${className ?? ""}`}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
