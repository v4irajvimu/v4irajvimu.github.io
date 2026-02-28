"use client";

import { useEffect, useRef, useState } from "react";
import { FastAverageColor } from "fast-average-color";

interface CompanyLogoProps {
  src: string;
  alt: string;
  size?: number;
}

const fac = new FastAverageColor();

export default function CompanyLogo({ src, alt, size = 44 }: CompanyLogoProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => {
      const result = fac.getColor(img, { algorithm: "dominant" });
      setBgColor(result.hex);
    };
  }, [src]);

  return (
    <div
      className="h-full w-full transition-colors duration-500"
      style={{ backgroundColor: bgColor }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="h-full w-full object-contain p-1"
      />
    </div>
  );
}
