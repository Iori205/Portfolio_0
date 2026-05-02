"use client";

import { GalaxyNavigation } from "@/components/galaxy-navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export default function About() {
  return (
    <div className="relative min-h-screen">
      <GalaxyNavigation />

      <div className="relative z-10 px-6 pb-20 pt-32">
        <Link
          href="/"
          className="fixed left-6 top-24 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto max-w-4xl space-y-16"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Get to Know Me
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              About Me
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground">
              My background, education, and journey
            </p>
            <div className="accent-line w-20" />
          </motion.div>

          {/* Background */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary">
                01
              </span>
              <h2 className="text-2xl font-semibold text-foreground">
                Background
              </h2>
            </div>
            <div className="glass-card space-y-4 rounded-2xl p-8 text-base leading-relaxed text-foreground/90">
              <p>
                Full-stack developer focused on building real-world systems used
                by actual users.
              </p>
              <p>
                I&apos;ve built multiple production-style applications including
                dashboards, admin systems, and data-driven platforms.
              </p>
              <p>
                My work centers around clean architecture, scalable backend
                systems, and solving practical problems.
              </p>
            </div>
          </motion.section>

          {/* Education */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary">
                02
              </span>
              <h2 className="text-2xl font-semibold text-foreground">
                Education
              </h2>
            </div>
            <div className="space-y-4">
              <motion.div 
                variants={fadeInUp}
                className="glass-card relative overflow-hidden rounded-2xl p-6"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-accent" />
                <div className="pl-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Software Engineering Program
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Pinecone Academy - 2025 - 2026
                  </p>
                  <p className="mt-3 text-foreground/80">
                    Focused on building full-stack applications, backend
                    systems, and scalable architecture used in real-world
                    environments.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                className="glass-card relative overflow-hidden rounded-2xl p-6"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-muted-foreground/30" />
                <div className="pl-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Language Preparation
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Joongbu University - 2022 - 2024
                  </p>
                  <p className="mt-3 text-foreground/80">
                    Focused on academic language skills and international study
                    preparation.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                className="glass-card relative overflow-hidden rounded-2xl p-6"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-muted-foreground/30" />
                <div className="pl-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Finance Management
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Mandakh University - 2020 - 2022
                  </p>
                  <p className="mt-3 text-foreground/80">
                    Studied finance fundamentals, business systems, and
                    analytical thinking.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}
