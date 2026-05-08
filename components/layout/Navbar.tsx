"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Phone } from "lucide-react";

const mainServices = [
  { label: "MVP Development",      href: "/services/mvp-development",  desc: "Validate and ship your idea fast",       num: "01" },
  { label: "SaaS Development",     href: "/services/saas-development",  desc: "Scalable, multi-tenant platforms",      num: "02" },
  { label: "Internal Development", href: "/services/internal-tools",    desc: "Custom tools for your internal teams",  num: "03" },
];

const otherServices = [
  { label: "Website Development",         href: "/services/website-development" },
  { label: "E-Commerce Development",      href: "/services/ecommerce-development" },
  { label: "iOS Development",             href: "/services/ios-development" },
  { label: "Android Development",         href: "/services/android-development" },
  { label: "Front End Development",       href: "/services/frontend-development" },
  { label: "Back End Development",        href: "/services/backend-development" },
  { label: "Web Development",             href: "/services/web-development" },
  { label: "Custom Software Development", href: "/services/custom-software-development" },
  { label: "QA & Testing",               href: "/services/qa-testing" },
  { label: "Process Automation",          href: "/services/process-automation" },
  { label: "Customer Service Automation", href: "/services/customer-service-automation" },
  { label: "AI Consulting",               href: "/services/ai-consulting" },
  { label: "CRM Systems",                 href: "/services/crm-systems" },
  { label: "CTO-as-a-Service",            href: "/services/cto-as-a-service" },
  { label: "Digital Marketing",           href: "/services/digital-marketing" },
];

const programs = [
  { label: "Catalyst for Founders",       href: "/programs/catalyst-for-founders",       desc: "Validate → Launch → Scale for founders",          num: "01" },
  { label: "Enterprise Innovation Program", href: "/programs/enterprise-innovation-program", desc: "Audit → Build → Scale for corporate teams",        num: "02" },
];

const mainIndustries = [
  { label: "Healthcare & Medical",        href: "/industries/healthcare-medical",        desc: "HIPAA-compliant platforms & patient tools",      num: "01" },
  { label: "Manufacturing",               href: "/industries/manufacturing",              desc: "ERP, automation & operations software",          num: "02" },
  { label: "Real Estate & Construction",  href: "/industries/real-estate-construction",  desc: "PropTech, CRM & project management platforms",  num: "03" },
];

const otherIndustries = [
  { label: "FinTech & Finance",            href: "/industries/fintech-finance" },
  { label: "Retail & E-Commerce",          href: "/industries/retail-ecommerce" },
  { label: "Education & EdTech",           href: "/industries/education-edtech" },
  { label: "Hospitality & Tourism",        href: "/industries/hospitality-tourism" },
  { label: "Legal & Professional Services", href: "/industries/legal-professional-services" },
  { label: "Transportation & Logistics",   href: "/industries/transportation-logistics" },
  { label: "Non-Profit & Social Impact",   href: "/industries/non-profit" },
  { label: "Technology & SaaS",            href: "/industries/technology-saas" },
];

const navLinks = [
  { label: "Home",           href: "/",                                  hasDropdown: false, hasIndustriesDropdown: false },
  { label: "Services",       href: "/services/mvp-development",          hasDropdown: true,  hasIndustriesDropdown: false },
  { label: "Industries",     href: "/industries",                         hasDropdown: false, hasIndustriesDropdown: true  },
  { label: "Programs",       href: "/programs",                           hasDropdown: false, hasIndustriesDropdown: false, hasProgramsDropdown: true },
  { label: "About",          href: "/about",                             hasDropdown: false, hasIndustriesDropdown: false },
  { label: "Resources",      href: "/blog",                              hasDropdown: false, hasIndustriesDropdown: false },
  { label: "MVP Calculator", href: "/mvp-calculator",                    hasDropdown: false, hasIndustriesDropdown: false },
];

export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [servicesOpen, setServicesOpen]     = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [programsOpen, setProgramsOpen]     = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("/").slice(0, 2).join("/"));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-2xl shadow-[0_2px_20px_rgba(0,0,0,0.08)] py-3"
          : "bg-white/95 backdrop-blur-md py-4"
      }`}
    >
      {/* Gradient bottom border */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2E5F8A]/30 to-transparent"
          />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/audax-logo.png"
            alt="Audax Ventures"
            width={160}
            height={52}
            priority
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-[1.04]"
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {

            /* ── Services Mega Dropdown ── */
            if (link.hasDropdown) return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive(link.href)
                      ? "text-[#2E5F8A] bg-[#2E5F8A]/8 font-semibold"
                      : "text-[#1A1A2E] hover:text-[#2E5F8A] hover:bg-[#2E5F8A]/6"
                  } ${servicesOpen ? "text-[#2E5F8A] bg-[#2E5F8A]/8" : ""}`}
                >
                  {link.label}
                  <ChevronDown size={13} className={`transition-transform duration-250 ${servicesOpen ? "rotate-180 text-[#2E5F8A]" : ""}`} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[840px] bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden"
                    >
                      <div className="flex">
                        {/* Main services */}
                        <div className="w-64 shrink-0 bg-[#F8F9FA] p-5 border-r border-gray-100">
                          <p className="text-[10px] font-bold tracking-widest uppercase text-[#2E5F8A] mb-4">Main Services</p>
                          <div className="flex flex-col gap-1">
                            {mainServices.map((s) => (
                              <Link key={s.href} href={s.href} className="group flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-white transition-all duration-200 hover:shadow-sm">
                                <span className="mt-0.5 text-[10px] font-bold text-[#2E5F8A]/40 tabular-nums group-hover:text-[#2E5F8A] transition-colors">{s.num}</span>
                                <div>
                                  <p className="text-sm font-semibold text-[#1A1A2E] group-hover:text-[#2E5F8A] transition-colors leading-tight">{s.label}</p>
                                  <p className="text-xs text-[#6B7280] mt-0.5">{s.desc}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        {/* Other services */}
                        <div className="flex-1 p-5">
                          <p className="text-[10px] font-bold tracking-widest uppercase text-[#6B7280] mb-4">Other Services</p>
                          <div className="grid grid-cols-3 gap-x-2 gap-y-0.5">
                            {otherServices.map((s) => (
                              <Link key={s.href} href={s.href} className="px-2.5 py-2 rounded-lg text-sm text-[#374151] hover:bg-[#F8F9FA] hover:text-[#2E5F8A] transition-all duration-150 font-medium">
                                {s.label}
                              </Link>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                            <p className="text-xs text-[#6B7280]">18 services across web, mobile & AI</p>
                            <Link href="/services/mvp-development" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2E5F8A] hover:text-[#3A7BD5] transition-colors">
                              View all services <ArrowRight size={11} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );

            /* ── Industries Mega Dropdown ── */
            if (link.hasIndustriesDropdown) return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() => setIndustriesOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive(link.href)
                      ? "text-[#2E5F8A] bg-[#2E5F8A]/8 font-semibold"
                      : "text-[#1A1A2E] hover:text-[#2E5F8A] hover:bg-[#2E5F8A]/6"
                  } ${industriesOpen ? "text-[#2E5F8A] bg-[#2E5F8A]/8" : ""}`}
                >
                  {link.label}
                  <ChevronDown size={13} className={`transition-transform duration-250 ${industriesOpen ? "rotate-180 text-[#2E5F8A]" : ""}`} />
                </button>

                <AnimatePresence>
                  {industriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[760px] bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden"
                    >
                      <div className="flex">
                        {/* Main industries */}
                        <div className="w-64 shrink-0 bg-[#F8F9FA] p-5 border-r border-gray-100">
                          <p className="text-[10px] font-bold tracking-widest uppercase text-[#2E5F8A] mb-4">Main Industries</p>
                          <div className="flex flex-col gap-1">
                            {mainIndustries.map((ind) => (
                              <Link key={ind.href} href={ind.href} className="group flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-white transition-all duration-200 hover:shadow-sm">
                                <span className="mt-0.5 text-[10px] font-bold text-[#2E5F8A]/40 tabular-nums group-hover:text-[#2E5F8A] transition-colors">{ind.num}</span>
                                <div>
                                  <p className="text-sm font-semibold text-[#1A1A2E] group-hover:text-[#2E5F8A] transition-colors leading-tight">{ind.label}</p>
                                  <p className="text-xs text-[#6B7280] mt-0.5">{ind.desc}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        {/* Other industries */}
                        <div className="flex-1 p-5">
                          <p className="text-[10px] font-bold tracking-widest uppercase text-[#6B7280] mb-4">All Industries</p>
                          <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                            {otherIndustries.map((ind) => (
                              <Link key={ind.href} href={ind.href} className="px-2.5 py-2 rounded-lg text-sm text-[#374151] hover:bg-[#F8F9FA] hover:text-[#2E5F8A] transition-all duration-150 font-medium">
                                {ind.label}
                              </Link>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                            <p className="text-xs text-[#6B7280]">11 industries served across Canada & beyond</p>
                            <Link href="/industries" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2E5F8A] hover:text-[#3A7BD5] transition-colors">
                              View all industries <ArrowRight size={11} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );

            /* ── Programs Dropdown ── */
            if (link.hasProgramsDropdown) return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setProgramsOpen(true)}
                onMouseLeave={() => setProgramsOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive(link.href)
                      ? "text-[#2E5F8A] bg-[#2E5F8A]/8 font-semibold"
                      : "text-[#1A1A2E] hover:text-[#2E5F8A] hover:bg-[#2E5F8A]/6"
                  } ${programsOpen ? "text-[#2E5F8A] bg-[#2E5F8A]/8" : ""}`}
                >
                  {link.label}
                  <ChevronDown size={13} className={`transition-transform duration-250 ${programsOpen ? "rotate-180 text-[#2E5F8A]" : ""}`} />
                </Link>

                <AnimatePresence>
                  {programsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden"
                    >
                      <div className="p-5">
                        <p className="text-[10px] font-bold tracking-widest uppercase text-[#2E5F8A] mb-4">Our Programs</p>
                        <div className="flex flex-col gap-1">
                          {programs.map((p) => (
                            <Link key={p.href} href={p.href} className="group flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-[#F8F9FA] transition-all duration-200">
                              <span className="mt-0.5 text-[10px] font-bold text-[#2E5F8A]/40 tabular-nums group-hover:text-[#2E5F8A] transition-colors">{p.num}</span>
                              <div>
                                <p className="text-sm font-semibold text-[#1A1A2E] group-hover:text-[#2E5F8A] transition-colors leading-tight">{p.label}</p>
                                <p className="text-xs text-[#6B7280] mt-0.5">{p.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-end">
                          <Link href="/programs" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2E5F8A] hover:text-[#3A7BD5] transition-colors">
                            View all programs <ArrowRight size={11} />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );

            /* ── Regular link ── */
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-[#2E5F8A] bg-[#2E5F8A]/8 font-semibold"
                    : "text-[#1A1A2E] hover:text-[#2E5F8A] hover:bg-[#2E5F8A]/6"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* ── CTA with shimmer ── */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="https://calendly.com/audax-ventures/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2E5F8A] text-white text-sm font-semibold transition-all duration-300 hover:bg-[#3A7BD5] hover:shadow-[0_0_24px_rgba(46,95,138,0.45)] hover:scale-[1.03]"
          >
            <motion.span
              className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
              animate={{ x: ["-150%", "250%"] }}
              transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 3.5, ease: "easeInOut" }}
            />
            <Phone size={13} />
            Book a Free Strategy Call
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="block"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden overflow-hidden border-t border-gray-100"
          >
            <div className="bg-white px-4 py-4">
              {/* Main nav links */}
              <div className="flex flex-col gap-0.5 mb-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-[#2E5F8A]/8 text-[#2E5F8A] font-semibold"
                        : "text-[#1A1A2E] hover:bg-[#F8F9FA] hover:text-[#2E5F8A]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Services sub-section */}
              <div className="border-t border-gray-100 pt-4 mb-4">
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#2E5F8A] px-3 mb-2">Main Services</p>
                {mainServices.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 pl-5 pr-3 py-2 rounded-lg text-sm text-[#374151] hover:text-[#2E5F8A] hover:bg-[#F8F9FA] transition-colors font-medium">
                    <span className="text-[10px] text-[#2E5F8A]/50 font-bold tabular-nums">{s.num}</span>
                    {s.label}
                  </Link>
                ))}
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#6B7280] px-3 mt-4 mb-2">Other Services</p>
                <div className="grid grid-cols-2 gap-x-2">
                  {otherServices.map((s) => (
                    <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}
                      className="pl-5 pr-2 py-1.5 rounded-lg text-xs text-[#6B7280] hover:text-[#2E5F8A] hover:bg-[#F8F9FA] transition-colors">
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Industries sub-section */}
              <div className="border-t border-gray-100 pt-4 mb-4">
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#2E5F8A] px-3 mb-2">Main Industries</p>
                {mainIndustries.map((ind) => (
                  <Link key={ind.href} href={ind.href} onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 pl-5 pr-3 py-2 rounded-lg text-sm text-[#374151] hover:text-[#2E5F8A] hover:bg-[#F8F9FA] transition-colors font-medium">
                    <span className="text-[10px] text-[#2E5F8A]/50 font-bold tabular-nums">{ind.num}</span>
                    {ind.label}
                  </Link>
                ))}
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#6B7280] px-3 mt-4 mb-2">All Industries</p>
                <div className="grid grid-cols-2 gap-x-2">
                  {otherIndustries.map((ind) => (
                    <Link key={ind.href} href={ind.href} onClick={() => setMobileOpen(false)}
                      className="pl-5 pr-2 py-1.5 rounded-lg text-xs text-[#6B7280] hover:text-[#2E5F8A] hover:bg-[#F8F9FA] transition-colors">
                      {ind.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Programs sub-section */}
              <div className="border-t border-gray-100 pt-4 mb-4">
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#2E5F8A] px-3 mb-2">Programs</p>
                {programs.map((p) => (
                  <Link key={p.href} href={p.href} onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 pl-5 pr-3 py-2 rounded-lg text-sm text-[#374151] hover:text-[#2E5F8A] hover:bg-[#F8F9FA] transition-colors font-medium">
                    <span className="text-[10px] text-[#2E5F8A]/50 font-bold tabular-nums">{p.num}</span>
                    {p.label}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <Link
                href="https://calendly.com/audax-ventures/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-2xl bg-[#2E5F8A] text-white text-sm font-bold hover:bg-[#3A7BD5] transition-colors"
              >
                <Phone size={14} />
                Book a Free Strategy Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
