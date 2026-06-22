"use client";

import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function SolutionCard({
  icon: Icon,
  title,
  description,
}: SolutionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        transition: {
          duration: 0.25,
        },
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/60
        backdrop-blur-xl
        p-8
        transition-all
        duration-300
        hover:border-[#007BFF]/40
        hover:shadow-2xl
        hover:shadow-blue-500/10
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          bg-gradient-to-br
          from-[#007BFF]/5
          to-[#00CFFF]/5
        "
      />

      {/* Icon */}

      <div
        className="
          relative
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
        <Icon size={28} />
      </div>

      {/* Title */}

      <h3 className="relative mt-6 text-2xl font-semibold text-white">
        {title}
      </h3>

      {/* Description */}

      <p className="relative mt-4 leading-7 text-slate-400">
        {description}
      </p>

      {/* CTA */}

      <div
        className="
          relative
          mt-8
          inline-flex
          items-center
          gap-2
          text-[#00CFFF]
          font-medium
          transition-all
          duration-300
          group-hover:gap-3
        "
      >
        Learn More

        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </div>
    </motion.div>
  );
}