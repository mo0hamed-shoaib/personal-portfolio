"use client";

import { useEffect, useState, startTransition } from "react";
import { Accordion } from "@/components/animate-ui/components/base/accordion";
import { portfolioData } from "@/lib/portfolio-data";
import { ExperienceAccordionItem } from "./experience-accordion-item";
import { ExperienceFallback } from "./experience-fallback";

export function Experience() {
  const { experience } = portfolioData;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  return (
    <section
      id="experience"
      className="border-t border-dashed border-border pt-16 pb-16"
    >
      <div>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Experience
          </h2>
        </div>

        {experience.length > 0 && (
          <div>
            {mounted ? (
              <Accordion multiple className="space-y-4">
                {experience.map((exp) => (
                  <ExperienceAccordionItem key={exp.id} item={exp} />
                ))}
              </Accordion>
            ) : (
              <ExperienceFallback items={experience} />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
