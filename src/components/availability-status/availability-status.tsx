"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { BookMeetingDialog } from "@/components/book-meeting/book-meeting-dialog";
import { useState } from "react";
import { Button } from "@base-ui-components/react/button";

export function AvailabilityStatus() {
  const { personal } = portfolioData;
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="relative flex flex-col items-center gap-6 border border-border bg-card p-8 text-center">
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
            <div className="flex items-center gap-3">
              <div className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 bg-green-500"></span>
              </div>
              <h2 className="text-xl font-semibold">
                {personal.availability.status}
              </h2>
            </div>
            <p className="text-muted-foreground">
              {personal.availability.label}
            </p>
            <Button
              onClick={() => setDialogOpen(true)}
              className="h-11 cursor-pointer bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Book a Meeting
            </Button>
          </div>
        </div>
      </section>

      <BookMeetingDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
}

