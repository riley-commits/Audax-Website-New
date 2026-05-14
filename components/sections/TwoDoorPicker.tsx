import Link from "next/link";

/**
 * Two-door audience picker — homepage above-the-fold component.
 *
 * Visual + interaction spec locked in design-spec.md:
 * - Typographic doors with eyebrow + headline + supporting line + arrow CTA.
 * - Full-card click target with aria-label.
 * - Hover: border color shift + 8px arrow translate. No drop shadow.
 * - Focus: 2px outline at 4px offset in accent color.
 * - Mobile: cards stack at <768px (handled here via Tailwind md: breakpoint).
 * - prefers-reduced-motion honored via transition-* + motion-safe utilities.
 */

interface Door {
  eyebrow: string;
  headline: string;
  support: string;
  cta: string;
  href: string;
  ariaLabel: string;
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
            className="group bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-sm p-8 md:p-12 min-h-[280px] md:min-h-[320px] flex flex-col justify-between transition-colors duration-200 ease-out hover:border-[var(--color-fg)] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-4 no-underline"
          >
            <div>
              <div className="font-[family-name:var(--font-jetbrains-mono),ui-monospace,SFMono-Regular,Menlo,monospace] text-xs font-medium tracking-[0.12em] uppercase text-[var(--color-fg-muted)] mb-6">
                {d.eyebrow}
              </div>
              <h2 className="font-[family-name:var(--font-outfit)] text-[1.875rem] md:text-[2.25rem] font-semibold leading-tight tracking-tight text-[var(--color-fg)] mb-4 max-w-[14ch]">
                {d.headline}
              </h2>
              <p className="text-base leading-relaxed text-[var(--color-fg-muted)] max-w-[36ch] mb-8">
                {d.support}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-base font-medium text-[var(--color-fg)]">
              {d.cta}
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 ease-out motion-safe:group-hover:translate-x-2"
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
