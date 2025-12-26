"use client";

import Link from "next/link";
import { useEffect, useState, startTransition } from "react";
import { useTheme } from "next-themes";
import Mg8BitLogo from "@/components/logo/mg-8bit-logo";
import {
  Tooltip,
  TooltipTrigger,
  TooltipPanel,
} from "@/components/animate-ui/components/base/tooltip";
import { ThemeTogglerButton } from "@/components/animate-ui/components/buttons/theme-toggler";
import { portfolioData } from "@/lib/portfolio-data";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // Set mounted state after hydration to prevent hydration mismatches
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  const tooltipText =
    resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <nav className="sticky top-0 z-50 w-full bg-background pt-4">
      <div className="container mx-auto px-4">
        <div className="relative mx-auto max-w-3xl border border-border bg-card">
          <span className="pointer-events-none absolute z-20 left-0 top-0 -translate-x-[calc(50%+0.5px)] -translate-y-[calc(50%+1px)] text-[10px] font-mono font-semibold leading-none text-accent-orange">
            +
          </span>
          <span className="pointer-events-none absolute z-20 right-0 top-0 translate-x-[calc(50%+0.5px)] -translate-y-[calc(50%+1px)] text-[10px] font-mono font-semibold leading-none text-accent-orange">
            +
          </span>
          <span className="pointer-events-none absolute z-20 bottom-0 left-0 -translate-x-[calc(50%+0.5px)] translate-y-[calc(50%-0.5px)] text-[10px] font-mono font-semibold leading-none text-accent-orange">
            +
          </span>
          <span className="pointer-events-none absolute z-20 bottom-0 right-0 translate-x-[calc(50%+0.5px)] translate-y-[calc(50%-0.5px)] text-[10px] font-mono font-semibold leading-none text-accent-orange">
            +
          </span>
          <div className="flex h-12 items-center justify-between gap-4 px-4">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              {mounted && (
                <Mg8BitLogo
                  className={`h-8 w-8 transition-[filter] duration-300 ${
                    resolvedTheme === "dark" ? "invert" : ""
                  }`}
                  aria-label={`${portfolioData.personal.name} logo`}
                />
              )}
            </Link>

            <div className="flex items-center">
              {mounted ? (
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <ThemeTogglerButton
                        modes={["light", "dark"]}
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 cursor-pointer"
                        aria-label="Toggle theme"
                      />
                    }
                  />
                  <TooltipPanel className="border border-border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md **:data-[slot='tooltip-arrow']:bg-popover **:data-[slot='tooltip-arrow']:fill-popover">
                    {tooltipText}
                  </TooltipPanel>
                </Tooltip>
              ) : (
                <div className="h-8 w-8" aria-label="Toggle theme" />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
