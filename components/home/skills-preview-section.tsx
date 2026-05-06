"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

type SkillsPreviewSectionProps = {
  fadeInUp: Variants;
  staggerContainer: Variants;
};

export function SkillsPreviewSection({ fadeInUp, staggerContainer }: SkillsPreviewSectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div variants={fadeInUp} className="premium-card rounded-3xl p-10 md:p-16">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  Technical Stack
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Tools I work with
              </h2>
              <p className="max-w-md text-muted-foreground">
                React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, and more.
              </p>
            </div>
            <Link href="/skills">
              <button className="rounded-full border border-foreground/20 bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-foreground hover:text-background">
                View full stack
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
