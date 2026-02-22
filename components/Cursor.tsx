"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
      }
    };
    const onOver = (e: Event) => {
      const t = e.target as HTMLElement;
      setHovering(Boolean(t.closest("a,button,input,select,textarea")));
    };
    const loop = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      if (ringRef.current) {
        const size = hovering ? 54 : 36;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.transform = `translate(${rx - size / 2}px, ${ry - size / 2}px)`;
      }
      requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [hovering]);

  return (
    <>
      <div ref={dotRef} className="pointer-events-none fixed z-[80] h-[10px] w-[10px] rounded-full bg-white mix-blend-difference" />
      <div ref={ringRef} className="pointer-events-none fixed z-[79] h-9 w-9 rounded-full border border-white/80 transition-[width,height] duration-200" />
    </>
  );
}

