import { GalaxyNavigation } from "@/components/galaxy-navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { AnimatedBackground } from "@/components/animated-background";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - Background, Education & Timeline",
  description:
    "Learn about Baatar-Ochir Sodbilegt, a software engineer focused on full-stack development with React, React Native, and backend API systems.",
  keywords: [
    "Baatar-Ochir Sodbilegt",
    "Sodbilegt",
    "software engineer",
    "full-stack developer",
    "React developer",
    "Node.js developer",
    "backend engineer",
  ],
  openGraph: {
    title: "About Baatar-Ochir Sodbilegt - Software Engineer",
    description:
      "Software engineer with internship experience delivering full-stack and backend systems using React, Node.js, and PostgreSQL.",
  },
};

export default function About() {
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

        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text bg-gradient-to-r text-white text-foreground">
              About Me
            </h1>
            <p className="text-xl text-balance text-foreground">
              Get to know my background, education, and journey
            </p>
          </div>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Background</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4 text-lg leading-relaxed">
              <div>
                Full-stack developer focused on building real-world systems used
                by actual users.
              </div>
              <div>
                I’ve built multiple production-style applications including
                dashboards, admin systems, and data-driven platforms.
              </div>
              <div>
                My work centers around clean architecture, scalable backend
                systems, and solving practical problems.
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Education</h2>
            <div className="space-y-4">
              <div className="glass-card rounded-2xl p-6 border-l-4 border-primary">
                <h3 className="text-xl font-semibold">
                  Software Engineering Program
                </h3>
                <p className="text-muted-foreground">
                  Pinecone Academy • 2025 - 2026
                </p>
                <p className="mt-2">
                  Focused on building full-stack applications, backend systems,
                  and scalable architecture used in real-world environments.
                </p>
              </div>
              <div className="glass-card rounded-2xl p-6 border-l-4 border-secondary">
                <h3 className="text-xl font-semibold">Language Preparation</h3>
                <p className="text-muted-foreground">
                  Joongbu University • 2022 - 2024
                </p>
                <p className="mt-2">
                  Focused on academic language skills and international study
                  preparation.
                </p>
              </div>
              <div className="glass-card rounded-2xl p-6 border-l-4 border-secondary">
                <h3 className="text-xl font-semibold">Finance management</h3>
                <p className="text-muted-foreground">
                  Mandakh University • 2020 - 2022
                </p>
                <p className="mt-2">
                  Studied finance fundamentals, business systems, and analytical
                  thinking.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
