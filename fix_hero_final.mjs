import fs from 'fs';

const code = `"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

function InteractivePoster() {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(hover: none)").matches) return;
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-[1000px] w-full max-w-[480px] mx-auto lg:mr-0 lg:ml-auto mt-12 lg:mt-0">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full bg-white rounded-3xl p-5 sm:p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-black/5"
      >
        <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#fbfaf9] mb-5">
          {/* Floating Badges */}
          <div className="absolute top-3 left-3 bg-[#1e2330] text-white font-bold text-[10px] sm:text-[11px] tracking-widest px-3.5 py-1.5 rounded-full z-10 uppercase shadow-sm">
            Edition 6.0
          </div>
          <div className="absolute top-3 right-3 bg-[#10b981] text-white font-bold text-[10px] sm:text-[11px] tracking-widest px-3.5 py-1.5 rounded-full z-10 uppercase shadow-sm">
            100% FREE ROUND 1
          </div>

          <Image 
            src="/assets/images/poster_6_0.png" 
            alt="WCC 6.0 Official Poster" 
            fill 
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 440px"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <div className="flex-1 bg-[#fffaf5] border border-[#fcd5b5] rounded-xl p-3 sm:p-4 text-left">
            <div className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#ff5f40] uppercase mb-1.5">Round 1 (Online)</div>
            <div className="text-[13px] sm:text-[14px] font-bold text-[#4a3f35] leading-tight">09 OCT 2026 • 9:00 AM</div>
          </div>
          <div className="flex-1 bg-[#f4f7fa] border border-[#e2e8f0] rounded-xl p-3 sm:p-4 text-left">
            <div className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#64748b] uppercase mb-1.5">Round 2 (Campus)</div>
            <div className="text-[13px] sm:text-[14px] font-bold text-[#334155] leading-tight">11 OCT 2026 • VNRVJIET</div>
          </div>
        </div>

        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgba(255,255,255,0.4)] to-transparent pointer-events-none rounded-3xl"
          style={{
            x: useTransform(mouseXSpring, [-0.5, 0.5], ["-50%", "50%"]),
            y: useTransform(mouseYSpring, [-0.5, 0.5], ["-50%", "50%"]),
          }}
        />
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
    <section id="hero" className="relative min-h-[100svh] flex flex-col justify-start lg:justify-center overflow-hidden pt-[140px] lg:pt-32 pb-16 lg:pb-24">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: introComplete ? 1 : 0 }} transition={{ duration: 1.5 }} className="hero-wash" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: introComplete ? 1 : 0 }} transition={{ duration: 1.5, delay: 0.5 }} className="hero-rays" />
      
      <div className="wrap relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <motion.div className="lg:col-span-7 flex flex-col items-start w-full" variants={containerVariants} initial="hidden" animate={introComplete ? "show" : "hidden"}>
            
            <motion.div variants={itemVariants} className="mb-8 sm:mb-10 inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-[12px] font-bold text-ink tracking-[0.12em] uppercase bg-white border-2 border-ink rounded-full px-5 sm:px-6 py-2.5 sm:py-3 shadow-[2px_2px_0px_var(--ink)]">
              <span className="text-coral text-sm">✦</span> ACM VNRVJIET PRESENTS
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="mb-8 text-[clamp(42px,6.5vw,90px)] font-display font-extrabold leading-[1.05] tracking-[-0.02em] text-ink uppercase break-words w-full">
              WINTER CODING<br />
              CONTEST <span className="text-coral">6.0</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="max-w-[500px] text-[17px] sm:text-[19px] text-dim leading-[1.6] font-medium mb-12 sm:mb-14">
              Code, Compile and Compete at National Level.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-6 items-stretch sm:items-center w-full">
              <a
                className="btn btn-solid px-8 py-4 bg-ink text-bg font-bold font-display text-[15px] border-[3px] border-ink shadow-[4px_4px_0px_var(--coral)] hover:shadow-[6px_6px_0px_var(--coral)] hover:-translate-y-1 transition-all uppercase tracking-[0.1em] text-center flex items-center justify-center gap-2"
                href="https://unstop.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                REGISTER FOR FREE <span className="text-[16px]">↗</span>
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
`;

fs.writeFileSync('components/HeroSection.tsx', code, 'utf8');
console.log('HeroSection rewritten');
