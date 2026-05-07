"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      {/* Geometric background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.06]"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="300" cy="300" r="250" stroke="#2E5F8A" strokeWidth="40" />
          <circle cx="300" cy="300" r="170" stroke="#3A7BD5" strokeWidth="20" />
          <circle cx="300" cy="300" r="80" stroke="#2E5F8A" strokeWidth="15" />
          <line x1="50" y1="300" x2="550" y2="300" stroke="#2E5F8A" strokeWidth="2" />
          <line x1="300" y1="50" x2="300" y2="550" stroke="#2E5F8A" strokeWidth="2" />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.04]"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="20" y="20" width="360" height="360" stroke="#2E5F8A" strokeWidth="2" rx="20" />
          <rect x="60" y="60" width="280" height="280" stroke="#3A7BD5" strokeWidth="2" rx="15" />
          <rect x="100" y="100" width="200" height="200" stroke="#2E5F8A" strokeWidth="2" rx="10" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E5F8A]/10 text-[#2E5F8A] text-sm font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E5F8A]" />
            Canada&apos;s Most Founder-Aligned Software Studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[var(--font-outfit)] font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1A1A2E] leading-[1.1] mb-6"
          >
            Building Expert Software Solutions for the{" "}
            <span className="relative">
              <span className="gradient-text">Next Generation</span>
            </span>{" "}
            of Business Leaders
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#6B7280] text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl"
          >
            From validated idea to scalable product — Audax Ventures is your trusted development partner.
            We help founders and enterprise teams build MVPs, SaaS platforms, and internal tools that actually work.
          </motion.p>

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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex items-center gap-6"
          >
            <div className="flex -space-x-2">
              {["32", "33", "34", "35"].map((n) => (
                <div
                  key={n}
                  className="w-10 h-10 rounded-full border-2 border-white bg-[#2E5F8A]/20 overflow-hidden"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-[#6B7280]">
                <span className="font-semibold text-[#1A1A2E]">50+ projects delivered</span> for founders & enterprises
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
