"use client";

import React from "react";

export default function PrizesSection() {
  return (
    <section id="prizes" className="section bg-bg border-t-2 border-[rgba(26,25,24,0.05)] pt-20 pb-24">
      <div className="wrap">
        <div className="section-head reveal" style={{ textAlign: "center" }}>
          <span className="section-badge mb-3">06 / PRIZES</span>
          <h2>Honors &amp; Awards</h2>
          <p className="mx-auto mt-4 max-w-xl text-dim">
            The national podium. Verified cash rewards, exclusive ACM accolades, and recognition for the top algorithmic minds.
          </p>
        </div>

        {/* Podium Layout */}
        <div className="flex flex-col md:flex-row justify-center items-end gap-6 mt-16 max-w-5xl mx-auto reveal mb-8">
          
          {/* 1st Runner Up */}
          <div className="w-full md:w-[28%] border-2 border-ink bg-white flex flex-col justify-end p-6 md:p-8 min-h-[220px] shadow-[6px_6px_0px_rgba(26,25,24,0.08)] order-2 md:order-1 relative">
            <div className="absolute top-0 right-0 w-full h-1 bg-[rgba(26,25,24,0.1)]" />
            <div className="font-mono text-[10px] font-bold text-dim tracking-[0.15em] uppercase mb-1">RANK 02</div>
            <h3 className="font-display font-extrabold text-2xl text-ink leading-tight mb-4">
              FIRST<br />RUNNER-UP
            </h3>
            <div className="font-display text-[32px] font-black text-ink tracking-tight mt-auto">
              ₹15,000<span className="text-coral">+</span>
            </div>
          </div>

          {/* Winner */}
          <div className="w-full md:w-[36%] border-2 border-ink bg-ink flex flex-col justify-end p-8 md:p-10 min-h-[300px] shadow-[8px_8px_0px_var(--coral)] order-1 md:order-2 relative z-10 -mx-2 md:mx-0">
            <div className="absolute top-0 right-0 w-full h-1 bg-coral" />
            <div className="font-mono text-[11px] font-bold text-[rgba(245,243,238,0.7)] tracking-[0.15em] uppercase mb-2">RANK 01</div>
            <h3 className="font-display font-extrabold text-[40px] text-bg leading-[0.95] tracking-tight mb-8">
              CHAMPION<br />TEAM
            </h3>
            <div className="font-display text-[48px] font-black text-coral tracking-tight mt-auto">
              ₹25,000<span className="text-bg opacity-50">+</span>
            </div>
          </div>

          {/* 2nd Runner Up */}
          <div className="w-full md:w-[28%] border-2 border-ink bg-white flex flex-col justify-end p-6 md:p-8 min-h-[190px] shadow-[6px_6px_0px_rgba(26,25,24,0.08)] order-3 relative">
            <div className="absolute top-0 right-0 w-full h-1 bg-[rgba(26,25,24,0.1)]" />
            <div className="font-mono text-[10px] font-bold text-dim tracking-[0.15em] uppercase mb-1">RANK 03</div>
            <h3 className="font-display font-extrabold text-2xl text-ink leading-tight mb-4">
              SECOND<br />RUNNER-UP
            </h3>
            <div className="font-display text-[28px] font-black text-ink tracking-tight mt-auto">
              ₹10,000<span className="text-coral">+</span>
            </div>
          </div>

        </div>

        {/* Consolation / Special Merit */}
        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto reveal mt-12 pt-10 border-t border-[rgba(26,25,24,0.1)]">
          <div className="flex-1 border border-ink bg-transparent p-6 rounded-lg flex items-center justify-between">
            <div>
              <div className="font-mono text-[10px] font-bold text-coral tracking-widest uppercase mb-1">SPECIAL MERIT</div>
              <h4 className="font-display font-bold text-lg text-ink">RANK 04</h4>
            </div>
            <div className="text-right">
              <div className="text-sm text-dim font-medium">Cash Reward</div>
              <div className="text-xs text-dim opacity-70">Certificate & Accolades</div>
            </div>
          </div>
          <div className="flex-1 border border-ink bg-transparent p-6 rounded-lg flex items-center justify-between">
            <div>
              <div className="font-mono text-[10px] font-bold text-coral tracking-widest uppercase mb-1">SPECIAL MERIT</div>
              <h4 className="font-display font-bold text-lg text-ink">RANK 05</h4>
            </div>
            <div className="text-right">
              <div className="text-sm text-dim font-medium">Cash Reward</div>
              <div className="text-xs text-dim opacity-70">Certificate & Accolades</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
