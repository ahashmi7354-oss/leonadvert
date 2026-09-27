"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SpotlightCard from "./motion/SpotlightCard";
import {
  Sparkles,
  Award,
  Zap,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Code2,
  CheckCircle2,
  Calendar,
} from "lucide-react";

export default function LeadershipSection() {
  const leadershipPillars = [
    {
      icon: Code2,
      title: "Direct Principal Architecture",
      description:
        "No junior handoffs or disconnected project managers. Our core leadership directly designs database schemas, API contracts, and high-converting marketing funnels.",
    },
    {
      icon: Zap,
      title: "Battle-Tested Engineering Rigor",
      description:
        "We build exclusively with modern, type-safe technologies (Next.js, TypeScript, PostgreSQL, AWS). Every platform is tested for sub-second load times and infinite scale.",
    },
    {
      icon: TrendingUp,
      title: "Quantifiable Revenue Attribution",
      description:
        "We don't deal in vague promises or vanity metrics. Every feature shipped and ad campaign deployed is mapped to client revenue, retention, and tangible ROI.",
    },
  ];

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-[#06080e] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Portrait Showcase (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Background Aura */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/25 via-indigo-600/15 to-cyan-500/15 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

            {/* Floating Top Badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-2 sm:-right-4 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a0d18]/90 border border-blue-500/40 text-blue-200 text-xs font-medium backdrop-blur-xl shadow-xl shadow-blue-900/30"
            >
              <Award className="w-3.5 h-3.5 text-cyan-300" />
              <span>Founder & Lead Architect</span>
            </motion.div>

            {/* Floating Bottom Left Badge */}
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="hidden sm:flex absolute -left-6 bottom-28 z-30 items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0a0d18]/90 border border-emerald-500/40 text-emerald-300 text-xs font-mono backdrop-blur-xl shadow-xl shadow-emerald-950/40"
            >
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>120+ Products Shipped</span>
            </motion.div>

            {/* Main Portrait Card with Spotlight */}
            <SpotlightCard
              spotlightColor="rgba(59, 130, 246, 0.25)"
              borderColor="rgba(99, 102, 241, 0.45)"
              className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.85)] border border-white/[0.12]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-b from-zinc-800 to-black">
                <Image
                  src="/img/aliyan-ali.png"
                  alt="Aliyan Ali - Founder & Tech Lead at Leon Advert"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 35vw"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle dark gradient overlay at the base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080e] via-transparent to-black/20" />

                {/* Frosted Leadership Card Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#06070c] via-[#06070c]/90 to-transparent backdrop-blur-md border-t border-white/[0.08]">
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                        Aliyan Ali
                        <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                      </h3>
                      <p className="text-xs text-blue-300 font-medium">
                        Founder & Chief Technology Officer • Leon Advert
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-blue-500/20 text-cyan-300 border border-blue-500/30 text-[10px] font-mono uppercase">
                      Leadership
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed italic pt-2 border-t border-white/[0.05]">
                    "Bridging architectural engineering with aggressive brand scale to create enduring category champions."
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Right Column: Vision, Mission & Core Values (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(59,130,246,0.15)] self-start"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Leadership & Core Philosophy</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6"
            >
              Architected by Engineers.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                Driven by Pure Growth.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal mb-8"
            >
              Leon Advert was founded on a simple conviction: software should never exist in a silo, and marketing should never be decoupled from technical architecture. We treat your digital presence as a unified high-performance engine where every line of code, UI component, and ad dollar compounds into real business value.
            </motion.p>

            {/* 3 Pillars of Leadership */}
            <div className="space-y-4 mb-10">
              {leadershipPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: 0.15 * idx }}
                    className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                          {pillar.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Direct Consultation Action Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-6 border-t border-white/[0.08]"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] transition-all"
              >
                <Calendar className="w-4 h-4 text-cyan-200" />
                <span>Book Strategy Call with Aliyan</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-2 text-xs text-zinc-400 px-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Direct 1-on-1 discovery session • No sales pitches</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
