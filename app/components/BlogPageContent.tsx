"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { HiSearch, HiSortDescending } from "react-icons/hi";
import { blogPosts } from "@/lib/data";
import BlogCard from "./BlogCard";
import type { BlogPost } from "@/lib/types";

const SORT_OPTIONS = [
  { value: "date-desc", label: "Newest first" },
  { value: "date-asc", label: "Oldest first" },
  { value: "title-asc", label: "Title A–Z" },
  { value: "title-desc", label: "Title Z–A" },
] as const;

type SortValue = (typeof SORT_OPTIONS)[number]["value"];

function sortPosts(posts: BlogPost[], sort: SortValue): BlogPost[] {
  const copy = [...posts];
  switch (sort) {
    case "date-desc":
      return copy.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );
    case "date-asc":
      return copy.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    case "title-asc":
      return copy.sort((a, b) =>
        a.title.localeCompare(b.title, undefined, { sensitivity: "base" }),
      );
    case "title-desc":
      return copy.sort((a, b) =>
        b.title.localeCompare(a.title, undefined, { sensitivity: "base" }),
      );
    default:
      return copy;
  }
}

function filterPosts(posts: BlogPost[], query: string): BlogPost[] {
  if (!query.trim()) return posts;
  const q = query.trim().toLowerCase();
  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      (post.platform && post.platform.toLowerCase().includes(q)),
  );
}

export default function BlogPageContent() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortValue>("date-desc");

  const filteredAndSorted = useMemo(() => {
    const filtered = filterPosts(blogPosts, search);
    return sortPosts(filtered, sort);
  }, [search, sort]);

  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-6"
          >
            ← Back to home
          </Link>
          <h1 className="text-4xl font-bold tracking-tight">
            Blog <span className="gradient-text">Posts</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Thoughts, experiments, and deep dives into modern software
            engineering practices.
          </p>
        </div>

        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <HiSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={20}
              aria-hidden
            />
            <input
              type="search"
              placeholder="Search by title, excerpt, or platform..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-card-border bg-card py-2.5 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              aria-label="Search blog posts"
            />
          </div>
          <div className="flex items-center gap-2">
            <HiSortDescending
              size={20}
              className="text-muted-foreground shrink-0"
              aria-hidden
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortValue)}
              className="rounded-lg border border-card-border bg-card px-4 py-2.5 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              aria-label="Sort blog posts"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredAndSorted.length === 0 ? (
          <p className="rounded-xl border border-card-border bg-card p-8 text-center text-muted-foreground">
            No posts match your search. Try a different term or clear the
            search.
          </p>
        ) : (
          <>
            <p className="text-sm text-muted-foreground mb-6">
              Showing {filteredAndSorted.length} post
              {filteredAndSorted.length !== 1 ? "s" : ""}
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredAndSorted.map((post, index) => (
                <BlogCard key={post.title} post={post} index={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
