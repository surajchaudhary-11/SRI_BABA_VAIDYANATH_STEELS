"use client";

import { useEffect, useRef, useState } from "react";

export default function IntroScreen() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const emblemRef = useRef<HTMLDivElement>(null);
  const canSkipRef = useRef(false);
  const exitingRef = useRef(false);
  const tiltEnabledRef = useRef(true);

  const exitIntro = () => {
    if (exitingRef.current) return;
    exitingRef.current = true;
    canSkipRef.current = false;
    tiltEnabledRef.current = false;
    setExiting(true);
    window.setTimeout(() => {
      setVisible(false);
      document.dispatchEvent(new CustomEvent("bbs:done"));
    }, 750);
  };

  useEffect(() => {
    if (!visible) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const orbit = orbitRef.current;
    const emblem = emblemRef.current;
    if (!dot || !ring || !orbit || !emblem) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let cursorRaf = 0;
    let tiltRaf = 0;
    let skipTimer = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;

      if (tiltEnabledRef.current) {
        tx = ((e.clientY / window.innerHeight) - 0.5) * 20;
        ty = ((e.clientX / window.innerWidth) - 0.5) * -26;
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (!canSkipRef.current) return;
      if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
        e.preventDefault();
        exitIntro();
      }
    };

    const cursorLoop = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      cursorRaf = requestAnimationFrame(cursorLoop);
    };

    const tiltLoop = () => {
      if (!tiltEnabledRef.current) return;
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      emblem.style.transform = `rotateX(${cx}deg) rotateY(${cy}deg)`;
      tiltRaf = requestAnimationFrame(tiltLoop);
    };

    const buildOrbit = () => {
      orbit.innerHTML = "";
      const n = 28;
      const r = 144;
      for (let i = 0; i < n; i += 1) {
        const d = document.createElement("div");
        d.className = "bbs-dot";
        const a = (i / n) * Math.PI * 2;
        const px = Math.cos(a) * r;
        const py = Math.sin(a) * r;
        const big = i % 5 === 0;
        const sz = big ? 4 : i % 3 === 0 ? 3 : 2;
        const opacity = big ? 0.52 : i % 2 === 0 ? 0.28 : 0.16;
        d.style.cssText = `width:${sz}px;height:${sz}px;margin:-${sz / 2}px 0 0 -${sz / 2}px;transform:translate(${px}px,${py}px);opacity:${opacity};`;
        orbit.appendChild(d);
      }
    };

    buildOrbit();
    window.addEventListener("mousemove", onMove);
    document.addEventListener("keydown", onKey);
    cursorLoop();
    tiltLoop();
    skipTimer = window.setTimeout(() => {
      canSkipRef.current = true;
    }, 2600);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("keydown", onKey);
      cancelAnimationFrame(cursorRaf);
      cancelAnimationFrame(tiltRaf);
      clearTimeout(skipTimer);
      document.body.style.overflow = prevOverflow;
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      <div id="bbs-dot" ref={dotRef} />
      <div id="bbs-ring" ref={ringRef} />

      <div id="bbs-intro" className={exiting ? "bbs-exiting" : ""}>
        <div className="bbs-glow" />
        <div className="bbs-c tl" />
        <div className="bbs-c tr" />
        <div className="bbs-c bl" />
        <div className="bbs-c br" />
        <div className="bbs-strip l">Steel Distributor - Kanpur UP</div>
        <div className="bbs-strip r">Fe - IS 1786 - GST Verified</div>
        <div className="bbs-rod-corner bbs-rod-tl" aria-hidden="true">
          <img src="/steel-rod1.png" alt="" />
        </div>
        <div className="bbs-rod-corner bbs-rod-br" aria-hidden="true">
          <img src="/steel-rod1.png" alt="" />
        </div>

        <div className="bbs-scene">
          <div className="bbs-emblem" id="bbs-emblem" ref={emblemRef}>
            <div className="bbs-orbit" id="bbs-orbit" ref={orbitRef} />

            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g-face" x1="12%" y1="4%" x2="88%" y2="96%">
                  <stop offset="0%" stopColor="#d6d6d6" />
                  <stop offset="40%" stopColor="#8e8e8e" />
                  <stop offset="100%" stopColor="#363636" />
                </linearGradient>
                <radialGradient id="g-gloss" cx="34%" cy="27%" r="54%">
                  <stop offset="0%" stopColor="white" stopOpacity=".30" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="g-beam" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="55%" stopColor="#dedede" />
                  <stop offset="100%" stopColor="#b4b4b4" />
                </linearGradient>
                <filter id="f-glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="3.5" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <polygon points="103,17 151,46 151,160 103,189 55,160 55,46" fill="rgba(0,0,0,.5)" />
              <polygon points="100,14 103,17 55,46 52,43" fill="#888" opacity=".75" />
              <polygon points="100,14 103,17 151,46 148,43" fill="#666" opacity=".8" />
              <polygon points="148,43 151,46 151,160 148,157" fill="#222" opacity=".9" />
              <polygon points="100,186 103,189 151,160 148,157" fill="#1a1a1a" opacity=".9" />
              <polygon points="100,186 103,189 55,160 52,157" fill="#252525" opacity=".8" />
              <polygon points="52,43 55,46 55,160 52,157" fill="#3c3c3c" opacity=".7" />
              <polygon points="100,14 148,43 148,157 100,186 52,157 52,43" fill="url(#g-face)" />
              <polygon points="100,14 148,43 148,157 100,186 52,157 52,43" fill="url(#g-gloss)" />
              <polygon points="100,26 138,49 138,151 100,174 62,151 62,49" fill="none" stroke="rgba(255,255,255,.09)" strokeWidth="1" />
              <polygon points="100,46 124,60 124,140 100,154 76,140 76,60" fill="rgba(0,0,0,.2)" stroke="rgba(255,255,255,.06)" strokeWidth="1" />
              <rect x="92" y="70" width="20" height="62" fill="rgba(0,0,0,.28)" rx="1" transform="translate(2,3)" />
              <rect x="72" y="59" width="60" height="14" fill="rgba(0,0,0,.28)" rx="1" transform="translate(2,3)" />
              <rect x="72" y="127" width="60" height="14" fill="rgba(0,0,0,.28)" rx="1" transform="translate(2,3)" />
              <rect x="90" y="69" width="20" height="62" fill="url(#g-beam)" rx="1.5" />
              <rect x="70" y="58" width="60" height="14" fill="url(#g-beam)" rx="1.5" />
              <rect x="70" y="128" width="60" height="14" fill="url(#g-beam)" rx="1.5" />
              <rect x="90" y="69" width="4" height="62" fill="white" opacity=".22" rx="1" />
              <rect x="70" y="58" width="60" height="3" fill="white" opacity=".32" rx="1" />
              <rect x="70" y="128" width="60" height="3" fill="white" opacity=".22" rx="1" />
              <line x1="52" y1="43" x2="100" y2="14" stroke="rgba(255,255,255,.52)" strokeWidth="1.5" />
              <line x1="100" y1="14" x2="148" y2="43" stroke="rgba(255,255,255,.28)" strokeWidth="1" />
              <line x1="52" y1="43" x2="52" y2="157" stroke="rgba(255,255,255,.16)" strokeWidth="1" />
              <line x1="148" y1="43" x2="148" y2="157" stroke="rgba(255,255,255,.07)" strokeWidth="1" />
              <line x1="52" y1="157" x2="100" y2="186" stroke="rgba(255,255,255,.05)" strokeWidth="1" />
              <line x1="148" y1="157" x2="100" y2="186" stroke="rgba(255,255,255,.03)" strokeWidth="1" />
              <circle cx="100" cy="14" r="3.5" fill="rgba(255,255,255,.68)" filter="url(#f-glow)" />
              <circle cx="52" cy="43" r="2.2" fill="rgba(255,255,255,.38)" />
              <circle cx="148" cy="43" r="1.8" fill="rgba(255,255,255,.2)" />
              <circle cx="52" cy="157" r="1.8" fill="rgba(255,255,255,.12)" />
              <circle cx="148" cy="157" r="1.8" fill="rgba(255,255,255,.09)" />
              <circle cx="100" cy="186" r="1.8" fill="rgba(255,255,255,.07)" />
              <polygon points="100,5 157,37.5 157,162.5 100,195 43,162.5 43,37.5" fill="none" stroke="rgba(255,255,255,.045)" strokeWidth="1" />
              <polygon points="100,0 162,33 162,167 100,200 38,167 38,33" fill="none" stroke="rgba(255,255,255,.02)" strokeWidth="1" />
            </svg>
          </div>

          <div className="bbs-brand">
            <span className="bbs-l1"><span>SRI BABA VAIDYANATH</span></span>
            <span className="bbs-l2"><span>STEELS</span></span>
            <div className="bbs-owner">- Praveen Kumar Chaudhary -</div>
            <div className="bbs-rule" />
            <div className="bbs-tag">Kanpur, UP - Est. 2004 - IS 1786</div>
          </div>

          <div className="bbs-btn-wrap">
            <button
              type="button"
              className="bbs-enter"
              id="bbs-btn"
              onClick={exitIntro}
              onPointerDown={exitIntro}
            >
              <span className="bbs-et">ENTER SITE</span>
              <span className="bbs-ea">{">"}</span>
            </button>
          </div>

          <div className="bbs-skip" id="bbs-skip" onClick={exitIntro} onPointerDown={exitIntro}>Press Enter or Space to skip</div>
        </div>
      </div>
    </>
  );
}




