import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
// import ProjectsSection from "./components/ProjectsSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import {
  ExperienceSectionPlaceholder,
  TestimonialsSectionPlaceholder,
} from "./components/DeferredSectionPlaceholders";

const ExperienceSection = dynamic(
  () => import("./components/ExperienceSection"),
  { loading: () => <ExperienceSectionPlaceholder /> },
);

const TestimonialsSection = dynamic(
  () => import("./components/TestimonialsSection"),
  { loading: () => <TestimonialsSectionPlaceholder /> },
);

const CollaborationsSection = dynamic(
  () => import("./components/CollaborationsSection"),
  { loading: () => <CollaborationsSectionPlaceholder /> },
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" role="main">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <BlogSection />
        <ExperienceSection />
        {/* <ProjectsSection /> */}
        <TestimonialsSection />
        <CollaborationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
