"use client";

import { HiChevronUp } from "react-icons/hi";
import { getDurationString } from "@/lib/utils";
import type { ExperienceRole } from "@/lib/types";
import AchievementList from "./AchievementList";
import TechTagList from "./TechTagList";

interface ExperienceRoleItemProps {
  role: ExperienceRole;
  hasPromotions: boolean;
  isLast: boolean;
}

export default function ExperienceRoleItem({
  role,
  hasPromotions,
  isLast,
}: ExperienceRoleItemProps) {
  return (
    <div className="relative mb-6 last:mb-0">
      {hasPromotions && (
        <div className="flex items-center gap-3 mb-2">
          <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full border border-accent/50 bg-card">
            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
          </div>
          {!isLast && <HiChevronUp className="text-accent/50" size={12} />}
          <span className="text-xs font-mono text-muted-foreground">
            {getDurationString(role.from, role.to)}
          </span>
        </div>
      )}

      <div className={hasPromotions ? "pl-7" : ""}>
        <h4
          className={`font-semibold text-foreground ${
            hasPromotions ? "text-base" : "text-lg"
          }`}
        >
          {role.title}
        </h4>
        {!hasPromotions && (
          <span className="text-xs font-mono text-muted-foreground">
            {getDurationString(role.from, role.to)}
          </span>
        )}
        <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
          {role.description}
        </p>
        <AchievementList items={role.achievements} className="mt-3" />
        <TechTagList technologies={role.technologies} className="mt-3" />
      </div>
    </div>
  );
}
