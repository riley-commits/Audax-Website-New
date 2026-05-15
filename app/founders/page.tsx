import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSolutionBySlug } from "@/lib/solutions-data";
import { getServiceBySlug } from "@/lib/services-data";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "For Founders | MVP Build, Fractional Engineering, Advisory",
  description:
    "Audax Ventures helps funded Canadian founders ship MVPs in 8–16 weeks. Fractional engineering leadership, advisory, and capital — not just code.",
  openGraph: {
    title: "Audax Ventures — For Founders",
    description:
      "MVP build, fractional engineering leadership, advisory. We help funded Canadian founders ship.",
    url: "https://audaxventures.ca/founders",
  },
  alternates: { canonical: "https://audaxventures.ca/founders" },
};

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

const offerings = [
  {
    eyebrow: "01 — Build",
    title: "MVP build in 8–16 weeks.",
    body:
      "Fixed scope, fixed timeline, full IP transfer. We ship a production-grade product, not a demo. You own the code.",
    cta: "How MVP development works",
    href: "/services/mvp-development",
  },
  {
    eyebrow: "02 — Lead",
    title: "Fractional engineering leadership.",
    body:
      "Senior CTO-level guidance without the full-time hire. We make the architecture, hiring, and tech-stack calls so you can stay focused on customers.",
    cta: "See CTO-as-a-Service",
    href: "/services/cto-as-a-service",
  },
  {
    eyebrow: "03 — Scale",
    title: "Advisory + capital strategy.",
    body:
      "We sit on the same side of the table. When your MVP traction shows, we help with the next-round narrative, technical due diligence, and scaling decisions.",
    cta: "See the Catalyst program",
    href: "/programs/catalyst-for-founders",
  },
];

export default function FoundersPage() {
  const program = getSolutionBySlug("catalyst-for-founders");
  if (!program) notFound();

  const featuredServices = ["mvp-development", "saas-development", "cto-as-a-service"]
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<ReturnType<typeof getServiceBySlug>> => Boolean(s));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: "https://audaxventures.ca" },
      { "@type": "ListItem", position: 2, name: "Founders", item: "https://audaxventures.ca/founders" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO — slate-blue glow signals "founders" audience accent. */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(900px 600px at 90% 0%, rgba(46,95,138,0.10), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-12 pt-20 md:pt-32 pb-16">
          <FadeIn>
            <div className="font-[family-name:var(--font-jetbrains-mono),ui-monospace,SFMono-Regular,Menlo,monospace] text-xs font-medium tracking-[0.12em] uppercase text-[var(--color-accent)] mb-8">
              For founders
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="font-[family-name:var(--font-outfit)] text-[clamp(2.5rem,5.5vw,5rem)] font-bold leading-[1.05] tracking-tight text-[var(--color-fg)] max-w-[18ch] mb-8">
              MVP Development Studio for Funded Canadian Founders.
            </h1>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="text-xl leading-relaxed text-[var(--color-fg-muted)] max-w-[52ch]">
              We build production-grade MVPs in 8–16 weeks for funded Canadian founders. Fractional engineering leadership, real advisory, and full IP transfer. We sit on the same side of the table.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg)] py-12 overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 mb-6">
          <div className="font-[family-name:var(--font-jetbrains-mono),ui-monospace,SFMono-Regular,Menlo,monospace] text-xs font-medium tracking-[0.12em] uppercase text-[var(--color-fg-muted)] text-center">
            Founders who trust us
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

      {/* OFFERINGS */}
      <section className="mx-auto max-w-[1280px] px-6 md:px-12 py-24">
        <FadeIn>
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-[var(--color-fg)] max-w-[20ch] mb-16">
            Three ways we work with founders.
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((o, i) => (
            <FadeIn key={o.eyebrow} delay={i * 0.08}>
              <div className="flex flex-col h-full">
                <div className="font-[family-name:var(--font-jetbrains-mono),ui-monospace,SFMono-Regular,Menlo,monospace] text-xs font-medium tracking-[0.12em] uppercase text-[var(--color-accent)] mb-4">
                  {o.eyebrow}
                </div>
                <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-semibold leading-tight tracking-tight text-[var(--color-fg)] mb-4">
                  {o.title}
                </h3>
                <p className="text-base leading-relaxed text-[var(--color-fg-muted)] mb-6 flex-1">
                  {o.body}
                </p>
                <Link
                  href={o.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] no-underline group/cta"
                >
                  {o.cta}
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-200 ease-out motion-safe:group-hover/cta:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CATALYST PHASES */}
      <section className="border-t border-[var(--color-border)] py-24 bg-[var(--color-bg-alt)]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <FadeIn>
            <div className="font-[family-name:var(--font-jetbrains-mono),ui-monospace,SFMono-Regular,Menlo,monospace] text-xs font-medium tracking-[0.12em] uppercase text-[var(--color-accent)] mb-6">
              The catalyst program
            </div>
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-[var(--color-fg)] max-w-[28ch] mb-4">
              From validated idea to revenue-generating product.
            </h2>
            <p className="text-lg leading-relaxed text-[var(--color-fg-muted)] max-w-[58ch] mb-16">
              {program.heroSub}
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {program.phases.map((phase, i) => (
              <FadeIn key={phase.number} delay={i * 0.08}>
                <div className="border-t-2 border-[var(--color-accent)] pt-6">
                  <div className="font-[family-name:var(--font-outfit)] text-5xl font-bold leading-none text-[var(--color-fg)] mb-4 tabular-nums">
                    0{phase.number}
                  </div>
                  <h3 className="font-[family-name:var(--font-outfit)] text-xl font-semibold tracking-tight text-[var(--color-fg)] mb-2">
                    {phase.name}
                  </h3>
                  <div className="font-[family-name:var(--font-jetbrains-mono),ui-monospace,SFMono-Regular,Menlo,monospace] text-xs font-medium tracking-[0.12em] uppercase text-[var(--color-fg-muted)] mb-4">
                    {phase.duration}
                  </div>
                  <p className="text-base leading-relaxed text-[var(--color-fg-muted)]">
                    {phase.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/programs/catalyst-for-founders"
              className="inline-flex items-center gap-2 text-base font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] no-underline group/link"
            >
              Read the full Catalyst program
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 ease-out motion-safe:group-hover/link:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="mx-auto max-w-[1280px] px-6 md:px-12 py-24">
        <FadeIn>
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-[var(--color-fg)] max-w-[24ch] mb-16">
            Services founders book most.
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredServices.map((service, i) => (
            <FadeIn key={service.slug} delay={i * 0.06}>
              <Link
                href={`/services/${service.slug}`}
                className="group/svc relative block bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-sm p-8 no-underline transition-all duration-300 ease-out hover:border-[var(--color-accent)] overflow-hidden h-full"
              >
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 h-[2px] w-0 bg-[var(--color-accent)] transition-all duration-300 ease-out group-hover/svc:w-full"
                />
                <h3 className="font-[family-name:var(--font-outfit)] text-xl font-semibold tracking-tight text-[var(--color-fg)] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-fg-muted)] mb-6 line-clamp-3">
                  {service.heroSub}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-fg)] transition-colors duration-300 group-hover/svc:text-[var(--color-accent)]">
                  Learn more
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-200 ease-out motion-safe:group-hover/svc:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA + MAILTO */}
      <section className="relative border-t border-[var(--color-border)] py-32 bg-[var(--color-bg)] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(700px 400px at 100% 50%, rgba(46,95,138,0.08), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-outfit)] text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[var(--color-fg)] max-w-[28ch] mb-8">
              Funded and ready to build? Let&apos;s talk.
            </h2>
            <a
              href="https://calendly.com/audax-ventures/30min"
              className="group inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-7 py-4 rounded-md font-medium text-base transition-all duration-200 ease-out no-underline shadow-sm hover:shadow-md"
            >
              Book a build consult
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
                href="mailto:info@audaxventures.ca"
                className="underline hover:text-[var(--color-fg)]"
              >
                info@audaxventures.ca
              </a>
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
