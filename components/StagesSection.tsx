"use client";

import React, { useEffect, useRef } from "react";

export default function StagesSection() {
  const mapSectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const mapSection = mapSectionRef.current;
    const pathEl = pathRef.current;
    const dotEl = dotRef.current;
    if (!mapSection || !pathEl) return;

    let pathLen = 0;
    try {
      pathLen = pathEl.getTotalLength();
      pathEl.style.strokeDasharray = `${pathLen}`;
      pathEl.style.strokeDashoffset = `${pathLen}`;
    } catch {
      pathLen = 2500;
    }

    const nodeCards = mapSection.querySelectorAll(".map-node-card");

    const updateMap = () => {
      if (!mapSection || pathLen === 0) return;

      const mapRect = mapSection.getBoundingClientRect();
      const viewH = window.innerHeight;
      const triggerY = viewH * 0.5;

      const scrolledIn = triggerY - mapRect.top;
      const totalDist = mapSection.offsetHeight;
      const progress = Math.max(0, Math.min(1, scrolledIn / totalDist));

      const revealLen = progress * pathLen;
      pathEl.style.strokeDashoffset = `${pathLen - revealLen}`;

      if (dotEl) {
        if (progress > 0.005) {
          dotEl.setAttribute("opacity", "1");
          try {
            const pt = pathEl.getPointAtLength(Math.min(revealLen, pathLen - 1));
            dotEl.setAttribute("cx", `${pt.x}`);
            dotEl.setAttribute("cy", `${pt.y}`);
          } catch {}
        } else {
          dotEl.setAttribute("opacity", "0");
        }
      }

      nodeCards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.top + cardRect.height / 2;
        if (cardCenter <= triggerY + 60 || progress >= (index + 1) * 0.22) {
          card.classList.add("node-revealed");
        }
      });
    };

    requestAnimationFrame(updateMap);
    window.addEventListener("scroll", updateMap, { passive: true });
    window.addEventListener("resize", updateMap, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateMap);
      window.removeEventListener("resize", updateMap);
    };
  }, []);

  return (
    <section id="format" className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-badge">CONTEST ARCHITECTURE</span>
          <h2>How WCC 6.0 works.</h2>
          <p>A four-stage pipeline testing algorithmic reasoning end to end.</p>
        </div>

        <div className="curved-map-container" id="contestMap" ref={mapSectionRef}>
          <svg className="curved-map-svg" viewBox="0 0 960 950" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="mapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--coral)" />
                <stop offset="100%" stopColor="#ff855f" />
              </linearGradient>
            </defs>

            {/* Ghost path */}
            <path
              id="map-path-ghost"
              d="M 220 90
                 C 220 215, 740 215, 740 340
                 C 740 465, 220 465, 220 590
                 C 220 715, 740 715, 740 840"
              stroke="rgba(26,25,24,0.14)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="7 5"
              fill="none"
            />

            {/* Animated reveal path */}
            <path
              ref={pathRef}
              id="map-path"
              d="M 220 90
                 C 220 215, 740 215, 740 340
                 C 740 465, 220 465, 220 590
                 C 220 715, 740 715, 740 840"
              stroke="var(--coral)"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
              style={{ strokeDasharray: 2500, strokeDashoffset: 2500 }}
            />

            {/* Tip dot */}
            <circle
              ref={dotRef}
              id="map-dot"
              cx="220"
              cy="90"
              r="6"
              fill="#fff"
              stroke="var(--coral)"
              strokeWidth="2.5"
              opacity="0"
            />

            {/* Static anchor circles */}
            <circle cx="220" cy="90" r="5" fill="var(--coral)" opacity="0.3" />
            <circle cx="740" cy="340" r="5" fill="var(--coral)" opacity="0.3" />
            <circle cx="220" cy="590" r="5" fill="var(--coral)" opacity="0.3" />
            <circle cx="740" cy="840" r="5" fill="var(--coral)" opacity="0.3" />
          </svg>

          <div className="curved-node-grid">
            {/* STAGE 01 */}
            <div className="curved-node node-left">
              <div className="map-node-card" data-map-node="0">
                <div className="curved-card">
                  <span className="map-step-badge">01</span>
                  <div className="curved-pin">
                    <span className="dot"></span>01 Â· NATIONAL REGISTRATION
                  </div>
                  <h3>National Registration</h3>
                  <p>Register solo or in duos on Unstop. Round 1 is completely free for every student in India.</p>
                  <div className="curved-date">ELIGIBILITY Â· ALL UG &amp; PG STUDENTS Â· UNTIL 24 SEPT</div>
                  <div>
                    <a className="map-link-btn" href="https://unstop.com" target="_blank" rel="noopener noreferrer">
                      REGISTER ON UNSTOP â†’
                    </a>
                  </div>
                </div>
                <div className="card-mask"></div>
              </div>
            </div>

            {/* STAGE 02 */}
            <div className="curved-node node-right">
              <div className="map-node-card" data-map-node="1">
                <div className="curved-card">
                  <span className="map-step-badge">02</span>
                  <div className="curved-pin">
                    <span className="dot"></span>02 Â· VIRTUAL ARENA
                  </div>
                  <h3>Round 1 â€” Virtual Arena</h3>
                  <p>Proctored on HackerEarth, 9:00 AMâ€“4:40 PM. Data Structures, DP, Math and Graph problems.</p>
                  <div className="curved-date">MODE Â· FULLY ONLINE Â· 09 OCT 2026</div>
                  <div>
                    <a className="map-link-btn" href="https://HackerEarth.com" target="_blank" rel="noopener noreferrer">
                      HackerEarth PORTAL â†’
                    </a>
                  </div>
                </div>
                <div className="card-mask"></div>
              </div>
            </div>

            {/* STAGE 03 */}
            <div className="curved-node node-left">
              <div className="map-node-card" data-map-node="2">
                <div className="curved-card">
                  <span className="map-step-badge">03</span>
                  <div className="curved-pin">
                    <span className="dot"></span>03 Â· AUDIT &amp; SHORTLISTING
                  </div>
                  <h3>Audit &amp; Shortlisting</h3>
                  <p>Automated plagiarism and similarity audits. Top 150+ coders receive campus invitations.</p>
                  <div className="curved-date">MERIT RANKLIST PUBLISHED Â· 10 OCT 2026</div>
                </div>
                <div className="card-mask"></div>
              </div>
            </div>

            {/* STAGE 04 */}
            <div className="curved-node node-right">
              <div className="map-node-card" data-map-node="3">
                <div className="curved-card">
                  <span className="map-step-badge">04</span>
                  <div className="curved-pin">
                    <span className="dot"></span>04 Â· CAMPUS FINALE
                  </div>
                  <h3>Round 2 â€” Campus Finale</h3>
                  <p>In-person battle at VNRVJIET&apos;s HPC labs, followed by the valedictory awards ceremony.</p>
                  <div className="curved-date">LOCATION Â· VNRVJIET, HYDERABAD Â· 11 OCT 2026</div>
                  <div>
                    <a
                      className="map-link-btn"
                      href="https://maps.google.com/?q=VNRVJIET+Hyderabad"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VNRVJIET CAMPUS MAP â†’
                    </a>
                  </div>
                </div>
                <div className="card-mask"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
