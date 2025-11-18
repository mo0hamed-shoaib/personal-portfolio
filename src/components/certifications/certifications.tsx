import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
} from "@/components/animate-ui/components/base/accordion";
import { portfolioData } from "@/lib/portfolio-data";

export function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Certifications
          </h2>
        </div>

        <Accordion multiple className="space-y-4">
          {certifications.map((cert) => (
            <AccordionItem
              key={cert.id}
              value={cert.id}
              className="border-0 bg-transparent"
            >
              <div className="relative border border-border bg-card">
                <span className="pointer-events-none absolute z-10 left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-[10px] font-mono font-semibold leading-none text-foreground">
                  +
                </span>
                <span className="pointer-events-none absolute z-10 right-0 top-0 translate-x-1/2 -translate-y-1/2 text-[10px] font-mono font-semibold leading-none text-foreground">
                  +
                </span>
                <span className="pointer-events-none absolute z-10 bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-[10px] font-mono font-semibold leading-none text-foreground">
                  +
                </span>
                <span className="pointer-events-none absolute z-10 bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-[10px] font-mono font-semibold leading-none text-foreground">
                  +
                </span>
                <AccordionTrigger
                  showArrow={false}
                  className="group flex w-full cursor-pointer items-start justify-between gap-4 px-4 py-3 text-left font-medium transition-colors hover:bg-muted hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <div>
                    <h3 className="font-semibold">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">
                      {cert.date}
                    </span>
                    <PlusIcon className="h-3 w-3 flex-shrink-0 transition-transform duration-200 group-data-[panel-open]:rotate-45 group-data-[panel-open]:scale-110" />
                  </div>
                </AccordionTrigger>
                <AccordionPanel className="px-4 pb-4 space-y-4 text-sm text-muted-foreground">
                  {cert.learnings?.length ? (
                    <div className="space-y-2">
                      <p className="font-medium text-foreground">
                        What I Learned
                      </p>
                      <ul className="list-disc space-y-1 pl-5">
                        {cert.learnings.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  <div>
                    {cert.credentialUrl ? (
                      <Link
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        View Credential →
                      </Link>
                    ) : (
                      <p>No credential link available.</p>
                    )}
                  </div>
                </AccordionPanel>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function PlusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 12 12" fill="currentColor" {...props}>
      <path d="M6.75 0H5.25V5.25H0V6.75L5.25 6.75V12H6.75V6.75L12 6.75V5.25H6.75V0Z" />
    </svg>
  );
}

