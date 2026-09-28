"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroSection({
  introComplete = true,
}: {
  introComplete?: boolean;
}) {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col !justify-center overflow-hidden !pt-20 pb-16"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introComplete ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="hero-wash"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introComplete ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="hero-rays"
      />

      <div className="wrap relative z-10 flex w-full flex-col justify-center pt-4">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 24 }}
          animate={
            introComplete
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 24 }
          }
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="eyebrow">
            ACM VNRVJIET PRESENTS
          </div>

          <h1 className="hero-title w-full font-extrabold uppercase">
            <span className="block">WINTER</span>

            <span className="hero-title-second-line block">
              CODING <span className="out">CONTEST</span>{" "}
              <span className="accent">6.0</span>
            </span>
          </h1>

          <p className="hero-sub max-w-[680px]">
            A national algorithmic arena. Two rounds, one campus finale, and a
            pipeline built to find India&apos;s sharpest problem-solvers.
          </p>

          <div className="hero-cta">
            <a
              className="btn btn-solid"
              href="https://unstop.com/o/xkq9yFv?lb=Vr9VXAuO&utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Acmcha18131"
              target="_blank"
              rel="noopener noreferrer"
            >
              REGISTER FOR FREE{" "}
              <span aria-hidden="true">→</span>
            </a>

            <a className="link-arrow" href="#format">
              See how it works
            </a>
          </div>

          <div className="ticker">
            <div className="tick">
              <b>₹55,000</b>
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
              <b>13 Oct</b>
              <span>Round 1</span>
            </div>

            <div className="tick">
              <b>22 Oct</b>
              <span>Round 2</span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
