"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiLinkedin } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay } from "swiper/modules";
import { linkedInRecommendations } from "@/lib/data";
import type { LinkedInRecommendation } from "@/lib/types";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import TestimonialCard from "./TestimonialCard";
import SectionGradientBg from "./SectionGradientBg";
import "swiper/css";

const CARD_MIN_HEIGHT = 340;

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
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
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
          className="w-full max-w-lg rounded-2xl border border-white/10 bg-card backdrop-blur-xl shadow-2xl overflow-hidden"
        >
          <div className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 ring-2 ring-white/20 rounded-full overflow-hidden">
                <img
                  src={rec.profilePhoto}
                  alt={rec.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3
                  id="recommendation-title"
                  className="text-lg font-semibold text-foreground"
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
                <SiLinkedin className="w-7 h-7" />
              </a>
            </div>

            <blockquote className="text-muted-foreground leading-relaxed italic">
              &ldquo;{rec.content}&rdquo;
            </blockquote>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <a
                href={rec.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
              >
                <SiLinkedin className="w-4 h-4" />
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

        <Swiper
          className="w-full"
          modules={[Mousewheel, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
          grabCursor
          loop
          speed={400}
          mousewheel={{ enabled: true, forceToAxis: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          {linkedInRecommendations.map((rec) => (
            <SwiperSlide key={rec.id} style={{ height: CARD_MIN_HEIGHT }}>
              <TestimonialCard
                rec={rec}
                onSelect={() => openDetail(rec)}
                minHeight={CARD_MIN_HEIGHT}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Auto-slides · Scroll, swipe or drag to see more · View all on{" "}
          <a
            href="https://www.linkedin.com/in/virajvimu/details/recommendations/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline inline-flex items-center gap-1"
          >
            <SiLinkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </p>
      </div>

      {selectedRec && <DetailModal rec={selectedRec} onClose={closeDetail} />}
    </section>
  );
}
