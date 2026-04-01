"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "story", label: "Story" },
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "logo", label: "Logo" },
  { id: "personality", label: "Personality" },
  { id: "ui-preview", label: "UI Preview" },
];

export function Nav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="group flex items-center gap-2"
          aria-label={s.label}
        >
          <span className="text-xs text-brand-dark/0 dark:text-brand-light/0 group-hover:text-brand-dark/60 dark:group-hover:text-brand-light/60 transition-all whitespace-nowrap">
            {s.label}
          </span>
          <span
            className={`block rounded-full transition-all ${
              active === s.id
                ? "w-3 h-3 bg-brand-primary"
                : "w-2 h-2 bg-brand-dark/20 dark:bg-brand-light/20 group-hover:bg-brand-primary/50"
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
