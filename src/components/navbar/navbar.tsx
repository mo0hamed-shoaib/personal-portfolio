"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, startTransition } from "react";
import { useTheme } from "next-themes";
import {
  Menu,
  MenuTrigger,
  MenuPanel,
  MenuItem,
} from "@/components/animate-ui/components/base/menu";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const router = useRouter();

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
          <div className="flex h-12 items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2">
              {mounted && resolvedTheme === "dark" ? (
                <Image
                  src="/assets/logos/mg-logo-white.svg"
                  alt={`${portfolioData.personal.name} logo`}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                  priority
                  fetchPriority="high"
                />
              ) : (
                <Image
                  src="/assets/logos/mg-logo-black.svg"
                  alt={`${portfolioData.personal.name} logo`}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                  priority
                  fetchPriority="high"
                />
              )}
            </Link>

            <div className="flex items-center gap-6">
              <div className="hidden items-center gap-4 md:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex h-8 items-center justify-center px-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
                        className="h-8 w-8 cursor-pointer"
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

              {/* Mobile Menu */}
              {mounted && (
                <Menu open={menuOpen} onOpenChange={setMenuOpen}>
                  <MenuTrigger
                    nativeButton={false}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center bg-transparent transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
                    aria-label={
                      menuOpen
                        ? "Close navigation menu"
                        : "Open navigation menu"
                    }
                    render={
                      <div>{menuOpen ? <CloseIcon /> : <MenuIcon />}</div>
                    }
                  />
                  <MenuPanel
                    className="w-auto border border-border bg-popover py-1 text-popover-foreground shadow-none rounded-none [&>div]:rounded-none [&>div>div]:rounded-none"
                    sideOffset={8}
                    align="start"
                    alignOffset={-16}
                    transition={{ duration: 0.2 }}
                  >
                    {navLinks.map((link) => (
                      <MenuItem
                        key={link.href}
                        closeOnClick
                        onClick={() => router.push(link.href)}
                        className="flex cursor-pointer rounded-none py-2 px-4 text-sm font-medium text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground"
                      >
                        {link.label}
                      </MenuItem>
                    ))}
                  </MenuPanel>
                </Menu>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function MenuIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2.5 5H17.5" />
      <path d="M2.5 10H17.5" />
      <path d="M2.5 15H17.5" />
    </svg>
  );
}

function CloseIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 5L5 15" />
      <path d="M5 5L15 15" />
    </svg>
  );
}
