"use client";

import Link from "next/link";
import { useEffect, useState, startTransition } from "react";
import { portfolioData } from "@/lib/portfolio-data";
import Mg8BitLogo from "@/components/logo/mg-8bit-logo";
import { Icon } from "@/components/ui/icon";
import {
  Linkedin02Icon,
  GithubIcon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import {
  Tooltip,
  TooltipTrigger,
  TooltipPanel,
} from "@/components/animate-ui/components/base/tooltip";

export function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  return (
    <footer className="w-full bg-background pb-4">
      <div className="container mx-auto px-4">
        <div className="relative mx-auto max-w-3xl border border-border bg-card py-4">
          <span className="pointer-events-none absolute z-20 bottom-0 left-0 -translate-x-[calc(50%+0.5px)] translate-y-[calc(50%-0.5px)] text-[10px] font-mono font-semibold leading-none text-accent-orange">
            +
          </span>
          <span className="pointer-events-none absolute z-20 bottom-0 right-0 translate-x-[calc(50%+0.5px)] translate-y-[calc(50%-0.5px)] text-[10px] font-mono font-semibold leading-none text-accent-orange">
            +
          </span>
          <div className="flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
            <div className="flex w-full flex-col items-center md:w-auto md:flex-row md:items-center gap-3">
              <Link
                href="/"
                className="flex items-center md:order-first order-first"
              >
                {mounted && (
                  <Mg8BitLogo
                    className="h-8 w-8"
                    aria-label={`${personal.name} logo`}
                  />
                )}
              </Link>
              <p className="text-sm text-muted-foreground md:order-last">
                © {currentYear} {personal.name}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Link
                      href={personal.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label="LinkedIn"
                    >
                      <Icon icon={Linkedin02Icon} size={16} strokeWidth={2} />
                    </Link>
                  }
                />
                <TooltipPanel className="border border-border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md **:data-[slot='tooltip-arrow']:bg-popover **:data-[slot='tooltip-arrow']:fill-popover">
                  LinkedIn
                </TooltipPanel>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger
                  render={
                    <Link
                      href={personal.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label="GitHub"
                    >
                      <Icon icon={GithubIcon} size={16} strokeWidth={2} />
                    </Link>
                  }
                />
                <TooltipPanel className="border border-border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md **:data-[slot='tooltip-arrow']:bg-popover **:data-[slot='tooltip-arrow']:fill-popover">
                  GitHub
                </TooltipPanel>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger
                  render={
                    <Link
                      href={personal.socialLinks.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label="X (Twitter)"
                    >
                      <Icon icon={NewTwitterIcon} size={16} strokeWidth={2} />
                    </Link>
                  }
                />
                <TooltipPanel className="border border-border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md **:data-[slot='tooltip-arrow']:bg-popover **:data-[slot='tooltip-arrow']:fill-popover">
                  X (Twitter)
                </TooltipPanel>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
