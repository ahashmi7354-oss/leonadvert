"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Omar Farooq",
    role: "CEO, TechBridge Dubai",
    initials: "OF",
    gradient: "from-blue-500 to-cyan-500",
    rating: 5,
    text: "Leon didn't just build our website — they transformed our entire digital presence. The custom e-commerce platform they built handles 2,000+ daily orders flawlessly. Our revenue grew 340% in 6 months.",
    metric: "+340% Revenue",
    metricColor: "text-emerald-400",
  },
  {
    name: "Sana Malik",
    role: "Founder, NovaMedica SaaS",
    initials: "SM",
    gradient: "from-purple-500 to-indigo-500",
    rating: 5,
    text: "The SaaS dashboard they built is absolutely stunning. Our investors were genuinely impressed during the demo round. The animations, performance, and attention to detail are world-class.",
    metric: "Seed Round Closed",
    metricColor: "text-blue-400",
  },
  {
    name: "Khalid Al-Rashid",
    role: "CMO, AlphaRetail KSA",
    initials: "KR",
    gradient: "from-amber-500 to-orange-500",
    rating: 5,
    text: "Our Google Ads ROAS jumped from 1.8x to 6.2x within 90 days of the campaign overhaul. The landing pages they built convert at 18% — industry average is 3%. Unreal results.",
    metric: "6.2x ROAS",
    metricColor: "text-amber-400",
  },
  {
    name: "Priya Nair",
    role: "VP Product, FintechFlow",
    initials: "PN",
    gradient: "from-emerald-500 to-teal-500",
    rating: 5,
    text: "Delivered our entire MVP in 21 days — 4 days ahead of schedule. The code quality passed our senior engineers' review without a single critical comment. Genuinely exceptional team.",
    metric: "MVP in 21 Days",
    metricColor: "text-emerald-400",
  },
  {
    name: "James Whitmore",
    role: "Director, CloudScale UK",
    initials: "JW",
    gradient: "from-rose-500 to-pink-500",
    rating: 5,
    text: "The SEO results have been staggering. We went from page 4 to position 2 for our main keyword in just 3 months. Organic traffic is up 580%. Leon's strategy is data-driven and it works.",
    metric: "+580% Organic",
    metricColor: "text-rose-400",
  },
  {
    name: "Fatima Al-Zahra",
    role: "CEO, LuxeCommerce MENA",
    initials: "FZ",
    gradient: "from-cyan-500 to-blue-600",
    rating: 5,
    text: "Our Shopify rebuild increased cart conversion from 1.2% to 4.7% — almost 4x improvement. The page speed went from 42 to 98 on Google PageSpeed. Absolutely transformative.",
    metric: "4x Conversion",
    metricColor: "text-cyan-400",
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[min(340px,85vw)] sm:w-[400px] rounded-2xl p-[1px] bg-gradient-to-b from-white/[0.09] to-transparent mx-3">
      <div className="h-full rounded-2xl bg-[#0a0d18]/90 backdrop-blur-xl p-6 flex flex-col gap-4 border border-white/[0.05]">
        {/* Stars */}
        <div className="flex gap-1">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Quote */}
        <div className="relative">
          <Quote className="absolute -top-1 -left-1 w-6 h-6 text-white/10" />
          <p className="text-sm text-zinc-300 leading-relaxed pl-4">
            {t.text}
          </p>
        </div>

        {/* Metric Badge */}
        <div className={`inline-flex items-center gap-1.5 text-xs font-bold ${t.metricColor} bg-white/[0.04] border border-white/[0.06] rounded-full px-3 py-1.5 w-fit`}>
          <Sparkles className="w-3 h-3" />
          {t.metric}
        </div>

        {/* Author */}
        <div className="flex items-center gap-3 pt-2 border-t border-white/[0.05]">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-xs font-bold text-white shrink-0`}>
            {t.initials}
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{t.name}</p>
            <p className="text-xs text-zinc-500">{t.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfiniteRow({
  items,
  direction = 1,
  speed = 40,
}: {
  items: typeof testimonials;
  direction?: 1 | -1;
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const [paused, setPaused] = useState(false);

  useAnimationFrame((_, delta) => {
    if (paused || !trackRef.current) return;
    const pxPerMs = speed / 1000;
    offsetRef.current += direction * pxPerMs * delta;

    const singleWidth = trackRef.current.scrollWidth / 2;
    if (offsetRef.current > singleWidth) offsetRef.current -= singleWidth;
    if (offsetRef.current < -singleWidth) offsetRef.current += singleWidth;

    trackRef.current.style.transform = `translateX(${-offsetRef.current}px)`;
  });

  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div ref={trackRef} className="flex will-change-transform py-4">
        {doubled.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-28 sm:py-36 bg-[#07090e] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/7 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-600/7 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(245,158,11,0.15)]"
          >
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Client Success Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-5"
          >
            Results That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400">
              Speak for Themselves.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 leading-relaxed"
          >
            Trusted by growth-stage startups and enterprise brands across MENA and Europe. Real numbers from real clients.
          </motion.p>
        </div>
      </div>

      {/* Infinite Marquee Rows */}
      <div className="space-y-0">
        <InfiniteRow items={testimonials} direction={1} speed={36} />
        <InfiniteRow items={[...testimonials].reverse()} direction={-1} speed={30} />
      </div>

      {/* Aggregate Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl mx-auto px-4 mt-16"
      >
        <div className="rounded-2xl p-[1px] bg-gradient-to-r from-white/10 via-amber-500/20 to-white/10">
          <div className="rounded-2xl bg-[#0a0d18]/90 backdrop-blur-xl px-8 py-7 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:divide-x divide-white/[0.06]">
            {[
              { stat: "98%", label: "Client Satisfaction" },
              { stat: "150+", label: "Projects Delivered" },
              { stat: "4.9★", label: "Average Rating" },
              { stat: "3.2x", label: "Avg. Revenue Lift" },
            ].map((item, i) => (
              <div key={i} className="text-center sm:px-4">
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  {item.stat}
                </div>
                <div className="text-xs text-zinc-400 mt-1 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
