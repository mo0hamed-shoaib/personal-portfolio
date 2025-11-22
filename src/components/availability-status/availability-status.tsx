import Link from "next/link";
import { portfolioData } from "@/lib/portfolio-data";

export function AvailabilityStatus() {
  const { personal } = portfolioData;

  return (
    <section className="border-t border-border pt-16 pb-16">
      <div>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Availability
          </h2>
        </div>
        <div className="relative flex flex-col items-center gap-6 border-y border-border bg-card p-8 text-center">
          <span className="pointer-events-none absolute z-10 left-0 top-0 -translate-x-[calc(50%+0.5px)] -translate-y-[calc(50%+1px)] text-[10px] font-mono font-semibold leading-none text-accent-orange">
            +
          </span>
          <span className="pointer-events-none absolute z-10 right-0 top-0 translate-x-[calc(50%+0.5px)] -translate-y-[calc(50%+1px)] text-[10px] font-mono font-semibold leading-none text-accent-orange">
            +
          </span>
          <span className="pointer-events-none absolute z-10 bottom-0 left-0 -translate-x-[calc(50%+0.5px)] translate-y-[calc(50%-0.5px)] text-[10px] font-mono font-semibold leading-none text-accent-orange">
            +
          </span>
          <span className="pointer-events-none absolute z-10 bottom-0 right-0 translate-x-[calc(50%+0.5px)] translate-y-[calc(50%-0.5px)] text-[10px] font-mono font-semibold leading-none text-accent-orange">
            +
          </span>
          <div className="flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 bg-green-500"></span>
            </div>
            <h3 className="text-lg font-semibold">
              {personal.availability.status}
            </h3>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-muted-foreground">
              Want to get in touch? Send me a message on:
            </p>
            <div className="flex items-center gap-4">
              <Link
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-accent-orange hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                LinkedIn
              </Link>
              <span className="text-muted-foreground">,</span>
              <Link
                href={personal.socialLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-accent-orange hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                X (Twitter)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

