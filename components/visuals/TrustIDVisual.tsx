"use client";
import { useState, useEffect } from "react";

export default function TrustIDVisual() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTick((v) => (v + 1) % 3), 1600);
    return () => clearInterval(t);
  }, []);

  const BLOCKS = [
    { x: 30, hash: "0xa3f1…c8d2", label: "Genesis" },
    { x: 180, hash: "0x7b2e…f391", label: "Identity" },
    { x: 330, hash: "0xc91d…44ab", label: "Verified" },
    { x: 480, hash: "0x3ef8…b07c", label: "Sealed" },
  ];

  const ROLES = [
    { label: "Applicant", icon: "👤", y: 30 },
    { label: "Employer", icon: "🏢", y: 110 },
    { label: "Institution", icon: "🎓", y: 190 },
  ];

  return (
    <svg viewBox="0 0 700 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id="tid-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="var(--grid)" strokeWidth="1" />
        </pattern>
        <linearGradient id="tid-glow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="700" height="260" fill="url(#tid-grid)" />

      {/* blockchain row */}
      {BLOCKS.map((b, i) => {
        const isActive = tick === i % 3;
        return (
          <g key={b.hash}>
            {/* connector line */}
            {i > 0 && (
              <line
                x1={BLOCKS[i - 1].x + 120}
                y1={60}
                x2={b.x}
                y2={60}
                stroke="var(--border-strong)"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
            )}
            {isActive && i > 0 && (
              <line
                x1={BLOCKS[i - 1].x + 120}
                y1={60}
                x2={b.x}
                y2={60}
                stroke="url(#tid-glow)"
                strokeWidth="2"
              >
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" repeatCount="indefinite" />
              </line>
            )}
            {/* block */}
            <rect
              x={b.x}
              y={30}
              width={120}
              height={60}
              rx="6"
              fill="var(--bg-card)"
              stroke={isActive ? "var(--accent)" : "var(--border)"}
              strokeWidth={isActive ? 1.5 : 1}
            />
            <text x={b.x + 10} y={50} fontFamily="var(--font-mono)" fontSize="8" fill="var(--text-faint)">
              {b.label}
            </text>
            <text x={b.x + 10} y={65} fontFamily="var(--font-mono)" fontSize="8" fill={isActive ? "var(--accent)" : "var(--text-mute)"}>
              {b.hash}
            </text>
            {isActive && (
              <circle cx={b.x + 108} cy={36} r="4" fill="var(--accent)">
                <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" />
              </circle>
            )}
          </g>
        );
      })}

      {/* role cards — right side */}
      {ROLES.map((r, i) => {
        const active = tick === i % 3;
        return (
          <g key={r.label} transform={`translate(590, ${r.y})`}>
            <rect
              width="90"
              height="32"
              rx="6"
              fill="var(--bg-card)"
              stroke={active ? "var(--accent)" : "var(--border)"}
              strokeWidth={active ? 1.5 : 1}
            />
            <text x="10" y="14" fontFamily="var(--font-sans)" fontSize="9" fill="var(--text-faint)">{r.icon}</text>
            <text x="26" y="15" fontFamily="var(--font-mono)" fontSize="9" fill={active ? "var(--accent)" : "var(--text-mute)"}>{r.label}</text>
            <text x="26" y="26" fontFamily="var(--font-mono)" fontSize="7" fill="var(--text-faint)">{active ? "verified ✓" : "pending…"}</text>
          </g>
        );
      })}

      {/* IPFS badge */}
      <g transform="translate(30, 150)">
        <rect width="160" height="46" rx="6" fill="var(--bg-card)" stroke="var(--border)" />
        <text x="12" y="18" fontFamily="var(--font-mono)" fontSize="8" fill="var(--text-faint)">IPFS · Pinata storage</text>
        <text x="12" y="34" fontFamily="var(--font-mono)" fontSize="9" fill="var(--text-mute)">resume.pdf → ipfs://Qm…</text>
      </g>

      {/* MetaMask badge */}
      <g transform="translate(210, 150)">
        <rect width="140" height="46" rx="6" fill="var(--bg-card)" stroke="var(--border)" />
        <text x="12" y="18" fontFamily="var(--font-mono)" fontSize="8" fill="var(--text-faint)">MetaMask · Web3.js</text>
        <text x="12" y="34" fontFamily="var(--font-mono)" fontSize="9" fill="var(--accent)">Ethereum Mainnet</text>
      </g>

      {/* Smart contract badge */}
      <g transform="translate(370, 150)">
        <rect width="160" height="46" rx="6" fill="var(--bg-card)" stroke="var(--border)" />
        <text x="12" y="18" fontFamily="var(--font-mono)" fontSize="8" fill="var(--text-faint)">Solidity · Truffle</text>
        <text x="12" y="34" fontFamily="var(--font-mono)" fontSize="9" fill="var(--text-mute)">smart contract auth</text>
      </g>

      {/* MongoDB badge */}
      <g transform="translate(550, 150)">
        <rect width="120" height="46" rx="6" fill="var(--bg-card)" stroke="var(--border)" />
        <text x="12" y="18" fontFamily="var(--font-mono)" fontSize="8" fill="var(--text-faint)">MongoDB</text>
        <text x="12" y="34" fontFamily="var(--font-mono)" fontSize="9" fill="var(--text-mute)">dual-ledger sync</text>
      </g>
    </svg>
  );
}
