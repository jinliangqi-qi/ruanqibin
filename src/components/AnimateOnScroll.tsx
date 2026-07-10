"use client";

import { useEffect, useRef } from "react";

export default function AnimateOnScroll({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
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
            el.classList.add("visible");
          }, delay * 1000);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "-20px 0px" }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [delay]);

  return (
    <div ref={ref} className={`anim-reveal ${className}`}>
      {children}
    </div>
  );
}
