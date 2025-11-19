"use client";

import { useEffect, useState, startTransition } from "react";
import { Accordion } from "@/components/animate-ui/components/base/accordion";
import { portfolioData } from "@/lib/portfolio-data";
import { ExperienceAccordionItem } from "./experience-accordion-item";
import { ExperienceFallback } from "./experience-fallback";

export function Experience() {
  const { experience, internships } = portfolioData;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  return (
    <section id="experience" className="py-16 md:py-24">
      <div>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experience.length > 0 && (
            <div>
              <h3 className="mb-4 text-center text-xl font-semibold">
                Work Experience
              </h3>
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
