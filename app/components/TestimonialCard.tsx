"use client";

import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
import type { LinkedInRecommendation } from "@/lib/types";
import RecommendationAvatar from "./RecommendationAvatar";

const DEFAULT_MIN_HEIGHT = 340;

interface TestimonialCardProps {
  rec: LinkedInRecommendation;
  onSelect: () => void;
  minHeight?: number;
}

export default function TestimonialCard({
  rec,
  onSelect,
  minHeight = DEFAULT_MIN_HEIGHT,
}: TestimonialCardProps) {
  return (
    <motion.div
      className="h-full flex flex-col group"
      style={{ height: minHeight }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={onSelect}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect();
          }
        }}
        className="h-full flex flex-col text-left rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.08] group-hover:shadow-xl group-hover:shadow-accent/10 cursor-pointer"
      >
        <div className="flex items-start gap-4 mb-4 flex-shrink-0">
          <div className="flex-shrink-0 ring-2 ring-white/20 rounded-full overflow-hidden">
            <RecommendationAvatar
              name={rec.name}
              localSrc={rec.profilePhotoLocal}
              remoteSrc={rec.profilePhoto}
              width={56}
              height={56}
              className="h-14 w-14 object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-foreground truncate">
              {rec.name}
            </p>
            <p className="text-xs text-muted-foreground line-clamp-2">
              {rec.role}
              {rec.company ? ` at ${rec.company}` : ""}
            </p>
            {(rec.date || rec.connectionDegree || rec.relationship) && (
              <div className="mt-1 space-y-0.5">
                {(rec.date || rec.connectionDegree) && (
                  <p className="text-[11px] text-muted-foreground/80 truncate">
                    {[rec.date, rec.connectionDegree && `${rec.connectionDegree} connection`]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                )}
                {rec.relationship && (
                  <p className="text-[11px] text-muted-foreground/80 truncate">
                    {rec.relationship}
                  </p>
                )}
              </div>
            )}
          </div>
          <a
            href={rec.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-shrink-0 p-2 rounded-lg text-[#0A66C2] bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 transition-colors"
            aria-label={`View ${rec.name}'s recommendation on LinkedIn`}
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>

        <blockquote className="text-sm text-muted-foreground leading-relaxed italic line-clamp-5 flex-1 min-h-0 mt-0 whitespace-pre-line">
          &ldquo;{rec.content}&rdquo;
        </blockquote>

        <p className="text-xs text-accent/90 mt-3 flex-shrink-0">
          Click to read full recommendation
        </p>
      </div>
    </motion.div>
  );
}
