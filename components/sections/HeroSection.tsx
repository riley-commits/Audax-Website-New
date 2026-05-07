"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const rotatingWords = ["Founders", "Enterprises", "Startups", "Scale-Ups"];

const bars = [38, 52, 45, 70, 58, 76, 65, 82, 72, 90, 78, 95];

const kpis = [
  { label: "MRR", value: "$48.2K", change: "+12.4%", color: "text-green-400" },
  { label: "Active Users", value: "2,847", change: "+8.1%", color: "text-blue-400" },
  { label: "Conversion", value: "3.6%", change: "+0.4%", color: "text-purple-400" },
  { label: "Uptime", value: "99.98%", change: "30 days", color: "text-emerald-400" },
];

const activity = [
  { name: "Acme Corp", action: "upgraded to Pro", time: "2m ago", dot: "bg-green-400" },
  { name: "BuildFast Inc.", action: "signed up", time: "14m ago", dot: "bg-blue-400" },
  { name: "NorthBridge", action: "new deployment", time: "1h ago", dot: "bg-purple-400" },
];

const sidebarIcons = [
  // Grid / Dashboard
  <svg key="grid" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  // Activity
  <svg key="activity" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  // Users
  <svg key="users" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  // Settings
  <svg key="settings" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>,
];

function DashboardMockup() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="relative"
    >
      {/* Glow behind */}
      <div className="absolute inset-0 bg-[#2E5F8A]/25 rounded-3xl blur-3xl translate-y-6 scale-90 pointer-events-none" />

      {/* Main card */}
      <div className="relative bg-[#0D1526] rounded-2xl overflow-hidden shadow-2xl border border-white/10 text-white">

        {/* Browser chrome bar */}
        <div className="flex items-center gap-3 px-4 py-3 bg-[#080F1C] border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <div className="flex-1 bg-white/5 rounded-md py-1 px-3 text-[10px] text-white/25 text-center max-w-xs mx-auto">
            app.client-dashboard.ca/overview
          </div>
          <div className="w-6 h-6 rounded-full bg-[#2E5F8A] flex items-center justify-center text-[9px] font-bold">AV</div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-12 bg-[#080F1C] border-r border-white/5 py-4 flex flex-col items-center gap-3">
            {sidebarIcons.map((icon, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  i === 0
                    ? "bg-[#2E5F8A] text-white"
                    : "text-white/20"
                }`}
              >
                {icon}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 p-4 space-y-3">
            {/* Header row */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-xs font-semibold">Product Dashboard</p>
                <p className="text-white/30 text-[9px]">Last updated: just now</p>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 bg-green-500/10 rounded text-green-400 text-[9px] font-medium flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-green-400 inline-block" /> Live
                </span>
                <span className="px-2 py-0.5 bg-white/5 rounded text-white/30 text-[9px]">30 days</span>
              </div>
            </div>

            {/* KPI grid */}
            <div className="grid grid-cols-2 gap-2">
              {kpis.map((k) => (
                <div key={k.label} className="bg-white/5 rounded-xl p-2.5">
                  <p className="text-white/35 text-[9px] mb-1">{k.label}</p>
                  <p className="text-white font-bold text-sm leading-none">{k.value}</p>
                  <p className={`text-[9px] mt-1 ${k.color}`}>↑ {k.change}</p>
                </div>
              ))}
            </div>

            {/* Bar chart */}
            <div className="bg-white/5 rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-white/50 text-[9px] font-medium">Revenue Overview</p>
                <p className="text-white/20 text-[8px]">Jan – Dec 2024</p>
              </div>
              <div className="flex items-end gap-[3px] h-14">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-all"
                    style={{
                      height: `${h}%`,
                      background:
                        i === bars.length - 1
                          ? "#3A7BD5"
                          : i === bars.length - 2
                          ? "#2E5F8A"
                          : "rgba(255,255,255,0.08)",
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1.5">
                {["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map((m) => (
                  <p key={m} className="text-white/20 text-[7px]">{m}</p>
                ))}
              </div>
            </div>

            {/* Activity feed */}
            <div className="space-y-1.5">
              <p className="text-white/30 text-[9px] font-medium uppercase tracking-wider">Recent Activity</p>
              {activity.map((a) => (
                <div key={a.name} className="flex items-center gap-2 bg-white/[0.03] rounded-lg px-2.5 py-1.5">
                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${a.dot}`} />
                  <p className="flex-1 text-[9px] text-white/50 truncate">
                    <span className="text-white/70 font-medium">{a.name}</span> {a.action}
                  </p>
                  <p className="text-white/20 text-[8px] flex-shrink-0">{a.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge — top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.4, ease: "backOut" }}
        className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl border border-gray-100 px-3 py-2 flex items-center gap-2"
      >
        <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center text-base leading-none">
          🚀
        </div>
        <div>
          <p className="text-[11px] font-bold text-[#1A1A2E]">MVP Launched</p>
          <p className="text-[9px] text-[#6B7280]">8 weeks from kickoff</p>
        </div>
      </motion.div>

      {/* Floating badge — bottom left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.4, ease: "backOut" }}
        className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-gray-100 px-3 py-2 flex items-center gap-2"
      >
        <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-[#2E5F8A]">
          <TrendingUp size={14} />
        </div>
        <div>
          <p className="text-[11px] font-bold text-[#1A1A2E]">+127% Growth</p>
          <p className="text-[9px] text-[#6B7280]">Since launch</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      {/* Background: dot grid + soft orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(#2E5F8A 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-[#2E5F8A] opacity-[0.07] blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full bg-[#3A7BD5] opacity-[0.05] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Left: copy ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E5F8A]/10 text-[#2E5F8A] text-sm font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E5F8A] animate-pulse" />
              Canada&apos;s Most Founder-Aligned Software Studio
            </motion.div>

            {/* Headline with rotating word */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-[var(--font-outfit)] font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] text-[#1A1A2E] leading-[1.1] mb-6"
            >
              Building Expert
              <br />
              Software for{" "}
              {/* Fixed-width container so layout doesn't shift */}
              <span className="relative inline-block" style={{ minWidth: "9rem" }}>
                <span className="invisible select-none">Enterprises</span>
                <span className="absolute inset-0 flex items-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIndex}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.33, 1, 0.68, 1] }}
                      className="gradient-text whitespace-nowrap"
                    >
                      {rotatingWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#6B7280] text-lg leading-relaxed mb-10 max-w-lg"
            >
              From validated idea to scalable product — Audax Ventures is your trusted development partner.
              We help teams build MVPs, SaaS platforms, and internal tools that actually ship.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="https://calendly.com/audax-ventures/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2E5F8A] text-white font-semibold text-base hover:bg-[#3A7BD5] transition-colors shadow-lg shadow-blue-900/20"
              >
                Book a Free Strategy Call
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/success-stories"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-[#2E5F8A] text-[#2E5F8A] font-semibold text-base hover:bg-[#2E5F8A] hover:text-white transition-colors"
              >
                See Our Work
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-12 flex items-center gap-5"
            >
              <div className="flex -space-x-2.5">
                {(
                  [
                    { initials: "R", bg: "#2E5F8A" },
                    { initials: "M", bg: "#3A7BD5" },
                    { initials: "P", bg: "#1A1A2E" },
                    { initials: "J", bg: "#6B7280" },
                  ] as { initials: string; bg: string }[]
                ).map(({ initials, bg }) => (
                  <div
                    key={initials}
                    className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: bg }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-[#6B7280]">
                  <span className="font-semibold text-[#1A1A2E]">50+ projects delivered</span> for founders &amp; enterprises
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── Right: dashboard mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 48, y: 16 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: [0.33, 1, 0.68, 1] }}
            className="hidden lg:block px-6"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
