"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/lib/types";
import AnimatedSection from "./AnimatedSection";
import CompanyLogo from "./CompanyLogo";
import ExperienceCardHeader from "./ExperienceCardHeader";
import ExperienceRoleItem from "./ExperienceRoleItem";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience: exp, index }: ExperienceCardProps) {
  const isLeft = index % 2 === 0;
  const hasPromotions = exp.roles.length > 1;

  return (
    <div
      className={`group/exp relative mb-12 last:mb-0 flex flex-col items-center pt-14 md:pt-0 md:w-1/2 md:items-start ${
        isLeft ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
      } pl-0 pr-0 md:pl-0`}
    >
      <motion.a
        href={exp.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1.3 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring" }}
        className={`absolute top-0 w-11 h-11 rounded-full border-2 border-accent overflow-hidden z-10 left-1/2 -translate-x-1/2 md:left-auto cursor-pointer transition-all duration-300 group-hover/exp:scale-120 group-hover/exp:-translate-y-1 group-hover/exp:shadow-lg group-hover/exp:shadow-accent/30 ${
          isLeft
            ? "md:right-0 md:translate-x-1/2"
            : "md:left-[-4.375rem] md:translate-x-[-4.375rem]"
        }`}
      >
        <CompanyLogo src={exp.logo} alt={exp.company} />
      </motion.a>

      <AnimatedSection delay={index * 0.15}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="w-full rounded-xl border border-card-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
        >
          <ExperienceCardHeader
            company={exp.company}
            url={exp.url}
            from={exp.from}
            to={exp.to}
            location={exp.location}
          />

          <div className="relative">
            {hasPromotions && (
              <div className="absolute left-[7px] top-4 bottom-4 w-px bg-accent/20" />
            )}

            {exp.roles.map((role, roleIndex) => (
              <ExperienceRoleItem
                key={roleIndex}
                role={role}
                hasPromotions={hasPromotions}
                isLast={roleIndex === exp.roles.length - 1}
              />
            ))}
          </div>
        </motion.div>
      </AnimatedSection>
    </div>
  );
}
