"use client";
import { useState, useEffect } from "react";
import { IconSun, IconMoon, IconSearch, IconDownload } from "./Icons";

const LINKS = [
  { href: "#about", label: "About", num: "01" },
  { href: "#education", label: "Education", num: "02" },
  { href: "#projects", label: "Projects", num: "03" },
  { href: "#experience", label: "Experience", num: "04" },
  { href: "#skills", label: "Skills", num: "06" },
  { href: "#contact", label: "Contact", num: "07" },
];

interface NavProps {
  theme: "dark" | "light";
  onThemeToggle: () => void;
  onCmdOpen: () => void;
}

export default function Nav({ theme, onThemeToggle, onCmdOpen }: NavProps) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive("#" + entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="nav-brand">
        <span className="dot" aria-hidden="true" />
        tc.
      </div>

      <div className="nav-links">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={active === l.href ? "active" : ""}
            aria-current={active === l.href ? "page" : undefined}
          >
            <span className="num">{l.num}</span>
            {l.label}
          </a>
        ))}
      </div>

      <div className="nav-actions">
        <button
          className="nav-icon-btn"
          onClick={onCmdOpen}
          title="Command palette (⌘K)"
          aria-label="Open command palette"
        >
          <IconSearch />
        </button>
        <button
          className="nav-icon-btn"
          onClick={onThemeToggle}
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? <IconSun /> : <IconMoon />}
        </button>
        <a
          className="nav-icon-btn"
          href="/resume.pdf"
          download="Tanmay-Chaudhari-Resume.pdf"
          title="Download resume"
          aria-label="Download resume PDF"
        >
          <IconDownload />
        </a>
      </div>
    </nav>
  );
}
