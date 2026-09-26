"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-bg border-t-[3px] border-ink pt-20 pb-10">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          <div className="md:col-span-5">
            <a href="https://vnrvjiet.acm.org" target="_blank" rel="noopener noreferrer" className="inline-block mb-6">
              <Image
                src="/assets/images/acm_logo.png"
                alt="ACM VNRVJIET Logo"
                width={64}
                height={64}
                className="h-[64px] w-[64px] object-contain block drop-shadow-md transition-transform hover:scale-105"
              />
            </a>
            <h4 className="font-mono text-xs font-bold text-coral tracking-widest uppercase mb-3">ACM VNRVJIET</h4>
            <p className="text-sm text-dim leading-relaxed font-medium mb-3 max-w-sm">
              Student Chapter, Dept. of Information Technology — VNR Vignana Jyothi Institute of Engineering and Technology. NAAC A++, AICTE recognized.
            </p>
            <p className="text-sm text-dim leading-relaxed font-medium max-w-sm">
              Bachupally, Nizampet (S.O), Hyderabad, Telangana 500090
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-[11px] font-bold text-coral tracking-widest uppercase mb-5">NAVIGATE</h4>
            <div className="flex flex-col gap-3 text-sm font-medium">
              <a href="#scale" className="text-dim hover:text-coral transition-colors w-fit">Overview</a>
              <a href="#heritage" className="text-dim hover:text-coral transition-colors w-fit">Evolution</a>
              <a href="#format" className="text-dim hover:text-coral transition-colors w-fit">How It Works</a>
              <a href="#archive" className="text-dim hover:text-coral transition-colors w-fit">Archive</a>
              <a href="#prizes" className="text-dim hover:text-coral transition-colors w-fit">Prizes</a>
              <a href="#sponsors" className="text-dim hover:text-coral transition-colors w-fit">Sponsors</a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-[11px] font-bold text-coral tracking-widest uppercase mb-5">CHANNELS</h4>
            <div className="flex flex-col gap-3 text-sm font-medium">
              <a href="https://github.com/acmvnrvjiet" target="_blank" rel="noopener noreferrer" className="text-dim hover:text-coral transition-colors w-fit">
                GitHub
              </a>
              <a href="https://linkedin.com/company/acm-vnrvjiet" target="_blank" rel="noopener noreferrer" className="text-dim hover:text-coral transition-colors w-fit">
                LinkedIn
              </a>
              <a href="https://vnrvjiet.acm.org" target="_blank" rel="noopener noreferrer" className="text-dim hover:text-coral transition-colors w-fit">
                Portal
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-[11px] font-bold text-coral tracking-widest uppercase mb-5">CONTACT</h4>
            <div className="text-sm text-dim font-medium mb-1 uppercase tracking-wider">Faculty Coordinator</div>
            <div className="text-base text-ink font-bold mb-1">Mr. Murali Mohan Samineni</div>
            <a href="mailto:muralimohan_s@vnrvjiet.in" className="text-sm font-mono text-coral hover:text-ink transition-colors underline underline-offset-4">muralimohan_s@vnrvjiet.in</a>
            
            <a
              className="mt-8 inline-block btn btn-solid px-6 py-3 bg-ink text-bg font-bold font-display text-[13px] border-2 border-ink shadow-[4px_4px_0px_var(--coral)] hover:shadow-[6px_6px_0px_var(--coral)] hover:-translate-y-0.5 transition-all uppercase tracking-wide"
              href="https://unstop.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              REGISTER FOR ROUND 1
            </a>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-[rgba(26,25,24,0.1)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-dim">
          <span>© 2026 ACM VNRVJIET Student Chapter.</span>
          <span>WCC is an official flagship property of ACM VNRVJIET.</span>
        </div>
      </div>
    </footer>
  );
}
