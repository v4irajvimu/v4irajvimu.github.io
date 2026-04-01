"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import { personalInfo } from "@/lib/data";
import {
  HiLocationMarker,
  HiAcademicCap,
  HiMail,
  HiLightningBolt,
} from "react-icons/hi";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import SectionGradientBg from "./SectionGradientBg";
import Tilt from "react-parallax-tilt";

const facts = [
  {
    icon: HiLocationMarker,
    label: "Location",
    value: personalInfo.location,
  },
  {
    icon: HiAcademicCap,
    label: "Education",
    value: personalInfo.education,
  },
  {
    icon: HiMail,
    label: "Email",
    value: personalInfo.email,
  },
  {
    icon: HiLightningBolt,
    label: "Learning",
    value: personalInfo.learning.join(", "),
  },
];

export default function AboutSection() {
  const [gyroEnabled, setGyroEnabled] = useState(false);
  const [needsPermission, setNeedsPermission] = useState(false);
  /** 3D tilt is heavy on touch GPUs; keep it for tablet/desktop only. */
  const [tiltDesktop, setTiltDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setTiltDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const req = (
      DeviceOrientationEvent as unknown as {
        requestPermission?: () => Promise<string>;
      }
    ).requestPermission;
    if (typeof req !== "function") {
      setGyroEnabled(true);
    } else {
      setNeedsPermission(true);
    }
  }, []);

  const handleRequestGyro = useCallback(() => {
    const req = (
      DeviceOrientationEvent as unknown as {
        requestPermission?: () => Promise<string>;
      }
    ).requestPermission;
    if (typeof req === "function") {
      req()
        .then((permission) => {
          if (permission === "granted") setGyroEnabled(true);
        })
        .catch(() => {});
    } else {
      setGyroEnabled(true);
    }
  }, []);

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      <SectionGradientBg />
      <div className="mx-auto max-w-6xl relative">
        <AnimatedSection>
          <SectionHeading>
            About <span className="gradient-text">Me</span>
          </SectionHeading>
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-5">
          <AnimatedSection className="lg:col-span-2" delay={0.1}>
            <div className="relative group">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent to-accent-secondary p-[2px]">
                <div className="h-full w-full rounded-2xl bg-card overflow-hidden">
                  <div
                    className="h-full w-full"
                    onClick={
                      !gyroEnabled && needsPermission
                        ? handleRequestGyro
                        : undefined
                    }
                    onTouchStart={
                      !gyroEnabled && needsPermission
                        ? handleRequestGyro
                        : undefined
                    }
                    role={
                      !gyroEnabled && needsPermission ? "button" : undefined
                    }
                    aria-label={
                      !gyroEnabled && needsPermission
                        ? "Tap to enable 3D effect"
                        : undefined
                    }
                  >
                    <Tilt
                      key={gyroEnabled ? "gyro-on" : "gyro-off"}
                      tiltEnable={tiltDesktop}
                      tiltMaxAngleX={20}
                      tiltMaxAngleY={20}
                      perspective={1200}
                      scale={1}
                      gyroscope={gyroEnabled && tiltDesktop}
                      className="h-full w-full"
                    >
                      <div className="h-full w-full">
                        <Image
                          src="/images/vimukthi-jayasinghe-senior-software-engineer.webp"
                          alt={`${personalInfo.name} - ${personalInfo.title}`}
                          width={800}
                          height={800}
                          priority
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </Tilt>
                  </div>
                  {!gyroEnabled && needsPermission && (
                    <div className="absolute inset-0 flex items-end justify-center pb-3 pointer-events-none">
                      <span className="text-xs text-white/80 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">
                        Tap to enable 3D
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent to-accent-secondary opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20 pointer-events-none" />
            </div>
          </AnimatedSection>

          <div className="lg:col-span-3 space-y-6">
            <AnimatedSection delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                With a mastery of{" "}
                <span className="text-foreground font-medium">JavaScript</span>,{" "}
                <span className="text-foreground font-medium">TypeScript</span>,
                and <span className="text-foreground font-medium">Python</span>,
                I build performant, accessible solutions using{" "}
                <span className="text-foreground font-medium">React</span> and{" "}
                <span className="text-foreground font-medium">Next.js</span> on
                the frontend and{" "}
                <span className="text-foreground font-medium">Node.js</span>{" "}
                with{" "}
                <span className="text-foreground font-medium">
                  AWS Serverless
                </span>{" "}
                (<span className="text-foreground font-medium">Lambda</span>,{" "}
                <span className="text-foreground font-medium">DynamoDB</span>)
                on the backend. I am passionate about clean code and high-end
                UX, specialized in integrating{" "}
                <span className="text-foreground font-medium">
                  Generative AI
                </span>{" "}
                and <span className="text-foreground font-medium">LLMs</span> to
                move beyond traditional development into the next generation of
                intelligent, cloud-native applications.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {facts.map((fact, i) => (
                <AnimatedSection key={fact.label} delay={0.3 + i * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-3 rounded-xl border border-card-border bg-card p-4 transition-colors hover:border-accent/30"
                  >
                    <div className="rounded-lg bg-accent/10 p-2 text-accent">
                      <fact.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider">
                        {fact.label}
                      </p>
                      <p className="text-sm text-foreground mt-1">
                        {fact.value}
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
