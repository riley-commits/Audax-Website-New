"use client";

import { motion } from "framer-motion";
import { Search, Palette, Code2, Cloud, HeartHandshake } from "lucide-react";

const steps = [
  { icon: Search, number: "01", title: "Discovery", description: "Requirements, user research, scope, and technical feasibility — we align on what to build and why before writing a line of code." },
  { icon: Palette, number: "02", title: "UI/UX Design", description: "Wireframes, prototypes, and pixel-perfect Figma designs reviewed with your team before development starts." },
  { icon: Code2, number: "03", title: "Core Development", description: "Agile 2-week sprints with a working demo at the end of each. You see progress and provide feedback throughout." },
  { icon: Cloud, number: "04", title: "DevOps & Infrastructure", description: "CI/CD pipeline, cloud deployment, monitoring, and security hardening — production-ready from day one." },
  { icon: HeartHandshake, number: "05", title: "Ongoing Support", description: "Post-launch retainers for bug fixes, performance optimization, and new feature development as you grow." },
];

export default function ProcessSteps() {
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
          <p className="text-xs tracking-widest uppercase text-[#2E5F8A] font-semibold mb-3">How We Work</p>
          <h2 className="font-[var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1A1A2E] mb-4">
            Our Process
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            A repeatable, transparent process that keeps you in control at every step.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#2E5F8A] to-[#3A7BD5] opacity-20" />

          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center"
              >
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#2E5F8A] flex items-center justify-center shadow-lg shadow-blue-900/20">
                      <step.icon className="text-white" size={24} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#3A7BD5] text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-outfit)] font-bold text-[#1A1A2E] mb-2">{step.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
