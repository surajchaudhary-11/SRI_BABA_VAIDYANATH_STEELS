"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "bbs-theme";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  const applyTheme = (next: Theme) => {
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.style.colorScheme = next;
    localStorage.setItem(STORAGE_KEY, next);
    setTheme(next);
  };

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial: Theme = saved === "light" || saved === "dark" ? saved : systemDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", initial);
    document.documentElement.style.colorScheme = initial;
    setTheme(initial);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "day" : "night"} mode`}
      className="theme-toggle"
      onClick={() => applyTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "Day" : "Night"}
    </button>
  );
}
