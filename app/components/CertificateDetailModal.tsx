"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import type { Certificate } from "@/lib/types";
import CertificateImage from "./CertificateImage";

interface CertificateDetailModalProps {
  certificate: Certificate;
  onClose: () => void;
}

export default function CertificateDetailModal({
  certificate,
  onClose,
}: CertificateDetailModalProps) {
  const formattedDate = new Date(certificate.completedDate).toLocaleDateString(
    "en-US",
    { month: "long", year: "numeric" },
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-start sm:items-center justify-center overflow-y-auto p-4 pt-6 pb-8 sm:py-4 bg-black/60 backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-4xl max-h-[90dvh] sm:max-h-[90vh] rounded-2xl border border-white/10 bg-card backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col"
        >
          <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain">
            <CertificateImage
              src={certificate.image}
              alt={`${certificate.title} course completion certificate`}
              variant="modal"
              priority
            />

            <div className="p-4 sm:p-6">
              <p className="text-sm text-muted-foreground">{certificate.issuer}</p>
              <h3
                id="certificate-title"
                className="mt-1 text-xl font-semibold text-foreground"
              >
                {certificate.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Completed {formattedDate}
              </p>

              {certificate.skills && certificate.skills.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-card-border bg-background/60 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                {certificate.credentialUrl ? (
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
                  >
                    <HiExternalLink size={16} />
                    View credential
                  </a>
                ) : (
                  <span />
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium rounded-lg border border-card-border bg-white/5 hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
