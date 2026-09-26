"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setStage(1), 300);
    const t2 = setTimeout(() => setStage(2), 2200);
    const t3 = setTimeout(() => {
      setStage(3);
      setTimeout(() => onComplete(), 400);
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  if (stage === 3) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#f5f3ee] flex items-center justify-center transition-opacity duration-500 ease-out ${
        stage >= 2 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center justify-center p-6">
        <div
          className={`border-3 border-[#1a1918] bg-white rounded-2xl pl-8 pr-24 py-7 shadow-[8px_8px_0px_#1a1918] transition-all duration-700 w-auto ${
            stage >= 1 ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3">
            <Image
              src="/acm-vnrvjiet-logo.png"
              alt="ACM VNRVJIET Logo"
              width={60}
              height={60}
              className="w-[60px] h-[60px] object-contain shrink-0"
              priority
            />
            <div className="text-left flex flex-col justify-center mr-8">
              <span className="font-display font-bold text-2xl tracking-tight text-[#1a1918] leading-none mb-1.5 whitespace-nowrap">
                ACM VNRVJIET
              </span>
              <span className="font-mono text-xs font-bold text-[#ff5f40] tracking-widest uppercase">
                PRESENTS WCC 6.0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
