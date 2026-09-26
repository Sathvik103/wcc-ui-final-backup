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

    const t1 = setTimeout(() => setStage(1), 300);
    const t2 = setTimeout(() => setStage(2), 1200);
    const t3 = setTimeout(() => onComplete(), 2500);

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
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
            className="fixed inset-0 z-[90] bg-bg flex items-center justify-center pointer-events-none"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,95,64,0.06)_0%,transparent_60%)] pointer-events-none" />
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
                width={90}
                height={90}
                className="w-[90px] h-[90px] object-contain shrink-0 drop-shadow-md"
                priority
              />
            </motion.div>
            
            <AnimatePresence>
              {stage >= 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-left flex flex-col justify-center whitespace-nowrap"
                >
                  <span className="font-display font-bold text-4xl tracking-tight text-ink leading-none mb-2 uppercase">
                    ACM VNRVJIET
                  </span>
                  <span className="font-mono text-sm font-bold text-coral tracking-widest uppercase">
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
