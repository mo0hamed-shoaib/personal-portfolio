"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { VariantProps } from "class-variance-authority";

import { buttonVariants } from "@/components/animate-ui/components/buttons/icon";
import { cn } from "@/lib/utils";

type ThemeSelection = "light" | "dark" | "system";

const getIcon = (
  theme: string | undefined,
  resolvedTheme: string | undefined
) => {
  if (theme === "system") {
    return <Monitor />;
  }
  if (resolvedTheme === "dark") {
    return <Moon />;
  }
  return <Sun />;
};

const getNextTheme = (
  current: string | undefined,
  modes: ThemeSelection[]
): ThemeSelection => {
  const i = modes.indexOf(current as ThemeSelection);
  if (i === -1) return modes[0];
  return modes[(i + 1) % modes.length];
};

type ThemeTogglerButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    modes?: ThemeSelection[];
  };

function ThemeTogglerButton({
  variant = "default",
  size = "default",
  modes = ["light", "dark", "system"],
  onClick,
  className,
  ...props
}: ThemeTogglerButtonProps) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        data-slot="theme-toggler-button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        <Sun />
      </button>
    );
  }

  return (
    <button
      data-slot="theme-toggler-button"
      className={cn(buttonVariants({ variant, size, className }))}
      onClick={(e) => {
        onClick?.(e);
        setTheme(getNextTheme(theme, modes));
      }}
      {...props}
    >
      {getIcon(theme, resolvedTheme)}
    </button>
  );
}

export { ThemeTogglerButton, type ThemeTogglerButtonProps };
