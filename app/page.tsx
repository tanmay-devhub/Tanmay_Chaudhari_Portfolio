"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import ResumeModal from "@/components/ResumeModal";
import { IconCheck } from "@/components/Icons";

export default function Page() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [cmdOpen, setCmdOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [toast, setToast] = useState({ msg: "", show: false });
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── init theme from localStorage ── */
  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme") as "dark" | "light" | null;
      if (saved) {
        setTheme(saved);
        document.documentElement.setAttribute("data-theme", saved);
      }
    } catch {
      /* no-op */
    }
  }, []);

  /* ── scroll progress ── */
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const pct = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
      setScrollPct(Math.min(pct, 100));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── ⌘K / Ctrl+K ── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCmdOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  /* ── theme toggle ── */
  const toggleTheme = useCallback(() => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch {
        /* no-op */
      }
      return next;
    });
  }, []);

  /* ── toast ── */
  const showToast = useCallback((msg: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ msg, show: true });
    toastTimer.current = setTimeout(
      () => setToast((t) => ({ ...t, show: false })),
      2400
    );
  }, []);

  /* ── scroll to contact ── */
  const scrollToContact = useCallback(() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      {/* scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollPct}%` }}
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuenow={Math.round(scrollPct)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <Nav
        theme={theme}
        onThemeToggle={toggleTheme}
        onCmdOpen={() => setCmdOpen(true)}
      />

      <main>
        <Hero onContactClick={scrollToContact} onResumeClick={() => setResumeOpen(true)} />
        <About />
        <Education />
        <Projects />
        <Experience />
        <Research />
        <Skills />
        <Contact onToast={showToast} />
      </main>

      <Footer />

      {/* command palette */}
      {cmdOpen && <CommandPalette onClose={() => setCmdOpen(false)} />}

      {/* resume modal */}
      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}

      {/* toast */}
      <div
        className={`toast${toast.show ? " show" : ""}`}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="ok">
          <IconCheck />
        </span>
        {toast.msg}
      </div>
    </>
  );
}
