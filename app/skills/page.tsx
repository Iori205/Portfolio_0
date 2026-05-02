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
      icon: "01",
      link: "#",
    },
    {
      title: "Frameworks & Libraries",
      description: "React, Next.js, Node.js, Express, React Native, Shadcn UI",
      icon: "02",
      link: "#",
    },
    {
      title: "Database / API",
      description: "PostgreSQL, MongoDB, Prisma, REST APIs, GraphQL",
      icon: "03",
      link: "#",
    },
    {
      title: "Tools",
      description: "GitHub, Vercel, Clerk (Auth), Drizzle, Husky",
      icon: "04",
      link: "#",
    },
    {
      title: "Testing",
      description: "Cypress (E2E), Jest (Unit), K6",
      icon: "05",
      link: "#",
    },
    {
      title: "Languages",
      description: "English (working proficiency), Korean (TOPIK 3)",
      icon: "06",
      link: "#",
    },
    {
      title: "Core Profile",
      description:
        "Full-stack developer building scalable web applications with a focus on clean architecture and real user impact.",
      icon: "07",
      link: "#",
    },
    {
      title: "Focus",
      description:
        "Building dashboards, admin systems, and data-driven platforms that solve real user problems.",
      icon: "08",
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

        <div className="mx-auto max-w-6xl space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Technical Stack
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Skills & Interests
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground">
              What I build and how I can contribute.
            </p>
            <div className="accent-line w-20" />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {hobbies.map((hobby, index) => (
              <HobbyCard key={index} {...hobby} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
