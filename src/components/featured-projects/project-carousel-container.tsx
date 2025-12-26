import { ReactNode } from "react";

interface ProjectCarouselContainerProps {
  children: ReactNode;
}

export function ProjectCarouselContainer({
  children,
}: ProjectCarouselContainerProps) {
  return <div className="relative">{children}</div>;
}
