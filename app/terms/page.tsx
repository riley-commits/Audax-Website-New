import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Audax Ventures",
  description: "Audax Ventures Terms of Service.",
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-[var(--font-outfit)] font-extrabold text-4xl text-[#1A1A2E] mb-6">Terms of Service</h1>
        <p className="text-[#6B7280] mb-8">Last updated: January 1, 2025</p>
        <div className="prose prose-lg text-[#6B7280]">
          <p>By accessing or using the Audax Ventures website or services, you agree to be bound by these Terms of Service. Please read them carefully.</p>
          <h2 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] mt-8 mb-3">Use of Services</h2>
          <p>Our services are subject to a separate Master Services Agreement (MSA) and Statement of Work (SOW) signed before any project begins. These Terms govern your use of our public website.</p>
          <h2 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] mt-8 mb-3">Intellectual Property</h2>
          <p>All content on this website, including text, graphics, and code, is the property of Audax Ventures unless otherwise noted. Client-specific work product is governed by the applicable client agreement.</p>
          <h2 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] mt-8 mb-3">Contact</h2>
          <p>For questions about these Terms, contact legal@audaxventures.ca.</p>
        </div>
      </div>
    </section>
  );
}
