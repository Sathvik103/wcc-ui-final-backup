"use client";

import React, { useState } from "react";

const faqs = [
  {
    q: "Is Round 1 really 100% free?",
    a: "Round 1 registration and participation are completely free for students across India, with no hidden charges.",
  },
  {
    q: "What's the permissible team size?",
    a: "Participate individually or as a two-member team. Open to students currently pursuing a B.Tech degree.",
  },
  {
    q: "Which programming languages are supported for the contest?",
    a: "Supported languages: C++, Java, Python 3.x, and C. Standard libraries and data structures are allowed.",
  },
  {
    q: "Where is Round 2 held?",
    a: "Thursday, 22 October 2026 at VNRVJIET campus, Bachupally, Hyderabad. Reporting and transit details will be shared with participants.",
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
                  <span className="ind">{isOpen ? "-" : "+"}</span>
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
