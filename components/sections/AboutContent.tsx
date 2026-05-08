"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Zap, Users, Shield, TrendingUp, MapPin } from "lucide-react";

const stats = [
  { value: "+1,000", label: "Completed Projects" },
  { value: "+350",   label: "Happy Customers"    },
  { value: "98.9%",  label: "Customer Satisfaction" },
];

const values = [
  {
    icon: Target,
    title: "Scope Discipline",
    description:
      "We help clients build what they need — nothing more. The right scope, ruthlessly applied, is the difference between a product that ships and one that never does.",
  },
  {
    icon: Heart,
    title: "Founder Empathy",
    description:
      "We understand the pressure founders face. That understanding drives us to be careful, honest, and genuinely invested in every dollar and decision.",
  },
  {
    icon: Zap,
    title: "Bias to Ship",
    description:
      "A working product in users' hands beats a perfect product on a roadmap. We optimize for learning and momentum, not perfection.",
  },
  {
    icon: Users,
    title: "Radical Transparency",
    description:
      "We tell you when something won't work, when a timeline is unrealistic, and when an idea needs more validation — even when it's uncomfortable.",
  },
  {
    icon: Shield,
    title: "Quality Without Compromise",
    description:
      "Fast doesn't mean fragile. We build on solid foundations — every project includes proper architecture, documentation, and the structure you can grow on for years.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Thinking",
    description:
      "We make decisions that serve your product's long-term trajectory. Our best client relationships span years, not sprints — and we build accordingly.",
  },
];

const team = [
  {
    name: "Joshua Zaporzan",
    role: "President",
    avatar: "JZ",
    bio: "Joshua leads Audax Ventures with a focus on combining software innovation, capital strategy, and operational excellence. He works closely with founders and enterprise teams to define what's possible and ensure every engagement delivers real business outcomes.",
    linkedin: "#",
  },
  {
    name: "Manoj Manghnani",
    role: "Director of Technology",
    avatar: "MM",
    bio: "Manoj sets technical standards across all Audax engagements. He brings deep expertise in software architecture and leads the technical direction of complex builds — ensuring the systems we deliver are scalable, maintainable, and production-grade from day one.",
    linkedin: "#",
  },
  {
    name: "Denise Zaporzan",
    role: "Director of Strategy",
    avatar: "DZ",
    bio: "Denise leads strategy development for Audax clients, helping founders and enterprise teams align their software investments with their broader business goals. She specializes in go-to-market positioning, operational design, and growth planning.",
    linkedin: "#",
  },
  {
    name: "Riley Peterson",
    role: "Project & Venture Manager",
    avatar: "RP",
    bio: "Riley manages project delivery and venture development across the Audax portfolio. He keeps engagements on scope, on schedule, and on budget — acting as the day-to-day link between clients and the delivery team throughout every phase of a build.",
    linkedin: "#",
  },
  {
    name: "Lawson Yates",
    role: "Marketing Manager",
    avatar: "LY",
    bio: "Lawson drives marketing strategy and execution for Audax and supports clients with their own go-to-market efforts. He combines content strategy, digital marketing, and brand development to build visibility and demand for the products we help create.",
    linkedin: "#",
  },
  {
    name: "Lindsay Friesen",
    role: "Project Manager",
    avatar: "LF",
    bio: "Lindsay ensures every Audax project runs smoothly from kickoff through launch. She coordinates between design, development, and client stakeholders — keeping communication clear, timelines realistic, and deliverables on track across multiple concurrent engagements.",
    linkedin: "#",
  },
];

const segments = [
  {
    badge: "Early-Stage Founders",
    description:
      "MVP development, market positioning, and fundraising support — from raw idea to a product your investors can actually see.",
  },
  {
    badge: "Scaling Businesses",
    description:
      "Operations optimization, internal tooling, and fractional C-suite leadership — building the systems and team your growth demands.",
  },
  {
    badge: "Exit-Focused Owners",
    description:
      "Transition planning, technology due diligence support, and investor matchmaking — positioning your business for the outcome you've worked toward.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function AboutContent() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#F8F9FA] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-5"
          >
            <MapPin size={13} /> Winnipeg, Manitoba, Canada
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-[var(--font-outfit)] font-extrabold text-4xl sm:text-5xl text-[#1A1A2E] mb-6 leading-tight"
          >
            Your Canadian Software Development Partner for Startups and Scaleups
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#6B7280] text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Audax Ventures is a software development company and venture studio that combines software innovation, capital strategy, and operational excellence — built to help ambitious founders and growing companies launch, scale, and thrive.
          </motion.p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-14 bg-[#2E5F8A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-[var(--font-outfit)] font-extrabold text-4xl sm:text-5xl text-white mb-2 tabular-nums">
                  {s.value}
                </div>
                <div className="text-blue-200 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#2E5F8A] rounded-3xl p-10 text-white"
            >
              <Target className="mb-5 text-blue-200" size={32} />
              <p className="text-xs tracking-widest uppercase text-blue-300 font-semibold mb-3">Our Mission</p>
              <h2 className="font-[var(--font-outfit)] font-extrabold text-xl sm:text-2xl mb-4 leading-snug">
                &ldquo;To equip ambitious founders and growing companies with the software, strategy, and capital they need to launch, scale, and thrive.&rdquo;
              </h2>
              <p className="text-blue-100 leading-relaxed text-sm">
                We go beyond building software — we bring the strategy, capital connections, and operational expertise that turn a great idea into a real, growing business.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#1A1A2E] rounded-3xl p-10 text-white"
            >
              <Eye className="mb-5 text-blue-300" size={32} />
              <p className="text-xs tracking-widest uppercase text-blue-400 font-semibold mb-3">Our Vision</p>
              <h2 className="font-[var(--font-outfit)] font-extrabold text-xl sm:text-2xl mb-4 leading-snug">
                &ldquo;To ignite a world where technology-driven ventures reshape industries and propel sustainable economic growth.&rdquo;
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm">
                We believe in the power of technology to change the world — and we are committed to making that change positive, impactful, and enduring.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-4">Who We Are</p>
            <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl text-[#1A1A2E] mb-6">
              Canadian Software Development &amp; Fractional Services Experts
            </h2>
            <div className="space-y-4 text-[#6B7280] text-base leading-relaxed">
              <p>
                Audax Ventures is built around a simple conviction: ambitious companies deserve a partner that can move with them at every stage. We are not just a development shop — we are a venture studio that combines hands-on software delivery with the strategic and operational support that founders and growing businesses actually need.
              </p>
              <p>
                We work with three kinds of clients. Early-stage founders who need to validate, build, and launch their first product. Scaling businesses that need the right systems, team, and leadership to grow without breaking. And exit-focused owners who want to maximize value and find the right path forward.
              </p>
              <p>
                Across all three, our approach is the same: a tailored mix of software innovation, capital strategy, and operational excellence — delivered by a team that fosters creativity, takes calculated risks, and treats your business as seriously as our own.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Client Segments ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">Who We Work With</p>
            <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl text-[#1A1A2E]">Built for Every Stage of Growth</h2>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {segments.map((s, i) => (
              <motion.div
                key={s.badge}
                variants={fadeUp}
                className="bg-[#F8F9FA] rounded-2xl p-7 border border-gray-100 hover:border-[#2E5F8A]/30 hover:shadow-md transition-all duration-200"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#2E5F8A]/10 text-[#2E5F8A] text-xs font-bold tracking-wide mb-4">
                  0{i + 1} — {s.badge}
                </div>
                <p className="text-[#374151] text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">What We Stand For</p>
            <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1A1A2E]">Core Values</h2>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2E5F8A]/10 flex items-center justify-center mb-4">
                  <v.icon className="text-[#2E5F8A]" size={20} />
                </div>
                <h3 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] mb-2">{v.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">The People</p>
            <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1A1A2E]">Our Team</h2>
            <p className="text-[#6B7280] mt-4 max-w-xl mx-auto">
              A tight-knit group of builders, strategists, and operators — all based in Canada, all focused on your outcomes.
            </p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                className="group bg-[#F8F9FA] rounded-2xl p-7 border border-gray-100 hover:border-[#2E5F8A]/30 hover:shadow-md transition-all duration-200 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#2E5F8A] flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:bg-[#3A7BD5] transition-colors font-[var(--font-outfit)]">
                  {member.avatar}
                </div>
                <h3 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] mb-0.5">{member.name}</h3>
                <p className="text-[#2E5F8A] text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{member.bio}</p>
                <a
                  href={member.linkedin}
                  className="inline-flex items-center gap-1.5 text-xs text-[#9CA3AF] hover:text-[#2E5F8A] transition-colors"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  LinkedIn
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
