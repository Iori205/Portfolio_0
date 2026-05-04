"use client";

import type React from "react";
import { ProjectCard } from "@/components/project-card";
import { ArrowUpRight, Check, AlertCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { sendEmail } from "@/app/actions/send-email";

const featuredProjects = [
  {
    title: "Unifind",
    description:
      "Full-stack platform using React, Next.js, and Node.js with authentication and role-based access control.",
    category: "Full-Stack",
    tags: ["React", "Next.js", "Node.js", "RBAC"],
    link: "https://unifind-ruddy.vercel.app/",
    image: "/project-unifind.jpg",
  },
  {
    title: "UniExam",
    description:
      "Scalable backend services using REST APIs, AWS SQS, and Redis caching for improved processing speed.",
    category: "Backend",
    tags: ["REST API", "AWS SQS", "Upstash Redis"],
    link: "#",
    image: "/project-uniexam.jpg",
  },
  {
    title: "ReferU",
    description:
      "Backend and REST API services for referral management with Node.js, Express, and PostgreSQL.",
    category: "Backend",
    tags: ["Node.js", "Express", "PostgreSQL"],
    link: "#",
    image: "/project-referu.jpg",
  },
];



// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

type FormStatus = "idle" | "success" | "error";

// Scroll-based text reveal component
function ScrollText({ children, className }: { children: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.4"]
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.15, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [20, 0]);

  return (
    <motion.span
      ref={ref}
      style={{ opacity, y }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("idle");
    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Form error:", error);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-subtle">
      {/* ── HERO ── */}
      <section className="relative min-h-screen overflow-hidden px-6 pt-40 pb-32 lg:pt-48 lg:pb-40">
        {/* Hero spotlight lighting */}
        <div className="pointer-events-none absolute inset-0 hero-lighting" />
        
        {/* Noise texture for subtle grain */}
        <div className="pointer-events-none absolute inset-0 noise-overlay" />
        
        {/* Subtle grid pattern */}
        <div className="pointer-events-none absolute inset-0 grid-pattern" />
        
        {/* Floating orbs for depth - layered */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Large ambient orbs - background layer */}
          <div className="floating-orb floating-orb-4 absolute -left-[20%] top-[10%]" />
          <div className="floating-orb floating-orb-4 absolute -right-[15%] top-[60%]" />
          
          {/* Medium orbs - mid layer */}
          <div className="floating-orb floating-orb-1 absolute -left-32 top-[20%]" />
          <div className="floating-orb floating-orb-2 absolute -right-24 top-[25%]" />
          <div className="floating-orb floating-orb-3 absolute bottom-[20%] left-1/2 -translate-x-1/2" />
          
          {/* Small accent orbs - foreground layer */}
          <div className="floating-orb floating-orb-5 absolute left-[10%] bottom-[35%]" />
          <div className="floating-orb floating-orb-5 absolute right-[15%] top-[45%]" />
        </div>
        
        {/* Floating project cards - decorative */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Left side cards */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="floating-card absolute left-[2%] top-[18%] hidden w-56 rotate-[-6deg] overflow-hidden rounded-2xl bg-card shadow-2xl lg:block xl:left-[5%]"
            style={{ "--rotate": "-6deg" } as React.CSSProperties}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-red-500/90 to-red-600/90 p-4">
              <div className="flex h-full flex-col justify-end">
                <p className="text-xs font-medium text-white/80">Venture capital for</p>
                <p className="text-sm font-semibold text-white">the <span className="text-orange-200">human</span> future.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="floating-card absolute bottom-[20%] left-[3%] hidden w-48 rotate-[3deg] overflow-hidden rounded-2xl bg-card shadow-2xl lg:block xl:left-[8%]"
            style={{ "--rotate": "3deg", animationDelay: "3s" } as React.CSSProperties}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 p-4">
              <p className="font-mono text-lg font-bold tracking-tight text-white">INTELLIGENCE AT</p>
              <p className="font-mono text-lg font-bold tracking-tight text-amber-400">YOUR FINGERTIPS</p>
            </div>
          </motion.div>

          {/* Right side cards */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="floating-card absolute right-[2%] top-[15%] hidden w-52 rotate-[5deg] overflow-hidden rounded-2xl bg-card shadow-2xl lg:block xl:right-[5%]"
            style={{ "--rotate": "5deg", animationDelay: "2s" } as React.CSSProperties}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-600 to-purple-700 p-4">
              <p className="text-xl font-bold uppercase tracking-wider text-white">BOSTON</p>
              <p className="text-xl font-bold uppercase tracking-wider text-white">HURRICANES</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="floating-card absolute bottom-[25%] right-[3%] hidden w-44 rotate-[-4deg] overflow-hidden rounded-2xl bg-card shadow-2xl lg:block xl:right-[8%]"
            style={{ "--rotate": "-4deg", animationDelay: "4s" } as React.CSSProperties}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-200 p-4">
              <p className="text-xs font-medium text-orange-800">Your health is your</p>
              <p className="text-sm font-semibold text-orange-900">power.</p>
            </div>
          </motion.div>

          {/* Additional floating decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1.5, delay: 1.3 }}
            className="absolute left-[15%] top-[45%] hidden h-3 w-3 rounded-full bg-primary/40 lg:block"
            style={{ animationDelay: "1s" }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="absolute right-[18%] top-[60%] hidden h-2 w-2 rounded-full bg-primary/30 lg:block"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1.5, delay: 1.7 }}
            className="absolute left-[20%] bottom-[30%] hidden h-4 w-4 rounded-full border border-primary/20 lg:block"
          />
        </div>

        {/* Main hero content */}
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-sm font-medium text-primary">
                Available June 2026
              </span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1 
              variants={fadeInUp}
              className="mx-auto max-w-3xl text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            >
              I build modern web applications that{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                scale with your business
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="mx-auto mt-10 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              Full-stack developer specializing in React, Next.js, and Node.js. 
              Code that solves real problems.
            </motion.p>

            {/* CTA */}
            <motion.div 
              variants={fadeInUp}
              className="mt-12 flex flex-wrap items-center justify-center gap-4"
            >
              <Link href="/contact">
                <button className="cta-button flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium">
                  Get in touch
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SCROLL TEXT SECTION ── */}
      <section className="relative py-40 px-6 lg:py-52">
        {/* Ambient lighting for scroll section */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-primary/[0.03] via-transparent to-transparent blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-3xl font-medium leading-relaxed tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            <ScrollText>Building scalable web applications </ScrollText>
            <ScrollText>from concept to deployment, </ScrollText>
            <ScrollText className="text-muted-foreground">using modern frameworks </ScrollText>
            <ScrollText className="text-muted-foreground">so you can launch faster </ScrollText>
            <ScrollText className="text-muted-foreground">and iterate with confidence.</ScrollText>
          </p>
        </div>
      </section>

      {/* ── PROJECTS SECTION ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="relative px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          {/* Section header */}
          <motion.div 
            variants={fadeInUp}
            className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
          >
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Selected Projects
                <sup className="ml-1 text-lg text-muted-foreground">({featuredProjects.length})</sup>
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

          {/* Project cards - Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── SKILLS PREVIEW ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="relative px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} className="premium-card rounded-3xl p-10 md:p-16">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    Technical Stack
                  </span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Tools I work with
                </h2>
                <p className="max-w-md text-muted-foreground">
                  React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, and more.
                </p>
              </div>
              <Link href="/skills">
                <button className="rounded-full border border-foreground/20 bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-foreground hover:text-background">
                  View full stack
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ── CONTACT ── */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="relative px-6 py-20 pb-32"
      >
        <div className="mx-auto max-w-4xl">
          <motion.div 
            variants={fadeInUp}
            className="premium-card overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16"
          >
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              {/* LEFT SIDE */}
              <div className="space-y-6">
                <span className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  Contact
                </span>
                <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
                  Let&apos;s build something great together
                </h2>
                <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
                  Open to new opportunities and collaborations. 
                  Drop me a message and I&apos;ll get back to you within 24 hours.
                </p>
              </div>

              {/* RIGHT SIDE (FORM) */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full resize-none rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cta-button w-full rounded-xl py-4 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>

                {/* Inline toast feedback */}
                {formStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
                  >
                    <Check className="h-4 w-4" />
                    <span>Message sent! I&apos;ll get back to you within 24 hours.</span>
                  </motion.div>
                )}
                {formStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
                  >
                    <AlertCircle className="h-4 w-4" />
                    <span>Something went wrong. Please email me directly.</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ── FOOTER ── */}
      <footer className="relative overflow-hidden px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="section-divider mb-12" />
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Baatar-Ochir Sodbilegt 2026
            </p>
            <div className="flex items-center gap-6">
              <Link 
                href="https://github.com/Iori205" 
                target="_blank"
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                GitHub
              </Link>
              <Link 
                href="https://linkedin.com" 
                target="_blank"
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                LinkedIn
              </Link>
              <Link 
                href="mailto:sodoos534@gmail.com"
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Email
              </Link>
            </div>
          </div>
        </div>
        
        {/* Large watermark text - like WenLaunch */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex justify-center overflow-hidden">
          <span className="footer-watermark translate-y-1/3">
            Baatar
          </span>
        </div>
      </footer>
    </div>
  );
}
