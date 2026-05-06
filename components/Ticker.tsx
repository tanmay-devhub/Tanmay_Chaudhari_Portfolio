import { IconSpark } from "./Icons";

const ITEMS = [
  "Open to New Grad SWE roles",
  "AI / LLM Systems",
  "Backend Engineering",
  "Distributed Systems",
  "Full-Stack Engineering",
  "Cloud Infrastructure",
  "Available May 2026",
];

const doubled = [...ITEMS, ...ITEMS];

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {doubled.map((t, i) => (
          <span className="ticker-item" key={i}>
            <span className="star">
              <IconSpark />
            </span>
            <span>{t}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
