"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="fixed top-6 right-6 z-50 w-10 h-10 rounded-full bg-brand-dark/10 dark:bg-brand-light/10 flex items-center justify-center transition-colors hover:bg-brand-dark/20 dark:hover:bg-brand-light/20"
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-brand-dark" />
      ) : (
        <Sun className="w-5 h-5 text-brand-light" />
      )}
    </button>
  );
}
