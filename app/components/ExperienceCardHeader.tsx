"use client";

import { HiLocationMarker, HiExternalLink } from "react-icons/hi";
import { getDurationString } from "@/lib/utils";
import type { DateFrom, DateTo } from "@/lib/types";

interface ExperienceCardHeaderProps {
  company: string;
  url: string;
  from: DateFrom;
  to: DateTo;
  location: string;
}

export default function ExperienceCardHeader({
  company,
  url,
  from,
  to,
  location,
}: ExperienceCardHeaderProps) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link flex items-center gap-1.5 text-xl font-bold text-foreground hover:text-accent transition-colors"
        >
          {company}
          <HiExternalLink
            size={14}
            className="opacity-0 group-hover/link:opacity-100 transition-opacity text-accent"
          />
        </a>
        <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">
          {getDurationString(from, to)}
        </span>
      </div>
      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
        <HiLocationMarker size={14} className="text-muted shrink-0" />
        {location}
      </div>
    </>
  );
}
