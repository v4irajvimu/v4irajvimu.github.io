"use client";

import { personalInfo, socialLinks } from "@/lib/data";
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

export default function Footer() {
  return (
    <footer className="border-t border-card-border py-8 px-4">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; 2023-{new Date().getFullYear()} {personalInfo.name}. All rights
          reserved.
        </p>

        <p className="text-sm text-muted-foreground">
          Built with Next.js + Tailwind CSS
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.slice(0, 5).map((social) => {
            const Icon = socialIconMap[social.icon];
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label={social.name}
              >
                {Icon && <Icon size={16} />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
