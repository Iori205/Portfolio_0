"use client";

import type React from "react";
import { GalaxyNavigation } from "@/components/galaxy-navigation";
import { ProjectCard } from "@/components/project-card";
import { HobbyCard } from "@/components/hobby-card";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { sendEmail } from "@/app/actions/send-email";

const featuredProjects = [
  {
    title: "Unifind (Intern)",
    description:
      "Developed a full-stack platform using React, Next.js, and Node.js, implementing authentication and role-based access control to improve user experience and system security.",
    category: "Full-Stack",
    tags: ["React", "Next.js", "Node.js", "RBAC", "UI/UX"],
    link: "https://unifind-ruddy.vercel.app/",
  },
  {
    title: "UniExam (Intern)",
    description:
      "Built scalable backend services using REST APIs, AWS SQS, and Redis caching, improving processing speed and system reliability.",
    category: "Backend",
    tags: ["REST API", "AWS SQS", "Upstash Redis", "Scalability"],
    link: "#",
  },
];

const featuredHobbies = [
  {
    title: "Core Languages",
    description: "JavaScript, TypeScript, HTML, CSS",
    icon: "01",
    link: "#",
  },
  {
    title: "Frameworks & Tools",
    description:
      "React, Next.js, Node.js, Express, React Native, UI: Shadcn UI",
    icon: "02",
    link: "#",
  },
  {
    title: "Backend & Databases",
    description: "PostgreSQL, MongoDB, Prisma, REST APIs, GraphQL",
    icon: "03",
    link: "#",
  },
];

// Animation variants
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await sendEmail(formData);
      if (result.success) {
        alert("Message sent! I'll get back to you within 24 hours.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(
          "Something went wrong. Please email me directly at sodoos534@gmail.com"
        );
      }
    } catch (error) {
      console.error("Form error:", error);
      alert(
        "Something went wrong. Please email me directly at sodoos534@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <GalaxyNavigation />

      {/* ── HERO ── */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-32 md:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="order-2 flex justify-center lg:order-1"
            >
              <div className="group relative">
                {/* Glow ring */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-transparent opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
                <div className="relative h-72 w-72 md:h-80 md:w-80 lg:h-[22rem] lg:w-[22rem]">
                  <Image
                    src="#"
                    alt="Baatar-Ochir Sodbilegt - Full-Stack Developer"
                    width={352}
                    height={352}
                    className="relative h-full w-full rounded-full border border-white/10 object-cover shadow-2xl transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-primary/20"
                    priority
                  />
                  {/* Decorative ring */}
                  <div className="absolute -bottom-2 -right-2 h-16 w-16 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm" />
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="order-1 space-y-8 lg:order-2"
            >
              {/* Status badge */}
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-lg shadow-primary/50" />
                <span className="text-xs font-medium tracking-wide text-primary">
                  Available for work
                </span>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-4">
                <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                  Building systems
                  <br />
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">that scale</span>
                </h1>

                <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Full-stack developer crafting real-world applications with
                  React, Next.js, and Node.js. Code that solves problems.
                </p>
              </motion.div>

              {/* Accent line */}
              <motion.div variants={fadeInUp} className="accent-line w-24" />

              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
                <Link href="/projects">
                  <Button className="btn-glow group h-12 gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90">
                    View my work
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button
                    variant="outline"
                    className="h-12 rounded-full border-white/10 bg-white/5 px-6 text-sm font-medium backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-primary/5"
                  >
                    Get in touch
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="relative z-10 space-y-40 px-6 pb-32">
        {/* ── FEATURED WORK ── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="mb-16 flex items-end justify-between">
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Selected Work
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Recent Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="group hidden items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:flex"
            >
              View all
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="mt-8 text-center sm:hidden">
            <Link href="/projects">
              <Button
                variant="outline"
                className="rounded-full border-white/10 bg-white/5 backdrop-blur-sm"
              >
                View all projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.section>

        {/* ── SKILLS ── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="mb-16 space-y-3 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Technical Stack
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Tools I Work With
            </h2>
            <p className="mx-auto max-w-lg text-muted-foreground">
              Technologies I use to build scalable web applications.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {featuredHobbies.map((hobby, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <HobbyCard {...hobby} />
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <Link href="/skills">
              <Button
                variant="outline"
                className="rounded-full border-white/10 bg-white/5 px-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-primary/5"
              >
                Explore full stack
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.section>

        {/* ── CONTACT ── */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-6xl"
        >
          <motion.div 
            variants={fadeInUp}
            className="glass-card overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16"
          >
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              {/* LEFT SIDE */}
              <div className="space-y-6">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  Get in Touch
                </p>
                <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
                  Let&apos;s build
                  <br />
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">something great</span>
                </h2>
                <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
                  I build fast, scalable web applications that solve real
                  problems. Open to new opportunities and collaborations.
                </p>
                <div className="accent-line w-16" />
              </div>

              {/* RIGHT SIDE (FORM) */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-glow group w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
