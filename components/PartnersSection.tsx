"use client";

import React from "react";

const partners = [
  "Skyway Overseas",
  "Careerx.club",
  "GVC",
  "stumagz®",
  "Smart Interviews",
  "Blue Cloud Softech",
];

export default function PartnersSection() {
  return (
    <section id="sponsors" className="section" style={{ paddingTop: "60px" }}>
      <div className="wrap section-head reveal">
        <span className="section-badge">ECOSYSTEM</span>
        <h2>Partners powering WCC.</h2>
      </div>
      <div className="marquee">
        <div className="marquee-track" id="mtrack">
          {partners.map((partner, i) => (
            <span key={`p1-${i}`} className="spons">
              {partner}
            </span>
          ))}
          {partners.map((partner, i) => (
            <span key={`p2-${i}`} className="spons">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
