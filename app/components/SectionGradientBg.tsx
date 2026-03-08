"use client";

/**
 * Reusable gradient background for sections (e.g. Testimonials, About).
 * Place as first child inside a section with `relative` (and optionally `overflow-hidden`).
 */
export default function SectionGradientBg() {
  return (
    <>
      <div
        className="absolute inset-0 -z-10 opacity-90"
        style={{
          background:
            "linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(6, 182, 212, 0.08) 50%, rgba(59, 130, 246, 0.06) 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59, 130, 246, 0.15), transparent 60%)",
        }}
      />
    </>
  );
}
