"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { HiExternalLink, HiCode } from "react-icons/hi";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading>
            Featured <span className="gradient-text">Projects</span>
          </SectionHeading>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group h-full rounded-xl border border-card-border bg-card overflow-hidden transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
              >
                <div className="relative h-48 bg-gradient-to-br from-accent/20 to-accent-secondary/20 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl font-bold text-white/10 select-none group-hover:scale-110 transition-transform duration-500">
                    {project.title
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-6 pt-4 border-t border-card-border">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        <HiExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        <HiCode size={16} />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
