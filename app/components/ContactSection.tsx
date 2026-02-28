"use client";

import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/lib/data";
import {
  HiMail,
  HiLocationMarker,
  HiExternalLink,
} from "react-icons/hi";
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiMedium,
  SiDevdotto,
  SiStackoverflow,
  SiCodepen,
  SiFacebook,
} from "react-icons/si";
import { IconType } from "react-icons";
import AnimatedSection from "./AnimatedSection";

const socialIconMap: Record<string, IconType> = {
  github: SiGithub,
  linkedin: SiLinkedin,
  twitter: SiX,
  medium: SiMedium,
  devto: SiDevdotto,
  stackoverflow: SiStackoverflow,
  codepen: SiCodepen,
  facebook: SiFacebook,
};

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <div className="flex-1 h-px bg-card-border" />
          </div>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-2">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of something great. Feel free to
                reach out!
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 rounded-xl border border-card-border bg-card p-4 transition-all hover:border-accent/30 hover:shadow-lg group"
                >
                  <div className="rounded-lg bg-accent/10 p-3 text-accent">
                    <HiMail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-foreground group-hover:text-accent transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                  <HiExternalLink
                    size={16}
                    className="ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>

                <div className="flex items-center gap-4 rounded-xl border border-card-border bg-card p-4">
                  <div className="rounded-lg bg-accent/10 p-3 text-accent">
                    <HiLocationMarker size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-foreground">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="rounded-xl border border-card-border bg-card p-6">
              <h3 className="text-lg font-semibold mb-6">Connect with me</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => {
                  const Icon = socialIconMap[social.icon];
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-3 rounded-lg border border-card-border p-3 transition-all hover:border-accent/30 hover:bg-accent/5 group"
                    >
                      {Icon && (
                        <Icon
                          size={20}
                          className="text-muted-foreground group-hover:text-accent transition-colors"
                        />
                      )}
                      <span className="text-sm text-foreground">
                        {social.name}
                      </span>
                    </motion.a>
                  );
                })}
              </div>

              <div className="mt-6 pt-6 border-t border-card-border">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25"
                >
                  <HiMail size={18} />
                  Send me an email
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
