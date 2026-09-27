"use client";

import React from "react";
import Image from "next/image";

const partners = [
  { name: "Skyway Overseas", logo: "/assets/s5.png" },
  { name: "Smart Interviews", logo: "/assets/si.avif" },
  { name: "Careerx.club", logo: "/assets/sponsor1.png" },
  { name: "Global Vision Consultancy", logo: "/assets/sponsor2.png" },
  { name: "stumagz", logo: "/assets/sponsors3.png" },
];

export default function PartnersSection() {
  return (
    <section id="sponsors" className="section !py-16 sm:!py-24 bg-[#fdfdfc]">
      {/* Section Head */}
      <div className="wrap section-head reveal mx-auto flex flex-col items-center justify-center text-center px-4 w-full mb-10 sm:mb-12">
        <span className="section-badge text-[11px] sm:text-[13px] uppercase tracking-widest font-bold">
          ECOSYSTEM
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-[48px] leading-[1.1] font-display font-extrabold text-ink mt-3">
          Partners powering WCC.
        </h2>
      </div>

      {/* Horizontal White Band with Top/Bottom Borders */}
      <div className="w-full relative border-t-2 border-b-2 border-ink bg-white py-8 sm:py-12 overflow-hidden">
        {/* Centered Circular Cards Row */}
        <div className="flex items-center justify-start md:justify-center gap-6 sm:gap-8 md:gap-10 overflow-x-auto hide-scrollbar px-6 sm:px-8 py-4">
          {partners.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="relative w-[135px] h-[135px] sm:w-[155px] sm:h-[155px] md:w-[170px] md:h-[170px] rounded-full aspect-square shrink-0 bg-white border-2 border-ink shadow-[5px_5px_0px_#1a1918] flex items-center justify-center p-5 sm:p-6 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#1a1918] cursor-pointer group select-none"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={110}
                  height={65}
                  className="object-contain max-h-[72%] max-w-[78%] transition-transform duration-300 group-hover:scale-105 pointer-events-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
