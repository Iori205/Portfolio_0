"use client";

import type React from "react";
import { GalaxyNavigation } from "@/components/galaxy-navigation";
import { ProjectCard } from "@/components/project-card";
import { HobbyCard } from "@/components/hobby-card";
import { ArrowRight } from "lucide-react";
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
    title: "🧠 Core Languages",
    description: "JavaScript, TypeScript, HTML, CSS",
    icon: "",
    link: "#",
  },
  {
    title: "⚙️ Frameworks & Tools",
    description:
      "React, Next.js, Node.js, Express, React Native, UI: Shadcn UI",
    icon: "",
    link: "#",
  },
  {
    title: "🗄️ Backend & Databases",
    description: "PostgreSQL, MongoDB, Prisma, REST APIs, GraphQL",
    icon: "",
    link: "#",
  },
];

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
          "Something went wrong. Please email me directly at sodoos534@gmail.com",
        );
      }
    } catch (error) {
      console.error("Form error:", error);
      alert(
        "Something went wrong. Please email me directly at sodoos534@gmail.com",
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
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-40 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto w-full"
        >
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-88 md:h-88 lg:w-[28rem] lg:h-[28rem]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-sm" />
                <Image
                  src="#"
                  alt="Baatar-Ochir Sodbilegt - Full-Stack Developer"
                  width={448}
                  height={448}
                  className="relative rounded-full border-4 border-white/30 shadow-2xl object-contain w-full h-full hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-5"
            >
              <p className="text-sm font-medium tracking-widest text-foreground uppercase">
                Full-Stack Developer • BAATAR-OCHIR SODBILEGT
              </p>

              <p className="text-xl md:text-2xl font-semibold text-foreground/90">
                I build scalable systems used by real users
              </p>

              <p className="text-lg md:text-xl text-foreground/70">
                Code that solves real problems
              </p>

              <div className="glass-card p-8 rounded-2xl backdrop-blur-xl border border-white/10 space-y-4">
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Full-stack developer building real-world systems used by
                  actual users. I design and develop scalable web applications
                  including dashboards, data-driven platforms, and business
                  tools.
                </p>

                <ul className="text-sm md:text-base text-foreground/80 space-y-1">
                  <li>→ Built full-stack apps with React, Next.js, Node.js</li>
                  <li>
                    → Implemented auth, RBAC, and scalable backend systems
                  </li>
                  <li>→ Designed REST APIs with PostgreSQL, MongoDB, Prisma</li>
                </ul>

                <Link href="/projects">
                  <Button className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white backdrop-blur-sm group px-6 py-4 text-base rounded-xl transition-all">
                    View My Work
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div className="relative z-10 space-y-40 px-6 pb-40">
        {/* ── FEATURED WORK ── */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto space-y-16 py-12"
        >
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Selected Work
            </h2>

            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              Real-world projects focused on scalability, performance, and user
              experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-6">
            <Link href="/projects">
              <Button
                variant="outline"
                className="border-accent/60/50 hover:bg-white/10 hover:border-accent/60 group bg-transparent backdrop-blur-xl px-8 py-6 text-base rounded-xl"
              >
                Explore All Projects
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.section>

        {/* ── HOBBIES ── */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto space-y-16 py-12"
        >
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text bg-gradient-to-r from-accent to-accent/80 leading-tight text-foreground">
              Technical Skills
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              Technologies I use to build scalable web applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {featuredHobbies.map((hobby, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <HobbyCard {...hobby} />
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-6">
            <Link href="/skills">
              <Button
                variant="outline"
                className="border-accent/50 hover:bg-accent/20 hover:border-accent group bg-transparent backdrop-blur-xl px-8 py-6 text-base rounded-xl"
              >
                Explore All Skills
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.section>

        {/* ── CONTACT ── */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto py-10 px-4"
        >
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
            {/* LEFT SIDE */}
            <div className="flex w-full flex-1 flex-col items-center justify-start pt-12 lg:pt-20  space-y-6 text-center lg:items-start lg:text-left">
              <h2 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                <span className="text-white">Let&apos;s Work</span>
                <br />
                <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                  Together
                </span>
              </h2>

              <p className="max-w-xl text-base md:text-2xl leading-relaxed text-zinc-100 [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]">
                I build fast, scalable web applications that solve real
                problems. Let's create something that actually works.
              </p>
            </div>

            {/* RIGHT SIDE (FORM) */}
            <div className="flex w-full flex-1 justify-center">
              <div className="w-full max-w-4xl rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-[0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-xl md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                    {/* NAME */}
                    <div className="space-y-2">
                      <label className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-400">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-xl border border-white/6 bg-white/3 px-4 py-3 text-sm text-white placeholder:text-zinc-500 transition duration-200 focus:outline-none focus:ring-2 focus:ring-white/20"
                        placeholder="Your name"
                      />
                    </div>

                    {/* EMAIL */}
                    <div className="space-y-2">
                      <label className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-400">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-xl border border-white/5 bg-white/3 px-4 py-3 text-sm text-white placeholder:text-zinc-500 transition duration-200 focus:outline-none focus:ring-2 focus:ring-white/20"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-400">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full resize-none rounded-xl border border-white/5 bg-white/3 px-4 py-3 text-sm text-white placeholder:text-zinc-500 transition duration-200 focus:outline-none focus:ring-2 focus:ring-white/20"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-white/90 py-3 text-sm font-semibold text-black transition duration-200 hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 hover:shadow-[0_10px_40px_rgba(255,255,255,0.2)]"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
