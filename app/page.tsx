"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScaleSection from "@/components/ScaleSection";
import EditionsSection from "@/components/EditionsSection";
import GallerySection from "@/components/GallerySection";
import StagesSection from "@/components/StagesSection";
import PrizesSection from "@/components/PrizesSection";
import FaqSection from "@/components/FaqSection";
import PartnersSection from "@/components/PartnersSection";
import ContactsSection from "@/components/ContactsSection";
import ClosingRegistration from "@/components/ClosingRegistration";
import Footer from "@/components/Footer";
import IntroAnimation from "@/components/IntroAnimation";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    // Scroll reveal observer matching index.html
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>


      <IntroAnimation onComplete={() => setIntroComplete(true)} isComplete={introComplete} />

      {/* 1. Sticky Navigation */}
      <Navbar introComplete={introComplete} />

      {/* 2. Hero Section */}
      <HeroSection introComplete={introComplete} />

      {/* 9. CTA Countdown Timer */}
      <ClosingRegistration />
      {/* 3. The Scale of Winter Coding Contest  */}
      <ScaleSection />


      {/* 4. Heritage / Evolution Across 6 Flagship Editions */}
      <EditionsSection />

      {/* 4. Archives / 5 Editions of Algorithmic Excellence Photo Marquee */}
      <GallerySection />

      {/* 5. Contest Architecture (Four-Stage Pipeline) */}
      <StagesSection />

      {/* 6. Prizes & Podium */}
      <PrizesSection />

      {/* 7. FAQ Section */}
      <FaqSection />

      {/* 8. Ecosystem Partners Marquee */}
      <PartnersSection />

      {/* 9. Contacts Section */}
      <ContactsSection />



      {/* 10. Institutional Footer */}
      <Footer />
    </>
  );
}
