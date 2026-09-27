"use client";

import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery & Strategy",
      subtitle: "Days 1–3",
      description:
        "Deep-dive into your business goals, target audience, and competitive landscape. We audit your current tech stack, identify growth bottlenecks, and define the winning strategy before a single line of code is written.",
      deliverables: [
        "Competitor & Market Audit Report",
        "Technical Architecture Blueprint",
        "Marketing Funnel Mapping",
        "Project Scope & Milestone Plan",
      ],
      color: "from-blue-500 to-cyan-400",
      borderColor: "border-blue-500/30",
      glowColor: "shadow-blue-500/20",
      badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/25",
    },
    {
      number: "02",
      icon: PenTool,
      title: "UI/UX & Architecture",
      subtitle: "Days 4–7",
      description:
        "Our designers craft high-fidelity Figma prototypes and interactive wireframes while our architects finalize the database schema, API contracts, and cloud infrastructure plan.",
      deliverables: [
        "Clickable Figma Prototype",
        "Database Schema & API Design",
        "Component Design System",
        "Cloud Architecture Diagram",
      ],
      color: "from-indigo-500 to-purple-500",
      borderColor: "border-indigo-500/30",
      glowColor: "shadow-indigo-500/20",
      badgeColor: "bg-indigo-500/10 text-indigo-300 border-indigo-500/25",
    },
    {
      number: "03",
      icon: Code2,
      title: "Agile Development & QA",
      subtitle: "Days 8–25",
      description:
        "Sprint-based full-stack development with live staging links delivered every 2 weeks. Automated CI/CD pipelines, unit testing, cross-browser QA, and weekly progress demos keep you fully in control.",
      deliverables: [
        "Live Staging Environment Access",
        "Weekly Sprint Demo Calls",
        "Automated Test Coverage Reports",
        "Core Web Vitals Optimization",
      ],
      color: "from-emerald-400 to-cyan-500",
      borderColor: "border-emerald-500/30",
      glowColor: "shadow-emerald-500/20",
      badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch, SEO & Growth Scale",
      subtitle: "Day 26+",
      description:
        "Zero-downtime production deployment with full technical SEO setup, Google Search Console integration, Meta Pixel configuration, and initial paid ad campaign activation to generate immediate traffic from Day 1.",
      deliverables: [
        "Zero-Downtime Production Deploy",
        "Technical SEO Audit & Setup",
        "Paid Media Campaign Launch",
        "30-Day Post-Launch Support",
      ],
      color: "from-amber-400 to-orange-500",
      borderColor: "border-amber-500/30",
      glowColor: "shadow-amber-500/20",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/25",
    },
  ];

  return (
    <section id="process" className="relative py-28 sm:py-36 bg-[#07090e] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-indigo-600/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-blue-600/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(99,102,241,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Predictable & Transparent Delivery</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-5"
          >
            From Discovery to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
              Live & Growing.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 leading-relaxed"
          >
            Our 4-phase execution framework eliminates surprises and keeps you in complete control. Every milestone has a clear deliverable. Every sprint ends with a live demo.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`relative rounded-2xl p-[1px] bg-gradient-to-b from-white/[0.08] to-transparent hover:from-white/[0.12] transition-all duration-300 shadow-lg hover:${step.glowColor}`}
              >
                <div className="h-full rounded-2xl bg-[#090c17]/95 backdrop-blur-xl p-7 sm:p-8 flex flex-col border border-white/[0.04] hover:border-white/[0.08] transition-colors">
                  {/* Step Number + Icon Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} p-[1px] shadow-lg`}>
                      <div className="w-full h-full rounded-2xl bg-[#090c17] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="text-right">
                      <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${step.badgeColor}`}>
                        {step.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Step Number + Title */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${step.color} opacity-30`}>
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-1">
                    {step.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="pt-5 border-t border-white/[0.06] space-y-2.5">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Key Deliverables</span>
                    <div className="space-y-2">
                      {step.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-400 text-sm mb-6">
            Ready to kick off your project? Let's start with a free 15-minute discovery call.
          </p>
          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white font-semibold text-base shadow-[0_0_35px_rgba(37,99,235,0.45)] hover:shadow-[0_0_50px_rgba(37,99,235,0.7)] transition-all"
          >
            <Sparkles className="w-5 h-5 text-cyan-200" />
            <span>Start the Process</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
