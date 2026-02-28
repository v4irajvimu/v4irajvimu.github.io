"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { getDurationString } from "@/lib/utils";
import { HiChevronUp, HiLocationMarker, HiExternalLink } from "react-icons/hi";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import CompanyLogo from "./CompanyLogo";

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
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-card-border md:-translate-x-px" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const hasPromotions = exp.roles.length > 1;

            return (
              <div
                key={index}
                className={`group/exp relative mb-12 last:mb-0 md:w-1/2 ${
                  isLeft ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
                } pl-8 md:pl-0`}
              >
                <motion.a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className={`absolute top-0 w-11 h-11 rounded-full border-2 border-accent overflow-hidden z-10 left-0 -translate-x-1/2 md:left-auto cursor-pointer transition-all duration-300 group-hover/exp:scale-120 group-hover/exp:-translate-y-1 group-hover/exp:shadow-lg group-hover/exp:shadow-accent/30 ${
                    isLeft
                      ? "md:right-0 md:translate-x-1/2"
                      : "md:left-0 md:-translate-x-1/2"
                  }`}
                >
                  <CompanyLogo src={exp.logo} alt={exp.company} />
                </motion.a>

                <AnimatedSection delay={index * 0.15}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="rounded-xl border border-card-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-1.5 text-xl font-bold text-foreground hover:text-accent transition-colors"
                      >
                        {exp.company}
                        <HiExternalLink
                          size={14}
                          className="opacity-0 group-hover/link:opacity-100 transition-opacity text-accent"
                        />
                      </a>
                      <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">
                        {getDurationString(exp.from, exp.to)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                      <HiLocationMarker
                        size={14}
                        className="text-muted shrink-0"
                      />
                      {exp.location}
                    </div>

                    <div className="relative">
                      {hasPromotions && (
                        <div className="absolute left-[7px] top-4 bottom-4 w-px bg-accent/20" />
                      )}

                      {exp.roles.map((role, roleIndex) => (
                        <div
                          key={roleIndex}
                          className="relative mb-6 last:mb-0"
                        >
                          {hasPromotions && (
                            <div className="flex items-center gap-3 mb-2">
                              <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full border border-accent/50 bg-card">
                                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                              </div>
                              {roleIndex < exp.roles.length - 1 && (
                                <HiChevronUp
                                  className="text-accent/50"
                                  size={12}
                                />
                              )}
                              <span className="text-xs font-mono text-muted-foreground">
                                {getDurationString(role.from, role.to)}
                              </span>
                            </div>
                          )}

                          <div className={hasPromotions ? "pl-7" : ""}>
                            <h4
                              className={`font-semibold text-foreground ${
                                hasPromotions ? "text-base" : "text-lg"
                              }`}
                            >
                              {role.title}
                            </h4>
                            {!hasPromotions && (
                              <span className="text-xs font-mono text-muted-foreground">
                                {getDurationString(role.from, role.to)}
                              </span>
                            )}
                            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                              {role.description}
                            </p>
                            <ul className="mt-3 space-y-1.5">
                              {role.achievements.map((achievement, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-sm text-muted-foreground"
                                >
                                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-3">
                              {role.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="text-xs px-2 py-1 rounded-md border border-accent/80 bg-white/5 text-muted-foreground transition-colors duration-200 hover:bg-accent/15 hover:text-accent hover:border-accent/80"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
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
