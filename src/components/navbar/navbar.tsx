"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, startTransition } from "react";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipTrigger,
  TooltipPanel,
} from "@/components/animate-ui/components/base/tooltip";
import { ThemeTogglerButton } from "@/components/animate-ui/components/buttons/theme-toggler";
import { portfolioData } from "@/lib/portfolio-data";

const navLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/#tech-stack", label: "Tech Stack" },
  { href: "/#experience", label: "Experience" },
  { href: "/#certifications", label: "Certifications" },
];

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
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-12 max-w-3xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          {mounted && resolvedTheme === "dark" ? (
            <Image
              src="/assets/logo-for-navbar-and-general-use/mg-logo-white.svg"
              alt={`${portfolioData.personal.name} logo`}
              width={24}
              height={24}
              className="h-6 w-6"
              priority
            />
          ) : (
            <Image
              src="/assets/logo-for-navbar-and-general-use/mg-logo-black.svg"
              alt={`${portfolioData.personal.name} logo`}
              width={24}
              height={24}
              className="h-6 w-6"
              priority
            />
          )}
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-4 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {mounted ? (
            <Tooltip>
              <TooltipTrigger
                render={
                  <ThemeTogglerButton
                    modes={["light", "dark"]}
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8"
                    aria-label="Toggle theme"
                  />
                }
              />
              <TooltipPanel className="border border-border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md [&_[data-slot='tooltip-arrow']]:bg-popover [&_[data-slot='tooltip-arrow']]:fill-popover">
                {tooltipText}
              </TooltipPanel>
            </Tooltip>
          ) : (
            <div className="h-8 w-8" aria-label="Toggle theme" />
          )}
        </div>
      </div>
    </nav>
  );
}
