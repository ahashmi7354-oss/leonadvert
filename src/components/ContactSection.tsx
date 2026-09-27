"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SpotlightCard from "./motion/SpotlightCard";
import {
  Send,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Mail,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  Zap,
} from "lucide-react";

const availableServices = [
  "Web Development",
  "Social Media Marketing",
  "SEO & Search Growth",
  "UI/UX & Graphics",
  "Mobile Apps",
  "Cloud & DevOps",
];

const contactItems = [
  {
    icon: Clock,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    title: "Fast Turnaround",
    sub: "Response guaranteed in < 12 hours",
  },
  {
    icon: Mail,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    title: "Direct Email",
    sub: "contact@leonadvert.com",
  },
  {
    icon: Phone,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    title: "Discovery Call",
    sub: "Free 30-min strategy session",
  },
  {
    icon: MapPin,
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
    title: "Global Delivery",
    sub: "US · UK · EU · MENA & Worldwide",
  },
];

const inputClass =
  "w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.09] text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/20 transition-all hover:border-white/[0.15]";

export default function ContactSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["Web Development"]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const toggle = (s: string) =>
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 bg-[#06070a] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ───────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Let&apos;s Build Something Great</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-5"
          >
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
              Accelerate
            </span>{" "}
            Your Growth?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 leading-relaxed"
          >
            Tell us about your project. Our tech leads and marketing strategists will send you a tailored proposal within 24 hours — no obligations.
          </motion.p>
        </div>

        {/* ── Main grid ───────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── LEFT: Info panel ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Contact info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {contactItems.map(({ icon: Icon, color, bg, title, sub }) => (
                <div
                  key={title}
                  className={`flex items-center gap-4 p-4 rounded-2xl border ${bg} transition-all hover:scale-[1.01]`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${bg}`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="text-xs text-zinc-400 mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-emerald-950/50 to-emerald-900/20 border border-emerald-500/25 overflow-hidden"
            >
              {/* glow */}
              <div className="absolute inset-0 bg-emerald-500/5 rounded-2xl" />
              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-bold text-white">Prefer Instant Messaging?</span>
                  </div>
                  <span className="text-xs text-emerald-300/80">Chat directly with our team — we reply instantly</span>
                </div>
                <a
                  href="https://wa.me/?text=Hi%20Leon%20Advert%2C%20I%20would%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition-colors shadow-lg shadow-emerald-500/25"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Social proof strip */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <p className="text-[11px] text-zinc-500 uppercase tracking-widest font-semibold mb-3">Trusted by teams at</p>
              <div className="flex flex-wrap gap-2">
                {["TechBridge", "NovaMedica", "AlphaRetail", "FintechFlow", "CloudScale"].map((name) => (
                  <span key={name} className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.07] text-zinc-400 text-xs font-medium">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Form ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <SpotlightCard
              spotlightColor="rgba(99, 102, 241, 0.18)"
              borderColor="rgba(59, 130, 246, 0.3)"
              className="shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  /* ── Success state ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="py-20 px-8 text-center space-y-5"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-10 h-10" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                    <p className="text-zinc-400 text-sm max-w-sm mx-auto leading-relaxed">
                      A senior strategist is reviewing your scope and will contact you within 24 hours. Check your inbox!
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", message: "" }); setSelectedServices(["Web Development"]); }}
                      className="mt-2 px-6 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-xs font-semibold text-white transition-colors border border-white/[0.08]"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  /* ── Form ── */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="p-7 sm:p-9 space-y-7"
                  >
                    {/* Header inside form card */}
                    <div className="pb-5 border-b border-white/[0.07]">
                      <h3 className="text-lg font-bold text-white">Send a Project Inquiry</h3>
                      <p className="text-xs text-zinc-500 mt-1">We&apos;ll respond within 12 hours, guaranteed.</p>
                    </div>

                    {/* Service selector */}
                    <div>
                      <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-3">
                        Services You Need
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {availableServices.map((s) => {
                          const active = selectedServices.includes(s);
                          return (
                            <motion.button
                              whileHover={{ scale: 1.04 }}
                              whileTap={{ scale: 0.96 }}
                              type="button"
                              key={s}
                              onClick={() => toggle(s)}
                              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                                active
                                  ? "bg-blue-600 text-white border border-blue-400/50 shadow-md shadow-blue-600/30"
                                  : "bg-white/[0.04] text-zinc-400 border border-white/[0.07] hover:bg-white/[0.08] hover:text-zinc-200"
                              }`}
                            >
                              {active && <span className="mr-1 text-cyan-200">✓</span>}
                              {s}
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-2">
                          Work Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-2">
                        Project Details & Goals
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Describe your project, current challenges, and what success looks like for you..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm tracking-wide shadow-[0_0_35px_rgba(37,99,235,0.45)] hover:shadow-[0_0_55px_rgba(37,99,235,0.7)] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Project Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>

                    <p className="text-center text-[10px] text-zinc-600">
                      No spam, no obligations. Your information is kept 100% confidential.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
