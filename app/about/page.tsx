"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export default function About() {
  return (
    <div className="relative min-h-screen bg-gradient-subtle">
      <div className="relative z-10 px-6 pb-20 pt-32">
        <Link
          href="/"
          className="fixed left-6 top-24 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-sm transition-all duration-300 hover:bg-muted"
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
            <span className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Get to Know Me
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              About Me
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground">
              My background, education, and journey
            </p>
          </motion.div>

          {/* Background */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">
              Background
            </h2>
            <div className="premium-card space-y-4 rounded-2xl p-8 text-base leading-relaxed text-muted-foreground">
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
            <h2 className="text-2xl font-semibold text-foreground">
              Education
            </h2>
            <div className="space-y-4">
              <motion.div 
                variants={fadeInUp}
                className="premium-card relative overflow-hidden rounded-2xl p-6"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
                <div className="pl-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Software Engineering Program
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Pinecone Academy - 2025 - 2026
                  </p>
                  <p className="mt-3 text-muted-foreground">
                    Focused on building full-stack applications, backend
                    systems, and scalable architecture used in real-world
                    environments.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                className="premium-card relative overflow-hidden rounded-2xl p-6"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-border" />
                <div className="pl-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Language Preparation
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Joongbu University - 2022 - 2024
                  </p>
                  <p className="mt-3 text-muted-foreground">
                    Focused on academic language skills and international study
                    preparation.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                className="premium-card relative overflow-hidden rounded-2xl p-6"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-border" />
                <div className="pl-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Finance Management
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Mandakh University - 2020 - 2022
                  </p>
                  <p className="mt-3 text-muted-foreground">
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
