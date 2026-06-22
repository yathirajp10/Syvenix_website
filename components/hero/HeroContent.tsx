"use client";

import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import HeroBadges from "./HeroBadges";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center"
    >
      {/* Brand Badge */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="
          inline-flex
          items-center
          gap-2
          w-fit
          px-5
          py-2
          rounded-full
          border
          border-[#007BFF]/30
          bg-[#007BFF]/10
          text-[#00CFFF]
          text-sm
          font-medium
          mb-8
        "
      >
        <span className="w-2 h-2 rounded-full bg-[#00CFFF] animate-pulse" />
        Technology With Purpose.
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="
          text-5xl
          md:text-6xl
          xl:text-7xl
          font-extrabold
          leading-tight
          tracking-tight
          text-white
        "
      >
        Building{" "}
        <span className="bg-gradient-to-r from-[#007BFF] to-[#00CFFF] bg-clip-text text-transparent">
          Technology
        </span>

        <br />

        That Moves

        <br />

        Business Forward.
      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="
          mt-8
          max-w-2xl
          text-lg
          md:text-xl
          leading-8
          text-slate-300
        "
      >
        Syvenix helps businesses establish, grow, and scale through premium
        websites, intelligent digital infrastructure, hosting solutions,
        automation, and future-ready technology designed for long-term success.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10"
      >
        <HeroButtons />
      </motion.div>

      {/* Trust Badges */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        className="mt-12"
      >
        <HeroBadges />
      </motion.div>
    </motion.div>
  );
}