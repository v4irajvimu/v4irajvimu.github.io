"use client";

import dynamic from "next/dynamic";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
import type { LinkedInRecommendation } from "@/lib/types";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import SectionGradientBg from "./SectionGradientBg";
import RecommendationAvatar from "./RecommendationAvatar";

const TestimonialsCarousel = dynamic(
  () => import("./TestimonialsCarousel"),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-[340px] w-full rounded-xl border border-card-border bg-card/30 animate-pulse"
        aria-hidden
      />
    ),
  },
);

function DetailModal({
  rec,
  onClose,
}: {
  rec: LinkedInRecommendation;
  onClose: () => void;
}) {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-start sm:items-center justify-center overflow-y-auto p-4 pt-6 pb-8 sm:py-4 bg-black/60 backdrop-blur-sm"
        onClick={handleBackdropClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="recommendation-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-lg max-h-[90dvh] sm:max-h-[85vh] rounded-2xl border border-white/10 bg-card backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col"
        >
          <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain">
            <div className="p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <div className="flex-shrink-0 ring-2 ring-white/20 rounded-full overflow-hidden">
                  <RecommendationAvatar
                    name={rec.name}
                    localSrc={rec.profilePhotoLocal}
                    remoteSrc={rec.profilePhoto}
                    width={64}
                    height={64}
                    className="h-14 w-14 sm:h-16 sm:w-16 object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3
                    id="recommendation-title"
                    className="text-base sm:text-lg font-semibold text-foreground"
                  >
                    {rec.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {rec.role}
                    {rec.company ? ` at ${rec.company}` : ""}
                  </p>
                  {(rec.date || rec.connectionDegree || rec.relationship) && (
                    <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-muted-foreground">
                      {rec.date && <span>{rec.date}</span>}
                      {rec.connectionDegree && (
                        <span>
                          {rec.connectionDegree === "1st"
                            ? "1st degree connection"
                            : `${rec.connectionDegree} connection`}
                        </span>
                      )}
                      {rec.relationship && (
                        <span className="block w-full mt-0.5">
                          {rec.relationship}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <a
                  href={rec.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 p-2 rounded-lg text-[#0A66C2] bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 transition-colors"
                  aria-label={`View ${rec.name}'s recommendation on LinkedIn`}
                >
                  <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7" />
                </a>
              </div>

              <blockquote className="text-sm sm:text-base text-muted-foreground leading-relaxed italic whitespace-pre-line">
                &ldquo;{rec.content}&rdquo;
              </blockquote>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={rec.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
                >
                  <FaLinkedin className="w-4 h-4" />
                  View on LinkedIn
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium rounded-lg border border-card-border bg-white/5 hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function TestimonialsSection() {
  const [selectedRec, setSelectedRec] = useState<LinkedInRecommendation | null>(
    null,
  );
  const openDetail = useCallback(
    (rec: LinkedInRecommendation) => setSelectedRec(rec),
    [],
  );
  const closeDetail = useCallback(() => setSelectedRec(null), []);

  return (
    <section
      id="testimonials"
      className="relative py-24 px-4 overflow-hidden"
      aria-label="LinkedIn Recommendations"
    >
      <SectionGradientBg />

      <div className="mx-auto max-w-6xl relative">
        <AnimatedSection>
          <SectionHeading>
            What People <span className="gradient-text">Say</span>
          </SectionHeading>
        </AnimatedSection>

        <TestimonialsCarousel onSelect={openDetail} />

        <p className="text-center text-sm text-muted-foreground mt-6">
          Auto-plays when in view · Scroll, swipe or drag · View all on{" "}
          <a
            href="https://www.linkedin.com/in/virajvimu/details/recommendations/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline inline-flex items-center gap-1"
          >
            <FaLinkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </p>
      </div>

      {selectedRec && <DetailModal rec={selectedRec} onClose={closeDetail} />}
    </section>
  );
}
