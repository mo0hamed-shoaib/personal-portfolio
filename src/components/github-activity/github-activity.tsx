"use client";

import { useEffect, useState } from "react";

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

function ContributionGraph({
  totalContributions,
  contributions,
}: GitHubActivityProps) {
  if (!contributions || contributions.length === 0) {
    return null;
  }

  return (
    <div>
      <p className="mb-4 text-center text-sm text-muted-foreground">
        {totalContributions.toLocaleString()} contributions in the last 8 months
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
        <div className="grid grid-flow-col grid-rows-7 gap-1 p-6 overflow-x-auto">
          {contributions.map((day) => (
            <div
              key={day.date}
              className={`h-3 w-3 ${getLevelColor(
                day.level
              )} transition-colors`}
              title={`${day.count} contribution${
                day.count !== 1 ? "s" : ""
              } on ${day.date}`}
            />
          ))}
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
  const [daysToShow, setDaysToShow] = useState(110); // Default to mobile

  useEffect(() => {
    // Set initial days to show based on window size
    if (typeof window !== "undefined") {
      setDaysToShow(window.innerWidth < 768 ? 110 : Infinity);
    }

    // Handle window resize
    const handleResize = () => {
      setDaysToShow(window.innerWidth < 768 ? 110 : Infinity);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <section className="border-t border-border pt-12 pb-16 md:pb-24">
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
    <section className="border-t border-border pt-12 pb-16 md:pb-24">
      <div>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            GitHub Activity
          </h2>
        </div>
        <ContributionGraph
          totalContributions={data.totalContributions}
          contributions={
            daysToShow === Infinity
              ? data.contributions
              : data.contributions.slice(-daysToShow)
          }
        />
      </div>
    </section>
  );
}
