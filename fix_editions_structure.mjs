import fs from 'fs';

const code = `"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const editionsOrder = ["6.0", "5.0", "4.0", "3.0", "2.0", "1.0"];

const editionData: Record<string, {
  pill: string;
  title: string;
  desc: string;
  poster: string;
  metrics: { label: string; val: string }[];
  links: { label: string; url: string }[];
}> = {
  "6.0": {
    pill: "The Next Evolution",
    title: "Winter Coding Contest 6.0",
    desc: "The sixth flagship edition. Expanding further with official proctored arena infrastructure and nationwide outreach.",
    poster: "/assets/images/poster_6_0.png",
    metrics: [
      { label: "EXPECTED CODERS", val: "6,000+" },
      { label: "INSTITUTIONS", val: "500+" },
      { label: "PRIZE POOL", val: "₹50,000+" },
    ],
    links: []
  },
  "5.0": {
    pill: "WCC 5.0",
    title: "Winter Coding Contest 5.0",
    desc: "The 5th Edition became a national phenomenon, scaling massive concurrent participation across the country and raising the standard of competitive programming.",
    poster: "/assets/WCC 5.0 POSTER.png",
    metrics: [
      { label: "IMPRESSIONS", val: "80K" },
      { label: "REGISTRATIONS", val: "4.8K" },
      { label: "PARTICIPANTS", val: "4791" },
      { label: "PRIZE POOL", val: "₹50,000/-" }
    ],
    links: [
      { label: "Round 1", url: "https://www.hackerrank.com/acm-winter-coding-contest-5-0" },
      { label: "Round 2", url: "https://www.hackerrank.com/acm-winter-coding-contest-5-0-final-round" },
      { label: "Unstop", url: "https://unstop.com/hackathons/acm-vnrvjiets-winter-coding-contest-50-vallurupalli-nageswara-rao-vignana-jyothi-institute-of-engineering-t-827178" }
    ]
  },
  "4.0": {
    pill: "WCC 4.0",
    title: "Winter Coding Contest 4.0",
    desc: "The 4th Edition of the Winter Coding Contest saw a huge surge with over 4,500 participants across India. It also achieved significant engagement with over 60,000 impressions on Unstop, solidifying its position as a major coding event.",
    poster: "/assets/WCC 4.0 FINAL.png",
    metrics: [],
    links: [
      { label: "Round 1", url: "https://www.hackerrank.com/acms-winter-coding-contest-4-0" },
      { label: "Round 2", url: "https://www.hackerrank.com/acms-winter-coding-contest-4-0-final-round" },
      { label: "Unstop", url: "https://unstop.com/hackathons/winter-coding-contest-40-vallurupalli-nageswara-rao-vignana-jyothi-institute-of-engineering-technology-telang-1168884" }
    ]
  },
  "3.0": {
    pill: "WCC 3.0",
    title: "Winter Coding Contest 3.0",
    desc: "The 3rd Edition of the Winter Coding Contest was a huge success, with over 2746 participants from across the country. The standard of questions surpassed those of previous editions. Additionally, the event reached over 50,000 impressions on Unstop, further reflecting its wide-reaching impact.",
    poster: "/assets/wcc 3.0.png",
    metrics: [],
    links: [
      { label: "Round 1", url: "https://www.hackerrank.com/acm-winter-coding-contest-3" },
      { label: "Round 2", url: "https://www.hackerrank.com/acm-winter-coding-contest-3-0-final-round" },
      { label: "Unstop", url: "https://unstop.com/o/OXDU5Jt?lb=R0aLzrk" }
    ]
  },
  "2.0": {
    pill: "WCC 2.0",
    title: "Winter Coding Contest 2.0",
    desc: "The 2nd Edition of the Winter Coding Contest was a resounding success, drawing over 3,000 participants from across India and leaving a significant digital footprint with more than 20,000 impressions on Unstop. The event was part of a broader initiative to promote technical excellence.",
    poster: "/assets/WCC 2.0 POSTER.jpg",
    metrics: [],
    links: [
      { label: "Round 1", url: "https://www.hackerrank.com/acm-winter-coding-contest-2-0" },
      { label: "Round 2", url: "https://www.hackerrank.com/acm-winter-coding-contest-2-0-final-round" },
      { label: "Unstop", url: "https://unstop.com/p/acms-winter-coding-contest-20-vallurupalli-nageswara-rao-vignana-jyothi-institute-of-engineering-and-technology-vnrvji-491431" }
    ]
  },
  "1.0": {
    pill: "WCC 1.0",
    title: "Winter Coding Contest 1.0",
    desc: "The Winter Coding Contest, initially for 2nd Year students at VNRVJIET, was a highly competitive event with immense faculty support and student enthusiasm. The ACM Team was inspired to elevate the competition to new heights.",
    poster: "/assets/wc1.jpg",
    metrics: [],
    links: [
      { label: "Round 1", url: "https://www.hackerrank.com/winter-coding-contest" }
    ]
  },
};

export default function EditionsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? editionsOrder.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === editionsOrder.length - 1 ? 0 : prev + 1));
  };

  const currentVer = editionsOrder[currentIndex];
  const current = editionData[currentVer];

  return (
    <section id="heritage" className="section !py-20 sm:!py-24 overflow-hidden bg-bg">
      <div className="wrap !px-4 sm:!px-7">
        <div className="section-head reveal mx-auto flex flex-col items-center justify-center text-center px-4 w-full mb-12 sm:mb-16">
          <span className="section-badge text-[11px] sm:text-[13px] uppercase tracking-widest font-bold">HERITAGE OF EXCELLENCE</span>
          <h2 className="text-3xl sm:text-4xl md:text-[48px] leading-[1.1] font-display font-extrabold text-center w-full break-words sm:break-normal text-ink mt-4 mb-5">
            Evolution Across 6 Flagship Editions
          </h2>
          <p className="text-[16px] sm:text-[18px] text-dim text-center max-w-[600px] mx-auto w-full leading-relaxed">
            Click across editions to trace how a departmental initiative scaled into a recognized national competitive standard.
          </p>
        </div>

        {/* Inline Edition Switcher */}
        <div className="flex justify-center items-center gap-8 mb-8 sm:mb-10 reveal">
          <button onClick={goPrev} className="p-3 text-dim hover:text-coral transition-colors font-bold text-2xl flex items-center justify-center rounded-full hover:bg-black/5" aria-label="Previous edition">
            ←
          </button>
          <div className="font-display font-extrabold text-2xl sm:text-3xl text-ink w-[160px] text-center tracking-tight">
            WCC {currentVer}
          </div>
          <button onClick={goNext} className="p-3 text-dim hover:text-coral transition-colors font-bold text-2xl flex items-center justify-center rounded-full hover:bg-black/5" aria-label="Next edition">
            →
          </button>
        </div>

        {/* Dynamic Edition Card */}
        <div className="heritage-card reveal !p-8 sm:!p-10 relative max-w-[1000px] mx-auto border-2 border-ink shadow-[8px_8px_0px_var(--ink)] bg-white rounded-2xl h-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentVer}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full items-start"
            >
              
              {/* LEFT COLUMN - TEXT & METRICS */}
              <div className="flex flex-col justify-start w-full">
                <span className="text-[11px] font-bold tracking-widest text-coral uppercase mb-4 inline-block">{current.pill}</span>
                <h3 className="text-3xl sm:text-[38px] font-display font-extrabold text-ink mb-5 leading-[1.1]">{current.title}</h3>
                <p className="text-[16px] sm:text-[17px] text-dim leading-[1.7] mb-8">{current.desc}</p>

                {current.metrics && current.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-y-6 gap-x-6 mb-8 w-full max-w-[400px]">
                    {current.metrics.map(m => (
                      <div key={m.label}>
                        <div className="text-[10px] sm:text-[11px] font-bold tracking-widest text-dim uppercase mb-1">{m.label}</div>
                        <div className="text-xl sm:text-[22px] font-display font-bold text-ink">{m.val}</div>
                      </div>
                    ))}
                  </div>
                )}

                {current.links.length > 0 && (
                  <div className="mt-auto pt-6 border-t border-ink/10 flex flex-row gap-4 sm:gap-5 whitespace-nowrap items-center overflow-x-auto hide-scrollbar w-full">
                    {current.links.map(link => (
                      <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="font-bold text-[13px] text-ink hover:text-coral transition-colors flex items-center gap-1.5 uppercase tracking-widest shrink-0">
                        {link.label} <span className="text-[14px]">↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* RIGHT COLUMN - POSTER */}
              <div className="flex flex-col items-center justify-start w-full pt-0 md:pt-4">
                <div className="relative bg-[#fbfaf9] border-2 border-ink shadow-[4px_4px_0px_rgba(0,0,0,0.1)] w-full max-w-[400px] aspect-[4/5] mx-auto overflow-hidden rounded-xl">
                  <Image
                    src={current.poster}
                    alt={\`\${current.title} Poster\`}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-contain p-4"
                  />
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('components/EditionsSection.tsx', code, 'utf8');
console.log('EditionsSection structurally rewritten!');
