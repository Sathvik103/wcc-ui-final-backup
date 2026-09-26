"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Navbar({ introComplete = true }: { introComplete?: boolean }) {
  const [isSolid, setIsSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="nav" className={isSolid ? "solid" : ""}>
      <div className="wrap flex items-center justify-between">
        <a href="https://vnrvjiet.acm.org" target="_blank" rel="noopener noreferrer" className="brand flex items-center gap-3 relative z-50" id="brand-logo-wrap">
          {/* We'll use Framer Motion layoutId for the seamless transition */}
          {introComplete ? (
            <motion.div layoutId="acm-lockup" className="flex items-center gap-3">
              <Image
                src="/assets/images/acm_logo.png"
                alt="ACM VNRVJIET Logo"
                width={44}
                height={44}
                className="h-[44px] w-[44px] object-contain block drop-shadow-sm"
                priority
              />
              <span className="font-display font-bold text-[20px] text-ink tracking-tight uppercase">ACM VNRVJIET</span>
            </motion.div>
          ) : (
            <div className="w-[200px] h-[44px] invisible"></div> /* Placeholder for layout */
          )}
        </a>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden relative z-50 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block w-full h-0.5 bg-ink transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-ink transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-ink transition-transform ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>

        {/* Desktop Nav */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: introComplete ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="navlinks hidden md:flex items-center gap-6"
        >
          <a href="#scale">Overview</a>
          <a href="#heritage">Evolution</a>
          <a href="#format">How It Works</a>
          <a href="#archive">Archive</a>
          <a href="#prizes">Prizes</a>
          <a href="#sponsors">Sponsors</a>
          <a href="#faq">FAQ</a>
        </motion.div>

        {/* Desktop CTA */}
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: introComplete ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="btn btn-outline hidden md:flex"
          href="https://unstop.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          REGISTER ↗
        </motion.a>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-bg z-40 flex flex-col justify-center items-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <a href="#scale" className="text-2xl font-display font-bold text-ink" onClick={() => setMenuOpen(false)}>Overview</a>
          <a href="#heritage" className="text-2xl font-display font-bold text-ink" onClick={() => setMenuOpen(false)}>Evolution</a>
          <a href="#format" className="text-2xl font-display font-bold text-ink" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="#archive" className="text-2xl font-display font-bold text-ink" onClick={() => setMenuOpen(false)}>Archive</a>
          <a href="#prizes" className="text-2xl font-display font-bold text-ink" onClick={() => setMenuOpen(false)}>Prizes</a>
          <a href="#sponsors" className="text-2xl font-display font-bold text-ink" onClick={() => setMenuOpen(false)}>Sponsors</a>
          <a href="#faq" className="text-2xl font-display font-bold text-ink" onClick={() => setMenuOpen(false)}>FAQ</a>
          
          <a
            className="btn btn-solid mt-4"
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            REGISTER ↗
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
