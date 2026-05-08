import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, Users } from "lucide-react";
import CTABanner from "@/components/layout/CTABanner";
import {
  getIndustryBySlug,
  getAllIndustrySlugs,
  industriesData,
} from "@/lib/industries-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: { canonical: `https://audaxventures.ca/industries/${slug}` },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `https://audaxventures.ca/industries/${slug}`,
    },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industry.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://audaxventures.ca" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://audaxventures.ca/industries" },
      { "@type": "ListItem", position: 3, name: industry.title, item: `https://audaxventures.ca/industries/${slug}` },
    ],
  };

  // Related industries (exclude current)
  const relatedIndustries = industriesData
    .filter((i) => i.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* ── Breadcrumb ── */}
      <div className="pt-24 pb-0 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#6B7280]">
            <Link href="/" className="hover:text-[#2E5F8A] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-[#2E5F8A] transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-[#1A1A2E] font-medium">{industry.title}</span>
          </nav>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="pt-8 pb-20 bg-gradient-to-b from-[#F8F9FA] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-6">{industry.icon}</div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2E5F8A]/10 text-[#2E5F8A] text-xs font-semibold mb-5 uppercase tracking-widest">
            {industry.title}
          </div>
          <h1 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1A2E] mb-5 leading-tight">
            {industry.heroTitle}
          </h1>
          <p className="text-[#6B7280] text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            {industry.heroSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="https://calendly.com/audax-ventures/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2E5F8A] text-white font-bold hover:bg-[#3A7BD5] transition-colors"
            >
              Book a Free Strategy Call <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-[#2E5F8A] text-[#2E5F8A] font-bold hover:bg-[#2E5F8A] hover:text-white transition-colors"
            >
              Tell Us About Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="py-12 bg-[#2E5F8A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industry.caseHighlights.map((h) => (
              <div key={h.label} className="text-center">
                <div className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-white mb-2 tabular-nums">
                  {h.stat}
                </div>
                <div className="text-blue-200 text-xs font-medium leading-tight">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-outfit)] font-extrabold text-2xl sm:text-3xl text-[#1A1A2E] mb-8 text-center">
            The {industry.title} Software Challenge
          </h2>
          {industry.overview.split("\n\n").map((para, i) => (
            <p key={i} className="text-[#6B7280] text-base leading-relaxed mb-5 last:mb-0">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* ── Challenges ── */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[10px] font-bold tracking-widest uppercase text-[#6B7280] mb-3">Pain Points We Solve</p>
            <h2 className="font-[var(--font-outfit)] font-extrabold text-2xl sm:text-3xl text-[#1A1A2E]">
              What&apos;s Holding {industry.title} Companies Back
            </h2>
          </div>
          <div className="space-y-4">
            {industry.challenges.map((challenge, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-2xl px-6 py-5 border border-gray-100 hover:border-amber-200 hover:shadow-sm transition-all duration-200"
              >
                <AlertTriangle size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-[#374151] text-sm leading-relaxed">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solutions ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[10px] font-bold tracking-widest uppercase text-[#2E5F8A] mb-3">What We Build</p>
            <h2 className="font-[var(--font-outfit)] font-extrabold text-2xl sm:text-3xl text-[#1A1A2E]">
              {industry.title} Solutions We Deliver
            </h2>
            <p className="text-[#6B7280] mt-4 max-w-xl mx-auto text-sm">
              Purpose-built software for the specific operational and compliance realities of your industry.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.solutions.map((sol) => (
              <div
                key={sol.title}
                className="bg-[#F8F9FA] rounded-2xl p-7 border border-gray-100 hover:border-[#2E5F8A]/30 hover:shadow-md transition-all duration-200 group"
              >
                <div className="text-3xl mb-4">{sol.icon}</div>
                <h3 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] mb-3 group-hover:text-[#2E5F8A] transition-colors">
                  {sol.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{sol.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Serve ── */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users size={32} className="text-[#2E5F8A] mx-auto mb-4" />
            <h2 className="font-[var(--font-outfit)] font-extrabold text-2xl sm:text-3xl text-[#1A1A2E]">
              Who We Serve in {industry.title}
            </h2>
          </div>
          <div className="space-y-3">
            {industry.whoWeServe.map((who, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100"
              >
                <CheckCircle2 size={18} className="text-[#2E5F8A] flex-shrink-0 mt-0.5" />
                <span className="text-[#374151] text-sm leading-relaxed">{who}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA mid-page ── */}
      <section className="py-20 bg-[#1A1A2E]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl mb-6">{industry.icon}</div>
          <h2 className="font-[var(--font-outfit)] font-extrabold text-2xl sm:text-3xl text-white mb-4">
            Ready to Build for {industry.title}?
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            {industry.tagline} Book a free 30-minute strategy call — we&apos;ll walk through your specific requirements, timeline, and budget.
          </p>
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

      {/* ── FAQ ── */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-outfit)] font-extrabold text-2xl sm:text-3xl text-[#1A1A2E] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {industry.faq.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#2E5F8A]/20 hover:shadow-sm transition-all">
                <h3 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] mb-3 text-base">
                  {f.q}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Industries ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-outfit)] font-bold text-xl text-[#1A1A2E] mb-8 text-center">
            Other Industries We Serve
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {relatedIndustries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group flex items-start gap-4 bg-[#F8F9FA] rounded-2xl p-5 border border-gray-100 hover:border-[#2E5F8A] hover:shadow-md transition-all duration-200"
              >
                <span className="text-2xl flex-shrink-0">{ind.icon}</span>
                <div>
                  <p className="font-[var(--font-outfit)] font-bold text-sm text-[#1A1A2E] mb-1 group-hover:text-[#2E5F8A] transition-colors">
                    {ind.title}
                  </p>
                  <p className="text-xs text-[#6B7280] leading-snug line-clamp-2">{ind.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E5F8A] hover:text-[#3A7BD5] transition-colors"
            >
              View all industries <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
