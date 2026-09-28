"use client";

import React, { useEffect, useRef, useState } from "react";

function easeOutExpo(x: number): number {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setCount(value);
      setHasAnimated(true);
      return;
    }

    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const duration = 2000; // 2 seconds

          const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easedProgress = easeOutExpo(progress);
            
            setCount(Math.floor(easedProgress * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="font-display text-[36px] md:text-[50px] font-extrabold text-ink leading-none tracking-tight">
      {prefix}{count.toLocaleString("en-IN")}{suffix}
    </div>
  );
}

export default function ScaleSection() {
  return (
    <section id="scale" className="section">
      <div className="wrap">
        <div className="section-head reveal" style={{ textAlign: "center" }}>
          <span className="section-badge">NATIONAL REACH & LEGACY</span>
          <h2>The Scale of Winter Coding Contest</h2>
          <p>
            Over six continuous editions, WCC has matured into one of the country&apos;s most fiercely competitive algorithmic arenas.
          </p>
        </div>

        <div className="">
          <div className="flex justify-around items-center mb-10">

            <div className="flex flex-col lg:col-span-2">
              <AnimatedNumber value={6000} suffix="+" />
              <div className="font-mono text-[11px] font-bold text-coral tracking-widest uppercase mt-4 mb-2">EXPECTED CODERS</div>
              <div className="text-[14px] text-dim font-medium">Pan-India talent pipeline</div>
            </div>

            <div className="flex flex-col lg:col-span-2">
              <AnimatedNumber value={90000} suffix="+" />
              <div className="font-mono text-[11px] font-bold text-coral tracking-widest uppercase mt-4 mb-2">IMPRESSIONS</div>
              <div className="text-[14px] text-dim font-medium">High-density collegiate reach</div>
            </div>

            <div className="flex flex-col lg:col-span-2">
              <AnimatedNumber value={500} suffix="+" />
              <div className="font-mono text-[11px] font-bold text-coral tracking-widest uppercase mt-4 mb-2">INSTITUTIONS</div>
              <div className="text-[14px] text-dim font-medium">IITs, NITs, BITS & Universities</div>
            </div>

          </div>

          <div className="flex justify-center items-center gap-4 lg:gap-24">
            <div className="flex flex-col lg:col-span-2 lg:col-start-2">
              <AnimatedNumber value={150} suffix="+" />
              <div className="font-mono text-[11px] font-bold text-coral tracking-widest uppercase mt-4 mb-2">CAMPUS FINALISTS</div>
              <div className="text-[14px] text-dim font-medium">Curated algorithmic minds</div>
            </div>

            <div className="col-span-2 flex flex-col lg:col-span-2 lg:col-start-4">
              <AnimatedNumber value={55000} prefix="₹"  />
              <div className="font-mono text-[11px] font-bold text-coral tracking-widest uppercase mt-4 mb-2">DIRECT HONORS</div>
              <div className="text-[14px] text-dim font-medium">Verified cash & trophies</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
