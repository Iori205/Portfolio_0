"use client";

import { GalaxyNavigation } from "@/components/galaxy-navigation";
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
    <div className="relative min-h-screen">
      <GalaxyNavigation />

      <div className="relative z-10 px-6 pb-20 pt-32">
        <Link
          href="/"
          className="fixed left-6 top-24 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-xl transition-all hover:border-primary/30 hover:bg-primary/10"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>

        <div className="mx-auto max-w-4xl space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Get in Touch
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Connect With Me
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground">
              Find me on social media or download my resume
            </p>
            <div className="accent-line w-20" />
          </motion.div>

          {/* Resume Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card hover-glow overflow-hidden rounded-2xl p-8"
          >
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
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
                className="group flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-lg font-medium text-foreground">Follow Me</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="glass-card hover-glow group flex items-center gap-4 rounded-xl p-5 transition-all"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all group-hover:border-primary/30 group-hover:bg-primary/10">
                    <social.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground transition-colors group-hover:text-primary">
                      {social.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {social.description}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="glass-card hover-glow rounded-2xl p-8 text-center"
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
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              sodoos534@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
