"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";

const budgetOptions = [
  "Under $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000 – $250,000",
  "$250,000+",
  "Not sure yet",
];

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire up to Formspree or similar: action="https://formspree.io/f/YOUR_FORM_ID"
    setSubmitted(true);
  };

  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-[var(--font-outfit)] font-extrabold text-4xl sm:text-5xl text-[#1A1A2E] mb-4"
          >
            Let&apos;s Talk About Your Project
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#6B7280] text-lg max-w-xl mx-auto"
          >
            Book a free 30-minute strategy call, or fill out the form and we&apos;ll respond within one business day.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info + Calendly */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-8">
              <h2 className="font-[var(--font-outfit)] font-bold text-xl text-[#1A1A2E] mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#6B7280]">
                  <Mail size={18} className="text-[#2E5F8A]" />
                  <a href="mailto:hello@audaxventures.ca" className="hover:text-[#2E5F8A] transition-colors">hello@audaxventures.ca</a>
                </div>
                <div className="flex items-center gap-3 text-[#6B7280]">
                  <Phone size={18} className="text-[#2E5F8A]" />
                  <span>+1 (416) 555-0180</span>
                </div>
                <div className="flex items-center gap-3 text-[#6B7280]">
                  <MapPin size={18} className="text-[#2E5F8A]" />
                  <span>Toronto, Ontario, Canada</span>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <a href="https://linkedin.com/company/audaxventures" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#F8F9FA] flex items-center justify-center text-[#6B7280] hover:bg-[#2E5F8A] hover:text-white transition-all">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://twitter.com/audaxventures" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#F8F9FA] flex items-center justify-center text-[#6B7280] hover:bg-[#2E5F8A] hover:text-white transition-all">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="https://instagram.com/audaxventures" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#F8F9FA] flex items-center justify-center text-[#6B7280] hover:bg-[#2E5F8A] hover:text-white transition-all">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
              </div>
            </div>

            {/* Calendly placeholder */}
            <div className="rounded-3xl border-2 border-dashed border-gray-200 p-8 text-center bg-[#F8F9FA]">
              <h3 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] mb-2">Book a Free Strategy Call</h3>
              <p className="text-[#6B7280] text-sm mb-4">30 minutes · No commitment · Calendly</p>
              <div className="bg-white rounded-2xl p-4 text-sm text-[#6B7280] border border-gray-100 mb-4">
                📅 Replace this block with your Calendly embed:
                <br />
                <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-2 inline-block">
                  {`<iframe src="https://calendly.com/audax-ventures/30min" />`}
                </code>
              </div>
              <a
                href="https://calendly.com/audax-ventures/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2E5F8A] text-white font-semibold text-sm hover:bg-[#3A7BD5] transition-colors"
              >
                Open Calendly →
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#F8F9FA] rounded-3xl p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle2 size={48} className="text-green-500 mb-4" />
                <h3 className="font-[var(--font-outfit)] font-bold text-xl text-[#1A1A2E] mb-2">Message Sent!</h3>
                <p className="text-[#6B7280]">We&apos;ll get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-[var(--font-outfit)] font-bold text-xl text-[#1A1A2E] mb-6">Send Us a Message</h2>
                <p className="text-xs text-[#6B7280] mb-4">
                  Note: Wire up to <a href="https://formspree.io" className="text-[#2E5F8A]">Formspree</a> or similar by adding{" "}
                  <code className="bg-gray-100 px-1 rounded text-xs">action="https://formspree.io/f/YOUR_ID" method="POST"</code> to the form tag.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A2E] mb-1.5">Name *</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-[#1A1A2E] focus:outline-none focus:ring-2 focus:ring-[#2E5F8A]/30 focus:border-[#2E5F8A]"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A2E] mb-1.5">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-[#1A1A2E] focus:outline-none focus:ring-2 focus:ring-[#2E5F8A]/30 focus:border-[#2E5F8A]"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A1A2E] mb-1.5">Company</label>
                  <input
                    value={form.company}
                    onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-[#1A1A2E] focus:outline-none focus:ring-2 focus:ring-[#2E5F8A]/30 focus:border-[#2E5F8A]"
                    placeholder="Acme Corp"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A1A2E] mb-1.5">Budget Range</label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value }))}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-[#1A1A2E] focus:outline-none focus:ring-2 focus:ring-[#2E5F8A]/30 focus:border-[#2E5F8A]"
                  >
                    <option value="">Select a range</option>
                    {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A1A2E] mb-1.5">Tell us about your project *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-[#1A1A2E] focus:outline-none focus:ring-2 focus:ring-[#2E5F8A]/30 focus:border-[#2E5F8A] resize-none"
                    placeholder="What are you building? What stage are you at? What's your timeline?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#2E5F8A] text-white font-bold hover:bg-[#3A7BD5] transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
