import { personalInfo, socialLinks } from "@/lib/data";
import { FaLinkedin } from "react-icons/fa6";
import {
  SiGithub,
  SiX,
  SiMedium,
  SiDevdotto,
  SiStackoverflow,
  SiCodepen,
  SiFacebook,
} from "react-icons/si";
import { IconType } from "react-icons";
import packageJson from "../../package.json";

const socialIconMap: Record<string, IconType> = {
  github: SiGithub,
  linkedin: FaLinkedin,
  twitter: SiX,
  medium: SiMedium,
  devto: SiDevdotto,
  stackoverflow: SiStackoverflow,
  codepen: SiCodepen,
  facebook: SiFacebook,
};

export default function Footer() {
  const builtAt = new Date();
  const lastUpdatedLabel = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Colombo",
  }).format(builtAt);

  return (
    <footer className="border-t border-card-border py-8 px-4">
      <div className="mx-auto max-w-6xl flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2023-{builtAt.getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>

          <p className="text-sm text-muted-foreground text-center sm:text-right">
            <span className="block sm:inline">
              Built with Next.js + Tailwind CSS (<b>v{packageJson.version}</b>)
            </span>
            <span className="hidden sm:inline"> · </span>
            <span className="block sm:inline">
              <time dateTime={builtAt.toISOString()} title="Site build time (Asia/Colombo)">
                Last updated {lastUpdatedLabel}
              </time>
            </span>
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
      </div>
    </footer>
  );
}
