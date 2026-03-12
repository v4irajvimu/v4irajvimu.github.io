"use client";

import { motion } from "framer-motion";
import { HiArrowRight, HiClock, HiCalendar } from "react-icons/hi";
import { SiMedium, SiDevdotto } from "react-icons/si";
import type { BlogPost } from "@/lib/types";

const platformIcon: Record<string, typeof SiMedium> = {
  Medium: SiMedium,
  "Dev.to": SiDevdotto,
};

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const PlatformIcon = platformIcon[post.platform];

  return (
    <motion.a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col h-full rounded-xl border border-card-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
    >
      <div className="flex items-center gap-2 mb-4">
        {PlatformIcon && (
          <PlatformIcon size={18} className="text-muted-foreground" />
        )}
        <span className="text-xs text-muted-foreground">{post.platform}</span>
      </div>

      <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors leading-snug">
        {post.title}
      </h3>
      <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-card-border">
        <div className="flex items-center gap-4 text-xs text-muted">
          <span className="flex items-center gap-1">
            <HiCalendar size={14} />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1">
            <HiClock size={14} />
            {post.readTime}
          </span>
        </div>
        <HiArrowRight
          size={16}
          className="text-muted-foreground transition-all group-hover:text-accent group-hover:translate-x-1"
        />
      </div>
    </motion.a>
  );
}
