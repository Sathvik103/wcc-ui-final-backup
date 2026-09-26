"use client";

import React from "react";
import Image from "next/image";

const partners = [
  { name: "Careerx.club", logo: "/assets/sponsor1.png", role: "Career Partner" },
  { name: "Smart Interviews", logo: "/assets/si.avif", role: "Knowledge Partner" },
  { name: "GVC", logo: "/assets/sponsor2.png", role: "Ecosystem Partner" },
  { name: "stumagzAr", logo: "/assets/sponsors3.png", role: "Media Partner" },
  { name: "Blue Cloud Softech", logo: "/assets/sponsor4.jpeg", role: "Technology Partner" },
  { name: "Skyway Overseas", logo: "/assets/s5.png", role: "Education Partner" },
];

export default function PartnersSection() {
  return (
    <section id="sponsors" className="section bg-bg border-t border-[rgba(26,25,24,0.05)] pt-20 pb-24">
      <div className="wrap section-head reveal" style={{ textAlign: "center" }}>
        <span className="section-badge mb-3">06 / SPONSORS</span>
        <h2>Partners powering WCC.</h2>
        <p className="mx-auto mt-4 max-w-xl text-dim">
          Backed by industry leaders and ecosystem enablers committed to fostering technical talent.
        </p>
      </div>
      
      <div className="wrap reveal">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {partners.map((partner, i) => (
            <div 
              key={i} 
              className="relative group border border-[rgba(26,25,24,0.1)] rounded-xl bg-white aspect-[3/2] flex flex-col items-center justify-center p-6 hover:border-coral transition-colors duration-300 overflow-hidden"
            >
              {/* Logo container */}
              <div className="relative w-full h-full flex items-center justify-center transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-4 group-hover:scale-95">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={80}
                  className="object-contain max-h-full max-w-full opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              
              {/* Reveal text on hover */}
              <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 transform translate-y-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-y-0">
                <h4 className="font-display font-bold text-sm text-ink">{partner.name}</h4>
                <span className="font-mono text-[9px] font-bold text-coral tracking-widest uppercase">{partner.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
