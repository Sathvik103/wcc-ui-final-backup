"use client";

import React from "react";

export default function PrizesSection() {
  return (
    <section id="prizes" className="section" style={{ marginTop: "-50px" }}>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="prizes-header-badge">PRIZES</span>
          <h2>Recognitions &amp; rewards.</h2>
          <p>A prize pool of ₹55,000 awarded to top national algorithmic problem-solvers.</p>
        </div>

        {/* PODIUM: silver(left) | gold(center) | bronze(right) */}
        <div className="prizes-stage reveal">
          {/* 1ST PLACE (CENTER on desktop, 1st on mobile) */}
          <div className="prize-card-wrap card-gold ">
            <div className="prize-card">
              <div className="prize-card-top">
                <div className="prize-icon-wrap">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16 6H32V26C32 31.523 28.418 35 24 35C19.582 35 16 31.523 16 26V6Z"
                      fill="#fde68a"
                      stroke="#c9960a"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path d="M16 10H10C10 10 8 20 16 22" stroke="#c9960a" strokeWidth="2" strokeLinecap="round" />
                    <path d="M32 10H38C38 10 40 20 32 22" stroke="#c9960a" strokeWidth="2" strokeLinecap="round" />
                    <rect x="20" y="35" width="8" height="4" fill="#c9960a" rx="1" />
                    <rect x="15" y="39" width="18" height="3" fill="#c9960a" rx="1.5" />
                    <circle cx="24" cy="20" r="4" fill="#c9960a" opacity="0.35" />
                    <path
                      d="M22 20 L23.2 22.4 L26 22.8 L24 24.7 L24.4 27.5 L22 26.2 L19.6 27.5 L20 24.7 L18 22.8 L20.8 22.4Z"
                      fill="#c9960a"
                    />
                  </svg>
                </div>
              </div>
              <div className="prize-card-bottom">
                <div className="prize-rank-tag">WINNERS</div>
                <div className="prize-title">
                  FIRST
                  <br />
                  PRIZE
                </div>
                <div className="prize-amount">₹20,000</div>
              </div>
            </div>
            <div className="prize-sublabel">WINNERS</div>
          </div>

          {/* 2ND PLACE (LEFT on desktop, 2nd on mobile) */}
          <div className="prize-card-wrap card-silver ">
            <div className="prize-card">
              <div className="prize-card-top">
                <div className="prize-icon-wrap">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="28" r="14" stroke="#7a7a8a" strokeWidth="2.5" />
                    <circle cx="24" cy="28" r="10" fill="#e8e8ee" stroke="#7a7a8a" strokeWidth="1.5" />
                    <text
                      x="24"
                      y="33"
                      textAnchor="middle"
                      fontFamily="Space Grotesk, sans-serif"
                      fontWeight="700"
                      fontSize="12"
                      fill="#4a4a5a"
                    >
                      2
                    </text>
                    <path
                      d="M17 16 L13 6 L20 10 L24 4 L28 10 L35 6 L31 16"
                      stroke="#7a7a8a"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      fill="#d0d0dc"
                    />
                  </svg>
                </div>
              </div>
              <div className="prize-card-bottom">
                <div className="prize-rank-tag">1ST RUNNERS UP</div>
                <div className="prize-title">
                  SECOND
                  <br />
                  PRIZE
                </div>
                <div className="prize-amount">₹15,000</div>
              </div>
            </div>
            <div className="prize-sublabel">1ST RUNNERS UP</div>
          </div>

          {/* 3RD PLACE (RIGHT on desktop, 3rd on mobile) */}
          <div className="prize-card-wrap card-bronze ">
            <div className="prize-card">
              <div className="prize-card-top">
                <div className="prize-icon-wrap">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="28" r="14" stroke="#c96a3a" strokeWidth="2.5" />
                    <circle cx="24" cy="28" r="10" fill="#ffe5d4" stroke="#c96a3a" strokeWidth="1.5" />
                    <text
                      x="24"
                      y="33"
                      textAnchor="middle"
                      fontFamily="Space Grotesk, sans-serif"
                      fontWeight="700"
                      fontSize="12"
                      fill="#a0502a"
                    >
                      3
                    </text>
                    <path
                      d="M17 16 L13 6 L20 10 L24 4 L28 10 L35 6 L31 16"
                      stroke="#c96a3a"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      fill="#ffd4bc"
                    />
                  </svg>
                </div>
              </div>
              <div className="prize-card-bottom">
                <div className="prize-rank-tag">2ND RUNNERS UP</div>
                <div className="prize-title">
                  THIRD
                  <br />
                  PRIZE
                </div>
                <div className="prize-amount">₹10,000</div>
              </div>
            </div>
            <div className="prize-sublabel">2ND RUNNERS UP</div>
          </div>
        </div>

        {/* CONSOLATION PRIZES ROW */}
        <div className="consolation-row reveal">
          <div className="consolation-card">
            <div className="consolation-icon">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 3L19.8 12.2L30 13.1L22.6 19.6L24.9 29.7L16 24.5L7.1 29.7L9.4 19.6L2 13.1L12.2 12.2Z"
                  stroke="var(--ink)"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  fill="#ffffff"
                />
              </svg>
            </div>
            <div className="consolation-body">
              <div className="consolation-tag">★ SPECIAL MERIT · RANK 4</div>
              <h4>₹6,000</h4>
              <p>Cash reward, Certificate of Merit &amp; official ACM accolades.</p>
            </div>
          </div>

          <div className="consolation-card">
            <div className="consolation-icon">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 3L19.8 12.2L30 13.1L22.6 19.6L24.9 29.7L16 24.5L7.1 29.7L9.4 19.6L2 13.1L12.2 12.2Z"
                  stroke="var(--ink)"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  fill="#ffffff"
                />
              </svg>
            </div>
            <div className="consolation-body">
              <div className="consolation-tag">★ SPECIAL MERIT · RANK 5</div>
              <h4>₹4,000</h4>
              <p>Cash reward, Certificate of Merit &amp; official ACM accolades.</p>
            </div>
          </div>
        </div>

        {/* GOODIES BOX 
        <div className="goodies-box reveal">
          <div className="goodies-text">
            <h4>ANYTHING ELSE?</h4>
            <p>
              Absolutely! All selected campus finalists receive exclusive WCC developer goodies — T-Shirts, stickers, swag kits &amp; Certificates of Merit.
            </p>
          </div>
          <div className="goodies-badge">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ display: "inline", verticalAlign: "middle", marginRight: "5px" }}
            >
              <polyline points="20 12 20 22 4 22 4 12" />
              <rect x="2" y="7" width="20" height="5" />
              <line x1="12" y1="22" x2="12" y2="7" />
              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
            </svg>
            GOODIES &amp; SWAG KITS
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
