import type { Metadata } from "next";
import CTABanner from "@/components/layout/CTABanner";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogPreview from "@/components/sections/BlogPreview";
import SolutionsOverview from "@/components/sections/SolutionsOverview";
import StatsBar from "@/components/sections/StatsBar";
import WaveDivider from "@/components/ui/WaveDivider";

export const metadata: Metadata = {
  title: "Audax Ventures — Canada's Leading Software Development Company",
  description:
    "Audax Ventures helps startup founders and enterprise innovation teams build MVPs and scalable SaaS products. Book a free strategy call today.",
  openGraph: {
    title: "Audax Ventures — Canada's Leading Software Development Company",
    description:
      "From validated idea to scalable product — Audax Ventures is your trusted development partner.",
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
    "Canada's leading software development company helping founders and enterprise teams build MVPs and scalable SaaS products.",
  address: { "@type": "PostalAddress", addressCountry: "CA" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://calendly.com/audax-ventures/30min",
  },
  sameAs: [
    "https://linkedin.com/company/audaxventures",
    "https://twitter.com/audaxventures",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HeroSection />
      {/* #FAFAF8 → #F8F9FA (Hero → Trusted-by strip) */}
      <WaveDivider from="#FAFAF8" to="#F8F9FA" />
      <StatsBar />
      {/* #2E5F8A → #FAFAF8 (Stats bar → Services) — dramatic */}
      <WaveDivider from="#2E5F8A" to="#FAFAF8" flip />
      <ServicesGrid />
      {/* #FAFAF8 → #F8F9FA (Services → Solutions) */}
      <WaveDivider from="#FAFAF8" to="#F8F9FA" />
      <SolutionsOverview />
      {/* #F8F9FA → #FAFAF8 (Solutions → Process) */}
      <WaveDivider from="#F8F9FA" to="#FAFAF8" flip />
      <ProcessSteps />
      {/* #FAFAF8 → #F8F9FA (Process → Testimonials) */}
      <WaveDivider from="#FAFAF8" to="#F8F9FA" />
      <TestimonialsSection />
      {/* #F8F9FA → #FAFAF8 (Testimonials → Blog) */}
      <WaveDivider from="#F8F9FA" to="#FAFAF8" flip />
      <BlogPreview />
      {/* #FAFAF8 → #2E5F8A (Blog → CTA) — dramatic */}
      <WaveDivider from="#FAFAF8" to="#2E5F8A" />
      <CTABanner />
    </>
  );
}
