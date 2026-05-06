"use client";

import type React from "react";
import { useState } from "react";
import type { Variants } from "framer-motion";
import { sendEmail } from "@/app/actions/send-email";
import { HeroSection } from "@/components/home/hero-section";
import { ScrollTextSection } from "@/components/home/scroll-text-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { SkillsPreviewSection } from "@/components/home/skills-preview-section";
import { ContactSection } from "@/components/home/contact-section";
import { FooterSection } from "@/components/home/footer-section";

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

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

type FormStatus = "idle" | "success" | "error";

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
    <div className="relative min-h-screen bg-transparent">
      <HeroSection fadeInUp={fadeInUp} staggerContainer={staggerContainer} />
      <ScrollTextSection />
      <ProjectsSection
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
        projects={featuredProjects}
      />
      <SkillsPreviewSection
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
      />
      <ContactSection
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
        formData={formData}
        setFormData={setFormData}
        isSubmitting={isSubmitting}
        formStatus={formStatus}
        handleSubmit={handleSubmit}
      />
      <FooterSection />
    </div>
  );
}
