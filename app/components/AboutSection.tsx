"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import {
  HiLocationMarker,
  HiAcademicCap,
  HiMail,
  HiLightningBolt,
} from "react-icons/hi";
import AnimatedSection from "./AnimatedSection";

const facts = [
  {
    icon: HiLocationMarker,
    label: "Location",
    value: personalInfo.location,
  },
  {
    icon: HiAcademicCap,
    label: "Education",
    value: personalInfo.education,
  },
  {
    icon: HiMail,
    label: "Email",
    value: personalInfo.email,
  },
  {
    icon: HiLightningBolt,
    label: "Learning",
    value: personalInfo.learning.join(", "),
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="flex-1 h-px bg-card-border" />
          </div>
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-5">
          <AnimatedSection className="lg:col-span-2" delay={0.1}>
            <div className="relative group">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent to-accent-secondary p-[2px]">
                <div className="h-full w-full rounded-2xl bg-card overflow-hidden">
                  <Image
                    src="/images/vimukthi-jayasinghe-senior-software-engineer.webp"
                    alt={`${personalInfo.name} - ${personalInfo.title}`}
                    width={800}
                    height={800}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent to-accent-secondary opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20" />
            </div>
          </AnimatedSection>

          <div className="lg:col-span-3 space-y-6">
            <AnimatedSection delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                With a mastery of{" "}
                <span className="text-foreground font-medium">JavaScript</span>,{" "}
                <span className="text-foreground font-medium">TypeScript</span>,
                and{" "}
                <span className="text-foreground font-medium">Python</span>, I
                build performant, accessible solutions using{" "}
                <span className="text-foreground font-medium">React</span> and{" "}
                <span className="text-foreground font-medium">Next.js</span> on
                the frontend and{" "}
                <span className="text-foreground font-medium">Node.js</span> with{" "}
                <span className="text-foreground font-medium">AWS Serverless</span>{" "}
                (<span className="text-foreground font-medium">Lambda</span>,{" "}
                <span className="text-foreground font-medium">DynamoDB</span>) on
                the backend. I am passionate about clean code and high-end UX,
                specialized in integrating{" "}
                <span className="text-foreground font-medium">Generative AI</span>{" "}
                and{" "}
                <span className="text-foreground font-medium">LLMs</span> to move
                beyond traditional development into the next generation of
                intelligent, cloud-native applications.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {facts.map((fact, i) => (
                <AnimatedSection key={fact.label} delay={0.3 + i * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-3 rounded-xl border border-card-border bg-card p-4 transition-colors hover:border-accent/30"
                  >
                    <div className="rounded-lg bg-accent/10 p-2 text-accent">
                      <fact.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider">
                        {fact.label}
                      </p>
                      <p className="text-sm text-foreground mt-1">
                        {fact.value}
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
