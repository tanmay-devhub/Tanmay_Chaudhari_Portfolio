"use client";
import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import {
  IconSearch,
  IconGithub,
  IconLinkedin,
  IconMail,
  IconDownload,
  IconResume,
  IconExternalLink,
} from "./Icons";

type SectionItem = {
  kind: "section";
  id: string;
  label: string;
  num: string;
};

type LinkItem = {
  kind: "link";
  label: string;
  url: string;
  Icon: () => React.ReactElement;
  download?: boolean;
  external?: boolean;
};

type Item = SectionItem | LinkItem;

const SECTIONS: SectionItem[] = [
  { kind: "section", id: "about", label: "About", num: "01" },
  { kind: "section", id: "education", label: "Education", num: "02" },
  { kind: "section", id: "projects", label: "Projects", num: "03" },
  { kind: "section", id: "experience", label: "Experience", num: "04" },
  { kind: "section", id: "research", label: "Research", num: "05" },
  { kind: "section", id: "skills", label: "Skills", num: "06" },
  { kind: "section", id: "contact", label: "Contact", num: "07" },
];

const LINKS: LinkItem[] = [
  {
    kind: "link",
    label: "GitHub",
    url: "https://github.com/tanmay-devhub",
    Icon: IconGithub,
    external: true,
  },
  {
    kind: "link",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/tchaudhari2106/",
    Icon: IconLinkedin,
    external: true,
  },
  {
    kind: "link",
    label: "Send Email",
    url: "mailto:tanmay_2106@csu.fullerton.edu",
    Icon: IconMail,
  },
  {
    kind: "link",
    label: "View Resume",
    url: "/resume.pdf",
    Icon: IconResume,
    external: true,
  },
  {
    kind: "link",
    label: "Download Resume",
    url: "/resume.pdf",
    Icon: IconDownload,
    download: true,
  },
];

interface CommandPaletteProps {
  onClose: () => void;
}

export default function CommandPalette({ onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const q = query.toLowerCase();

  const { filteredSections, filteredLinks, items } = useMemo(() => {
    const fSections = SECTIONS.filter(
      (s) =>
        q === "" ||
        s.label.toLowerCase().includes(q) ||
        "navigate".includes(q) ||
        s.num.includes(q)
    );
    const fLinks = LINKS.filter(
      (l) => q === "" || l.label.toLowerCase().includes(q) || "link".includes(q)
    );
    return {
      filteredSections: fSections,
      filteredLinks: fLinks,
      items: [...fSections, ...fLinks] as Item[],
    };
  }, [q]);

  const execute = useCallback(
    (item: Item) => {
      if (item.kind === "section") {
        document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
      } else if (item.download) {
        const a = document.createElement("a");
        a.href = item.url;
        a.download = "Tanmay-Chaudhari-Resume.pdf";
        a.click();
      } else if (item.url.startsWith("mailto:")) {
        window.location.href = item.url;
      } else {
        window.open(item.url, "_blank", "noopener noreferrer");
      }
      onClose();
    },
    [onClose]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIdx((i) => Math.min(i + 1, items.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIdx((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter" && items[activeIdx]) {
        execute(items[activeIdx]);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [items, activeIdx, execute, onClose]);

  useEffect(() => {
    setActiveIdx(0);
  }, [query]);

  const sectionCount = filteredSections.length;

  return (
    <div
      className="cmdk-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal
      aria-label="Command palette"
    >
      <div className="cmdk" onClick={(e) => e.stopPropagation()}>
        <div className="cmdk-input-wrap">
          <IconSearch />
          <input
            ref={inputRef}
            className="cmdk-input"
            placeholder="Search sections and links..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search"
          />
          <span className="cmdk-hint">esc</span>
        </div>

        <div className="cmdk-list" ref={listRef} role="listbox" aria-label="Results">
          {filteredSections.length > 0 && (
            <>
              <div className="cmdk-section">Navigate</div>
              {filteredSections.map((s, i) => (
                <div
                  key={s.id}
                  className={`cmdk-item${activeIdx === i ? " active" : ""}`}
                  onClick={() => execute(s)}
                  role="option"
                  aria-selected={activeIdx === i}
                  onMouseEnter={() => setActiveIdx(i)}
                >
                  <span className="icon">
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        color: "var(--text-faint)",
                      }}
                    >
                      {s.num}
                    </span>
                  </span>
                  {s.label}
                  <span className="num">↵</span>
                </div>
              ))}
            </>
          )}

          {filteredLinks.length > 0 && (
            <>
              <div className="cmdk-section">Links</div>
              {filteredLinks.map((l, i) => {
                const idx = sectionCount + i;
                return (
                  <div
                    key={l.label}
                    className={`cmdk-item${activeIdx === idx ? " active" : ""}`}
                    onClick={() => execute(l)}
                    role="option"
                    aria-selected={activeIdx === idx}
                    onMouseEnter={() => setActiveIdx(idx)}
                  >
                    <span className="icon">
                      <l.Icon />
                    </span>
                    {l.label}
                    <span className="num">
                      {l.download ? "↓" : l.external ? "↗" : "↵"}
                    </span>
                  </div>
                );
              })}
            </>
          )}

          {items.length === 0 && (
            <div
              className="cmdk-item"
              style={{ justifyContent: "center", color: "var(--text-faint)" }}
            >
              <IconExternalLink />
              No results for &ldquo;{query}&rdquo;
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
