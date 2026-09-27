"use client";

import { motion } from "framer-motion";
import { ArrowUp, Sparkles, Mail, MapPin, Clock, ExternalLink, ArrowRight } from "lucide-react";

/* ── Social icon SVGs (inline, no extra lib needed) ── */
function TwitterX() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function LinkedIn() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function Instagram() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}
function Behance() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.598.414.27.738.612.97 1.034.234.422.35.924.35 1.512 0 .638-.144 1.175-.432 1.61-.288.434-.7.794-1.23 1.08.74.214 1.292.597 1.657 1.148.367.552.548 1.213.548 1.983 0 .652-.13 1.217-.39 1.693-.26.478-.615.866-1.063 1.166-.45.3-.97.522-1.553.667-.587.145-1.198.218-1.83.218H0V4.503h6.938zm-.395 5.92c.548 0 .992-.13 1.33-.388.338-.26.506-.65.506-1.17 0-.3-.056-.548-.167-.746a1.27 1.27 0 0 0-.45-.476 1.96 1.96 0 0 0-.648-.257 3.77 3.77 0 0 0-.784-.08H2.59v3.117h3.952zm.19 6.2c.29 0 .568-.03.83-.09.265-.06.497-.155.697-.286.2-.13.36-.31.48-.535.118-.224.177-.5.177-.826 0-.658-.185-1.133-.554-1.424-.37-.29-.862-.437-1.476-.437H2.59v3.598h4.143zm9.565-1.648c.36.35.878.524 1.556.524.484 0 .9-.12 1.25-.36.35-.24.566-.497.646-.77h2.34c-.374 1.17-1.05 2.01-1.875 2.52-.824.508-1.82.763-2.987.763-.81 0-1.54-.13-2.188-.39a4.722 4.722 0 0 1-1.635-1.09 4.86 4.86 0 0 1-1.023-1.678 6.183 6.183 0 0 1-.356-2.133c0-.768.12-1.48.363-2.133.244-.653.59-1.215 1.04-1.686.45-.47.987-.836 1.612-1.097.624-.262 1.316-.393 2.076-.393.848 0 1.59.163 2.226.49.636.325 1.16.77 1.573 1.333.414.563.71 1.208.893 1.933.183.726.245 1.494.185 2.306H16.3c0 .774.18 1.33.54 1.68zm2.724-4.524c-.29-.32-.752-.48-1.385-.48-.4 0-.734.067-.998.2a1.96 1.96 0 0 0-.645.508 1.88 1.88 0 0 0-.35.666c-.07.24-.11.47-.12.69h4.138c-.07-.684-.35-1.264-.64-1.584zm-3.568-6.2h5.088v1.326h-5.088V4.25z" />
    </svg>
  );
}

const socials = [
  { label: "X / Twitter", icon: <TwitterX />, href: "#" },
  { label: "LinkedIn", icon: <LinkedIn />, href: "#" },
  { label: "Instagram", icon: <Instagram />, href: "#" },
  { label: "Behance", icon: <Behance />, href: "#" },
];

const services = [
  { name: "Web & Software Dev", href: "#services" },
  { name: "Social Media Marketing", href: "#services" },
  { name: "SEO & Search Growth", href: "#services" },
  { name: "UI/UX & Brand Design", href: "#services" },
  { name: "Mobile App Development", href: "#services" },
  { name: "Cloud & DevOps", href: "#services" },
];

const company = [
  { name: "Why Leon Advert", href: "#why-us" },
  { name: "Our Process", href: "#process" },
  { name: "Client Reviews", href: "#testimonials" },
  { name: "Leadership", href: "#about" },
  { name: "Request a Proposal", href: "#contact" },
  { name: "Careers & Hiring", href: "mailto:contact@leonadvert.com" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#040508] border-t border-white/[0.07] overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-blue-600/6 rounded-full blur-[120px] pointer-events-none" />

      {/* ── Newsletter / CTA Banner ───────────────────── */}
      <div className="relative border-b border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-widest mb-3">
                <Sparkles className="w-3 h-3" />
                Free Strategy Session
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Ready to scale your business?
              </h3>
              <p className="text-sm text-zinc-500 mt-1.5">
                Book a free 30-minute discovery call — no commitments, just clarity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white font-semibold text-sm shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.65)] transition-all"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                Book Free Call
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href="mailto:contact@leonadvert.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] text-white font-medium text-sm border border-white/[0.10] hover:bg-white/[0.08] hover:border-white/[0.2] transition-all"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                Send an Email
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Main Footer Grid ──────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">

          {/* Brand column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group w-fit">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
                <div className="w-full h-full bg-[#0a0d16] rounded-[11px] flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
                    <path d="M12 7v5l3 3" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                  Leon <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Advert</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium -mt-0.5 block">Software & Growth</span>
              </div>
            </a>

            {/* Brand tagline */}
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              Premier software house & full-service digital growth agency. We architect elite web platforms, mobile apps, and drive explosive ROI through data-backed marketing.
            </p>

            {/* Contact quick-info */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs text-zinc-400">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="mailto:contact@leonadvert.com" className="hover:text-white transition-colors">contact@leonadvert.com</a>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-400">
                <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Mon – Sat &nbsp;•&nbsp; 9 am – 8 pm EST</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Serving US · UK · EU · MENA & Worldwide</span>
              </div>
            </div>

            {/* Status pill */}
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              All Systems Operational
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socials.map(({ label, icon, href }) => (
                <motion.a
                  key={label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.09] hover:border-white/[0.18] flex items-center justify-center transition-all"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-sm text-zinc-500 hover:text-cyan-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-cyan-400 transition-colors shrink-0" />
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-sm text-zinc-500 hover:text-cyan-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-cyan-400 transition-colors shrink-0" />
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust / Certifications column */}
          <div className="lg:col-span-2 md:col-span-2">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-widest mb-5">Certifications</h4>
            <div className="space-y-2.5">
              {[
                { label: "Google Partner", color: "bg-blue-500/10 border-blue-500/20 text-blue-300" },
                { label: "Meta Business", color: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300" },
                { label: "AWS Certified", color: "bg-amber-500/10 border-amber-500/20 text-amber-300" },
                { label: "ISO 27001", color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300" },
              ].map(({ label, color }) => (
                <div key={label} className={`px-3 py-1.5 rounded-lg border text-[11px] font-semibold ${color} flex items-center gap-1.5`}>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-600 gap-4 flex-wrap">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-zinc-400 font-semibold">Leon Advert Agency</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-all"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
