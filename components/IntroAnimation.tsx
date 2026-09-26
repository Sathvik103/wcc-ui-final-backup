"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroAnimation({ onComplete, isComplete }: { onComplete: () => void, isComplete: boolean }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setStage(1), 400); // 1: Logo appears
    const t2 = setTimeout(() => setStage(2), 1200); // 2: Text reveals
    const t3 = setTimeout(() => onComplete(), 2800); // 3: Moves to navbar and completes

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <>
      <AnimatePresence>
        {!isComplete && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[90] bg-[#f5f3ee] flex items-center justify-center pointer-events-none"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,95,64,0.04)_0%,transparent_60%)] pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>

      {!isComplete && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
          {/* Central Lockup Container */}
          <motion.div 
            layoutId="acm-lockup" 
            className="flex items-center gap-4 relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <motion.div layout>
              <Image
                src="/assets/images/acm_logo.png"
                alt="ACM VNRVJIET Logo"
                width={80}
                height={80}
                className="w-[80px] h-[80px] object-contain shrink-0"
                priority
              />
            </motion.div>
            
            <AnimatePresence>
              {stage >= 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -10, filter: "blur(2px)", width: 0 }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)", width: "auto" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-left flex flex-col justify-center whitespace-nowrap overflow-hidden"
                >
                  <span className="font-display font-bold text-3xl tracking-tight text-[#1a1918] leading-none mb-1.5 uppercase">
                    ACM VNRVJIET
                  </span>
                  <span className="font-mono text-[11px] font-bold text-[#ff5f40] tracking-widest uppercase">
                    PRESENTS
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </>
  );
}
