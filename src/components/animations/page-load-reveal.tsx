"use client";

import { motion } from "motion/react";

interface PageLoadRevealProps {
  children: React.ReactNode;
  className?: string;
}

export function PageLoadReveal({ children, className }: PageLoadRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

