"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

export default function SectionHeading({
  children,
  className = "mb-12",
}: SectionHeadingProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <h2 className="text-3xl font-bold sm:text-4xl">{children}</h2>
      <div className="relative flex-1 h-px">
        <div className="absolute inset-0 bg-card-border" />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="absolute inset-0 origin-left bg-gradient-to-r from-accent via-accent-secondary to-transparent"
        />
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="absolute -inset-y-1 inset-x-0 origin-left bg-gradient-to-r from-accent/50 via-accent-secondary/30 to-transparent blur-sm"
        />
      </div>
    </div>
  );
}
