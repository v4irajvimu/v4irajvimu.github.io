"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks, personalInfo } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks
        .filter((link) => link.href.startsWith("#"))
        .map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleClick = (href: string) => {
    setIsMobileOpen(false);
    if (href.startsWith("/")) return;
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (link: (typeof navLinks)[0]) => {
    if (link.href.startsWith("/")) return pathname === link.href;
    return activeSection === link.href.replace("#", "");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[rgba(17,17,25,0.8)] backdrop-blur-[12px] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Home"
            onClick={(e) => {
              if (pathname !== "/") {
                e.preventDefault();
                router.push("/");
              } else {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="block"
            >
              <Image
              src="/images/vimukthi-jayasinghe-logo.png"
              alt={`${personalInfo.name} logo`}
              width={80}
              height={80}
              className="rounded-full drop-shadow-[0_0_14px_rgba(6,182,212,0.5)] hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.7)] transition-all duration-300"
            />
            </motion.span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                    isActive(link)
                      ? "text-accent bg-accent/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ) : pathname === "/" ? (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                    isActive(link)
                      ? "text-accent bg-accent/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={`/${link.href}`}
                  className={`px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                    isActive(link)
                      ? "text-accent bg-accent/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {isScrolled && (
        <div className="relative h-px w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent-secondary to-accent" />
          <div className="absolute -inset-y-1 inset-x-0 bg-gradient-to-r from-accent/50 via-accent-secondary/30 to-accent/50 blur-sm" />
        </div>
      )}

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-card-border"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link, i) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                      isActive(link)
                        ? "text-accent bg-accent/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : pathname === "/" ? (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleClick(link.href)}
                    className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                      isActive(link)
                        ? "text-accent bg-accent/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ) : (
                  <Link
                    key={link.href}
                    href={`/${link.href}`}
                    onClick={() => setIsMobileOpen(false)}
                    className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                      isActive(link)
                        ? "text-accent bg-accent/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
