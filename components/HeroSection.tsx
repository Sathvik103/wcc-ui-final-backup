"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

function InteractivePoster() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Very subtle range: -3deg to 3deg
  const rotateX = useTransform(springY, [0, 1], [3, -3]);
  const rotateY = useTransform(springX, [0, 1], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div className="w-full max-w-[440px] mx-auto lg:mr-0 lg:ml-auto mt-12 lg:mt-0" style={{ perspective: 1200 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, padding: '24px', transformStyle: "preserve-3d" }}
        className="relative w-full bg-white rounded-[28px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-black/5 flex flex-col"
      >
        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl">
          <Image
            src="/assets/images/poster_6_0.png"
            alt="WCC 6.0 Official Poster"
            fill
            className="object-contain pointer-events-none"
            priority
            sizes="(max-width: 768px) 100vw, 440px"
          />
        </div>

        {/* Increased margin to mt-8 for breathing room */}
        <div className="flex flex-col sm:flex-row gap-4 w-full mt-8">
          <div className="flex-1 bg-white border border-ink/10 rounded-xl p-3 sm:p-4 text-left shadow-sm">
            <div className="text-[10px] sm:text-[11px] font-bold tracking-widest text-ink uppercase mb-1.5 opacity-60">Round 1 (Online)</div>
            <div className="text-[13px] sm:text-[14px] font-bold text-ink leading-tight">13 OCT 2026</div>
          </div>
          <div className="flex-1 bg-white border border-ink/10 rounded-xl p-3 sm:p-4 text-left shadow-sm">
            <div className="text-[10px] sm:text-[11px] font-bold tracking-widest text-ink uppercase mb-1.5 opacity-60">Round 2 (Campus)</div>
            <div className="text-[13px] sm:text-[14px] font-bold text-ink leading-tight">22 OCT 2026</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function HeroSection({ introComplete = true }: { introComplete?: boolean }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section id="hero" className="relative min-h-[100svh] flex flex-col justify-start lg:justify-center overflow-hidden pb-16 lg:pb-20">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: introComplete ? 1 : 0 }} transition={{ duration: 1.5 }} className="hero-wash" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: introComplete ? 1 : 0 }} transition={{ duration: 1.5, delay: 0.5 }} className="hero-rays" />

      <div className="wrap relative z-10 flex-1 flex flex-col justify-center pt-2 lg:pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          <motion.div className="lg:col-span-7 flex flex-col items-start w-full" variants={containerVariants} initial="hidden" animate={introComplete ? "show" : "hidden"}>

            <motion.div variants={itemVariants} className="mb-6 sm:mb-8 inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-[12px] font-bold text-ink tracking-[0.12em] uppercase bg-white border-2 border-ink rounded-full px-5 sm:px-6 py-2.5 sm:py-3 shadow-[2px_2px_0px_var(--ink)]">
              <span className="text-coral text-sm">✦</span> ACM VNRVJIET PRESENTS
            </motion.div>

            <motion.h1 variants={itemVariants} className="mb-6 lg:mb-8 text-[clamp(36px,8.5vw,46px)] lg:text-[clamp(52px,4.5vw,66px)] font-display font-extrabold leading-[1.04] tracking-[-0.025em] text-ink uppercase break-words w-full">
              <span className="lg:whitespace-nowrap">WINTER CODING</span>
              <br className="hidden lg:block" />
              <span className="lg:hidden"> </span>
              <span className="lg:whitespace-nowrap">CONTEST <span className="text-coral">6.0</span></span>
            </motion.h1>

            <motion.p variants={itemVariants} className="max-w-[500px] text-[17px] sm:text-[19px] text-dim leading-[1.6] font-medium mb-8 lg:mb-10">
              Code, Compile and Compete at National Level.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-5 sm:gap-6 items-stretch sm:items-center w-full">
              <a
                className="btn btn-solid px-8 py-4 bg-ink text-bg font-bold font-display text-[15px] border-[3px] border-ink shadow-[4px_4px_0px_var(--coral)] hover:shadow-[6px_6px_0px_var(--coral)] hover:-translate-y-1 transition-all uppercase tracking-[0.1em] text-center flex items-center justify-center gap-2"
                href="https://unstop.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                REGISTER NOW <span className="text-[16px]">↗</span>
              </a>
              <a className="font-bold text-[15px] text-dim hover:text-coral transition-colors border-b-2 border-ink pb-0.5 tracking-wide text-center mt-2 sm:mt-0" href="#format">
                See how it works
              </a>
            </motion.div>
          </motion.div>

          <motion.div className="lg:col-span-5 relative flex justify-center lg:justify-end w-full pl-0 lg:pl-6" initial="hidden" animate={introComplete ? "show" : "hidden"} variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.4 } } }}>
            <InteractivePoster />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
