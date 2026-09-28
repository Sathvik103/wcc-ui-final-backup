"use client";

import React from "react";

export default function ContactsSection() {
  return (
    <section
      id="contacts"
      className="section !py-20 sm:!py-28 bg-coral border-y-[3px] border-ink text-white"
    >
      <div className="wrap !px-4 sm:!px-8">

        {/* Section Header */}
        <div className="section-head reveal mx-auto flex flex-col items-center justify-center text-center px-4 w-full mb-12 sm:mb-16">
          <span className="section-badge text-[11px] sm:text-[13px] uppercase tracking-widest font-bold">
            CONTACTS
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-[48px] leading-[1.1] font-display font-extrabold text-white mt-4">
            Get in Touch
          </h2>

          <p className="contacts-intro text-[15px] sm:text-[17px] text-white text-center max-w-[560px] mx-auto w-full mt-3 leading-relaxed">
            Have questions regarding contest rounds, registrations, or college
            participation? Reach out to our organizing team.
          </p>
        </div>

        {/* Cards */}
        <div className="reveal max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">

          {/* FACULTY COORDINATOR */}
          <div
            style={{ padding: "36px 32px", color: "var(--ink)" }}
            className="bg-white border-2 border-ink rounded-2xl shadow-[6px_6px_0px_var(--ink)] flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0px_var(--ink)]"
          >
            <div>

              {/* Category Pill */}
              <div className="mb-6 flex justify-center">
                <span className="inline-block text-[11px] font-mono font-bold tracking-widest text-coral uppercase bg-coral/10 border border-coral/25 rounded-full !px-7 !py-2.5">
                  FACULTY COORDINATOR
                </span>
              </div>

              {/* Coordinator Details */}
              <h3 className="text-2xl sm:text-[28px] font-display font-extrabold text-ink leading-tight mb-3 !pt-2">
                Mr. S. Murali Mohan
              </h3>

              <p className="text-[14px] sm:text-[15px] text-dim font-medium leading-relaxed mb-6">
                <span className="text-ink font-semibold">
                  VNR Vignana Jyothi Institute of Engg. & Tech.
                </span>
              </p>
            </div>

            {/* Email */}
            <div className="pt-6 border-t-2 border-ink/10 flex items-center gap-3">
              <a
                href="mailto:muralimohan_s@vnrvjiet.in"
                className="text-[14px] sm:text-[15px] font-bold text-ink hover:text-coral transition-colors break-all"
              >
                muralimohan_s@vnrvjiet.in
              </a>
            </div>
          </div>


          {/* STUDENT COORDINATORS */}
          <div
            style={{ padding: "28px 28px", color: "var(--ink)" }}
            className="bg-white border-2 border-ink rounded-2xl shadow-[6px_6px_0px_var(--ink)] flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0px_var(--ink)]"
          >
            {/* Category Pill */}
            <div className="mb-5 flex justify-center">
              <span className="inline-block text-[10px] font-mono font-bold tracking-widest text-coral uppercase bg-coral/10 border border-coral/25 rounded-full !px-7 !py-2.5">
                STUDENT COORDINATORS
              </span>
            </div>

            {/* Contact 1 */}
            <div className="flex flex-col gap-1.5">
              <h4 className="text-lg sm:text-[19px] font-display font-bold text-ink">
                T. Murali
              </h4>

              <a
                href="tel:8179354592"
                className="text-[14px] sm:text-[15px] font-mono font-bold text-ink hover:text-coral transition-colors"
              >
                8179354592
              </a>

              <a
                href="mailto:mtejomurtula@gmail.com"
                className="text-[13px] sm:text-[14px] text-dim hover:text-coral transition-colors break-all"
              >
                mtejomurtula@gmail.com
              </a>
            </div>

            {/* Divider */}
            <div className="my-4 border-t border-ink/10" />

            {/* Contact 2 */}
            <div className="flex flex-col gap-1.5">
              <h4 className="text-lg sm:text-[19px] font-display font-bold text-ink">
                G. Shreshta
              </h4>

              <a
                href="tel:9618212285"
                className="text-[14px] sm:text-[15px] font-mono font-bold text-ink hover:text-coral transition-colors"
              >
                9618212285
              </a>

              <a
                href="mailto:shreshta.gudipati1903@gmail.com"
                className="text-[13px] sm:text-[14px] text-dim hover:text-coral transition-colors break-all"
              >
                shreshta.gudipati1903@gmail.com
              </a>
            </div>
          </div>


          {/* FIND US / MAP CARD */}
          <div
            style={{ color: "var(--ink)" }}
            className="bg-white border-2 border-ink rounded-2xl shadow-[6px_6px_0px_var(--ink)] overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0px_var(--ink)]"
          >
            {/* Map Header */}
            <div className="!pt-7">
              {/* Find Us Header */}
              <div className="px-5 text-center">
                <span className="inline-block mb-3 text-[11px] font-mono font-bold tracking-widest text-coral uppercase bg-coral/10 border border-coral/25 rounded-full !px-6 !py-2.5">
                  FIND US
                </span>

                <p className="text-[13px] sm:text-[14px] !px-3 !mt-1 leading-relaxed font-bold text-black">
                  VNR Vignana Jyothi Institute of Engineering and Technology
                </p>
              </div>

              {/* Map */}
              <div className="!px-8 pb-3 !mt-2">
                <div className="relative w-full h-[175px] overflow-hidden rounded-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.3062333140924!2d78.38383211136109!3d17.540600883303668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8e0ab28e0975%3A0x7b048b2858fdee94!2sVallurupalli%20Nageswara%20Rao%20Vignana%20Jyothi%20Institute%20of%20Engineering%20%26Technology!5e0!3m2!1sen!2sin!4v1790517734444!5m2!1sen!2sin"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="VNRVJIET Location"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}