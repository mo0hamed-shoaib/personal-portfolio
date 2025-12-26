"use client";

import { useEffect, useState, startTransition } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
} from "@/components/animate-ui/components/base/accordion";
import { portfolioData } from "@/lib/portfolio-data";
import type { EducationItem } from "@/lib/portfolio-data";

export function Certifications() {
  const { education } = portfolioData;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  return (
    <section
      id="education"
      className="border-t border-dashed border-border pt-16 pb-16"
    >
      <div>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Education
          </h2>
        </div>

        {mounted ? (
          <Accordion multiple className="space-y-4">
            {education.map((item) => (
              <EducationAccordionItem key={item.id} item={item} />
            ))}
          </Accordion>
        ) : (
          <EducationFallback items={education} />
        )}
      </div>
    </section>
  );
}

interface EducationAccordionItemProps {
  item: EducationItem;
}

function EducationAccordionItem({ item }: EducationAccordionItemProps) {
  return (
    <AccordionItem
      key={item.id}
      value={item.id}
      className="border-0 bg-transparent"
    >
      <div className="relative border-y border-border bg-card">
        <AccordionTrigger
          showArrow={false}
          className="group flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left font-medium transition-colors hover:bg-muted hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&[data-panel-open]>svg]:rotate-45 [&[data-panel-open]>svg]:scale-110"
        >
          <div className="flex-1">
            <h3 className="text-base font-semibold">{item.name}</h3>
            <div className="flex flex-col md:flex-row md:items-center md:gap-2 gap-1 text-sm text-muted-foreground">
              <span>{item.issuer}</span>
              <span className="hidden md:inline">•</span>
              <span>{item.date}</span>
            </div>
          </div>
          <PlusIcon className="h-3 w-3 shrink-0 transition-transform duration-200" />
        </AccordionTrigger>
        <AccordionPanel className="px-4 pb-4 space-y-4 text-sm text-muted-foreground">
          {item.description ? (
            <p className="text-foreground">{item.description}</p>
          ) : null}
          {item.learnings?.length ? (
            <div className="space-y-2">
              <p className="font-medium text-foreground">What I Learned</p>
              <ul className="list-disc space-y-1 pl-5">
                {item.learnings.map((learning) => (
                  <li key={learning}>{learning}</li>
                ))}
              </ul>
            </div>
          ) : null}
          <div>
            {item.certificateUrl ? (
              <Link
                href={item.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                View Certificate →
              </Link>
            ) : (
              <p>No certificate link available.</p>
            )}
          </div>
        </AccordionPanel>
      </div>
    </AccordionItem>
  );
}

interface EducationFallbackProps {
  items: readonly EducationItem[];
}

function EducationFallback({ items }: EducationFallbackProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="relative border-y border-border bg-card">
          <div className="px-4 py-3">
            <h3 className="font-semibold">{item.name}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{item.issuer}</span>
              <span>•</span>
              <span>{item.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function PlusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 12 12" fill="currentColor" {...props}>
      <path d="M6.75 0H5.25V5.25H0V6.75L5.25 6.75V12H6.75V6.75L12 6.75V5.25H6.75V0Z" />
    </svg>
  );
}
