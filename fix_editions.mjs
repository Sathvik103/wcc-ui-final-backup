import fs from 'fs';

const c = `"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type EditionKey = "6.0" | "5.0" | "4.0" | "3.0" | "2.0" | "1.0";

const editionsOrder: EditionKey[] = ["6.0", "5.0", "4.0", "3.0", "2.0", "1.0"];

interface EditionLink {
  label: string;
  url: string;
}

interface EditionInfo {
  pill: string;
  title: string;
  desc: string;
  poster: string;
  links: EditionLink[];
}

const editionData: Record<EditionKey, EditionInfo> = {
  "6.0": {
    pill: "THE NEXT EVOLUTION",
    title: "Winter Coding Contest 6.0",
    desc: "The sixth flagship edition. Expanding further with official proctored arena infrastructure and nationwide outreach.",
    poster: "/assets/images/poster_6_0.png",
    links: []
  },
  "5.0": {
    pill: "WCC 5.0",
    title: "Winter Coding Contest 5.0",
    desc: "The 5th Edition of the Winter Coding Contest, powered by Blue Cloud Softech Solutions Ltd. is here! This event is all about showcasing talent in coding and encouraging other like-minded people to participate and uplift their spirits to code better.",
    poster: "/assets/WCC 5.0(2).png",
    links: []
  },
  "4.0": {
    pill: "WCC 4.0",
    title: "Winter Coding Contest 4.0",
    desc: "The 4th Edition of the Winter Coding Contest was another remarkable event, showcasing the talent and dedication of participants. With an even larger pool of contestants and a diverse range of problems, the competition pushed boundaries and set new standards.",
    poster: "/assets/WCC 4.0 FINAL.png",
    links: [
      { label: "Round-1", url: "https://www.hackerrank.com/acms-winter-coding-contest-4-0" },
      { label: "Round-2", url: "https://www.hackerrank.com/acms-winter-coding-contest-4-0-final-round" },
      { label: "Unstop", url: "https://unstop.com/hackathons/winter-coding-contest-40-vallurupalli-nageswara-rao-vignana-jyothi-institute-of-engineering-technology-telang-1168884" }
    ]
  },
  "3.0": {
    pill: "WCC 3.0",
    title: "Winter Coding Contest 3.0",
    desc: "The 3rd Edition of the Winter Coding Contest was a huge success, with over 2746 participants from across the country. The standard of questions surpassed those of previous editions. Additionally, the event reached over 50,000 impressions on Unstop, further reflecting its wide-reaching impact.",
    poster: "/assets/wcc 3.0.png",
    links: [
      { label: "Round-1", url: "https://www.hackerrank.com/acm-winter-coding-contest-3" },
      { label: "Round-2", url: "https://www.hackerrank.com/acm-winter-coding-contest-3-0-final-round" },
      { label: "Unstop", url: "https://unstop.com/o/OXDU5Jt?lb=R0aLzrk" }
    ]
  },
  "2.0": {
    pill: "WCC 2.0",
    title: "Winter Coding Contest 2.0",
    desc: "The 2nd Edition of the Winter Coding Contest was a resounding success, drawing over 3,000 participants from across India and leaving a significant digital footprint with more than 20,000 impressions on Unstop. The event was part of a broader initiative to promote technical excellence.",
    poster: "/assets/WCC 2.0 POSTER.jpg",
    links: [
      { label: "Round-1", url: "https://www.hackerrank.com/acm-winter-coding-contest-2-0" },
      { label: "Round-2", url: "https://www.hackerrank.com/acm-winter-coding-contest-2-0-final-round" },
      { label: "Unstop", url: "https://unstop.com/p/acms-winter-coding-contest-20-vallurupalli-nageswara-rao-vignana-jyothi-institute-of-engineering-and-technology-vnrvji-491431" }
    ]
  },
  "1.0": {
    pill: "WCC 1.0",
    title: "Winter Coding Contest 1.0",
    desc: "The Winter Coding Contest, initially for 2nd Year students at VNRVJIET, was a highly competitive event with immense faculty support and student enthusiasm. The ACM Team was inspired to elevate the competition to new heights.",
    poster: "/assets/wc1_fitted.jpg",
    links: [
      { label: "Round-1", url: "https://www.hackerrank.com/winter-coding-contest" }
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
    <section id="heritage" className="section !py-12 sm:!py-16 overflow-hidden">
      <div className="wrap !px-4 sm:!px-7">
        <div className="section-head reveal mx-auto flex flex-col items-center justify-center text-center px-4 w-full mb-8">
          <span className="section-badge text-xs sm:text-[13px]">HERITAGE OF EXCELLENCE</span>
          <h2 className="text-2xl sm:text-4xl md:text-[42px] leading-tight text-center w-full break-words sm:break-normal">
            Evolution Across 6 Flagship Editions
          </h2>
          <p className="text-sm sm:text-base px-2 text-center max-w-[500px] mx-auto mt-4 w-full">
            Click across editions to trace how a departmental initiative scaled into a recognized national competitive standard.
          </p>
        </div>

        {/* Inline Edition Switcher */}
        <div className="flex justify-center items-center gap-6 mb-10 reveal">
          <button onClick={goPrev} className="p-2 text-ink hover:text-coral transition-colors font-bold text-xl" aria-label="Previous edition">
            ←
          </button>
          <div className="font-display font-bold text-xl text-ink w-[120px] text-center">
            WCC {currentVer}
          </div>
          <button onClick={goNext} className="p-2 text-ink hover:text-coral transition-colors font-bold text-xl" aria-label="Next edition">
            →
          </button>
        </div>

        {/* Dynamic Edition Card */}
        <div className="heritage-card reveal !p-6 sm:!p-10 min-h-[400px] relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentVer}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col sm:flex-row gap-8 sm:gap-12 w-full"
            >
              <div className="heritage-left flex-1 flex flex-col">
                <span className="heritage-pill text-[10px] sm:text-[10.5px] self-start mb-4">{current.pill}</span>
                <h3 className="text-2xl sm:text-3xl md:text-[34px] mb-4">{current.title}</h3>
                <p className="text-sm sm:text-[15px] leading-relaxed mb-6">{current.desc}</p>

                {current.links.length > 0 && (
                  <div className="mt-auto pt-4 border-t border-ink/10 flex flex-wrap gap-4 sm:gap-6">
                    {current.links.map(link => (
                      <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="font-bold text-sm text-ink hover:text-coral transition-colors flex items-center gap-1 uppercase tracking-wide">
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="heritage-right w-full sm:w-[320px] shrink-0 mt-6 sm:mt-0 flex flex-col items-center justify-center">
                <div className="heritage-right-title text-center w-full">OFFICIAL EDITION POSTER</div>
                <div className="heritage-poster-frame relative bg-[#f7f6f3] flex items-center justify-center border-2 border-ink border-opacity-10 w-full aspect-[4/5] mx-auto overflow-hidden rounded-xl">
                  <Image
                    src={current.poster}
                    alt={\`\${current.title} Poster\`}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-contain p-2"
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

fs.writeFileSync('components/EditionsSection.tsx', c, 'utf8');
console.log('EditionsSection created!');
