"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Zap, Users, Shield, TrendingUp } from "lucide-react";

const values = [
  { icon: Target, title: "Scope Discipline", description: "We help clients build less, not more. The right scope, ruthlessly applied, is the difference between a product that ships and one that doesn't." },
  { icon: Heart, title: "Founder Empathy", description: "We've been in the room when a startup runs out of runway. That experience makes us careful with every dollar our clients invest." },
  { icon: Zap, title: "Bias to Ship", description: "A working product in users' hands beats a perfect product on a roadmap. We optimize for learning, not perfection." },
  { icon: Users, title: "Radical Transparency", description: "We tell you when something won't work, when a timeline is unrealistic, and when your idea needs more validation. Even when it's uncomfortable." },
  { icon: Shield, title: "Quality Without Compromise", description: "Fast doesn't mean fragile. We build on solid foundations — every project has tests, documentation, and architecture you can build on for years." },
  { icon: TrendingUp, title: "Long-Term Thinking", description: "Our best clients are ones we've worked with for 3+ years. We make decisions that serve your product's long-term trajectory, not our short-term billings." },
];

const team = [
  { name: "Riley Peterson", role: "CEO & Co-Founder", avatar: "RP", bio: "10+ years building software companies in Toronto and Vancouver. Former founder of two SaaS companies, both acquired. Riley leads client strategy and oversees all engagements.", linkedin: "#" },
  { name: "Marcus Chen", role: "CTO & Co-Founder", avatar: "MC", bio: "Former engineering lead at Shopify and two YC-backed startups. Marcus sets technical standards across all projects and personally leads architecture review for every engagement.", linkedin: "#" },
  { name: "Priya Nair", role: "Head of Design", avatar: "PN", bio: "Previously design lead at a Series B fintech startup. Priya's team has designed over 40 digital products from wireframe to launch, with a focus on conversion-driven interfaces.", linkedin: "#" },
  { name: "James Okafor", role: "Head of Engineering", avatar: "JO", bio: "Full-stack engineer with 8 years experience across React, Node.js, and cloud infrastructure. James manages day-to-day development quality and mentors our engineering team.", linkedin: "#" },
  { name: "Sofia Reyes", role: "Head of Growth", avatar: "SR", bio: "Grew 0→1 customer acquisition for three SaaS companies. Sofia leads our digital marketing practice and helps Catalyst clients build their go-to-market strategy.", linkedin: "#" },
  { name: "Daniel Park", role: "Senior Full-Stack Engineer", avatar: "DP", bio: "AI and automation specialist with deep experience building LLM-powered tools. Daniel leads our AI practice and complex backend architecture projects.", linkedin: "#" },
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
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-[var(--font-outfit)] font-extrabold text-4xl sm:text-5xl text-[#1A1A2E] mb-6"
          >
            Built by Founders, for Founders
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#6B7280] text-lg leading-relaxed"
          >
            Audax Ventures was born from a simple frustration: too many great ideas failing because of bad technical execution.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[#F8F9FA]">
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
              <h2 className="font-[var(--font-outfit)] font-extrabold text-2xl mb-4">
                &ldquo;To be the most founder-aligned software partner in North America.&rdquo;
              </h2>
              <p className="text-blue-100 leading-relaxed text-sm">
                Every decision we make — from how we scope projects to how we structure contracts — is optimized for founder success. Not our billable hours. Your outcomes.
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
              <h2 className="font-[var(--font-outfit)] font-extrabold text-2xl mb-4">
                &ldquo;A world where great ideas are never limited by technical execution.&rdquo;
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm">
                Technical execution is a solvable problem. We believe every founder with a real insight and a real market deserves a technical partner capable of bringing that vision to life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-4">How We Started</p>
            <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl text-[#1A1A2E] mb-6">The Origin Story</h2>
            <div className="prose prose-lg text-[#6B7280] leading-relaxed space-y-4">
              <p>
                In 2019, Audax Ventures co-founders Riley Peterson and Marcus Chen were on opposite sides of the same problem. Riley had just exited a SaaS company he&apos;d built with a development agency that nearly tanked the product. Marcus had just left that agency — exhausted by building products for clients who didn&apos;t understand them.
              </p>
              <p>
                They met at a Toronto founder event and spent three hours comparing war stories. Riley&apos;s insight: founders needed a technical partner who cared about outcomes, not just deliverables. Marcus&apos;s insight: engineers needed clients who were engaged collaborators, not passive cheque-writers.
              </p>
              <p>
                They launched Audax Ventures in 2020 with a single principle: act like a co-founder, not a contractor. That meant challenging scope, sharing honest technical opinions, and aligning economics with outcomes rather than billable hours.
              </p>
              <p>
                Four years later, we&apos;ve built 50+ products for founders and enterprise teams across Canada and the United States. Our first client — a Toronto-based supply chain startup — has since raised $12M. Eleven Catalyst clients have raised rounds using their MVPs as proof points. Three have been acquired.
              </p>
              <p>
                We&apos;re still small by design. We take on fewer clients than we could, so that every engagement gets the quality of attention it deserves. We believe in this enough to turn away work that isn&apos;t the right fit.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
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

      {/* Team */}
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
                className="group text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#2E5F8A] flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:bg-[#3A7BD5] transition-colors">
                  {member.avatar}
                </div>
                <h3 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] mb-0.5">{member.name}</h3>
                <p className="text-[#2E5F8A] text-sm font-medium mb-3">{member.role}</p>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-3">{member.bio}</p>
                <a
                  href={member.linkedin}
                  className="inline-flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-[#2E5F8A] transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> LinkedIn
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
