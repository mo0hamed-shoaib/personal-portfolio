"use client";

import Link from "next/link";
import { portfolioData } from "@/lib/portfolio-data";
import { Avatar } from "./avatar";
import { Icon } from "@/components/ui/icon";
import {
  Location06Icon,
  Linkedin02Icon,
  GithubIcon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import {
  Tooltip,
  TooltipTrigger,
  TooltipPanel,
} from "@/components/animate-ui/components/base/tooltip";

export function Introduction() {
  const { personal } = portfolioData;

  return (
    <section className="pt-16 pb-16 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-12">
          {/* Left column: Text content */}
          <div className="flex flex-1 flex-col gap-4 text-center md:text-left">
            <div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                {personal.name}
              </h1>
              <p className="mt-2 text-xl text-muted-foreground">
                {personal.jobTitle}
              </p>
            </div>

            <p className="text-lg leading-relaxed text-foreground/90">
              {personal.bio}
            </p>

            {/* View CV - shown on desktop */}
            <Link
              href={personal.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:inline-block"
            >
              View My CV
            </Link>
          </div>

          {/* Right column: Avatar + Location + Social links - all aligned to w-36 */}
          <div className="flex w-36 shrink-0 flex-col items-center gap-3 self-center md:self-start">
            <Avatar src={personal.avatar} alt={`${personal.name} avatar`} />

            {/* Location */}
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Icon icon={Location06Icon} size={14} strokeWidth={2} />
              Cairo, Egypt
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center gap-4">
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

            {/* View CV - shown on mobile only */}
            <Link
              href={personal.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
            >
              View My CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
