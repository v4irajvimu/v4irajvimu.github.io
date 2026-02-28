"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

export default function SectionHeading({
  children,
  className = "mb-12",
}: SectionHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const rawX = useMotionValue(0.5);
  const smoothX = useSpring(rawX, { stiffness: 200, damping: 40 });
  const glowLeft = useTransform(smoothX, (v) => `calc(${v * 100}% - 4rem)`);
  const glowOpacity = useSpring(0, { stiffness: 200, damping: 40 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        glowOpacity.set(entry.isIntersecting ? 0.6 : 0);
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [glowOpacity]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isInView) return;
      const ratio = e.clientX / window.innerWidth;
      rawX.set(Math.max(0, Math.min(1, ratio)));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawX, isInView]);

  return (
    <div ref={containerRef} className={`flex items-center gap-4 ${className}`}>
      <h2 className="text-3xl font-bold sm:text-4xl">{children}</h2>
      <div className="relative flex-1 h-px overflow-visible">
        <div className="absolute inset-0 bg-card-border" />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="absolute inset-0 origin-left bg-gradient-to-r from-accent via-accent-secondary to-transparent"
        />
        <motion.div
          className="absolute -top-2 h-5 w-32 pointer-events-none rounded-full"
          style={{
            left: glowLeft,
            opacity: glowOpacity,
            background:
              "radial-gradient(ellipse at center, var(--color-accent) 0%, var(--color-accent-secondary) 40%, transparent 70%)",
            filter: "blur(6px)",
          }}
        />
      </div>
    </div>
  );
}
