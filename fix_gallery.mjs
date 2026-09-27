import fs from 'fs';

const c = `"use client";

import React from "react";
import Image from "next/image";

const photos = [
  { img: "/assets/gall1.jpg", alt: "Inauguration of WCC", caption: "Inauguration Ceremony" },
  { img: "/assets/gall6.jpg", alt: "WCC Participants Focus", caption: "Testing Their Expertise" },
  { img: "/assets/pic4.jpg", alt: "WCC Event Stage", caption: "Round 2 Arena" },
  { img: "/assets/pic6.jpg", alt: "WCC Audience Atmosphere", caption: "Participants from Top Colleges" },
  { img: "/assets/gall10.jpg", alt: "WCC Teams Collaborating", caption: "Brainstorming Solutions" },
  { img: "/assets/pic8.jpg", alt: "WCC Organizers and Leaders", caption: "Awarding Ceremony" },
];

export default function GallerySection() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = \`perspective(1000px) rotateX(\${-y / 25}deg) rotateY(\${x / 25}deg) translateY(-8px) scale(1.02)\`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <section id="archive" className="section">
      <div className="wrap section-head reveal">
        <span className="section-badge">ARCHIVES</span>
        <h2>
          Six editions of
          <br />
          <span style={{ color: "var(--coral)" }}>Winter Coding Contest.</span>
        </h2>
        <p>
          A visual chronicle tracing the contest's evolution from intense virtual qualifiers to the high-stakes campus finale at VNRVJIET.
        </p>
      </div>

      <div className="framer-gallery overflow-hidden w-full max-w-[1440px] mx-auto py-8">
        <div className="flex flex-wrap justify-center gap-6 px-4">
            {photos.map((photo, i) => (
              <div
                key={\`p1-\${i}\`}
                className="relative overflow-hidden rounded-xl border-2 border-ink shadow-[4px_4px_0px_var(--ink)] bg-white w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] aspect-[4/3] group transition-transform duration-300"
              >
                <Image
                  src={photo.img}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 460px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={i < 2}
                />
                
                {/* Subtle Hover Caption */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-white/80 backdrop-blur-md border border-white/50 text-ink text-[11px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full shadow-sm inline-block">
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
console.log('GallerySection created!');
