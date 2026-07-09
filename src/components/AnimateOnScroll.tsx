"use client";

import { useEffect, useRef } from "react";

type AnimType = "fade-up" | "fade-in" | "fade-in-right" | "fade-in-left" | "scale-in";

export default function AnimateOnScroll({
  children,
  anim = "fade-up",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  anim?: AnimType;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("is-visible");
          }, delay * 1000);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "-40px 0px" }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [delay]);

  return (
    <div ref={ref} className={`animate-on-scroll ${className}`} data-anim={anim}>
      {children}
    </div>
  );
}
