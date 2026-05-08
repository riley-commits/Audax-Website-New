"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Building2 } from "lucide-react";

const solutions = [
  {
    icon: Lightbulb,
    badge: "For Founders",
    title: "Catalyst for Founders",
    description:
      "A structured Validate → Launch → Scale program for pre-seed and seed-stage founders. Get a technical partner, not just a vendor — from raw idea to revenue-generating product.",
    href: "/programs/catalyst-for-founders",
    bg: "from-[#2E5F8A] to-[#3A7BD5]",
  },
  {
    icon: Building2,
    badge: "For Enterprise",
    title: "Enterprise Innovation Program",
    description:
      "Three-phase Audit → Build → Scale program for corporate innovation teams and CTOs. Executive-ready reporting, senior-only team, and full IP transfer.",
    href: "/programs/enterprise-innovation-program",
    bg: "from-[#1A1A2E] to-[#2E5F8A]",
  },
];

export default function SolutionsOverview() {
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
          <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">Structured Programs</p>
          <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1A1A2E] mb-4">
            Our Solutions
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Beyond individual services — structured programs designed for where you are in your journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${s.bg} p-8 text-white`}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold tracking-wide mb-6">
                <s.icon size={12} />
                {s.badge}
              </div>
              <h3 className="font-[var(--font-outfit)] font-extrabold text-2xl mb-3">{s.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-8">{s.description}</p>
              <Link
                href={s.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#2E5F8A] font-semibold text-sm hover:bg-blue-50 transition-colors"
              >
                Learn More <ArrowRight size={14} />
              </Link>
              {/* Decorative circle */}
              <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-white/5" />
              <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-white/5" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
