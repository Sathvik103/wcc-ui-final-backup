"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar({ introComplete = true }: { introComplete?: boolean }) {
  const [isSolid, setIsSolid] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      id="nav"
      className={`${isSolid ? "solid" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: introComplete ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="wrap flex items-center justify-between !px-4 sm:!px-7">
        <a href="#hero" className="brand flex items-center gap-2 sm:gap-3 relative z-50 shrink-0" id="brand-logo-wrap">
          {introComplete ? (
            <motion.div layoutId="acm-lockup" className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              <Image
                src="/acm-vnrvjiet-logo.png"
                alt="ACM VNRVJIET Logo"
                width={36}
                height={36}
                className="h-8 w-8 sm:h-9 sm:w-9 object-contain block drop-shadow-sm shrink-0"
                priority
              />
              <span className="font-display font-bold text-sm sm:text-base text-ink tracking-tight uppercase whitespace-nowrap">
                ACM VNRVJIET
              </span>
            </motion.div>
          ) : (
            <div className="w-[140px] sm:w-[180px] h-[36px] sm:h-[44px] invisible"></div>
          )}
        </a>

        {/* Desktop Navlinks */}
        <div className="navlinks hidden lg:flex items-center gap-6 text-sm font-bold text-[#1a1918]">
          <a href="#scale">Overview</a>
          <a href="#heritage">Evolution</a>
          <a href="#format">How It Works</a>
          <a href="#archive">Archive</a>
          <a href="#prizes">Prizes</a>
          <a href="#sponsors">Sponsors</a>
          <a href="#faq">FAQ</a>
        </div>

        {/* Actions (Register CTA + Mobile Toggle) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            className="btn btn-outline text-xs sm:text-xs py-1.5 px-3 sm:py-2.5 sm:px-5 whitespace-nowrap"
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            REGISTER
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 border-2 border-[#1a1918] rounded-lg bg-white shadow-[2px_2px_0px_#1a1918] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer shrink-0"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`h-0.5 w-4 bg-[#1a1918] rounded transition-all duration-200 origin-center ${mobileMenuOpen ? "rotate-45 translate-y-[6px]" : "mb-1"
                }`}
            />
            <span
              className={`h-0.5 w-4 bg-[#1a1918] rounded transition-opacity duration-200 ${mobileMenuOpen ? "opacity-0" : "mb-1"
                }`}
            />
            <span
              className={`h-0.5 w-4 bg-[#1a1918] rounded transition-all duration-200 origin-center ${mobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t-2 border-[#1a1918] mt-2.5 shadow-xl overflow-hidden"
          >
            <div className="wrap !px-4 py-4 flex flex-col gap-1 items-center">
              <a
                href="#scale"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display font-bold text-sm text-[#1a1918] hover:text-[#ff5f40] hover:bg-[#f5f3ee] rounded-lg px-4 py-2 transition-colors block text-center w-full"
              >
                Overview
              </a>
              <a
                href="#heritage"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display font-bold text-sm text-[#1a1918] hover:text-[#ff5f40] hover:bg-[#f5f3ee] rounded-lg px-4 py-2 transition-colors block text-center w-full"
              >
                Evolution
              </a>
              <a
                href="#format"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display font-bold text-sm text-[#1a1918] hover:text-[#ff5f40] hover:bg-[#f5f3ee] rounded-lg px-4 py-2 transition-colors block text-center w-full"
              >
                How It Works
              </a>
              <a
                href="#archive"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display font-bold text-sm text-[#1a1918] hover:text-[#ff5f40] hover:bg-[#f5f3ee] rounded-lg px-4 py-2 transition-colors block text-center w-full"
              >
                Archive
              </a>
              <a
                href="#prizes"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display font-bold text-sm text-[#1a1918] hover:text-[#ff5f40] hover:bg-[#f5f3ee] rounded-lg px-4 py-2 transition-colors block text-center w-full"
              >
                Prizes
              </a>
              <a
                href="#sponsors"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display font-bold text-sm text-[#1a1918] hover:text-[#ff5f40] hover:bg-[#f5f3ee] rounded-lg px-4 py-2 transition-colors block text-center w-full"
              >
                Sponsors
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display font-bold text-sm text-[#1a1918] hover:text-[#ff5f40] hover:bg-[#f5f3ee] rounded-lg px-4 py-2 transition-colors block text-center w-full"
              >
                FAQ
              </a>

              <div className="pt-2 mt-1 border-t border-slate-200 w-full">
                <a
                  className="btn btn-solid w-full text-center py-2.5 text-xs font-bold font-display uppercase tracking-wider block"
                  href="https://unstop.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  REGISTER
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
