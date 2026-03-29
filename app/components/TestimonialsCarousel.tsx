"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Mousewheel, Autoplay } from "swiper/modules";
import { linkedInRecommendations } from "@/lib/data";
import type { LinkedInRecommendation } from "@/lib/types";
import TestimonialCard from "./TestimonialCard";
import "swiper/css";

const CARD_MIN_HEIGHT = 340;

/** Match Tailwind below `md` — disable loop to avoid duplicate slides. */
const MOBILE_MAX_WIDTH = 767;

export default function TestimonialsCarousel({
  onSelect,
}: {
  onSelect: (rec: LinkedInRecommendation) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperCore | null>(null);
  /** Mobile-first avoids enabling loop on SSR/hydration before matchMedia runs. */
  const [isMobile, setIsMobile] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) setIsVisible(entry.isIntersecting);
      },
      { root: null, rootMargin: "0px", threshold: 0.15 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const ap = swiperRef.current?.autoplay;
    if (!ap) return;
    if (isVisible) ap.start();
    else ap.stop();
  }, [isVisible]);

  const handleSwiper = useCallback(
    (swiper: SwiperCore) => {
      swiperRef.current = swiper;
      if (isVisible) swiper.autoplay?.start();
    },
    [isVisible],
  );

  const loopEnabled = !isMobile && linkedInRecommendations.length > 1;

  return (
    <div ref={containerRef} className="w-full">
      <Swiper
        key={loopEnabled ? "loop" : "no-loop"}
        className="w-full"
        modules={[Mousewheel, Autoplay]}
        onSwiper={handleSwiper}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        grabCursor
        loop={loopEnabled}
        speed={400}
        mousewheel={{ enabled: true, forceToAxis: true }}
        autoplay={
          isVisible
            ? {
                delay: 4000,
                disableOnInteraction: false,
              }
            : false
        }
      >
        {linkedInRecommendations.map((rec) => (
          <SwiperSlide key={rec.id} style={{ height: CARD_MIN_HEIGHT }}>
            <TestimonialCard
              rec={rec}
              onSelect={() => onSelect(rec)}
              minHeight={CARD_MIN_HEIGHT}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
