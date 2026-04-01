import dynamic from "next/dynamic";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SkillsSection from "./components/SkillsSection";
// import ProjectsSection from "./components/ProjectsSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import {
  CollaborationsSectionPlaceholder,
  ExperienceSectionPlaceholder,
  TestimonialsSectionPlaceholder,
} from "./components/DeferredSectionPlaceholders";
import Footer from "./components/Footer";

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
