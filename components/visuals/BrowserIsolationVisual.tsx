"use client";
import { useState, useEffect } from "react";

export default function BrowserIsolationVisual() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTick((v) => v + 1), 1400);
    return () => clearInterval(t);
  }, []);

  const pods = [0, 1, 2, 3];

  return (
    <svg viewBox="0 0 600 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id="bi-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="var(--grid)" strokeWidth="1" />
        </pattern>
        <linearGradient id="bi-glow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="600" height="260" fill="url(#bi-grid)" />
      <g transform="translate(50, 100)">
        <rect width="120" height="60" rx="8" fill="var(--bg-card)" stroke="var(--border-strong)" />
        <text x="60" y="26" fontFamily="var(--font-mono)" fontSize="10" fill="var(--text-mute)" textAnchor="middle">orchestrator</text>
        <text x="60" y="44" fontFamily="var(--font-mono)" fontSize="9" fill="var(--accent)" textAnchor="middle">go · k8s</text>
        <circle cx="110" cy="10" r="3" fill="var(--accent)">
          <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" />
        </circle>
      </g>
      {pods.map((i) => {
        const y = 30 + i * 50;
        const active = tick % 4 === i;
        return (
          <g key={i}>
            <path
              d={`M 170 130 C 230 130, 280 ${y + 18}, 350 ${y + 18}`}
              fill="none"
              stroke="var(--border)"
              strokeWidth="1"
            />
            {active && (
              <path
                d={`M 170 130 C 230 130, 280 ${y + 18}, 350 ${y + 18}`}
                fill="none"
                stroke="url(#bi-glow)"
                strokeWidth="2"
                strokeDasharray="6 200"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="-200" dur="1.4s" repeatCount="indefinite" />
              </path>
            )}
            <g transform={`translate(350, ${y})`}>
              <rect
                width="180"
                height="36"
                rx="6"
                fill="var(--bg-card)"
                stroke={active ? "var(--accent)" : "var(--border)"}
                strokeWidth={active ? 1.5 : 1}
              />
              <circle cx="14" cy="18" r="4" fill={active ? "var(--accent)" : "var(--text-faint)"} />
              <text x="28" y="16" fontFamily="var(--font-mono)" fontSize="9" fill="var(--text-mute)">
                chromium-pod-{i}
              </text>
              <text x="28" y="28" fontFamily="var(--font-mono)" fontSize="8" fill="var(--text-faint)">
                webrtc · isolated
              </text>
              <rect x="150" y="10" width="22" height="16" rx="3" fill="var(--bg-elev)" stroke="var(--border)" />
              <text x="161" y="21" fontFamily="var(--font-mono)" fontSize="7" fill="var(--text-faint)" textAnchor="middle">
                {(120 + i * 13) % 100}%
              </text>
            </g>
          </g>
        );
      })}
    </svg>
  );
}
