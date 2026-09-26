"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Countdown() {
  const targetDate = new Date("2026-10-09T09:00:00+05:30").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex flex-col gap-3 mt-10 p-6 rounded-2xl bg-ink text-bg border-2 border-ink shadow-[6px_6px_0px_rgba(26,25,24,0.15)] relative overflow-hidden max-w-xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(255,95,64,0.25)_0%,transparent_70%)] pointer-events-none" />
      <div className="flex items-end justify-between border-b border-[rgba(245,243,238,0.15)] pb-3 mb-2">
        <span className="font-mono text-xs font-bold text-coral tracking-widest uppercase">NEXT ROUND</span>
        <div className="text-right">
          <div className="font-display text-sm font-bold tracking-tight">09 OCT 2026</div>
          <div className="font-mono text-[10px] text-[rgba(245,243,238,0.6)]">09:00 AM IST</div>
        </div>
      </div>
      
      <div className="flex justify-between items-center text-center">
        <div className="flex flex-col">
          <span className="font-display text-3xl font-extrabold text-coral leading-none">{formatNumber(timeLeft.days)}</span>
          <span className="font-mono text-[10px] uppercase tracking-widest mt-1 opacity-70">Days</span>
        </div>
        <span className="text-2xl font-display font-black opacity-30 -mt-3">:</span>
        <div className="flex flex-col">
          <span className="font-display text-3xl font-extrabold leading-none">{formatNumber(timeLeft.hours)}</span>
          <span className="font-mono text-[10px] uppercase tracking-widest mt-1 opacity-70">Hrs</span>
        </div>
        <span className="text-2xl font-display font-black opacity-30 -mt-3">:</span>
        <div className="flex flex-col">
          <span className="font-display text-3xl font-extrabold leading-none">{formatNumber(timeLeft.minutes)}</span>
          <span className="font-mono text-[10px] uppercase tracking-widest mt-1 opacity-70">Min</span>
        </div>
        <span className="text-2xl font-display font-black opacity-30 -mt-3">:</span>
        <div className="flex flex-col">
          <span className="font-display text-3xl font-extrabold leading-none">{formatNumber(timeLeft.seconds)}</span>
          <span className="font-mono text-[10px] uppercase tracking-widest mt-1 opacity-70">Sec</span>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection({ introComplete = true }: { introComplete?: boolean }) {
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2, // Wait a bit after intro finishes
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const posterVariants = {
    hidden: { opacity: 0, y: 50, rotate: -2 },
    show: { 
      opacity: 1, 
      y: 0, 
      rotate: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.4 } 
    }
  };

  return (
    <section id="hero" className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-24 pb-16 lg:pt-32">
      {/* Background elements animate in only after intro is complete */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: introComplete ? 1 : 0 }} 
        transition={{ duration: 1.5 }}
        className="hero-wash" 
      />
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: introComplete ? 1 : 0 }} 
        transition={{ duration: 1.5, delay: 0.5 }}
        className="hero-rays" 
      />
      
      <div className="wrap relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start"
            variants={containerVariants}
            initial="hidden"
            animate={introComplete ? "show" : "hidden"}
          >
            <motion.div variants={itemVariants} className="eyebrow mb-4 inline-block font-mono text-xs font-bold text-ink tracking-[0.12em] uppercase border-l-2 border-coral pl-3">
              ACM VNRVJIET PRESENTS — SIXTH FLAGSHIP EDITION
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="hero-title mb-6 text-[clamp(48px,8vw,110px)] font-display font-extrabold leading-[0.92] tracking-[-0.02em] text-ink">
              WINTER<br />
              CODING <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--ink)" }}>CONTEST</span><br />
              <span className="text-coral">6.0</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="hero-sub max-w-[540px] text-lg text-dim leading-relaxed font-medium mb-8">
              Code, Compile and Compete at National Level. A four-stage coding competition designed to test problem-solving, algorithmic thinking, and coding skills.
            </motion.p>
            
            <motion.div variants={itemVariants} className="hero-cta flex flex-wrap gap-5 items-center w-full">
              <a
                className="btn btn-solid px-8 py-4 bg-ink text-bg font-bold font-display text-[15px] border-2 border-ink shadow-[5px_5px_0px_var(--coral)] hover:shadow-[7px_7px_0px_var(--coral)] hover:-translate-y-1 transition-all uppercase tracking-wide"
                href="https://unstop.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                REGISTER FOR FREE ↗
              </a>
              <a className="link-arrow font-bold text-sm text-dim hover:text-coral transition-colors border-b-2 border-ink pb-0.5" href="#format">
                See how it works
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="w-full">
              <Countdown />
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
            initial="hidden"
            animate={introComplete ? "show" : "hidden"}
            variants={posterVariants}
          >
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden border-2 border-ink shadow-[12px_12px_0px_rgba(26,25,24,0.08)] bg-white group">
              <Image 
                src="/assets/images/poster_6_0.png" 
                alt="WCC 6.0 Official Poster" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              {/* Fallback overlay in case the poster image isn't loaded correctly, but the prompt says 6.0 poster is added so we just use the real one */}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
