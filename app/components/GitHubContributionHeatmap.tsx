"use client";

import { useMemo, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import "react-github-calendar/tooltips.css";

import type { Year } from "react-github-calendar";

/** Number of calendar years in the dropdown (current year plus prior years). */
const DROPDOWN_YEAR_COUNT = 10;

function yearRangeCaption(year: number): string {
  const now = new Date();
  const y = now.getFullYear();
  const monthLong = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    now,
  );

  if (year < y) {
    return `January–December ${year}`;
  }
  if (year === y) {
    return `January–${monthLong} ${year}`;
  }
  return `January–December ${year}`;
}

export default function GitHubContributionHeatmap({
  username,
}: {
  username: string;
}) {
  const [year, setYear] = useState<Year>("last");

  const calendarYears = useMemo(() => {
    const now = new Date().getFullYear();
    const list: number[] = [];
    const oldest = now - (DROPDOWN_YEAR_COUNT - 1);
    for (let y = now; y >= oldest; y--) {
      list.push(y);
    }
    return list;
  }, []);

  return (
    <div className="w-full space-y-4">
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-sm font-semibold text-foreground">
            Live GitHub Contribution Calendar
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            {year === "last" ? "Rolling 12 months." : yearRangeCaption(year)}
          </p>
        </div>
        <label className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-muted-foreground whitespace-nowrap">
            Year
          </span>
          <select
            value={year === "last" ? "last" : String(year)}
            onChange={(e) => {
              const v = e.target.value;
              setYear(v === "last" ? "last" : Number(v));
            }}
            className="rounded-lg border border-card-border bg-card px-3 py-2 text-sm text-foreground min-w-[10rem] focus:outline-none focus:ring-2 focus:ring-accent/40"
            aria-label="Filter contributions by year"
          >
            <option value="last">Last 12 months</option>
            {calendarYears.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="w-full overflow-x-auto pb-1">
        <div className="flex w-full min-w-0 justify-center">
          <div className="inline-flex max-w-full [&_.react-activity-calendar]:font-sans">
            <GitHubCalendar
              username={username}
              year={year}
              colorScheme="dark"
              blockSize={14}
              blockMargin={4}
              blockRadius={2}
              fontSize={12}
              showWeekdayLabels
              style={{ maxWidth: "100%" }}
              errorMessage={`Could not load contributions for ${username}. Try again later.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
