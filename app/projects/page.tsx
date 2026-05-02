import { ProjectCard } from "@/components/project-card";
import { GalaxyNavigation } from "@/components/galaxy-navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

type ProjectItem = {
  title: string;
  description: string;
  category: string;
  tags: string[];
  link: string;
};

export const metadata: Metadata = {
  title: "Projects - Full-Stack & Backend Engineering",
  description:
    "Explore projects by Baatar-Ochir Sodbilegt including full-stack web platforms, referral systems, and scalable backend services.",
  keywords: [
    "software engineer projects",
    "full-stack projects",
    "backend projects",
    "React projects",
    "Node.js projects",
  ],
  openGraph: {
    title: "Projects Portfolio - Baatar-Ochir Sodbilegt",
    description:
      "Internship and engineering projects covering full-stack platforms, REST APIs, asynchronous processing, and database architecture.",
  },
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
          className="fixed left-6 top-24 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-xl transition-all hover:border-primary/30 hover:bg-primary/10"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>

        <div className="mx-auto max-w-6xl space-y-16">
          {/* Header */}
          <div className="space-y-4">
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
          </div>

          {/* Web Development */}
          <section className="space-y-8">
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
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>

          {/* Mobile Development */}
          <section className="space-y-8">
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
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
