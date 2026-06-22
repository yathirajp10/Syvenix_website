"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Smartphone,
  Gauge,
  Search,
  Globe,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Built for Business",
    description:
      "Every solution is designed to strengthen your brand, build trust, and support long-term business growth.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    description:
      "Optimized for every screen size to ensure a seamless experience across phones, tablets, and desktops.",
  },
  {
    icon: Gauge,
    title: "Performance Focused",
    description:
      "Fast-loading, optimized websites engineered for speed, usability, and a better user experience.",
  },
  {
    icon: Search,
    title: "Search Engine Ready",
    description:
      "Technical SEO foundations including indexing, metadata, sitemaps, and analytics setup from day one.",
  },
  {
    icon: Globe,
    title: "Complete Digital Infrastructure",
    description:
      "From domains and hosting to SSL, DNS, and deployment, everything is managed under one roof.",
  },
  {
    icon: Headphones,
    title: "Long-Term Partnership",
    description:
      "We continue supporting your business with maintenance, improvements, monitoring, and technical guidance.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28 text-white">
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#007BFF10,transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-semibold uppercase tracking-[0.25em] text-blue-400">
            Why Syvenix
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            More Than a Service Provider.
            <span className="bg-gradient-to-r from-[#007BFF] to-[#00CFFF] bg-clip-text text-transparent">
              {" "}A Technology Partner.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            We don't simply deliver websites. We provide technology
            solutions that help businesses establish, grow, and adapt
            in an increasingly digital world.
          </p>
        </motion.div>

        {/* Features */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-800
                  bg-slate-900
                  p-8
                  transition-all
                  duration-300
                  hover:border-[#007BFF]/40
                  hover:shadow-2xl
                  hover:shadow-blue-500/10
                "
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#007BFF]/15 to-[#00CFFF]/15">
                  <Icon
                    size={30}
                    className="text-[#00CFFF]"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}