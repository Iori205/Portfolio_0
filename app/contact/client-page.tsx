"use client";

import {
  ArrowLeft,
  Linkedin,
  Github,
  Mail,
  Download,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "#",
    description: "Professional network",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/iori205",
    description: "Code & projects",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:sodoos534@gmail.com",
    description: "Direct contact",
  },
];

export default function ClientInfoPage() {
  return (
    <div className="relative min-h-screen bg-gradient-subtle">
      <div className="relative z-10 px-6 pb-20 pt-32">
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
          className="mx-auto max-w-4xl space-y-12"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <span className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Get in Touch
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Connect With Me
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground">
              Find me on social media or download my resume
            </p>
          </motion.div>

          {/* Resume Download */}
          <motion.div
            variants={fadeInUp}
            className="premium-card overflow-hidden rounded-2xl p-8"
          >
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                <Download className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1 space-y-2">
                <h2 className="text-xl font-semibold text-foreground">
                  Download My Resume
                </h2>
                <p className="text-sm text-muted-foreground">
                  A concise overview of my experience, projects, and technical
                  skills.
                </p>
              </div>
              <a
                href="/Sodbilegt.pdf"
                download="Sodbilegt.pdf"
                className="cta-button flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-lg font-medium text-foreground">Follow Me</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  className="premium-card group flex items-center gap-4 rounded-xl p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-all duration-300 group-hover:bg-primary/10">
                    <social.icon className="h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
                      {social.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {social.description}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            variants={fadeInUp}
            className="premium-card rounded-2xl p-8 text-center"
          >
            <h2 className="text-xl font-semibold text-foreground">
              Want to work together?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
              I&apos;m currently open to opportunities where I can build
              real-world products, contribute to impactful teams, and grow as a
              full-stack developer.
            </p>
            <a
              href="mailto:sodoos534@gmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              <Mail className="h-4 w-4" />
              sodoos534@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
