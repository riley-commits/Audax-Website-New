"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const mainServices = [
  { label: "MVP Development", href: "/services/mvp-development", desc: "Validate and ship your idea fast" },
  { label: "SaaS Development", href: "/services/saas-development", desc: "Scalable, multi-tenant platforms" },
  { label: "Internal Development", href: "/services/internal-tools", desc: "Custom tools for your internal teams" },
];

const otherServices = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "E-Commerce Development", href: "/services/ecommerce-development" },
  { label: "iOS Development", href: "/services/ios-development" },
  { label: "Android Development", href: "/services/android-development" },
  { label: "Front End Development", href: "/services/frontend-development" },
  { label: "Back End Development", href: "/services/backend-development" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "Custom Software Development", href: "/services/custom-software-development" },
  { label: "QA & Testing", href: "/services/qa-testing" },
  { label: "Process Automation", href: "/services/process-automation" },
  { label: "Customer Service Automation", href: "/services/customer-service-automation" },
  { label: "AI Consulting", href: "/services/ai-consulting" },
  { label: "CRM Systems", href: "/services/crm-systems" },
  { label: "CTO-as-a-Service", href: "/services/cto-as-a-service" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
];

const allServices = [...mainServices, ...otherServices];

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
        <Link href="/" className="flex items-center">
          <Image src="/audax-logo.png" alt="Audax Ventures" width={160} height={52} priority className="h-10 w-auto" />
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
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[820px] bg-white rounded-2xl shadow-xl border border-gray-100 p-5"
                    >
                      <div className="flex gap-6">
                        {/* Main Services — 1 column, 3 rows */}
                        <div className="w-56 shrink-0">
                          <p className="text-[10px] font-semibold tracking-widest uppercase text-[#2E5F8A] mb-3 px-1">Main Services</p>
                          <div className="flex flex-col gap-0.5">
                            {mainServices.map((s) => (
                              <Link
                                key={s.href}
                                href={s.href}
                                className="group px-3 py-2.5 rounded-xl hover:bg-[#F8F9FA] transition-colors"
                              >
                                <p className="text-sm font-semibold text-[#1A1A2E] group-hover:text-[#2E5F8A] transition-colors">{s.label}</p>
                                <p className="text-xs text-[#6B7280] mt-0.5">{s.desc}</p>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="w-px bg-gray-100 self-stretch" />

                        {/* Other Services — 3 columns, 5 rows */}
                        <div className="flex-1">
                          <p className="text-[10px] font-semibold tracking-widest uppercase text-[#6B7280] mb-3 px-1">Other Services</p>
                          <div className="grid grid-cols-3 gap-x-2 gap-y-0.5">
                            {otherServices.map((s) => (
                              <Link
                                key={s.href}
                                href={s.href}
                                className="px-2 py-2 rounded-lg text-sm text-[#1A1A2E] hover:bg-[#F8F9FA] hover:text-[#2E5F8A] transition-colors"
                              >
                                {s.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
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
              {allServices.map((s) => (
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
