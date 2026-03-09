import type { MetadataRoute } from "next";
import { personalInfo } from "@/lib/data";

export const dynamic = "force-static";

const baseUrl = "https://v4irajvimu.github.io";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${personalInfo.name} | ${personalInfo.title}`,
    short_name: personalInfo.name,
    description: personalInfo.bio,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/images/avatar.jpg",
        sizes: "192x192",
        type: "image/jpeg",
        purpose: "any",
      },
      {
        src: "/images/avatar.jpg",
        sizes: "192x192",
        type: "image/jpeg",
        purpose: "maskable",
      },
    ],
    categories: ["portfolio", "personal"],
  };
}
