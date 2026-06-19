"use client";

import { motion } from "framer-motion";
import { HiCalendar } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa6";
import { TbBrandAws } from "react-icons/tb";
import { SiGooglegemini } from "react-icons/si";
import { HiAcademicCap } from "react-icons/hi";
import type { Certificate } from "@/lib/types";
import CertificateImage from "./CertificateImage";

const providerIcon: Record<
  NonNullable<Certificate["provider"]>,
  typeof HiAcademicCap
> = {
  aws: TbBrandAws,
  coursera: HiAcademicCap,
  udemy: HiAcademicCap,
  linkedin: FaLinkedin,
  google: SiGooglegemini,
  virtusa: HiAcademicCap,
  other: HiAcademicCap,
};

interface CertificateCardProps {
  certificate: Certificate;
  index?: number;
  onSelect?: (certificate: Certificate) => void;
}

export default function CertificateCard({
  certificate,
  index = 0,
  onSelect,
}: CertificateCardProps) {
  const ProviderIcon =
    providerIcon[certificate.provider ?? "other"] ?? HiAcademicCap;
  const formattedDate = new Date(certificate.completedDate).toLocaleDateString(
    "en-US",
    { month: "short", year: "numeric" },
  );

  const cardContent = (
    <>
      <div className="h-74 overflow-hidden border-b border-card-border">
        <CertificateImage
          src={certificate.image}
          alt={`${certificate.title} course completion certificate`}
        />
      </div>

      <div className="flex items-center gap-2 px-5 pt-4">
        {certificate.logo ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={certificate.logo}
            alt=""
            className="h-5 w-5 shrink-0 object-contain"
          />
        ) : (
          <ProviderIcon
            size={16}
            className="shrink-0 text-muted-foreground"
            aria-hidden
          />
        )}
        <span className="truncate text-xs text-muted-foreground">
          {certificate.issuer}
        </span>
      </div>

      <h3 className="line-clamp-2 px-5 text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-accent">
        {certificate.title}
      </h3>

      <div className="overflow-hidden px-5">
        {certificate.skills && certificate.skills.length > 0 ? (
          <div className="flex flex-wrap content-start gap-1.5">
            {certificate.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-card-border bg-background/60 px-2 py-0.5 text-xs text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <div className="flex items-center justify-between border-t border-card-border px-5 pb-2 pt-1">
        <span className="flex items-center gap-1 text-xs text-muted">
          <HiCalendar size={14} />
          {formattedDate}
        </span>
        <span className="text-xs text-muted-foreground transition-colors group-hover:text-accent">
          View certificate
        </span>
      </div>
    </>
  );

  const className =
    "group row-span-5 grid h-full w-full grid-rows-subgrid overflow-hidden rounded-xl border border-card-border bg-card text-left shadow-md shadow-black/10 transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10";

  if (onSelect) {
    return (
      <motion.button
        type="button"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -6 }}
        onClick={() => onSelect(certificate)}
        className={className}
      >
        {cardContent}
      </motion.button>
    );
  }

  if (certificate.credentialUrl) {
    return (
      <motion.a
        href={certificate.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -6 }}
        className={className}
      >
        {cardContent}
      </motion.a>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={className}
    >
      {cardContent}
    </motion.div>
  );
}
