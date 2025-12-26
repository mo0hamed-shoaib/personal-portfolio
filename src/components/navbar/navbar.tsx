"use client";

import Link from "next/link";
import { useEffect, useState, startTransition } from "react";
import Mg8BitLogo from "@/components/logo/mg-8bit-logo";
import { portfolioData } from "@/lib/portfolio-data";

export function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted state after hydration to prevent hydration mismatches
    startTransition(() => {
      setMounted(true);
    });
  }, []);

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
          <div className="flex h-12 items-center justify-between gap-4 px-4">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              {mounted && (
                <Mg8BitLogo
                  className="h-8 w-8"
                  aria-label={`${portfolioData.personal.name} logo`}
                />
              )}
            </Link>

            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
