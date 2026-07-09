"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "首页", href: "/" },
  { label: "关于我", href: "/about" },
  { label: "专业技能", href: "/courses" },
  { label: "项目经历", href: "/cases" },
  { label: "联系我", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-[10px] bg-slate-900 flex items-center justify-center">
              <span className="text-white text-sm font-semibold">阮</span>
            </div>
            <span className="font-bold text-[15px] text-slate-800 tracking-tight">
              阮琪斌
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 text-[13px] font-medium text-slate-500 hover:text-slate-800 rounded-full transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/contact"
              className="ml-2 px-4 py-1.5 bg-slate-900 text-white text-[13px] font-semibold rounded-full hover:bg-slate-800 transition-colors duration-200"
            >
              联系我
            </a>
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-slate-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-5 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 text-[15px] font-medium text-slate-700 hover:bg-slate-50 rounded-xl transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full py-2.5 bg-slate-900 text-white text-[15px] font-semibold rounded-xl text-center"
              >
                联系我
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
