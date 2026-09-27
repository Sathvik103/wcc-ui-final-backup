"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

function CopyPhone({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <span className="inline-flex items-center gap-2">
      <a href={`tel:${value}`} className="text-ink font-medium hover:text-coral transition-colors tracking-wide">{value}</a>
      <button onClick={handleCopy} className="text-dim hover:text-ink transition-colors p-1" title="Copy number">
        {copied ? <Check size={14} className="text-[#10b981]" /> : <Copy size={14} />}
      </button>
      {copied && <span className="text-[11px] text-[#10b981] font-bold uppercase tracking-wider">Copied</span>}
    </span>
  );
}

export default function ContactsSection() {
  return (
    <section id="contacts" className="section !py-20 sm:!py-28 bg-[#fdfdfc] border-t-2 border-ink/10">
      <div className="wrap">
        <div className="section-head reveal mx-auto flex flex-col items-center justify-center text-center px-4 w-full mb-12 sm:mb-14">
          <span className="section-badge text-[11px] sm:text-[13px] uppercase tracking-widest font-bold">CONTACTS & COORDINATORS</span>
          <h2 className="text-3xl sm:text-4xl md:text-[48px] leading-[1.1] font-display font-extrabold text-ink mt-4">
            Get in Touch
          </h2>
        </div>

        <div className="reveal max-w-[820px] w-full mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
          
          {/* FACULTY COORDINATOR */}
          <div className="border-2 border-ink/40 rounded-2xl p-6 sm:p-8 bg-white shadow-sm w-full h-full flex flex-col">
            <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-coral mb-5 pb-3 border-b-2 border-ink/10 font-mono">Faculty Coordinator</div>
            <div className="text-[20px] sm:text-[22px] font-display font-bold text-ink mb-2 leading-tight">Mr. S. Murali Mohan</div>
            <a href="mailto:muralimohan_s@vnrvjiet.in" className="text-dim hover:text-coral transition-colors font-medium text-[15px] mt-auto">
              muralimohan_s@vnrvjiet.in
            </a>
          </div>

          {/* QUERY CONTACTS */}
          <div className="border-2 border-ink/40 rounded-2xl p-6 sm:p-8 bg-white shadow-sm w-full h-full flex flex-col">
            <div className="px-4 sm:px-5 flex flex-col h-full">
              <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-coral mb-5 pb-3 border-b-2 border-ink/10 font-mono">Query Contacts</div>
              
              <div className="flex flex-col gap-6">
                <div>
                  <div className="text-[16px] sm:text-[17px] font-display font-bold text-ink mb-1">T. Murali</div>
                  <CopyPhone value="8179354592" />
                  <div className="mt-1">
                    <a href="mailto:mtejomurtula@gmail.com" className="text-dim hover:text-coral transition-colors text-[14px]">mtejomurtula@gmail.com</a>
                  </div>
                </div>
                
                <div className="pt-5 border-t border-ink/5">
                  <div className="text-[16px] sm:text-[17px] font-display font-bold text-ink mb-1">G. Shreshta</div>
                  <CopyPhone value="9618212285" />
                  <div className="mt-1">
                    <a href="mailto:shreshta.gudipati1903@gmail.com" className="text-dim hover:text-coral transition-colors text-[14px]">shreshta.gudipati1903@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
