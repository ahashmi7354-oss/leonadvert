"use client";

import {
  Code,
  Database,
  Globe,
  Layers,
  Cpu,
  Smartphone,
  Share2,
  TrendingUp,
  Search,
  Palette,
  Cloud,
  ShieldCheck,
} from "lucide-react";

export default function TechMarquee() {
  const stack = [
    { name: "Next.js 16", category: "Full-Stack Web", icon: Globe, color: "text-blue-400" },
    { name: "React 19", category: "Frontend Engine", icon: Code, color: "text-cyan-400" },
    { name: "TypeScript", category: "Type-Safe Dev", icon: Layers, color: "text-blue-500" },
    { name: "Tailwind CSS", category: "Modern Styling", icon: Palette, color: "text-teal-400" },
    { name: "Node.js & Python", category: "Backend & AI", icon: Cpu, color: "text-emerald-400" },
    { name: "PostgreSQL & Prisma", category: "Database Core", icon: Database, color: "text-indigo-400" },
    { name: "Meta & TikTok Ads", category: "Paid Media", icon: Share2, color: "text-rose-400" },
    { name: "Google Analytics & SEO", category: "Organic Growth", icon: Search, color: "text-amber-400" },
    { name: "AWS & Docker", category: "DevOps & Cloud", icon: Cloud, color: "text-sky-400" },
    { name: "Figma UI/UX", category: "Product Design", icon: Palette, color: "text-purple-400" },
    { name: "Cross-Platform Mobile", category: "iOS & Android", icon: Smartphone, color: "text-cyan-300" },
    { name: "Enterprise Security", category: "Zero-Vulnerability", icon: ShieldCheck, color: "text-emerald-300" },
  ];

  // Duplicate for seamless infinite loop
  const duplicatedStack = [...stack, ...stack];

  return (
    <div id="tech-stack" className="relative py-12 border-y border-white/[0.06] bg-[#07090f]/60 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
          Powering World-Class Digital Products With Enterprise Technology
        </span>
      </div>

      {/* Gradient masks for smooth fade on sides */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#06070a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#06070a] to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="flex animate-marquee gap-4">
        {duplicatedStack.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] hover:border-blue-500/30 transition-all duration-300 shrink-0 group cursor-default"
            >
              <div className={`p-2 rounded-lg bg-black/40 group-hover:scale-110 transition-transform ${item.color}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] text-zinc-400 font-medium">
                  {item.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
