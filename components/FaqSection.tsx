"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Is Round 1 really 100% free?",
    a: "Yes. Registration and participation in Round 1 is completely free for all student participants across India — no hidden charges.",
  },
  {
    q: "What's the permissible team size?",
    a: "Solo or duo. Both members must be enrolled in an accredited degree program (B.Tech, BE, BCA, MCA, M.Tech, etc.).",
  },
  {
    q: "Which languages are supported on HackerRank?",
    a: "C++ (GCC 17/20), Java (17/21), Python 3.x and C. Standard template/data-structure libraries are fully permitted.",
  },
  {
    q: "Where is Round 2 held?",
    a: "Sunday, 11 Oct 2026 at VNRVJIET's CS & IT Labs, Bachupally, Hyderabad. Transit details go to the 150+ shortlisted qualifiers.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-bg border-t border-[rgba(26,25,24,0.05)] pt-20 pb-28">
      <div className="wrap max-w-4xl mx-auto">
        <div className="section-head reveal" style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="section-badge mb-3">06 / INQUIRIES</span>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="reveal flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border-2 transition-colors duration-300 rounded-xl overflow-hidden ${isOpen ? 'border-coral bg-white shadow-[6px_6px_0px_rgba(255,95,64,0.15)]' : 'border-[rgba(26,25,24,0.15)] bg-transparent hover:border-[rgba(26,25,24,0.3)]'}`}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:bg-[rgba(26,25,24,0.02)]"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className={`font-display font-bold text-lg md:text-xl transition-colors ${isOpen ? 'text-coral' : 'text-ink'}`}>
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 ml-4 flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all ${isOpen ? 'border-coral text-coral rotate-45' : 'border-ink text-ink rotate-0'}`}>
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                    >
                      <div className="px-6 pb-6 text-dim text-base font-medium leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
