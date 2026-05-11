"use client";
import { useEffect } from "react";
import { IconDownload, IconX } from "./Icons";

interface ResumeModalProps {
  onClose: () => void;
}

export default function ResumeModal({ onClose }: ResumeModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="resume-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Resume viewer">
      <div className="resume-modal" onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="resume-modal-header">
          <div className="resume-modal-title">
            <span className="dot" aria-hidden="true" />
            Tanmay Chaudhari — Resume
          </div>
          <div className="resume-modal-actions">
            <a
              className="btn btn-sm"
              href="/resume.pdf"
              download="Tanmay-Chaudhari-Resume.pdf"
              aria-label="Download resume"
            >
              <IconDownload /> Download
            </a>
            <button
              className="resume-close-btn"
              onClick={onClose}
              aria-label="Close resume viewer"
            >
              <IconX />
            </button>
          </div>
        </div>

        {/* PDF iframe */}
        <div className="resume-modal-body">
          <iframe
            src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
            className="resume-iframe"
            title="Tanmay Chaudhari Resume"
          />
        </div>

      </div>
    </div>
  );
}
