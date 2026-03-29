"use client";

import { useMemo, useState } from "react";

function initialsFromName(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]!.toUpperCase())
    .join("");
}

interface RecommendationAvatarProps {
  name: string;
  /** Prefer a file under `/public` when LinkedIn CDN URLs expire. */
  localSrc?: string;
  remoteSrc: string;
  width: number;
  height: number;
  className?: string;
}

/**
 * LinkedIn profile photo URLs expire (`403 deny-expired-url`). Prefer
 * `localSrc` for stable assets; otherwise we fall back to initials when the
 * remote image fails.
 */
export default function RecommendationAvatar({
  name,
  localSrc,
  remoteSrc,
  width,
  height,
  className = "object-cover",
}: RecommendationAvatarProps) {
  const [phase, setPhase] = useState<"local" | "remote" | "fallback">(
    localSrc ? "local" : "remote",
  );

  const src = useMemo(() => {
    if (phase === "local" && localSrc) return localSrc;
    if (phase === "remote") return remoteSrc;
    return null;
  }, [phase, localSrc, remoteSrc]);

  if (phase === "fallback" || !src) {
    const fs = Math.max(12, Math.round(width * 0.28));
    return (
      <div
        className={`flex shrink-0 items-center justify-center rounded-full bg-accent/20 font-semibold text-accent ${className}`}
        style={{ width, height, fontSize: fs }}
        aria-hidden
      >
        {initialsFromName(name)}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- remote CDN + optional static file
    <img
      src={src}
      alt={name}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => {
        if (phase === "local" && localSrc) {
          setPhase("remote");
        } else {
          setPhase("fallback");
        }
      }}
    />
  );
}
