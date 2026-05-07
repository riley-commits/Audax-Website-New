"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { label: "MVP Development", href: "/services/mvp-development" },
  { label: "SaaS Development", href: "/services/saas-development" },
  { label: "Internal Tools", href: "/services/internal-tools" },
  { label: "Website Development", href: "/services/website-development" },
  { label: "E-Commerce Development", href: "/services/ecommerce-development" },
  { label: "iOS Development", href: "/services/ios-development" },
  { label: "Android Development", href: "/services/android-development" },
  { label: "Front End Development", href: "/services/frontend-development" },
  { label: "Back End Development", href: "/services/backend-development" },
  { label: "Custom Software", href: "/services/custom-software-development" },
  { label: "QA & Testing", href: "/services/qa-testing" },
  { label: "Process Automation", href: "/services/process-automation" },
  { label: "AI Consulting", href: "/services/ai-consulting" },
  { label: "CTO-as-a-Service", href: "/services/cto-as-a-service" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/mvp-development", hasDropdown: true },
  { label: "Solutions", href: "/solutions/catalyst-for-founders" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/blog" },
  { label: "MVP Calculator", href: "/mvp-calculator" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-[#2E5F8A] flex items-center justify-center">
            <span className="text-white font-[var(--font-outfit)] font-bold text-lg leading-none">A</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-[var(--font-outfit)] font-800 text-[#2E5F8A] text-base font-extrabold tracking-tight">
              AUDAX
            </span>
            <span className="font-[var(--font-inter)] text-[#6B7280] text-[9px] tracking-widest uppercase font-medium">
              VENTURES
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-[#1A1A2E] text-sm font-medium hover:text-[#2E5F8A] transition-colors">
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 grid grid-cols-1 gap-0.5"
                    >
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="px-3 py-2 rounded-lg text-sm text-[#1A1A2E] hover:bg-[#F8F9FA] hover:text-[#2E5F8A] transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#1A1A2E] text-sm font-medium hover:text-[#2E5F8A] transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="https://calendly.com/audax-ventures/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#2E5F8A] text-white text-sm font-semibold hover:bg-[#3A7BD5] transition-colors shadow-sm"
          >
            Book a Free Strategy Call
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#1A1A2E] hover:bg-[#F8F9FA] hover:text-[#2E5F8A] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMobileOpen(false)}
                  className="pl-6 py-2 rounded-lg text-sm text-[#6B7280] hover:text-[#2E5F8A] transition-colors"
                >
                  — {s.label}
                </Link>
              ))}
              <Link
                href="https://calendly.com/audax-ventures/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full text-center px-5 py-3 rounded-full bg-[#2E5F8A] text-white text-sm font-semibold hover:bg-[#3A7BD5] transition-colors"
              >
                Book a Free Strategy Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
