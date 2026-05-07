"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Cloud, Settings, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "MVP Development",
    description:
      "Launch your minimum viable product in 8–16 weeks. We scope, design, and build the fastest path to market validation.",
    href: "/services/mvp-development",
    color: "bg-blue-50",
    iconColor: "text-[#2E5F8A]",
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    description:
      "End-to-end SaaS platforms with multi-tenancy, Stripe billing, role-based auth, and scalable cloud infrastructure.",
    href: "/services/saas-development",
    color: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: Settings,
    title: "Internal Tools",
    description:
      "Replace your spreadsheets and manual workflows with custom internal tools built precisely for your team's process.",
    href: "/services/internal-tools",
    color: "bg-slate-50",
    iconColor: "text-slate-600",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">What We Build</p>
          <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1A1A2E] mb-4">
            Core Services
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            From idea to launch, we cover the full spectrum of software development for startups and enterprises.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              className="group bg-white rounded-3xl border border-gray-100 p-8 hover:shadow-xl hover:border-[#2E5F8A]/20 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center mb-6`}>
                <s.icon className={s.iconColor} size={26} />
              </div>
              <h3 className="font-[var(--font-outfit)] font-bold text-xl text-[#1A1A2E] mb-3">{s.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-6">{s.description}</p>
              <Link
                href={s.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2E5F8A] group-hover:gap-3 transition-all"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/services/mvp-development"
            className="inline-flex items-center gap-2 text-[#2E5F8A] font-semibold hover:text-[#3A7BD5] transition-colors"
          >
            View all 18 services <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
