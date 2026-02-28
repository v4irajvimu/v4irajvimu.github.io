import { DateFrom, DateTo } from "./types";

const MONTH_NAMES = [
  "", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export function getDurationString(from: DateFrom, to: DateTo): string {
  const fromDate = new Date(from.year, from.month - 1);
  const toDate = to.isPresent ? new Date() : new Date(to.year, to.month - 1);

  const diffMonths =
    (toDate.getFullYear() - fromDate.getFullYear()) * 12 +
    (toDate.getMonth() - fromDate.getMonth()) +
    1;

  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;

  const range = `${MONTH_NAMES[from.month]} ${from.year} - ${
    to.isPresent
      ? "Present"
      : `${MONTH_NAMES[to.month]} ${to.year}`
  }`;

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} yr`);
  if (months > 0) parts.push(`${months} mo`);

  return `${range} · ${parts.join(" ")}`;
}
