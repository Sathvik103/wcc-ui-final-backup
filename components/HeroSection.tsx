"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

function InteractivePoster() {
  const ref = useRef<HTMLDivElement>(null);
  
  // Motion values for tracking cursor
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for the 3D rotation
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Map mouse position to rotation degrees (-8 to 8)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  // Map to shadow offset
  const shadowX = useTransform(mouseXSpring, [-0.5, 0.5], ["18px", "-6px"]);
  const shadowY = useTransform(mouseYSpring, [-0.5, 0.5], ["18px", "-6px"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(hover: none)").matches) return;
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to center (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    // Reset to neutral
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-[1000px] w-full max-w-[420px] mx-auto md:ml-auto">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full aspect-[4/5] bg-white border-[3px] border-ink"
      >
        <motion.div 
          className="absolute inset-0 bg-ink -z-10"
          style={{
            x: shadowX,
            y: shadowY,
            opacity: 0.15
          }}
        />
        
        <Image 
          src="/assets/images/poster_6_0.png" 
          alt="WCC 6.0 Official Poster" 
          fill 
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 420px"
        />
        
        {/* Subtle glare effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgba(255,255,255,0.2)] to-transparent pointer-events-none"
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
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.4 } 
    }
  };

  return (
    <section id="hero" className="relative min-h-[100svh] flex flex-col justify-start lg:justify-center overflow-hidden pt-36 lg:pt-32 pb-16 lg:pb-24">
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
      
      <div className="wrap relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start w-full"
            variants={containerVariants}
            initial="hidden"
            animate={introComplete ? "show" : "hidden"}
          >
            <motion.div variants={itemVariants} className="mb-5 inline-block font-mono text-[11px] font-bold text-ink tracking-[0.15em] uppercase border-l-2 border-coral pl-4 py-1">
              ACM VNRVJIET PRESENTS — SIXTH FLAGSHIP EDITION
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="mb-6 text-[clamp(44px,7.5vw,100px)] font-display font-extrabold leading-[0.9] tracking-[-0.02em] text-ink uppercase break-words w-full">
              WINTER<br />
              CODING <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--ink)" }}>CONTEST</span><br />
              <span className="text-coral">6.0</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="max-w-[500px] text-[17px] text-dim leading-[1.6] font-medium mb-14 lg:mb-12">
              A national algorithmic arena. Two rounds, one campus finale, and a pipeline built to find India's sharpest problem-solvers.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 items-stretch sm:items-center w-full">
              <a
                className="btn btn-solid px-8 py-4 bg-ink text-bg font-bold font-display text-[14px] border-[3px] border-ink shadow-[4px_4px_0px_var(--coral)] hover:shadow-[6px_6px_0px_var(--coral)] hover:-translate-y-1 transition-all uppercase tracking-[0.1em] text-center"
                href="https://unstop.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                REGISTER FOR FREE ↗
              </a>
              <a className="font-bold text-sm text-dim hover:text-coral transition-colors border-b-2 border-ink pb-0.5 tracking-wide" href="#format">
                See how it works
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 relative flex justify-center lg:justify-end w-full"
            initial="hidden"
            animate={introComplete ? "show" : "hidden"}
            variants={posterVariants}
          >
            <InteractivePoster />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
