"use client";

import { ScrollText } from "@/components/home/scroll-text";

export function ScrollTextSection() {
  return (
    <section className="relative px-6 py-40 lg:py-52">
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
  );
}
