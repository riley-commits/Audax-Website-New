import Link from "next/link";

/**
 * Two-door audience picker — homepage above-the-fold component.
 *
 * Visual + interaction spec locked in design-spec.md:
 * - Typographic doors with eyebrow + headline + supporting line + arrow CTA.
 * - Full-card click target with aria-label.
 * - Hover: border color shift to audience accent + 8px arrow translate.
 *   No drop shadow.
 * - Focus: 2px outline at 4px offset in accent color.
 * - Mobile: cards stack at <768px (handled via Tailwind md: breakpoint).
 * - prefers-reduced-motion honored via motion-safe utilities.
 *
 * Audience-specific accents (added in polish pass):
 * - Founders door → slate blue (--color-accent)
 * - AI-for-SME door → emerald (--color-accent-secondary)
 * Continuity with the hero, where "Founders" is slate and "SMEs" is emerald.
 */

interface Door {
  eyebrow: string;
  headline: string;
  support: string;
  cta: string;
  href: string;
  ariaLabel: string;
  accentVar: string; // CSS variable name for this door's accent color
  accentTintRgb: string; // rgb triplet for the subtle hover tint
}

const doors: Door[] = [
  {
    eyebrow: "For founders",
    headline: "I'm building a new product.",
    support:
      "MVP build, fractional engineering leadership, launch in 8–16 weeks.",
    cta: "See how we work",
    href: "/founders",
    ariaLabel: "For founders: I'm building a new product",
    accentVar: "--color-accent",
    accentTintRgb: "46, 95, 138",
  },
  {
    eyebrow: "For SME operators",
    headline: "I'm bringing AI into my business.",
    support:
      "Audit, roadmap, and implementation for Canadian small and mid-sized businesses.",
    cta: "Start with an audit",
    href: "/ai-for-sme",
    ariaLabel:
      "For SME operators: I'm bringing AI into my business",
    accentVar: "--color-accent-secondary",
    accentTintRgb: "6, 95, 70",
  },
];

export default function TwoDoorPicker() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 md:px-12 pb-24 pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {doors.map((d) => (
          <Link
            key={d.href}
            href={d.href}
            aria-label={d.ariaLabel}
            className="group/door relative bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-sm p-8 md:p-12 min-h-[280px] md:min-h-[320px] flex flex-col justify-between transition-all duration-300 ease-out focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 no-underline overflow-hidden"
            style={
              {
                ["--door-accent" as string]: `var(${d.accentVar})`,
                ["--door-accent-tint" as string]: `rgba(${d.accentTintRgb}, 0.04)`,
              } as React.CSSProperties
            }
          >
            {/* Subtle corner glow on hover — accent color, 4% opacity radial.
                Sits behind content via -z-10. */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 ease-out group-hover/door:opacity-100"
              style={{
                background:
                  "radial-gradient(600px 400px at 100% 0%, var(--door-accent-tint), transparent 65%)",
              }}
            />

            {/* Top accent bar — invisible by default, slides in on hover. */}
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 h-[2px] w-0 bg-[var(--door-accent)] transition-all duration-300 ease-out group-hover/door:w-full"
            />

            <div className="relative">
              <div className="font-[family-name:var(--font-jetbrains-mono),ui-monospace,SFMono-Regular,Menlo,monospace] text-xs font-medium tracking-[0.12em] uppercase text-[var(--door-accent)] mb-6 transition-colors duration-300">
                {d.eyebrow}
              </div>
              <h2 className="font-[family-name:var(--font-outfit)] text-[1.875rem] md:text-[2.25rem] font-semibold leading-tight tracking-tight text-[var(--color-fg)] mb-4 max-w-[14ch]">
                {d.headline}
              </h2>
              <p className="text-base leading-relaxed text-[var(--color-fg-muted)] max-w-[36ch] mb-8">
                {d.support}
              </p>
            </div>
            <span className="relative inline-flex items-center gap-2 text-base font-medium text-[var(--color-fg)] transition-colors duration-300 group-hover/door:text-[var(--door-accent)]">
              {d.cta}
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 ease-out motion-safe:group-hover/door:translate-x-2"
              >
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
