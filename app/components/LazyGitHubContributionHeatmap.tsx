"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const DynamicGitHubContributionHeatmap = dynamic(
  () => import("./GitHubContributionHeatmap"),
  { ssr: false, loading: () => <HeatmapSkeleton /> },
);

/** Max wait before idle fallback runs (see requestIdleCallback timeout). */
const IDLE_TIMEOUT_MS = 3500;

/** Start loading slightly before the block is visible. */
const ROOT_MARGIN = "200px 0px";

function HeatmapSkeleton() {
  return (
    <div
      className="w-full min-h-[200px] rounded-lg bg-card-border/40 animate-pulse"
      aria-hidden
    />
  );
}

export default function LazyGitHubContributionHeatmap({
  username,
}: {
  username: string;
}) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);
  const activatedRef = useRef(false);

  useEffect(() => {
    if (load) return;

    const activate = () => {
      if (activatedRef.current) return;
      activatedRef.current = true;
      setLoad(true);
    };

    const el = sentinelRef.current;
    const observer =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            (entries) => {
              if (entries.some((e) => e.isIntersecting)) activate();
            },
            { root: null, rootMargin: ROOT_MARGIN, threshold: 0 },
          )
        : null;

    if (el && observer) observer.observe(el);

    let idleId: ReturnType<typeof requestIdleCallback> | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if (typeof requestIdleCallback !== "undefined") {
      idleId = requestIdleCallback(() => activate(), {
        timeout: IDLE_TIMEOUT_MS,
      });
    } else {
      timeoutId = setTimeout(() => activate(), IDLE_TIMEOUT_MS);
    }

    return () => {
      observer?.disconnect();
      if (idleId !== undefined && typeof cancelIdleCallback !== "undefined") {
        cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, [load]);

  return (
    <div ref={sentinelRef} className="w-full">
      {!load ? (
        <HeatmapSkeleton />
      ) : (
        <DynamicGitHubContributionHeatmap username={username} />
      )}
    </div>
  );
}
