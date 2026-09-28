"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
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
          <a href="#heritage">Evolution</a>
          <a href="#archive">Archive</a>
          <a href="#format">How It Works</a>
          <a href="#prizes">Prizes</a>
          <a href="#faq">FAQ</a>
          <a href="#sponsors">Sponsors</a>
        </div>

        {/* Actions (Register CTA + Mobile Toggle) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            className="btn btn-outline text-xs sm:text-xs py-1.5 px-3 sm:py-2.5 sm:px-5 whitespace-nowrap !hidden lg:!inline-flex"
            href="https://unstop.com/o/xkq9yFv?lb=Vr9VXAuO&utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Acmcha18131"
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
            {mobileMenuOpen ? <X size={20} strokeWidth={2.5} className="text-[#1a1918]" /> : <Menu size={20} strokeWidth={2.5} className="text-[#1a1918]" />}
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
            <div className="wrap !px-6 sm:!px-8 py-10 pb-6 flex flex-col items-start w-full">
              <div className="flex flex-col gap-5 !py-5 w-full">
                <a
                  href="#heritage"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display font-bold text-[15px] text-[#1a1918] hover:text-[#ff5f40] hover:bg-[#f5f3ee] rounded-lg px-4 py-2.5 transition-colors block text-left w-full"
                >
                  Evolution
                </a>
                <a
                  href="#archive"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display font-bold text-[15px] text-[#1a1918] hover:text-[#ff5f40] hover:bg-[#f5f3ee] rounded-lg px-4 py-2.5 transition-colors block text-left w-full"
                >
                  Archive
                </a>
                <a
                  href="#format"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display font-bold text-[15px] text-[#1a1918] hover:text-[#ff5f40] hover:bg-[#f5f3ee] rounded-lg px-4 py-2.5 transition-colors block text-left w-full"
                >
                  How It Works
                </a>
                <a
                  href="#prizes"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display font-bold text-[15px] text-[#1a1918] hover:text-[#ff5f40] hover:bg-[#f5f3ee] rounded-lg px-4 py-2.5 transition-colors block text-left w-full"
                >
                  Prizes
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display font-bold text-[15px] text-[#1a1918] hover:text-[#ff5f40] hover:bg-[#f5f3ee] rounded-lg px-4 py-2.5 transition-colors block text-left w-full"
                >
                  FAQ
                </a>
                <a
                  href="#sponsors"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display font-bold text-[15px] text-[#1a1918] hover:text-[#ff5f40] hover:bg-[#f5f3ee] rounded-lg px-4 py-2.5 transition-colors block text-left w-full"
                >
                  Sponsors
                </a>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-200 w-full !pb-2">
                <a
                  className="btn btn-solid w-full text-center py-3 text-xs sm:text-sm font-bold font-display uppercase tracking-wider block shadow-[3px_3px_0px_#1a1918]"
                  href="https://unstop.com/o/xkq9yFv?lb=Vr9VXAuO&utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Acmcha18131"
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
