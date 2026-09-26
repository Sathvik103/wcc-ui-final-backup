"use client";

import React, { useState } from "react";

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-badge">INQUIRIES</span>
          <h2>Frequently asked questions.</h2>
        </div>
        <div className="reveal">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-item ${isOpen ? "open" : ""}`}>
                <button
                  type="button"
                  className="faq-q"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span className="ind">{isOpen ? "−" : "+"}</span>
                </button>
                <div
                  className="faq-a"
                  style={{ maxHeight: isOpen ? "200px" : "0px" }}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
