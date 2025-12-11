"use client";

import { useEffect, useRef, useState } from "react";
import {
  Tooltip,
  TooltipPanel,
  TooltipTrigger,
} from "@/components/animate-ui/components/base/tooltip";

interface ContributionDay {
  date: string;
  count: number;
  level: number; // 0-4
}

interface GitHubActivityProps {
  totalContributions: number;
  contributions: ContributionDay[];
}

function getLevelColor(level: number): string {
  switch (level) {
    case 0:
      return "bg-muted/60";
    case 1:
      return "bg-accent-orange/25";
    case 2:
      return "bg-accent-orange/40";
    case 3:
      return "bg-accent-orange/60";
    case 4:
      return "bg-accent-orange";
    default:
      return "bg-muted/60";
  }
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

function ContributionGraph({
  totalContributions,
  contributions,
}: GitHubActivityProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  if (!contributions || contributions.length === 0) {
    return null;
  }

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Scroll to the newest contributions on mount/update
    requestAnimationFrame(() => {
      el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    });
  }, [contributions]);

  return (
    <div>
      <p className="mb-4 text-center text-sm text-muted-foreground">
        {totalContributions.toLocaleString()} contributions in the past year
      </p>
      <div className="relative border-y border-border bg-card">
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
        <div
          ref={containerRef}
          className="grid grid-flow-col grid-rows-7 gap-1 py-6 overflow-x-auto scrollbar-hidden"
        >
          {contributions.map((day) => {
            const contributionLabel = `${day.count} contribution${
              day.count !== 1 ? "s" : ""
            } on ${dateFormatter.format(new Date(day.date))}`;

            return (
              <Tooltip key={day.date} delay={0}>
                <TooltipTrigger
                  render={
                    <div
                      className={`h-3 w-3 ${getLevelColor(
                        day.level
                      )} transition-colors`}
                      aria-label={contributionLabel}
                    />
                  }
                />
                <TooltipPanel className="border border-border bg-popover px-2.5 py-1 text-xs text-popover-foreground shadow-md [&_[data-slot='tooltip-arrow']]:bg-popover [&_[data-slot='tooltip-arrow']]:fill-popover">
                  {contributionLabel}
                </TooltipPanel>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function GitHubActivity() {
  const [data, setData] = useState<{
    contributions: ContributionDay[];
    totalContributions: number;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch("/api/github-activity");
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub activity");
        }
        const result = await response.json();
        if (result.error) {
          throw new Error(result.details || result.error);
        }
        setData({
          contributions: result.data,
          totalContributions: result.totalContributions,
        });
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (error) {
    // Silently fail - don't show error to user
    return null;
  }

  if (isLoading || !data) {
    return (
      <section className="border-t border-dashed border-border pt-16 pb-16">
        <div>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              GitHub Activity
            </h2>
          </div>
          <div className="relative border-y border-border bg-card p-6">
            <div className="flex items-center justify-center py-12">
              <div className="h-8 w-8 animate-pulse border border-border bg-card" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-dashed border-border pt-16 pb-16">
      <div>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            GitHub Activity
          </h2>
        </div>
        <ContributionGraph
          totalContributions={data.totalContributions}
          contributions={data.contributions}
        />
      </div>
    </section>
  );
}
