"use client";

import { motion } from "framer-motion";
import { ArrowRight, FolderOpen } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-5">
      {/* Primary Button */}

      <motion.a
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        href="https://forms.gle/9EqhVPBxjCbdn7B48"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          gap-2
          rounded-xl
          bg-gradient-to-r
          from-[#007BFF]
          to-[#00CFFF]
          px-7
          py-4
          text-white
          font-semibold
          shadow-lg
          shadow-blue-500/25
          transition-all
          duration-300
          hover:shadow-blue-500/40
        "
      >
        Start Your Project

        <ArrowRight size={18} />
      </motion.a>

      {/* Secondary Button */}

      <motion.a
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        href="#projects"
        className="
          inline-flex
          items-center
          gap-2
          rounded-xl
          border
          border-slate-700
          bg-slate-900/60
          px-7
          py-4
          text-slate-200
          font-semibold
          transition-all
          duration-300
          hover:border-[#00CFFF]
          hover:text-white
          hover:bg-slate-800
        "
      >
        Explore Our Work

        <FolderOpen size={18} />
      </motion.a>
    </div>
  );
}