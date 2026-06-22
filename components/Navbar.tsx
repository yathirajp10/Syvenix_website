"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/70">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <a href="#" className="flex items-center gap-3 group">

          <Image
            src="/logo.png"
            alt="Syvenix Logo"
            width={52}
            height={52}
            priority
            className="rounded-xl transition duration-300 group-hover:scale-105"
          />

          <div>

            <h2 className="text-white font-bold text-xl tracking-wide leading-none">
              Syvenix
            </h2>

            <p className="text-slate-400 text-xs tracking-wide">
              Technology With Purpose.
            </p>

          </div>

        </a>

        {/* Desktop Menu */}

        <div className="hidden lg:flex items-center gap-8">

          <a
            href="#services"
            className="text-slate-300 hover:text-white transition duration-300"
          >
            Solutions
          </a>

          <a
            href="#project"
            className="text-slate-300 hover:text-white transition duration-300"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-slate-300 hover:text-white transition duration-300"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-slate-300 hover:text-white transition duration-300"
          >
            Contact
          </a>

        </div>

        {/* Desktop CTA */}

        <a
          href="https://forms.gle/9EqhVPBxjCbdn7B48"
          target="_blank"
          rel="noopener noreferrer"
          className="
            hidden
            lg:flex
            items-center
            justify-center
            px-6
            py-3
            rounded-xl
            font-semibold
            text-white
            bg-gradient-to-r
            from-[#007BFF]
            to-[#00CFFF]
            shadow-lg
            shadow-blue-500/20
            hover:scale-105
            transition-all
            duration-300
          "
        >
          Book Consultation
        </a>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="lg:hidden bg-slate-950 border-t border-slate-800">

          <div className="flex flex-col gap-6 p-6">

            <a
              href="#services"
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-white transition"
            >
              Solutions
            </a>

            <a
              href="#project"
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-white transition"
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-white transition"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-white transition"
            >
              Contact
            </a>

            <a
              href="https://forms.gle/9EqhVPBxjCbdn7B48"
              target="_blank"
              rel="noopener noreferrer"
              className="
                block
                text-center
                bg-gradient-to-r
                from-[#007BFF]
                to-[#00CFFF]
                text-white
                py-3
                rounded-xl
                font-semibold
                hover:scale-[1.02]
                transition-all
                duration-300
              "
            >
              Book Consultation
            </a>

          </div>

        </div>
      )}
    </nav>
  );
}