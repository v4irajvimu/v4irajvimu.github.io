/**
 * Static placeholders for dynamically loaded sections. Keep this file free of
 * framer-motion, swiper, or other heavy client libraries so it stays in the
 * main bundle as tiny markup only.
 */

export function ExperienceSectionPlaceholder() {
  return (
    <section
      id="experience"
      className="py-24 px-4"
      aria-busy="true"
      aria-label="Loading experience"
    >
      <div className="mx-auto max-w-6xl">
        <div className="h-10 w-56 mb-16 rounded-lg bg-card-border/40 animate-pulse" />
        <div className="relative space-y-12 pl-0 md:pl-8">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-card-border/50 -translate-x-px hidden md:block" />
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-xl border border-card-border bg-card/30 p-6 animate-pulse"
            >
              <div className="flex gap-4">
                <div className="h-12 w-12 shrink-0 rounded-lg bg-card-border/50" />
                <div className="flex-1 space-y-3">
                  <div className="h-5 w-48 rounded bg-card-border/50" />
                  <div className="h-4 w-full max-w-md rounded bg-card-border/30" />
                  <div className="h-4 w-3/4 rounded bg-card-border/30" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSectionPlaceholder() {
  return (
    <section
      id="testimonials"
      className="relative py-24 px-4 overflow-hidden"
      aria-busy="true"
      aria-label="Loading testimonials"
    >
      <div className="mx-auto max-w-6xl relative">
        <div className="h-10 w-72 mx-auto mb-10 rounded-lg bg-card-border/40 animate-pulse" />
        <div className="h-[340px] w-full rounded-xl border border-card-border bg-card/30 animate-pulse" />
        <div className="h-4 w-64 mx-auto mt-6 rounded bg-card-border/30 animate-pulse" />
      </div>
    </section>
  );
}

export function CollaborationsSectionPlaceholder() {
  return (
    <section
      id="collaborations"
      className="relative py-24 px-4 overflow-hidden"
      aria-busy="true"
      aria-label="Loading collaborations"
    >
      <div className="mx-auto max-w-6xl relative space-y-8">
        <div className="h-10 w-80 mx-auto rounded-lg bg-card-border/40 animate-pulse" />
        <div className="h-16 max-w-2xl mx-auto rounded-lg bg-card-border/30 animate-pulse" />
        <div className="min-h-[220px] w-full rounded-xl border border-card-border bg-card/30 animate-pulse" />
        <div className="h-[195px] max-w-lg mx-auto rounded-xl border border-card-border bg-card/30 animate-pulse" />
        <div className="grid gap-6 md:grid-cols-2 justify-items-center">
          <div className="h-[195px] w-full max-w-[495px] rounded-xl bg-card-border/40 animate-pulse" />
          <div className="h-[195px] w-full max-w-[495px] rounded-xl bg-card-border/40 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
