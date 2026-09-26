"use client";

import React, { useRef, useState, useEffect } from "react";

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState({
    coders: 0,
    impressions: 0,
    institutions: 0,
    finalists: 0,
    honors: 0,
  });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let hasCounted = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
          hasCounted = true;
          const targets = {
            coders: 6000,
            impressions: 90000,
            institutions: 500,
            finalists: 150,
            honors: 50000,
          };

          const duration = 1800;
          const startTime = performance.now();

          const update = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts({
              coders: Math.floor(easeOut * targets.coders),
              impressions: Math.floor(easeOut * targets.impressions),
              institutions: Math.floor(easeOut * targets.institutions),
              finalists: Math.floor(easeOut * targets.finalists),
              honors: Math.floor(easeOut * targets.honors),
            });

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              setCounts(targets);
            }
          };

          requestAnimationFrame(update);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-[#FBF9F8] relative overflow-hidden" id="stats">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal-on-scroll">
          <span className="text-xs font-bold text-[#006398] uppercase tracking-widest">
            National Reach &amp; Legacy
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0F172A] mt-2 tracking-tight">
            The Scale of Winter Coding Contest
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2.5">
            Over six continuous editions, WCC has matured into one of the country&apos;s most fiercely competitive algorithmic arenas.
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-2 md:grid-cols-5 gap-5" id="stats-counter-section">
          {/* Metric 1 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-subtle-card text-center hover:border-orange-300 transition-colors">
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
              {counts.coders.toLocaleString("en-IN")}+
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF6D4D] mt-2">Expected Coders</div>
            <p className="text-[11px] text-slate-400 mt-1">Pan-India talent pipeline</p>
          </div>

          {/* Metric 2 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-subtle-card text-center hover:border-orange-300 transition-colors">
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
              {counts.impressions.toLocaleString("en-IN")}+
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#006398] mt-2">Impressions</div>
            <p className="text-[11px] text-slate-400 mt-1">High-density collegiate reach</p>
          </div>

          {/* Metric 3 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-subtle-card text-center hover:border-orange-300 transition-colors">
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
              {counts.institutions.toLocaleString("en-IN")}+
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mt-2">Institutions</div>
            <p className="text-[11px] text-slate-400 mt-1">IITs, NITs, BITS &amp; Universities</p>
          </div>

          {/* Metric 4 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-subtle-card text-center hover:border-orange-300 transition-colors">
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
              {counts.finalists.toLocaleString("en-IN")}+
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mt-2">Campus Finalists</div>
            <p className="text-[11px] text-slate-400 mt-1">Curated algorithmic minds</p>
          </div>

          {/* Metric 5 */}
          <div className="col-span-2 md:col-span-1 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-subtle-card text-center hover:border-orange-300 transition-colors">
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#FF6D4D] tracking-tight">
              ₹{counts.honors.toLocaleString("en-IN")}+
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mt-2">Direct Honors</div>
            <p className="text-[11px] text-slate-400 mt-1">Verified cash &amp; trophies</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
