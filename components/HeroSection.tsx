"use client";

import React from "react";

export default function HeroSection({ introComplete = true }: { introComplete?: boolean }) {
  return (
    <section id="hero">
      <div className="hero-wash"></div>
      <div className="hero-rays"></div>
      <div className="wrap">
        <div className="eyebrow">ACM VNRVJIET PRESENTS · SIXTH FLAGSHIP EDITION</div>
        <h1 className="hero-title">
          WINTER
          <br />
          CODING<span className="accent"> </span>
          <span className="out">CONTEST</span>{" "}
          <span className="accent">6.0</span>
        </h1>
        <p className="hero-sub">
          A national algorithmic arena. Two rounds, one campus finale, and a pipeline built to find India&apos;s sharpest problem-solvers.
        </p>
        <div className="hero-cta">
          <a
            className="btn btn-solid"
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            REGISTER FOR FREE →
          </a>
          <a className="link-arrow" href="#format">
            See how it works
          </a>
        </div>
        <div className="ticker">
          <div className="tick">
            <b>₹50,000+</b>
            <span>PRIZE POOL</span>
          </div>
          <div className="tick">
            <b>1–2</b>
            <span>TEAM SIZE</span>
          </div>
          <div className="tick">
            <b>100% Free</b>
            <span>ROUND 1 ENTRY</span>
          </div>
          <div className="tick">
            <b>09–11 Oct</b>
            <span>CONTEST WINDOW</span>
          </div>
        </div>
      </div>
    </section>
  );
}
