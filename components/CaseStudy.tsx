"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const highlights = [
  "Business Website",
  "Custom UI/UX Design",
  "Hosting & Deployment",
  "Domain & DNS Setup",
  "Technical SEO",
  "Blog Integration",
];

export default function CaseStudy() {
  return (
    <section
      id="project"
      className="relative overflow-hidden bg-slate-950 py-28 text-white"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#007BFF10,transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-semibold uppercase tracking-[0.25em] text-blue-400">
            Featured Project
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Delivering Digital Solutions
            <span className="bg-gradient-to-r from-[#007BFF] to-[#00CFFF] bg-clip-text text-transparent">
              {" "}
              That Make an Impact.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            One of our recent projects involved creating a complete digital
            presence for a law firm—from website development to hosting,
            SEO foundations, and deployment.
          </p>
        </motion.div>

        <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">

          {/* Browser Preview */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-3xl bg-blue-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

              <div className="flex h-12 items-center border-b border-slate-800 bg-slate-800 px-5">

                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                <div className="ml-6 rounded-full bg-slate-700 px-4 py-1 text-xs text-slate-300">
                  rameshlawassociates.com
                </div>

              </div>

              <img
                src="/lawfirm.png"
                alt="Ramesh & Ramesh Law Associates"
                className="w-full"
              />
            </div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              Legal Industry
            </div>

            <h3 className="mt-6 text-4xl font-bold">
              Ramesh & Ramesh Law Associates
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Syvenix designed and launched a professional digital
              presence tailored for a modern law firm, ensuring
              performance, credibility, and discoverability.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-5 py-4"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#00CFFF]"
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://rameshlawassociates.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#007BFF] to-[#00CFFF] px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Visit Live Website

              <ArrowUpRight size={18} />
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}