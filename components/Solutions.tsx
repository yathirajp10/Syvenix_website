"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Server,
  Search,
  ShieldCheck,
  BarChart3,
  Mail,
} from "lucide-react";

import SolutionCard from "./solutions/SolutionCard";

const solutions = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive, and high-performance business websites designed to build trust, generate leads, and grow your online presence.",
  },
  {
    icon: Server,
    title: "Hosting & Domains",
    description:
      "Complete hosting setup, domain management, DNS configuration, SSL installation, and secure infrastructure for your business.",
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description:
      "Technical SEO, fast loading performance, metadata optimization, sitemap configuration, and search engine indexing.",
  },
  {
    icon: ShieldCheck,
    title: "Website Maintenance",
    description:
      "Regular updates, security monitoring, backups, bug fixes, and ongoing maintenance to keep your website performing at its best.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Google Analytics, Microsoft Clarity, visitor behavior tracking, and actionable insights to support business growth.",
  },
  {
    icon: Mail,
    title: "Business Email Setup",
    description:
      "Professional business email configuration with domain integration to establish credibility and improve communication.",
  },
];

export default function Solutions() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050816] py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-40 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Badge */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-[#007BFF]/20 bg-[#007BFF]/10 px-5 py-2"
        >
          <span className="h-2 w-2 rounded-full bg-[#00CFFF]" />

          <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#00CFFF]">
            Our Solutions
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-8 max-w-4xl text-5xl font-bold leading-tight text-white md:text-6xl xl:text-7xl"
        >
          Digital Solutions
          <br />
          Built For{" "}
          <span className="bg-gradient-to-r from-[#007BFF] to-[#00CFFF] bg-clip-text text-transparent">
            Modern Businesses.
          </span>
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 max-w-3xl text-lg leading-8 text-slate-300"
        >
          We provide complete digital solutions that help businesses establish,
          grow, and maintain a strong online presence. Every solution is
          designed with performance, security, scalability, and long-term
          business growth in mind.
        </motion.p>

        {/* Solutions Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <SolutionCard
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}