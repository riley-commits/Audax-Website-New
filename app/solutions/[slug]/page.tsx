import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import CTABanner from "@/components/layout/CTABanner";
import { getSolutionBySlug, getAllSolutionSlugs } from "@/lib/solutions-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};
  return {
    title: solution.metaTitle,
    description: solution.metaDescription,
    alternates: { canonical: `https://audaxventures.ca/solutions/${slug}` },
    openGraph: { title: solution.metaTitle, description: solution.metaDescription },
  };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: solution.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#F8F9FA] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2E5F8A]/10 text-[#2E5F8A] text-xs font-semibold mb-6 uppercase tracking-widest">
            Solution Program
          </div>
          <h1 className="font-[var(--font-outfit)] font-extrabold text-4xl sm:text-5xl text-[#1A1A2E] mb-5">
            {solution.heroTitle}
          </h1>
          <p className="text-[#6B7280] text-lg leading-relaxed mb-8">{solution.heroSub}</p>
          <Link
            href="https://calendly.com/audax-ventures/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2E5F8A] text-white font-bold hover:bg-[#3A7BD5] transition-colors"
          >
            Book a Free Strategy Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Description */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#6B7280] text-lg leading-relaxed">{solution.description}</p>
        </div>
      </section>

      {/* Phases */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl text-[#1A1A2E] mb-12 text-center">
            The Program Phases
          </h2>
          <div className="space-y-8">
            {solution.phases.map((phase, i) => (
              <div
                key={phase.name}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 text-center md:text-left">
                    <div className="inline-flex flex-col items-center">
                      <span className="text-4xl mb-2">{phase.icon}</span>
                      <span className="font-[var(--font-outfit)] font-extrabold text-3xl text-[#2E5F8A]/20">
                        0{phase.number}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-[var(--font-outfit)] font-extrabold text-2xl text-[#1A1A2E]">
                        Phase {phase.number}: {phase.name}
                      </h3>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8F9FA] border border-gray-200 text-xs text-[#6B7280]">
                        <Clock size={12} /> {phase.duration}
                      </div>
                    </div>
                    <p className="text-[#6B7280] leading-relaxed mb-5">{phase.description}</p>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#1A1A2E] mb-3">Deliverables</p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {phase.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-[#6B7280]">
                            <CheckCircle2 size={14} className="text-[#2E5F8A] mt-0.5 flex-shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl text-[#1A1A2E] mb-8 text-center">
            Who This Program Is For
          </h2>
          <div className="space-y-3">
            {solution.whoItsFor.map((w) => (
              <div key={w} className="flex items-center gap-3 bg-[#F8F9FA] rounded-xl px-5 py-3">
                <CheckCircle2 size={18} className="text-[#2E5F8A] flex-shrink-0" />
                <span className="text-[#1A1A2E] text-sm">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-14 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-outfit)] font-extrabold text-2xl text-[#1A1A2E] mb-8 text-center">
            What Makes This Different
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {solution.differentiators.map((d) => (
              <div key={d} className="flex items-start gap-3 bg-white rounded-2xl px-5 py-4 border border-gray-100">
                <CheckCircle2 size={18} className="text-[#2E5F8A] mt-0.5 flex-shrink-0" />
                <span className="text-[#1A1A2E] text-sm">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl text-[#1A1A2E] mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {solution.faq.map((f) => (
              <div key={f.q} className="bg-[#F8F9FA] rounded-2xl p-6">
                <h3 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] mb-2">{f.q}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
