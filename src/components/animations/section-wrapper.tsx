"use client";

import { RevealOnScroll } from "./reveal-on-scroll";

interface SectionWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

export function SectionWrapper({ children, delay }: SectionWrapperProps) {
  return <RevealOnScroll delay={delay}>{children}</RevealOnScroll>;
}

