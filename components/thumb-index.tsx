"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/lib/mock-data";

export function ThumbIndex() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.05, 0.25, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="thumb-index" aria-label="Índice del muestrario">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          data-active={active === item.id}
          aria-current={active === item.id ? "true" : undefined}
        >
          <span aria-hidden="true">{item.code}</span>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
