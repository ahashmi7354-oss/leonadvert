"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import AnimatedCounter from "./motion/AnimatedCounter";
import {
  ArrowRight,
  Code2,
  TrendingUp,
  Palette,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Star,
  Globe,
  BarChart3,
  Layers,
  ChevronRight,
} from "lucide-react";

/* ─── tiny helper: random float in range ─────── */
function rnd(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

/* ─── Floating Orb (ambient background particle) ─ */
function FloatingOrb({
  size,
  color,
  initialX,
  initialY,
  duration,
}: {
  size: number;
  color: string;
  initialX: string;
  initialY: string;
  duration: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-[80px] pointer-events-none ${color}`}
      style={{ width: size, height: size, left: initialX, top: initialY }}
      animate={{
        x: [0, rnd(-40, 40), 0],
        y: [0, rnd(-40, 40), 0],
        scale: [1, rnd(1.05, 1.2), 1],
        opacity: [0.4, 0.65, 0.4],
      }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ─── Mouse-tracking 3-D tilt card wrapper ─── */
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotX = useTransform(my, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotY = useTransform(mx, [-0.5, 0.5], ["-8deg", "8deg"]);

  const springRX = useSpring(rotX, { stiffness: 180, damping: 22 });
  const springRY = useSpring(rotY, { stiffness: 180, damping: 22 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: springRX, rotateY: springRY, transformStyle: "preserve-3d", perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Small floating badge chips ─── */
function FloatingChip({
  children,
  className,
  delay = 0,
  amplitude = 8,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amplitude?: number;
}) {
  return (
    <motion.div
      animate={{ y: [-amplitude / 2, amplitude / 2, -amplitude / 2] }}
      transition={{ duration: 3.5 + delay * 0.5, repeat: Infinity, ease: "easeInOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Right Panel Tabs ─── */
type Tab = "software" | "growth" | "design";

const tabs: { id: Tab; icon: React.ElementType; label: string }[] = [
  { id: "software", icon: Code2, label: "Software" },
  { id: "growth", icon: TrendingUp, label: "Growth" },
  { id: "design", icon: Palette, label: "Design" },
];

/* ─── Software Tab Content ─── */
function SoftwarePanel() {
  return (
    <motion.div
      key="software"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="space-y-4"
    >
      {/* Code block */}
      <div className="rounded-xl bg-[#04060e] border border-white/[0.07] font-mono text-[11px] leading-relaxed overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.05] bg-white/[0.02]">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          <span className="ml-2 text-zinc-500 text-[10px]">leon-stack.config.ts</span>
        </div>
        <div className="px-5 py-4 space-y-1">
          <p className="text-zinc-500">// Full-stack enterprise config</p>
          <p><span className="text-purple-400">export const</span> <span className="text-blue-300">leon</span> = {"{"}</p>
          <p className="pl-5"><span className="text-emerald-300">framework</span>: <span className="text-amber-300">&quot;Next.js 16&quot;</span>,</p>
          <p className="pl-5"><span className="text-emerald-300">runtime</span>: <span className="text-amber-300">&quot;Node + Edge&quot;</span>,</p>
          <p className="pl-5"><span className="text-emerald-300">database</span>: <span className="text-amber-300">&quot;PostgreSQL + Prisma&quot;</span>,</p>
          <p className="pl-5"><span className="text-emerald-300">cloud</span>: <span className="text-amber-300">&quot;AWS • Vercel • GCP&quot;</span>,</p>
          <p className="pl-5"><span className="text-emerald-300">perf</span>: <span className="text-cyan-300">&#123; score: 99, ttfb: &quot;&lt;0.3s&quot; &#125;</span>,</p>
          <p>{"}"}</p>
        </div>
      </div>

      {/* Metric bars */}
      <div className="space-y-3">
        {[
          { label: "Lighthouse Performance", val: 99, color: "from-emerald-500 to-cyan-400" },
          { label: "Security & CI/CD Grade", val: 100, color: "from-blue-500 to-indigo-400" },
          { label: "Code Quality (SonarQube)", val: 96, color: "from-violet-500 to-purple-400" },
        ].map(({ label, val, color }) => (
          <div key={label}>
            <div className="flex justify-between text-[10px] text-zinc-400 mb-1.5">
              <span>{label}</span>
              <span className="font-bold text-white">{val}/100</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${val}%` }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className={`h-full rounded-full bg-gradient-to-r ${color}`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Growth Tab Content ─── */
function GrowthPanel() {
  const bars = [28, 42, 37, 55, 63, 71, 66, 82, 90, 100];
  return (
    <motion.div
      key="growth"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="space-y-4"
    >
      {/* Campaign header */}
      <div className="rounded-xl bg-[#04060e] border border-white/[0.07] p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Active Campaign</p>
            <p className="text-sm font-bold text-white">Meta + Google + TikTok</p>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/30">
            ROAS 6.2×
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            { l: "Ad Spend", v: "$45k", c: "text-white" },
            { l: "Revenue", v: "$279k", c: "text-emerald-400" },
            { l: "CTR", v: "4.92%", c: "text-cyan-400" },
          ].map(({ l, v, c }) => (
            <div key={l} className="rounded-lg bg-white/[0.03] border border-white/[0.05] p-2.5">
              <p className="text-[9px] text-zinc-500 uppercase tracking-wider">{l}</p>
              <p className={`text-sm font-bold mt-0.5 ${c}`}>{v}</p>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div>
          <div className="flex justify-between text-[10px] text-zinc-500 mb-1.5">
            <span>Organic Traffic Growth</span>
            <span className="text-emerald-400 font-semibold">+380%</span>
          </div>
          <div className="h-14 flex items-end gap-1 px-1">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-600/80 to-cyan-400/80"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {[
          { icon: TrendingUp, label: "Paid Ads", sub: "Meta · Google · TikTok", c: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
          { icon: Globe, label: "SEO Authority", sub: "Domain DR 80+", c: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
          { icon: BarChart3, label: "Analytics", sub: "GA4 + Hotjar", c: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
          { icon: Zap, label: "CRO Testing", sub: "A/B + Heatmaps", c: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
        ].map(({ icon: Icon, label, sub, c, bg }) => (
          <div key={label} className={`rounded-xl border p-3 flex items-center gap-2.5 ${bg}`}>
            <Icon className={`w-4 h-4 ${c} shrink-0`} />
            <div>
              <p className="text-xs font-semibold text-white">{label}</p>
              <p className="text-[10px] text-zinc-500">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Design Tab Content ─── */
function DesignPanel() {
  return (
    <motion.div
      key="design"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="space-y-4"
    >
      <div className="rounded-xl bg-[#04060e] border border-white/[0.07] p-4 space-y-3">
        <div className="flex justify-between items-center">
          <p className="text-xs font-semibold text-white">Leon Design System v3</p>
          <span className="text-[10px] text-indigo-400 font-mono">Figma Tokens</span>
        </div>

        {/* Palette swatches */}
        <div className="grid grid-cols-5 gap-1.5 h-8">
          {[
            "bg-[#06070a]",
            "bg-blue-600",
            "bg-indigo-600",
            "bg-violet-500",
            "bg-cyan-400",
          ].map((c, i) => (
            <div key={i} className={`rounded-md ${c} border border-white/10`} />
          ))}
        </div>

        {/* Component preview */}
        <div className="space-y-2">
          <div className="rounded-lg bg-white/[0.04] border border-white/[0.08] p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500" />
              <div>
                <p className="text-[11px] font-bold text-white">SaaS Dashboard UI</p>
                <p className="text-[9px] text-zinc-400">Mobile + Desktop responsive</p>
              </div>
            </div>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">Approved</span>
          </div>
          <div className="rounded-lg bg-white/[0.04] border border-white/[0.08] p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-violet-500 to-purple-500" />
              <div>
                <p className="text-[11px] font-bold text-white">Brand Identity System</p>
                <p className="text-[9px] text-zinc-400">Logo · Typography · Guidelines</p>
              </div>
            </div>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">Live</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {[
          { icon: Layers, label: "Product UI/UX & Figma Prototypes", sub: "High-fidelity wireframes, design systems, component libraries" },
          { icon: Sparkles, label: "Brand Identity & Graphic Design", sub: "Logos, 3D visuals, marketing collateral, video motion" },
        ].map(({ icon: Icon, label, sub }) => (
          <div key={label} className="rounded-xl bg-white/[0.03] border border-white/[0.07] p-3.5 flex items-start gap-3">
            <Icon className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-white">{label}</p>
              <p className="text-[10px] text-zinc-500 mt-0.5">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   HERO COMPONENT
══════════════════════════════════════════════════════════════════ */
export default function Hero() {
  const [activeTab, setActiveTab] = useState<Tab>("software");

  /* auto-cycle tabs every 6 s */
  useEffect(() => {
    const cycle = ["software", "growth", "design"] as Tab[];
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % cycle.length;
      setActiveTab(cycle[i]);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center bg-[#06070a]">

      {/* ── Ambient glow orbs ────────────────────────────── */}
      <FloatingOrb size={620} color="bg-blue-600/20" initialX="-10%" initialY="-5%" duration={10} />
      <FloatingOrb size={500} color="bg-indigo-600/15" initialX="55%" initialY="30%" duration={13} />
      <FloatingOrb size={400} color="bg-cyan-500/10" initialX="80%" initialY="60%" duration={9} />
      <FloatingOrb size={350} color="bg-violet-700/10" initialX="20%" initialY="70%" duration={11} />

      {/* ── Fine dot grid overlay ────────────────────────── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:28px_28px] pointer-events-none" />

      {/* ── Horizontal fade lines ───────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#06070a] to-transparent pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ════════════ LEFT — Text content ════════════ */}
          <div className="flex flex-col">

            {/* Availability chip */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex mb-8"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.1] bg-white/[0.04] backdrop-blur-md shadow-[0_0_20px_rgba(34,197,94,0.15)] cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] font-semibold text-zinc-200 tracking-wide">
                  Accepting New Projects — Q4 2026
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-[clamp(1.85rem,7vw,3rem)] sm:text-5xl lg:text-[4.25rem] xl:text-[5rem] font-black tracking-tight leading-[1.05] text-white mb-6"
            >
              We Build
              <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                  Software
                </span>
                {/* underline glow */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 origin-left"
                />
              </span>{" "}
              &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300">
                Scale
              </span>
              <br />
              Your Brand.
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8 max-w-[480px]"
            >
              From pixel-perfect SaaS platforms to data-driven ad campaigns — Leon Advert is the full-service digital partner that turns ambitious ideas into market-dominating realities.
            </motion.p>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {[
                { icon: Code2, text: "Full-Stack Dev" },
                { icon: TrendingUp, text: "Paid Ads & SEO" },
                { icon: Palette, text: "UI/UX & Brand" },
                { icon: ShieldCheck, text: "DevOps & Cloud" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.09] text-zinc-300 text-xs font-medium hover:bg-white/[0.07] hover:border-white/[0.18] transition-all cursor-default">
                  <Icon className="w-3.5 h-3.5 text-blue-400" />
                  {text}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="flex flex-col sm:flex-row gap-3 mb-10 sm:mb-14"
            >
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#services"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white font-semibold text-sm shadow-[0_0_40px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_rgba(37,99,235,0.75)] transition-all"
              >
                <Sparkles className="w-4.5 h-4.5 text-cyan-200" />
                View Our Work
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/[0.04] text-white font-medium text-sm border border-white/[0.12] hover:bg-white/[0.08] hover:border-white/[0.22] backdrop-blur-sm transition-all"
              >
                Book Free Discovery Call
                <ChevronRight className="w-4 h-4 text-zinc-400" />
              </motion.a>
            </motion.div>

            {/* Trust Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="grid grid-cols-2 gap-4 pt-8 border-t border-white/[0.07]"
            >
              {[
                { value: 150, suffix: "+", label: "Projects Shipped", color: "text-white" },
                { value: 99.4, decimals: 1, suffix: "%", label: "Client Retention", color: "text-emerald-400" },
                { value: 4.8, decimals: 1, suffix: "×", label: "Avg. Client ROI", color: "text-cyan-400" },
                { value: 4.9, decimals: 1, suffix: "★", label: "Verified Rating", color: "text-amber-400" },
              ].map(({ value, decimals, suffix, label, color }) => (
                <div key={label} className="flex flex-col">
                  <span className={`text-2xl sm:text-3xl font-black ${color}`}>
                    <AnimatedCounter value={value} decimals={decimals} suffix={suffix} duration={2000} />
                  </span>
                  <span className="text-[11px] text-zinc-500 mt-0.5 font-medium">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ════════════ RIGHT — Interactive 3-D panel ════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Floating badge chips around the card */}
            <FloatingChip
              delay={0}
              amplitude={10}
              className="absolute -top-6 -left-10 z-30 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0a0d1a]/90 border border-blue-500/35 text-blue-300 text-xs font-mono backdrop-blur-md shadow-xl shadow-blue-900/30"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Next.js 16 · React 19
            </FloatingChip>

            <FloatingChip
              delay={0.8}
              amplitude={9}
              className="absolute -top-6 -right-8 z-30 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0a0d1a]/90 border border-emerald-500/35 text-emerald-300 text-xs font-mono backdrop-blur-md shadow-xl shadow-emerald-900/30"
            >
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              6.2× Avg. ROAS
            </FloatingChip>

            <FloatingChip
              delay={1.2}
              amplitude={8}
              className="absolute -bottom-5 -left-8 z-30 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0a0d1a]/90 border border-amber-500/35 text-amber-300 text-xs font-mono backdrop-blur-md shadow-xl shadow-amber-900/30"
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              &lt;0.3s TTFB
            </FloatingChip>

            <FloatingChip
              delay={0.5}
              amplitude={11}
              className="absolute -bottom-5 -right-6 z-30 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0a0d1a]/90 border border-violet-500/35 text-violet-300 text-xs font-mono backdrop-blur-md shadow-xl shadow-violet-900/30"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-violet-400" />
              99 Lighthouse Score
            </FloatingChip>

            {/* 3-D tilt card */}
            <TiltCard>
              <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-blue-500/40 via-indigo-500/20 to-cyan-500/30 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                {/* Glow layer behind card */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/15 via-transparent to-cyan-600/10 blur-xl" />

                <div className="relative rounded-2xl bg-[#08091470]/95 backdrop-blur-2xl overflow-hidden">
                  {/* Card header with traffic lights */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07] bg-white/[0.02]">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-[11px] font-mono text-zinc-500">leon-advert.studio</span>
                    </div>

                    {/* Tab switchers */}
                    <div className="flex items-center p-1 rounded-xl bg-black/40 border border-white/[0.07] gap-0.5">
                      {tabs.map((t) => {
                        const Icon = t.icon;
                        const active = activeTab === t.id;
                        return (
                          <button
                            key={t.id}
                            onClick={() => setActiveTab(t.id)}
                            className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-colors z-10 ${
                              active ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                            }`}
                          >
                            {active && (
                              <motion.div
                                layoutId="heroTabPill"
                                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-md shadow-blue-700/40"
                                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                              />
                            )}
                            <span className="relative z-10 flex items-center gap-1.5">
                              <Icon className="w-3 h-3" />
                              {t.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Live dot */}
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-md border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </div>
                  </div>

                  {/* Tab content */}
                  <div className="p-5 sm:p-6">
                    <AnimatePresence mode="wait">
                      {activeTab === "software" && <SoftwarePanel key="software" />}
                      {activeTab === "growth" && <GrowthPanel key="growth" />}
                      {activeTab === "design" && <DesignPanel key="design" />}
                    </AnimatePresence>
                  </div>

                  {/* Footer bar */}
                  <div className="px-5 py-3.5 border-t border-white/[0.06] bg-white/[0.01] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-[11px] text-zinc-400 ml-1">4.9 — 150+ projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[11px] text-zinc-400">ISO 27001 Compliant</span>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Vertical glow streak behind the card */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[2px] h-[90%] bg-gradient-to-b from-transparent via-blue-500/30 to-transparent blur-sm pointer-events-none -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
