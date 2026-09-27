"use client";

import { motion } from "framer-motion";
import SpotlightCard from "./motion/SpotlightCard";
import {
  Code2,
  Palette,
  TrendingUp,
  Search,
  Smartphone,
  Cloud,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function ServicesOverview() {
  const services = [
    {
      id: "web-dev",
      title: "Web & Custom Software Development",
      category: "Engineering",
      icon: Code2,
      color: "from-blue-500 to-cyan-400",
      description:
        "High-performance SaaS platforms, enterprise web applications, and custom APIs built with Next.js, React, Node.js, and TypeScript.",
      points: [
        "Full-Stack Web Applications & Portals",
        "Custom SaaS Architecture & Scalable APIs",
        "Sub-second Load Times & Modern PWAs",
        "Database Design (PostgreSQL / NoSQL)",
      ],
      badge: "Core Engineering",
    },
    {
      id: "smm-ads",
      title: "Social Media Marketing & Paid Ads",
      category: "Growth",
      icon: TrendingUp,
      color: "from-rose-500 to-indigo-500",
      description:
        "ROI-obsessed paid media campaigns across Meta (Facebook & Instagram), TikTok, and Google Ads designed to scale revenue profitably.",
      points: [
        "High-Converting Ad Copy & Video Scripting",
        "Hyper-Targeted Audience Segmentation",
        "Meta & TikTok Pixel Tracking & Funnel Setup",
        "Daily ROAS Optimization & Scaled Ad Spend",
      ],
      badge: "High ROI",
    },
    {
      id: "seo",
      title: "Search Engine Optimization (SEO)",
      category: "Growth",
      icon: Search,
      color: "from-amber-400 to-orange-500",
      description:
        "Data-driven technical SEO, keyword dominance, and content strategies that push your brand to Google's #1 spot and keep you there.",
      points: [
        "Comprehensive Technical SEO Audits",
        "High-Intent Keyword Research & Strategy",
        "Authority Backlink Profile Architecture",
        "Core Web Vitals & Schema Optimization",
      ],
      badge: "Organic Dominance",
    },
    {
      id: "uiux-design",
      title: "UI/UX & Graphic Designing",
      category: "Creative",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      description:
        "Obsessively crafted user interfaces, intuitive user journeys, and striking brand identities that captivate and convert.",
      points: [
        "Wireframing & Clickable Figma Prototypes",
        "Comprehensive Brand Identity & Logo Systems",
        "Conversion-Centered Landing Page Design",
        "Digital Marketing Collaterals & Social Assets",
      ],
      badge: "Award-Grade",
    },
    {
      id: "mobile-apps",
      title: "Mobile App Development",
      category: "Engineering",
      icon: Smartphone,
      color: "from-emerald-400 to-cyan-500",
      description:
        "Native-grade cross-platform mobile apps for iOS and Android delivering fluid 60fps animations and offline-first performance.",
      points: [
        "Cross-Platform iOS & Android Apps",
        "Smooth Native Gestures & Biometrics",
        "App Store & Google Play Launch Support",
        "Push Notifications & Real-Time Sync",
      ],
      badge: "Mobile First",
    },
    {
      id: "cloud-devops",
      title: "Cloud, DevOps & Dedicated Support",
      category: "Infrastructure",
      icon: Cloud,
      color: "from-sky-400 to-blue-600",
      description:
        "Robust cloud deployments on AWS and Vercel with zero-downtime CI/CD automation, speed optimization, and 24/7 monitoring.",
      points: [
        "Automated CI/CD Deployment Pipelines",
        "AWS Cloud Architecture & Serverless",
        "Proactive 24/7 Uptime & Security Audits",
        "Continuous Speed & Database Optimization",
      ],
      badge: "Always Online",
    },
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#06070a]">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Six Pillars of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
              Digital Excellence
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-normal">
            We unite elite software engineering with aggressive growth marketing to provide end-to-end digital dominance for modern businesses.
          </p>
        </motion.div>

        {/* Services Grid with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="h-full"
              >
                <SpotlightCard
                  spotlightColor="rgba(59, 130, 246, 0.18)"
                  borderColor="rgba(99, 102, 241, 0.35)"
                  className="h-full group hover:shadow-[0_12px_35px_rgba(59,130,246,0.15)] flex flex-col justify-between p-7"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      {/* Top Row: Icon & Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-[1px] shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                          <div className="w-full h-full bg-[#0a0d17] rounded-[11px] flex items-center justify-center">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/[0.04] text-zinc-300 border border-white/[0.08] group-hover:border-blue-500/30 group-hover:text-blue-300 transition-colors">
                          {service.badge}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Checklist points */}
                      <div className="space-y-2.5 pt-4 border-t border-white/[0.06] mb-6">
                        {service.points.map((point, idx) => (
                          <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA link */}
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 group-hover:text-cyan-300 transition-colors pt-4 border-t border-white/[0.04] group/link"
                    >
                      <span>Inquire for this service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
