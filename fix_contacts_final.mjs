import fs from 'fs';

const c = `"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

function CopyContact({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-1 items-start w-full">
      <div className="font-bold text-[16px] sm:text-[17px] text-ink">{label}</div>
      <div className="flex flex-row items-center justify-between w-full border border-ink/10 rounded-lg p-2 sm:p-2.5 bg-white shadow-sm gap-4">
        <a href={\`tel:\${value}\`} className="text-dim font-medium hover:text-coral transition-colors tracking-wide ml-1 text-[14px] sm:text-[15px]">
          {value}
        </a>
        <button 
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest bg-[#f7f6f3] hover:bg-ink/5 text-ink px-2.5 py-1.5 rounded transition-colors border border-ink/5 shrink-0"
        >
          {copied ? <><Check size={12} className="text-[#10b981]" /> COPIED!</> : <><Copy size={12} /> COPY</>}
        </button>
      </div>
    </div>
  );
}

export default function ContactsSection() {
  return (
    <section id="contacts" className="section !py-20 sm:!py-28 bg-[#fdfdfc] border-t-2 border-ink/10">
      <div className="wrap">
        <div className="section-head reveal mx-auto flex flex-col items-center justify-center text-center px-4 w-full mb-12 sm:mb-16">
          <span className="section-badge text-[11px] sm:text-[13px] uppercase tracking-widest font-bold">CONTACTS & COORDINATORS</span>
          <h2 className="text-3xl sm:text-4xl md:text-[48px] leading-[1.1] font-display font-extrabold text-ink mt-4">
            Get in Touch
          </h2>
        </div>

        {/* Changed items-stretch to items-start so cards size to their own content naturally */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-[800px] mx-auto px-4 reveal">
          
          {/* FACULTY CARD */}
          <div className="w-full md:w-[360px] bg-white border border-ink/15 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 sm:p-8 flex flex-col">
            <h3 className="font-display font-extrabold text-[12px] sm:text-[13px] text-coral mb-6 tracking-[0.15em] uppercase border-b border-ink/10 pb-3">
              Faculty Coordinator
            </h3>
            
            <div className="flex flex-col gap-2 mt-1">
              <div className="text-xl sm:text-2xl font-bold text-ink mb-1">Mr. S. Murali Mohan</div>
              <a href="mailto:muralimohan_s@vnrvjiet.in" className="inline-flex text-dim hover:text-coral transition-colors font-medium text-[14px] sm:text-[15px]">
                muralimohan_s@vnrvjiet.in
              </a>
            </div>
          </div>

          {/* QUERY CONTACTS CARD */}
          <div className="w-full md:w-[380px] bg-white border border-ink/15 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 sm:p-8 flex flex-col">
            <h3 className="font-display font-extrabold text-[12px] sm:text-[13px] text-coral mb-6 tracking-[0.15em] uppercase border-b border-ink/10 pb-3">
              Query Contacts
            </h3>
            
            <div className="flex flex-col gap-6 w-full mt-1">
              <div className="flex flex-col gap-2.5 w-full">
                <CopyContact label="T. Murali" value="8179354592" />
                <a href="mailto:mtejomurtula@gmail.com" className="text-dim hover:text-coral transition-colors font-medium text-[13px] sm:text-[14px] ml-1">
                  mtejomurtula@gmail.com
                </a>
              </div>
              
              <div className="flex flex-col gap-2.5 w-full">
                <CopyContact label="G. Shreshta" value="9618212285" />
                <a href="mailto:shreshta.gudipati1903@gmail.com" className="text-dim hover:text-coral transition-colors font-medium text-[13px] sm:text-[14px] ml-1">
                  shreshta.gudipati1903@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('components/ContactsSection.tsx', c, 'utf8');
console.log('ContactsSection rewritten completely!');
