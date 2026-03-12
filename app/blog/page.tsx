import Link from "next/link";
import { blogPosts } from "@/lib/data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";

export const metadata = {
  title: "Blog | Vimukthi Jayasinghe",
  description:
    "Latest articles and posts about React, JavaScript, TypeScript, and web development.",
};

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Navbar />
      <main id="main" role="main" className="min-h-screen pt-20">
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
                All <span className="gradient-text">Blog Posts</span>
              </h1>
              <p className="text-muted-foreground mt-2">
                Articles and guides on frontend development, React, and more.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sortedPosts.map((post, index) => (
                <BlogCard key={post.title} post={post} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
