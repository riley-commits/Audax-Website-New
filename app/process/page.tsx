import type { Metadata } from "next";
import CTABanner from "@/components/layout/CTABanner";
import ProcessContent from "@/components/sections/ProcessContent";

export const metadata: Metadata = {
  title: "Our Process — How We Build Software | Audax Ventures",
  description:
    "Discover how Audax Ventures builds software: Discovery → UI/UX → Development → DevOps → Ongoing Support. Transparent, agile, and founder-friendly.",
  alternates: { canonical: "https://audaxventures.ca/process" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://audaxventures.ca" },
    { "@type": "ListItem", position: 2, name: "Our Process", item: "https://audaxventures.ca/process" },
  ],
};

export default function ProcessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ProcessContent />
      <CTABanner />
    </>
  );
}
