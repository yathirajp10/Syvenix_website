"use client";

import { motion } from "framer-motion";
import { Target, Eye, Gem } from "lucide-react";

const cards = [
  {
    icon: <Target size={28} />,
    title: "Our Mission",
    description:
      "Empower businesses with intelligent technology solutions that strengthen their digital presence, improve efficiency, and enable sustainable growth.",
  },
  {
    icon: <Eye size={28} />,
    title: "Our Vision",
    description:
      "To build Syvenix into a globally trusted technology company delivering innovative digital products, AI-powered solutions, and future-ready business technologies.",
  },
  {
    icon: <Gem size={28} />,
    title: "Our Values",
    description:
      "Innovation, Integrity, Customer Success, Quality, Collaboration, and Continuous Learning drive every project we deliver.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Label */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-[#007BFF]/20 bg-[#007BFF]/10 px-5 py-2"
        >
          <span className="h-2 w-2 rounded-full bg-[#00CFFF]" />

          <span className="text-sm font-medium tracking-wider text-[#00CFFF] uppercase">
            About Syvenix
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
          Technology Built
          <br />
          Around{" "}
          <span className="bg-gradient-to-r from-[#007BFF] to-[#00CFFF] bg-clip-text text-transparent">
            Your Business.
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
          At Syvenix, we believe technology should simplify business,
          not complicate it.
          <br />
          <br />
          We design and build premium digital solutions that help
          businesses establish a strong online presence, improve customer
          experience, and prepare for the future through scalable,
          intelligent technology.
        </motion.p>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          <Stat value="100%" label="Client Focused" />
          <Stat value="Future" label="AI Ready" />
          <Stat value="24/7" label="Support" />
          <Stat value="Premium" label="Quality" />
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/60
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-[#007BFF]/40
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#007BFF]
                  to-[#00CFFF]
                  text-white
                  shadow-lg
                  shadow-blue-500/20
                "
              >
                {card.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {card.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <h3 className="text-4xl font-bold text-white">
        {value}
      </h3>

      <p className="mt-2 text-slate-400">
        {label}
      </p>
    </div>
  );
}