"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/lib/data";
import { HiArrowRight, HiClock, HiCalendar } from "react-icons/hi";
import { SiMedium, SiDevdotto } from "react-icons/si";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const platformIcon: Record<string, typeof SiMedium> = {
  Medium: SiMedium,
  "Dev.to": SiDevdotto,
};

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading>
            Latest <span className="gradient-text">Blog Posts</span>
          </SectionHeading>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, index) => {
            const PlatformIcon = platformIcon[post.platform];

            return (
              <AnimatedSection key={post.title} delay={index * 0.1}>
                <motion.a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  className="group flex flex-col h-full rounded-xl border border-card-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
                >
                  <div className="flex items-center gap-2 mb-4">
                    {PlatformIcon && (
                      <PlatformIcon
                        size={18}
                        className="text-muted-foreground"
                      />
                    )}
                    <span className="text-xs text-muted-foreground">
                      {post.platform}
                    </span>
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
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
