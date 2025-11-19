"use client";

import { portfolioData } from "@/lib/portfolio-data";
import * as SimpleIcons from "simple-icons";

export function TechStack() {
  const { techStack } = portfolioData;

  return (
    <section id="tech-stack" className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Tech Stack
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Technologies I work with
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {techStack.map((tech) => {
            const iconKey = `si${tech.iconSlug
              .split(/[.-]/)
              .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
              .join("")}` as keyof typeof SimpleIcons;
            const icon = (SimpleIcons as unknown as Record<
              string,
              { svg: string; hex: string }
            >)[iconKey];
            const iconMarkup = icon?.svg.replace(
              /<svg /,
              `<svg fill="currentColor" `,
            );

            return (
              <div
                key={tech.name}
                className="relative flex items-start gap-4 border border-border bg-card p-6"
              >
                    <span className="pointer-events-none absolute z-10 left-0 top-0 -translate-x-[calc(50%+0.5px)] -translate-y-[calc(50%+1px)] text-[10px] font-semibold font-mono leading-none text-foreground">
                      +
                    </span>
                    <span className="pointer-events-none absolute z-10 right-0 top-0 translate-x-[calc(50%+0.5px)] -translate-y-[calc(50%+1px)] text-[10px] font-semibold font-mono leading-none text-foreground">
                      +
                    </span>
                <span className="pointer-events-none absolute z-10 bottom-0 left-0 -translate-x-[calc(50%+0.5px)] translate-y-[calc(50%-0.5px)] text-[10px] font-semibold font-mono leading-none text-foreground">
                  +
                </span>
                <span className="pointer-events-none absolute z-10 bottom-0 right-0 translate-x-[calc(50%+0.5px)] translate-y-[calc(50%-0.5px)] text-[10px] font-semibold font-mono leading-none text-foreground">
                  +
                </span>
                {iconMarkup && (
                  <div
                    className="h-12 w-12 flex items-center justify-center flex-shrink-0 text-foreground"
                    dangerouslySetInnerHTML={{ __html: iconMarkup }}
                  />
                )}
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
