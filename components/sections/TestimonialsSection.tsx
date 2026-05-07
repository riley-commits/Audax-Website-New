"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Audax Ventures took our rough idea and turned it into a production-ready SaaS platform in 14 weeks. They challenged our scope assumptions from day one, which saved us tens of thousands in unnecessary features. Best investment we've made.",
    name: "James Whitfield",
    role: "Founder & CEO",
    company: "TechFlow Analytics",
    avatar: "JW",
  },
  {
    quote:
      "I've worked with three development agencies over the past five years. Audax is the first one that felt like a genuine partner. They understood our enterprise requirements, navigated our procurement process, and delivered on time.",
    name: "Sarah Chen",
    role: "VP of Product Innovation",
    company: "NorthBridge Capital",
    avatar: "SC",
  },
  {
    quote:
      "We went from spreadsheet chaos to a custom internal operations tool in 10 weeks. Our team saves 15+ hours a week and error rates dropped by 80%. The ROI was clear within the first month.",
    name: "Marcus Thompson",
    role: "COO",
    company: "Meridian Health Services",
    avatar: "MT",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">Client Stories</p>
          <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1A1A2E] mb-4">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-0.5 mb-5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#1A1A2E] text-sm leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2E5F8A] flex items-center justify-center text-white text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#1A1A2E] text-sm">{t.name}</p>
                  <p className="text-[#6B7280] text-xs">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
