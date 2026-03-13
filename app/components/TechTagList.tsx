"use client";

interface TechTagListProps {
  technologies: string[];
  className?: string;
}

const tagClassName =
  "text-xs px-2 py-1 rounded-md border border-accent/80 bg-white/5 text-muted-foreground transition-colors duration-200 hover:bg-accent/15 hover:text-accent hover:border-accent/80";

export default function TechTagList({ technologies, className = "" }: TechTagListProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {technologies.map((tech) => (
        <span key={tech} className={tagClassName}>
          {tech}
        </span>
      ))}
    </div>
  );
}
