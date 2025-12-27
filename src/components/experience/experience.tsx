"use client";

import { useEffect, useState, startTransition } from "react";
import { Accordion } from "@/components/animate-ui/components/base/accordion";
import { portfolioData } from "@/lib/portfolio-data";
import { ExperienceAccordionItem } from "./experience-accordion-item";
import { ExperienceFallback } from "./experience-fallback";

export function Experience() {
  const { experience: allExperience } = portfolioData;
  const [mounted, setMounted] = useState(false);

  // Filter experience items by type
  const workExperience = allExperience.filter((item) => item.type === "work");
  const internships = allExperience.filter(
    (item) => item.type === "internship"
  );

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

        <div className="space-y-8">
          {workExperience.length > 0 && (
            <div>
              <h3 className="mb-4 text-center text-xl font-semibold">
                Work Experience
              </h3>
              {mounted ? (
                <Accordion multiple className="space-y-4">
                  {workExperience.map((exp) => (
                    <ExperienceAccordionItem key={exp.id} item={exp} />
                  ))}
                </Accordion>
              ) : (
                <ExperienceFallback items={workExperience} />
              )}
            </div>
          )}

          {internships.length > 0 && (
            <div>
              <h3 className="mb-4 text-center text-xl font-semibold">
                Internships
              </h3>
              {mounted ? (
                <Accordion multiple className="space-y-4">
                  {internships.map((intern) => (
                    <ExperienceAccordionItem key={intern.id} item={intern} />
                  ))}
                </Accordion>
              ) : (
                <ExperienceFallback items={internships} />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
