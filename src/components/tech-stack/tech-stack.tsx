"use client";

import { portfolioData } from "@/lib/portfolio-data";

export function TechStack() {
  const { techStack } = portfolioData;

  return (
    <section
      id="tech-stack"
      className="border-t border-dashed border-border pt-16 pb-16"
    >
      <div>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Tech Stack
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {techStack.map((tech, index) => {
            const isLeftColumn = index % 2 === 0;
            const borderClasses = isLeftColumn
              ? "border-y border-r border-border"
              : "border-y border-l border-border";

            return (
              <div
                key={tech.name}
                className={`relative flex items-start gap-4 ${borderClasses} bg-card p-6`}
              >
                <div className="h-12 w-12 flex items-center justify-center shrink-0 text-foreground">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-10 w-10"
                    aria-hidden="true"
                  >
                    <path d={tech.svg} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{tech.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tech.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
