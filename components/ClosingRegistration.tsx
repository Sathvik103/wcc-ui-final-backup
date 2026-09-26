"use client";

import React, { useEffect, useState } from "react";

export default function ClosingRegistration() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00",
  });

  useEffect(() => {
    const targetTime = new Date("2026-10-09T09:00:00+05:30").getTime();

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
    <section id="cta" className="section bg-coral border-y-[3px] border-ink py-24 text-center text-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,25,24,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="wrap relative z-10 flex flex-col items-center">
        <h2 className="font-display font-extrabold text-[clamp(32px,5.5vw,56px)] text-bg leading-tight max-w-4xl tracking-tight mb-4 drop-shadow-sm">
          READY TO COMPETE AT THE NATIONAL LEVEL?
        </h2>
        <p className="text-lg md:text-xl font-medium text-[rgba(245,243,238,0.92)] mb-10">
          6,000+ coders. One free qualifier. A campus finale in Hyderabad.
        </p>

        {/* LIVE COUNTDOWN TIMER GRID */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mb-12">
          <div className="flex flex-col items-center min-w-[80px]">
            <span className="font-display text-[42px] md:text-[54px] font-extrabold leading-none tracking-[-0.02em] drop-shadow-md">
              {timeLeft.days}
            </span>
            <span className="font-mono text-[11px] font-bold tracking-[0.14em] text-[rgba(245,243,238,0.9)] uppercase mt-2">DAYS</span>
          </div>
          <span className="font-display text-[34px] md:text-[44px] font-extrabold opacity-70 -mt-6 drop-shadow-md">:</span>
          
          <div className="flex flex-col items-center min-w-[80px]">
            <span className="font-display text-[42px] md:text-[54px] font-extrabold leading-none tracking-[-0.02em] drop-shadow-md">
              {timeLeft.hours}
            </span>
            <span className="font-mono text-[11px] font-bold tracking-[0.14em] text-[rgba(245,243,238,0.9)] uppercase mt-2">HOURS</span>
          </div>
          <span className="font-display text-[34px] md:text-[44px] font-extrabold opacity-70 -mt-6 drop-shadow-md">:</span>
          
          <div className="flex flex-col items-center min-w-[80px]">
            <span className="font-display text-[42px] md:text-[54px] font-extrabold leading-none tracking-[-0.02em] drop-shadow-md">
              {timeLeft.mins}
            </span>
            <span className="font-mono text-[11px] font-bold tracking-[0.14em] text-[rgba(245,243,238,0.9)] uppercase mt-2">MINUTES</span>
          </div>
          <span className="font-display text-[34px] md:text-[44px] font-extrabold opacity-70 -mt-6 drop-shadow-md">:</span>
          
          <div className="flex flex-col items-center min-w-[80px]">
            <span className="font-display text-[42px] md:text-[54px] font-extrabold leading-none tracking-[-0.02em] drop-shadow-md">
              {timeLeft.secs}
            </span>
            <span className="font-mono text-[11px] font-bold tracking-[0.14em] text-[rgba(245,243,238,0.9)] uppercase mt-2">SECONDS</span>
          </div>
        </div>

        <a
          className="btn btn-solid px-10 py-5 bg-ink text-bg font-bold font-display text-base border-[3px] border-ink shadow-[6px_6px_0px_#ffffff] hover:shadow-[8px_8px_0px_#ffffff] hover:-translate-y-1 transition-all uppercase tracking-wide"
          href="https://unstop.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          REGISTER ON UNSTOP ↗
        </a>
      </div>
    </section>
  );
}
