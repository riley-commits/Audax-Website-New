"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "8–16", label: "Weeks to MVP Launch" },
  { value: "$0", label: "Hidden Fees" },
];

const trustedBy = ["TechFlow", "NorthBridge", "Meridian", "Apex Digital", "CloudPath", "Pinnacle AI"];

export default function StatsBar() {
  return (
    <>
      <section className="bg-[#F8F9FA] py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs tracking-widest uppercase text-[#6B7280] font-semibold mb-8">
            Trusted by founders and enterprises across North America
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {trustedBy.map((name) => (
              <div key={name} className="text-[#6B7280]/60 font-[var(--font-outfit)] font-bold text-lg tracking-tight">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2E5F8A] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-[var(--font-outfit)] font-extrabold text-4xl text-white mb-1">
                  {s.value}
                </div>
                <div className="text-blue-200 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
