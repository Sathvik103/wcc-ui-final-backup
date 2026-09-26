"use client";

import React from "react";
import Image from "next/image";

const photos = [
  { img: "/assets/images/arena.jpg", alt: "WCC Arena" },
  { img: "/assets/images/trophy.jpg", alt: "WCC Trophy" },
  { img: "/assets/images/team.jpg", alt: "WCC Team" },
  { img: "/assets/images/wcc_arena_photo_1790406014428.jpg", alt: "WCC Arena Alternate" },
  { img: "/assets/images/wcc_trophy_photo_1790406042341.jpg", alt: "WCC Trophy Alternate" },
  { img: "/assets/images/wcc_team_photo_1790406068703.jpg", alt: "WCC Team Alternate" },
];

export default function GallerySection() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 25}deg) rotateY(${x / 25}deg) translateY(-8px) scale(1.02)`;
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
          <span style={{ color: "var(--coral)" }}>algorithmic excellence.</span>
        </h2>
        <p>
          A visual chronicle tracing WCC’s evolution — from intense virtual qualifiers to the high-stakes campus finale at VNRVJIET.
        </p>
      </div>

      <div className="framer-gallery">
        <div className="framer-strip">
          <div className="framer-track-left">
            {/* First set */}
            {photos.map((photo, i) => (
              <div
                key={`p1-${i}`}
                className="photo-framer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src={photo.img}
                  alt={photo.alt}
                  fill
                  sizes="460px"
                  className="object-cover"
                  priority={i < 3}
                />
              </div>
            ))}
            {/* Seamless duplicate set */}
            {photos.map((photo, i) => (
              <div
                key={`p2-${i}`}
                className="photo-framer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src={photo.img}
                  alt={photo.alt}
                  fill
                  sizes="460px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
