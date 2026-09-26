"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <Image
              src="/acm-vnrvjiet-logo.png"
              alt="ACM VNRVJIET Logo"
              width={54}
              height={54}
              className="h-[54px] w-[54px] object-contain mb-[14px] block drop-shadow-sm"
            />
            <h4 className="mono">ACM VNRVJIET</h4>
            <p>
              Student Chapter, Dept. of Information Technology — VNR Vignana Jyothi Institute of Engineering and Technology. NAAC A++, AICTE recognized.
            </p>
            <p>Bachupally, Nizampet (S.O), Hyderabad, Telangana 500090</p>
          </div>

          <div>
            <h4 className="mono">NAVIGATE</h4>
            <a href="#hero">Overview</a>
            <a href="#heritage">Editions</a>
            <a href="#format">Contest Journey</a>
            <a href="#archive">Photo Archives</a>
            <a href="#sponsors">Partners</a>
          </div>

          <div>
            <h4 className="mono">CONTACT</h4>
            <div style={{ marginBottom: "16px" }}>
              <span style={{ display: "block", color: "var(--coral)", fontSize: "0.85em", fontWeight: 700, marginBottom: "4px" }}>FACULTY COORDINATOR</span>
              <span style={{ display: "block", fontWeight: 600 }}>Mr. Murali Mohan Samineni</span>
              <a href="mailto:muralimohan_s@vnrvjiet.in" style={{ display: "block", marginTop: "2px", opacity: 0.8 }}>muralimohan_s@vnrvjiet.in</a>
            </div>
            
            <h4 className="mono" style={{ marginTop: "24px" }}>CHANNELS</h4>
            <a href="https://github.com/acmvnrvjiet" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/company/acm-vnrvjiet" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://vnrvjiet.acm.org" target="_blank" rel="noopener noreferrer">
              Portal
            </a>
          </div>
        </div>

        <div className="fbottom">
          <span>© 2026 ACM VNRVJIET Student Chapter.</span>
          <span>WCC is an official flagship property of ACM VNRVJIET.</span>
        </div>
      </div>
    </footer>
  );
}
