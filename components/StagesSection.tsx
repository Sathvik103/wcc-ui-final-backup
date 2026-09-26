"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StagesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"]
  });
  
  // For desktop horizontal line
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  // For mobile vertical line
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="format" className="section bg-bg border-t border-[rgba(26,25,24,0.05)] pt-24 pb-28">
      <div className="wrap">
        <div className="section-head reveal" style={{ textAlign: "center", marginBottom: "80px" }}>
          <span className="section-badge mb-3">06 / FORMAT</span>
          <h2>How WCC 6.0 works.</h2>
          <p className="mx-auto mt-4 max-w-xl text-dim">
            A four-stage coding competition designed to test problem-solving, algorithmic thinking, and coding skills.
          </p>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Desktop Horizontal Line */}
          <div className="hidden md:block absolute top-[28px] left-0 right-0 h-1 bg-[rgba(255,95,64,0.1)] rounded-full">
            <motion.div 
              className="h-full bg-coral origin-left rounded-full"
              style={{ scaleX }}
            />
          </div>
          
          {/* Mobile Vertical Line */}
          <div className="md:hidden absolute top-0 bottom-0 left-[28px] w-1 bg-[rgba(255,95,64,0.1)] rounded-full">
            <motion.div 
              className="w-full bg-coral origin-top rounded-full"
              style={{ scaleY }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {/* Stage 1 */}
            <div className="flex flex-row md:flex-col items-start gap-6 md:gap-4 relative group">
              <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border-4 border-bg flex items-center justify-center font-display font-bold text-xl text-ink shadow-[0_0_0_2px_rgba(255,95,64,0.2)] group-hover:shadow-[0_0_0_2px_var(--coral)] transition-all z-10">
                01
              </div>
              <div>
                <div className="font-mono text-[10px] font-bold text-coral tracking-widest uppercase mb-2 md:mt-4">
                  UNTIL 24 SEPT
                </div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-ink leading-tight mb-2">
                  National Registration
                </h3>
                <p className="text-sm text-dim leading-relaxed mb-4">
                  Register on Unstop as a solo coder or with one teammate. Round 1 registration is completely free and open to students across India.
                </p>
                <a className="inline-block font-mono text-[11px] font-bold text-ink hover:text-coral border-b border-ink hover:border-coral pb-0.5 tracking-wider transition-colors" href="https://unstop.com" target="_blank" rel="noopener noreferrer">
                  REGISTER NOW ↗
                </a>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="flex flex-row md:flex-col items-start gap-6 md:gap-4 relative group">
              <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border-4 border-bg flex items-center justify-center font-display font-bold text-xl text-ink shadow-[0_0_0_2px_rgba(255,95,64,0.2)] group-hover:shadow-[0_0_0_2px_var(--coral)] transition-all z-10">
                02
              </div>
              <div>
                <div className="font-mono text-[10px] font-bold text-coral tracking-widest uppercase mb-2 md:mt-4">
                  09 OCT 2026
                </div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-ink leading-tight mb-2">
                  Round 1
                </h3>
                <p className="text-sm text-dim leading-relaxed mb-4">
                  Taking it a step further with HackerRank's proctored arena, with problems ranging from dynamic programming and graphs to game theory.
                </p>
                <a className="inline-block font-mono text-[11px] font-bold text-ink hover:text-coral border-b border-ink hover:border-coral pb-0.5 tracking-wider transition-colors" href="https://hackerrank.com" target="_blank" rel="noopener noreferrer">
                  HACKERRANK PORTAL ↗
                </a>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="flex flex-row md:flex-col items-start gap-6 md:gap-4 relative group">
              <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border-4 border-bg flex items-center justify-center font-display font-bold text-xl text-ink shadow-[0_0_0_2px_rgba(255,95,64,0.2)] group-hover:shadow-[0_0_0_2px_var(--coral)] transition-all z-10">
                03
              </div>
              <div>
                <div className="font-mono text-[10px] font-bold text-coral tracking-widest uppercase mb-2 md:mt-4">
                  10 OCT 2026
                </div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-ink leading-tight mb-2">
                  Audit & Shortlisting
                </h3>
                <p className="text-sm text-dim leading-relaxed mb-4">
                  Automated plagiarism and similarity audits. Top 150+ coders receive campus invitations for the grand finale.
                </p>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="flex flex-row md:flex-col items-start gap-6 md:gap-4 relative group">
              <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-coral border-4 border-bg flex items-center justify-center font-display font-bold text-xl text-bg shadow-[0_0_0_2px_var(--coral)] transition-all z-10">
                04
              </div>
              <div>
                <div className="font-mono text-[10px] font-bold text-coral tracking-widest uppercase mb-2 md:mt-4">
                  11 OCT 2026
                </div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-ink leading-tight mb-2">
                  Round 2
                </h3>
                <p className="text-sm text-dim leading-relaxed mb-4">
                  In-person battle at VNRVJIET's HPC labs, followed by the valedictory awards ceremony to crown the champions.
                </p>
                <a className="inline-block font-mono text-[11px] font-bold text-ink hover:text-coral border-b border-ink hover:border-coral pb-0.5 tracking-wider transition-colors" href="https://maps.google.com/?q=VNRVJIET+Hyderabad" target="_blank" rel="noopener noreferrer">
                  VNRVJIET CAMPUS ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
