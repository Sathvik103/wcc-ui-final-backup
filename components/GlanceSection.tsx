"use client";

import React from "react";

export function GlanceSection() {
  return (
    <section className="py-12 bg-white border-y border-slate-200/80" id="glance">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-[#FF6D4D] tracking-widest uppercase">Executive Summary</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#0F172A] mt-1">Event at a Glance</h2>
          </div>
          <p className="text-slate-500 text-sm mt-2 md:mt-0 font-medium">
            Essential facts and qualification framework
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {/* 01 Stages */}
          <div className="py-4 md:py-0 md:px-6 first:pl-0">
            <span className="font-mono text-xs font-bold text-[#FF6D4D]">01 / STAGES</span>
            <h3 className="font-display font-bold text-[#0F172A] text-lg mt-1 mb-1.5">2 Rigorous Rounds</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Online HackerRank Qualifier leading into an in-person campus grand finale marathon at VNRVJIET.
            </p>
          </div>

          {/* 02 Squad */}
          <div className="py-4 md:py-0 md:px-6">
            <span className="font-mono text-xs font-bold text-[#FF6D4D]">02 / SQUAD</span>
            <h3 className="font-display font-bold text-[#0F172A] text-lg mt-1 mb-1.5">1 – 2 Coders / Team</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Open to all undergraduate and postgraduate engineering and technology scholars nationwide.
            </p>
          </div>

          {/* 03 Stakes */}
          <div className="py-4 md:py-0 md:px-6">
            <span className="font-mono text-xs font-bold text-[#FF6D4D]">03 / STAKES</span>
            <h3 className="font-display font-bold text-[#0F172A] text-lg mt-1 mb-1.5">₹50,000+ Honors</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Direct cash pool, official ACM trophies, accredited certificates, and industry recognition.
            </p>
          </div>

          {/* 04 Access */}
          <div className="py-4 md:py-0 md:px-6">
            <span className="font-mono text-xs font-bold text-[#FF6D4D]">04 / ACCESS</span>
            <h3 className="font-display font-bold text-[#0F172A] text-lg mt-1 mb-1.5">100% Free Entry</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Democratizing algorithmic arena access with zero financial threshold for Round 1 nationwide.
            </p>
          </div>

          {/* 05 Deadline */}
          <div className="py-4 md:py-0 md:px-6 last:pr-0">
            <span className="font-mono text-xs font-bold text-[#FF6D4D]">05 / DEADLINE</span>
            <h3 className="font-display font-bold text-[#0F172A] text-lg mt-1 mb-1.5">24 Sept, 2026</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Portal lock on Unstop platform. Early registrations receive official preparation toolkits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlanceSection;
