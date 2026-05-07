import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Audax Ventures",
  description: "Audax Ventures Privacy Policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-[var(--font-outfit)] font-extrabold text-4xl text-[#1A1A2E] mb-6">Privacy Policy</h1>
        <p className="text-[#6B7280] mb-8">Last updated: January 1, 2025</p>
        <div className="prose prose-lg text-[#6B7280]">
          <p>Audax Ventures (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.</p>
          <h2 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] mt-8 mb-3">Information We Collect</h2>
          <p>We collect information you provide directly to us, including name, email address, company name, and project details when you fill out our contact form or book a strategy call.</p>
          <h2 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] mt-8 mb-3">How We Use Your Information</h2>
          <p>We use the information we collect to respond to your inquiries, provide our services, send relevant communications about your project, and improve our website and services.</p>
          <h2 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] mt-8 mb-3">Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at privacy@audaxventures.ca.</p>
        </div>
      </div>
    </section>
  );
}
