"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FlipDigit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-[60px] h-[72px] sm:w-[80px] sm:h-[96px] bg-white border-2 border-ink shadow-[4px_4px_0px_var(--ink)] rounded-xl flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={value}
            initial={{ y: 20, opacity: 0, rotateX: -45 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            exit={{ y: -20, opacity: 0, rotateX: 45 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute inset-0 flex items-center justify-center text-3xl sm:text-[44px] font-display font-extrabold text-ink"
          >
            {value}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="text-[10px] sm:text-xs font-bold tracking-wider text-bg opacity-90 uppercase">
        {label}
      </div>
    </div>
  );
}

export default function ClosingRegistration() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00",
  });
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const targetTime = new Date("2026-10-12T20:00:00+05:30").getTime();

    const updateTimer = () => {
      const diff = targetTime - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: "00", hours: "00", mins: "00", secs: "00" });
        return;
      }

      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      const secs = Math.floor((diff % 60000) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        mins: String(mins).padStart(2, "0"),
        secs: String(secs).padStart(2, "0"),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="cta" className="section !py-20 sm:!py-28 bg-coral border-y-[3px] border-ink text-white">
      <div className="wrap flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl sm:text-5xl md:text-[56px] font-display font-extrabold leading-[1.1] tracking-tight uppercase max-w-4xl mx-auto mb-6">
          READY TO COMPETE AT THE NATIONAL LEVEL?
        </h2>
        <p className="text-[16px] sm:text-[18px] font-medium opacity-90 !mb-5 sm:mb-16">
          6,000+ coders. A virtual qualifier. A campus finale in Hyderabad.
        </p>

        {isMounted && (
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 mb-14 sm:mb-16 scale-90 sm:scale-100">
            <FlipDigit value={timeLeft.days} label="DAYS" />
            <div className="text-2xl sm:text-4xl font-extrabold text-white pb-6">:</div>
            <FlipDigit value={timeLeft.hours} label="HOURS" />
            <div className="text-2xl sm:text-4xl font-extrabold text-white pb-6">:</div>
            <FlipDigit value={timeLeft.mins} label="MINUTES" />
            <div className="text-2xl sm:text-4xl font-extrabold text-white pb-6">:</div>
            <FlipDigit value={timeLeft.secs} label="SECONDS" />
          </div>
        )}

        <div>
          <a
            className="btn btn-solid px-8 sm:px-10 py-4 sm:py-5 bg-ink text-bg font-bold font-display text-[15px] sm:text-[16px] border-[3px] border-ink shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all uppercase tracking-[0.1em] text-center inline-flex items-center gap-2"
            href="https://unstop.com/o/xkq9yFv?lb=Vr9VXAuO&utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Acmcha18131"
            target="_blank"
            rel="noopener noreferrer"
          >
            REGISTER ON UNSTOP <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
