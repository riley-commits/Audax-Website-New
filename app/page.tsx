import type { Metadata } from "next";
import Image from "next/image";
import TwoDoorPicker from "@/components/sections/TwoDoorPicker";
import { FadeIn } from "@/components/ui/FadeIn";
import { CountUp } from "@/components/ui/CountUp";

export const metadata: Metadata = {
  title:
    "Audax Ventures — Canadian Software Studio for Founders and SMEs",
  description:
    "Canadian software studio. We build MVPs for funded founders and bring AI into Canadian SMEs. Winnipeg-based, working coast to coast.",
  openGraph: {
    title:
      "Audax Ventures — Canadian Software Studio for Founders and SMEs",
    description:
      "We build the products you can't, and audit the AI you should. Winnipeg-based, working coast to coast.",
    url: "https://audaxventures.ca",
  },
  alternates: { canonical: "https://audaxventures.ca" },
};

// Organization JSON-LD now lives in app/layout.tsx so every page emits it.

// Trust strip — real client logos from /public/logos/. Duplicated so the
// marquee animation can loop seamlessly via -50% translate.
const clientLogos = [
  { src: "/logos/fundeze.png",          alt: "FundEze",         width: 120, height: 32 },
  { src: "/logos/migrateezy.png",       alt: "Migrateezy",      width: 120, height: 32 },
  { src: "/logos/linkglobal.avif",      alt: "LinkGlobal",      width: 120, height: 32 },
  { src: "/logos/greenglam-tech.png",   alt: "GreenGlam Tech",  width: 120, height: 32 },
  { src: "/logos/h2mb.avif",            alt: "H2MB",            width: 120, height: 32 },
  { src: "/logos/assessteam.svg",       alt: "AssessTeam",      width: 120, height: 32 },
  { src: "/logos/elkhorn-resort.avif",  alt: "Elkhorn Resort",  width: 120, height: 32 },
  { src: "/logos/clear-lake-golf.avif", alt: "Clear Lake Golf", width: 120, height: 32 },
];

// CountUp metrics: SSR renders `display`, animation runs after in-view.
const metrics = [
  { value: 50,   display: "50+",  suffix: "+",  label: "Projects shipped" },
  { value: 16,   display: "8–16", suffix: "",   label: "Weeks to MVP"     },
  { value: 98,   display: "98%",  suffix: "%",  label: "On-time delivery" },
];

// Testimonial quotes are placeholders. Replace with real, attributed
// quotes (with permission) before launch. Each quote should reference a
// specific outcome with numbers.
const testimonials = [
  {
    quote:
      "[Placeholder quote — founder voice. Specific outcome. Numbers. ~20 words.]",
    name: "[Real name]",
    role: "[Title], [Company]",
  },
  {
    quote:
      "[Placeholder quote — SME operator voice. Mentions AI specifically. ~20 words.]",
    name: "[Real name]",
    role: "[Title], [Company]",
  },
  {
    quote:
      "[Placeholder quote — different angle (fractional exec, on-time delivery, IP transfer). ~20 words.]",
    name: "[Real name]",
    role: "[Title], [Company]",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — subtle slate-blue glow in top-right + warm-white wash to add depth without slop. */}
      <section className="relative overflow-hidden">
        {/* Decorative gradient layer — kept subtle (≤6% opacity), no decoration shapes. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(900px 600px at 90% 0%, rgba(58,123,213,0.08), transparent 60%), radial-gradient(700px 500px at 0% 100%, rgba(46,95,138,0.05), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-12 pt-20 md:pt-32 pb-12">
          <FadeIn>
            <div className="font-[family-name:var(--font-jetbrains-mono),ui-monospace,SFMono-Regular,Menlo,monospace] text-xs font-medium tracking-[0.12em] uppercase text-[var(--color-fg-muted)] mb-8">
              Winnipeg, Manitoba · Working coast to coast
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="font-[family-name:var(--font-outfit)] text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[1.0] tracking-tight text-[var(--color-fg)] max-w-[14ch] mb-8">
              Canadian Software Studio for{" "}
              <span className="text-[var(--color-accent)]">Founders</span> and{" "}
              <span className="text-[var(--color-accent-secondary)]">SMEs</span>.
            </h1>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="text-xl leading-relaxed text-[var(--color-fg-muted)] max-w-[50ch]">
              We build the products you can&apos;t, and audit the AI you should.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* TWO-DOOR PICKER */}
      <FadeIn delay={0.18}>
        <TwoDoorPicker />
      </FadeIn>

      {/* TRUST STRIP */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg)] py-16 overflow-hidden">
        <FadeIn>
          <div className="mx-auto max-w-[1280px] px-6 md:px-12 mb-8">
            <div className="font-[family-name:var(--font-jetbrains-mono),ui-monospace,SFMono-Regular,Menlo,monospace] text-xs font-medium tracking-[0.12em] uppercase text-[var(--color-fg-muted)] text-center">
              Builders who trust us
            </div>
          </div>
        </FadeIn>
        <div className="animate-marquee">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <div
              key={`${logo.src}-${i}`}
              className="flex-shrink-0 mx-8 flex items-center opacity-60 hover:opacity-100 transition-opacity duration-300"
              style={{ height: 32 }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* METRICS ROW — animated count-up on scroll-in. */}
      <section className="mx-auto max-w-[1280px] px-6 md:px-12 py-24">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`px-0 md:px-8 ${i > 0 ? "md:border-l md:border-[var(--color-border)] pt-6 md:pt-0 border-t md:border-t-0 border-[var(--color-border)]" : ""}`}
              >
                <CountUp
                  value={m.value}
                  display={m.display}
                  suffix={m.suffix}
                  className="block font-[family-name:var(--font-outfit)] text-5xl md:text-6xl font-bold leading-none tracking-tight tabular-nums text-[var(--color-fg)] mb-3"
                />
                <div className="font-[family-name:var(--font-jetbrains-mono),ui-monospace,SFMono-Regular,Menlo,monospace] text-xs font-medium tracking-[0.12em] uppercase text-[var(--color-fg-muted)]">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-[var(--color-border)] py-24 bg-[var(--color-bg-alt)]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div
                className={`max-w-[800px] mx-auto ${i < testimonials.length - 1 ? "mb-24 pb-24 border-b border-[var(--color-border)]" : ""}`}
              >
                <span
                  aria-hidden="true"
                  className="block font-[family-name:var(--font-outfit)] text-6xl font-bold leading-none text-[var(--color-accent)] mb-4 select-none"
                >
                  &ldquo;
                </span>
                <p className="text-2xl italic leading-snug text-[var(--color-fg)] mb-6">
                  {t.quote}
                </p>
                <p className="text-sm text-[var(--color-fg)]">
                  <strong className="font-semibold">{t.name}</strong>{" "}
                  <span className="text-[var(--color-fg-muted)]">— {t.role}</span>
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FINAL CTA + MAILTO FALLBACK */}
      <section className="relative border-t border-[var(--color-border)] py-32 bg-[var(--color-bg)] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(700px 400px at 100% 50%, rgba(46,95,138,0.06), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-outfit)] text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[var(--color-fg)] max-w-[24ch] mb-8">
              Ready to build something Canadian builders are proud of?
            </h2>
            <a
              href="https://calendly.com/audax-ventures/30min"
              className="group inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-7 py-4 rounded-md font-medium text-base transition-all duration-200 ease-out no-underline shadow-sm hover:shadow-md"
            >
              Book a strategy call
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 ease-out motion-safe:group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <p className="mt-4 text-sm text-[var(--color-fg-muted)]">
              Or email{" "}
              <a
                href="mailto:hello@audaxventures.ca"
                className="underline hover:text-[var(--color-fg)]"
              >
                hello@audaxventures.ca
              </a>
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
