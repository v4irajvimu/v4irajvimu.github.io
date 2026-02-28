"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { HiArrowDown } from "react-icons/hi";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personalInfo.tagline[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % personalInfo.tagline.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1),
          );
        },
        isDeleting ? 40 : 80,
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[128px] animate-pulse-glow [animation-delay:1.5s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[128px] animate-pulse-glow [animation-delay:3s]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for opportunities
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">
            {personalInfo.name.split(" ")[0]}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 h-10 sm:h-12"
        >
          <span className="text-xl sm:text-2xl text-muted-foreground font-mono">
            {displayText}
            <span className="animate-pulse text-accent">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed"
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25"
          >
            View My Work
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-card-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-white/5 hover:border-muted"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted cursor-pointer"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <HiArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
