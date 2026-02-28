"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { HiBriefcase } from "react-icons/hi";
import AnimatedSection from "./AnimatedSection";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="flex-1 h-px bg-card-border" />
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-card-border md:-translate-x-px" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative mb-12 last:mb-0 md:w-1/2 ${
                  isLeft
                    ? "md:pr-12 md:ml-0"
                    : "md:pl-12 md:ml-auto"
                } pl-8 md:pl-0`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className={`absolute top-0 w-10 h-10 rounded-full bg-card border-2 border-accent flex items-center justify-center z-10 left-0 -translate-x-1/2 md:left-auto ${
                    isLeft
                      ? "md:right-0 md:translate-x-1/2"
                      : "md:left-0 md:-translate-x-1/2"
                  }`}
                >
                  <HiBriefcase className="text-accent" size={16} />
                </motion.div>

                <AnimatedSection delay={index * 0.15}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="rounded-xl border border-card-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">
                        {exp.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-accent mt-1">{exp.company}</p>
                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-card-border">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-md bg-white/5 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatedSection>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
