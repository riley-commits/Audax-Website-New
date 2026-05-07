import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CTABanner from "@/components/layout/CTABanner";
import { getServiceBySlug, getAllServiceSlugs, servicesData } from "@/lib/services-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://audaxventures.ca/services/${slug}` },
    openGraph: { title: service.metaTitle, description: service.metaDescription, url: `https://audaxventures.ca/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((f) => ({
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
      { "@type": "ListItem", position: 2, name: "Services", item: "https://audaxventures.ca/services/mvp-development" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://audaxventures.ca/services/${slug}` },
    ],
  };

  const related = service.relatedServices
    .map((s) => servicesData.find((d) => d.slug === s))
    .filter(Boolean);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#F8F9FA] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2E5F8A]/10 text-[#2E5F8A] text-xs font-semibold mb-6 uppercase tracking-widest">
            Service
          </div>
          <h1 className="font-[var(--font-outfit)] font-extrabold text-4xl sm:text-5xl text-[#1A1A2E] mb-5">
            {service.heroTitle}
          </h1>
          <p className="text-[#6B7280] text-lg leading-relaxed mb-8">{service.heroSub}</p>
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
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#6B7280] text-lg leading-relaxed">{service.description}</p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl text-[#1A1A2E] mb-10 text-center">
            What&apos;s Included
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.whatsIncluded.map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] text-sm mb-2">{item.label}</h3>
                <p className="text-[#6B7280] text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl text-[#1A1A2E] mb-8 text-center">
            Who This Is For
          </h2>
          <div className="space-y-3">
            {service.whoItsFor.map((w) => (
              <div key={w} className="flex items-center gap-3 bg-[#F8F9FA] rounded-xl px-5 py-3">
                <CheckCircle2 size={18} className="text-[#2E5F8A] flex-shrink-0" />
                <span className="text-[#1A1A2E] text-sm">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl text-[#1A1A2E] mb-10 text-center">
            Our Process for This Service
          </h2>
          <div className="space-y-6">
            {service.process.map((step, i) => (
              <div key={step.step} className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2E5F8A] text-white flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <div className="flex-1 pb-6 border-b border-gray-100 last:border-0">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E]">{step.title}</h3>
                    <span className="text-xs text-[#6B7280] bg-white px-2.5 py-0.5 rounded-full border border-gray-200">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-outfit)] font-bold text-xl text-[#1A1A2E] mb-6">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {service.techStack.map((t) => (
              <span key={t} className="px-4 py-1.5 rounded-full bg-[#F8F9FA] border border-gray-200 text-sm text-[#6B7280] font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl text-[#1A1A2E] mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {service.faq.map((f) => (
              <div key={f.q} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] mb-2">{f.q}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[var(--font-outfit)] font-bold text-xl text-[#1A1A2E] mb-6 text-center">Related Services</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {related.map((r) => r && (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#2E5F8A] text-[#2E5F8A] text-sm font-semibold hover:bg-[#2E5F8A] hover:text-white transition-colors"
                >
                  {r.title} <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
