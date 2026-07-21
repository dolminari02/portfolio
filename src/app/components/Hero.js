"use client";

import { useState, useRef, useEffect } from "react";

export default function Hero() {
  
  const [isStuck, setIsStuck] = useState(false)
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsStuck(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="text-center px-4 py-8">
      <p className="text-base tracking-widest text-gray-400 uppercase mb-3">퍼블리셔</p>
      <h1 ref={heroRef} className={` text-3xl md:text-5xl font-bold text-gray-900 pb-6 bg-[var(--background)] ${isStuck ? "fixed top-0 left-0 right-0 pt-[36px]" : "pt-3"}`}>
        이건우의 포트폴리오
      </h1>
      <p className="text-gray-400 text-2xl">진행한 작업들을 확인해보세요.</p>
    </section>
  );
}