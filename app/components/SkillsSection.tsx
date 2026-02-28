"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiSvelte,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSass,
  SiMui,
  SiBootstrap,
  SiRedux,
  SiJquery,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiDotnet,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiFlutter,
  SiDart,
  SiWebpack,
  SiBabel,
  SiFigma,
  SiAdobephotoshop,
  SiAdobexd,
  SiPhp,
  SiMobx,
  SiOpenai,
  SiAnthropic,
  SiGooglegemini,
  SiOllama,
  SiLangchain,
  SiClaude,
  SiGithubcopilot,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { HiCursorClick } from "react-icons/hi";
import { IconType } from "react-icons";
import AnimatedSection from "./AnimatedSection";

const iconMap: Record<string, IconType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  vue: SiVuedotjs,
  nuxt: SiNuxtdotjs,
  svelte: SiSvelte,
  typescript: SiTypescript,
  javascript: SiJavascript,
  html: SiHtml5,
  css: SiCss3,
  tailwind: SiTailwindcss,
  sass: SiSass,
  mui: SiMui,
  bootstrap: SiBootstrap,
  redux: SiRedux,
  jquery: SiJquery,
  nodejs: SiNodedotjs,
  express: SiExpress,
  graphql: SiGraphql,
  dotnet: SiDotnet,
  laravel: SiLaravel,
  mongodb: SiMongodb,
  mysql: SiMysql,
  firebase: SiFirebase,
  flutter: SiFlutter,
  dart: SiDart,
  webpack: SiWebpack,
  babel: SiBabel,
  figma: SiFigma,
  photoshop: SiAdobephotoshop,
  xd: SiAdobexd,
  csharp: TbBrandCSharp,
  php: SiPhp,
  mobx: SiMobx,
  openai: SiOpenai,
  anthropic: SiAnthropic,
  google: SiGooglegemini,
  ollama: SiOllama,
  langchain: SiLangchain,
  cursor: HiCursorClick,
  claude: SiClaude,
  copilot: SiGithubcopilot,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading>
            Tech <span className="gradient-text">Stack</span>
          </SectionHeading>
        </AnimatedSection>

        <div className="space-y-10">
          {skillCategories.map((category, catIndex) => (
            <AnimatedSection key={category.title} delay={catIndex * 0.1}>
              <h3 className="text-lg font-semibold text-muted-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = iconMap[skill.icon];
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: skillIndex * 0.05,
                        duration: 0.3,
                      }}
                      whileHover={{ scale: 1.08, y: -4 }}
                      className="group flex items-center gap-2.5 rounded-xl border border-card-border bg-card px-4 py-3 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
                    >
                      {Icon && (
                        <Icon
                          size={18}
                          className="text-muted-foreground transition-colors group-hover:text-accent"
                        />
                      )}
                      <span className="text-sm text-foreground">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
