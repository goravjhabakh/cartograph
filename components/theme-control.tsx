"use client";

import { useState } from "react";

const storageKey = "cartograph-theme";
const themes = ["system", "light", "dark"] as const;

type Theme = (typeof themes)[number];

function isTheme(value: string | null): value is Theme {
  return value !== null && themes.includes(value as Theme);
}

export function ThemeControl() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "system";
    }

    const savedTheme = localStorage.getItem(storageKey);
    return isTheme(savedTheme) ? savedTheme : "system";
  });

  function changeTheme(nextTheme: Theme) {
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem(storageKey, nextTheme);
    setTheme(nextTheme);
  }

  return (
    <label className="flex items-center gap-2 font-mono text-xs text-[var(--muted)]">
      <span className="sr-only">Theme</span>
      <select
        aria-label="Theme"
        className="h-8 border border-[var(--border)] bg-[var(--surface)] px-2 text-[var(--foreground)] outline-none focus:border-[var(--accent)]"
        onChange={(event) => changeTheme(event.target.value as Theme)}
        value={theme}
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  );
}
