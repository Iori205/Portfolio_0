import type { Metadata } from "next";
import { HobbyCard } from "@/components/hobby-card";
import { GalaxyNavigation } from "@/components/galaxy-navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Skills & Knowledge | Baatar-Ochir Sodbilegt",
  description:
    "Explore Baatar-Ochir Sodbilegt's engineering skills and technical stack",
  keywords: [
    "Sodbilegt skills",
    "software engineer skills",
    "full-stack skills",
    "React developer",
    "Node.js developer",
    "backend development",
  ],
  openGraph: {
    title: "Skills & Knowledge | Baatar-Ochir Sodbilegt",
    description: "What Can I Do For You",
    url: `${siteUrl}/skills`,
    type: "profile",
  },
};

export default function SkillsPage() {
  const hobbies = [
    {
      title: "Programming Languages",
      description: "JavaScript, TypeScript, HTML, CSS",
      icon: "",
      link: "#",
    },
    {
      title: "Frameworks & Libraries",
      description: "React, Next.js, Node.js, Express, React Native, Shadcn UI",
      icon: "",
      link: "#",
    },
    {
      title: "Database / API",
      description: "PostgreSQL, MongoDB, Prisma, REST APIs, GraphQL",
      icon: "",
      link: "#",
    },
    {
      title: "Tools",
      description: "GitHub, Vercel, Clerk (Auth), Drizzle, Husky",
      icon: "",
      link: "#",
    },
    {
      title: "Testing",
      description: "Cypress (E2E), Jest (Unit), K6",
      icon: "",
      link: "#",
    },
    {
      title: "Languages",
      description: "English (working proficiency), Korean (TOPIK 3)",
      icon: "",
      link: "#",
    },
    {
      title: "Core Profile",
      description:
        "Full-stack developer building scalable web applications with a focus on clean architecture and real user impact.",
      icon: "",
      link: "#",
    },
    {
      title: "Focus",
      description:
        "Building dashboards, admin systems, and data-driven platforms that solve real user problems.",
      icon: "",
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

        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl md:text-6xl font-bold bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent text-foreground">
              Skills & Interests
            </h1>
            <p className="text-xl text-foreground">
              What I build and how I can contribute.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <HobbyCard key={index} {...hobby} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
