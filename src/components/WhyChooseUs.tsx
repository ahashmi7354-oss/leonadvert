"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SpotlightCard from "./motion/SpotlightCard";
import {
  Sparkles,
  Zap,
  Code2,
  TrendingUp,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Cpu,
  Layers,
  GitBranch,
  BarChart4,
  Flame,
  Globe2,
} from "lucide-react";

export default function WhyChooseUs() {
  const [activeStep, setActiveStep] = useState(3);

  const sprintSteps = [
    { day: "Day 1-3", label: "Discovery & High-Fidelity UI/UX", status: "completed" },
    { day: "Day 4-9", label: "Full-Stack Sprint & API Architecture", status: "completed" },
    { day: "Day 10-12", label: "Automated QA & Technical SEO", status: "completed" },
    { day: "Day 14", label: "Zero-Downtime Launch & Ad Scale", status: "active" },
  ];

  return (
    <section id="why-us" className="relative py-28 sm:py-36 bg-[#05070a] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>The Leon Standard</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-5"
          >
            Engineered for Velocity.{" "}
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
              Built for Scale.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed"
          >
            Traditional agencies separate engineering from marketing. We unite full-stack software development with performance marketing to create compounding, unfair business advantages.
          </motion.p>
        </div>

        {/* Modern Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Bento Item 1: Large Dual Powerhouse Showcase (8 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-8"
          >
            <SpotlightCard
              spotlightColor="rgba(59, 130, 246, 0.2)"
              borderColor="rgba(99, 102, 241, 0.4)"
              className="p-8 sm:p-10 h-full flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <span>SYNERGY ARCHITECTURE</span>
                  </div>
                  <span className="text-xs text-zinc-400 font-mono">2.8x Faster Delivery</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                  The Dual Powerhouse Model
                </h3>
                <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed mb-8">
                  Most businesses suffer from communication breakdowns between their developers and marketing team. At Leon Advert, our engineers write code that is already optimized for SEO, pixel tracking, Core Web Vitals, and conversion funnels.
                </p>

                {/* Interactive Diagram Graphic */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-[#06080f] border border-white/[0.06] relative overflow-hidden">
                  {/* Left: Code Node */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-3">
                      <Code2 className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Full-Stack Code</span>
                      <span className="text-[11px] text-zinc-400">Next.js 16 • TypeScript • AWS Edge</span>
                    </div>
                  </div>

                  {/* Center: Synergy Nexus */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-900/40 via-indigo-950/30 to-purple-950/20 border border-blue-500/30 flex flex-col items-center justify-center text-center shadow-lg shadow-blue-500/10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 flex items-center justify-center text-white mb-2 shadow-md shadow-cyan-500/30">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">
                      Leon Synergy Hub
                    </span>
                    <span className="text-[10px] text-blue-200 mt-0.5">Automated Sync</span>
                  </div>

                  {/* Right: Growth Node */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Growth Engine</span>
                      <span className="text-[11px] text-zinc-400">4.8x ROAS • SEO #1 • Viral Ads</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Feature Pill Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/[0.06] mt-8 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No Agency Friction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sub-Second Speeds</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Custom Analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Higher Margins</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Bento Item 2: 14-Day Sprint Velocity (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <SpotlightCard
              spotlightColor="rgba(6, 182, 212, 0.2)"
              borderColor="rgba(6, 182, 212, 0.35)"
              className="p-8 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/25">
                    AGILE VELOCITY
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">14-Day Sprint Cycles</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  No multi-month black holes. Every 2 weeks you receive production-tested deliverables with clickable staging environments.
                </p>

                {/* Timeline UI */}
                <div className="space-y-3">
                  {sprintSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border transition-all ${
                        step.status === "active"
                          ? "bg-blue-950/40 border-blue-500/40 shadow-md shadow-blue-500/10"
                          : "bg-white/[0.02] border-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-mono text-cyan-300 font-bold">{step.day}</span>
                        {step.status === "active" ? (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            DEPLOYING
                          </span>
                        ) : (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        )}
                      </div>
                      <span className="text-xs font-medium text-white block">{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.06] mt-6 flex items-center justify-between text-xs text-zinc-400">
                <span>Production Staging</span>
                <span className="text-white font-mono font-semibold">v2.4.0 Live</span>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Bento Item 3: Direct Senior Team Collaboration (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <SpotlightCard
              spotlightColor="rgba(168, 85, 247, 0.2)"
              borderColor="rgba(168, 85, 247, 0.35)"
              className="p-8 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-purple-500/10 text-purple-300 border border-purple-500/25">
                    TRANSPARENCY
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">Dedicated Slack / Discord</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  No junior account managers acting as gatekeepers. Talk directly with senior full-stack architects and growth strategists.
                </p>

                {/* Simulated Channel Message Preview */}
                <div className="p-4 rounded-xl bg-[#070912] border border-white/[0.06] space-y-3 font-sans">
                  <div className="flex items-center justify-between text-[11px] text-zinc-400">
                    <span className="flex items-center gap-1.5 font-bold text-white">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      #leon-growth-sprint
                    </span>
                    <span className="font-mono text-[10px]">Just now</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed bg-white/[0.02] p-3 rounded-lg border border-white/[0.04]">
                    <span className="text-blue-400 font-semibold">@Alex</span>: "Sprint #3 deployed! 🚀 All 24 endpoints passing &lt;30ms latency, Lighthouse score 99, and Meta pixel audience sync is active."
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.06] mt-6 flex items-center justify-between text-xs text-zinc-400">
                <span>Avg Response Time</span>
                <span className="text-emerald-400 font-mono font-bold">&lt; 15 Minutes</span>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Bento Item 4: Enterprise Code Quality & Security (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-4"
          >
            <SpotlightCard
              spotlightColor="rgba(59, 130, 246, 0.2)"
              borderColor="rgba(59, 130, 246, 0.35)"
              className="p-8 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-300 border border-blue-500/25">
                    ZERO COMPROMISE
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">Enterprise-Grade Code</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  Zero technical debt. We adhere to clean code principles, automated unit testing, and SOC-2 standard best practices.
                </p>

                {/* Tech Pills Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-[10px] text-zinc-400 block font-mono">TYPE SYSTEM</span>
                    <span className="text-xs font-bold text-white">100% Strict TS</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-[10px] text-zinc-400 block font-mono">UPTIME SLA</span>
                    <span className="text-xs font-bold text-emerald-400">99.99% Uptime</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-[10px] text-zinc-400 block font-mono">PIPELINES</span>
                    <span className="text-xs font-bold text-cyan-400">Automated CI/CD</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-[10px] text-zinc-400 block font-mono">SECURITY</span>
                    <span className="text-xs font-bold text-indigo-400">Penetration Tested</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.06] mt-6 flex items-center justify-between text-xs text-zinc-400">
                <span>Code Guarantee</span>
                <span className="text-white font-mono font-semibold">Full IP Ownership</span>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Bento Item 5: Revenue & ROI Focus (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 lg:col-span-4"
          >
            <SpotlightCard
              spotlightColor="rgba(245, 158, 11, 0.2)"
              borderColor="rgba(245, 158, 11, 0.35)"
              className="p-8 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <BarChart4 className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/25">
                    METRIC DRIVEN
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">Revenue-First Mindset</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  We measure success not in lines of code written, but in bottom-line revenue, customer retention, and acquisition cost reduction.
                </p>

                {/* Comparative Comparison Widget */}
                <div className="space-y-3 p-4 rounded-xl bg-[#070912] border border-white/[0.06]">
                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-zinc-400">Generic Dev Agency</span>
                      <span className="text-zinc-500 font-mono">1.2x - 1.5x ROI</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div className="bg-zinc-600 h-full w-[35%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-amber-300 font-semibold flex items-center gap-1">
                        <Flame className="w-3 h-3 text-amber-400" />
                        Leon Advert Unified
                      </span>
                      <span className="text-emerald-400 font-mono font-bold">4.8x Avg ROI</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "95%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="bg-gradient-to-r from-amber-400 via-orange-500 to-cyan-400 h-full rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.06] mt-6 flex items-center justify-between text-xs text-zinc-400">
                <span>Average Client Growth</span>
                <span className="text-cyan-400 font-mono font-bold">+380% Year 1</span>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
