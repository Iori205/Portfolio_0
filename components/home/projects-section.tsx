"use client";

import { ProjectCard } from "@/components/main/project-card";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  category: string;
  tags: string[];
  link: string;
  image: string;
};

type ProjectsSectionProps = {
  fadeInUp: Variants;
  staggerContainer: Variants;
  projects: Project[];
};

export function ProjectsSection({
  fadeInUp,
  staggerContainer,
  projects,
}: ProjectsSectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeInUp}
          className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Selected Projects
              <sup className="ml-1 text-lg text-muted-foreground">
                ({projects.length})
              </sup>
            </h2>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
