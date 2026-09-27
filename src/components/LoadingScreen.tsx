"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "done">("loading");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    /* Simulate realistic loading progress */
    const steps = [
      { target: 30, delay: 0,   duration: 400  },
      { target: 58, delay: 400, duration: 500  },
      { target: 79, delay: 900, duration: 400  },
      { target: 95, delay: 1300,duration: 350  },
      { target: 100,delay: 1650,duration: 250  },
    ];

    const timers: ReturnType<typeof setTimeout>[] = [];

    steps.forEach(({ target, delay }) => {
      timers.push(
        setTimeout(() => setProgress(target), delay)
      );
    });

    /* Kick off exit after progress hits 100 */
    timers.push(
      setTimeout(() => setPhase("done"), 1950)
    );

    /* Unmount fully after the exit animation */
    timers.push(
      setTimeout(() => setVisible(false), 2850)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {phase === "loading" && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#06070a] overflow-hidden"
        >
          {/* ── Ambient orbs ── */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[min(600px,90vw)] h-[min(600px,90vw)] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute w-[min(400px,60vw)] h-[min(400px,60vw)] rounded-full bg-indigo-600/15 blur-[100px] pointer-events-none top-1/3 right-1/4"
          />

          {/* ── Fine dot grid ── */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:28px_28px] pointer-events-none" />

          {/* ── Center content ── */}
          <div className="relative flex flex-col items-center gap-10">

            {/* Logo mark — animated rings + icon */}
            <div className="relative flex items-center justify-center">
              {/* Outer spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute w-24 h-24 rounded-full border-[1.5px] border-transparent"
                style={{
                  background: "linear-gradient(#06070a, #06070a) padding-box, conic-gradient(from 0deg, transparent 60%, #3b82f6, #818cf8, transparent) border-box",
                }}
              />
              {/* Inner spinning ring (opposite) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute w-16 h-16 rounded-full border-[1.5px] border-transparent"
                style={{
                  background: "linear-gradient(#06070a, #06070a) padding-box, conic-gradient(from 180deg, transparent 60%, #22d3ee, #6366f1, transparent) border-box",
                }}
              />

              {/* Logo icon center */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "backOut", delay: 0.15 }}
                className="relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-400 p-[1.5px] shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              >
                <div className="w-full h-full rounded-2xl bg-[#08091a] flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
                    <path d="M12 7v5l3 3" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                  </svg>
                </div>
              </motion.div>
            </div>

            {/* Brand name */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col items-center gap-1.5"
            >
              <h1 className="text-3xl font-extrabold tracking-tight text-white">
                Leon{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                  Advert
                </span>
              </h1>
              <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-500 font-semibold">
                Software &amp; Growth Agency
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col items-center gap-3 w-56"
            >
              {/* Track */}
              <div className="w-full h-[3px] rounded-full bg-white/[0.07] overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 relative"
                  style={{ width: `${progress}%` }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {/* Leading glow dot */}
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_3px_rgba(34,211,238,0.6)]" />
                </motion.div>
              </div>

              {/* Percentage + status */}
              <div className="flex items-center justify-between w-full">
                <span className="text-[11px] text-zinc-600 font-mono">
                  {progress < 40 ? "Initializing..." : progress < 70 ? "Loading assets..." : progress < 95 ? "Almost ready..." : "Launching..."}
                </span>
                <span className="text-[11px] font-mono font-bold text-zinc-400">
                  {progress}%
                </span>
              </div>
            </motion.div>
          </div>

          {/* Bottom tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-10 text-[11px] text-zinc-700 tracking-widest uppercase font-medium"
          >
            Engineering Elite Software · Scaling Dominant Brands
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
