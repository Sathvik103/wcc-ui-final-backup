"use client";

import React, { useEffect, useState } from "react";

export default function ClosingRegistration() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00",
  });

  useEffect(() => {
    const targetTime = new Date("2026-10-09T09:00:00+05:30").getTime();

    const updateTimer = () => {
      const diff = targetTime - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: "00", hours: "00", mins: "00", secs: "00" });
        return;
      }

      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      const secs = Math.floor((diff % 60000) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        mins: String(mins).padStart(2, "0"),
        secs: String(secs).padStart(2, "0"),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="cta" className="section">
      <div className="wrap">
        <h2>READY TO COMPETE AT THE NATIONAL LEVEL?</h2>
        <p>6,000+ coders. One free qualifier. A campus finale in Hyderabad.</p>

        {/* LIVE COUNTDOWN TIMER GRID */}
        <div className="cta-timer-wrap">
          <div className="timer-unit-box">
            <span className="timer-unit-val" id="t-days">
              {timeLeft.days}
            </span>
            <span className="timer-unit-lbl">DAYS</span>
          </div>
          <span className="timer-colon-sep">:</span>
          <div className="timer-unit-box">
            <span className="timer-unit-val" id="t-hours">
              {timeLeft.hours}
            </span>
            <span className="timer-unit-lbl">HOURS</span>
          </div>
          <span className="timer-colon-sep">:</span>
          <div className="timer-unit-box">
            <span className="timer-unit-val" id="t-mins">
              {timeLeft.mins}
            </span>
            <span className="timer-unit-lbl">MINUTES</span>
          </div>
          <span className="timer-colon-sep">:</span>
          <div className="timer-unit-box">
            <span className="timer-unit-val" id="t-secs">
              {timeLeft.secs}
            </span>
            <span className="timer-unit-lbl">SECONDS</span>
          </div>
        </div>

        <div>
          <a
            className="btn btn-solid"
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            REGISTER ON UNSTOP →
          </a>
        </div>
      </div>
    </section>
  );
}
