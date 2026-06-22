"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Server,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export default function HeroPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      className="relative flex items-center justify-center"
    >
      {/* Background Glow */}

      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]" />

      {/* Main Dashboard */}

      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="
          relative
          w-full
          max-w-xl
          rounded-3xl
          border
          border-slate-800
          bg-slate-900/70
          backdrop-blur-2xl
          shadow-2xl
          overflow-hidden
        "
      >
        {/* Header */}

        <div className="flex items-center justify-between px-7 py-5 border-b border-slate-800">
          <div>
            <h3 className="text-white font-bold text-lg">
              Syvenix Dashboard
            </h3>

            <p className="text-slate-400 text-sm">
              Technology With Purpose.
            </p>
          </div>

          <ArrowUpRight
            className="text-[#00CFFF]"
            size={22}
          />
        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 gap-4 p-6">

          <StatCard
            title="Business Websites"
            value="Modern"
            icon={<Globe size={20} />}
          />

          <StatCard
            title="Hosting"
            value="Secure"
            icon={<Server size={20} />}
          />

          <StatCard
            title="AI Ready"
            value="Future"
            icon={<Sparkles size={20} />}
          />

          <StatCard
            title="Support"
            value="24/7"
            icon={<ShieldCheck size={20} />}
          />

        </div>

        {/* Features */}

        <div className="px-6 pb-6 space-y-4">

          <Feature text="Responsive Website Development" />

          <Feature text="SEO & Performance Optimized" />

          <Feature text="Hosting & Domain Management" />

          <Feature text="Business Email & Analytics Setup" />

          <Feature text="Future AI & Automation Ready" />

        </div>
      </motion.div>

      {/* Floating Card */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="
          absolute
          -top-6
          -right-6
          rounded-2xl
          bg-gradient-to-r
          from-[#007BFF]
          to-[#00CFFF]
          px-6
          py-4
          shadow-2xl
        "
      >
        <p className="text-white font-bold">
          Future Ready
        </p>

        <p className="text-blue-100 text-sm">
          Built to Scale
        </p>
      </motion.div>
    </motion.div>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
      <div className="text-[#00CFFF] mb-3">
        {icon}
      </div>

      <h4 className="text-slate-400 text-sm">
        {title}
      </h4>

      <p className="text-white font-bold text-xl mt-1">
        {value}
      </p>
    </div>
  );
}

function Feature({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2
        size={18}
        className="text-[#00CFFF]"
      />

      <span className="text-slate-300">
        {text}
      </span>
    </div>
  );
}