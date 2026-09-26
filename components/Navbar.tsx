"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

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
    <nav id="nav" className={isSolid ? "solid" : ""}>
      <div className="wrap">
        <a href="#hero" className="brand" id="brand-logo-wrap">
          <Image
            src="/acm-vnrvjiet-logo.png"
            alt="ACM VNRVJIET Logo"
            width={44}
            height={44}
            className="h-[44px] w-[44px] object-contain block drop-shadow-sm"
            priority
          />
          <span>ACM VNRVJIET</span>
        </a>

        <div className="navlinks">
          <a href="#archive">Archive</a>
          <a href="#format">Format</a>
          <a href="#prizes">Prizes</a>
          <a href="#sponsors">Sponsors</a>
          <a href="#faq">FAQs</a>
        </div>

        <a
          className="btn btn-outline"
          href="https://unstop.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          REGISTER →
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
