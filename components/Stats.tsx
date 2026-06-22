"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Server,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: Globe,
    value: "1+",
    label: "Live Business Website",
  },
  {
    icon: Smartphone,
    value: "100%",
    label: "Responsive Design",
  },
  {
    icon: Server,
    value: "End-to-End",
    label: "Hosting & Domain Setup",
  },
  {
    icon: ShieldCheck,
    value: "Support",
    label: "Maintenance Available",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(37,99,235,0.2)] transition-all duration-300"
            >
              <stat.icon
                size={40}
                className="mx-auto text-blue-400"
              />

              <h3 className="mt-6 text-4xl font-bold text-white">
                {stat.value}
              </h3>

              <p className="mt-3 text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}