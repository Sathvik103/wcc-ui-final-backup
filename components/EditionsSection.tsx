"use client";

import React, { useState } from "react";
import Image from "next/image";

type EditionKey = "6.0" | "5.0" | "4.0" | "3.0" | "2.0" | "1.0";

interface EditionInfo {
  pill: string;
  title: string;
  desc: string;
  m1Label: string;
  m1Val: string;
  m2Label: string;
  m2Val: string;
  m3Label: string;
  m3Val: string;
  poster: string;
}

const editionData: Record<EditionKey, EditionInfo> = {
  "6.0": {
    pill: "THE NEXT EVOLUTION • 2026",
    title: "Winter Coding Contest 6.0",
    desc: "The sixth flagship edition. Expanding further with official HackerRank proctored arena infrastructure and nationwide outreach on Unstop.",
    m1Label: "EXPECTED CODERS",
    m1Val: "6,000+",
    m2Label: "INSTITUTIONS",
    m2Val: "500+",
    m3Label: "PRIZE POOL",
    m3Val: "₹150,000+",
    poster: "/assets/images/poster_6_0.png",
  },
  "5.0": {
    pill: "NATIONAL STANDING • 2025",
    title: "Winter Coding Contest 5.0",
    desc: "Scaled participation nationwide across 120+ premier technical institutions. Integrated dual-layer automated evaluation, real-time leaderboards, and offline finale hackathons.",
    m1Label: "PARTICIPATING CODERS",
    m1Val: "4,800+",
    m2Label: "TOTAL SUBMISSIONS",
    m2Val: "75,000+",
    m3Label: "PRIZE POOL",
    m3Val: "₹40,000+",
    poster: "/assets/images/poster_5_0.jpg",
  },
  "4.0": {
    pill: "HYBRID MILESTONE • 2024",
    title: "Winter Coding Contest 4.0",
    desc: "Pioneered hybrid competition format uniting virtual qualifiers with live, high-pressure campus speed-coding finals. Expanded participation beyond Telangana.",
    m1Label: "REGISTERED TEAMS",
    m1Val: "3,200+",
    m2Label: "IMPRESSIONS",
    m2Val: "50,000+",
    m3Label: "PRIZE POOL",
    m3Val: "₹30,000+",
    poster: "/assets/images/poster_4_0.jpg",
  },
  "3.0": {
    pill: "STATEWIDE ARENA • 2023",
    title: "Winter Coding Contest 3.0",
    desc: "Established WCC as Telangana's premier undergraduate competitive programming arena. Introduced multi-divisional leaderboards and strict time-memory constraints.",
    m1Label: "ACTIVE PARTICIPANTS",
    m1Val: "2,100+",
    m2Label: "COLLEGES REPRESENTED",
    m2Val: "45+",
    m3Label: "PRIZE POOL",
    m3Val: "₹20,000+",
    poster: "/assets/images/poster_3_0.jpg",
  },
  "2.0": {
    pill: "VIRTUAL EXPANSION • 2022",
    title: "Winter Coding Contest 2.0",
    desc: "Transitioned from campus-only contest to a robust virtual platform during online academic semesters, building real-time automated scoring and live feedback.",
    m1Label: "CONTESTANTS",
    m1Val: "1,200+",
    m2Label: "PROBLEMS SOLVED",
    m2Val: "18,000+",
    m3Label: "PRIZE POOL",
    m3Val: "₹12,000+",
    poster: "/assets/images/poster_2_0.jpg",
  },
  "1.0": {
    pill: "THE FOUNDATION • 2021",
    title: "Winter Coding Contest 1.0",
    desc: "The inaugural flagship contest conceived by ACM VNRVJIET to cultivate high-intensity competitive programming culture and problem-solving rigor on campus.",
    m1Label: "INAUGURAL CODERS",
    m1Val: "650+",
    m2Label: "FIRST EDITION BENCHMARK",
    m2Val: "100%",
    m3Label: "PRIZE POOL",
    m3Val: "₹7,500+",
    poster: "/assets/images/poster_1_0.jpg",
  },
};

export default function EditionsSection() {
  const [selectedVer, setSelectedVer] = useState<EditionKey>("6.0");
  const current = editionData[selectedVer];

  return (
    <section id="heritage" className="section">
      <div className="wrap">
        <div className="section-head reveal" style={{ textAlign: "center" }}>
          <span className="section-badge">HERITAGE OF EXCELLENCE</span>
          <h2 style={{ whiteSpace: "nowrap" }}>Evolution Across 6 Flagship Editions</h2>
          <p>
            Click across editions to trace how a departmental initiative scaled into a recognized national competitive standard.
          </p>
        </div>

        {/* Edition Tabs */}
        <div className="heritage-tabs reveal">
          <div className="heritage-tabs-row">
            {(["6.0", "5.0", "4.0"] as EditionKey[]).map((ver) => (
              <button
                key={ver}
                type="button"
                className={`heritage-tab ${selectedVer === ver ? "active" : ""}`}
                onClick={() => setSelectedVer(ver)}
              >
                WCC {ver} ({ver === "6.0" ? "2026" : ver === "5.0" ? "2025" : "2024"})
              </button>
            ))}
          </div>
          <div className="heritage-tabs-row">
            {(["3.0", "2.0", "1.0"] as EditionKey[]).map((ver) => (
              <button
                key={ver}
                type="button"
                className={`heritage-tab ${selectedVer === ver ? "active" : ""}`}
                onClick={() => setSelectedVer(ver)}
              >
                WCC {ver} ({ver === "3.0" ? "2023" : ver === "2.0" ? "2022" : "2021"})
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Edition Card */}
        <div className="heritage-card reveal">
          <div className="heritage-left">
            <span className="heritage-pill">{current.pill}</span>
            <h3>{current.title}</h3>
            <p>{current.desc}</p>

            <div className="heritage-metrics">
              <div>
                <div className="heritage-metric-label">{current.m1Label}</div>
                <div className="heritage-metric-val">{current.m1Val}</div>
              </div>
              <div>
                <div className="heritage-metric-label">{current.m2Label}</div>
                <div className="heritage-metric-val">{current.m2Val}</div>
              </div>
              <div>
                <div className="heritage-metric-label">{current.m3Label}</div>
                <div className="heritage-metric-val">{current.m3Val}</div>
              </div>
            </div>
          </div>

          <div className="heritage-right">
            <div className="heritage-right-title">OFFICIAL EDITION POSTER</div>
            <div className="heritage-poster-frame relative">
              <Image
                key={current.poster}
                src={current.poster}
                alt={`${current.title} Poster`}
                width={290}
                height={362}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
