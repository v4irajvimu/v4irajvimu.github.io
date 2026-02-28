"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { HiStar } from "react-icons/hi";
import AnimatedSection from "./AnimatedSection";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">
              What People <span className="gradient-text">Say</span>
            </h2>
            <div className="flex-1 h-px bg-card-border" />
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group h-full rounded-xl border border-card-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} size={16} className="text-yellow-500" />
                  ))}
                </div>

                <blockquote className="text-sm text-muted-foreground leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-card-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
