"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "关于", href: "/about" },
  { label: "技能", href: "/courses" },
  { label: "在校经历", href: "/cases" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-[#edf0f3]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-[15px] font-semibold tracking-tight text-[#2c3e50]">
          阮琪斌
        </a>

        <div className="flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-[#8b95a1] hover:text-[#2c3e50] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/contact"
            className="text-[13px] font-medium px-5 py-2 rounded-full bg-[#5b8c5a] text-white hover:bg-[#4a7a49] transition-all hover:shadow-md"
          >
            联系我
          </a>
        </div>
      </div>
    </nav>
  );
}
