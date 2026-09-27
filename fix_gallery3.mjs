import fs from 'fs';

const c = `"use client";

import React from "react";
import Image from "next/image";

const photos = [
  { img: "/assets/gall1.jpg", alt: "Inauguration of WCC", caption: "Inauguration Ceremony" },
  { img: "/assets/gall6.jpg", alt: "WCC Participants Focus", caption: "Testing Their Expertise" },
  { img: "/assets/pic4.jpg", alt: "WCC Event Stage", caption: "Round 2 Arena" },
  { img: "/assets/pic6.jpg", alt: "WCC Audience Atmosphere", caption: "Top College Coders" },
  { img: "/assets/gall10.jpg", alt: "WCC Teams Collaborating", caption: "Brainstorming Solutions" },
  { img: "/assets/pic8.jpg", alt: "WCC Organizers and Leaders", caption: "Awarding Ceremony" },
];

export default function GallerySection() {
  return (
    <section id="archive" className="section !py-20 sm:!py-28 bg-[#fdfdfc] overflow-hidden">
      <div className="wrap section-head reveal mx-auto flex flex-col items-center justify-center text-center px-4 w-full mb-16">
        <span className="section-badge text-[11px] sm:text-[13px] uppercase tracking-widest font-bold">ARCHIVES</span>
        <h2 className="text-3xl sm:text-4xl md:text-[48px] leading-[1.1] font-display font-extrabold text-ink mt-4 mb-5">
          Six editions of
          <br />
          <span className="text-coral">Winter Coding Contest.</span>
        </h2>
        <p className="text-[16px] sm:text-[18px] text-dim text-center max-w-[600px] mx-auto w-full leading-relaxed">
          A visual chronicle tracing the contest's evolution from intense virtual qualifiers to the high-stakes campus finale at VNRVJIET.
        </p>
      </div>

      <div className="w-full relative py-8 group">
        <div className="flex w-[max-content] animate-marquee whitespace-nowrap hover:pause">
          {/* First set */}
          {photos.map((photo, i) => (
            <div
              key={"p1-" + i}
              className="relative overflow-hidden rounded-xl border-2 border-ink shadow-[4px_4px_0px_var(--ink)] bg-white w-[280px] sm:w-[380px] md:w-[440px] aspect-[4/3] shrink-0 mx-3 sm:mx-5 inline-block group/card transition-transform duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_var(--ink)] cursor-grab active:cursor-grabbing"
            >
              <Image
                src={photo.img}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 280px, 440px"
                className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                priority={i < 3}
                loading={i < 3 ? "eager" : "lazy"}
              />
              
              <div className="absolute bottom-3 left-0 w-full flex justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-white/90 backdrop-blur-sm border border-ink/20 text-ink text-[11px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-md">
                  {photo.caption}
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {photos.map((photo, i) => (
            <div
              key={"p2-" + i}
              className="relative overflow-hidden rounded-xl border-2 border-ink shadow-[4px_4px_0px_var(--ink)] bg-white w-[280px] sm:w-[380px] md:w-[440px] aspect-[4/3] shrink-0 mx-3 sm:mx-5 inline-block group/card transition-transform duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_var(--ink)] cursor-grab active:cursor-grabbing"
            >
              <Image
                src={photo.img}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 280px, 440px"
                className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                loading="lazy"
              />
              
              <div className="absolute bottom-3 left-0 w-full flex justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-white/90 backdrop-blur-sm border border-ink/20 text-ink text-[11px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-md">
                  {photo.caption}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('components/GallerySection.tsx', c, 'utf8');

// I also need to add the animate-marquee to Tailwind/globals.css
let css = fs.readFileSync('app/globals.css', 'utf8');
if (!css.includes('@keyframes marquee')) {
  css += '\n@keyframes marquee {\n  0% { transform: translateX(0%); }\n  100% { transform: translateX(-50%); }\n}\n.animate-marquee {\n  animation: marquee 40s linear infinite;\n}\n.hover\\:pause:hover {\n  animation-play-state: paused;\n}\n';
  fs.writeFileSync('app/globals.css', css, 'utf8');
}

console.log('GallerySection rewritten for Marquee!');
