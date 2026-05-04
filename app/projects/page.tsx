"use client";

import { ProjectCard, ProjectListItem } from "@/components/project-card";
import { ArrowLeft, LayoutGrid, List } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

type ProjectItem = {
  title: string;
  description: string;
  category: string;
  tags: string[];
  link: string;
};

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
    transition: { staggerChildren: 0.08, delayChildren: 0.2 }
  }
};

export default function Projects() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const allProjects: ProjectItem[] = [
    {
      title: "Unifind",
      description:
        "Built a full-stack platform using React, Next.js, and Node.js. Implemented authentication and role-based access control while improving overall user experience.",
      category: "Full-Stack",
      tags: ["React", "Next.js", "Node.js", "RBAC", "UI/UX"],
      link: "https://unifind-ruddy.vercel.app/",
    },
    {
      title: "UniExam",
      description:
        "Worked on backend development for a scalable REST API using AWS SQS asynchronous processing, Upstash Redis caching, and task queue handling.",
      category: "Backend",
      tags: ["REST API", "AWS SQS", "Upstash Redis", "Scalability"],
      link: "#",
    },
    {
      title: "ReferU",
      description:
        "Developed backend and REST API services for a referral management platform with Node.js, Express, and PostgreSQL.",
      category: "Backend",
      tags: ["Node.js", "Express", "PostgreSQL", "Validation", "RBAC"],
      link: "#",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-subtle">
      <div className="relative z-10 px-6 pb-20 pt-32">
        {/* Back button */}
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
          className="mx-auto max-w-6xl"
        >
          {/* Header with view toggle */}
          <motion.div 
            variants={fadeInUp} 
            className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
          >
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Selected Projects
                <sup className="ml-1 text-lg text-muted-foreground">({allProjects.length})</sup>
              </h1>
            </div>

            {/* View toggle */}
            <div className="toggle-group flex rounded-full p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`toggle-btn flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                  viewMode === "grid" ? "active" : "text-muted-foreground"
                }`}
              >
                <LayoutGrid className="h-4 w-4" />
                Grid
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`toggle-btn flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                  viewMode === "list" ? "active" : "text-muted-foreground"
                }`}
              >
                <List className="h-4 w-4" />
                List
              </button>
            </div>
          </motion.div>

          {/* Projects */}
          {viewMode === "grid" ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {allProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="premium-card rounded-2xl">
              {allProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="px-6"
                >
                  <ProjectListItem {...project} />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
