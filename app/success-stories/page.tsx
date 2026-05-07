import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";
import CTABanner from "@/components/layout/CTABanner";

export const metadata: Metadata = {
  title: "Success Stories — Client Case Studies | Audax Ventures",
  description: "Real results from real clients. Explore how Audax Ventures helped founders and enterprise teams build products that drive measurable outcomes.",
  alternates: { canonical: "https://audaxventures.ca/success-stories" },
};

const caseStudies = [
  {
    client: "TechFlow Analytics",
    tagline: "From spreadsheet chaos to a SaaS platform in 14 weeks",
    industry: "B2B SaaS",
    problem:
      "TechFlow's commercial real estate analytics team was managing complex due diligence processes across dozens of shared spreadsheets and email chains. Analysts were spending 40% of their time on data aggregation rather than analysis. Deal cycles were 30% longer than competitors. The founding team needed a platform — fast.",
    solution:
      "We ran a 3-week Discovery Sprint to validate the core problem with 8 real users. Our finding: the pain wasn't just organization — it was coordination between lenders, borrowers, and third-party vendors. We scoped an MVP focused on: document collection workflows, deal room organization, and a shared progress tracker. Development took 14 weeks using Next.js, Supabase, and a custom API layer for document processing.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "AWS S3", "Stripe"],
    results: [
      { icon: TrendingUp, stat: "$34K MRR", label: "within 90 days of launch" },
      { icon: Users, stat: "40 customers", label: "acquired in first quarter" },
      { icon: Clock, stat: "14 weeks", label: "from discovery to launch" },
    ],
    testimonial: {
      quote: "Audax didn't just build what I asked for — they challenged my assumptions and built what I actually needed. That difference is worth everything.",
      name: "James Whitfield",
      role: "Founder & CEO, TechFlow Analytics",
    },
  },
  {
    client: "NorthBridge Realty",
    tagline: "Replacing a generic CRM with a system built for their exact sales motion",
    industry: "Real Estate",
    problem:
      "NorthBridge Realty's 22-person sales team was managing 500+ active deals across a patchwork of Salesforce, Google Sheets, and email. The existing CRM required 4 hours of configuration to handle a non-standard deal structure. 30% of leads were falling through the cracks, and sales leadership couldn't get an accurate pipeline forecast within 48 hours.",
    solution:
      "We audited NorthBridge's actual sales workflow — not the theoretical workflow their CRM assumed — and designed a custom CRM focused on their specific deal types: residential, commercial, and pre-construction. Built on React and Node.js with PostgreSQL, the system integrates with their email, calendar, and commission management tools. Development took 16 weeks including data migration from three existing systems.",
    stack: ["React", "Node.js", "PostgreSQL", "Redis", "Gmail API", "Twilio"],
    results: [
      { icon: TrendingUp, stat: "40%", label: "increase in deals closed in year 1" },
      { icon: Users, stat: "0 leads", label: "lost to tracking gaps since launch" },
      { icon: Clock, stat: "2 hours", label: "to generate full pipeline forecast (was 48hrs)" },
    ],
    testimonial: {
      quote: "We tried to make Salesforce work for three years. Audax understood our process in three weeks and built something better in four months.",
      name: "Sarah Chen",
      role: "VP of Sales Operations, NorthBridge Realty",
    },
  },
  {
    client: "Meridian Health Services",
    tagline: "Paper-based workflows digitized across 6 clinics in 10 weeks",
    industry: "Healthcare",
    problem:
      "Meridian Health Services operates 6 outpatient clinics across Ontario. Their patient intake, referral management, and clinical documentation processes were entirely paper-based. Staff were processing 200+ paper forms per day. Referral tracking required manual phone calls. Compliance documentation was stored in filing cabinets. The CEO estimated 15+ hours/week per clinic manager wasted on administrative work.",
    solution:
      "We designed a HIPAA-compliant internal tool: a web application that digitizes the full intake workflow, automates referral routing, and provides real-time status tracking for all patient touchpoints. Built on Next.js with PostgreSQL and encrypted at rest, the system runs in a Canadian data centre to meet PIPEDA requirements. Digital signatures replaced 80% of paper forms. Development took 10 weeks with a 4-week phased rollout.",
    stack: ["Next.js", "PostgreSQL", "AWS Canada (Montreal)", "DocuSign API", "Twilio"],
    results: [
      { icon: TrendingUp, stat: "80%", label: "reduction in paper form processing" },
      { icon: Clock, stat: "3× faster", label: "referral processing (3 days → 1 day)" },
      { icon: Users, stat: "15 hrs/week", label: "saved per clinic manager" },
    ],
    testimonial: {
      quote: "The ROI was clear in the first month. But the real benefit was what our team could focus on once the admin burden lifted.",
      name: "Marcus Thompson",
      role: "COO, Meridian Health Services",
    },
  },
];

export default function SuccessStoriesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
          <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">Results</p>
          <h1 className="font-[var(--font-outfit)] font-extrabold text-4xl sm:text-5xl text-[#1A1A2E] mb-4">
            Success Stories
          </h1>
          <p className="text-[#6B7280] text-lg">
            Real projects. Real problems solved. Real outcomes for our clients.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {caseStudies.map((cs, i) => (
            <div key={cs.client} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <div className="bg-gradient-to-r from-[#2E5F8A] to-[#3A7BD5] px-8 py-6">
                <p className="text-xs tracking-widest uppercase text-blue-200 font-semibold mb-1">{cs.industry}</p>
                <h2 className="font-[var(--font-outfit)] font-extrabold text-2xl text-white mb-1">{cs.client}</h2>
                <p className="text-blue-100">{cs.tagline}</p>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] mb-3">The Problem</h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{cs.problem}</p>
                  </div>
                  <div>
                    <h3 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] mb-3">Our Solution</h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{cs.solution}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {cs.stack.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-[#F8F9FA] border border-gray-200 text-xs text-[#6B7280] font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {cs.results.map((r) => (
                    <div key={r.label} className="text-center bg-[#F8F9FA] rounded-2xl p-4">
                      <r.icon className="text-[#2E5F8A] mx-auto mb-2" size={20} />
                      <p className="font-[var(--font-outfit)] font-extrabold text-[#1A1A2E] text-lg">{r.stat}</p>
                      <p className="text-[#6B7280] text-xs">{r.label}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-[#2E5F8A]/5 rounded-2xl p-6 border-l-4 border-[#2E5F8A]">
                  <p className="text-[#1A1A2E] italic mb-3">&ldquo;{cs.testimonial.quote}&rdquo;</p>
                  <p className="text-sm font-semibold text-[#1A1A2E]">{cs.testimonial.name}</p>
                  <p className="text-xs text-[#6B7280]">{cs.testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
