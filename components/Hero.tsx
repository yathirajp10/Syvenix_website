"use client";

import HeroContent from "@/components/hero/HeroContent";
import HeroPreview from "@/components/hero/HeroPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 min-h-screen flex items-center">

      {/* Background Gradient */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#007BFF20,transparent_35%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#00CFFF20,transparent_35%)]" />

      {/* Grid Pattern */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      <div className="relative max-w-7xl mx-auto px-6 py-32">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <HeroContent />

          {/* Right */}

          <HeroPreview />

        </div>

      </div>

    </section>
  );
}