"use client";

import Link from "next/link";

export function FooterSection() {
  return (
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

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex justify-center overflow-hidden">
        <span className="footer-watermark translate-y-1/3">Baatar</span>
      </div>
    </footer>
  );
}
