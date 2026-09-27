"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const editionsOrder = ["6.0", "5.0", "4.0", "3.0", "2.0", "1.0"];

const editionData: Record<
  string,
  {
    pill: string;
    title: string;
    desc: string;
    poster: string;
    metrics: { label: string; val: string }[];
    links: { label: string; url: string }[];
  }
> = {
  "6.0": {
    pill: "The Next Evolution",
    title: "Winter Coding Contest 6.0",
    desc: "The sixth flagship edition. Expanding further with official proctored arena infrastructure and nationwide outreach.",
    poster: "/assets/images/poster_6_0.png",
    metrics: [
      { label: "EXPECTED CODERS", val: "6,000+" },
      { label: "INSTITUTIONS", val: "500+" },
      { label: "PRIZE POOL", val: "₹55,000" },
    ],
    links: [],
  },

  "5.0": {
    pill: "WCC 5.0",
    title: "Winter Coding Contest 5.0",
    desc: "The 5th Edition became a national phenomenon, scaling massive concurrent participation across the country and raising the standard of competitive programming.",
    poster: "/assets/WCC 5.0.png",
    metrics: [
      { label: "IMPRESSIONS", val: "80K" },
      { label: "REGISTRATIONS", val: "4.8K" },
      { label: "PARTICIPANTS", val: "4791" },
      { label: "PRIZE POOL", val: "₹50,000/-" },
    ],
    links: [
      {
        label: "Round 1",
        url: "https://www.hackerrank.com/acm-winter-coding-contest-5-0",
      },
      {
        label: "Round 2",
        url: "https://www.hackerrank.com/acm-winter-coding-contest-5-0-final-round",
      },
      {
        label: "Unstop",
        url: "https://unstop.com/hackathons/acm-vnrvjiets-winter-coding-contest-50-vallurupalli-nageswara-rao-vignana-jyothi-institute-of-engineering-t-827178",
      },
    ],
  },

  "4.0": {
    pill: "WCC 4.0",
    title: "Winter Coding Contest 4.0",
    desc: "The 4th Edition of the Winter Coding Contest saw a huge surge with over 4,500 participants across India. It also achieved significant engagement with over 60,000 impressions on Unstop, solidifying its position as a major coding event.",
    poster: "/assets/WCC 4.0 FINAL.png",
    metrics: [],
    links: [
      {
        label: "Round 1",
        url: "https://www.hackerrank.com/acms-winter-coding-contest-4-0",
      },
      {
        label: "Round 2",
        url: "https://www.hackerrank.com/acms-winter-coding-contest-4-0-final-round",
      },
      {
        label: "Unstop",
        url: "https://unstop.com/hackathons/winter-coding-contest-40-vallurupalli-nageswara-rao-vignana-jyothi-institute-of-engineering-technology-telang-1168884",
      },
    ],
  },

  "3.0": {
    pill: "WCC 3.0",
    title: "Winter Coding Contest 3.0",
    desc: "The 3rd Edition of the Winter Coding Contest was a huge success, with over 2746 participants from across the country. The standard of questions surpassed those of previous editions. Additionally, the event reached over 50,000 impressions on Unstop, further reflecting its wide-reaching impact.",
    poster: "/assets/wcc 3.0.png",
    metrics: [],
    links: [
      {
        label: "Round 1",
        url: "https://www.hackerrank.com/acm-winter-coding-contest-3",
      },
      {
        label: "Round 2",
        url: "https://www.hackerrank.com/acm-winter-coding-contest-3-0-final-round",
      },
      {
        label: "Unstop",
        url: "https://unstop.com/o/OXDU5Jt?lb=R0aLzrk",
      },
    ],
  },

  "2.0": {
    pill: "WCC 2.0",
    title: "Winter Coding Contest 2.0",
    desc: "The 2nd Edition of the Winter Coding Contest was a resounding success, drawing over 3,000 participants from across India and leaving a significant digital footprint with more than 20,000 impressions on Unstop. The event was part of a broader initiative to promote technical excellence.",
    poster: "/assets/WCC 2.0 POSTER.jpg",
    metrics: [],
    links: [
      {
        label: "Round 1",
        url: "https://www.hackerrank.com/acm-winter-coding-contest-2-0",
      },
      {
        label: "Round 2",
        url: "https://www.hackerrank.com/acm-winter-coding-contest-2-0-final-round",
      },
      {
        label: "Unstop",
        url: "https://unstop.com/p/acms-winter-coding-contest-20-vallurupalli-nageswara-rao-vignana-jyothi-institute-of-engineering-and-technology-vnrvji-491431",
      },
    ],
  },

  "1.0": {
    pill: "WCC 1.0",
    title: "Winter Coding Contest 1.0",
    desc: "The Winter Coding Contest, initially for 2nd Year students at VNRVJIET, was a highly competitive event with immense faculty support and student enthusiasm. The ACM Team was inspired to elevate the competition to new heights.",
    poster: "/assets/wc1.jpg",
    metrics: [],
    links: [
      {
        label: "Round 1",
        url: "https://www.hackerrank.com/winter-coding-contest",
      },
    ],
  },
};

export default function EditionsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? editionsOrder.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev === editionsOrder.length - 1 ? 0 : prev + 1
    );
  };

  const currentVer = editionsOrder[currentIndex];
  const current = editionData[currentVer];

  return (
    <section
      id="heritage"
      className="section !py-20 sm:!py-24 overflow-hidden bg-bg"
    >
      <div className="wrap !px-4 sm:!px-7">

        {/* SECTION HEADER */}
        <div className="section-head reveal mx-auto flex flex-col items-center justify-center text-center px-4 w-full mb-12 sm:mb-16">
          <span className="section-badge text-[11px] sm:text-[13px] uppercase tracking-widest font-bold">
            HERITAGE OF EXCELLENCE
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-[48px] leading-[1.1] font-display font-extrabold text-center w-full break-words sm:break-normal text-ink mt-4 mb-5">
            Evolution Across 6 Flagship Editions
          </h2>

          <p className="text-[16px] sm:text-[18px] text-dim text-center max-w-[600px] mx-auto w-full leading-relaxed">
            Click across editions to trace how a departmental initiative scaled
            into a recognized national competitive standard.
          </p>
        </div>

        {/* EDITION SWITCHER */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 !mt-16 sm:!mt-20 lg:!mt-28 !mb-12 sm:!mb-14 lg:!mb-16 reveal">
          <button
            onClick={goPrev}
            className="w-10 h-10 sm:w-11 sm:h-11 border-2 border-ink rounded-lg bg-white shadow-[2px_2px_0px_var(--ink)] hover:bg-[#f5f3ee] hover:text-coral active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center justify-center font-bold text-lg sm:text-xl text-ink cursor-pointer shrink-0"
            aria-label="Previous edition"
          >
            ←
          </button>

          <div className="font-display font-extrabold text-2xl sm:text-3xl text-ink w-[140px] sm:w-[170px] text-center tracking-tight select-none">
            WCC {currentVer}
          </div>

          <button
            onClick={goNext}
            className="w-10 h-10 sm:w-11 sm:h-11 border-2 border-ink rounded-lg bg-white shadow-[2px_2px_0px_var(--ink)] hover:bg-[#f5f3ee] hover:text-coral active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center justify-center font-bold text-lg sm:text-xl text-ink cursor-pointer shrink-0"
            aria-label="Next edition"
          >
            →
          </button>
        </div>

        {/* DYNAMIC EDITION CARD */}
        <div className="reveal relative max-w-[1060px] mx-auto !mt-4 sm:!mt-6 bg-white border-2 border-ink shadow-[8px_8px_0px_var(--ink)] rounded-2xl !p-6 sm:!p-8 md:!p-10 lg:!p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentVer}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) 380px",
                gap: "48px",
                alignItems: "center",
              }}
              className="edition-grid-inner"
            >

              {/* CONTENT COLUMN */}
              <div className="edition-content-col flex flex-col justify-start gap-6 lg:gap-8">

                {/* EDITION LABEL */}
                <span  className="text-[13px] sm:text-[14px] lg:text-[15px] font-bold tracking-[0.14em] text-coral uppercase inline-block text-left">
                  {current.pill}
                </span>

                {/* TITLE */}
                <h3 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[42px] font-display font-extrabold text-ink leading-[1.12] text-left">
                  {current.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-[15px] sm:text-[16px] lg:text-[18px] font-medium text-dim leading-[1.8] text-left sm:text-justify">
                  {current.desc}
                </p>

                {/* METRICS */}
                {current.metrics && current.metrics.length > 0 && (
                 <div className="grid grid-cols-2 gap-y-7 lg:gap-y-10 gap-x-6 sm:gap-x-10">
                    {current.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-[10px] sm:text-[11px] lg:text-[12px] font-bold tracking-widest text-dim uppercase mb-1 lg:mb-2">
                          {m.label}
                        </div>

                        <div className="text-lg sm:text-[22px] lg:text-[26px] font-display font-bold text-ink">
                          {m.val}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* LINKS */}
                {current.links.length > 0 && (
                  <div className="pt-5 lg:pt-7 border-t border-ink/10 flex flex-row justify-between gap-4 sm:gap-5 whitespace-nowrap items-center overflow-x-auto hide-scrollbar w-full">
                    {current.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[12px] sm:text-[13px] lg:text-[14px] text-ink hover:text-coral transition-colors flex items-center gap-1.5 uppercase tracking-widest shrink-0"
                      >
                        {link.label}
                        <span className="text-[13px] sm:text-[14px]">
                          ↗
                        </span>
                      </a>
                    ))}
                  </div>
                )}

              </div>

              {/* POSTER COLUMN */}
              <div className="edition-poster-col flex flex-col items-center justify-center w-full max-w-[340px] sm:max-w-[380px] mx-auto">
                <div
                  className="relative bg-[#fbfaf9] w-full overflow-hidden rounded-xl"
                  style={{
                    aspectRatio:
                      currentVer === "1.0" ? "1 / 1" : "4 / 5",
                  }}
                >
                  <Image
                    src={current.poster}
                    alt={`${current.title} Poster`}
                    fill
                    sizes="(max-width: 768px) 320px, 380px"
                    className="object-contain !p-2.5 sm:!p-3"
                    priority
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