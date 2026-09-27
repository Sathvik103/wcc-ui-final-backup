import fs from 'fs';

function replaceFile(path, replacements) {
  let content = fs.readFileSync(path, 'utf8');
  for (const [from, to] of replacements) {
    if (typeof from === 'string' && !content.includes(from)) {
      console.warn(`[WARN] String not found in ${path}:`, from);
    }
    content = content.replace(from, to);
  }
  fs.writeFileSync(path, content, 'utf8');
  console.log(`✓ ${path} updated`);
}

// 1. HERO SECTION
const newInteractivePoster = `function InteractivePoster() {
  return (
    <div className="w-full max-w-[440px] mx-auto lg:mr-0 lg:ml-auto mt-12 lg:mt-0">
      <div
        className="relative w-full bg-white rounded-[28px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-black/5"
        style={{ padding: '36px' }}
      >
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <Image 
            src="/assets/images/poster_6_0.png" 
            alt="WCC 6.0 Official Poster" 
            fill 
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 440px"
          />
        </div>
      </div>
    </div>
  );
}`;

let heroContent = fs.readFileSync('components/HeroSection.tsx', 'utf8');
heroContent = heroContent.replace(/function InteractivePoster\(\) \{[\s\S]*?\n\}\n/, newInteractivePoster + '\n');
heroContent = heroContent.replace(
  'import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";',
  'import { motion } from "framer-motion";'
);
heroContent = heroContent.replace(
  'import React, { useRef } from "react";',
  'import React from "react";'
);
heroContent = heroContent.replace('REGISTER FOR FREE <span className="text-[16px]">↗</span>', 'REGISTER NOW <span className="text-[16px]">↗</span>');
fs.writeFileSync('components/HeroSection.tsx', heroContent, 'utf8');
console.log('✓ HeroSection fixed');


// 2. EDITIONS SECTION
replaceFile('components/EditionsSection.tsx', [
  ['"/assets/WCC 5.0 POSTER.png"', '"/assets/images/poster_5_0.jpg"'],
  ['{ label: "PRIZE POOL", val: "₹50,000+" }', '{ label: "PRIZE POOL", val: "₹55,000" }'],
  ['<div className="flex flex-col justify-start">', '<div className="flex flex-col justify-start min-h-full">'],
  ['<p className="text-[16px] sm:text-[17px] text-dim leading-[1.7] mb-8">{current.desc}</p>', '<p className="text-[16px] sm:text-[17px] text-dim leading-[1.7] mb-8 text-justify">{current.desc}</p>']
]);


// 3. CONTACTS SECTION
const contacts = `"use client";

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
      <a href={\`tel:\${value}\`} className="text-ink font-medium hover:text-coral transition-colors tracking-wide">{value}</a>
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

        <div className="reveal max-w-[820px] mx-auto px-4" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '48px', alignItems: 'start' }}>
          
          {/* FACULTY COORDINATOR */}
          <div className="border border-ink/10 rounded-2xl p-8 bg-white shadow-sm">
            <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-coral mb-5 pb-3 border-b-2 border-ink/10 font-mono">Faculty Coordinator</div>
            <div className="text-[20px] sm:text-[22px] font-display font-bold text-ink mb-2 leading-tight">Mr. S. Murali Mohan</div>
            <a href="mailto:muralimohan_s@vnrvjiet.in" className="text-dim hover:text-coral transition-colors font-medium text-[15px]">
              muralimohan_s@vnrvjiet.in
            </a>
          </div>

          {/* QUERY CONTACTS */}
          <div className="border border-ink/10 rounded-2xl p-8 bg-white shadow-sm">
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
    </section>
  );
}
`;
fs.writeFileSync('components/ContactsSection.tsx', contacts, 'utf8');
console.log('✓ ContactsSection rewritten');

// 4. RESPONSIVE CONTACTS CSS
let css = fs.readFileSync('app/globals.css', 'utf8');
if (!css.includes('.contacts-grid-mobile')) {
  css += `
@media(max-width: 639px) {
  #contacts .reveal[style] {
    display: flex !important;
    flex-direction: column !important;
    gap: 24px !important;
  }
}
`;
  fs.writeFileSync('app/globals.css', css, 'utf8');
  console.log('✓ Contacts mobile CSS added');
}


// 5. PRIZES SECTION
replaceFile('components/PrizesSection.tsx', [
  [/A prize pool of .?50,000\+/, 'A prize pool of ₹55,000'],
  [/₹25,000/g, '₹20,000'],
  [/\?25,000/g, '₹20,000'],
  ['<div className="consolation-tag">★ SPECIAL MERIT · RANK 4</div>\r\n               <h4>Consolation Prize 1</h4>', '<div className="consolation-tag">★ SPECIAL MERIT · RANK 4</div>\n               <h4>₹6,000</h4>'],
  ['<div className="consolation-tag">★ SPECIAL MERIT · RANK 5</div>\r\n               <h4>Consolation Prize 2</h4>', '<div className="consolation-tag">★ SPECIAL MERIT · RANK 5</div>\n               <h4>₹4,000</h4>'],
  ['<div className="consolation-tag">★ SPECIAL MERIT · RANK 4</div>\n               <h4>Consolation Prize 1</h4>', '<div className="consolation-tag">★ SPECIAL MERIT · RANK 4</div>\n               <h4>₹6,000</h4>'],
  ['<div className="consolation-tag">★ SPECIAL MERIT · RANK 5</div>\n               <h4>Consolation Prize 2</h4>', '<div className="consolation-tag">★ SPECIAL MERIT · RANK 5</div>\n               <h4>₹4,000</h4>']
]);

// 6. STAGES SECTION
replaceFile('components/StagesSection.tsx', [
  ['Round 1 is completely free for every student in India.', 'Registration Fee: ₹300 per team.'],
  ['ELIGIBILITY — ALL UG &amp; PG STUDENTS — UNTIL 24 SEPT', 'DEADLINE — 11 OCT 2026 (EXT. 12 OCT)'],
  ['09 OCT 2026', '13 OCT 2026'],
  ['11 OCT 2026', '22 OCT 2026'],
  ['Top 150+ coders receive campus invitations.', 'Top 70 teams shortlisted for the campus finale.'],
  ['MERIT RANKLIST PUBLISHED — 10 OCT 2026', 'MERIT RANKLIST PUBLISHED AFTER ROUND 1'],
]);

// 7. CLOSING REGISTRATION & FAQ (HackerEarth, dates)
replaceFile('components/FaqSection.tsx', [
  ['Sunday, 11 Oct 2026', 'Thursday, 22 Oct 2026'],
]);

console.log('✓ Stages, FAQ updated');
