"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Rocket, Cloud, Settings, ArrowRight, Check, ChevronRight } from "lucide-react";

// ── Per-service right-panel visuals ─────────────────────────────────────────

function MVPVisual() {
  const phases = [
    { label: "Validate",  weeks: "Wks 1–2",  color: "bg-blue-400" },
    { label: "Design",    weeks: "Wks 3–5",  color: "bg-blue-500" },
    { label: "Build",     weeks: "Wks 6–13", color: "bg-blue-600" },
    { label: "Launch",    weeks: "Wks 14–16", color: "bg-blue-700" },
  ];
  const widths = ["w-[15%]", "w-[22%]", "w-[45%]", "w-[18%]"];

  return (
    <div className="space-y-5">
      <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-4">
        Delivery Timeline
      </p>
      {phases.map((p, i) => (
        <motion.div
          key={p.label}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08, duration: 0.35 }}
          className="flex items-center gap-4"
        >
          <div className="w-20 text-right text-xs text-white/50 font-medium shrink-0">
            {p.weeks}
          </div>
          <div className="flex-1 h-8 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className={`h-full ${p.color} rounded-full flex items-center pl-3`}
              initial={{ width: 0 }}
              animate={{ width: widths[i].replace("w-[", "").replace("]", "") }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: "easeOut" }}
              style={{ width: widths[i].replace("w-[", "").replace("]", "") }}
            >
              <span className="text-xs font-semibold text-white whitespace-nowrap">
                {p.label}
              </span>
            </motion.div>
          </div>
        </motion.div>
      ))}
      <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
        {[
          { stat: "50+", label: "MVPs launched" },
          { stat: "8 wks", label: "Median to launch" },
          { stat: "98%", label: "On-time delivery" },
        ].map((s) => (
          <div key={s.label}>
            <div className="font-[var(--font-outfit)] font-extrabold text-2xl text-white">{s.stat}</div>
            <div className="text-xs text-white/50 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SaaSVisual() {
  const layers = [
    { label: "Your Application",       sub: "Next.js · React · TypeScript",      icon: "🖥️", delay: 0 },
    { label: "Auth & Billing",          sub: "Auth.js · Stripe · Multi-tenancy",  icon: "🔐", delay: 0.08 },
    { label: "API & Business Logic",    sub: "Node.js · REST / GraphQL · Queues", icon: "⚙️", delay: 0.16 },
    { label: "Database & Storage",      sub: "PostgreSQL · Redis · S3",           icon: "🗄️", delay: 0.24 },
    { label: "Cloud Infrastructure",    sub: "AWS / GCP · CI/CD · Monitoring",   icon: "☁️", delay: 0.32 },
  ];

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-widest text-indigo-300 mb-5">
        Platform Architecture
      </p>
      <div className="space-y-2">
        {layers.map((layer, i) => (
          <motion.div
            key={layer.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: layer.delay, duration: 0.35 }}
            className="flex items-center gap-3 bg-white/8 hover:bg-white/12 transition-colors rounded-xl px-4 py-3 border border-white/10"
          >
            <span className="text-xl w-7 text-center">{layer.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white leading-none mb-0.5">{layer.label}</p>
              <p className="text-xs text-white/45 truncate">{layer.sub}</p>
            </div>
            {i < layers.length - 1 && (
              <div className="text-white/20 text-xs">↓</div>
            )}
          </motion.div>
        ))}
      </div>
      <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
        {[
          { stat: "99.9%", label: "Uptime SLA" },
          { stat: "∞",     label: "Scalability" },
          { stat: "0",     label: "Vendor lock-in" },
        ].map((s) => (
          <div key={s.label}>
            <div className="font-[var(--font-outfit)] font-extrabold text-2xl text-white">{s.stat}</div>
            <div className="text-xs text-white/50 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InternalVisual() {
  const before = ["📊 Spreadsheet tracking", "📧 Email approvals", "📋 Paper forms", "🔁 Manual data entry"];
  const after  = ["📈 Live dashboards",      "✅ Automated workflows", "📱 Digital forms", "🔗 System integrations"];

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-5">
        Before → After
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/35 mb-2.5">Before</p>
          <div className="space-y-2">
            {before.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
                className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 border border-white/8"
              >
                <span className="text-sm line-through text-white/35 text-xs">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-teal-400 mb-2.5">After</p>
          <div className="space-y-2">
            {after.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 + 0.15, duration: 0.3 }}
                className="flex items-center gap-2 bg-teal-500/20 rounded-lg px-3 py-2 border border-teal-400/25"
              >
                <span className="text-white text-xs font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
        {[
          { stat: "60%",  label: "Avg. time saved"  },
          { stat: "2 wks", label: "Avg. onboarding" },
          { stat: "100%", label: "IP ownership"     },
        ].map((s) => (
          <div key={s.label}>
            <div className="font-[var(--font-outfit)] font-extrabold text-2xl text-white">{s.stat}</div>
            <div className="text-xs text-white/50 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Service data ─────────────────────────────────────────────────────────────

const services = [
  {
    num: "01",
    icon: Rocket,
    title: "MVP Development",
    tagline: "8–16 weeks from idea to launch",
    description:
      "Scope, design, and build the fastest defensible path to market validation — without cutting corners on architecture or user experience.",
    href: "/services/mvp-development",
    badge: "Most Popular",
    tabAccent: "text-blue-400",
    tabActiveBg: "bg-[#2E5F8A]",
    panelGradient: "from-[#1A3A5C] via-[#2E5F8A] to-[#1A3A5C]",
    features: [
      "Discovery & scope definition",
      "UI/UX design in Figma",
      "Full-stack development",
      "User testing & iteration",
      "Production deployment",
      "Post-launch support plan",
    ],
    Visual: MVPVisual,
  },
  {
    num: "02",
    icon: Cloud,
    title: "SaaS Development",
    tagline: "End-to-end platform builds",
    description:
      "Multi-tenancy, Stripe billing, role-based auth, and scalable cloud infrastructure — built to grow from 10 customers to 10,000 without a rewrite.",
    href: "/services/saas-development",
    badge: null,
    tabAccent: "text-indigo-400",
    tabActiveBg: "bg-indigo-700",
    panelGradient: "from-indigo-950 via-indigo-800 to-indigo-950",
    features: [
      "Multi-tenant data architecture",
      "Stripe billing & subscriptions",
      "Auth & role management",
      "REST / GraphQL API design",
      "CI/CD pipeline & DevOps",
      "99.9% uptime infrastructure",
    ],
    Visual: SaaSVisual,
  },
  {
    num: "03",
    icon: Settings,
    title: "Internal Tools",
    tagline: "Replace spreadsheets with systems",
    description:
      "Custom internal tools built precisely for your team's workflows — automating the manual work that consumes hours and introduces errors every week.",
    href: "/services/internal-tools",
    badge: null,
    tabAccent: "text-teal-400",
    tabActiveBg: "bg-teal-800",
    panelGradient: "from-teal-950 via-teal-800 to-teal-950",
    features: [
      "Process audit & workflow mapping",
      "Custom UI/UX design",
      "Backend logic & integrations",
      "ERP / CRM connectivity",
      "Staff training & onboarding",
      "Ongoing support retainer",
    ],
    Visual: InternalVisual,
  },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function ServicesGrid() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = services[activeIdx];

  return (
    <section className="relative py-24 bg-[#FAFAF8] overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #2E5F8A 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.035,
        }}
      />
      {/* Corner orb */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#2E5F8A]/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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

        {/* Split panel */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid lg:grid-cols-[340px_1fr] gap-4 items-stretch"
        >
          {/* ── Left: tab list ── */}
          <div className="flex flex-col gap-3">
            {services.map((s, i) => {
              const isActive = activeIdx === i;
              return (
                <button
                  key={s.title}
                  onClick={() => setActiveIdx(i)}
                  className={`group relative text-left rounded-2xl border transition-all duration-250 overflow-hidden ${
                    isActive
                      ? "border-transparent shadow-lg"
                      : "border-gray-100 bg-white hover:border-[#2E5F8A]/20 hover:shadow-sm"
                  }`}
                >
                  {/* Active background */}
                  {isActive && (
                    <motion.div
                      layoutId="tab-bg"
                      className={`absolute inset-0 bg-gradient-to-br ${s.panelGradient}`}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    />
                  )}

                  <div className="relative px-6 py-5 flex items-start gap-4">
                    {/* Number */}
                    <span className={`font-[var(--font-outfit)] font-extrabold text-xs mt-0.5 tabular-nums ${
                      isActive ? "text-white/40" : "text-[#D1D5DB]"
                    }`}>
                      {s.num}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <s.icon
                          size={15}
                          className={isActive ? "text-white/70" : s.tabAccent}
                        />
                        <h3 className={`font-[var(--font-outfit)] font-bold text-sm leading-none ${
                          isActive ? "text-white" : "text-[#1A1A2E]"
                        }`}>
                          {s.title}
                        </h3>
                        {s.badge && (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-[#2E5F8A]/10 text-[#2E5F8A]"
                          }`}>
                            {s.badge}
                          </span>
                        )}
                      </div>
                      <p className={`text-xs leading-relaxed ${
                        isActive ? "text-white/60" : "text-[#6B7280]"
                      }`}>
                        {s.tagline}
                      </p>
                    </div>

                    <ChevronRight
                      size={14}
                      className={`mt-0.5 flex-shrink-0 transition-transform duration-200 ${
                        isActive
                          ? "text-white rotate-90"
                          : "text-[#D1D5DB] group-hover:text-[#2E5F8A] group-hover:translate-x-0.5"
                      }`}
                    />
                  </div>
                </button>
              );
            })}

            {/* View all services */}
            <Link
              href="/services/mvp-development"
              className="mt-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-dashed border-[#2E5F8A]/30 text-sm font-semibold text-[#2E5F8A] hover:border-[#2E5F8A] hover:bg-[#2E5F8A]/5 transition-all"
            >
              View all 18 services <ArrowRight size={14} />
            </Link>
          </div>

          {/* ── Right: content panel ── */}
          <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${active.panelGradient} shadow-2xl min-h-[520px]`}>
            {/* Soft noise texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="relative h-full p-8 lg:p-10 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <active.icon size={20} className="text-white" />
                      </div>
                      {active.badge && (
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/20 text-white uppercase tracking-wider">
                          {active.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-[var(--font-outfit)] font-extrabold text-2xl text-white mb-2">
                      {active.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed max-w-md">
                      {active.description}
                    </p>
                  </div>
                </div>

                {/* Two-column body: features left, visual right */}
                <div className="flex-1 grid md:grid-cols-2 gap-8">
                  {/* Feature checklist */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                      What&apos;s Included
                    </p>
                    <div className="space-y-2.5">
                      {active.features.map((f, i) => (
                        <motion.div
                          key={f}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06, duration: 0.3 }}
                          className="flex items-center gap-2.5"
                        >
                          <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                            <Check size={11} className="text-white" />
                          </div>
                          <span className="text-sm text-white/80">{f}</span>
                        </motion.div>
                      ))}
                    </div>
                    {/* CTA */}
                    <div className="mt-8">
                      <Link
                        href={active.href}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sm font-bold hover:bg-white/90 transition-colors"
                        style={{ color: activeIdx === 0 ? "#2E5F8A" : activeIdx === 1 ? "#4F46E5" : "#0F766E" }}
                      >
                        Full Service Details <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>

                  {/* Dynamic visual */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <active.Visual />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
