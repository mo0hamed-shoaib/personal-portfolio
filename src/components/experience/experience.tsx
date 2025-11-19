import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
} from "@/components/animate-ui/components/base/accordion";
import { portfolioData } from "@/lib/portfolio-data";

export function Experience() {
  const { experience, internships } = portfolioData;

  return (
    <section id="experience" className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experience.length > 0 && (
            <div>
              <h3 className="mb-4 text-xl font-semibold">Work Experience</h3>
              <Accordion multiple className="space-y-4">
                {experience.map((exp) => (
                  <AccordionItem
                    key={exp.id}
                    value={exp.id}
                    className="border-0 bg-transparent"
                  >
                    <div className="relative border border-border bg-card">
                      <span className="pointer-events-none absolute z-10 left-0 top-0 -translate-x-[calc(50%+0.5px)] -translate-y-[calc(50%+1px)] text-[10px] font-mono font-semibold leading-none text-foreground">
                        +
                      </span>
                      <span className="pointer-events-none absolute z-10 right-0 top-0 translate-x-[calc(50%+0.5px)] -translate-y-[calc(50%+1px)] text-[10px] font-mono font-semibold leading-none text-foreground">
                        +
                      </span>
                      <span className="pointer-events-none absolute z-10 bottom-0 left-0 -translate-x-[calc(50%+0.5px)] translate-y-[calc(50%-0.5px)] text-[10px] font-mono font-semibold leading-none text-foreground">
                        +
                      </span>
                      <span className="pointer-events-none absolute z-10 bottom-0 right-0 translate-x-[calc(50%+0.5px)] translate-y-[calc(50%-0.5px)] text-[10px] font-mono font-semibold leading-none text-foreground">
                        +
                      </span>
                      <AccordionTrigger
                        showArrow={false}
                        className="group flex w-full cursor-pointer items-start justify-between gap-4 px-4 py-3 text-left font-medium transition-colors hover:bg-muted hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold">{exp.title}</h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{exp.company}</span>
                            <span>•</span>
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <PlusIcon className="h-3 w-3 flex-shrink-0 transition-transform duration-200 group-data-[panel-open]:rotate-45 group-data-[panel-open]:scale-110" />
                      </AccordionTrigger>
                      <AccordionPanel className="px-4 pb-4 space-y-4 text-sm text-muted-foreground">
                        {exp.responsibilities?.length ? (
                          <div className="space-y-2">
                            <p className="font-medium text-foreground">
                              My Responsibilities
                            </p>
                            <ul className="list-disc space-y-1 pl-5">
                              {exp.responsibilities.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                        {exp.learnings?.length ? (
                          <div className="space-y-2">
                            <p className="font-medium text-foreground">
                              What I Learned
                            </p>
                            <ul className="list-disc space-y-1 pl-5">
                              {exp.learnings.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                      </AccordionPanel>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          {internships.length > 0 && (
            <div>
              <h3 className="mb-4 text-xl font-semibold">Internships</h3>
              <Accordion multiple className="space-y-4">
                {internships.map((intern) => (
                  <AccordionItem
                    key={intern.id}
                    value={intern.id}
                    className="border-0 bg-transparent"
                  >
                    <div className="relative border border-border bg-card">
                      <span className="pointer-events-none absolute z-10 left-0 top-0 -translate-x-[calc(50%+0.5px)] -translate-y-[calc(50%+1px)] text-[10px] font-mono font-semibold leading-none text-foreground">
                        +
                      </span>
                      <span className="pointer-events-none absolute z-10 right-0 top-0 translate-x-[calc(50%+0.5px)] -translate-y-[calc(50%+1px)] text-[10px] font-mono font-semibold leading-none text-foreground">
                        +
                      </span>
                      <span className="pointer-events-none absolute z-10 bottom-0 left-0 -translate-x-[calc(50%+0.5px)] translate-y-[calc(50%-0.5px)] text-[10px] font-mono font-semibold leading-none text-foreground">
                        +
                      </span>
                      <span className="pointer-events-none absolute z-10 bottom-0 right-0 translate-x-[calc(50%+0.5px)] translate-y-[calc(50%-0.5px)] text-[10px] font-mono font-semibold leading-none text-foreground">
                        +
                      </span>
                      <AccordionTrigger
                        showArrow={false}
                        className="group flex w-full cursor-pointer items-start justify-between gap-4 px-4 py-3 text-left font-medium transition-colors hover:bg-muted hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold">{intern.title}</h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{intern.company}</span>
                            <span>•</span>
                            <span>{intern.period}</span>
                          </div>
                        </div>
                        <PlusIcon className="h-3 w-3 flex-shrink-0 transition-transform duration-200 group-data-[panel-open]:rotate-45 group-data-[panel-open]:scale-110" />
                      </AccordionTrigger>
                      <AccordionPanel className="px-4 pb-4 space-y-4 text-sm text-muted-foreground">
                        {intern.responsibilities?.length ? (
                          <div className="space-y-2">
                            <p className="font-medium text-foreground">
                              My Responsibilities
                            </p>
                            <ul className="list-disc space-y-1 pl-5">
                              {intern.responsibilities.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                        {intern.learnings?.length ? (
                          <div className="space-y-2">
                            <p className="font-medium text-foreground">
                              What I Learned
                            </p>
                            <ul className="list-disc space-y-1 pl-5">
                              {intern.learnings.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                      </AccordionPanel>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}
        </div>
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

