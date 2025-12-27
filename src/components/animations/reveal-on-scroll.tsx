"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function RevealOnScroll({
  children,
  className,
  delay = 0,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, transform: "translateY(30px)" }}
      animate={
        isInView
          ? { opacity: 1, transform: "translateY(0px)" }
          : { opacity: 0, transform: "translateY(30px)" }
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
