"use client";

import React from "react";
import { Mail, Phone } from "lucide-react";

export default function ContactsSection() {
  return (
    <section id="contacts" className="section !py-20 sm:!py-28 bg-[#fdfdfc] border-t-2 border-ink/10">
      <div className="wrap !px-4 sm:!px-8">
        {/* Section Header */}
        <div className="section-head reveal mx-auto flex flex-col items-center justify-center text-center px-4 w-full mb-12 sm:mb-16">
          <span className="section-badge text-[11px] sm:text-[13px] uppercase tracking-widest font-bold">
            CONTACTS & COORDINATORS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[48px] leading-[1.1] font-display font-extrabold text-ink mt-4">
            Get in Touch
          </h2>
          <p className="text-[15px] sm:text-[17px] text-dim text-center max-w-[560px] mx-auto w-full mt-3 leading-relaxed">
            Have questions regarding contest rounds, registrations, or college participation? Reach out to our organizing team.
          </p>
        </div>

        {/* Centered Cards Container */}
        <div className="reveal max-w-[920px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

          {/* FACULTY COORDINATOR CARD */}
          <div
            style={{ padding: "36px 32px" }}
            className="bg-white border-2 border-ink rounded-2xl shadow-[6px_6px_0px_var(--ink)] flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0px_var(--ink)]"
          >
            <div>
              {/* Category Pill */}
              <div className="mb-6">
                <span className="inline-block text-[10px] font-mono font-bold tracking-widest text-coral uppercase bg-coral/10 border border-coral/25 rounded-full px-5 py-3">
                  FACULTY COORDINATOR
                </span>
              </div>

              {/* Coordinator Details */}
              <h3 className="text-2xl sm:text-[28px] font-display font-extrabold text-ink leading-tight mb-3">
                Mr. S. Murali Mohan
              </h3>
              <p className="text-[14px] sm:text-[15px] text-dim font-medium leading-relaxed mb-6">

                <span className="text-ink font-semibold">VNR Vignana Jyothi Institute of Engg. & Tech.</span>
              </p>
            </div>

            {/* Email Contact Link */}
            <div className="pt-6 border-t-2 border-ink/10 flex items-center gap-3">

              <a
                href="mailto:muralimohan_s@vnrvjiet.in"
                className="text-[14px] sm:text-[15px] font-bold text-ink hover:text-coral transition-colors break-all"
              >
                muralimohan_s@vnrvjiet.in
              </a>
            </div>
          </div>

          {/* QUERY CONTACTS CARD */}
          <div
            style={{ padding: "36px 32px" }}
            className="bg-white border-2 border-ink rounded-2xl shadow-[6px_6px_0px_var(--ink)] flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0px_var(--ink)]"
          >
            <div>
              {/* Category Pill */}
              <div className="mb-6">
                <span className="inline-block text-[11px] font-mono font-bold tracking-widest text-coral uppercase bg-coral/10 border border-coral/25 rounded-full px-3.5 py-1.5">
                  STUDENT COORDINATORS
                </span>
              </div>

              {/* Contacts List */}
              <div className="flex flex-col">

                {/* Contact 1 */}
                <div className="flex flex-col gap-2">
                  <h4 className="text-lg sm:text-[19px] font-display font-bold text-ink">
                    T. Murali
                  </h4>
                  <div className="flex items-center gap-2.5">

                    <a
                      href="tel:8179354592"
                      className="text-[14px] sm:text-[15px] font-mono font-bold text-ink hover:text-coral transition-colors"
                    >
                      8179354592
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">

                    <a
                      href="mailto:mtejomurtula@gmail.com"
                      className="text-[13px] sm:text-[14px] text-dim hover:text-coral transition-colors break-all"
                    >
                      mtejomurtula@gmail.com
                    </a>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-5 border-t border-ink/10 gap-10" />

                {/* Contact 2 */}
                <div className="flex flex-col gap-2">
                  <h4 className="text-lg sm:text-[19px] font-display font-bold text-ink">
                    G. Shreshta
                  </h4>
                  <div className="flex items-center gap-2.5">

                    <a
                      href="tel:9618212285"
                      className="text-[14px] sm:text-[15px] font-mono font-bold text-ink hover:text-coral transition-colors"
                    >
                      9618212285
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">

                    <a
                      href="mailto:shreshta.gudipati1903@gmail.com"
                      className="text-[13px] sm:text-[14px] text-dim hover:text-coral transition-colors break-all"
                    >
                      shreshta.gudipati1903@gmail.com
                    </a>
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
