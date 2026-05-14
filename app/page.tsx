import type { Metadata } from "next";
import Image from "next/image";
import TwoDoorPicker from "@/components/sections/TwoDoorPicker";

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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Audax Ventures",
  url: "https://audaxventures.ca",
  description:
    "Canadian software studio helping founders ship MVPs and helping SMEs bring AI into their business.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Winnipeg",
    addressRegion: "MB",
    addressCountry: "CA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@audaxventures.ca",
    url: "https://calendly.com/audax-ventures/30min",
  },
  sameAs: [
    "https://www.linkedin.com/company/audax-ventures-inc/",
    "https://twitter.com/audaxventures",
  ],
};

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

const metrics = [
  { value: "50+",    label: "Projects shipped" },
  { value: "8–16",   label: "Weeks to MVP" },
  { value: "98%",    label: "On-time delivery" },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* HERO */}
      <section className="mx-auto max-w-[1280px] px-6 md:px-12 pt-16 md:pt-24 pb-8">
        <h1 className="font-[family-name:var(--font-outfit)] text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[1.0] tracking-tight text-[var(--color-fg)] max-w-[14ch] mb-8">
          Canadian Software Studio for Founders and SMEs.
        </h1>
        <p className="text-xl leading-relaxed text-[var(--color-fg-muted)] max-w-[50ch]">
          We build the products you can&apos;t, and audit the AI you should. Winnipeg-based, working coast to coast.
        </p>
      </section>

      {/* TWO-DOOR PICKER */}
      <TwoDoorPicker />

      {/* TRUST STRIP */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg)] py-16 overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 mb-8">
          <div className="font-[family-name:var(--font-jetbrains-mono),ui-monospace,SFMono-Regular,Menlo,monospace] text-xs font-medium tracking-[0.12em] uppercase text-[var(--color-fg-muted)] text-center">
            Builders who trust us
          </div>
        </div>
        <div className="animate-marquee">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <div
              key={`${logo.src}-${i}`}
              className="flex-shrink-0 mx-8 flex items-center opacity-70"
              style={{ height: 32 }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-8 w-auto object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </section>

      {/* METRICS ROW */}
      <section className="mx-auto max-w-[1280px] px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`px-0 md:px-8 ${i > 0 ? "md:border-l md:border-[var(--color-border)] pt-6 md:pt-0 border-t md:border-t-0 border-[var(--color-border)]" : ""}`}
            >
              <div className="font-[family-name:var(--font-outfit)] text-5xl font-bold leading-none tracking-tight tabular-nums text-[var(--color-fg)] mb-2">
                {m.value}
              </div>
              <div className="font-[family-name:var(--font-jetbrains-mono),ui-monospace,SFMono-Regular,Menlo,monospace] text-xs font-medium tracking-[0.12em] uppercase text-[var(--color-fg-muted)]">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-[var(--color-border)] py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`max-w-[800px] mx-auto ${i < testimonials.length - 1 ? "mb-24 pb-24 border-b border-[var(--color-border)]" : ""}`}
            >
              <p className="text-2xl italic leading-snug text-[var(--color-fg)] mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-sm text-[var(--color-fg)]">
                <strong className="font-semibold">{t.name}</strong>{" "}
                <span className="text-[var(--color-fg-muted)]">— {t.role}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA + MAILTO FALLBACK */}
      <section className="border-t border-[var(--color-border)] py-32 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <h2 className="font-[family-name:var(--font-outfit)] text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[var(--color-fg)] max-w-[24ch] mb-8">
            Ready to build something Canadian builders are proud of?
          </h2>
          <a
            href="https://calendly.com/audax-ventures/30min"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-7 py-4 rounded-md font-medium text-base transition-colors duration-200 ease-out no-underline"
          >
            Book a strategy call →
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
        </div>
      </section>
    </>
  );
}
