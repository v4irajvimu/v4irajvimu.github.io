import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogPageContent from "../components/BlogPageContent";

export const metadata = {
  title: "Blog | Vimukthi Jayasinghe",
  description:
    "Latest articles and posts about React, JavaScript, TypeScript, and web development.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main id="main" role="main" className="min-h-screen pt-20">
        <BlogPageContent />
      </main>
      <Footer />
    </>
  );
}
