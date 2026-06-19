"use client";

import Image from "next/image";
import { useState } from "react";
import { HiAcademicCap } from "react-icons/hi";

interface CertificateImageProps {
  src: string;
  alt: string;
  variant?: "card" | "modal";
  priority?: boolean;
}

function CertificateBackdrop() {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(59, 130, 246, 0.14) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(59, 130, 246, 0.08) 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 30%, rgba(59, 130, 246, 0.18), transparent 70%)",
        }}
        aria-hidden
      />
    </>
  );
}

export default function CertificateImage({
  src,
  alt,
  variant = "card",
  priority = false,
}: CertificateImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden text-center text-muted-foreground ${
          variant === "modal" ? "min-h-[240px] p-8" : "h-full p-6"
        }`}
      >
        <CertificateBackdrop />
        <HiAcademicCap
          size={variant === "modal" ? 40 : 28}
          className="relative z-10"
          aria-hidden
        />
        <p className="relative z-10 text-xs">Certificate image unavailable</p>
      </div>
    );
  }

  if (variant === "modal") {
    return (
      <div className="relative flex w-full justify-center overflow-hidden border-b border-card-border p-4 sm:p-6">
        <Image
          src={src}
          alt=""
          fill
          aria-hidden
          sizes="100vw"
          className="scale-110 object-cover opacity-35 blur-2xl"
        />
        <CertificateBackdrop />
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={848}
          priority={priority}
          onError={() => setHasError(true)}
          className="relative z-10 h-auto max-h-[70vh] w-full max-w-4xl object-contain drop-shadow-lg"
        />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-background/80">
      <Image
        src={src}
        alt=""
        fill
        aria-hidden
        sizes="(max-width: 768px) 100vw, 33vw"
        className="scale-110 object-cover opacity-40 blur-xl"
      />
      <CertificateBackdrop />
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        priority={priority}
        onError={() => setHasError(true)}
        className="z-10 object-contain p-3 drop-shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
      />
    </div>
  );
}
