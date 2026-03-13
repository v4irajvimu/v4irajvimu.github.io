"use client";

import { experiences } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading className="mb-16">
            Work <span className="gradient-text">Experience</span>
          </SectionHeading>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-card-border -translate-x-px" />

          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
