"use client";

interface AchievementListProps {
  items: string[];
  className?: string;
}

export default function AchievementList({ items, className = "" }: AchievementListProps) {
  return (
    <ul className={`space-y-1.5 ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}
