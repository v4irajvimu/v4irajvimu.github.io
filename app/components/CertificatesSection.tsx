"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import {
  certificates,
  featuredCertificates,
} from "@/lib/data";
import type { Certificate } from "@/lib/types";
import AnimatedSection from "./AnimatedSection";
import CertificateCard from "./CertificateCard";
import CertificateDetailModal from "./CertificateDetailModal";
import SectionGradientBg from "./SectionGradientBg";
import SectionHeading from "./SectionHeading";

export default function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  const openDetail = useCallback(
    (certificate: Certificate) => setSelectedCertificate(certificate),
    [],
  );
  const closeDetail = useCallback(() => setSelectedCertificate(null), []);

  if (featuredCertificates.length === 0) {
    return null;
  }

  return (
    <section
      id="certificates"
      className="relative py-24 px-4 overflow-hidden"
      aria-label="Course certificates"
    >
      <SectionGradientBg />

      <div className="mx-auto max-w-6xl relative">
        <AnimatedSection>
          <SectionHeading>
            Course <span className="gradient-text">Certificates</span>
          </SectionHeading>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="mx-auto max-w-2xl text-center text-muted-foreground mb-10">
            Professional certifications and course completions that complement my
            hands-on engineering experience.
          </p>
        </AnimatedSection>

        <div className="grid auto-rows-min gap-6 md:grid-cols-3">
          {featuredCertificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
              onSelect={openDetail}
            />
          ))}
        </div>

        {certificates.length > featuredCertificates.length && (
          <AnimatedSection delay={0.3}>
            <div className="mt-10 flex justify-center">
              <Link
                href="/certificates"
                className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/5 px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent/10 hover:border-accent/50"
              >
                See more certificates
                <HiArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        )}
      </div>

      {selectedCertificate ? (
        <CertificateDetailModal
          certificate={selectedCertificate}
          onClose={closeDetail}
        />
      ) : null}
    </section>
  );
}
