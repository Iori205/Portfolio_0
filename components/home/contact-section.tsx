"use client";

import type React from "react";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { AlertCircle, Check } from "lucide-react";

type FormStatus = "idle" | "success" | "error";

type ContactSectionProps = {
  fadeInUp: Variants;
  staggerContainer: Variants;
  formData: { name: string; email: string; message: string };
  setFormData: React.Dispatch<React.SetStateAction<{ name: string; email: string; message: string }>>;
  isSubmitting: boolean;
  formStatus: FormStatus;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
};

export function ContactSection({
  fadeInUp,
  staggerContainer,
  formData,
  setFormData,
  isSubmitting,
  formStatus,
  handleSubmit,
}: ContactSectionProps) {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative px-6 pb-32 py-20"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div variants={fadeInUp} className="premium-card overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <span className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
                Contact
              </span>
              <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
                Let&apos;s build something great together
              </h2>
              <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
                Open to new opportunities and collaborations. Drop me a message and I&apos;ll get back to you within 24
                hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
  );
}
