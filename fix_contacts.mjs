import fs from 'fs';

const c = `"use client";

import React, { useState } from "react";

function CopyContact({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-1 items-center sm:items-start group">
      <div className="font-bold text-lg text-ink">{label}</div>
      <div className="flex items-center gap-3">
        <a href={\`tel:\${value}\`} className="text-dim font-medium hover:text-coral transition-colors">{value}</a>
        <button 
          onClick={handleCopy}
          className="text-[10px] uppercase font-bold tracking-widest bg-ink/5 hover:bg-ink/10 text-ink px-2 py-1 rounded transition-colors"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}

export default function ContactsSection() {
  return (
    <section id="contacts" className="section !py-20 sm:!py-28 bg-[#fdfdfc] border-t-2 border-ink/10">
      <div className="wrap">
        <div className="section-head reveal mx-auto flex flex-col items-center justify-center text-center px-4 w-full mb-16">
          <span className="section-badge text-[11px] sm:text-[13px] uppercase tracking-widest font-bold">CONTACTS & COORDINATORS</span>
          <h2 className="text-3xl sm:text-4xl md:text-[48px] leading-[1.1] font-display font-extrabold text-ink mt-4">
            Get in Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 max-w-5xl mx-auto px-4 reveal">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left border-l-0 sm:border-l-4 sm:border-coral sm:pl-8 py-2">
            <h3 className="font-display font-extrabold text-2xl mb-8 tracking-wide uppercase text-ink">Faculty Coordinator</h3>
            <div className="flex flex-col gap-2">
              <div className="text-xl font-bold text-ink">Mr. S. Murali Mohan</div>
              <a href="mailto:muralimohan_s@vnrvjiet.in" className="text-coral hover:text-ink transition-colors font-medium">muralimohan_s@vnrvjiet.in</a>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left border-l-0 sm:border-l-4 sm:border-ink/20 sm:pl-8 py-2">
            <h3 className="font-display font-extrabold text-2xl mb-8 tracking-wide uppercase text-ink">Query Contacts</h3>
            
            <div className="flex flex-col gap-10 w-full">
              <div className="flex flex-col gap-3">
                <CopyContact label="T. Murali" value="8179354592" />
                <a href="mailto:mtejomurtula@gmail.com" className="text-coral hover:text-ink transition-colors font-medium text-[15px]">mtejomurtula@gmail.com</a>
              </div>
              
              <div className="flex flex-col gap-3">
                <CopyContact label="G. Shreshta" value="9618212285" />
                <a href="mailto:shreshta.gudipati1903@gmail.com" className="text-coral hover:text-ink transition-colors font-medium text-[15px]">shreshta.gudipati1903@gmail.com</a>
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
console.log('ContactsSection updated!');
