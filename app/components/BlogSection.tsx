"use client";

import Link from "next/link";
import { blogPosts } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import BlogCard from "./BlogCard";
import { HiArrowRight } from "react-icons/hi";
import SectionGradientBg from "./SectionGradientBg";

const LATEST_POSTS_COUNT = 3;

export default function BlogSection() {
  const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, LATEST_POSTS_COUNT);

  return (
    <section id="blog" className="relative py-24 px-4 overflow-hidden">
      <SectionGradientBg />
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading>
            Blog <span className="gradient-text">Posts</span>
          </SectionHeading>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {latestPosts.map((post, index) => (
            <AnimatedSection key={post.title} delay={index * 0.1}>
              <BlogCard post={post} index={index} />
            </AnimatedSection>
          ))}
        </div>

        {blogPosts.length > LATEST_POSTS_COUNT && (
          <AnimatedSection delay={0.3}>
            <div className="mt-10 flex justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/5 px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent/10 hover:border-accent/50"
              >
                See more posts
                <HiArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
