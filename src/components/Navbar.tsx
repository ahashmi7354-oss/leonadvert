"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Sparkles, Terminal, PhoneCall } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Leadership", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07090e]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
              <div className="w-full h-full bg-[#0a0d16] rounded-[11px] flex items-center justify-center">
                {/* Stylized Geometric Lion / Modern Tech Crest */}
                <svg
                  className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
                  <path d="M12 7v5l3 3" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                Leon <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Advert</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium -mt-1">
                Software & Growth
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-sm text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center p-[1px] overflow-hidden rounded-full font-medium transition-all group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative px-5 py-2 text-xs font-semibold text-white bg-[#0b0f19] rounded-full flex items-center gap-1.5 group-hover:bg-opacity-80 transition-all">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
                Start a Project
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-5 rounded-2xl bg-[#0c101d]/95 backdrop-blur-2xl border border-white/[0.1] shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
              >
                <Sparkles className="w-4 h-4 text-cyan-300" />
                Start a Project
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
