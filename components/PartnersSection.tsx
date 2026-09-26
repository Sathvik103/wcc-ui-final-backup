"use client";

import React from "react";
import Image from "next/image";

const partners = [
  { name: "Careerx.club", logo: "/assets/sponsor1.png" },
  { name: "Smart Interviews", logo: "/assets/si.avif" },
  { name: "GVC", logo: "/assets/sponsor2.png" },
  { name: "stumagzAr", logo: "/assets/sponsors3.png" },
  { name: "Blue Cloud Softech", logo: "/assets/sponsor4.jpeg" },
  { name: "Skyway Overseas", logo: "/assets/s5.png" },
];

export default function PartnersSection() {
  return (
    <section id="sponsors" className="section" style={{ paddingTop: "60px" }}>
      <div className="wrap section-head reveal">
        <span className="section-badge">ECOSYSTEM</span>
        <h2>Partners powering WCC.</h2>
      </div>
      <div className="marquee" style={{ overflow: "hidden" }}>
        <div className="marquee-track static flex flex-wrap justify-center gap-8 px-4" id="mtrack" style={{ width: "100%", animation: "none" }}>
          {partners.map((partner, i) => (
            <div key={`p1-${i}`} className="spons" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Image 
                src={partner.logo} 
                alt={partner.name} 
                width={120} 
                height={60} 
                className="object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
