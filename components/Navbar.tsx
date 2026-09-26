"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Navbar({ introComplete = true }: { introComplete?: boolean }) {
  const [isSolid, setIsSolid] = useState(false);

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
      className={isSolid ? "solid" : ""}
      initial={{ opacity: 0 }}
      animate={{ opacity: introComplete ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="wrap flex items-center justify-between">
        <a href="https://vnrvjiet.acm.org" target="_blank" rel="noopener noreferrer" className="brand flex items-center gap-3 relative z-50" id="brand-logo-wrap">
          {introComplete ? (
            <motion.div layoutId="acm-lockup" className="flex items-center gap-3">
              <Image
                src="/acm-vnrvjiet-logo.png"
                alt="ACM VNRVJIET Logo"
                width={44}
                height={44}
                className="h-[44px] w-[44px] object-contain block drop-shadow-sm"
                priority
              />
              <span className="font-display font-bold text-lg text-ink tracking-tight uppercase">ACM VNRVJIET</span>
            </motion.div>
          ) : (
            <div className="w-[180px] h-[44px] invisible"></div> /* Placeholder for layout */
          )}
        </a>

        <div className="navlinks hidden lg:flex items-center gap-6">
          <a href="#scale">Overview</a>
          <a href="#heritage">Evolution</a>
          <a href="#format">How It Works</a>
          <a href="#archive">Archive</a>
          <a href="#prizes">Prizes</a>
          <a href="#sponsors">Sponsors</a>
          <a href="#faq">FAQ</a>
        </div>

        <a
          className="btn btn-outline hidden lg:flex"
          href="https://unstop.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          REGISTER â†—
        </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
