"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Server,
  Sparkles,
} from "lucide-react";

const badges = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "Modern & Responsive",
  },
  {
    icon: Server,
    title: "Hosting & Domains",
    description: "Secure Infrastructure",
  },
  {
    icon: Sparkles,
    title: "AI-Ready Solutions",
    description: "Built for the Future",
  },
];

export default function HeroBadges() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {badges.map((badge, index) => {
        const Icon = badge.icon;

        return (
          <motion.div
            key={badge.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.75 + index * 0.15,
            }}
            whileHover={{
              y: -6,
            }}
            className="
              group
              rounded-2xl
              border
              border-slate-800
              bg-slate-900/50
              backdrop-blur-xl
              p-5
              transition-all
              duration-300
              hover:border-[#007BFF]/40
              hover:bg-slate-900
            "
          >
            <div
              className="
                w-12
                h-12
                rounded-xl
                flex
                items-center
                justify-center
                bg-gradient-to-br
                from-[#007BFF]
                to-[#00CFFF]
                shadow-lg
                shadow-blue-500/20
              "
            >
              <Icon
                size={22}
                className="text-white"
              />
            </div>

            <h3 className="mt-4 text-white font-semibold text-lg">
              {badge.title}
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              {badge.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}