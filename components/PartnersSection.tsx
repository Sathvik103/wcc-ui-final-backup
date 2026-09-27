"use client";

import React from "react";
import Image from "next/image";

const partners = [
  { name: "Skyway Overseas", logo: "/assets/s5.png" },
  { name: "Smart Interviews", logo: "/assets/si.avif" },
  { name: "Careerx.club", logo: "/assets/sponsor2.png" },
  { name: "Global Vision Consultancy", logo: "/assets/sponsors3.png" },
  { name: "stumagz", logo: "/assets/sponsor4.jpeg" },
];

export default function PartnersSection() {
  return (
    <section id="sponsors" className="section !py-10 sm:!py-16 bg-[#fdfdfc]">
      {/* Section Head */}
      <div className="wrap section-head reveal mx-auto flex flex-col items-center justify-center text-center px-4 w-full !mb-5 sm:!mb-8">
  <span className="section-badge text-[11px] sm:text-[13px] uppercase tracking-widest font-bold">
    ECOSYSTEM
  </span>

  <h2 className="text-3xl sm:text-4xl md:text-[48px] leading-[1.1] font-display font-extrabold text-ink mt-3">
    Partners powering WCC.
  </h2>
</div>
      {/* Current Sponsors */}
<div className="w-full ">
  <div className="text-center pb-6 sm:pb-6">
    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-ink">
      Current Sponsors
    </h3>
  </div>

  <div className="flex items-center justify-center px-6 sm:px-8 !pt-2">
    {/* Current Sponsor */}
    <div className="relative w-[135px] h-[135px] sm:w-[155px] sm:h-[155px] md:w-[170px] md:h-[170px]  aspect-square shrink-0 bg-white  border-2 shadow-[2px_2px_0px_#1a1918] flex items-center justify-center p-5 sm:p-6 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#1a1918] group select-none">
      <Image
        src={partners[0].logo}
        alt={partners[0].name}
        width={110}
        height={65}
        className="object-contain max-h-[72%] max-w-[78%] transition-transform duration-300 group-hover:scale-105 pointer-events-none"
      />
    </div>
  </div>
</div>

{/* Previous Sponsors */}
<div className="w-full !mt-10 sm:mt-24">
  <div className="text-center pb-8 sm:pb-10">
    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-ink">
      Previous Sponsors
    </h3>
  </div>

  <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 px-6 sm:px-8 !pt-2 !pb-4">
    {partners.map((partner, i) => (
      <div
        key={`${partner.name}-${i}`}
        className="relative w-[135px] h-[135px] sm:w-[155px] sm:h-[155px] md:w-[170px] md:h-[170px]  aspect-square shrink-0 bg-white  border-2 shadow-[2px_2px_0px_#1a1918] flex  flex-wrap items-center justify-center p-5 sm:p-6 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#1a1918] group select-none"
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
