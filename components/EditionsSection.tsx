"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type EditionKey = "6.0" | "5.0" | "4.0" | "3.0" | "2.0" | "1.0";

interface EditionInfo {
  year: string;
  pill: string;
  title: string;
  desc: string;
  m1Label: string;
  m1Val: string;
  m2Label: string;
  m2Val: string;
  m3Label: string;
  m3Val: string;
  poster: string;
}

const editionData: Record<EditionKey, EditionInfo> = {
  "6.0": {
    year: "2026",
    pill: "THE NEXT EVOLUTION — 2026",
    title: "Winter Coding Contest 6.0",
    desc: "The sixth flagship edition. Expanding further with official HackerRank proctored arena infrastructure and nationwide outreach on Unstop.",
    m1Label: "EXPECTED CODERS",
    m1Val: "6,000+",
    m2Label: "INSTITUTIONS",
    m2Val: "500+",
    m3Label: "PRIZE POOL",
    m3Val: "₹150,000+",
    poster: "/assets/images/poster_6_0.png",
  },
  "5.0": {
    year: "2025",
    pill: "NATIONAL STANDING — 2025",
    title: "Winter Coding Contest 5.0",
    desc: "Scaled participation nationwide across 120+ premier technical institutions. Integrated dual-layer automated evaluation, real-time leaderboards, and offline finale hackathons.",
    m1Label: "PARTICIPATING CODERS",
    m1Val: "4,800+",
    m2Label: "TOTAL SUBMISSIONS",
    m2Val: "75,000+",
    m3Label: "PRIZE POOL",
    m3Val: "₹140,000+",
    poster: "/assets/images/poster_5_0.jpg",
  },
  "4.0": {
    year: "2024",
    pill: "HYBRID MILESTONE — 2024",
    title: "Winter Coding Contest 4.0",
    desc: "Pioneered hybrid competition format uniting virtual qualifiers with live, high-pressure campus speed-coding finals. Expanded participation beyond Telangana.",
    m1Label: "REGISTERED TEAMS",
    m1Val: "3,200+",
    m2Label: "IMPRESSIONS",
    m2Val: "50,000+",
    m3Label: "PRIZE POOL",
    m3Val: "₹130,000+",
    poster: "/assets/images/poster_4_0.jpg",
  },
  "3.0": {
    year: "2023",
    pill: "STATEWIDE ARENA — 2023",
    title: "Winter Coding Contest 3.0",
    desc: "Established WCC as Telangana's premier undergraduate competitive programming arena. Introduced multi-divisional leaderboards and strict time-memory constraints.",
    m1Label: "ACTIVE PARTICIPANTS",
    m1Val: "2,100+",
    m2Label: "COLLEGES REPRESENTED",
    m2Val: "45+",
    m3Label: "PRIZE POOL",
    m3Val: "₹120,000+",
    poster: "/assets/images/poster_3_0.jpg",
  },
  "2.0": {
    year: "2022",
    pill: "VIRTUAL EXPANSION — 2022",
    title: "Winter Coding Contest 2.0",
    desc: "Transitioned from campus-only contest to a robust virtual platform during online academic semesters, building real-time automated scoring and live feedback.",
    m1Label: "CONTESTANTS",
    m1Val: "1,200+",
    m2Label: "PROBLEMS SOLVED",
    m2Val: "18,000+",
    m3Label: "PRIZE POOL",
    m3Val: "₹112,000+",
    poster: "/assets/images/poster_2_0.jpg",
  },
  "1.0": {
    year: "2021",
    pill: "THE FOUNDATION — 2021",
    title: "Winter Coding Contest 1.0",
    desc: "The inaugural flagship contest conceived by ACM VNRVJIET to cultivate high-intensity competitive programming culture and problem-solving rigor on campus.",
    m1Label: "INAUGURAL CODERS",
    m1Val: "650+",
    m2Label: "FIRST EDITION BENCHMARK",
    m2Val: "100%",
    m3Label: "PRIZE POOL",
    m3Val: "₹17,500+",
    poster: "/assets/images/poster_1_0.jpg",
  },
};

const editionsList: EditionKey[] = ["1.0", "2.0", "3.0", "4.0", "5.0", "6.0"];

export default function EditionsSection() {
  const [selectedVer, setSelectedVer] = useState<EditionKey>("6.0");
  const current = editionData[selectedVer];

  return (
    <section id="heritage" className="section bg-bg border-t-2 border-[rgba(26,25,24,0.05)]">
      <div className="wrap">
        <div className="section-head reveal" style={{ textAlign: "center" }}>
          <span className="section-badge mb-3">06 / EVOLUTION</span>
          <h2>Evolution Across 6 Flagship Editions</h2>
          <p>
            Trace how a departmental initiative scaled into a recognized national competitive standard.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="reveal w-full max-w-4xl mx-auto mb-16 relative">
          <div className="absolute top-[28px] left-0 right-0 h-0.5 bg-[rgba(26,25,24,0.1)] -z-10"></div>
          
          <div className="flex justify-between items-center overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory">
            {editionsList.map((ver) => {
              const isSelected = selectedVer === ver;
              return (
                <button
                  key={ver}
                  onClick={() => setSelectedVer(ver)}
                  className="flex flex-col items-center gap-3 snap-center min-w-[80px] group relative"
                  aria-pressed={isSelected}
                >
                  <div className={`font-mono text-xs font-bold transition-colors ${isSelected ? 'text-coral' : 'text-dim group-hover:text-ink'}`}>
                    {editionData[ver].year}
                  </div>
                  
                  <div className="relative flex items-center justify-center w-10 h-10">
                    <div className={`absolute w-3 h-3 rounded-full transition-all duration-300 ${isSelected ? 'bg-coral scale-150' : 'bg-ink scale-100 group-hover:scale-125'}`} />
                    {isSelected && (
                      <motion.div 
                        layoutId="timeline-indicator"
                        className="absolute w-8 h-8 rounded-full border-2 border-coral"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                  
                  <div className={`font-display font-bold text-sm transition-all ${isSelected ? 'text-ink scale-110' : 'text-dim scale-100'}`}>
                    WCC {ver}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Edition Content */}
        <div className="reveal max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedVer}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
            >
              <div className="lg:col-span-7 flex flex-col items-start">
                <span className="font-mono text-[10.5px] font-bold tracking-[0.12em] text-coral bg-[rgba(255,95,64,0.1)] border border-[rgba(255,95,64,0.2)] px-3 py-1.5 rounded-full mb-6 uppercase">
                  {current.pill}
                </span>
                
                <h3 className="font-display font-bold text-[36px] md:text-[44px] text-ink leading-tight mb-4 tracking-[-0.02em]">
                  {current.title}
                </h3>
                
                <p className="text-lg text-dim leading-relaxed mb-10 max-w-xl">
                  {current.desc}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full border-t border-[rgba(26,25,24,0.1)] pt-8">
                  <div>
                    <div className="font-mono text-[10px] font-bold text-[#8C8A85] tracking-[0.1em] uppercase mb-1.5">{current.m1Label}</div>
                    <div className="font-display text-[28px] font-extrabold text-ink tracking-tight">{current.m1Val}</div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] font-bold text-[#8C8A85] tracking-[0.1em] uppercase mb-1.5">{current.m2Label}</div>
                    <div className="font-display text-[28px] font-extrabold text-ink tracking-tight">{current.m2Val}</div>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <div className="font-mono text-[10px] font-bold text-[#8C8A85] tracking-[0.1em] uppercase mb-1.5">{current.m3Label}</div>
                    <div className="font-display text-[28px] font-extrabold text-ink tracking-tight">{current.m3Val}</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="flex flex-col items-center">
                  <div className="font-mono text-[10px] font-bold tracking-[0.14em] text-ink uppercase mb-3">OFFICIAL POSTER</div>
                  <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-ink shadow-[8px_8px_0px_rgba(26,25,24,0.08)] bg-white">
                    <Image
                      src={current.poster}
                      alt={`${current.title} Poster`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
