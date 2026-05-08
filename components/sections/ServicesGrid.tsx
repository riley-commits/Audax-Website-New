"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Rocket, Cloud, Settings, ArrowRight, Check, Clock, Users, Zap } from "lucide-react";

const services = [
  {
    icon: Rocket,
    accentIcon: Clock,
    title: "MVP Development",
    tagline: "8–16 weeks to launch",
    description:
      "Scope, design, and build the fastest path to market validation — without cutting corners.",
    href: "/services/mvp-development",
    accent: "#2E5F8A",
    lightBg: "bg-blue-50",
    iconColor: "text-[#2E5F8A]",
    expandedBg: "bg-gradient-to-br from-[#2E5F8A] to-[#1A3A5C]",
    badge: "Most Popular",
    features: [
      "Scope definition & wireframes",
      "UI/UX design system",
      "Full-stack development",
      "User testing & iteration",
      "Production launch support",
    ],
  },
  {
    icon: Cloud,
    accentIcon: Zap,
    title: "SaaS Development",
    tagline: "End-to-end platform builds",
    description:
      "Multi-tenancy, Stripe billing, role-based auth, and scalable cloud infrastructure built to grow.",
    href: "/services/saas-development",
    accent: "#4F46E5",
    lightBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    expandedBg: "bg-gradient-to-br from-indigo-700 to-indigo-900",
    badge: null,
    features: [
      "Multi-tenant architecture",
      "Stripe billing integration",
      "Auth & role management",
      "CI/CD pipeline setup",
      "99.9% uptime SLA",
    ],
  },
  {
    icon: Settings,
    accentIcon: Users,
    title: "Internal Development",
    tagline: "Replace your manual workflows",
    description:
      "Custom internal tools built precisely for your team — say goodbye to spreadsheets.",
    href: "/services/internal-tools",
    accent: "#0F766E",
    lightBg: "bg-teal-50",
    iconColor: "text-teal-700",
    expandedBg: "bg-gradient-to-br from-teal-700 to-teal-900",
    badge: null,
    features: [
      "Process audit & mapping",
      "Custom UI/UX design",
      "Backend & integrations",
      "Staff onboarding",
      "Ongoing support plan",
    ],
  },
];

export default function ServicesGrid() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">
            What We Build
          </p>
          <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1A1A2E] mb-4">
            Core Services
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            From idea to launch, we cover the full spectrum of software development for startups and enterprises.
          </p>
        </motion.div>

        {/* Interactive cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const isActive = activeIdx === i;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onMouseEnter={() => setActiveIdx(i)}
                className={`relative rounded-3xl border cursor-pointer overflow-hidden transition-shadow duration-300 ${
                  isActive
                    ? "border-transparent shadow-2xl"
                    : "border-gray-100 shadow-sm hover:shadow-md"
                }`}
              >
                {/* ── Collapsed view (always shown) ── */}
                <div
                  className={`p-8 transition-colors duration-300 ${
                    isActive ? s.expandedBg : "bg-white"
                  }`}
                >
                  {/* Badge */}
                  {s.badge && (
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase mb-4 ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-[#2E5F8A]/10 text-[#2E5F8A]"
                      }`}
                    >
                      {s.badge}
                    </span>
                  )}

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300 ${
                      isActive ? "bg-white/15" : s.lightBg
                    }`}
                  >
                    <s.icon
                      size={26}
                      className={isActive ? "text-white" : s.iconColor}
                    />
                  </div>

                  {/* Title & tagline */}
                  <h3
                    className={`font-[var(--font-outfit)] font-bold text-xl mb-1 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-[#1A1A2E]"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`text-xs font-semibold tracking-wide mb-3 transition-colors duration-300 ${
                      isActive ? "text-white/60" : "text-[#6B7280]"
                    }`}
                  >
                    {s.tagline}
                  </p>
                  <p
                    className={`text-sm leading-relaxed transition-colors duration-300 ${
                      isActive ? "text-white/80" : "text-[#6B7280]"
                    }`}
                  >
                    {s.description}
                  </p>
                </div>

                {/* ── Expanded feature list (active only) ── */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="expanded"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className={`px-8 pb-8 ${s.expandedBg}`}>
                        <div className="border-t border-white/15 pt-5 space-y-2.5 mb-6">
                          {s.features.map((f) => (
                            <div key={f} className="flex items-center gap-2.5">
                              <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                                <Check size={11} className="text-white" />
                              </div>
                              <span className="text-sm text-white/85">{f}</span>
                            </div>
                          ))}
                        </div>
                        <Link
                          href={s.href}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-sm font-bold transition-opacity hover:opacity-90"
                          style={{ color: s.accent }}
                        >
                          Learn More <ArrowRight size={14} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Collapsed CTA link */}
                <AnimatePresence initial={false}>
                  {!isActive && (
                    <motion.div
                      key="collapsed-cta"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-8 pb-8 bg-white"
                    >
                      <Link
                        href={s.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2E5F8A] hover:gap-3 transition-all"
                      >
                        Learn More <ArrowRight size={14} />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
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
