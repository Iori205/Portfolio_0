"use client";

import { ProjectCard } from "@/components/project-card";
import { GalaxyNavigation } from "@/components/galaxy-navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export default function Projects() {
  const itProjects: ProjectItem[] = [
    {
      title: "Unifind (Intern)",
      description:
        "Built a full-stack B6 platform using React, Next.js, and Node.js. Implemented authentication and role-based access control while improving overall user experience.",
      category: "Full-Stack",
      tags: ["React", "Next.js", "Node.js", "RBAC", "UI/UX"],
      link: "https://unifind-ruddy.vercel.app/",
    },
    {
      title: "UniExam (Intern)",
      description:
        "Worked on backend development for a scalable REST API using AWS SQS asynchronous processing, Upstash Redis caching, and task queue handling. Improved processing speed and service reliability.",
      category: "Backend",
      tags: ["REST API", "AWS SQS", "Upstash Redis", "Scalability"],
      link: "#",
    },
  ];

  const personalProjects: ProjectItem[] = [
    {
      title: "ReferU (Intern)",
      description:
        "Developed backend and REST API services for a referral management platform with Node.js, Express, and PostgreSQL. Strengthened authentication, role-based access control, and API validation.",
      category: "Personal",
      tags: ["Node.js", "Express", "PostgreSQL", "Validation", "RBAC"],
      link: "#",
    },
  ];

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
          className="mx-auto max-w-6xl space-y-16"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Portfolio
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Projects
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground">
              A showcase of my internship and engineering work
            </p>
            <div className="accent-line w-20" />
          </motion.div>

          {/* Web Development */}
          <motion.section variants={fadeInUp} className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary">
                01
              </span>
              <h2 className="text-2xl font-semibold text-foreground">
                Web Development
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {itProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Mobile Development */}
          <motion.section variants={fadeInUp} className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary">
                02
              </span>
              <h2 className="text-2xl font-semibold text-foreground">
                Mobile Development
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {personalProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}
