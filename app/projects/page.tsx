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
  const financeProjects: ProjectItem[] = [];

  const marketingProjects: ProjectItem[] = [];

  const designProjects: ProjectItem[] = [];

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

      <div className="relative z-10 py-20 px-4">
        <Link
          href="/"
          className="fixed top-8 left-8 glass-card p-3 rounded-full hover:scale-110 transition-transform z-20"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>

        <div className="max-w-6xl mx-auto space-y-16">
          <div className="space-y-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent text-foreground">
              Projects
            </h1>
            <p className="text-xl text-balance text-foreground">
              A showcase of my internship and engineering work
            </p>
          </div>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-primary">Web Development</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {itProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>
          {/* 
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground">
              Finance Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {financeProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section> */}

          {/* <section className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground">
              Marketing Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {marketingProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section> */}

          {/* <section className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground">
              Design & Architecture
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {designProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section> */}

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground">
              Mobile Development
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
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
