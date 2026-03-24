import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
// import ProjectsSection from "./components/ProjectsSection";
import BlogSection from "./components/BlogSection";
import CollaborationsSection from "./components/CollaborationsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

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
